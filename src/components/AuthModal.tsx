import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  Sparkles,
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 text-slate-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-emerald-500 selection:text-white">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-500 filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-teal-500 filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Header Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-xl shadow-emerald-900/50 mb-4 border border-emerald-400/30">
            <span className="font-serif font-bold text-3xl">ن</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nahwu<span className="text-emerald-400">Lab</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-emerald-200/80 font-medium max-w-md mx-auto">
            مَخْبَرُ النَّحْوِ وَالصَّرْفِ • Platform Pendalaman Kaidah Gramatika, Morfologi, dan I'rab Kalimat Bahasa Arab
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch bg-slate-800/80 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/60">
          
          {/* Left Column: Feature Highlights */}
          <div className="md:col-span-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-700/60 pb-6 md:pb-0 md:pr-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Teknologi AI & Kaidah Pesantren</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Kuasai Bahasa Arab dengan Presisi Tinggi
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Silakan masuk untuk mengakses seluruh modul pembelajaran, konsultasi AI, pustaka kitab matan, dan melacak rekor streak belajar harian Anda.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Konsultasi AI & I'rab Lengkap</h3>
                    <p className="text-xs text-slate-400">Bedah susunan gramatikal kata, tarkib, dan sighah shorof secara mendalam.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Pustaka Kitab Klasik</h3>
                    <p className="text-xs text-slate-400">Matan Al-Jurumiyyah, Al-Amtsilah At-Tashrifiyyah, Imrithi & Kaidah I'lal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Latihan & Kuis Interaktif</h3>
                    <p className="text-xs text-slate-400">Tantangan I'rab berjenjang: Mubtadi', Mutawassith, hingga Mutaqaddim.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Streak Belajar Harian</h3>
                    <p className="text-xs text-slate-400">Pelacak kedisiplinan belajar otomatis yang tersimpan di cloud.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Admin Access Card */}
            <div className="mt-8 pt-6 border-t border-slate-700/60 bg-slate-900/40 p-4 rounded-2xl border border-amber-500/20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Akun Administrator Terdaftar</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-semibold">
                  Admin
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Email: <code className="text-slate-200">izzahfadiyah649@gmail.com</code>
              </p>
              <button
                type="button"
                onClick={handleAdminQuickLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors"
              >
                <span>Masuk Cepat Sebagai Admin (1-Klik)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Sign-in Form */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white">
                {isRegister ? 'Pendaftaran Santri Baru' : 'Masuk ke NahwuLab'}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {isRegister
                  ? 'Lengkapi data untuk memulai perjalanan ilmu nahwu Anda'
                  : 'Gunakan Google Sign-in atau akun email & kata sandi'}
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-900/40 border border-red-500/50 text-red-200 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Google Sign-in Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm shadow-md transition-all active:scale-[0.98] disabled:opacity-60"
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
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-slate-800 px-3 text-slate-400">
                  atau masuk dengan email
                </span>
              </div>
            </div>

            {/* Email & Password Form */}
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              {isRegister && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nama Lengkap / Santri
                  </label>
                  <input
                    type="text"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Contoh: Muhammad Ihsan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@domain.com"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Kata Sandi
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-700/30 transition-all active:scale-[0.98] disabled:opacity-60"
              >
                <span>{loading ? 'Memproses...' : isRegister ? 'Daftar Sekarang' : 'Masuk ke Aplikasi'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Toggle Register/Login */}
            <div className="mt-5 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsRegister(!isRegister);
                  setErrorMsg(null);
                }}
                className="text-xs text-emerald-400 hover:text-emerald-300 underline font-medium"
              >
                {isRegister
                  ? 'Sudah punya akun? Masuk di sini'
                  : 'Belum punya akun? Daftar sebagai santri baru'}
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 text-center text-xs text-slate-500">
          NahwuLab • Didukung oleh Firebase Firestore, Google Auth & Gemini Server-Side
        </div>
      </div>
    </div>
  );
};
