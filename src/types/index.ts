export type UserRole = 'admin' | 'student';

export interface StreakRecoveryData {
  inProgress: boolean;
  missedDays: number;
  previousStreak: number;
  targetQuestions: number;
  currentQuestionIndex: number;
  solvedQuestionIds: string[];
  usedQuestionIds: string[];
  lastBreakDate?: string;
}

export interface StreakRecoveryLog {
  id: string;
  date: string;
  missedDays: number;
  restoredStreak: number;
  timestamp: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  currentStreak: number;
  longestStreak: number;
  lastLoginDate?: string;
  lastActiveDate?: string; // Tanggal aktivitas belajar terakhir dalam format YYYY-MM-DD WIB
  streakStatus?: 'active' | 'broken' | 'recovered' | 'idle';
  missedDays?: number;
  streakRecovery?: StreakRecoveryData | null;
  recoveryHistory?: StreakRecoveryLog[];
  totalExercisesCompleted: number;
  xp?: number;
  createdAt: string;
  updatedAt: string;
}

export interface StreakLogItem {
  id?: string;
  userId: string;
  date: string;
  activityType: 'chat' | 'exercise' | 'library' | 'login';
  points?: number;
  timestamp: string;
}

export interface ChatMessageItem {
  id: string;
  userId: string;
  role: 'user' | 'assistant';
  content: string;
  topic?: 'nahwu' | 'shorof' | 'irab' | 'umum';
  timestamp: string;
}

export type ExerciseCategory = 'nahwu' | 'shorof' | 'irab';
export type ExerciseDifficulty = 'pemula' | 'menengah' | 'mahir';

export interface ExerciseItem {
  id: string;
  title: string;
  category: ExerciseCategory;
  difficulty: ExerciseDifficulty;
  question: string;
  arabicSnippet?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  kitabReference?: string;
  topicTag?: string;
  createdBy?: string;
}

export interface PdfSectionLink {
  label: string;
  page: number;
}

export interface BookChapter {
  id: string;
  groupTitle: string;
  titleArabic: string;
  titleIndo: string;
  pdfPage: number;
  pdfEndPage?: number;
  pdfSections?: PdfSectionLink[];
  supplementImageUrl?: string;
  pdfNote?: string;
  contentArabic: string;
  translation: string;
  explanation: string;
  keyPoints?: string[];
}

export interface LibraryBookItem {
  id: string;
  title: string;
  titleArabic: string;
  author: string;
  category: 'nahwu' | 'shorof' | 'irab' | 'kaidah';
  description: string;
  level: string;
  coverColor: string;
  pdfUrl: string;
  totalPages: number;
  driveUrl?: string;
  chapters: BookChapter[];
  isBuiltin?: boolean;
}

export interface WordAnalysis {
  word: string;
  type: 'Isim' | 'Fi\'il' | 'Harf' | string;
  position: string;
  irabCase: string;
  marker: string;
  morphology?: string;
  explanation: string;
}

export interface SentenceAnalysisResult {
  sentence: string;
  translation: string;
  overallGrammar: string;
  words: WordAnalysis[];
  kitabReference?: string;
}

export type BabQuestionType =
  | 'concept'
  | 'rule_identification'
  | 'example_analysis'
  | 'rule_application'
  | 'error_analysis';

export interface BabQuestion {
  id: string;
  chapterId: string;
  bookId: 'al-amtsilah-at-tashrifiyyah' | 'mutammimah-al-jurumiyyah';
  type: BabQuestionType;
  question: string;
  arabicSnippet?: string;
  options: [string, string, string, string];
  correctAnswerIndex: 0 | 1 | 2 | 3;
  explanation: string;
  kitabReference: string;
}

export type BabQuizStatus = 'BELUM DIKERJAKAN' | 'SEDANG DIKERJAKAN' | 'SELESAI';

export interface BabQuizMeta {
  chapterId: string;
  bookId: 'al-amtsilah-at-tashrifiyyah' | 'mutammimah-al-jurumiyyah';
  bookTitle: string;
  bookTitleArabic: string;
  category: 'shorof' | 'nahwu';
  babNumber: number;
  groupTitle: string;
  titleIndo: string;
  titleArabic: string;
  pdfPage: number;
  pdfEndPage?: number;
  questionCount: number;
  isNonKaidah?: boolean;
}

export interface BabQuizResult {
  userId: string;
  chapterId: string;
  bookId: 'al-amtsilah-at-tashrifiyyah' | 'mutammimah-al-jurumiyyah';
  bookTitle: string;
  category: 'shorof' | 'nahwu';
  babNumber: number;
  titleIndo: string;
  answers: number[];
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  score: number;
  accuracy: number;
  xpAwarded: number;
  locked: true;
  completedAt: string;
}

