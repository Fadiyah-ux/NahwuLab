import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { ExerciseItem, ExerciseCategory, ExerciseDifficulty } from '../types';
import { handleFirestoreError, OperationType } from '../firebase/errorHandler';
import firebaseConfig from '../../firebase-applet-config.json';
import {
  ShieldCheck,
  PlusCircle,
  CheckCircle2,
  AlertCircle,
  Database,
  Cpu,
  Bot,
} from 'lucide-react';

export const AdminTab: React.FC = () => {
  const { userProfile, isAdmin } = useAuth();

  // New exercise form
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ExerciseCategory>('nahwu');
  const [difficulty, setDifficulty] = useState<ExerciseDifficulty>('pemula');
  const [question, setQuestion] = useState('');
  const [arabicSnippet, setArabicSnippet] = useState('');
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [explanation, setExplanation] = useState('');

  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Healthcheck state
  const [apiHealth, setApiHealth] = useState<{ status?: string; hasGeminiKey?: boolean } | null>(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setApiHealth(data))
      .catch((err) => console.warn('API Healthcheck error:', err));
  }, []);

  const handleOptionChange = (idx: number, val: string) => {
    const updated = [...options];
    updated[idx] = val;
    setOptions(updated);
  };

  const handleAddExercise = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !question.trim() || !explanation.trim()) {
      setErrorMsg('Harap lengkapi semua bidang wajib.');
      return;
    }

    if (options.some((opt) => !opt.trim())) {
      setErrorMsg('Semua 4 pilihan jawaban harus diisi.');
      return;
    }

    setSaving(true);
    setErrorMsg(null);
    setSaveSuccess(false);

    const newExercise: ExerciseItem = {
      id: 'ex_' + Date.now(),
      title,
      category,
      difficulty,
      question,
      arabicSnippet: arabicSnippet.trim() || undefined,
      options,
      correctAnswerIndex,
      explanation,
      createdBy: userProfile?.uid || 'admin',
    };

    try {
      const colRef = collection(db, 'exercises');
      await addDoc(colRef, newExercise);
      setSaveSuccess(true);
      // Reset form
      setTitle('');
      setQuestion('');
      setArabicSnippet('');
      setOptions(['', '', '', '']);
      setExplanation('');
    } catch (err) {
      console.error('Error saving exercise to Firestore:', err);
      try {
        handleFirestoreError(err, OperationType.CREATE, 'exercises');
      } catch (fErr: any) {
        setErrorMsg('Gagal menyimpan ke Firestore: ' + fErr.message);
      }
    } finally {
      setSaving(false);
    }
  };

  if (!isAdmin) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <ShieldCheck className="w-16 h-16 mx-auto text-slate-300 mb-4" />
        <h2 className="text-xl font-bold text-[#0C122C]">Akses Khusus Administrator</h2>
        <p className="text-sm text-slate-500 mt-2">
          Halaman ini hanya dapat diakses oleh akun admin terdaftar (izzahfadiyah649@gmail.com).
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Banner - Bubble Bash Midnight Navy Hero with Sunny Yellow accents */}
      <div className="relative overflow-hidden bg-[#0C122C] rounded-[2.5rem] p-6 sm:p-8 text-white shadow-xl shadow-[#0C122C]/25 border-2 border-[#FFD233]/40">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#FFD233]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#FF2D78]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#161F46] p-2 flex items-center justify-center border-2 border-[#FFD233]/40 shrink-0 shadow-md">
              <img
                src="/assets/aistudio/logo-removebg-preview_62f4cdfa.png"
                alt="SmartKib Logo"
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-[#FFD233]/20 text-[#FFD233] border border-[#FFD233]/40 shadow-xs mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFD233]" />
                <span>Lembaga Pengawas &amp; Pengembang Kurikulum SmartKib</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Panel Kendali Administrator
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 max-w-xl leading-relaxed">
                Selamat datang Ustadzah Izzah Fadiyah. Di sini Anda dapat menambahkan soal latihan baru, meninjau status sistem, dan mengelola materi kurikulum santri.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#161F46] px-5 py-3 rounded-2xl border-2 border-white/10 shadow-md shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#FFD233]/20 flex items-center justify-center text-[#FFD233] border border-[#FFD233]/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-bold block">Status Akun</span>
              <span className="text-sm font-black text-white">Admin Terverifikasi</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Status Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-[1.75rem] bg-white border-2 border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF9D2] text-[#FF6B00] flex items-center justify-center font-bold shadow-xs border-2 border-[#FFD233]">
            <Database className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold block">Cloud Firestore</span>
            <span className="text-sm font-black text-[#0C122C]">{firebaseConfig.projectId}</span>
          </div>
        </div>

        <div className="p-5 rounded-[1.75rem] bg-white border-2 border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#E0F9FF] text-[#0284C7] flex items-center justify-center font-bold shadow-xs border-2 border-[#00D2FF]">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold block">Backend Express Server</span>
            <span className="text-sm font-black text-[#0C122C]">
              {apiHealth?.status === 'ok' ? 'Online (/api/index.ts)' : 'Aktif (Vercel Ready)'}
            </span>
          </div>
        </div>

        <div className="p-5 rounded-[1.75rem] bg-white border-2 border-slate-200/90 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFE5EE] text-[#FF2D78] flex items-center justify-center font-bold shadow-xs border-2 border-[#FF2D78]/30">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold block">Gemini AI Model</span>
            <span className="text-sm font-black text-[#0C122C]">gemini-2.5-flash</span>
          </div>
        </div>
      </div>

      {/* Add New Exercise Form */}
      <div className="bg-white rounded-[2rem] p-6 sm:p-8 border-2 border-slate-200/90 shadow-sm">
        <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#FFF9D2] text-[#FF6B00] flex items-center justify-center border-2 border-[#FFD233]">
              <PlusCircle className="w-5 h-5" />
            </div>
            <h2 className="text-base sm:text-lg font-black text-[#0C122C]">
              Tambah Soal Latihan &amp; Kuis Baru (Simpan ke Firestore)
            </h2>
          </div>
          <span className="text-xs text-[#0C122C] font-black bg-[#E0F9FF] px-3 py-1 rounded-full border border-[#00D2FF]/40">
            Realtime Sync
          </span>
        </div>

        {saveSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-[#E0F9FF] border-2 border-[#00D2FF] text-[#0C122C] text-sm flex items-center gap-3 font-bold shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-[#0090FF] shrink-0" />
            <span>Soal latihan baru berhasil disimpan ke database Firestore!</span>
          </div>
        )}

        {errorMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-[#FFE5EE] border-2 border-[#FF2D78] text-[#FF2D78] text-sm flex items-center gap-3 font-bold shadow-xs">
            <AlertCircle className="w-5 h-5 text-[#FF2D78] shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleAddExercise} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Kategori Soal
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] font-bold text-sm focus:bg-white focus:outline-hidden focus:border-[#00D2FF]"
              >
                <option value="nahwu">Ilmu Nahwu (Tarkib)</option>
                <option value="shorof">Ilmu Shorof (Morfologi)</option>
                <option value="irab">Kajian I&apos;rab Khusus</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Tingkat Kesulitan
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] font-bold text-sm focus:bg-white focus:outline-hidden focus:border-[#00D2FF]"
              >
                <option value="pemula">Mubtadi&apos; (Pemula)</option>
                <option value="menengah">Mutawassith (Menengah)</option>
                <option value="mahir">Mutaqaddim (Mahir)</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-black text-slate-700 mb-1.5">
                Judul Latihan
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Menentukan Isim Kaana"
                className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] font-bold text-sm focus:bg-white focus:outline-hidden focus:border-[#00D2FF] placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 mb-1.5">
              Potongan Kalimat / Kata Arab (Opsional namun dianjurkan)
            </label>
            <input
              type="text"
              dir="rtl"
              value={arabicSnippet}
              onChange={(e) => setArabicSnippet(e.target.value)}
              placeholder="Contoh: كَانَ زَيْدٌ عَالِمًا"
              className="w-full font-serif text-xl px-4 py-2.5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] text-right font-black focus:bg-white focus:outline-hidden focus:border-[#00D2FF] placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 mb-1.5">
              Pertanyaan Soal
            </label>
            <textarea
              required
              rows={2}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Tuliskan pertanyaan yang menguji pemahaman santri..."
              className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] font-medium text-sm focus:bg-white focus:outline-hidden focus:border-[#00D2FF] placeholder:text-slate-400"
            />
          </div>

          {/* Options */}
          <div>
            <label className="block text-xs font-black text-slate-700 mb-2">
              Pilihan Jawaban (Pilih radio untuk jawaban yang benar):
            </label>
            <div className="space-y-2.5">
              {options.map((opt, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="correctAnswer"
                    checked={correctAnswerIndex === idx}
                    onChange={() => setCorrectAnswerIndex(idx)}
                    className="w-5 h-5 text-[#FF2D78] accent-[#FF2D78] cursor-pointer"
                  />
                  <span className="text-xs font-black text-slate-600 w-6">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  <input
                    type="text"
                    required
                    value={opt}
                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                    placeholder={`Pilihan ${String.fromCharCode(65 + idx)}`}
                    className="flex-1 px-4 py-2 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] font-bold text-sm focus:bg-white focus:outline-hidden focus:border-[#00D2FF]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-700 mb-1.5">
              Pembahasan &amp; Kaidah Nahwu/Shorof Lengkap
            </label>
            <textarea
              required
              rows={3}
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Jelaskan alasan gramatikal kenapa jawaban tersebut benar, sebutkan kedudukan, wazan, dan rujukan kaidah..."
              className="w-full px-4 py-2.5 rounded-2xl bg-[#FFFDF5] border-2 border-slate-200 text-[#0C122C] font-medium text-sm focus:bg-white focus:outline-hidden focus:border-[#00D2FF] placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="px-7 py-3.5 rounded-2xl bg-[#FF2D78] hover:bg-[#E02468] text-white font-black text-sm shadow-md shadow-[#FF2D78]/25 transition-all flex items-center gap-2 disabled:opacity-50 active:scale-95 cursor-pointer"
          >
            <PlusCircle className="w-5 h-5" />
            <span>{saving ? 'Menyimpan ke Firestore...' : 'Simpan Soal ke Database'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
