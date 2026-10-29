/**
 * Strips Arabic diacritics/tasykils (Fathah, Dhommah, Kasrah, Sukun, Tanwin, Shaddah)
 * for search indexing and flexible comparison.
 */
export function stripArabicHarakat(text: string): string {
  if (!text) return '';
  return text.replace(/[\u064B-\u0652\u0670\u0656-\u065F]/g, '');
}

/**
 * Checks if a word starts with the Arabic definite article 'ال' (Al-)
 */
export function hasAlifLam(word: string): boolean {
  const clean = stripArabicHarakat(word.trim());
  return clean.startsWith('ال') && clean.length > 2;
}

/**
 * Checks if a word ends with Tanwin (Fathatain, Dhommatain, or Kasratain)
 */
export function hasTanwin(word: string): boolean {
  return /[\u064B\u064C\u064D]/.test(word);
}

/**
 * Determines primary I'rab status based on Arabic grammatical marker description.
 */
export function categorizeIrabCase(caseName: string): 'marfu' | 'manshub' | 'majrur' | 'majzum' | 'mabni' {
  const lower = caseName.toLowerCase();
  if (lower.includes('marfu') || lower.includes('rafa') || lower.includes('dhommah')) return 'marfu';
  if (lower.includes('manshub') || lower.includes('nashab') || lower.includes('fathah')) return 'manshub';
  if (lower.includes('majrur') || lower.includes('jarr') || lower.includes('khofadh') || lower.includes('kasrah')) return 'majrur';
  if (lower.includes('majzum') || lower.includes('jazm') || lower.includes('sukun')) return 'majzum';
  return 'mabni';
}

export interface QuizScoreSummary {
  total: number;
  correct: number;
  percentage: number;
  xpEarned: number;
  grade: 'Mumtaz' | 'Jayyid Jiddan' | 'Jayyid' | 'Maqbul' | 'Rasib';
}

export function evaluateQuizScore(answers: { selectedIndex: number; correctIndex: number }[]): QuizScoreSummary {
  const total = answers.length;
  if (total === 0) {
    return { total: 0, correct: 0, percentage: 0, xpEarned: 0, grade: 'Rasib' };
  }

  const correct = answers.filter((a) => a.selectedIndex === a.correctIndex).length;
  const percentage = Math.round((correct / total) * 100);
  const xpEarned = correct * 15;

  let grade: QuizScoreSummary['grade'];
  if (percentage >= 90) grade = 'Mumtaz'; // Istimewa
  else if (percentage >= 75) grade = 'Jayyid Jiddan'; // Sangat Baik
  else if (percentage >= 60) grade = 'Jayyid'; // Baik
  else if (percentage >= 45) grade = 'Maqbul'; // Cukup
  else grade = 'Rasib'; // Perlu Belajar Lagi

  return { total, correct, percentage, xpEarned, grade };
}
