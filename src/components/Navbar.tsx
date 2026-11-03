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
} from 'lucide-react';

import { SmartKibLogo } from './SmartKibLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { userProfile, isAdmin, logout } = useAuth();

  const navItems = [
    { id: 'chat', label: 'Tanya Musyrif SmartKib', icon: MessageSquare, arabic: 'مُشْرِفُ سْمَارْتْ كِيب' },
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
          {/* Logo Brand SmartKib */}
          <SmartKibLogo
            size="md"
            clickable
            onClick={() => setActiveTab('chat')}
          />

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-emerald-100/80">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20 scale-[1.02]'
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-white'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                  <span>{item.label}</span>
                  {item.id === 'admin' && (
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Profile, Streak & Logout */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Streak Counter Pill */}
            <button
              onClick={() => setActiveTab('streak')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-extrabold shadow-2xs transition-all active:scale-95 cursor-pointer"
              title="Lama hari berturut-turut belajar"
              aria-label="Lihat streak belajar"
            >
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span>{userProfile?.currentStreak ?? 0} Hari</span>
            </button>

            {/* Profile Dropdown / Info */}
            <div className="flex items-center gap-2 pl-2 border-l border-emerald-100">
              <div className="text-right hidden lg:block">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-xs font-bold text-slate-800 truncate max-w-[140px]">
                    {userProfile?.displayName || 'Santri'}
                  </span>
                  {isAdmin && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-emerald-700 text-white shadow-2xs">
                      ADMIN
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-slate-500 truncate block max-w-[140px]">
                  {userProfile?.email}
                </span>
              </div>

              {userProfile?.photoURL ? (
                <img
                  src={userProfile.photoURL}
                  alt={userProfile.displayName}
                  className="w-9 h-9 rounded-full ring-2 ring-emerald-200 object-cover shadow-xs"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  {userProfile?.displayName?.charAt(0) || <User className="w-4 h-4" />}
                </div>
              )}

              {/* Logout Button */}
              <button
                onClick={logout}
                className="flex items-center gap-1 p-2 sm:px-3 sm:py-1.5 rounded-xl text-rose-600 hover:text-rose-700 hover:bg-rose-50 text-xs font-bold transition-all cursor-pointer"
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
        <div className="flex md:hidden overflow-x-auto py-2 gap-1.5 border-t border-emerald-100">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-700 bg-white hover:bg-emerald-50 border border-slate-100'
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
