import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { calculateUserLevel, getJakartaDateString } from '../utils/streak';
import { getRecoveryQuestions, RecoveryQuestion } from '../data/recoveryQuestions';
import {
  Flame,
  Award,
  Calendar,
  CheckCircle2,
  XCircle,
  Trophy,
  Zap,
  Target,
  BookOpen,
  MessageSquare,
  RefreshCw,
  AlertTriangle,
  History,
  Check,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';

export const StreakTab: React.FC = () => {
  const {
    userProfile,
    startStreakRecovery,
    saveRecoveryProgress,
    completeStreakRecovery,
  } = useAuth();

  const currentStreak = userProfile?.currentStreak ?? 0;
  const longestStreak = userProfile?.longestStreak ?? 0;
  const xp = userProfile?.xp ?? 0;
  const levelInfo = calculateUserLevel(xp);
  const streakStatus = userProfile?.streakStatus || (currentStreak === 0 ? 'idle' : 'active');
  const missedDays = userProfile?.missedDays || 0;
  const recoveryData = userProfile?.streakRecovery;

  // Recovery UI state
  const isRecovering = Boolean(recoveryData?.inProgress);
  const [questions, setQuestions] = useState<RecoveryQuestion[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answeredState, setAnsweredState] = useState<'unanswered' | 'correct' | 'incorrect'>('unanswered');
  const [isFinishing, setIsFinishing] = useState(false);
  const [recoveryCompletedSuccess, setRecoveryCompletedSuccess] = useState(false);

  // Initialize recovery questions whenever missedDays or recovery session starts
  useEffect(() => {
    if (missedDays > 0) {
      const needed = Math.max(1, missedDays);
      const usedIds = [
        ...(recoveryData?.usedQuestionIds || []),
        ...(userProfile?.recoveryHistory?.map((h) => h.id) || []),
      ];
      const qList = getRecoveryQuestions(needed, usedIds);
      setQuestions(qList);
    }
  }, [missedDays, recoveryData?.inProgress]);

  const currentQIndex = recoveryData?.currentQuestionIndex || 0;
  const currentQ = questions[currentQIndex] || questions[0];

  const handleStartRecovery = async () => {
    await startStreakRecovery();
    setAnsweredState('unanswered');
    setSelectedOption(null);
    setRecoveryCompletedSuccess(false);
  };

  const handleSelectOption = (index: number) => {
    if (answeredState === 'correct') return;
    setSelectedOption(index);
  };

  const handleVerifyAnswer = async () => {
    if (selectedOption === null || !currentQ) return;

    const isCorrect = selectedOption === currentQ.correctAnswerIndex;
    if (isCorrect) {
      setAnsweredState('correct');
      const updatedSolved = Array.from(
        new Set([...(recoveryData?.solvedQuestionIds || []), currentQ.id])
      );
      await saveRecoveryProgress({
        solvedQuestionIds: updatedSolved,
        usedQuestionIds: Array.from(
          new Set([...(recoveryData?.usedQuestionIds || []), currentQ.id])
        ),
      });
    } else {
      setAnsweredState('incorrect');
    }
  };

  const handleNextQuestionOrComplete = async () => {
    if (!currentQ) return;
    const totalNeeded = Math.max(1, missedDays);
    const nextIdx = currentQIndex + 1;

    if (nextIdx >= totalNeeded) {
      // All recovery questions solved!
      setIsFinishing(true);
      try {
        await completeStreakRecovery();
        setRecoveryCompletedSuccess(true);
      } finally {
        setIsFinishing(false);
      }
    } else {
      await saveRecoveryProgress({
        currentQuestionIndex: nextIdx,
      });
      setSelectedOption(null);
      setAnsweredState('unanswered');
    }
  };

  const handleRetryCurrentQuestion = () => {
    setSelectedOption(null);
    setAnsweredState('unanswered');
  };

  // Generate days for visual calendar
  const todayWIB = getJakartaDateString();
  const weekDays = useMemo(() => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(today.getDate() - (6 - i));
      const isToday = i === 6;
      const isPastStreak = currentStreak > 0 && i >= 7 - Math.min(currentStreak, 7);
      return {
        dayName: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'][d.getDay()],
        dateNum: d.getDate(),
        isActive: isPastStreak && streakStatus !== 'broken',
        isToday,
      };
    });
  }, [currentStreak, streakStatus]);

  const badges = [
    {
      title: 'Pencari Fa\'il',
      desc: 'Membuka aplikasi dan memulai perjalanan nahwu (1 hari)',
      unlocked: currentStreak >= 1,
      icon: '🌱',
    },
    {
      title: 'Penakluk I\'rab',
      desc: 'Konsisten belajar 3 hari berturut-turut',
      unlocked: currentStreak >= 3,
      icon: '⚡',
    },
    {
      title: 'Pustakawan Turats',
      desc: 'Menuntaskan kajian kitab matan dan shorof',
      unlocked: (userProfile?.totalExercisesCompleted || 0) >= 3,
      icon: '📚',
    },
    {
      title: 'Fashihul Kalam',
      desc: 'Mencapai streak istiqamah 7 hari berturut-turut',
      unlocked: currentStreak >= 7,
      icon: '🔥',
    },
    {
      title: 'Musyrif SmartKib',
      desc: 'Menyelesaikan lebih dari 10 latihan dan aktif berkonsultasi',
      unlocked: (userProfile?.totalExercisesCompleted || 0) >= 10,
      icon: '👑',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-fadeIn">
      {/* Hero Streak Banner (Oren) */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 rounded-[2.5rem] p-6 sm:p-10 text-white shadow-xl shadow-orange-950/20 border border-orange-400/40">
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-orange-400/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white mb-3 shadow-xs border border-white/30">
              <Flame className="w-4 h-4 text-amber-200 fill-amber-200 animate-bounce" />
              <span>Rekor Keistiqamahan Belajar Santri</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight flex items-center justify-center md:justify-start gap-3">
              <span className="text-white drop-shadow-xs">{currentStreak} Hari</span>
              <span className="text-amber-200 text-3xl sm:text-4xl font-serif">مُوَاظَبَةٌ</span>
            </h1>
            <p className="text-sm sm:text-base text-orange-50/95 font-medium mt-2 max-w-lg leading-relaxed">
              &quot;أَحَبُّ الْأَعْمَالِ إِلَى اللهِ أَدْوَمُهَا وَإِنْ قَلَّ&quot; — Amalan yang paling dicintai Allah adalah yang paling konsisten meski sedikit.
            </p>

            {/* Streak Status Tag */}
            <div className="mt-3 flex items-center gap-2">
              {streakStatus === 'broken' ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-rose-900/80 text-rose-100 border border-rose-300/40 shadow-xs">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-300" />
                  <span>Streak Terputus ({missedDays} Hari Terlewat)</span>
                </span>
              ) : streakStatus === 'recovered' ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-950/70 text-emerald-200 border border-emerald-400/50 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Streak Berhasil Dipulihkan</span>
                </span>
              ) : currentStreak > 0 ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/20 text-white border border-white/30 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-200" />
                  <span>Aktif &amp; Terjaga Berkelanjutan</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-white/20 text-white border border-white/30 shadow-xs">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-200" />
                  <span>Mulai Belajar Hari Ini untuk Meraih Streak 1</span>
                </span>
              )}
            </div>
          </div>

          {/* Quick Metrics Badge with Golden Dome Logo */}
          <div className="flex items-center gap-4 bg-black/15 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-white/25 shadow-lg shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-white/15 p-1.5 flex items-center justify-center border border-white/20 shrink-0">
              <img
                src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
                alt="SmartKib Dome"
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>
            <div className="text-center px-3 border-r border-white/20">
              <span className="text-xs text-amber-100 font-medium block">Streak Tertinggi</span>
              <span className="text-2xl font-bold text-white">{longestStreak} Hari</span>
            </div>
            <div className="text-center px-3">
              <span className="text-xs text-amber-100 font-medium block">Total Pengalaman</span>
              <span className="text-2xl font-bold text-amber-200">{xp} XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* FITUR PEMULIHAN STREAK (Ketiadaan Aktivitas / Streak Broken) */}
      {(streakStatus === 'broken' || missedDays > 0 || isRecovering) && (
        <div className="bg-white rounded-[2rem] p-6 sm:p-8 border-2 border-orange-200 shadow-md relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-orange-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold shrink-0 border border-orange-300/70 shadow-xs">
                <RefreshCw className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black text-slate-900">
                    Fitur Pemulihan Streak Belajar
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-300">
                    {missedDays} Hari Terlewat
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  Jawab {missedDays} soal pemulihan kaidah dengan benar untuk mengembalikan rekor streak {currentStreak} hari Anda!
                </p>
              </div>
            </div>

            {!isRecovering && !recoveryCompletedSuccess && (
              <button
                onClick={handleStartRecovery}
                className="px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0"
              >
                <Flame className="w-4 h-4 fill-white text-white" />
                <span>Mulai Pemulihan ({missedDays} Soal)</span>
              </button>
            )}
          </div>

          {/* Recovery Flow Completed Celebration */}
          {recoveryCompletedSuccess ? (
            <div className="text-center py-8 px-4 bg-emerald-50/80 rounded-2xl border border-emerald-200">
              <div className="w-16 h-16 rounded-3xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="text-xl font-black text-emerald-900 mb-1">
                Alhamdulillah! Pemulihan Streak Berhasil
              </h4>
              <p className="text-xs sm:text-sm text-emerald-700 font-medium max-w-md mx-auto mb-4">
                Seluruh {missedDays} soal telah Anda tuntaskan dengan tepat. Rekor istiqamah {currentStreak} hari Anda telah dipulihkan!
              </p>
              <button
                onClick={() => setRecoveryCompletedSuccess(false)}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-sm transition-all"
              >
                Kembali ke Ringkasan
              </button>
            </div>
          ) : isRecovering && currentQ ? (
            /* ACTIVE RECOVERY QUIZ CARD */
            <div className="space-y-6">
              {/* Progress counter */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                <span>
                  Soal Pemulihan #{currentQIndex + 1} dari {Math.max(1, missedDays)}
                </span>
                <span className="text-orange-700 font-extrabold">
                  {Math.round(((currentQIndex) / Math.max(1, missedDays)) * 100)}% Selesai
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="bg-orange-500 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQIndex) / Math.max(1, missedDays)) * 100}%`,
                  }}
                />
              </div>

              {/* Question Box */}
              <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-emerald-100/90 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Kategori: {currentQ.category.toUpperCase()} • {currentQ.title}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {currentQ.kitabReference}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-bold text-slate-900">
                  {currentQ.question}
                </p>

                {currentQ.arabicSnippet && (
                  <div className="py-4 px-6 bg-white rounded-2xl border border-emerald-200/80 text-center shadow-2xs">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-900 tracking-wide">
                      {currentQ.arabicSnippet}
                    </span>
                  </div>
                )}

                {/* Multiple Choice Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrectAnswer = idx === currentQ.correctAnswerIndex;
                    let style = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';

                    if (answeredState === 'correct') {
                      if (isCorrectAnswer) {
                        style = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-400';
                      }
                    } else if (answeredState === 'incorrect') {
                      if (isSelected) {
                        style = 'bg-rose-50 border-rose-400 text-rose-900 font-bold';
                      }
                    } else if (isSelected) {
                      style = 'bg-orange-50 border-orange-500 text-orange-950 font-bold ring-2 ring-orange-300';
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectOption(idx)}
                        disabled={answeredState === 'correct'}
                        className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-between gap-3 shadow-2xs ${style}`}
                      >
                        <span>{opt}</span>
                        {answeredState === 'correct' && isCorrectAnswer && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {answeredState === 'incorrect' && isSelected && (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback Box */}
                {answeredState === 'correct' && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-emerald-900">Jawaban Benar! أحسنت</h5>
                        <p className="text-xs text-emerald-800 mt-0.5">{currentQ.explanation}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleNextQuestionOrComplete}
                      disabled={isFinishing}
                      className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                    >
                      <span>
                        {currentQIndex + 1 >= Math.max(1, missedDays)
                          ? 'Selesaikan & Pulihkan Streak'
                          : 'Soal Selanjutnya'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {answeredState === 'incorrect' && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-rose-900">Jawaban Belum Tepat</h5>
                        <p className="text-xs text-rose-800 mt-0.5 font-medium">
                          <strong>Pembahasan: </strong>{currentQ.explanation}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleRetryCurrentQuestion}
                      className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-all shrink-0 cursor-pointer"
                    >
                      Coba Lagi Soal Ini
                    </button>
                  </div>
                )}

                {answeredState === 'unanswered' && (
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleVerifyAnswer}
                      disabled={selectedOption === null}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                    >
                      Periksa Jawaban
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* Grid: Level Progress & Weekly Calendar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Level & Rank Card */}
        <div className="md:col-span-6 bg-white rounded-[2rem] p-6 border border-emerald-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-2xl shadow-inner border border-emerald-200">
                  {levelInfo.badge}
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                    Tingkat Kemahiran Santri
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{levelInfo.title}</h3>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                Tingkat {levelInfo.level}
              </span>
            </div>

            <p className="text-xs text-slate-600 font-medium mb-4">
              Tingkatkan XP Anda dengan menyelesaikan kuis I&apos;rab, membaca materi kitab turats, dan berkonsultasi dengan Tanya Musyrif SmartKib.
            </p>

            {/* Progress Bar */}
            <div className="space-y-1.5 mb-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-900 font-bold">{xp} XP</span>
                <span className="text-slate-500">Target: {levelInfo.nextLevelXp} XP</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200 p-0.5">
                <div
                  className="bg-gradient-to-r from-emerald-600 to-teal-500 h-full rounded-full transition-all duration-500 shadow-2xs"
                  style={{ width: `${levelInfo.progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>
              Latihan selesai: <strong className="text-slate-900">{userProfile?.totalExercisesCompleted || 0} soal</strong>
            </span>
            <span className="text-emerald-700 font-bold">Target: Tingkat {levelInfo.level + 1}</span>
          </div>
        </div>

        {/* Weekly Activity Calendar Card */}
        <div className="md:col-span-6 bg-white rounded-[2rem] p-6 border border-emerald-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Aktivitas 7 Hari Terakhir (WIB)</h3>
            </div>
            <span className="text-xs text-emerald-800 font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Cloud Sync ✓
            </span>
          </div>

          <p className="text-xs text-slate-600 font-medium mb-5">
            Lakukan minimal 1 aktivitas belajar (tanya musyrif, bedah tarkib, kuis, atau kitab) setiap hari untuk menjaga api streak!
          </p>

          <div className="grid grid-cols-7 gap-2 text-center">
            {weekDays.map((wd, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1.5 ${
                  wd.isActive
                    ? 'bg-emerald-600 border-emerald-700 text-white shadow-xs'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                } ${wd.isToday ? 'ring-2 ring-emerald-500 ring-offset-2' : ''}`}
              >
                <span className={`text-[11px] font-semibold ${wd.isActive ? 'text-emerald-100' : 'text-slate-500'}`}>
                  {wd.dayName}
                </span>
                <span className={`text-sm font-bold ${wd.isActive ? 'text-white' : 'text-slate-800'}`}>
                  {wd.dateNum}
                </span>
                {wd.isActive ? (
                  <Flame className="w-4 h-4 text-emerald-200 fill-emerald-200 drop-shadow-xs" />
                ) : (
                  <div className="w-2 rounded-full h-2 bg-slate-300"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>Hari Aktif Belajar</span>
            </span>
            <span>Aktivitas Terakhir: {userProfile?.lastActiveDate || 'Belum dimulai'}</span>
          </div>
        </div>
      </div>

      {/* Riwayat Pemulihan Streak (Jika Pernah Memulihkan) */}
      {(userProfile?.recoveryHistory && userProfile.recoveryHistory.length > 0) && (
        <div className="bg-white rounded-[2rem] p-6 border border-emerald-100 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <History className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Riwayat Pemulihan Streak</h3>
          </div>
          <div className="space-y-2">
            {userProfile.recoveryHistory.map((rec) => (
              <div
                key={rec.id}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-bold text-slate-800">
                    Dipulihkan ke {rec.restoredStreak} Hari
                  </span>
                  <span className="text-slate-500">
                    ({rec.missedDays} hari terlewat)
                  </span>
                </div>
                <span className="text-slate-500 font-medium">{rec.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Daily Target Checklist */}
      <div className="bg-white rounded-[2rem] p-6 border border-emerald-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Target Belajar Harian (Daily Quests)</h3>
            <p className="text-xs text-slate-500 font-medium">Selesaikan target harian untuk mengumpulkan bonus poin XP</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">1x Tanya Musyrif SmartKib</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Tanyakan 1 kaidah atau bedah kalimat I&apos;rab.</p>
              <span className="inline-block mt-2 text-[10px] font-bold text-emerald-800 bg-white px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
                +10 XP
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">1x Baca Bab Kitab</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Telaah matan Al-Ajurumiyyah atau Amtsilah.</p>
              <span className="inline-block mt-2 text-[10px] font-bold text-teal-800 bg-white px-2.5 py-0.5 rounded-full border border-teal-200 shadow-2xs">
                +15 XP
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Selesaikan Latihan</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Jawab kuis I&apos;rab atau wazan shorof.</p>
              <span className="inline-block mt-2 text-[10px] font-bold text-slate-800 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                +20 XP
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges & Achievements */}
      <div className="bg-white rounded-[2rem] p-6 border border-emerald-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Lencana &amp; Prestasi (Syaraful Himmah)</h3>
            <p className="text-xs text-slate-500 font-medium">Buktikan ketekunanmu menguasai ilmu alat bahasa Arab</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between ${
                b.unlocked
                  ? 'bg-emerald-50/50 border-emerald-200 shadow-2xs'
                  : 'bg-slate-50 border-slate-200 opacity-50 grayscale'
              }`}
            >
              <div>
                <span className="text-3xl block mb-2">{b.icon}</span>
                <h4 className="text-xs font-bold text-slate-900">{b.title}</h4>
                <p className="text-[11px] text-slate-500 font-normal mt-1 leading-snug">{b.desc}</p>
              </div>

              <div className="mt-3">
                {b.unlocked ? (
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    Terbuka ✓
                  </span>
                ) : (
                  <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                    Terkunci
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
