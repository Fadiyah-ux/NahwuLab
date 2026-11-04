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
  BookOpen,
  MessageSquare,
  ShieldAlert,
} from 'lucide-react';

export const StreakTab: React.FC = () => {
  const { userProfile } = useAuth();
  const currentStreak = userProfile?.currentStreak ?? 0;
  const longestStreak = userProfile?.longestStreak ?? 0;
  const xp = userProfile?.xp ?? 0;
  const levelInfo = calculateUserLevel(xp);

  // Generate days for visual calendar
  const today = new Date();
  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - (6 - i));
    const isToday = i === 6;
    const isPastStreak = currentStreak > 0 && i >= 7 - Math.min(currentStreak, 7);
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
        {/* Soft background glows */}
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
              "أَحَبُّ الْأَعْمَالِ إِلَى اللهِ أَدْوَمُهَا وَإِنْ قَلَّ" — Amalan yang paling dicintai Allah adalah yang paling konsisten meski sedikit.
            </p>
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
              Tingkatkan XP Anda dengan menyelesaikan kuis I'rab, membaca materi kitab turats, dan berkonsultasi dengan Tanya Musyrif SmartKib.
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
                ></div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Latihan selesai: <strong className="text-slate-900">{userProfile?.totalExercisesCompleted || 0} soal</strong></span>
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
              <h3 className="text-base font-bold text-slate-900">Aktivitas 7 Hari Terakhir</h3>
            </div>
            <span className="text-xs text-emerald-800 font-medium bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Cloud Sync ✓
            </span>
          </div>

          <p className="text-xs text-slate-600 font-medium mb-5">
            Buka aplikasi dan ikuti minimal 1 sesi belajar setiap hari agar api streak Anda tetap menyala!
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
            <span>Hari ini: {userProfile?.lastLoginDate || 'Aktif'}</span>
          </div>
        </div>
      </div>

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
              <p className="text-xs text-slate-600 font-normal mt-0.5">Tanyakan 1 kaidah atau bedah kalimat I'rab.</p>
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
                +10 XP
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Selesaikan Latihan</h4>
              <p className="text-xs text-slate-600 font-normal mt-0.5">Jawab kuis I'rab atau wazan shorof.</p>
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
            <h3 className="text-base font-bold text-slate-900">Lencana & Prestasi (Syaraful Himmah)</h3>
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
