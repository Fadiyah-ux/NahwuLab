import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  MessageSquare,
  BookOpen,
  Award,
  Flame,
  ShieldCheck,
  LogOut,
  User,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { userProfile, isAdmin, logout } = useAuth();

  const navItems = [
    { id: 'chat', label: 'Tanya AI & I\'rab', icon: MessageSquare, arabic: 'الْمُعَلِّمُ الذَّكِيُّ' },
    { id: 'library', label: 'Pustaka Kitab', icon: BookOpen, arabic: 'الْمَكْتَبَةُ' },
    { id: 'exercises', label: 'Latihan & Kuis', icon: Award, arabic: 'التَّمْرِينَاتُ' },
    { id: 'streak', label: 'Streak Belajar', icon: Flame, arabic: 'الْمُوَاظَبَةُ' },
  ];

  if (isAdmin) {
    navItems.push({
      id: 'admin',
      label: 'Panel Admin',
      icon: ShieldCheck,
      arabic: 'لَوْحَةُ الْإِدَارَةِ',
    });
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('chat')}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-900 flex items-center justify-center text-white shadow-md shadow-emerald-200">
              <span className="font-serif font-bold text-lg sm:text-xl">ن</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
                  Nahwu<span className="text-emerald-600">Lab</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  مَخْبَرُ النَّحْوِ
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Kajian Gramatika Nahwu, Shorof & I'rab Digital
              </p>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-emerald-700 shadow-sm border border-emerald-100'
                      : 'text-slate-600 hover:text-emerald-700 hover:bg-white/50'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.id === 'admin' && (
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Profile, Streak & Logout */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Streak Counter Pill */}
            <button
              onClick={() => setActiveTab('streak')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-bold shadow-xs hover:bg-amber-100 transition-colors"
              title="Lama hari berturut-turut belajar"
              aria-label="Lihat streak belajar"
            >
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              <span>{userProfile?.currentStreak || 1} Hari</span>
            </button>

            {/* Profile Dropdown / Info */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="text-right hidden lg:block">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-xs font-bold text-slate-800 truncate max-w-[140px]">
                    {userProfile?.displayName || 'Santri'}
                  </span>
                  {isAdmin && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                      ADMIN
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-slate-400 truncate block max-w-[140px]">
                  {userProfile?.email}
                </span>
              </div>

              {userProfile?.photoURL ? (
                <img
                  src={userProfile.photoURL}
                  alt={userProfile.displayName}
                  className="w-9 h-9 rounded-full ring-2 ring-emerald-500/20 object-cover"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                  {userProfile?.displayName?.charAt(0) || <User className="w-4 h-4" />}
                </div>
              )}

              {/* Logout Button */}
              <button
                onClick={logout}
                className="flex items-center gap-1 p-2 sm:px-3 sm:py-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 text-xs font-semibold transition-colors"
                title="Keluar dari akun"
                aria-label="Tombol Keluar / Logout"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Tabs */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-1 border-t border-slate-100">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
