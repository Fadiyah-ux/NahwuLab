import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
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
  Flame,
  Users,
  Award,
  Sparkles,
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
        <h2 className="text-xl font-bold text-slate-800">Akses Khusus Administrator</h2>
        <p className="text-sm text-slate-500 mt-2">
          Halaman ini hanya dapat diakses oleh akun admin terdaftar (izzahfadiyah649@gmail.com).
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-orange-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-amber-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-200 border border-amber-300/30 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Lembaga Pengawas & Pengembang Kurikulum NahwuLab</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Panel Kendali Administrator
            </h1>
            <p className="text-xs sm:text-sm text-amber-100/90 mt-1 max-w-xl">
              Selamat datang Ustadzah Izzah Fadiyah. Di sini Anda dapat menambahkan soal latihan baru, meninjau status sistem, dan mengelola materi kurikulum.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-black/20 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 shrink-0">
            <ShieldCheck className="w-8 h-8 text-amber-300" />
            <div>
              <span className="text-xs text-amber-200 block">Status Akun</span>
              <span className="text-sm font-extrabold text-white">Admin Terverifikasi</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Status Indicators */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <Database className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block">Cloud Firestore</span>
            <span className="text-sm font-bold text-slate-800">{firebaseConfig.projectId}</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            <Cpu className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block">Backend Express Server</span>
            <span className="text-sm font-bold text-slate-800">
              {apiHealth?.status === 'ok' ? 'Online (/api/index.ts)' : 'Aktif (Vercel Ready)'}
            </span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block">Gemini AI Model</span>
            <span className="text-sm font-bold text-slate-800">gemini-3.8-flash</span>
          </div>
        </div>
      </div>

      {/* Add New Exercise Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-emerald-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Tambah Soal Latihan & Kuis Baru (Simpan ke Firestore)
            </h2>
          </div>
          <span className="text-xs text-slate-400">Sinkronisasi Realtime</span>
        </div>

        {saveSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Soal latihan baru berhasil disimpan ke database Firestore!</span>
          </div>
        )}

        {errorMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleAddExercise} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Kategori Soal
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              >
                <option value="nahwu">Ilmu Nahwu (Tarkib)</option>
                <option value="shorof">Ilmu Shorof (Morfologi)</option>
                <option value="irab">Kajian I'rab Khusus</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Tingkat Kesulitan
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              >
                <option value="pemula">Mubtadi' (Pemula)</option>
                <option value="menengah">Mutawassith (Menengah)</option>
                <option value="mahir">Mutaqaddim (Mahir)</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Judul Latihan
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Menentukan Isim Kaana"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Potongan Kalimat / Kata Arab (Opsional namun dianjurkan)
            </label>
            <input
              type="text"
              dir="rtl"
              value={arabicSnippet}
              onChange={(e) => setArabicSnippet(e.target.value)}
              placeholder="Contoh: كَانَ زَيْدٌ عَالِمًا"
              className="w-full font-serif text-xl px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-right focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Pertanyaan Soal
            </label>
            <textarea
              required
              rows={2}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Tuliskan pertanyaan yang menguji pemahaman santri..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Options */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">
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
                    className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-xs font-bold text-slate-400 w-6">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  <input
                    type="text"
                    required
                    value={opt}
                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                    placeholder={`Pilihan ${String.fromCharCode(65 + idx)}`}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Pembahasan & Kaidah Nahwu/Shorof Lengkap
            </label>
            <textarea
              required
              rows={3}
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Jelaskan alasan gramatikal kenapa jawaban tersebut benar, sebutkan kedudukan, wazan, dan rujukan kaidah..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center gap-2 disabled:opacity-50 active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{saving ? 'Menyimpan ke Firestore...' : 'Simpan Soal ke Database'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
