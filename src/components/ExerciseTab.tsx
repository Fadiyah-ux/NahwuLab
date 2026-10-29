import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { SEED_EXERCISES } from '../data/seedData';
import { ExerciseItem, ExerciseDifficulty, ExerciseCategory } from '../types';
import { evaluateQuizScore } from '../utils/grammar';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Flame,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const ExerciseTab: React.FC = () => {
  const { userProfile, incrementExercisesCompleted, recordActivity } = useAuth();
  const [exercises] = useState<ExerciseItem[]>(SEED_EXERCISES);
  const [selectedDifficulty, setSelectedDifficulty] = useState<ExerciseDifficulty | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ExerciseCategory | 'all'>('all');

  // Quiz active state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [scoreHistory, setScoreHistory] = useState<{ selectedIndex: number; correctIndex: number }[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Filter exercises
  const activeQuestions = exercises.filter((ex) => {
    const matchDiff = selectedDifficulty === 'all' || ex.difficulty === selectedDifficulty;
    const matchCat = selectedCategory === 'all' || ex.category === selectedCategory;
    return matchDiff && matchCat;
  });

  const currentQ = activeQuestions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || isAnswerSubmitted || !currentQ) return;
    setIsAnswerSubmitted(true);
    
    const isCorrect = selectedAnswer === currentQ.correctAnswerIndex;
    setScoreHistory((prev) => [
      ...prev,
      { selectedIndex: selectedAnswer, correctIndex: currentQ.correctAnswerIndex },
    ]);

    if (isCorrect) {
      incrementExercisesCompleted(20);
    } else {
      incrementExercisesCompleted(5);
    }
    recordActivity('exercise');
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScoreHistory([]);
    setQuizFinished(false);
  };

  const summary = evaluateQuizScore(scoreHistory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-emerald-950/20 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Tamrinat & Ujian I'rab Interaktif</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Latihan Mandiri & Uji Pemahaman
            </h1>
            <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 max-w-xl">
              Uji ketelitian tarkib, penentuan harakat akhir, wazan tashrif, dan kaidah i'lal dengan penjelasan instan.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 shrink-0">
            <Award className="w-8 h-8 text-amber-400" />
            <div>
              <span className="text-xs text-emerald-200 block">Total Diselesaikan</span>
              <span className="text-base font-extrabold text-white">
                {userProfile?.totalExercisesCompleted || 0} Soal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Difficulty Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tingkat:</span>
          {(['all', 'pemula', 'menengah', 'mahir'] as const).map((diff) => (
            <button
              key={diff}
              onClick={() => {
                setSelectedDifficulty(diff);
                handleRestartQuiz();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                selectedDifficulty === diff
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {diff === 'all' ? 'Semua Tingkat' : diff}
            </button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Bidang:</span>
          {(['all', 'nahwu', 'shorof', 'irab'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                handleRestartQuiz();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'Semua Bidang' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Quiz Area */}
      {activeQuestions.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-500">
          <HelpCircle className="w-12 h-12 mx-auto text-slate-300 mb-3" />
          <p>Belum ada soal untuk kategori ini. Silakan pilih kategori atau tingkat lain.</p>
        </div>
      ) : quizFinished ? (
        /* Quiz Finished Summary */
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm max-w-2xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-md">
            <Award className="w-10 h-10 text-emerald-600" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Hasil Latihan Selesai
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
              Nilai: {summary.grade} ({summary.percentage}%)
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Anda menjawab dengan benar <strong>{summary.correct}</strong> dari <strong>{summary.total}</strong> soal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-400 block">XP Diperoleh</span>
              <span className="text-2xl font-bold text-emerald-700">+{summary.xpEarned} XP</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-400 block">Streak</span>
              <span className="text-2xl font-bold text-orange-600">Terjaga 🔥</span>
            </div>
          </div>

          <button
            onClick={handleRestartQuiz}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Latihan</span>
          </button>
        </div>
      ) : currentQ ? (
        /* Active Question Card */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden max-w-3xl mx-auto">
          {/* Question Progress Header */}
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">
                Soal {currentIndex + 1} dari {activeQuestions.length}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800">
                {currentQ.difficulty}
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-teal-100 text-teal-800">
                {currentQ.category}
              </span>
            </div>

            <div className="w-24 sm:w-32 bg-slate-200 rounded-full h-2">
              <div
                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / activeQuestions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Arabic Snippet if present */}
            {currentQ.arabicSnippet && (
              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-center">
                <span
                  dir="rtl"
                  className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 tracking-wide"
                >
                  {currentQ.arabicSnippet}
                </span>
              </div>
            )}

            {/* Question Prompt */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
                {currentQ.question}
              </h3>
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = selectedAnswer === optIdx;
                const isCorrect = optIdx === currentQ.correctAnswerIndex;

                let optionStyle = 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50';
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'border-red-500 bg-red-50 text-red-900 line-through';
                  } else {
                    optionStyle = 'border-slate-200 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-emerald-500 bg-emerald-50/80 ring-2 ring-emerald-500/20';
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full border border-slate-300 text-xs font-bold flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="text-sm">{option}</span>
                    </div>

                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card after submit */}
            {isAnswerSubmitted && (
              <div
                className={`p-5 rounded-2xl border ${
                  selectedAnswer === currentQ.correctAnswerIndex
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                    : 'bg-amber-50/80 border-amber-200 text-amber-900'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {selectedAnswer === currentQ.correctAnswerIndex
                      ? 'Jawaban Anda Tepat (Mumtaz)!'
                      : 'Pembahasan & Kaidah Nahwu'}
                  </span>
                </div>
                <p className="text-sm leading-relaxed">{currentQ.explanation}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Poin per jawaban benar: +20 XP
              </span>

              {!isAnswerSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50"
                >
                  Kunci Jawaban
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <span>{currentIndex + 1 < activeQuestions.length ? 'Soal Berikutnya' : 'Lihat Hasil'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
