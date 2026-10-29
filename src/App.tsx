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
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-3xl font-serif font-bold shadow-xl shadow-emerald-950 animate-pulse">
          ن
        </div>
        <p className="mt-4 text-emerald-300 text-sm font-medium tracking-wide">
          Memuat NahwuLab • مَخْبَرُ النَّحْوِ
        </p>
      </div>
    );
  }

  // Wajib Login constraint
  if (!userProfile) {
    return <AuthModal />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-emerald-500 selection:text-white">
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
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-emerald-800 text-sm">ن</span>
            <span className="font-bold text-slate-700">NahwuLab</span>
            <span>— Pendalaman Ilmu Nahwu & Shorof Berbasis AI</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Matan Al-Jurumiyyah</span>
            <span>•</span>
            <span>Al-Amtsilah At-Tashrifiyyah</span>
            <span>•</span>
            <span>Firebase & Gemini</span>
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
