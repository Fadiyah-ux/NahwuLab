import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { askNahwuAi, analyzeArabicSentence } from '../services/api';
import { ChatMessageItem, SentenceAnalysisResult } from '../types';
import { db } from '../firebase/config';
import { collection, query, orderBy, limit, getDocs, addDoc } from 'firebase/firestore';
import {
  getJakartaDateKey,
  getJakartaDateLabel,
  formatJakartaTime,
} from '../utils/chatDate';
import {
  Send,
  Bot,
  User,
  Copy,
  Check,
  Layers,
  Info,
  Clock,
  Calendar,
  MessageSquare,
  MessageSquarePlus,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

const WELCOME_CONTENT = `Assalamu'alaikum!🙏🏻

أهلاً وسهلاً!

Mau berbincang soal Nahwu, Sharaf, atau bahasa Arab? Tanyakan apa saja, Musyrif siap menemani belajarmu! 📚`;

const STORAGE_KEY_SENTENCE = 'nahwulab_tarkib_input';
const STORAGE_KEY_ANALYZED_SENTENCE = 'nahwulab_tarkib_analyzed_sentence';
const STORAGE_KEY_RESULT = 'nahwulab_tarkib_result';
const STORAGE_KEY_SUBMODE = 'nahwulab_chat_submode';

interface ChatSessionGroup {
  dateKey: string;
  label: string;
  messages: ChatMessageItem[];
  firstQuery: string;
  lastTime: string;
}

export const ChatTab: React.FC = () => {
  const { userProfile, recordActivity } = useAuth();

  // Submode: 'chat' | 'breakdown'
  const [mode, setMode] = useState<'chat' | 'breakdown'>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY_SUBMODE);
      if (saved === 'chat' || saved === 'breakdown') return saved;
    } catch {}
    return 'chat';
  });

  // Persistent all messages for the current user
  const [allMessages, setAllMessages] = useState<ChatMessageItem[]>([]);
  // selectedDateKey: null means today's active conversation
  const [selectedDateKey, setSelectedDateKey] = useState<string | null>(null);

  const [inputMessage, setInputMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<'nahwu' | 'shorof' | 'irab' | 'umum'>('umum');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Sentence breakdown state with session persistence
  const [customSentence, setCustomSentence] = useState<string>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY_SENTENCE) || '';
    } catch {}
    return '';
  });
  const [analyzedSentence, setAnalyzedSentence] = useState<string>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY_ANALYZED_SENTENCE) || '';
    } catch {}
    return '';
  });
  const [analysisResult, setAnalysisResult] = useState<SentenceAnalysisResult | null>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY_RESULT);
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  const todayKey = getJakartaDateKey();

  // Load chat messages from localStorage cache, then sync from Firestore
  useEffect(() => {
    if (!userProfile?.uid) return;

    const cacheKey = `nahwulab_chats_${userProfile.uid}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) {
          setAllMessages(parsed);
        }
      }
    } catch (e) {
      console.warn('Failed to read local chat cache:', e);
    }

    const fetchFirestoreChats = async () => {
      try {
        const chatsCol = collection(db, 'users', userProfile.uid, 'chats');
        const q = query(chatsCol, orderBy('timestamp', 'asc'), limit(500));
        const snap = await getDocs(q);
        if (!snap.empty) {
          const cloudMsgs: ChatMessageItem[] = snap.docs.map((d) => {
            const data = d.data();
            return {
              id: data.id || d.id,
              userId: data.userId || userProfile.uid,
              role: data.role as 'user' | 'assistant',
              content: data.content,
              topic: data.topic || 'umum',
              timestamp: data.timestamp || new Date().toISOString(),
            };
          });

          setAllMessages((prev) => {
            const existingIds = new Set(cloudMsgs.map((m) => m.id));
            const localOnly = prev.filter((m) => !existingIds.has(m.id));
            const merged = [...cloudMsgs, ...localOnly].sort(
              (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
            );
            try {
              localStorage.setItem(cacheKey, JSON.stringify(merged));
            } catch {}
            return merged;
          });
        }
      } catch (err) {
        console.warn('Firestore fetch chats error (using local cache):', err);
      }
    };

    fetchFirestoreChats();
  }, [userProfile?.uid]);

  // Group messages into date sessions based on Asia/Jakarta calendar day
  const chatSessions = useMemo(() => {
    const groups = new Map<string, ChatMessageItem[]>();

    allMessages.forEach((msg) => {
      const dKey = getJakartaDateKey(msg.timestamp);
      if (!groups.has(dKey)) {
        groups.set(dKey, []);
      }
      groups.get(dKey)!.push(msg);
    });

    const sortedKeys = Array.from(groups.keys()).sort((a, b) => b.localeCompare(a));

    return sortedKeys.map((dKey) => {
      const msgs = groups.get(dKey)!;
      const firstUserMsg = msgs.find((m) => m.role === 'user' || (m as any).sender === 'user');
      const rawQuery = firstUserMsg
        ? (firstUserMsg.content || (firstUserMsg as any).text)
        : (msgs[0]?.content || (msgs[0] as any)?.text || 'Percakapan Bahasa Arab');
      const firstQuery = rawQuery || 'Percakapan Bahasa Arab';
      const lastTime = msgs[msgs.length - 1]?.timestamp || '';

      return {
        dateKey: dKey,
        label: getJakartaDateLabel(dKey),
        messages: msgs,
        firstQuery,
        lastTime,
      } as ChatSessionGroup;
    });
  }, [allMessages]);

  const isViewingHistory = selectedDateKey !== null && selectedDateKey !== todayKey;

  // Messages to display in the main chat room
  const displayedMessages: ChatMessageItem[] = useMemo(() => {
    if (isViewingHistory && selectedDateKey) {
      return allMessages.filter((m) => getJakartaDateKey(m.timestamp) === selectedDateKey);
    }

    // Active room for today
    const todayMsgs = allMessages.filter((m) => getJakartaDateKey(m.timestamp) === todayKey);
    if (todayMsgs.length === 0) {
      // Show welcoming greeting when user has not started conversation today
      return [
        {
          id: 'welcome_today',
          userId: 'assistant',
          role: 'assistant',
          content: WELCOME_CONTENT,
          timestamp: new Date().toISOString(),
        },
      ];
    }
    return todayMsgs;
  }, [allMessages, selectedDateKey, todayKey, isViewingHistory]);

  useEffect(() => {
    if (displayedMessages.length > 1 || isLoading) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [displayedMessages.length, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    // If user was viewing past history, switch back to today's active conversation
    if (isViewingHistory) {
      setSelectedDateKey(null);
    }

    const userMsg: ChatMessageItem = {
      id: 'usr_' + Date.now(),
      userId: userProfile?.uid || 'guest',
      role: 'user',
      content: textToSend.trim(),
      topic: selectedTopic,
      timestamp: new Date().toISOString(),
    };

    const updatedWithUser = [...allMessages, userMsg];
    setAllMessages(updatedWithUser);
    if (!customPrompt) setInputMessage('');
    setIsLoading(true);

    if (userProfile?.uid) {
      try {
        localStorage.setItem(`nahwulab_chats_${userProfile.uid}`, JSON.stringify(updatedWithUser));
      } catch {}
    }

    try {
      recordActivity('chat');

      // Filter today's messages for context history
      const todayContext = updatedWithUser
        .filter((m) => getJakartaDateKey(m.timestamp) === todayKey)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const replyText = await askNahwuAi(textToSend, todayContext, selectedTopic);

      const aiMsg: ChatMessageItem = {
        id: 'ai_' + Date.now(),
        userId: userProfile?.uid || 'guest',
        role: 'assistant',
        content: replyText,
        topic: selectedTopic,
        timestamp: new Date().toISOString(),
      };

      const finalUpdated = [...updatedWithUser, aiMsg];
      setAllMessages(finalUpdated);

      if (userProfile?.uid) {
        try {
          localStorage.setItem(`nahwulab_chats_${userProfile.uid}`, JSON.stringify(finalUpdated));
        } catch {}

        try {
          const chatsCol = collection(db, 'users', userProfile.uid, 'chats');
          await addDoc(chatsCol, {
            id: userMsg.id,
            userId: userProfile.uid,
            role: userMsg.role,
            content: userMsg.content,
            topic: userMsg.topic || 'umum',
            timestamp: userMsg.timestamp,
          });
          await addDoc(chatsCol, {
            id: aiMsg.id,
            userId: userProfile.uid,
            role: aiMsg.role,
            content: aiMsg.content,
            topic: aiMsg.topic || 'umum',
            timestamp: aiMsg.timestamp,
          });
        } catch (e) {
          console.warn('Could not persist chat in firestore:', e);
        }
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessageItem = {
        id: 'err_' + Date.now(),
        userId: userProfile?.uid || 'guest',
        role: 'assistant',
        content: 'Maaf, terjadi kendala saat menghubungkan dengan AI Nahwu. Silakan periksa koneksi dan coba beberapa saat lagi.',
        timestamp: new Date().toISOString(),
      };
      setAllMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModeChange = (newMode: 'chat' | 'breakdown') => {
    setMode(newMode);
    try {
      sessionStorage.setItem(STORAGE_KEY_SUBMODE, newMode);
    } catch {}
  };

  const handleSentenceInputChange = (val: string) => {
    setCustomSentence(val);
    try {
      sessionStorage.setItem(STORAGE_KEY_SENTENCE, val);
    } catch {}
    if (analysisError) setAnalysisError(null);
  };

  const handleRunAnalysis = async () => {
    const target = customSentence.trim();
    if (!target) {
      setAnalysisError('Silakan masukkan kalimat bahasa Arab terlebih dahulu.');
      return;
    }
    if (analyzing) return;

    setAnalyzing(true);
    setAnalysisError(null);
    recordActivity('chat');

    try {
      const res = await analyzeArabicSentence(target);
      setAnalysisResult(res);
      setAnalyzedSentence(target);
      try {
        sessionStorage.setItem(STORAGE_KEY_RESULT, JSON.stringify(res));
        sessionStorage.setItem(STORAGE_KEY_ANALYZED_SENTENCE, target);
        sessionStorage.setItem(STORAGE_KEY_SENTENCE, target);
      } catch {}
    } catch (err: any) {
      console.error('Analysis failed:', err);
      setAnalysisError(
        err?.message || 'Gagal membedah kalimat baru. Hasil analisis sebelumnya tetap dipertahankan.'
      );
    } finally {
      setAnalyzing(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Banner / Mode Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 border border-emerald-600/30 p-6 sm:p-7 rounded-3xl text-white shadow-lg shadow-emerald-950/15 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-md text-white border border-white/20 mb-2 shadow-2xs">
            <span>✨ Laboratorium Nahwu &amp; Sharaf Interaktif</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Konsultasi &amp; Bedah I&apos;rab Digital
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 mt-1 max-w-xl font-medium">
            Tanyakan persoalan gramatika dan morfologi Arab atau bedah susunan tarkib kalimat secara otomatis kata demi kata.
          </p>
        </div>

        {/* Mode Toggle Buttons */}
        <div className="flex items-center bg-black/20 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 shrink-0">
          <button
            onClick={() => handleModeChange('chat')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              mode === 'chat'
                ? 'bg-white text-emerald-900 shadow-md'
                : 'text-emerald-100 hover:text-white hover:bg-white/10'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tanya Musyrif SmartKib</span>
          </button>
          <button
            onClick={() => handleModeChange('breakdown')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              mode === 'breakdown'
                ? 'bg-white text-emerald-900 shadow-md'
                : 'text-emerald-100 hover:text-white hover:bg-white/10'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Bedah Kalimat (Tarkib)</span>
          </button>
        </div>
      </div>

      {mode === 'chat' ? (
        /* CHAT VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Chat Box */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-emerald-100 shadow-sm flex flex-col h-[700px] overflow-hidden">
            {/* Chat Header */}
            <div className="px-6 py-4 bg-emerald-50/60 border-b border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 border border-emerald-500/30 p-1.5 flex items-center justify-center shadow-xs">
                    <img
                      src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
                      alt="Musyrif SmartKib"
                      className="w-full h-full object-contain filter drop-shadow-xs"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"></span>
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-800">Tanya Musyrif SmartKib</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <span>Aktif &amp; Berpedoman pada 6 Kitab Turats Mu&apos;tamad</span>
                  </div>
                </div>
              </div>

              {/* Topic Filter */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-slate-500 font-bold hidden sm:inline">Fokus:</span>
                <select
                  value={selectedTopic}
                  onChange={(e: any) => setSelectedTopic(e.target.value)}
                  className="bg-white border border-emerald-200 text-slate-800 text-xs rounded-xl px-2.5 py-1.5 font-bold focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="umum">Umum (Nahwu &amp; Shorof)</option>
                  <option value="nahwu">Ilmu Nahwu (Tarkib)</option>
                  <option value="shorof">Ilmu Shorof (Wazan &amp; Tashrif)</option>
                  <option value="irab">Kajian I&apos;rab Khusus</option>
                </select>
              </div>
            </div>

            {/* Viewing History Top Alert Banner */}
            {isViewingHistory && selectedDateKey && (
              <div className="px-5 py-3 bg-emerald-50 border-b border-emerald-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="text-xs text-slate-800 font-semibold truncate">
                    Melihat Riwayat Percakapan:{' '}
                    <strong className="font-bold text-emerald-700">
                      {getJakartaDateLabel(selectedDateKey)}
                    </strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDateKey(null)}
                  className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 shadow-xs cursor-pointer shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali ke Chat Hari Ini</span>
                </button>
              </div>
            )}

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#F8FAF9]">
              {displayedMessages.map((msg) => {
                const isAi = msg.role === 'assistant' || (msg as any).sender === 'ai' || (msg as any).role === 'model';
                const messageText = msg.content || (msg as any).text || '';
                const isWelcomeCard = msg.id === 'welcome_today';

                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 sm:gap-4 ${isAi ? 'justify-start' : 'justify-end'}`}
                  >
                    {isAi && (
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-800 p-1.5 border border-emerald-500/40 shadow-xs shrink-0 self-start flex items-center justify-center">
                        <img
                          src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
                          alt="Musyrif Avatar"
                          className="w-full h-full object-contain filter drop-shadow-sm"
                        />
                      </div>
                    )}

                    <div
                      className={`relative max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 sm:p-5 shadow-xs bg-white ${
                        isAi
                          ? 'border border-slate-200 text-slate-800'
                          : 'border-2 border-emerald-500 text-slate-800 font-medium'
                      }`}
                    >
                      {/* Copy Button for AI */}
                      {isAi && !isWelcomeCard && (
                        <button
                          onClick={() => copyToClipboard(messageText, msg.id)}
                          className="absolute top-3 right-3 p-1.5 rounded-lg text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                          title="Salin jawaban"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}

                      {/* Clean Content without raw markdown and with Rujukan Card */}
                      <div className="leading-relaxed font-sans text-slate-800">
                        {(() => {
                          const rujukanRegex = /(?:^|\n)(?:Rujukan|Sumber Rujukan):\s*([\s\S]*)$/i;
                          const match = (messageText as string).match(rujukanRegex);
                          const mainContent = match ? (messageText as string).replace(rujukanRegex, '').trim() : messageText;
                          const rujukanContent = match ? match[1].trim() : null;

                          return (
                            <div className="space-y-2">
                              {((mainContent as string) || '').split('\n').map((rawLine: string, idx: number) => {
                                const line = rawLine
                                  .replace(/^###+\s*/, '')
                                  .replace(/\*\*(.*?)\*\*/g, '$1')
                                  .replace(/\*(.*?)\*/g, '$1')
                                  .trim();

                                if (!line) return <div key={idx} className="h-1" />;

                                const isArabic = /[\u0600-\u06FF]/.test(line);
                                const isBoldOrNumber = /^[0-9]+\.\s+/.test(line) || rawLine.startsWith('**') || rawLine.startsWith('###');

                                return (
                                  <p
                                    key={idx}
                                    className={`${
                                      isArabic
                                        ? 'font-serif text-xl sm:text-2xl leading-loose text-emerald-950 font-bold py-1'
                                        : isBoldOrNumber
                                        ? 'font-bold text-slate-900 text-sm'
                                        : 'text-slate-700 text-sm font-normal'
                                    }`}
                                  >
                                    {line}
                                  </p>
                                );
                              })}

                              {rujukanContent && (
                                <div className="mt-3 pt-2.5 border-t border-emerald-100 flex items-start gap-2.5 bg-emerald-50/80 p-3 rounded-xl border border-emerald-200/80 shadow-2xs">
                                  <BookOpen className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                  <div className="text-xs">
                                    <span className="font-bold text-emerald-800 block text-[10px] uppercase tracking-wider">
                                      Sumber Rujukan Kitab:
                                    </span>
                                    <span className="font-medium text-emerald-950 whitespace-pre-line leading-relaxed">
                                      {rujukanContent}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })()}
                      </div>

                      <div className="text-[10px] mt-2 text-right font-medium text-slate-400">
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>

                    {!isAi && (
                      <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-xs border border-emerald-500">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Simplified generic loading indicator */}
              {isLoading && (
                <div className="flex gap-3 justify-start items-center">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-800 p-1.5 border border-emerald-500/40 shadow-xs shrink-0 flex items-center justify-center">
                    <img
                      src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
                      alt="Musyrif Loading"
                      className="w-full h-full object-contain animate-pulse"
                    />
                  </div>
                  <div className="bg-white border border-emerald-100 rounded-2xl px-5 py-4 shadow-xs flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-bounce"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Box Form / History Footer */}
            <div className="p-4 bg-white border-t border-emerald-100">
              {isViewingHistory ? (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200">
                  <span className="text-xs text-slate-700 font-semibold text-center sm:text-left">
                    Anda sedang melihat riwayat percakapan lampau (
                    <strong className="text-emerald-800">{getJakartaDateLabel(selectedDateKey)}</strong>).
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedDateKey(null)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                  >
                    <MessageSquarePlus className="w-4 h-4" />
                    <span>Kembali ke Chat Hari Ini untuk Bertanya</span>
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Tanyakan persoalan Nahwu, Shorof, atau ketik kalimat Arab..."
                    className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isLoading}
                    className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm shadow-emerald-700/20 transition-all flex items-center gap-2 disabled:opacity-50 active:translate-y-0.5 cursor-pointer"
                  >
                    <span>Kirim</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Riwayat Chat Panel & Info Guide */}
          <div className="lg:col-span-4 space-y-5">
            {/* Riwayat Chat Panel */}
            <div className="bg-white rounded-3xl p-5 border border-emerald-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200 shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>Riwayat Chat</span>
                </div>
                {selectedDateKey ? (
                  <button
                    type="button"
                    onClick={() => setSelectedDateKey(null)}
                    className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-200 transition-colors shadow-2xs"
                  >
                    <MessageSquarePlus className="w-3.5 h-3.5" />
                    <span>Chat Hari Ini</span>
                  </button>
                ) : (
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
                    Arsip Harian
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-500 mb-4 font-medium">
                Daftar arsip percakapan harian Anda bersama Musyrif SmartKib:
              </p>

              {chatSessions.length === 0 ? (
                <div className="text-center py-8 px-4 rounded-2xl bg-slate-50/80 border-2 border-dashed border-emerald-200">
                  <MessageSquare className="w-8 h-8 text-emerald-600/50 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-800">Belum Ada Riwayat Chat</p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    Pertanyaan yang Anda ajukan kepada Musyrif akan otomatis diarsipkan di sini per hari.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                  {chatSessions.map((session) => {
                    const isCurrentToday = session.dateKey === todayKey;
                    const isSelected = selectedDateKey
                      ? selectedDateKey === session.dateKey
                      : isCurrentToday;

                    return (
                      <button
                        key={session.dateKey}
                        type="button"
                        onClick={() => setSelectedDateKey(session.dateKey)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer group ${
                          isSelected
                            ? 'bg-emerald-50/90 border-emerald-400 shadow-xs ring-2 ring-emerald-300/40'
                            : 'bg-white hover:bg-emerald-50/40 border-slate-200 shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                            <span className="text-xs font-bold text-slate-800">
                              {session.label}
                            </span>
                            {isCurrentToday ? (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-2xs">
                                Aktif
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                                Tersimpan
                              </span>
                            )}
                          </div>
                          {session.lastTime && (
                            <span className="text-[10px] text-emerald-700 font-semibold">
                              {formatJakartaTime(session.lastTime)}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
                          {session.firstQuery}
                        </p>
                        <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-emerald-100 font-semibold">
                          <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium text-[10px] border border-slate-200">
                            {session.messages.length} pesan
                          </span>
                          <span className="text-emerald-700 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                            <span>{isSelected ? 'Sedang Dibuka' : 'Buka'}</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Guide Card (Karakteristik Percakapan Harian) */}
            <div className="bg-white rounded-3xl p-5 border border-emerald-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                  <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200 shadow-2xs">
                    <Info className="w-4 h-4" />
                  </div>
                  <span>Karakteristik Percakapan Harian</span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  WIB Realtime
                </span>
              </div>
              <ul className="text-xs text-slate-600 space-y-2.5 leading-relaxed font-medium">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                  <span>Percakapan hari ini tersimpan otomatis dan dapat dilanjutkan sewaktu-waktu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                  <span>Saat berganti hari (WIB), room chat utama otomatis siap untuk sesi baru dan riwayat hari sebelumnya tersimpan rapi di atas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mt-1.5 shrink-0"></span>
                  <span>Klik salah satu sesi di panel <strong className="text-emerald-700">Riwayat Chat</strong> untuk membaca kembali penjelasan Musyrif tanpa memicu AI ulang.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* SENTENCE BREAKDOWN VIEW */
        <div className="space-y-6">
          {/* Sentence Input Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-emerald-100 shadow-sm">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Masukkan Kalimat Bahasa Arab untuk Dibedah
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed font-medium">
              Ketik atau tempel kalimat bahasa Arab lengkap dengan harakat untuk membedah susunan sintaksis (tarkib), kedudukan gramatikal kata, tanda i'rab, dan tinjauan morfologi (shorof) kata demi kata.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                dir="rtl"
                value={customSentence}
                onChange={(e) => handleSentenceInputChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !analyzing && customSentence.trim()) {
                    e.preventDefault();
                    handleRunAnalysis();
                  }
                }}
                placeholder="Ketik kalimat Arab di sini (misal: كَتَبَ زَيْدٌ الدَّرْسَ)..."
                className="flex-1 font-serif text-xl sm:text-2xl px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-right placeholder:text-slate-400 placeholder:text-base placeholder:font-sans transition-all"
                disabled={analyzing}
              />
              <button
                type="button"
                onClick={() => handleRunAnalysis()}
                disabled={analyzing || !customSentence.trim()}
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0"
              >
                <Layers className={`w-4 h-4 ${analyzing ? 'animate-spin' : ''}`} />
                <span>{analyzing ? 'Menganalisis...' : "Bedah I'rab Sekarang"}</span>
              </button>
            </div>
          </div>

          {/* Error Alert (Retains Previous Result) */}
          {analysisError && (
            <div className="p-4 sm:p-5 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 shadow-2xs">
              <Info className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <p className="font-bold">Kendala Pemrosesan</p>
                <p className="mt-0.5">{analysisError}</p>
                {analysisResult && (
                  <p className="mt-1.5 text-red-700 text-xs font-medium">
                    Hasil analisis sebelumnya untuk kalimat &quot;<span className="font-serif font-bold">{analysisResult.sentence}</span>&quot; tetap dipertahankan dan ditampilkan di bawah.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Loading Indicator */}
          {analyzing && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-center gap-3 animate-pulse shadow-2xs">
              <div className="w-5 h-5 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin shrink-0"></div>
              <p className="text-xs sm:text-sm font-semibold">
                Sedang membedah tarkib dan gramatika kalimat... Mohon tunggu sejenak.
              </p>
            </div>
          )}

          {/* Initial State when no analysis yet */}
          {!analysisResult && !analyzing && !analysisError && (
            <div className="bg-white rounded-3xl p-8 border-2 border-dashed border-emerald-200 text-center text-slate-500">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center mb-3 border border-emerald-200">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Belum Ada Kalimat yang Dianalisis</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto leading-relaxed font-medium">
                Silakan ketik kalimat bahasa Arab pada kolom input di atas, kemudian klik tombol <strong className="text-emerald-700">&quot;Bedah I&apos;rab Sekarang&quot;</strong> untuk memulai telaah gramatikal.
              </p>
            </div>
          )}

          {/* Analysis Output Section */}
          {analysisResult && (
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-emerald-100 shadow-sm space-y-6">
              {/* Notice if user changed input but hasn't clicked analyze */}
              {customSentence.trim() && analyzedSentence && customSentence.trim() !== analyzedSentence && (
                <div className="px-4 py-2.5 rounded-2xl bg-emerald-50/70 text-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1 border border-emerald-200 font-semibold">
                  <span>
                    Menampilkan hasil analisis untuk: <strong className="font-serif text-emerald-700 text-base">{analysisResult.sentence}</strong>
                  </span>
                  <span className="text-emerald-800 text-[11px] font-bold">
                    Tekan tombol &quot;Bedah I&apos;rab Sekarang&quot; untuk memproses kalimat baru yang sedang diketik
                  </span>
                </div>
              )}

              {/* Top Summary Banner */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-50/90 to-teal-50/50 border border-emerald-200/80">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Struktur Sintaksis Umum
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">
                    {analysisResult.overallGrammar || 'Jumlah Kalimat Mufidah'}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 italic font-medium">
                    "{analysisResult.translation}"
                  </p>
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800 text-right dir-rtl">
                  {analysisResult.sentence}
                </div>
              </div>

              {/* Word by Word Cards & Table */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span>Rincian Gramatikal Kata Demi Kata (Tarkib & Shorof)</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                    {analysisResult.words?.length || 0} Kata
                  </span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {analysisResult.words?.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-emerald-100/90 bg-white hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Word Heading */}
                        <div className="flex items-center justify-between border-b border-emerald-100 pb-3 mb-3">
                          <span className="text-xs font-semibold text-slate-500">Kata #{idx + 1}</span>
                          <span className="font-serif text-3xl font-bold text-emerald-800">
                            {item.word}
                          </span>
                        </div>

                        {/* Badges for Type & Case */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200">
                            {item.type}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {item.irabCase}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="space-y-2 text-xs">
                          <div>
                            <span className="text-slate-500 block font-medium">Kedudukan (Tarkib):</span>
                            <span className="font-bold text-slate-900">{item.position}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block font-medium">Tanda I'rab:</span>
                            <span className="font-semibold text-slate-900">{item.marker}</span>
                          </div>
                          {item.morphology && (
                            <div>
                              <span className="text-slate-500 block font-medium">Tinjauan Shorof:</span>
                              <span className="font-bold text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded-lg border border-emerald-200 inline-block mt-0.5">
                                {item.morphology}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Explanation */}
                      <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed font-normal">
                        <span className="font-bold text-slate-800">Kaidah: </span>
                        {item.explanation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kitab Turats Reference Card */}
              {analysisResult.kitabReference && (
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-slate-800 flex items-start gap-3 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Rujukan Kitab Turats Mu'tamad
                    </h5>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                      {analysisResult.kitabReference}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
