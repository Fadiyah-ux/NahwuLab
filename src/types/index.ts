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

export interface BookChapter {
  id: string;
  titleArabic: string;
  titleIndo: string;
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
