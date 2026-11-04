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
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 flex flex-col items-center justify-center text-white p-6">
        <div className="w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center animate-pulse">
          <img
            src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
            alt="SmartKib Logo"
            className="w-full h-full object-contain filter drop-shadow-2xl"
          />
        </div>
        <h1 className="mt-6 text-2xl sm:text-3xl font-black text-white tracking-wider">
          SmartKib
        </h1>
      </div>
    );
  }

  // Wajib Login constraint
  if (!userProfile) {
    return <AuthModal />;
  }

  return (
    <div className="min-h-screen bg-[#F4FBF7] text-slate-800 flex flex-col selection:bg-emerald-600 selection:text-white">
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

      {/* Footer */}
      <footer className="border-t border-emerald-100 bg-white py-6 text-center text-xs text-slate-500 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
              alt="SmartKib"
              className="w-6 h-6 object-contain"
            />
            <span className="font-extrabold text-slate-800">
              Smart<span className="text-emerald-600">Kib</span>
            </span>
            <span>— Pendalaman Ilmu Nahwu &amp; Sharaf Berbasis 6 Kitab Turats</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span className="hover:text-emerald-700 transition-colors">Al-Ajurumiyyah</span>
            <span>•</span>
            <span className="hover:text-emerald-700 transition-colors">Amtsilah Tashrifiyah</span>
            <span>•</span>
            <span className="text-emerald-700 font-bold">Tanya Musyrif SmartKib</span>
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
