import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { askNahwuAi, analyzeArabicSentence } from '../services/api';
import { ChatMessageItem, SentenceAnalysisResult } from '../types';
import { db } from '../firebase/config';
import { collection, query, orderBy, limit, getDocs, addDoc } from 'firebase/firestore';
import {
  Send,
  Bot,
  User,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react';

const QUICK_PROMPTS = [
  {
    topic: 'umum',
    label: "Contoh Kalimat Fi'il Madhi",
    prompt: "Berikan 3 contoh kalimat bahasa Arab yang menggunakan Fi'il Madhi beserta harakat dan terjemahannya!",
  },
  {
    topic: 'irab',
    label: "I'rab: جَاءَ زَيْدٌ عَالِمًا",
    prompt: "Tolong i'rab secara lengkap kalimat ini kata demi kata: جَاءَ زَيْدٌ عَالِمًا",
  },
  {
    topic: 'nahwu',
    label: "Fa'il vs Na'ibul Fa'il",
    prompt: "Apa perbedaan mendasar antara Fa'il dan Na'ibul Fa'il? Berikan contoh perbandingannya.",
  },
  {
    topic: 'nahwu',
    label: "Pengertian Isim & Cirinya",
    prompt: "Apa pengertian Isim dalam bahasa Arab dan sebutkan ciri-ciri tanda pengenalnya?",
  },
  {
    topic: 'shorof',
    label: "Tashrif Bab 1 (فَعَلَ - يَفْعُلُ)",
    prompt: "Tuliskan bentuk tashrif istilahi untuk wazan bab 1 (فَعَلَ - يَفْعُلُ) pada fi'il نَصَرَ!",
  },
  {
    topic: 'kaidah',
    label: "Kaidah I'lal Kata 'قَالَ'",
    prompt: "Bagaimana proses kaidah i'lal pada kata قَالَ? Mengapa huruf wawu berubah menjadi alif?",
  },
];

const STORAGE_KEY_SENTENCE = 'nahwulab_tarkib_input';
const STORAGE_KEY_ANALYZED_SENTENCE = 'nahwulab_tarkib_analyzed_sentence';
const STORAGE_KEY_RESULT = 'nahwulab_tarkib_result';
const STORAGE_KEY_SUBMODE = 'nahwulab_chat_submode';

export const ChatTab: React.FC = () => {
  const { userProfile, recordActivity } = useAuth();
  
  // Persisted mode across tab switches
  const [mode, setMode] = useState<'chat' | 'breakdown'>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY_SUBMODE);
      if (saved === 'chat' || saved === 'breakdown') return saved;
    } catch {}
    return 'chat';
  });
  
  // Chat state
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
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

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          userId: userProfile?.uid || 'guest',
          role: 'assistant',
          content: `**Assalamu'alaikum wa rahmatullahi wa barakatuh.**\n\nAhlan wa Sahlan di **Tanya Musyrif NahwuLab**! Saya adalah asisten pembelajaran bahasa Arab, siap menjawab langsung sesuai bentuk instruksi yang Anda butuhkan:\n\n- 📝 **Contoh Kalimat/Kata**: Minta contoh kalimat atau kata berharakat beserta terjemahannya.\n- 💡 **Definisi & Ciri-Ciri**: Pengertian istilah nahwu, sharaf, fungsi, atau macam-macam pembagiannya.\n- ⚖️ **Perbedaan Konsep**: Membandingkan dua istilah (misal: Fa'il vs Na'ibul Fa'il, Isim vs Fi'il).\n- 🔍 **Analisis I'rab & Tarkib**: Kirimkan kalimat bahasa Arab untuk diuraikan kedudukan dan harakat akhirnya.\n- 📚 **Rangkuman Sederhana**: Minta penjelasan kaidah dengan bahasa yang mudah dipahami santri/pemula.\n\n*Silakan ketik pertanyaan Anda secara bebas atau klik salah satu kartu pintasan di samping!*`,
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, [userProfile]);

  useEffect(() => {
    if (messages.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessageItem = {
      id: 'usr_' + Date.now(),
      userId: userProfile?.uid || 'guest',
      role: 'user',
      content: textToSend,
      topic: selectedTopic,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customPrompt) setInputMessage('');
    setIsLoading(true);

    try {
      // Record activity to reward streak points
      recordActivity('chat');

      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const replyText = await askNahwuAi(textToSend, historyPayload, selectedTopic);

      const aiMsg: ChatMessageItem = {
        id: 'ai_' + Date.now(),
        userId: userProfile?.uid || 'guest',
        role: 'assistant',
        content: replyText,
        topic: selectedTopic,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMsg]);

      // Save to Firestore subcollection if user authenticated
      if (userProfile?.uid && !userProfile.uid.startsWith('admin_')) {
        try {
          const chatsCol = collection(db, 'users', userProfile.uid, 'chats');
          await addDoc(chatsCol, userMsg);
          await addDoc(chatsCol, aiMsg);
        } catch (e) {
          console.warn('Could not persist chat in firestore:', e);
        }
      }
    } catch (err: any) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: 'err_' + Date.now(),
          userId: userProfile?.uid || 'guest',
          role: 'assistant',
          content: 'Maaf, terjadi kendala saat menghubungkan dengan AI Nahwu. Silakan periksa koneksi dan coba beberapa saat lagi.',
          timestamp: new Date().toISOString(),
        },
      ]);
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
      // Strictly replace result only upon successful response
      setAnalysisResult(res);
      setAnalyzedSentence(target);
      try {
        sessionStorage.setItem(STORAGE_KEY_RESULT, JSON.stringify(res));
        sessionStorage.setItem(STORAGE_KEY_ANALYZED_SENTENCE, target);
        sessionStorage.setItem(STORAGE_KEY_SENTENCE, target);
      } catch {}
    } catch (err: any) {
      console.error('Analysis failed:', err);
      // Retain previous analysisResult without deleting it!
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-6 sm:p-7 rounded-3xl text-white shadow-xl shadow-emerald-950/20 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Konsultasi & Bedah I'rab Digital
          </h1>
          <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 max-w-xl">
            Tanyakan persoalan gramatika dan morfologi Arab atau bedah susunan tarkib kalimat secara otomatis kata demi kata.
          </p>
        </div>

        {/* Mode Toggle Buttons */}
        <div className="flex items-center bg-slate-800/80 p-1.5 rounded-2xl border border-emerald-500/30 shrink-0">
          <button
            onClick={() => handleModeChange('chat')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              mode === 'chat'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>Tanya Musyrif NahwuLab</span>
          </button>
          <button
            onClick={() => handleModeChange('breakdown')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              mode === 'breakdown'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white'
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
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col h-[700px] overflow-hidden">
            {/* Chat Header */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Bot className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Tanya Musyrif NahwuLab</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Aktif & Berpedoman pada Kaidah Mu'tamad</span>
                  </div>
                </div>
              </div>

              {/* Topic Filter */}
              <div className="flex items-center gap-1 text-xs">
                <span className="text-slate-400 font-medium hidden sm:inline">Fokus:</span>
                <select
                  value={selectedTopic}
                  onChange={(e: any) => setSelectedTopic(e.target.value)}
                  className="bg-white border border-slate-200 text-slate-700 text-xs rounded-lg px-2.5 py-1.5 font-semibold focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="umum">Umum (Nahwu & Shorof)</option>
                  <option value="nahwu">Ilmu Nahwu (Tarkib)</option>
                  <option value="shorof">Ilmu Shorof (Wazan & Tashrif)</option>
                  <option value="irab">Kajian I'rab Khusus</option>
                </select>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-5 bg-slate-50/50">
              {messages.map((msg) => {
                const isAi = msg.role === 'assistant';
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-3 sm:gap-4 ${isAi ? 'justify-start' : 'justify-end'}`}
                  >
                    {isAi && (
                      <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex items-center justify-center shrink-0 shadow-xs font-bold text-sm">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`relative max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 sm:p-5 shadow-xs ${
                        isAi
                          ? 'bg-white border border-emerald-100 text-slate-800'
                          : 'bg-emerald-600 text-white'
                      }`}
                    >
                      {/* Copy Button for AI */}
                      {isAi && (
                        <button
                          onClick={() => copyToClipboard(msg.content, msg.id)}
                          className="absolute top-3 right-3 p-1.5 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-slate-100 transition-colors"
                          title="Salin jawaban"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}

                      {/* Content with Arabic Styling */}
                      <div className="prose prose-sm max-w-none prose-emerald whitespace-pre-wrap leading-relaxed font-sans">
                        {msg.content.split('\n').map((line, lIdx) => {
                          const isArabicLine = /[\u0600-\u06FF]/.test(line);
                          return (
                            <p
                              key={lIdx}
                              className={`${
                                isArabicLine ? 'font-serif text-lg leading-loose text-slate-900 font-semibold' : ''
                              } ${!isAi ? 'text-white' : ''} mb-2 last:mb-0`}
                            >
                              {line}
                            </p>
                          );
                        })}
                      </div>

                      <div
                        className={`text-[10px] mt-2 text-right ${
                          isAi ? 'text-slate-400' : 'text-emerald-100'
                        }`}
                      >
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>

                    {!isAi && (
                      <div className="w-9 h-9 rounded-2xl bg-slate-800 text-white flex items-center justify-center shrink-0 font-bold text-sm">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex items-center justify-center shrink-0 animate-pulse">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-emerald-100 rounded-2xl p-4 shadow-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]"></span>
                    <span className="text-xs text-slate-500 font-medium ml-1">
                      Musyrif NahwuLab sedang menelaah kaidah gramatika...
                    </span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Box Form */}
            <div className="p-4 bg-white border-t border-slate-200">
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
                  className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center gap-2 disabled:opacity-50 active:scale-95"
                >
                  <span>Kirim</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Quick Prompt Cards & Study Guides */}
          <div className="lg:col-span-4 space-y-5">
            {/* Quick Prompt Chips */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-3">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>Pintasan Tanya Kaidah Populer</span>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                Klik kartu di bawah untuk menanyakan kaidah atau meminta analisis I'rab seketika:
              </p>

              <div className="space-y-2">
                {QUICK_PROMPTS.map((qp, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(qp.prompt)}
                    disabled={isLoading}
                    className="w-full text-left p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200 hover:border-emerald-200 transition-all group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                        {qp.label}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Guide Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-5 border border-emerald-200/80">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-2">
                <Info className="w-4 h-4 text-emerald-700" />
                <span>Tips Konsultasi Berfaedah</span>
              </div>
              <ul className="text-xs text-emerald-800/90 space-y-2 list-disc pl-4 leading-relaxed">
                <li>Sertakan harakat lengkap pada kalimat Arab untuk mendapatkan analisis I'rab paling akurat.</li>
                <li>Tanyakan asal usul kata untuk mengupas wazan dan kaidah i'lal shorofnya.</li>
                <li>Gunakan tab <strong>Bedah Kalimat</strong> untuk melihat visual kata demi kata dalam tabel rapi.</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* SENTENCE BREAKDOWN VIEW */
        <div className="space-y-6">
          {/* Sentence Input Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Layers className="w-4 h-4 text-emerald-700" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800">
                Masukkan Kalimat Bahasa Arab untuk Dibedah
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
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
                className="flex-1 font-serif text-xl sm:text-2xl px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white text-right placeholder:text-slate-400 placeholder:text-base placeholder:font-sans"
                disabled={analyzing}
              />
              <button
                type="button"
                onClick={() => handleRunAnalysis()}
                disabled={analyzing || !customSentence.trim()}
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0"
              >
                <Layers className={`w-4 h-4 ${analyzing ? 'animate-spin' : ''}`} />
                <span>{analyzing ? 'Menganalisis...' : "Bedah I'rab Sekarang"}</span>
              </button>
            </div>
          </div>

          {/* Error Alert (Retains Previous Result) */}
          {analysisError && (
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <p className="font-bold">Kendala Pemrosesan</p>
                <p className="mt-0.5">{analysisError}</p>
                {analysisResult && (
                  <p className="mt-1.5 text-amber-800 text-xs font-medium">
                    Hasil analisis sebelumnya untuk kalimat &quot;<span className="font-serif font-bold">{analysisResult.sentence}</span>&quot; tetap dipertahankan dan ditampilkan di bawah.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Loading Indicator */}
          {analyzing && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3 animate-pulse">
              <div className="w-4 h-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin shrink-0"></div>
              <p className="text-xs sm:text-sm font-medium">
                Sedang membedah tarkib dan gramatika kalimat... Mohon tunggu sejenak.
              </p>
            </div>
          )}

          {/* Initial State when no analysis yet */}
          {!analysisResult && !analyzing && !analysisError && (
            <div className="bg-white rounded-3xl p-8 border border-dashed border-slate-300 text-center text-slate-500">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-3">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-slate-700">Belum Ada Kalimat yang Dianalisis</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto leading-relaxed">
                Silakan ketik kalimat bahasa Arab pada kolom input di atas, kemudian klik tombol <strong>&quot;Bedah I&apos;rab Sekarang&quot;</strong> untuk memulai telaah gramatikal.
              </p>
            </div>
          )}

          {/* Analysis Output Section */}
          {analysisResult && (
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
              {/* Notice if user changed input but hasn't clicked analyze */}
              {customSentence.trim() && analyzedSentence && customSentence.trim() !== analyzedSentence && (
                <div className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1 border border-slate-200">
                  <span>
                    Menampilkan hasil analisis untuk: <strong className="font-serif text-slate-800 text-sm">{analysisResult.sentence}</strong>
                  </span>
                  <span className="text-emerald-700 font-medium text-[11px]">
                    Tekan tombol &quot;Bedah I&apos;rab Sekarang&quot; untuk memproses kalimat baru yang sedang diketik
                  </span>
                </div>
              )}

              {/* Top Summary Banner */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Struktur Sintaksis Umum
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">
                    {analysisResult.overallGrammar || 'Jumlah Kalimat Mufidah'}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 italic">
                    "{analysisResult.translation}"
                  </p>
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-900 text-right dir-rtl">
                  {analysisResult.sentence}
                </div>
              </div>

              {/* Word by Word Cards & Table */}
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span>Rincian Gramatikal Kata Demi Kata (Tarkib & Shorof)</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] bg-slate-100 text-slate-600 font-semibold">
                    {analysisResult.words?.length || 0} Kata
                  </span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {analysisResult.words?.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Word Heading */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                          <span className="text-xs font-bold text-slate-400">Kata #{idx + 1}</span>
                          <span className="font-serif text-2xl font-bold text-emerald-800">
                            {item.word}
                          </span>
                        </div>

                        {/* Badges for Type & Case */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                            {item.type}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
                            {item.irabCase}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="space-y-2 text-xs">
                          <div>
                            <span className="text-slate-400 block">Kedudukan (Tarkib):</span>
                            <span className="font-bold text-slate-800">{item.position}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block">Tanda I'rab:</span>
                            <span className="font-semibold text-slate-700">{item.marker}</span>
                          </div>
                          {item.morphology && (
                            <div>
                              <span className="text-slate-400 block">Tinjauan Shorof:</span>
                              <span className="font-medium text-amber-800 bg-amber-50 px-2 py-0.5 rounded inline-block">
                                {item.morphology}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Explanation */}
                      <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                        <span className="font-semibold text-slate-700">Kaidah: </span>
                        {item.explanation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
