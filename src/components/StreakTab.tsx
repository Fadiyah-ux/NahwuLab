import React from 'react';
import { useAuth } from '../context/AuthContext';
import { calculateUserLevel } from '../utils/streak';
import {
  Flame,
  Award,
  Calendar,
  CheckCircle2,
  Trophy,
  Zap,
  Target,
  Sparkles,
  BookOpen,
  MessageSquare,
  ShieldAlert,
} from 'lucide-react';

export const StreakTab: React.FC = () => {
  const { userProfile } = useAuth();
  const currentStreak = userProfile?.currentStreak || 1;
  const longestStreak = userProfile?.longestStreak || 1;
  const xp = userProfile?.xp || 50;
  const levelInfo = calculateUserLevel(xp);

  // Generate days for visual calendar
  const today = new Date();
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - (6 - i));
    const isToday = i === 6;
    const isPastStreak = i >= 7 - Math.min(currentStreak, 7);
    return {
      dayName: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'][d.getDay()],
      dateNum: d.getDate(),
      isActive: isPastStreak,
      isToday,
    };
  });

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
      title: 'Musyrif NahwuLab',
      desc: 'Menyelesaikan lebih dari 10 latihan dan aktif berkonsultasi',
      unlocked: (userProfile?.totalExercisesCompleted || 0) >= 10,
      icon: '👑',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Hero Streak Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl shadow-orange-900/30">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white mb-3 border border-white/20">
              <Flame className="w-4 h-4 text-amber-200 fill-amber-200" />
              <span>Rekor Keistiqamahan Belajar</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight flex items-center justify-center md:justify-start gap-3">
              <span>{currentStreak} Hari</span>
              <span className="text-amber-200 text-3xl sm:text-4xl font-serif">مُوَاظَبَةٌ</span>
            </h1>
            <p className="text-sm sm:text-base text-orange-100 mt-2 max-w-lg">
              "أَحَبُّ الْأَعْمَالِ إِلَى اللهِ أَدْوَمُهَا وَإِنْ قَلَّ" — Amalan yang paling dicintai Allah adalah yang paling konsisten meski sedikit.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-4 bg-black/20 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center px-3 border-r border-white/20">
              <span className="text-xs text-orange-200 block">Streak Tertinggi</span>
              <span className="text-2xl font-black text-white">{longestStreak} Hari</span>
            </div>
            <div className="text-center px-3">
              <span className="text-xs text-orange-200 block">Total Pengalaman</span>
              <span className="text-2xl font-black text-amber-300">{xp} XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Level Progress & Weekly Calendar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Level & Rank Card */}
        <div className="md:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{levelInfo.badge}</span>
                <div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    Tingkat Kemahiran Santri
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{levelInfo.title}</h3>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800">
                Tingkat {levelInfo.level}
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-4">
              Tingkatkan XP Anda dengan menyelesaikan latihan I'rab, membaca materi kitab, dan berkonsultasi dengan Ustadz AI.
            </p>

            {/* Progress Bar */}
            <div className="space-y-1.5 mb-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-600">{xp} XP</span>
                <span className="text-slate-400">Target: {levelInfo.nextLevelXp} XP</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${levelInfo.progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Latihan selesai: <strong>{userProfile?.totalExercisesCompleted || 0} soal</strong></span>
            <span>Target selanjutnya: Tingkat {levelInfo.level + 1}</span>
          </div>
        </div>

        {/* Weekly Activity Calendar Card */}
        <div className="md:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <h3 className="text-base font-bold text-slate-900">Aktivitas 7 Hari Terakhir</h3>
            </div>
            <span className="text-xs text-slate-400 font-semibold">Tersimpan di Cloud</span>
          </div>

          <p className="text-xs text-slate-500 mb-6">
            Buka aplikasi dan ikuti minimal 1 sesi belajar setiap hari agar api streak Anda tidak padam.
          </p>

          <div className="grid grid-cols-7 gap-2 text-center">
            {weekDays.map((wd, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1 ${
                  wd.isActive
                    ? 'bg-amber-50 border-amber-300 shadow-xs'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                } ${wd.isToday ? 'ring-2 ring-emerald-500' : ''}`}
              >
                <span className="text-[11px] font-semibold text-slate-400">{wd.dayName}</span>
                <span className="text-sm font-bold text-slate-800">{wd.dateNum}</span>
                {wd.isActive ? (
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span>Hari Aktif</span>
            </span>
            <span>Hari ini: {userProfile?.lastLoginDate || 'Aktif'}</span>
          </div>
        </div>
      </div>

      {/* Daily Target Checklist */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-emerald-600" />
          <h3 className="text-base font-bold text-slate-900">Target Belajar Harian (Daily Quests)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-950">1x Konsultasi AI</h4>
              <p className="text-xs text-emerald-700 mt-0.5">Tanyakan 1 kaidah atau bedah kalimat I'rab.</p>
              <span className="inline-block mt-2 text-[10px] font-bold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-300">
                +10 XP
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-teal-950">1x Baca Bab Kitab</h4>
              <p className="text-xs text-teal-700 mt-0.5">Telaah matan Al-Jurumiyyah atau Amtsilah.</p>
              <span className="inline-block mt-2 text-[10px] font-bold text-teal-800 bg-white px-2 py-0.5 rounded border border-teal-300">
                +10 XP
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-950">Selesaikan Latihan</h4>
              <p className="text-xs text-amber-700 mt-0.5">Jawab kuis I'rab atau wazan shorof.</p>
              <span className="inline-block mt-2 text-[10px] font-bold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-300">
                +20 XP
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Badges & Achievements */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-amber-500" />
          <h3 className="text-base font-bold text-slate-900">Lencana & Prestasi (Syaraful Himmah)</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between ${
                b.unlocked
                  ? 'bg-amber-50/50 border-amber-300 shadow-xs'
                  : 'bg-slate-50 border-slate-200 opacity-50 grayscale'
              }`}
            >
              <div>
                <span className="text-3xl block mb-2">{b.icon}</span>
                <h4 className="text-xs font-bold text-slate-900">{b.title}</h4>
                <p className="text-[11px] text-slate-500 mt-1">{b.desc}</p>
              </div>

              <div className="mt-3">
                {b.unlocked ? (
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                    Terbuka ✓
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold text-slate-400 bg-slate-200 px-2 py-0.5 rounded-full">
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
