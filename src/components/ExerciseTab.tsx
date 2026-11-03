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
      <div className="bg-white border border-emerald-100 rounded-3xl p-6 sm:p-8 text-slate-800 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tamrinat &amp; Evaluasi Tarkib Berbasis Turats</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Latihan &amp; Kuis SmartKib
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-medium">
              Uji ketelitian tarkib, penentuan harakat akhir, wazan tashrif, dan kaidah i&apos;lal dengan pembahasan instan dan rujukan kitab turats.
            </p>
          </div>

          <div className="flex items-center gap-3.5 bg-emerald-50/70 px-5 py-3 rounded-2xl border border-emerald-200 shrink-0 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium block">Total Diselesaikan</span>
              <span className="text-base font-bold text-slate-900">
                {userProfile?.totalExercisesCompleted ?? 0} Soal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-3xl p-5 border border-emerald-100 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Difficulty Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tingkat Adaptif:</span>
          {(['all', 'pemula', 'menengah', 'mahir'] as const).map((diff) => {
            const userTotal = userProfile?.totalExercisesCompleted ?? 0;
            const isRecommended =
              (userTotal < 3 && diff === 'pemula') ||
              (userTotal >= 3 && userTotal < 8 && diff === 'menengah') ||
              (userTotal >= 8 && diff === 'mahir');

            return (
              <button
                key={diff}
                onClick={() => {
                  setSelectedDifficulty(diff);
                  handleRestartQuiz();
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedDifficulty === diff
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 border border-slate-200'
                }`}
              >
                <span>{diff === 'all' ? 'Semua Tingkat' : diff}</span>
                {diff !== 'all' && isRecommended && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-bold ${
                    selectedDifficulty === diff ? 'bg-white/25 text-white' : 'bg-emerald-700 text-white'
                  }`}>
                    Sesuai
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bidang:</span>
          {(['all', 'nahwu', 'shorof', 'irab'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                handleRestartQuiz();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'Semua Bidang' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Quiz Area */}
      {activeQuestions.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-emerald-200 text-slate-500">
          <HelpCircle className="w-12 h-12 mx-auto text-emerald-400 mb-3" />
          <p className="font-semibold text-slate-700">Belum ada soal untuk kategori ini. Silakan pilih kategori atau tingkat lain.</p>
        </div>
      ) : quizFinished ? (
        /* Quiz Finished Summary */
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm max-w-2xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Hasil Latihan Selesai
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Nilai: {summary.grade} ({summary.percentage}%)
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-medium">
              Anda menjawab dengan benar <strong>{summary.correct}</strong> dari <strong>{summary.total}</strong> soal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="text-xs text-slate-500 font-medium block">XP Diperoleh</span>
              <span className="text-2xl font-bold text-emerald-600">+{summary.xpEarned} XP</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="text-xs text-slate-500 font-medium block">Streak</span>
              <span className="text-2xl font-bold text-emerald-700">Terjaga 🔥</span>
            </div>
          </div>

          <button
            onClick={handleRestartQuiz}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm shadow-emerald-700/20 transition-all active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Latihan</span>
          </button>
        </div>
      ) : currentQ ? (
        /* Active Question Card */
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-sm overflow-hidden max-w-3xl mx-auto">
          {/* Question Progress Header */}
          <div className="px-6 py-4 bg-slate-50 border-b border-emerald-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-800">
                Soal {currentIndex + 1} dari {activeQuestions.length}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200">
                {currentQ.difficulty}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase bg-teal-50 text-teal-800 border border-teal-200">
                {currentQ.category}
              </span>
            </div>

            <div className="w-24 sm:w-32 bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-emerald-600 h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / activeQuestions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Arabic Snippet if present */}
            {currentQ.arabicSnippet && (
              <div className="p-6 rounded-2xl bg-[#F8FAF9] border border-emerald-100 text-center">
                <span
                  dir="rtl"
                  className="font-serif text-3xl sm:text-4xl font-bold text-emerald-900 tracking-wide"
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

                let optionStyle = 'border border-slate-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/30 text-slate-800';
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'border-2 border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'border-2 border-red-400 bg-red-50 text-red-950 line-through font-semibold';
                  } else {
                    optionStyle = 'border border-slate-200 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-2 border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-300/40 font-semibold';
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between cursor-pointer ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full border border-slate-300 text-xs font-bold flex items-center justify-center shrink-0 bg-slate-100 text-slate-700">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="text-sm font-semibold">{option}</span>
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
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-2">
                  {selectedAnswer === currentQ.correctAnswerIndex ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <HelpCircle className="w-4 h-4 text-emerald-700" />
                  )}
                  <span>
                    {selectedAnswer === currentQ.correctAnswerIndex
                      ? 'Jawaban Anda Tepat (Mumtaz)!'
                      : 'Pembahasan & Kaidah Nahwu'}
                  </span>
                </div>
                <p className="text-sm leading-relaxed font-normal">{currentQ.explanation}</p>

                {currentQ.kitabReference && (
                  <div className="mt-3.5 pt-3 border-t border-emerald-100 flex items-center gap-2 text-xs font-bold text-slate-800 bg-white/70 px-3 py-2 rounded-xl border border-emerald-100">
                    <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Rujukan Kitab: <strong className="text-emerald-700">{currentQ.kitabReference}</strong></span>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Poin per jawaban benar: +20 XP
              </span>

              {!isAnswerSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm shadow-emerald-700/20 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  Kunci Jawaban
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm shadow-emerald-700/20 transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
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
