import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { QUIZ_BAB_CATALOG, getBabMetaById, loadBabQuestions } from '../data/quizzes/quizCatalog';
import { BabQuestion, BabQuestionType, BabQuizMeta, BabQuizResult, BabQuizStatus } from '../types';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock,
  Loader2,
  Lock,
  Search,
  X,
  XCircle,
} from 'lucide-react';

interface ExerciseTabProps {
  initialChapterId?: string | null;
  onConsumeInitialChapter?: () => void;
  onOpenLibraryChapter?: (chapterId: string) => void;
}

interface QuizDraft {
  answers: (number | null)[];
  currentQuestionIndex: number;
  updatedAt: string;
}

type BookFilter = 'all' | 'al-amtsilah-at-tashrifiyyah' | 'mutammimah-al-jurumiyyah';
type StatusFilter = 'all' | BabQuizStatus;

const QUESTION_TYPE_LABELS: Record<BabQuestionType, string> = {
  concept: 'Pemahaman Konsep',
  rule_identification: 'Identifikasi Kaidah',
  example_analysis: 'Analisis Contoh',
  rule_application: 'Penerapan Kaidah',
  error_analysis: 'Koreksi Kesalahan',
};

function getDraftStorageKey(uid: string, chapterId: string): string {
  return `smartkib_quiz_draft_${uid}_${chapterId}`;
}

function readQuizDraft(uid: string, chapterId: string, questionCount: number): QuizDraft | null {
  try {
    const raw = localStorage.getItem(getDraftStorageKey(uid, chapterId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<QuizDraft>;
    if (!Array.isArray(parsed.answers)) return null;

    const normalizedAnswers: (number | null)[] = Array.from({ length: questionCount }, (_, idx) => {
      const val = parsed.answers?.[idx];
      return typeof val === 'number' && Number.isInteger(val) && val >= 0 && val <= 3 ? val : null;
    });

    const hasAnyAnswer = normalizedAnswers.some((a) => a !== null);
    if (!hasAnyAnswer) return null;

    const idx =
      typeof parsed.currentQuestionIndex === 'number' &&
      parsed.currentQuestionIndex >= 0 &&
      parsed.currentQuestionIndex < questionCount
        ? parsed.currentQuestionIndex
        : 0;

    return {
      answers: normalizedAnswers,
      currentQuestionIndex: idx,
      updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function loadAllDraftsForUser(uid: string): Record<string, QuizDraft> {
  const map: Record<string, QuizDraft> = {};
  for (const meta of QUIZ_BAB_CATALOG) {
    const draft = readQuizDraft(uid, meta.chapterId, meta.questionCount);
    if (draft) {
      map[meta.chapterId] = draft;
    }
  }
  return map;
}

function cleanChapterTitle(titleIndo: string): string {
  return titleIndo.replace(/^Bab \d+\s*:\s*/i, '').trim();
}

function formatCompletedDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export const ExerciseTab: React.FC<ExerciseTabProps> = ({
  initialChapterId,
  onConsumeInitialChapter,
  onOpenLibraryChapter,
}) => {
  const { userProfile, quizResults, quizResultsLoading, submitBabQuizResult } = useAuth();
  const uid = userProfile?.uid || '';

  // Directory filters
  const [bookFilter, setBookFilter] = useState<BookFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Drafts map (synced from localStorage)
  const [draftMap, setDraftMap] = useState<Record<string, QuizDraft>>({});

  // Active BAB workspace state (null = directory view)
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<BabQuestion[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState<boolean>(false);
  const [questionsError, setQuestionsError] = useState<string | null>(null);

  // Active quiz taking state
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Reload drafts when user changes
  useEffect(() => {
    if (!uid) {
      setDraftMap({});
      return;
    }
    setDraftMap(loadAllDraftsForUser(uid));
  }, [uid]);

  // Open chapter workspace (either locked result review or active quiz)
  const openChapterQuiz = useCallback(
    async (chapterId: string) => {
      const meta = getBabMetaById(chapterId);
      if (!meta) return;

      setSelectedChapterId(chapterId);
      setQuestionsLoading(true);
      setQuestionsError(null);
      setSubmitError(null);

      try {
        const loaded = await loadBabQuestions(chapterId);
        if (!loaded || loaded.length === 0) {
          setQuestions([]);
          setQuestionsError('Soal untuk bab ini belum tersedia.');
          return;
        }
        setQuestions(loaded);

        const existingResult = quizResults[chapterId];
        if (existingResult?.locked) {
          setAnswers(existingResult.answers);
          setCurrentQuestionIndex(0);
        } else {
          const existingDraft = uid ? readQuizDraft(uid, chapterId, loaded.length) : null;
          if (existingDraft) {
            setAnswers(existingDraft.answers);
            setCurrentQuestionIndex(existingDraft.currentQuestionIndex);
          } else {
            setAnswers(Array(loaded.length).fill(null));
            setCurrentQuestionIndex(0);
          }
        }
      } catch (err) {
        console.error('Failed loading BAB questions:', err);
        setQuestions([]);
        setQuestionsError('Gagal memuat soal latihan untuk bab ini. Silakan coba lagi.');
      } finally {
        setQuestionsLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [quizResults, uid]
  );

  // Handle cross-tab jump from Pustaka Kitab ("LATIHAN SOAL")
  useEffect(() => {
    if (!initialChapterId) return;
    openChapterQuiz(initialChapterId);
    onConsumeInitialChapter?.();
  }, [initialChapterId, openChapterQuiz, onConsumeInitialChapter]);

  const activeMeta: BabQuizMeta | undefined = selectedChapterId
    ? getBabMetaById(selectedChapterId)
    : undefined;
  const activeLockedResult: BabQuizResult | undefined = selectedChapterId
    ? quizResults[selectedChapterId]
    : undefined;

  const persistDraft = useCallback(
    (chapterId: string, nextAnswers: (number | null)[], nextIndex: number) => {
      if (!uid) return;
      const hasAnyAnswer = nextAnswers.some((a) => a !== null);
      const key = getDraftStorageKey(uid, chapterId);

      if (!hasAnyAnswer) {
        try {
          localStorage.removeItem(key);
        } catch {
          // ignore
        }
        setDraftMap((prev) => {
          if (!prev[chapterId]) return prev;
          const copy = { ...prev };
          delete copy[chapterId];
          return copy;
        });
        return;
      }

      const draft: QuizDraft = {
        answers: nextAnswers,
        currentQuestionIndex: nextIndex,
        updatedAt: new Date().toISOString(),
      };
      try {
        localStorage.setItem(key, JSON.stringify(draft));
      } catch {
        // ignore quota errors
      }
      setDraftMap((prev) => ({ ...prev, [chapterId]: draft }));
    },
    [uid]
  );

  const handleSelectOption = (optionIdx: number) => {
    if (!activeMeta || activeLockedResult?.locked || submitting) return;
    const nextAnswers = [...answers];
    nextAnswers[currentQuestionIndex] = optionIdx;
    setAnswers(nextAnswers);
    setSubmitError(null);
    persistDraft(activeMeta.chapterId, nextAnswers, currentQuestionIndex);
  };

  const handleJumpQuestion = (nextIdx: number) => {
    if (!activeMeta || nextIdx < 0 || nextIdx >= questions.length) return;
    setCurrentQuestionIndex(nextIdx);
    if (!activeLockedResult?.locked) {
      persistDraft(activeMeta.chapterId, answers, nextIdx);
    }
  };

  const handleBackToDirectory = () => {
    setSelectedChapterId(null);
    setQuestions([]);
    setQuestionsError(null);
    setSubmitError(null);
    if (uid) {
      setDraftMap(loadAllDraftsForUser(uid));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinalizeResult = async () => {
    if (!activeMeta || activeLockedResult?.locked || submitting) return;
    if (answers.length !== questions.length || answers.some((a) => a === null)) {
      setSubmitError('Harap jawab semua soal sebelum menekan Lihat Hasil.');
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const finalizedAnswers = answers.map((a) => a as number);
      await submitBabQuizResult(activeMeta, finalizedAnswers, questions);
      setDraftMap((prev) => {
        if (!prev[activeMeta.chapterId]) return prev;
        const copy = { ...prev };
        delete copy[activeMeta.chapterId];
        return copy;
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setSubmitError(
        err?.message || 'Gagal menyimpan hasil kuis. Jawaban Anda tetap tersimpan di draf.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const getBabStatus = useCallback(
    (meta: BabQuizMeta): { status: BabQuizStatus; answeredCount: number; result?: BabQuizResult } => {
      const res = quizResults[meta.chapterId];
      if (res?.locked) {
        return { status: 'SELESAI', answeredCount: meta.questionCount, result: res };
      }
      const draft = draftMap[meta.chapterId];
      if (draft) {
        const count = draft.answers.filter((a) => a !== null).length;
        if (count > 0) {
          return { status: 'SEDANG DIKERJAKAN', answeredCount: count };
        }
      }
      return { status: 'BELUM DIKERJAKAN', answeredCount: 0 };
    },
    [quizResults, draftMap]
  );

  // Summary metrics across 115 BABs
  const summaryStats = useMemo(() => {
    let totalCompleted = 0;
    let sharafCompleted = 0;
    let nahwuCompleted = 0;
    let inProgressCount = 0;

    for (const meta of QUIZ_BAB_CATALOG) {
      const info = getBabStatus(meta);
      if (info.status === 'SELESAI') {
        totalCompleted += 1;
        if (meta.category === 'shorof') sharafCompleted += 1;
        else nahwuCompleted += 1;
      } else if (info.status === 'SEDANG DIKERJAKAN') {
        inProgressCount += 1;
      }
    }

    return {
      totalBabs: QUIZ_BAB_CATALOG.length,
      totalCompleted,
      sharafCompleted,
      nahwuCompleted,
      inProgressCount,
    };
  }, [getBabStatus]);

  // Filtered & grouped BAB directory
  const sections = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const rawSearch = searchQuery.trim();

    const filterMeta = (meta: BabQuizMeta) => {
      if (bookFilter !== 'all' && meta.bookId !== bookFilter) return false;
      const { status } = getBabStatus(meta);
      if (statusFilter !== 'all' && status !== statusFilter) return false;
      if (!q) return true;
      return (
        meta.titleIndo.toLowerCase().includes(q) ||
        meta.titleArabic.includes(rawSearch) ||
        meta.groupTitle.toLowerCase().includes(q) ||
        `bab ${meta.babNumber}`.includes(q) ||
        String(meta.babNumber) === q
      );
    };

    const buildGroups = (bookId: BabQuizMeta['bookId']) => {
      const items = QUIZ_BAB_CATALOG.filter((m) => m.bookId === bookId && filterMeta(m));
      const groups: Array<{ groupTitle: string; items: BabQuizMeta[] }> = [];
      const groupMap = new Map<string, BabQuizMeta[]>();

      for (const item of items) {
        if (!groupMap.has(item.groupTitle)) {
          const list: BabQuizMeta[] = [];
          groupMap.set(item.groupTitle, list);
          groups.push({ groupTitle: item.groupTitle, items: list });
        }
        groupMap.get(item.groupTitle)!.push(item);
      }

      return { count: items.length, groups };
    };

    return {
      sharaf: buildGroups('al-amtsilah-at-tashrifiyyah'),
      nahwu: buildGroups('mutammimah-al-jurumiyyah'),
    };
  }, [bookFilter, statusFilter, searchQuery, getBabStatus]);

  // =========================================================================
  // WORKSPACE VIEW (VIEW 2: ACTIVE QUIZ OR VIEW 3: LOCKED RESULT & REVIEW)
  // =========================================================================
  if (selectedChapterId && activeMeta) {
    const cleanTitle = cleanChapterTitle(activeMeta.titleIndo);
    const isShorof = activeMeta.category === 'shorof';

    // VIEW 3: PERMANENTLY LOCKED RESULT & COMPLETE REVIEW
    if (activeLockedResult?.locked) {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Top Bar Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleBackToDirectory}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0C122C] hover:bg-[#FFF9D2] text-xs font-black shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Daftar 115 BAB</span>
            </button>

            {onOpenLibraryChapter && (
              <button
                type="button"
                onClick={() => onOpenLibraryChapter(activeMeta.chapterId)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0C122C] text-[#FFD233] hover:bg-[#161F46] text-xs font-black shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <BookOpen className="w-4 h-4" />
                <span>Buka Materi di Pustaka Kitab</span>
              </button>
            )}
          </div>

          {/* Result Header & Lock Summary */}
          <div className="bg-[#0C122C] rounded-[2.25rem] p-6 sm:p-8 text-white shadow-xl shadow-[#0C122C]/20 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#00D2FF]">
                  <span>{isShorof ? 'Pustaka Sharaf' : 'Pustaka Nahwu'}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeMeta.bookTitle}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">BAB {activeMeta.babNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">Hal. {activeMeta.pdfPage}</span>
                </div>
                <h1 className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {cleanTitle}
                </h1>
                <p className="font-serif text-xl sm:text-2xl text-[#FFD233] font-bold" dir="rtl">
                  {activeMeta.titleArabic}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#161F46] border border-white/15 text-xs font-bold text-slate-200 shrink-0 self-start lg:self-center">
                <Lock className="w-4 h-4 text-[#FFD233] shrink-0" />
                <span>Hasil Terkunci Permanen</span>
              </div>
            </div>

            {/* 4-Column Score Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="bg-[#161F46] rounded-2xl p-4">
                <span className="text-xs font-bold text-slate-300 block">Skor Akhir</span>
                <span className="text-2xl sm:text-3xl font-black text-[#FFD233] tabular-nums mt-1 block">
                  {activeLockedResult.score} / 100
                </span>
              </div>
              <div className="bg-[#161F46] rounded-2xl p-4">
                <span className="text-xs font-bold text-slate-300 block">Akurasi</span>
                <span className="text-2xl sm:text-3xl font-black text-[#00D2FF] tabular-nums mt-1 block">
                  {activeLockedResult.accuracy}%
                </span>
              </div>
              <div className="bg-[#161F46] rounded-2xl p-4">
                <span className="text-xs font-bold text-slate-300 block">Jawaban Benar</span>
                <span className="text-2xl sm:text-3xl font-black text-white tabular-nums mt-1 block">
                  {activeLockedResult.correctCount} / {activeLockedResult.totalQuestions}
                </span>
                <span className="text-[11px] font-semibold text-slate-300 tabular-nums">
                  Salah: {activeLockedResult.incorrectCount} soal
                </span>
              </div>
              <div className="bg-[#161F46] rounded-2xl p-4">
                <span className="text-xs font-bold text-slate-300 block">XP Diperoleh</span>
                <span className="text-2xl sm:text-3xl font-black text-[#FF2D78] tabular-nums mt-1 block">
                  +{activeLockedResult.xpAwarded} XP
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-300 font-medium pt-1 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
              <span>
                Evaluasi bab ini telah selesai dan tidak dapat diulang kembali.
              </span>
              <span>
                Diselesaikan pada {formatCompletedDate(activeLockedResult.completedAt)}
              </span>
            </div>
          </div>

          {/* Complete Question-by-Question Review */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-lg font-black text-[#0C122C]">
                Pembahasan Lengkap ({activeLockedResult.totalQuestions} Soal)
              </h2>
              <span className="text-xs font-bold text-slate-500 tabular-nums">
                +5 XP Benar · +1 XP Selesai
              </span>
            </div>

            {questionsLoading ? (
              <div className="bg-white rounded-[2rem] p-12 text-center bubble-column-card flex flex-col items-center gap-3">
                <Loader2 className="w-8 h-8 text-[#00D2FF] animate-spin" />
                <p className="text-sm font-bold text-slate-600">Memuat pembahasan soal...</p>
              </div>
            ) : questionsError ? (
              <div className="bg-white rounded-[2rem] p-8 text-center bubble-column-card space-y-3">
                <AlertCircle className="w-8 h-8 text-[#FF2D78] mx-auto" />
                <p className="text-sm font-bold text-[#0C122C]">{questionsError}</p>
              </div>
            ) : (
              <div className="space-y-5">
                {questions.map((q, qIdx) => {
                  const userAnswer = activeLockedResult.answers[qIdx];
                  const isCorrect = userAnswer === q.correctAnswerIndex;

                  return (
                    <div
                      key={q.id}
                      className="bg-white rounded-[2rem] bubble-column-card p-6 sm:p-8 space-y-5"
                    >
                      {/* Question Review Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
                          <span className="text-[#0C122C] font-black tabular-nums">
                            Soal {qIdx + 1}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{QUESTION_TYPE_LABELS[q.type]}</span>
                        </div>

                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#E0F9FF] text-[#0369A1] text-xs font-black">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            <span>Benar (+5 XP)</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFE5EE] text-[#BE123C] text-xs font-black">
                            <XCircle className="w-4 h-4 shrink-0" />
                            <span>Kurang Tepat (+1 XP)</span>
                          </span>
                        )}
                      </div>

                      {/* Arabic Snippet */}
                      {q.arabicSnippet && (
                        <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFDF5] border border-amber-200/80 text-center">
                          <div
                            dir="rtl"
                            className="font-serif text-2xl sm:text-3xl font-bold text-[#0C122C] leading-[2.3]"
                          >
                            {q.arabicSnippet}
                          </div>
                        </div>
                      )}

                      {/* Prompt */}
                      <p className="text-base font-bold text-[#0C122C] leading-relaxed">
                        {q.question}
                      </p>

                      {/* Options Comparison */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {q.options.map((opt, optIdx) => {
                          const isOptionCorrect = optIdx === q.correctAnswerIndex;
                          const isUserChoice = optIdx === userAnswer;

                          let cardStyle = 'bg-slate-50/70 border border-slate-200/80 text-slate-700';
                          let letterStyle = 'bg-white text-slate-600 border border-slate-200';

                          if (isOptionCorrect) {
                            cardStyle = 'bg-[#E0F9FF]/75 border border-[#00D2FF] text-[#0C122C] font-bold';
                            letterStyle = 'bg-[#00D2FF] text-[#0C122C] border border-[#00D2FF]';
                          } else if (isUserChoice && !isOptionCorrect) {
                            cardStyle = 'bg-[#FFE5EE]/85 border border-[#FF2D78] text-[#9F1239] font-semibold';
                            letterStyle = 'bg-[#FF2D78] text-white border border-[#FF2D78]';
                          }

                          return (
                            <div
                              key={optIdx}
                              className={`p-4 rounded-xl flex items-start justify-between gap-3 text-sm ${cardStyle}`}
                            >
                              <div className="flex items-start gap-3 min-w-0">
                                <span
                                  className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${letterStyle}`}
                                >
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span dir="auto" className="leading-relaxed">
                                  {opt}
                                </span>
                              </div>

                              {isOptionCorrect && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#0369A1] shrink-0 mt-0.5">
                                  <Check className="w-4 h-4 stroke-[3]" />
                                  <span>Kunci</span>
                                </span>
                              )}
                              {isUserChoice && !isOptionCorrect && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#BE123C] shrink-0 mt-0.5">
                                  <X className="w-4 h-4 stroke-[3]" />
                                  <span>Pilihan Anda</span>
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation & Kitab Reference */}
                      <div className="p-5 rounded-2xl bg-[#FFFDF5] border border-slate-200/80 space-y-2.5">
                        <div className="text-xs font-black uppercase tracking-wider text-slate-500">
                          Pembahasan Kaidah
                        </div>
                        <p className="text-sm text-[#0C122C] leading-[1.8] font-medium">
                          {q.explanation}
                        </p>
                        <div className="pt-2 border-t border-slate-200/70 flex items-center gap-2 text-xs font-bold text-slate-600">
                          <BookOpen className="w-4 h-4 text-[#FF2D78] shrink-0" />
                          <span>Rujukan: {q.kitabReference}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      );
    }

    // VIEW 2: ACTIVE BAB QUIZ (ONE BY ONE WITH QUESTION NAVIGATOR)
    const answeredCount = answers.filter((a) => a !== null).length;
    const allAnswered = questions.length > 0 && answeredCount === questions.length;
    const currentQ = questions[currentQuestionIndex];
    const progressPercent =
      questions.length > 0 ? Math.round((answeredCount / questions.length) * 100) : 0;

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Top Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleBackToDirectory}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0C122C] hover:bg-[#FFF9D2] text-xs font-black shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar 115 BAB</span>
          </button>

          {onOpenLibraryChapter && (
            <button
              type="button"
              onClick={() => onOpenLibraryChapter(activeMeta.chapterId)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0C122C] text-[#FFD233] hover:bg-[#161F46] text-xs font-black shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-4 h-4" />
              <span>Buka Materi Kitab</span>
            </button>
          )}
        </div>

        {/* Quiz Header Summary */}
        <div className="bg-[#0C122C] rounded-[2.25rem] p-6 sm:p-7 text-white shadow-xl shadow-[#0C122C]/20 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#00D2FF]">
                <span>{isShorof ? 'Pustaka Sharaf' : 'Pustaka Nahwu'}</span>
                <span aria-hidden="true">·</span>
                <span>{activeMeta.bookTitle}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">BAB {activeMeta.babNumber}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">Hal. {activeMeta.pdfPage}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white leading-snug">
                {cleanTitle}
              </h1>
              <p className="font-serif text-xl text-[#FFD233] font-bold" dir="rtl">
                {activeMeta.titleArabic}
              </p>
            </div>

            <div className="bg-[#161F46] rounded-2xl px-4 py-3 shrink-0 space-y-1">
              <span className="text-[11px] font-bold text-slate-300 block">
                Progres Pengerjaan
              </span>
              <span className="text-lg font-black text-white tabular-nums block">
                {answeredCount} / {questions.length || activeMeta.questionCount} Terjawab
              </span>
              <span className="text-[11px] text-[#FFD233] font-semibold block">
                Draf tersimpan otomatis
              </span>
            </div>
          </div>

          <div className="w-full bg-[#161F46] h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-[#FFD233] h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {questionsLoading ? (
          <div className="bg-white rounded-[2rem] p-14 text-center bubble-column-card flex flex-col items-center gap-3">
            <Loader2 className="w-9 h-9 text-[#FF2D78] animate-spin" />
            <p className="text-sm font-bold text-[#0C122C]">
              Menyiapkan soal evaluasi BAB {activeMeta.babNumber}...
            </p>
          </div>
        ) : questionsError || !currentQ ? (
          <div className="bg-white rounded-[2rem] p-10 text-center bubble-column-card space-y-4">
            <AlertCircle className="w-10 h-10 text-[#FF2D78] mx-auto" />
            <p className="text-sm font-bold text-[#0C122C]">
              {questionsError || 'Soal tidak ditemukan.'}
            </p>
            <button
              type="button"
              onClick={() => openChapterQuiz(activeMeta.chapterId)}
              className="px-5 py-2.5 rounded-xl bg-[#0C122C] text-[#FFD233] text-xs font-black cursor-pointer"
            >
              Muat Ulang Soal
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Main Single Question Card */}
            <div className="lg:col-span-8 bg-white rounded-[2.25rem] bubble-column-card p-6 sm:p-8 space-y-6">
              {/* Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
                  <span className="text-[#0C122C] font-black tabular-nums">
                    Soal {currentQuestionIndex + 1} dari {questions.length}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{QUESTION_TYPE_LABELS[currentQ.type]}</span>
                </div>
                <span className="text-xs font-bold text-slate-500">
                  {currentQ.kitabReference}
                </span>
              </div>

              {/* Arabic Snippet */}
              {currentQ.arabicSnippet && (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF5] border border-amber-200/80 text-center">
                  <div
                    dir="rtl"
                    className="font-serif text-2xl sm:text-3xl font-bold text-[#0C122C] leading-[2.35]"
                  >
                    {currentQ.arabicSnippet}
                  </div>
                </div>
              )}

              {/* Question Text */}
              <h2 className="text-base sm:text-lg font-extrabold text-[#0C122C] leading-relaxed">
                {currentQ.question}
              </h2>

              {/* Options A-D */}
              <div className="space-y-3">
                {currentQ.options.map((opt, optIdx) => {
                  const isSelected = answers[currentQuestionIndex] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-4 rounded-2xl transition-all flex items-start justify-between gap-3 cursor-pointer min-h-[54px] ${
                        isSelected
                          ? 'bg-[#FFF9D2] border-2 border-[#0C122C] text-[#0C122C] font-bold shadow-xs'
                          : 'bg-white border border-slate-200 hover:border-[#00D2FF] hover:bg-[#E0F9FF]/30 text-[#0C122C] font-medium'
                      }`}
                    >
                      <div className="flex items-start gap-3.5 min-w-0">
                        <span
                          className={`w-8 h-8 rounded-xl text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected
                              ? 'bg-[#0C122C] text-[#FFD233]'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span dir="auto" className="text-sm sm:text-[15px] leading-relaxed pt-0.5">
                          {opt}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Submit Error Inline Banner */}
              {submitError && (
                <div className="p-4 rounded-2xl bg-[#FFE5EE] text-[#9F1239] text-xs sm:text-sm font-bold flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Prev / Next + Bottom LIHAT HASIL CTA */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={currentQuestionIndex === 0}
                    onClick={() => handleJumpQuestion(currentQuestionIndex - 1)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-[#FFF9D2] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-black text-[#0C122C] inline-flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Sebelumnya</span>
                  </button>
                  <button
                    type="button"
                    disabled={currentQuestionIndex >= questions.length - 1}
                    onClick={() => handleJumpQuestion(currentQuestionIndex + 1)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-[#E0F9FF] disabled:opacity-40 disabled:cursor-not-allowed text-xs font-black text-[#0C122C] inline-flex items-center gap-1.5 cursor-pointer transition-colors whitespace-nowrap"
                  >
                    <span>Berikutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5">
                  <button
                    type="button"
                    disabled={!allAnswered || submitting}
                    onClick={handleFinalizeResult}
                    className="px-6 py-3 rounded-2xl bg-[#FF2D78] hover:bg-[#E02468] disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-black text-sm shadow-md shadow-[#FF2D78]/20 disabled:shadow-none transition-all inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Menyimpan Hasil...</span>
                      </>
                    ) : (
                      <>
                        <Award className="w-4 h-4" />
                        <span>LIHAT HASIL</span>
                      </>
                    )}
                  </button>
                  {!allAnswered && (
                    <span className="text-[11px] font-bold text-slate-500 tabular-nums">
                      Jawab semua {questions.length} soal ({questions.length - answeredCount} lagi) untuk melihat hasil
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Side Question Navigator Panel */}
            <aside className="lg:col-span-4 bg-white rounded-[2.25rem] bubble-column-card p-6 space-y-5 lg:sticky lg:top-24">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-black text-[#0C122C]">Navigasi Nomor Soal</h3>
                <span className="text-xs font-black text-[#0284C7] tabular-nums">
                  {answeredCount} / {questions.length}
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = answers[idx] !== null;

                  let btnClass =
                    'bg-slate-50 text-slate-600 border border-slate-200 hover:border-[#00D2FF]';
                  if (isCurrent) {
                    btnClass =
                      'bg-[#0C122C] text-[#FFD233] border-2 border-[#FFD233] shadow-xs';
                  } else if (isAnswered) {
                    btnClass =
                      'bg-[#E0F9FF] text-[#0369A1] border border-[#00D2FF] font-black';
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleJumpQuestion(idx)}
                      aria-label={`Soal nomor ${idx + 1}${isAnswered ? ' (sudah dijawab)' : ' (belum dijawab)'}`}
                      className={`h-10 rounded-xl text-xs font-black tabular-nums transition-all cursor-pointer flex items-center justify-center ${btnClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs font-bold text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-[#0C122C] border border-[#FFD233] inline-block" />
                    <span>Sedang Dibuka</span>
                  </span>
                  <span className="tabular-nums">No. {currentQuestionIndex + 1}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-[#E0F9FF] border border-[#00D2FF] inline-block" />
                    <span>Sudah Dijawab</span>
                  </span>
                  <span className="tabular-nums">{answeredCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-300 inline-block" />
                    <span>Belum Dijawab</span>
                  </span>
                  <span className="tabular-nums">{questions.length - answeredCount}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFFDF5] border border-amber-200/70 text-[11px] font-semibold text-slate-600 leading-relaxed">
                Setiap soal yang terjawab langsung tersimpan ke draf. Setelah seluruh soal terisi, tekan <strong className="text-[#0C122C]">LIHAT HASIL</strong> untuk mengunci nilai dan memperoleh XP (+5 XP benar, +1 XP selesai).
              </div>

              {allAnswered && (
                <button
                  type="button"
                  disabled={submitting}
                  onClick={handleFinalizeResult}
                  className="w-full py-3 rounded-2xl bg-[#FF2D78] hover:bg-[#E02468] text-white font-black text-xs shadow-md shadow-[#FF2D78]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Menyimpan Hasil...</span>
                    </>
                  ) : (
                    <>
                      <Award className="w-4 h-4" />
                      <span>LIHAT HASIL SEKARANG</span>
                    </>
                  )}
                </button>
              )}
            </aside>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // VIEW 1: DIRECTORY OF 115 BABs (SHARAF BAB 1-56 & NAHWU BAB 1-59)
  // =========================================================================
  const renderBabCard = (meta: BabQuizMeta) => {
    const { status, answeredCount, result } = getBabStatus(meta);
    const isShorof = meta.category === 'shorof';
    const cleanTitle = cleanChapterTitle(meta.titleIndo);
    const pageSpan =
      meta.pdfEndPage && meta.pdfEndPage !== meta.pdfPage
        ? `Hal. ${meta.pdfPage}–${meta.pdfEndPage}`
        : `Hal. ${meta.pdfPage}`;

    return (
      <button
        key={meta.chapterId}
        type="button"
        onClick={() => openChapterQuiz(meta.chapterId)}
        className="w-full text-left bg-white rounded-[1.75rem] bubble-column-card p-5 flex flex-col justify-between gap-4 hover:-translate-y-0.5 transition-all cursor-pointer group"
      >
        <div className="space-y-2.5">
          {/* Unboxed Metadata + Status Label */}
          <div className="flex items-center justify-between gap-2">
            <span
              className={`text-xs font-black tabular-nums ${
                isShorof ? 'text-[#D81B60]' : 'text-[#0284C7]'
              }`}
            >
              BAB {meta.babNumber} · {pageSpan} · {meta.questionCount} Soal
            </span>

            {status === 'SELESAI' && result ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#E0F9FF] text-[#0369A1] text-[11px] font-black tabular-nums shrink-0 whitespace-nowrap">
                <Lock className="w-3 h-3 shrink-0" />
                <span>SELESAI · {result.score}</span>
              </span>
            ) : status === 'SEDANG DIKERJAKAN' ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFF9D2] text-[#92400E] text-[11px] font-black tabular-nums shrink-0 whitespace-nowrap">
                <Clock className="w-3 h-3 shrink-0" />
                <span>DIKERJAKAN · {answeredCount}/{meta.questionCount}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-bold shrink-0 whitespace-nowrap">
                <Circle className="w-3 h-3 shrink-0" />
                <span>BELUM</span>
              </span>
            )}
          </div>

          {/* Indonesian & Arabic Title */}
          <div className="space-y-1">
            <h3 className="text-sm sm:text-[15px] font-black text-[#0C122C] leading-snug group-hover:text-[#FF2D78] transition-colors line-clamp-2">
              {cleanTitle}
            </h3>
            <p className="font-serif text-base font-bold text-slate-600 truncate" dir="rtl">
              {meta.titleArabic}
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs font-black">
          <span
            className={
              status === 'SELESAI'
                ? 'text-[#0369A1]'
                : status === 'SEDANG DIKERJAKAN'
                  ? 'text-[#B45309]'
                  : 'text-[#0C122C]'
            }
          >
            {status === 'SELESAI'
              ? 'Lihat Hasil & Pembahasan'
              : status === 'SEDANG DIKERJAKAN'
                ? 'Lanjutkan Kuis'
                : 'Mulai Kuis'}
          </span>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF2D78] group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>
      </button>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Hero Banner */}
      <div className="bg-[#0C122C] rounded-[2.25rem] p-6 sm:p-8 text-white shadow-xl shadow-[#0C122C]/20 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-[#FFD233]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-[#FF2D78]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FFD233]">
                <Award className="w-4 h-4" />
                <span>Evaluasi Terstruktur 115 Bab Kitab Turats</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Latihan &amp; Kuis <span className="text-[#FFD233]">115 Bab SmartKib</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Terintegrasi langsung 1:1 dengan seluruh bab pada Pustaka Kitab: <strong className="text-white">56 Bab Sharaf</strong> (Al-Amtsilah At-Tashrifiyyah) dan <strong className="text-white">59 Bab Nahwu</strong> (Mutammimah Al-Ajurrumiyah).
              </p>
            </div>

            {quizResultsLoading && (
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00D2FF]">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Menyinkronkan progres kuis...</span>
              </div>
            )}
          </div>

          {/* 4-Column KPI Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="bg-[#161F46] rounded-2xl p-4">
              <span className="text-xs font-bold text-slate-300 block">Total Kemajuan</span>
              <span className="text-xl sm:text-2xl font-black text-white tabular-nums mt-1 block">
                {summaryStats.totalCompleted} / {summaryStats.totalBabs} Bab
              </span>
            </div>
            <div className="bg-[#161F46] rounded-2xl p-4">
              <span className="text-xs font-bold text-slate-300 block">Pustaka Sharaf</span>
              <span className="text-xl sm:text-2xl font-black text-[#FF2D78] tabular-nums mt-1 block">
                {summaryStats.sharafCompleted} / 56 Bab
              </span>
            </div>
            <div className="bg-[#161F46] rounded-2xl p-4">
              <span className="text-xs font-bold text-slate-300 block">Pustaka Nahwu</span>
              <span className="text-xl sm:text-2xl font-black text-[#00D2FF] tabular-nums mt-1 block">
                {summaryStats.nahwuCompleted} / 59 Bab
              </span>
            </div>
            <div className="bg-[#161F46] rounded-2xl p-4">
              <span className="text-xs font-bold text-slate-300 block">Total XP Santri</span>
              <span className="text-xl sm:text-2xl font-black text-[#FFD233] tabular-nums mt-1 block">
                {userProfile?.xp ?? 0} XP
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white rounded-[2rem] bubble-column-card p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Book Segmented Control */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl">
            {[
              { id: 'all', label: 'Semua Kitab (115)' },
              { id: 'al-amtsilah-at-tashrifiyyah', label: 'Sharaf · Amtsilah (56)' },
              { id: 'mutammimah-al-jurumiyyah', label: 'Nahwu · Mutammimah (59)' },
            ].map((tab) => {
              const active = bookFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setBookFilter(tab.id as BookFilter)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-black transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#0C122C] text-[#FFD233] shadow-xs'
                      : 'text-slate-600 hover:text-[#0C122C]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-[#0284C7] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari bab (misal: Bab 14, Fa'il, Tsulatsi)..."
              className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#FFFDF5] border border-slate-200 text-xs font-bold text-[#0C122C] focus:bg-white focus:outline-hidden focus:border-[#00D2FF]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                aria-label="Hapus pencarian"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Status Filter */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-black text-slate-500 uppercase tracking-wider mr-1">
            Status:
          </span>
          {[
            { id: 'all', label: 'Semua Status' },
            { id: 'BELUM DIKERJAKAN', label: 'Belum Dikerjakan' },
            { id: 'SEDANG DIKERJAKAN', label: `Sedang Dikerjakan (${summaryStats.inProgressCount})` },
            { id: 'SELESAI', label: `Selesai (${summaryStats.totalCompleted})` },
          ].map((st) => {
            const active = statusFilter === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setStatusFilter(st.id as StatusFilter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#FF2D78] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-[#FFE5EE]'
                }`}
              >
                {st.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty Search Result */}
      {sections.sharaf.count === 0 && sections.nahwu.count === 0 && (
        <div className="bg-white rounded-[2rem] bubble-column-card p-12 text-center space-y-3">
          <Search className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-black text-[#0C122C]">
            Tidak Ada Bab yang Sesuai Filter
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Coba ubah kata kunci pencarian atau pilih filter status/kitab lain.
          </p>
          <button
            type="button"
            onClick={() => {
              setBookFilter('all');
              setStatusFilter('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-[#0C122C] text-[#FFD233] text-xs font-black cursor-pointer"
          >
            Reset Filter
          </button>
        </div>
      )}

      {/* BAGIAN PERTAMA — PUSTAKA SHARAF (BAB 1–56) */}
      {(bookFilter === 'all' || bookFilter === 'al-amtsilah-at-tashrifiyyah') &&
        sections.sharaf.count > 0 && (
          <section className="space-y-6">
            <div className="bg-white rounded-[2rem] bubble-column-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#D81B60]">
                  Bagian Pertama — Pustaka Sharaf
                </span>
                <h2 className="text-xl font-black text-[#0C122C] mt-0.5">
                  Kitab Al-Amtsilah At-Tashrifiyyah (56 Bab)
                </h2>
                <p className="font-serif text-lg font-bold text-slate-500 mt-0.5" dir="rtl">
                  الأَمْثِلَةُ التَّصْرِيفِيَّةُ
                </p>
              </div>
              <div className="text-xs font-black text-[#0C122C] bg-[#FFE5EE] px-4 py-2 rounded-xl tabular-nums shrink-0 self-start sm:self-center">
                {summaryStats.sharafCompleted} / 56 Bab Selesai
              </div>
            </div>

            {sections.sharaf.groups.map((grp) => (
              <div key={`sharaf-${grp.groupTitle}`} className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                    {grp.groupTitle}
                  </h3>
                  <span className="text-xs font-bold text-slate-400 tabular-nums">
                    {grp.items.length} Bab
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {grp.items.map(renderBabCard)}
                </div>
              </div>
            ))}
          </section>
        )}

      {/* BAGIAN KEDUA — PUSTAKA NAHWU (BAB 1–59) */}
      {(bookFilter === 'all' || bookFilter === 'mutammimah-al-jurumiyyah') &&
        sections.nahwu.count > 0 && (
          <section className="space-y-6 pt-2">
            <div className="bg-white rounded-[2rem] bubble-column-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#0284C7]">
                  Bagian Kedua — Pustaka Nahwu
                </span>
                <h2 className="text-xl font-black text-[#0C122C] mt-0.5">
                  Kitab Mutammimah Al-Ajurrumiyah (59 Bab)
                </h2>
                <p className="font-serif text-lg font-bold text-slate-500 mt-0.5" dir="rtl">
                  مُتَمِّمَةُ الْآجُرُّومِيَّةِ فِي عِلْمِ الْعَرَبِيَّةِ
                </p>
              </div>
              <div className="text-xs font-black text-[#0C122C] bg-[#E0F9FF] px-4 py-2 rounded-xl tabular-nums shrink-0 self-start sm:self-center">
                {summaryStats.nahwuCompleted} / 59 Bab Selesai
              </div>
            </div>

            {sections.nahwu.groups.map((grp) => (
              <div key={`nahwu-${grp.groupTitle}`} className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                    {grp.groupTitle}
                  </h3>
                  <span className="text-xs font-bold text-slate-400 tabular-nums">
                    {grp.items.length} Bab
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {grp.items.map(renderBabCard)}
                </div>
              </div>
            ))}
          </section>
        )}
    </div>
  );
};
