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
  const { userProfile, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('chat');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 flex flex-col items-center justify-center text-white">
        <div className="relative">
          <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-emerald-400/40 flex items-center justify-center p-3 shadow-2xl shadow-emerald-950/40 animate-pulse">
            <img
              src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
              alt="SmartKib Logo"
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-xs shadow-md">
            ✨
          </div>
        </div>
        <p className="mt-5 text-white text-lg font-black tracking-wide">
          Memuat SmartKib
        </p>
        <p className="mt-1 text-xs text-emerald-200 font-semibold">
          Menyiapkan modul gramatika &amp; Musyrif SmartKib...
        </p>
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

      {/* Main Content Body */}
      <main className="flex-1 pb-16">
        {activeTab === 'chat' && <ChatTab />}
        {activeTab === 'library' && <LibraryTab />}
        {activeTab === 'exercises' && <ExerciseTab />}
        {activeTab === 'streak' && <StreakTab />}
        {activeTab === 'admin' && <AdminTab />}
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
            <span className="font-extrabold text-slate-800">Smart<span className="text-emerald-600">Kib</span></span>
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
