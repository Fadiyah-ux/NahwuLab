import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { askNahwuAi, analyzeArabicSentence } from '../services/api';
import { ChatMessageItem, SentenceAnalysisResult } from '../types';
import { db } from '../firebase/config';
import { collection, query, orderBy, limit, getDocs, addDoc } from 'firebase/firestore';
import {
  Sparkles,
  Send,
  Bot,
  User,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Layers,
  Sparkle,
  ArrowRight,
  Info,
} from 'lucide-react';

const QUICK_PROMPTS = [
  {
    topic: 'irab',
    label: "I'rab: جَاءَ زَيْدٌ عَالِمًا",
    prompt: "Tolong i'rab secara lengkap kalimat ini kata demi kata: جَاءَ زَيْدٌ عَالِمًا (sebutkan kedudukan, status i'rab, dan tandanya)",
  },
  {
    topic: 'nahwu',
    label: "Fa'il vs Na'ibul Fa'il",
    prompt: "Jelaskan perbedaan mendasar antara Fa'il dan Na'ibul Fa'il, serta bagaimana cara merubah fi'il ma'lum menjadi fi'il majhul?",
  },
  {
    topic: 'shorof',
    label: "Tashrif Bab 1 (فَعَلَ - يَفْعُلُ)",
    prompt: "Tuliskan tabel lengkap tashrif istilahi untuk wazan bab 1 Tsulatsi Mujarrad (فَعَلَ - يَفْعُلُ) dengan contoh fi'il نَصَرَ!",
  },
  {
    topic: 'irab',
    label: "I'rab: إِنَّمَا يَخْشَى اللَّهَ",
    prompt: "Bagaimana analisis tarkib dan i'rab pada ayat: 'إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ'? Mengapa lafadz Allah dibaca manshub (fathah)?",
  },
  {
    topic: 'kaidah',
    label: "Kaidah I'lal Kata 'قَالَ'",
    prompt: "Bagaimana proses kaidah i'lal pada kata قَالَ dan بَاعَ? Sebutkan bentuk asalnya dan syarat perubahannya.",
  },
  {
    topic: 'nahwu',
    label: "Isim Kaana & Khabar Inna",
    prompt: "Apa perbedaan I'rab antara amil Kaana (كَانَ) dan saudaranya dengan Inna (إِنَّ) dan saudaranya?",
  },
];

const SAMPLE_SENTENCES = [
  'جَاءَ زَيْدٌ عَالِمًا',
  'كَتَبَ التِّلْمِيذُ الدَّرْسَ فِي الْفَصْلِ',
  'إِنَّ اللهَ مَعَ الصَّابِرِينَ',
  'كَانَ الْمُعَلِّمُ نَاصِحًا لِلطُّلَّابِ',
  'الْعِلْمُ نُورٌ يَهْدِي الْعُقُولَ',
];

export const ChatTab: React.FC = () => {
  const { userProfile, recordActivity } = useAuth();
  const [mode, setMode] = useState<'chat' | 'breakdown'>('chat');
  
  // Chat state
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<'nahwu' | 'shorof' | 'irab' | 'umum'>('umum');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Sentence breakdown state
  const [customSentence, setCustomSentence] = useState('جَاءَ زَيْدٌ عَالِمًا');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<SentenceAnalysisResult | null>(null);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          userId: userProfile?.uid || 'guest',
          role: 'assistant',
          content: `**Assalamu'alaikum wa rahmatullahi wa barakatuh.**\n\nAhlan wa Sahlan di **Ustadz NahwuLab**! Saya siap membantu Anda mendalami:\n- 🔍 **I'rab & Tarkib Kalimat**: Membedah kedudukan fa'il, maf'ul, mubtada', khabar, hal, tamyiz, dll.\n- ⚖️ **Ilmu Shorof & Morfologi**: Wazan, sighah, bina', dan kaidah i'lal kata.\n- 📖 **Kaidah Matan Kitab**: Al-Jurumiyyah, Amtsilah Tashrifiyyah, Imrithi, dan Alfiyyah.\n\n*Silakan ketik pertanyaan Anda atau pilih pintasan kaidah di bawah ini!*`,
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

  const handleRunAnalysis = async (sentenceToAnalyze?: string) => {
    const target = sentenceToAnalyze || customSentence;
    if (!target.trim() || analyzing) return;

    setAnalyzing(true);
    recordActivity('chat');

    try {
      const res = await analyzeArabicSentence(target);
      setAnalysisResult(res);
    } catch (err) {
      console.error('Analysis failed:', err);
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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 p-6 rounded-3xl text-white shadow-xl shadow-emerald-950/20 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Al-Mursyid Al-Lughawiy • Pakar Nahwu AI</span>
          </div>
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
            onClick={() => setMode('chat')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              mode === 'chat'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>Tanya Ustadz AI</span>
          </button>
          <button
            onClick={() => {
              setMode('breakdown');
              if (!analysisResult) handleRunAnalysis();
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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
                  <h3 className="text-sm font-bold text-slate-800">Ustadz NahwuLab (AI Mursyid)</h3>
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
                      Ustadz NahwuLab sedang menelaah kaidah gramatika...
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
                <Sparkle className="w-4 h-4 text-emerald-600" />
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
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-2">
              Masukkan Kalimat Bahasa Arab untuk Dibedah
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Ketik kalimat dengan harakat atau pilih salah satu contoh kalimat gramatikal di bawah:
            </p>

            {/* Quick Sample Sentences */}
            <div className="flex flex-wrap gap-2 mb-4">
              {SAMPLE_SENTENCES.map((samp, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setCustomSentence(samp);
                    handleRunAnalysis(samp);
                  }}
                  className="px-3 py-1.5 rounded-full text-xs font-serif font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  {samp}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                dir="rtl"
                value={customSentence}
                onChange={(e) => setCustomSentence(e.target.value)}
                placeholder="Contoh: ضَرَبَ زَيْدٌ عَمْرًا"
                className="flex-1 font-serif text-xl sm:text-2xl px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white text-right"
              />
              <button
                type="button"
                onClick={() => handleRunAnalysis()}
                disabled={analyzing || !customSentence.trim()}
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Layers className="w-4 h-4" />
                <span>{analyzing ? 'Menganalisis...' : 'Bedah I\'rab Sekarang'}</span>
              </button>
            </div>
          </div>

          {/* Analysis Output Section */}
          {analysisResult && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
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
