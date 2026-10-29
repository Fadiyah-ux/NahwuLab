export type UserRole = 'admin' | 'student';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  currentStreak: number;
  longestStreak: number;
  lastLoginDate: string;
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
}
