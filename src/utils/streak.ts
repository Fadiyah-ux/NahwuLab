export interface StreakResult {
  newStreak: number;
  isNewDay: boolean;
  streakMaintained: boolean;
}

export function getTodayDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getDaysDifference(dateStr1: string, dateStr2: string): number {
  const d1 = new Date(dateStr1 + 'T00:00:00Z');
  const d2 = new Date(dateStr2 + 'T00:00:00Z');
  const diffMs = Math.abs(d2.getTime() - d1.getTime());
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

/**
 * Calculates updated streak when user logs in or interacts.
 * - If same day: streak unchanged, isNewDay = false.
 * - If consecutive day (diff = 1): streak increments, isNewDay = true.
 * - If missed a day (diff > 1): streak resets to 1, isNewDay = true.
 * - If first time (no lastLoginDate): streak becomes 1, isNewDay = true.
 */
export function calculateStreak(
  lastLoginDate: string | null | undefined,
  currentStreak: number,
  todayStr: string = getTodayDateString()
): StreakResult {
  if (!lastLoginDate) {
    return {
      newStreak: 1,
      isNewDay: true,
      streakMaintained: true,
    };
  }

  if (lastLoginDate === todayStr) {
    return {
      newStreak: Math.max(1, currentStreak),
      isNewDay: false,
      streakMaintained: true,
    };
  }

  const daysDiff = getDaysDifference(lastLoginDate, todayStr);

  if (daysDiff === 1) {
    return {
      newStreak: currentStreak + 1,
      isNewDay: true,
      streakMaintained: true,
    };
  } else {
    // Missed one or more days, streak resets to 1
    return {
      newStreak: 1,
      isNewDay: true,
      streakMaintained: false,
    };
  }
}

export interface UserLevelInfo {
  level: number;
  title: string;
  badge: string;
  nextLevelXp: number;
  progressPercent: number;
}

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
      badge: '🌟',
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
