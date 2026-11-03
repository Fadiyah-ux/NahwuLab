import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SmartKibLogo } from './SmartKibLogo';
import {
  MessageSquare,
  Bot,
  BookOpen,
  Award,
  Flame,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
  ArrowRight,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { loginWithGoogle, loginWithEmail, registerWithEmail, loginAsDemoAdmin } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      if (isRegister) {
        if (!displayName.trim()) {
          setErrorMsg('Nama lengkap / gelar santri wajib diisi');
          setLoading(false);
          return;
        }
        await registerWithEmail(email, password, displayName);
      } else {
        await loginWithEmail(email, password);
      }
    } catch (err: any) {
      console.error('Auth error:', err);
      let msg = 'Gagal melakukan otentikasi. Silakan periksa kembali data Anda.';
      if (err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
        msg = 'Kata sandi atau email tidak cocok.';
      } else if (err.code === 'auth/user-not-found') {
        msg = 'Akun belum terdaftar. Silakan daftar atau gunakan tombol masuk admin.';
      } else if (err.code === 'auth/weak-password') {
        msg = 'Kata sandi minimal 6 karakter.';
      } else if (err.code === 'auth/email-already-in-use') {
        msg = 'Email ini sudah terdaftar. Silakan pilih Masuk.';
      } else if (err?.message) {
        msg = err.message;
      }
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMsg(null);
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (err: any) {
      console.error('Google sign in error:', err);
      setErrorMsg('Gagal masuk dengan Google. Pastikan popup tidak diblokir oleh peramban.');
    } finally {
      setLoading(false);
    }
  };

  const handleAdminQuickLogin = async () => {
    setEmail('izzahfadiyah649@gmail.com');
    setPassword('Faza4321');
    setErrorMsg(null);
    setLoading(true);
    try {
      await loginAsDemoAdmin();
    } catch (err: any) {
      setErrorMsg('Gagal masuk akun admin: ' + (err.message || 'Coba kembali'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EBF7F0] via-[#F4FBF7] to-[#E6F4ED] text-slate-800 flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8 selection:bg-emerald-600 selection:text-white relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-200/50 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-200/40 filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Header Branding */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-emerald-100 shadow-md shadow-emerald-900/5 mb-3">
            <SmartKibLogo size="lg" showTagline={false} />
          </div>
          <p className="mt-1 text-sm sm:text-base text-slate-700 font-bold max-w-md mx-auto">
            Platform Pendalaman Kaidah Gramatika, Morfologi &amp; I&apos;rab Interaktif
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch bg-white border border-emerald-100/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-emerald-950/5">
          
          {/* Left Column: Feature Highlights */}
          <div className="md:col-span-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-emerald-100/80 pb-6 md:pb-0 md:pr-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4 shadow-2xs">
                <span>⭐ Kurikulum Gramatika &amp; Kaidah Turats Pesantren</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-2">
                Kuasai Bahasa Arab dengan Menyenangkan &amp; Presisi
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6">
                Silakan masuk untuk mengakses seluruh modul pembelajaran, Tanya Musyrif SmartKib, pustaka 6 kitab klasik, dan melacak rekor streak belajar harian Anda.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50/80 border border-emerald-100/80 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800">Tanya Musyrif SmartKib &amp; Bedah Tarkib</h3>
                    <p className="text-[11px] text-slate-500">Konsultasi kaidah langsung berpedoman pada kitab turats mu&apos;tamad.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50/80 border border-emerald-100/80 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5 border border-teal-200">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800">Pustaka 6 Kitab Turats Pokok</h3>
                    <p className="text-[11px] text-slate-500">Matan Al-Ajurumiyyah, Imrithi, Mutammimah, Alfiyah, Amtsilah &amp; Al-Maqshud.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50/80 border border-emerald-100/80 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800">Latihan &amp; Kuis Adaptif</h3>
                    <p className="text-[11px] text-slate-500">Tantangan berjenjang: Pemula, Menengah, hingga Mahir dengan rujukan kitab.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50/80 border border-emerald-100/80 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                    <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-800">Streak Belajar &amp; XP Riil</h3>
                    <p className="text-[11px] text-slate-500">Pelacak kedisiplinan belajar santri mulai dari 0 XP secara adil &amp; konsisten.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Admin Access Card */}
            <div className="mt-6 pt-4 border-t border-emerald-100 bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-200/80 shadow-2xs">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Akun Administrator Terdaftar</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600 text-white font-extrabold shadow-2xs">
                  Admin
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-2.5 font-medium">
                Email: <code className="text-slate-800 font-bold bg-white px-1.5 py-0.5 rounded border border-emerald-200">izzahfadiyah649@gmail.com</code>
              </p>
              <button
                type="button"
                onClick={handleAdminQuickLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-700/20 active:translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Masuk Cepat Sebagai Admin (1-Klik)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Sign-in Form */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="mb-5">
              <h2 className="text-xl font-black text-slate-800">
                {isRegister ? 'Pendaftaran Santri Baru' : 'Masuk ke SmartKib'}
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                {isRegister
                  ? 'Lengkapi data untuk memulai perjalanan ilmu nahwu & sharaf Anda'
                  : 'Gunakan Google Sign-in atau akun email & kata sandi'}
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2 shadow-xs">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span className="font-semibold">{errorMsg}</span>
              </div>
            )}

            {/* Google Sign-in Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-black text-sm shadow-xs transition-all active:scale-[0.98] disabled:opacity-60 cursor-pointer"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Lanjutkan dengan Google</span>
            </button>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-slate-400 font-bold">
                  atau masuk dengan email
                </span>
              </div>
            </div>

            {/* Email & Password Form */}
            <form onSubmit={handleEmailSubmit} className="space-y-3.5">
              {isRegister && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Lengkap / Santri
                  </label>
                  <input
                    type="text"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Contoh: Muhammad Ihsan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all font-medium"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@domain.com"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kata Sandi
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-emerald-600 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-700/20 active:translate-y-0.5 transition-all disabled:opacity-60 cursor-pointer"
              >
                <span>{loading ? 'Memproses...' : isRegister ? 'Daftar Sekarang' : 'Masuk ke Aplikasi'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Toggle Register/Login */}
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsRegister(!isRegister);
                  setErrorMsg(null);
                }}
                className="text-xs text-emerald-700 hover:text-emerald-800 underline font-bold cursor-pointer"
              >
                {isRegister
                  ? 'Sudah punya akun? Masuk di sini'
                  : 'Belum punya akun? Daftar sebagai santri baru'}
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-5 text-center text-xs text-slate-500 font-medium">
          SmartKib • Didukung oleh Firebase Firestore, Google Auth &amp; Gemini Server-Side
        </div>
      </div>
    </div>
  );
};
