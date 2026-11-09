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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header Banner - Bubble Bash Midnight Navy Hero with Sunny Yellow & Pink accents */}
      <div className="bg-[#0C122C] border-2 border-[#FFD233]/40 rounded-[2.5rem] p-6 sm:p-8 text-white shadow-xl shadow-[#0C122C]/20 relative overflow-hidden">
        {/* Playful bubbly background blooms */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#FFD233]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#FF2D78]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#FFD233]/20 text-[#FFD233] border border-[#FFD233]/40 mb-2.5 shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#FFD233]" />
              <span>Tamrinat &amp; Evaluasi Tarkib Berbasis Turats</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Latihan &amp; Kuis <span className="text-[#FFD233]">SmartKib</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-xl font-medium leading-relaxed">
              Uji ketelitian tarkib, penentuan harakat akhir, wazan tashrif, dan kaidah i&apos;lal dengan evaluasi instan dan rujukan kitab turats mu&apos;tamad.
            </p>
          </div>

          <div className="flex items-center gap-3.5 bg-[#161F46] border-2 border-white/10 px-5 py-3 rounded-2xl shrink-0 shadow-sm">
            <div className="w-11 h-11 rounded-2xl bg-[#FFD233]/20 text-[#FFD233] border border-[#FFD233]/40 flex items-center justify-center font-black shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-bold block">Total Diselesaikan</span>
              <span className="text-base font-black text-white">
                {userProfile?.totalExercisesCompleted ?? 0} Soal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-[2rem] p-5 border-2 border-slate-200/90 shadow-sm flex flex-wrap items-center justify-between gap-4">
        {/* Difficulty Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-black text-slate-500 uppercase tracking-wider">Tingkat Adaptif:</span>
          {(['all', 'pemula', 'menengah', 'mahir'] as const).map((diff) => {
            const userTotal = userProfile?.totalExercisesCompleted ?? 0;
            const isRecommended =
              (userTotal < 3 && diff === 'pemula') ||
              (userTotal >= 3 && userTotal < 8 && diff === 'menengah') ||
              (userTotal >= 8 && diff === 'mahir');

            const isSelected = selectedDifficulty === diff;

            return (
              <button
                key={diff}
                onClick={() => {
                  setSelectedDifficulty(diff);
                  handleRestartQuiz();
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black capitalize transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#0C122C] text-[#FFD233] border-2 border-[#FFD233] shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-[#FFF9D2] border border-slate-200'
                }`}
              >
                <span>{diff === 'all' ? 'Semua Tingkat' : diff}</span>
                {diff !== 'all' && isRecommended && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-black ${
                    isSelected ? 'bg-[#FF2D78] text-white' : 'bg-[#FF2D78] text-white'
                  }`}>
                    Sesuai
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-black text-slate-500 uppercase tracking-wider">Bidang:</span>
          {(['all', 'nahwu', 'shorof', 'irab'] as const).map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  handleRestartQuiz();
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black uppercase transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#00D2FF] text-[#0C122C] border-2 border-[#00D2FF] shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-[#E0F9FF] border border-slate-200'
                }`}
              >
                {cat === 'all' ? 'Semua Bidang' : cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quiz Area */}
      {activeQuestions.length === 0 ? (
        <div className="bg-white rounded-[2rem] p-12 text-center border-2 border-dashed border-[#FFD233] text-slate-500">
          <HelpCircle className="w-12 h-12 mx-auto text-[#FFD233] mb-3" />
          <p className="font-bold text-[#0C122C]">Belum ada soal untuk kategori ini. Silakan pilih kategori atau tingkat lain.</p>
        </div>
      ) : quizFinished ? (
        /* Quiz Finished Summary */
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border-2 border-slate-200/90 shadow-lg max-w-2xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-[#FFF9D2] border-2 border-[#FFD233] text-[#0C122C] flex items-center justify-center mx-auto shadow-md">
            <Award className="w-10 h-10 text-[#FF6B00]" />
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#FF2D78]">
              Hasil Latihan Selesai
            </span>
            <h2 className="text-3xl font-black text-[#0C122C] mt-1">
              Nilai: {summary.grade} ({summary.percentage}%)
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-medium">
              Anda menjawab dengan benar <strong className="text-[#0C122C]">{summary.correct}</strong> dari <strong className="text-[#0C122C]">{summary.total}</strong> soal.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <div className="p-4 rounded-2xl bg-[#FFF9D2]/70 border-2 border-[#FFD233] shadow-xs">
              <span className="text-xs text-slate-600 font-bold block">XP Diperoleh</span>
              <span className="text-2xl font-black text-[#FF6B00]">+{summary.xpEarned} XP</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFE5EE]/70 border-2 border-[#FF2D78]/30 shadow-xs">
              <span className="text-xs text-slate-600 font-bold block">Streak</span>
              <span className="text-2xl font-black text-[#FF2D78]">Terjaga 🔥</span>
            </div>
          </div>

          <button
            onClick={handleRestartQuiz}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#FF2D78] hover:bg-[#E02468] text-white font-black text-sm shadow-md shadow-[#FF2D78]/25 transition-all active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 stroke-[3]" />
            <span>Ulangi Latihan</span>
          </button>
        </div>
      ) : currentQ ? (
        /* Active Question Card */
        <div className="bg-white rounded-[2.5rem] border-2 border-slate-200/90 shadow-md overflow-hidden max-w-3xl mx-auto">
          {/* Question Progress Header */}
          <div className="px-6 py-4 bg-[#FAF7EE] border-b-2 border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-black text-[#0C122C]">
                Soal {currentIndex + 1} dari {activeQuestions.length}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD233]"></span>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase bg-[#FFE5EE] text-[#D81B60] border border-[#FF2D78]/30">
                {currentQ.difficulty}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase bg-[#E0F9FF] text-[#0284C7] border border-[#00D2FF]/40">
                {currentQ.category}
              </span>
            </div>

            <div className="w-24 sm:w-32 bg-slate-200 rounded-full h-3 overflow-hidden border border-slate-300/60 p-0.5">
              <div
                className="bg-gradient-to-r from-[#FFD233] to-[#FF6B00] h-full rounded-full transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / activeQuestions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Arabic Snippet if present */}
            {currentQ.arabicSnippet && (
              <div className="p-6 rounded-2xl bg-[#FFF9D2]/50 border-2 border-[#FFD233] text-center shadow-xs">
                <span
                  dir="rtl"
                  className="font-serif text-3xl sm:text-4xl font-black text-[#0C122C] tracking-wide"
                >
                  {currentQ.arabicSnippet}
                </span>
              </div>
            )}

            {/* Question Prompt */}
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#0C122C] leading-relaxed">
                {currentQ.question}
              </h3>
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = selectedAnswer === optIdx;
                const isCorrect = optIdx === currentQ.correctAnswerIndex;

                let optionStyle = 'border-2 border-slate-200 bg-white hover:border-[#FFD233] hover:bg-[#FFF9D2]/30 text-[#0C122C] shadow-2xs';
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'border-2 border-[#00D2FF] bg-[#E0F9FF] text-[#0C122C] font-black shadow-xs';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'border-2 border-[#FF2D78] bg-[#FFE5EE] text-[#FF2D78] line-through font-bold';
                  } else {
                    optionStyle = 'border-2 border-slate-200 opacity-50';
                  }
                } else if (isSelected) {
                  optionStyle = 'border-2 border-[#FFD233] bg-[#FFF9D2]/70 ring-2 ring-[#FFD233]/30 font-black shadow-xs';
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
                      <span className={`w-8 h-8 rounded-xl border-2 text-xs font-black flex items-center justify-center shrink-0 ${
                        isAnswerSubmitted && isCorrect
                          ? 'bg-[#00D2FF] text-[#0C122C] border-[#00D2FF]'
                          : isSelected
                          ? 'bg-[#FFD233] text-[#0C122C] border-[#FFD233]'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="text-sm font-bold">{option}</span>
                    </div>

                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-[#0090FF] shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-[#FF2D78] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation card after submit */}
            {isAnswerSubmitted && (
              <div
                className={`p-5 rounded-2xl border-2 ${
                  selectedAnswer === currentQ.correctAnswerIndex
                    ? 'bg-[#E0F9FF]/80 border-[#00D2FF]/50 text-[#0C122C]'
                    : 'bg-[#FFFDF5] border-slate-200 text-[#0C122C]'
                }`}
              >
                <div className="flex items-center gap-2 font-black text-xs uppercase tracking-wider mb-2">
                  {selectedAnswer === currentQ.correctAnswerIndex ? (
                    <CheckCircle2 className="w-4 h-4 text-[#0090FF]" />
                  ) : (
                    <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
                  )}
                  <span>
                    {selectedAnswer === currentQ.correctAnswerIndex
                      ? 'Jawaban Anda Tepat (Mumtaz)!'
                      : 'Pembahasan & Kaidah Nahwu/Shorof'}
                  </span>
                </div>
                <p className="text-sm leading-relaxed font-medium">{currentQ.explanation}</p>

                {currentQ.kitabReference && (
                  <div className="mt-3.5 pt-3 border-t border-slate-200/80 flex items-center gap-2 text-xs font-black text-[#0C122C] bg-white/80 px-3.5 py-2 rounded-xl border border-slate-200">
                    <BookOpen className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>Rujukan Kitab: <strong className="text-[#FF2D78]">{currentQ.kitabReference}</strong></span>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-bold">
                Poin per jawaban benar: <strong className="text-[#FF6B00]">+20 XP</strong>
              </span>

              {!isAnswerSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="px-7 py-3 rounded-2xl bg-[#FF2D78] hover:bg-[#E02468] text-white font-black text-sm shadow-md shadow-[#FF2D78]/25 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  Kunci Jawaban
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="px-7 py-3 rounded-2xl bg-[#0C122C] hover:bg-[#161F46] text-[#FFD233] border-2 border-[#FFD233] font-black text-sm shadow-md transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer"
                >
                  <span>{currentIndex + 1 < activeQuestions.length ? 'Soal Berikutnya' : 'Lihat Hasil'}</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
