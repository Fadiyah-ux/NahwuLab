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

  const isStreak = activeTab === 'streak';

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 shadow-md ${
        isStreak
          ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white border-b border-orange-500/40 shadow-orange-950/20'
          : 'bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-900 text-white border-b border-emerald-600/30 shadow-emerald-950/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Brand SmartKib */}
          <SmartKibLogo
            size="md"
            clickable
            inverted={true}
            accentColor={isStreak ? 'amber' : 'emerald'}
            onClick={() => setActiveTab('chat')}
          />

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1.5 bg-black/25 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? isStreak
                        ? 'bg-white text-orange-950 shadow-md shadow-orange-950/20 scale-[1.02]'
                        : 'bg-white text-emerald-950 shadow-md shadow-emerald-950/20 scale-[1.02]'
                      : 'text-white/85 hover:text-white hover:bg-white/15'
                  }`}
                  aria-label={item.label}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive
                        ? isStreak
                          ? 'text-orange-600'
                          : 'text-emerald-700'
                        : 'text-white'
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.id === 'admin' && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
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
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-extrabold shadow-sm transition-all active:scale-95 cursor-pointer ${
                isStreak
                  ? 'bg-white text-orange-950 border-white shadow-orange-900/20'
                  : 'bg-white/15 hover:bg-white/25 border-white/25 text-white'
              }`}
              title="Lama hari berturut-turut belajar"
              aria-label="Lihat streak belajar"
            >
              <Flame
                className={`w-4 h-4 ${
                  isStreak
                    ? 'text-orange-600 fill-orange-500'
                    : 'text-amber-300 fill-amber-300'
                } animate-pulse`}
              />
              <span>{userProfile?.currentStreak ?? 0} Hari</span>
            </button>

            {/* Profile Dropdown / Info */}
            <div
              className={`flex items-center gap-2 pl-2 border-l ${
                isStreak ? 'border-orange-400/40' : 'border-emerald-500/40'
              }`}
            >
              <div className="text-right hidden lg:block">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-xs font-bold text-white truncate max-w-[140px]">
                    {userProfile?.displayName || 'Santri'}
                  </span>
                  {isAdmin && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-white/20 text-white border border-white/30 shadow-2xs">
                      ADMIN
                    </span>
                  )}
                </div>
                <span
                  className={`text-[11px] truncate block max-w-[140px] font-medium ${
                    isStreak ? 'text-orange-100/90' : 'text-emerald-100/90'
                  }`}
                >
                  {userProfile?.email}
                </span>
              </div>

              {userProfile?.photoURL ? (
                <img
                  src={userProfile.photoURL}
                  alt={userProfile.displayName}
                  className={`w-9 h-9 rounded-full object-cover shadow-xs ring-2 ${
                    isStreak ? 'ring-amber-300/80' : 'ring-emerald-300/80'
                  }`}
                />
              ) : (
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow-xs ${
                    isStreak
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'bg-white/20 text-white border border-white/30'
                  }`}
                >
                  {userProfile?.displayName?.charAt(0) || <User className="w-4 h-4" />}
                </div>
              )}

              {/* Logout Button */}
              <button
                onClick={logout}
                className="flex items-center gap-1 p-2 sm:px-3 sm:py-1.5 rounded-xl text-white/85 hover:text-white hover:bg-white/15 text-xs font-bold transition-all cursor-pointer border border-transparent hover:border-white/20"
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
        <div
          className={`flex md:hidden overflow-x-auto py-2 gap-1.5 border-t ${
            isStreak ? 'border-orange-500/40' : 'border-emerald-600/30'
          }`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  isActive
                    ? isStreak
                      ? 'bg-white text-orange-950 shadow-xs'
                      : 'bg-white text-emerald-950 shadow-xs'
                    : 'text-white/85 bg-white/10 hover:bg-white/20 border border-white/15'
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
