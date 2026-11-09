import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SmartKibLogo } from './SmartKibLogo';
import {
  MessageSquare,
  BookOpen,
  Award,
  Flame,
  ShieldCheck,
  Lock,
  Mail,
  ArrowRight,
  AlertCircle,
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
    <div className="min-h-screen bg-[#FFFDF5] text-[#0C122C] flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8 selection:bg-[#FF2D78] selection:text-white relative overflow-hidden">
      {/* Playful Bubble Bash Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FFD233]/25 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#FF2D78]/15 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-[#00D2FF]/15 filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full z-10">
        {/* Header Branding */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center bg-white/95 backdrop-blur-md p-4 rounded-3xl border-2 border-slate-200 shadow-lg shadow-[#0C122C]/5 mb-3">
            <SmartKibLogo size="lg" showTagline={false} />
          </div>
          <p className="mt-1 text-sm sm:text-base text-[#0C122C] font-black max-w-md mx-auto">
            Platform Pendalaman Kaidah Gramatika, Morfologi &amp; I&apos;rab Interaktif
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch bg-white border-2 border-slate-200 rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-[#0C122C]/5">
          
          {/* Left Column: Feature Highlights */}
          <div className="md:col-span-6 flex flex-col justify-between border-b md:border-b-0 md:border-r-2 border-slate-200 pb-6 md:pb-0 md:pr-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#FFD233] text-[#0C122C] border-2 border-[#FFD233] mb-4 shadow-2xs">
                <span>Kurikulum Gramatika &amp; Kaidah Turats Pesantren</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0C122C] mb-2 leading-tight">
                Kuasai Bahasa Arab dengan Menyenangkan &amp; Presisi
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                Silakan masuk untuk mengakses modul Tanya Musyrif SmartKib, pustaka 2 kitab rujukan pokok, dan melacak rekor streak belajar harian Anda.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FFE5EE]/60 border-2 border-[#FF2D78]/25 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-[#FF2D78] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-[#0C122C]">Tanya Musyrif SmartKib &amp; Bedah Tarkib</h3>
                    <p className="text-[11px] text-slate-600 font-medium">Konsultasi kaidah langsung berpedoman pada kitab turats mu&apos;tamad.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#E0F9FF]/60 border-2 border-[#00D2FF]/30 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-[#00D2FF] text-[#0C122C] flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-[#0C122C]">Pustaka 2 Kitab Rujukan Pokok</h3>
                    <p className="text-[11px] text-slate-600 font-medium">Muthammimah al-Jurumiyah (Ilmu Nahwu) &amp; Amtsilah Tasrifiyah (Ilmu Shorof).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FFF9D2]/60 border-2 border-[#FFD233] shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-[#FFD233] text-[#0C122C] flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-[#0C122C]">Latihan &amp; Kuis Adaptif</h3>
                    <p className="text-[11px] text-slate-600 font-medium">Tantangan berjenjang: Pemula, Menengah, hingga Mahir dengan rujukan kitab.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#FFF5EB]/60 border-2 border-[#FF6B00]/30 shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <Flame className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black text-[#0C122C]">Streak Belajar &amp; XP Riil</h3>
                    <p className="text-[11px] text-slate-600 font-medium">Pelacak kedisiplinan belajar santri mulai dari 0 XP secara adil &amp; konsisten.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Admin Access Card */}
            <div className="mt-6 pt-4 border-t-2 border-slate-100 bg-[#0C122C] text-white p-4 rounded-2xl border-2 border-[#FFD233] shadow-md">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 text-xs font-black text-white">
                  <ShieldCheck className="w-4 h-4 text-[#FFD233]" />
                  <span>Akun Administrator Terdaftar</span>
                </div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FFD233] text-[#0C122C] font-black shadow-2xs">
                  Admin
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-3 font-medium">
                Email: <code className="text-[#FFD233] font-bold bg-white/10 px-1.5 py-0.5 rounded border border-white/20">izzahfadiyah649@gmail.com</code>
              </p>
              <button
                type="button"
                onClick={handleAdminQuickLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-black bg-[#FF2D78] hover:bg-[#E02468] text-white shadow-md active:translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Masuk Cepat Sebagai Admin (1-Klik)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Sign-in Form */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <div className="mb-5">
              <h2 className="text-xl font-black text-[#0C122C]">
                {isRegister ? 'Pendaftaran Santri Baru' : 'Masuk ke SmartKib'}
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-semibold">
                {isRegister
                  ? 'Lengkapi data untuk memulai perjalanan ilmu nahwu & sharaf Anda'
                  : 'Gunakan Google Sign-in atau akun email & kata sandi'}
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3.5 rounded-2xl bg-[#FFE5EE] border-2 border-[#FF2D78] text-[#FF2D78] text-xs flex items-start gap-2 shadow-xs">
                <AlertCircle className="w-4 h-4 text-[#FF2D78] shrink-0 mt-0.5" />
                <span className="font-bold">{errorMsg}</span>
              </div>
            )}

            {/* Google Sign-in Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-2xl bg-white hover:bg-[#FFF9D2] border-2 border-slate-200 text-[#0C122C] font-black text-sm shadow-xs transition-all active:scale-[0.98] disabled:opacity-60 cursor-pointer"
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
                <div className="w-full border-t-2 border-slate-200"></div>
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
                  <label className="block text-xs font-black text-slate-700 mb-1">
                    Nama Lengkap / Santri
                  </label>
                  <input
                    type="text"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Contoh: Muhammad Ihsan"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] placeholder-slate-400 text-sm focus:outline-hidden focus:border-[#00D2FF] focus:bg-white transition-all font-bold"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@domain.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] placeholder-slate-400 text-sm focus:outline-hidden focus:border-[#00D2FF] focus:bg-white transition-all font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  Kata Sandi
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] placeholder-slate-400 text-sm focus:outline-hidden focus:border-[#00D2FF] focus:bg-white transition-all font-bold"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-[#FF2D78] hover:bg-[#E02468] text-white font-black text-sm shadow-md shadow-[#FF2D78]/25 active:translate-y-0.5 transition-all disabled:opacity-60 cursor-pointer"
              >
                <span>{loading ? 'Memproses...' : isRegister ? 'Daftar Sekarang' : 'Masuk ke Aplikasi'}</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
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
                className="text-xs text-[#FF2D78] hover:text-[#E02468] underline font-black cursor-pointer"
              >
                {isRegister
                  ? 'Sudah punya akun? Masuk di sini'
                  : 'Belum punya akun? Daftar sebagai santri baru'}
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-5 text-center text-xs text-slate-500 font-bold">
          SmartKib • Didukung oleh Firebase Firestore, Google Auth &amp; Gemini Server-Side
        </div>
      </div>
    </div>
  );
};
