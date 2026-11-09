import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { ChatTab } from './components/ChatTab';
import { LibraryTab } from './components/LibraryTab';
import { ExerciseTab } from './components/ExerciseTab';
import { StreakTab } from './components/StreakTab';
import { AdminTab } from './components/AdminTab';

const MainLayout: React.FC = () => {
  const { userProfile, loading, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('chat');

  // Splash Screen - Refined per Requirement 6 & 1:
  // - Logo enlarged slightly, pure transparent without box/background
  // - No sparkle/star icon
  // - Text strictly "SmartKib" in white
  // - Slogan removed completely, harmonious spacing
  // Splash Screen - Bubble Bash Theme:
  // - Vibrant Midnight Navy with Sunny Yellow glow
  // - Clean logo drop-shadow
  // - Pure "SmartKib" title with hot pink accent
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0C122C] via-[#161F46] to-[#0A0F24] flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
        <div className="absolute w-72 h-72 rounded-full bg-[#FFD233]/15 blur-3xl -top-12 -left-12 pointer-events-none" />
        <div className="absolute w-72 h-72 rounded-full bg-[#FF2D78]/20 blur-3xl -bottom-12 -right-12 pointer-events-none" />
        <div className="w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center animate-pulse relative z-10">
          <img
            src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
            alt="SmartKib Logo"
            className="w-full h-full object-contain filter drop-shadow-2xl"
          />
        </div>
        <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white tracking-wider relative z-10">
          Smart<span className="text-[#FF2D78]">Kib</span>
        </h1>
        <p className="text-xs font-bold text-[#FFD233] mt-2 tracking-widest uppercase relative z-10">
          Pendalaman Ilmu Nahwu &amp; Sharaf
        </p>
      </div>
    );
  }

  // Wajib Login constraint
  if (!userProfile) {
    return <AuthModal />;
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#0C122C] flex flex-col selection:bg-[#FF2D78] selection:text-white">
      {/* Top Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Body - Tabs kept mounted so AI processing & unsent inputs are never lost */}
      <main className="flex-1 pb-16">
        <div className={activeTab === 'chat' ? 'block' : 'hidden'}>
          <ChatTab />
        </div>
        <div className={activeTab === 'library' ? 'block' : 'hidden'}>
          <LibraryTab />
        </div>
        <div className={activeTab === 'exercises' ? 'block' : 'hidden'}>
          <ExerciseTab />
        </div>
        <div className={activeTab === 'streak' ? 'block' : 'hidden'}>
          <StreakTab />
        </div>
        {isAdmin && (
          <div className={activeTab === 'admin' ? 'block' : 'hidden'}>
            <AdminTab />
          </div>
        )}
      </main>

      {/* Footer - Bubble Bash Modern Retail/Bubbly Styling */}
      <footer className="border-t-2 border-[#0C122C]/10 bg-white/95 backdrop-blur-md py-6 text-center text-xs text-slate-500 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#0C122C] to-[#1E1B4B] border-2 border-[#FFD233] flex items-center justify-center p-1 shadow-xs">
              <img
                src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
                alt="SmartKib"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <div className="font-black text-[#0C122C] text-sm tracking-tight">
                Smart<span className="text-[#FF2D78]">Kib</span>
              </div>
              <div className="text-[11px] text-slate-500 font-semibold">
                Platform Pembelajaran Nahwu &amp; Sharaf Berbasis 2 Kitab Rujukan Turats
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
            <span className="px-3 py-1 rounded-full bg-[#FFF9D2] text-[#854D0E] border border-[#FDE047] shadow-2xs">
              Muthammimah al-Jurumiyah (31 Bab)
            </span>
            <span className="text-slate-300">•</span>
            <span className="px-3 py-1 rounded-full bg-[#FFE5EE] text-[#BE123C] border border-[#FECDD3] shadow-2xs">
              Amtsilah Tasrifiyah (24 Bab)
            </span>
            <span className="text-slate-300">•</span>
            <span className="px-3 py-1 rounded-full bg-[#E0F9FF] text-[#0369A1] border border-[#BAE6FD] shadow-2xs">
              Tanya Musyrif SmartKib
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}
