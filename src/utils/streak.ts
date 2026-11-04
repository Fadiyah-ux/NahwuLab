import { UserProfile, StreakRecoveryData, StreakRecoveryLog } from '../types';

export interface UserLevelInfo {
  level: number;
  title: string;
  badge: string;
  nextLevelXp: number;
  progressPercent: number;
}

/**
 * Returns the current date in Asia/Jakarta timezone (WIB) in YYYY-MM-DD format.
 */
export function getJakartaDateString(date: Date = new Date()): string {
  try {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  } catch {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
}

/**
 * Calculates calendar day difference between two YYYY-MM-DD dates in UTC midnight.
 * dateStr2 - dateStr1 (positive if dateStr2 is in the future relative to dateStr1).
 */
export function getCalendarDaysDiff(dateStr1: string, dateStr2: string): number {
  if (!dateStr1 || !dateStr2) return 0;
  const [y1, m1, d1] = dateStr1.split('-').map(Number);
  const [y2, m2, d2] = dateStr2.split('-').map(Number);
  if (isNaN(y1) || isNaN(m1) || isNaN(d1) || isNaN(y2) || isNaN(m2) || isNaN(d2)) return 0;
  const ms1 = Date.UTC(y1, m1 - 1, d1);
  const ms2 = Date.UTC(y2, m2 - 1, d2);
  return Math.floor((ms2 - ms1) / (1000 * 60 * 60 * 24));
}

/** Legacy alias for backwards compatibility */
export function getTodayDateString(): string {
  return getJakartaDateString();
}

/** Legacy alias for backwards compatibility */
export function getDaysDifference(d1: string, d2: string): number {
  return Math.abs(getCalendarDaysDiff(d1, d2));
}

export interface EvaluatedStreakState {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate?: string;
  streakStatus: 'active' | 'broken' | 'recovered' | 'idle';
  missedDays: number;
  streakRecovery?: StreakRecoveryData | null;
  needsUpdate: boolean;
}

/**
 * Evaluates streak status on user login, reload, or profile synchronization.
 * NOTE: DOES NOT increment streak. Streak only increments when user completes a qualifying learning activity.
 */
export function evaluateStreakStatus(profile: UserProfile): EvaluatedStreakState {
  const todayWIB = getJakartaDateString();
  const lastActive = profile.lastActiveDate || profile.lastLoginDate;
  const currentStreak = typeof profile.currentStreak === 'number' ? profile.currentStreak : 0;
  const longestStreak = typeof profile.longestStreak === 'number' ? profile.longestStreak : 0;

  // New user with no prior learning activity
  if (!lastActive || currentStreak === 0) {
    return {
      currentStreak: 0,
      longestStreak: longestStreak,
      lastActiveDate: undefined,
      streakStatus: 'idle',
      missedDays: 0,
      streakRecovery: null,
      needsUpdate: profile.currentStreak !== 0 || profile.streakStatus !== 'idle',
    };
  }

  const diff = getCalendarDaysDiff(lastActive, todayWIB);

  // If already active today or active yesterday, streak is currently maintained
  if (diff <= 1) {
    return {
      currentStreak,
      longestStreak,
      lastActiveDate: lastActive,
      streakStatus: profile.streakStatus === 'broken' ? 'active' : profile.streakStatus || 'active',
      missedDays: 0,
      streakRecovery: profile.streakRecovery || null,
      needsUpdate: profile.streakStatus === 'broken' || profile.missedDays !== 0,
    };
  }

  // If diff > 1, one or more whole calendar days were missed!
  const missedDays = diff - 1;
  const isAlreadyBroken = profile.streakStatus === 'broken';
  const existingRecovery = profile.streakRecovery;

  const recoveryData: StreakRecoveryData = existingRecovery && existingRecovery.missedDays === missedDays
    ? existingRecovery
    : {
        inProgress: true,
        missedDays,
        previousStreak: currentStreak,
        targetQuestions: missedDays,
        currentQuestionIndex: 0,
        solvedQuestionIds: existingRecovery?.solvedQuestionIds || [],
        usedQuestionIds: existingRecovery?.usedQuestionIds || [],
        lastBreakDate: todayWIB,
      };

  return {
    currentStreak,
    longestStreak,
    lastActiveDate: lastActive,
    streakStatus: 'broken',
    missedDays,
    streakRecovery: recoveryData,
    needsUpdate: !isAlreadyBroken || profile.missedDays !== missedDays,
  };
}

export interface ActivityStreakResult {
  newStreak: number;
  newLongest: number;
  newLastActiveDate: string;
  streakStatus: 'active' | 'broken' | 'recovered';
  missedDays: number;
  isIncremented: boolean;
}

/**
 * Calculates new streak when user conducts a QUALIFYING LEARNING ACTIVITY
 * (asking Musyrif, analyzing sentence, completing exercise, reading book).
 */
export function calculateActivityStreak(profile: UserProfile): ActivityStreakResult {
  const todayWIB = getJakartaDateString();
  const lastActive = profile.lastActiveDate;
  const currentStreak = typeof profile.currentStreak === 'number' ? profile.currentStreak : 0;
  const longestStreak = typeof profile.longestStreak === 'number' ? profile.longestStreak : 0;

  // Case 1: Already performed a learning activity today
  if (lastActive === todayWIB) {
    return {
      newStreak: Math.max(1, currentStreak),
      newLongest: Math.max(longestStreak, currentStreak),
      newLastActiveDate: todayWIB,
      streakStatus: profile.streakStatus === 'broken' ? 'broken' : 'active',
      missedDays: profile.missedDays || 0,
      isIncremented: false,
    };
  }

  // Case 2: First learning activity ever
  if (!lastActive || currentStreak === 0) {
    return {
      newStreak: 1,
      newLongest: Math.max(longestStreak, 1),
      newLastActiveDate: todayWIB,
      streakStatus: 'active',
      missedDays: 0,
      isIncremented: true,
    };
  }

  const diff = getCalendarDaysDiff(lastActive, todayWIB);

  // Case 3: Consecutive day learning (yesterday -> today)
  if (diff === 1) {
    const newStreak = currentStreak + 1;
    return {
      newStreak,
      newLongest: Math.max(longestStreak, newStreak),
      newLastActiveDate: todayWIB,
      streakStatus: 'active',
      missedDays: 0,
      isIncremented: true,
    };
  }

  // Case 4: Missed day(s) occurred (diff > 1)
  const missedDays = diff - 1;
  return {
    newStreak: currentStreak,
    newLongest: longestStreak,
    newLastActiveDate: lastActive, // Retain last active until recovered or acknowledged
    streakStatus: 'broken',
    missedDays,
    isIncremented: false,
  };
}

/** Legacy calculateStreak kept for backward compatibility */
export function calculateStreak(
  lastLoginDate: string | null | undefined,
  currentStreak: number,
  todayStr: string = getJakartaDateString()
) {
  if (!lastLoginDate || currentStreak === 0) {
    return { newStreak: 1, isNewDay: true, streakMaintained: true };
  }
  if (lastLoginDate === todayStr) {
    return { newStreak: currentStreak, isNewDay: false, streakMaintained: true };
  }
  const daysDiff = getDaysDifference(lastLoginDate, todayStr);
  if (daysDiff === 1) {
    return { newStreak: currentStreak + 1, isNewDay: true, streakMaintained: true };
  }
  return { newStreak: 1, isNewDay: true, streakMaintained: false };
}

/**
 * Calculates user rank level and XP target.
 * Note: Star/Sparkle icons replaced with academic icons per Requirement 1.
 */
export function calculateUserLevel(xp: number): UserLevelInfo {
  if (xp < 100) {
    return {
      level: 1,
      title: 'Santri Mubtadi\' (Pemula)',
      badge: '🌱',
      nextLevelXp: 100,
      progressPercent: Math.min(100, Math.round((xp / 100) * 100)),
    };
  } else if (xp < 300) {
    return {
      level: 2,
      title: 'Santri Mutawassith (Menengah)',
      badge: '📖',
      nextLevelXp: 300,
      progressPercent: Math.min(100, Math.round(((xp - 100) / 200) * 100)),
    };
  } else if (xp < 700) {
    return {
      level: 3,
      title: 'Santri Mutaqaddim (Mahir)',
      badge: '📜',
      nextLevelXp: 700,
      progressPercent: Math.min(100, Math.round(((xp - 300) / 400) * 100)),
    };
  } else if (xp < 1500) {
    return {
      level: 4,
      title: 'Mu\'allim I\'rab (Ahli Gramatika)',
      badge: '🎓', // Academic cap instead of star
      nextLevelXp: 1500,
      progressPercent: Math.min(100, Math.round(((xp - 700) / 800) * 100)),
    };
  } else {
    return {
      level: 5,
      title: 'Musyrif Nahwu (Pakar Bahasa)',
      badge: '👑',
      nextLevelXp: 2500,
      progressPercent: 100,
    };
  }
}
