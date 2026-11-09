import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Flame,
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
    { id: 'chat', label: 'Beranda', arabic: 'الرَّئِيسِيَّةُ' },
    { id: 'library', label: 'Pustaka Kitab', arabic: 'الْمَكْتَبَةُ' },
    { id: 'exercises', label: 'Latihan & Kuis', arabic: 'التَّمْرِينَاتُ' },
    { id: 'streak', label: 'Streak Belajar', arabic: 'الْمُوَاظَبَةُ' },
  ];

  if (isAdmin) {
    navItems.push({
      id: 'admin',
      label: 'Panel Admin',
      arabic: 'لَوْحَةُ الْإِدَارَةِ',
    });
  }

  const isStreak = activeTab === 'streak';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 shadow-md bg-[#0C122C] text-white border-b-2 border-[#FFD233]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Brand SmartKib with Bubble Bash styling */}
          <SmartKibLogo
            size="md"
            clickable
            inverted={true}
            accentColor={isStreak ? 'orange' : 'pink'}
            onClick={() => setActiveTab('chat')}
          />

          {/* Navigation Links (Desktop) - Bubble Bash Bubbly Pill Container Without Submenu Icons */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#161F46] p-1.5 rounded-full border border-white/15 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;

              // Distinct playful Bubble Bash active button colors
              let activeColorStyle = 'bg-[#FFD233] text-[#0C122C] shadow-sm';
              if (item.id === 'streak') {
                activeColorStyle = 'bg-[#FF6B00] text-white shadow-sm';
              } else if (item.id === 'chat') {
                activeColorStyle = 'bg-[#FF2D78] text-white shadow-sm';
              } else if (item.id === 'library') {
                activeColorStyle = 'bg-[#00D2FF] text-[#0C122C] shadow-sm';
              } else if (item.id === 'exercises') {
                activeColorStyle = 'bg-[#FFD233] text-[#0C122C] shadow-sm';
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer text-center ${
                    isActive
                      ? `${activeColorStyle} scale-100 font-black`
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label={item.label}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Profile, Streak & Logout */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Streak Counter Pill - Bubble Bash Bubbly Flame Tag */}
            <button
              onClick={() => setActiveTab('streak')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-2 text-xs sm:text-sm font-black shadow-xs transition-all active:scale-95 cursor-pointer ${
                isStreak
                  ? 'bg-[#FF6B00] text-white border-[#FFD233] shadow-[#FF6B00]/40'
                  : 'bg-[#FF6B00]/20 hover:bg-[#FF6B00]/30 border-[#FF6B00] text-[#FFD233]'
              }`}
              title="Lama hari berturut-turut belajar"
              aria-label="Lihat streak belajar"
            >
              <Flame className="w-4 h-4 text-[#FFD233] fill-[#FFD233] animate-bounce" />
              <span>{userProfile?.currentStreak ?? 0} Hari</span>
            </button>

            {/* Profile Dropdown / Info */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/20">
              <div className="text-right hidden lg:block">
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-xs font-bold text-white truncate max-w-[140px]">
                    {userProfile?.displayName || 'Santri'}
                  </span>
                  {isAdmin && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#FFD233] text-[#0C122C] shadow-2xs">
                      ADMIN
                    </span>
                  )}
                </div>
                <span className="text-[11px] truncate block max-w-[140px] font-medium text-slate-300">
                  {userProfile?.email}
                </span>
              </div>

              {userProfile?.photoURL ? (
                <img
                  src={userProfile.photoURL}
                  alt={userProfile.displayName}
                  className="w-9 h-9 rounded-full object-cover shadow-xs ring-2 ring-[#FF2D78]"
                />
              ) : (
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm shadow-xs bg-[#FF2D78] text-white ring-2 ring-white/20">
                  {userProfile?.displayName?.charAt(0) || <User className="w-4 h-4" />}
                </div>
              )}

              {/* Logout Button */}
              <button
                onClick={logout}
                className="flex items-center gap-1 p-2 sm:px-3 sm:py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 text-xs font-bold transition-all cursor-pointer border border-transparent hover:border-white/20"
                title="Keluar dari akun"
                aria-label="Tombol Keluar / Logout"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Tabs Without Submenu Icons */}
        <div className="flex md:hidden overflow-x-auto py-2.5 gap-2 border-t border-white/10 scrollbar-none">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-black whitespace-nowrap transition-colors cursor-pointer text-center ${
                  isActive
                    ? 'bg-[#FFD233] text-[#0C122C] shadow-xs'
                    : 'text-white/80 bg-white/10 hover:bg-white/20 border border-white/10'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
