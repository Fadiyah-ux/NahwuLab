import { BabQuestion, BabQuestionType } from '../../types';

export type CompactQuestionType =
  | BabQuestionType
  | 'konsep'
  | 'kaidah'
  | 'contoh'
  | 'analisis'
  | 'koreksi';

const QUESTION_TYPE_MAP: Record<CompactQuestionType, BabQuestionType> = {
  concept: 'concept',
  rule_identification: 'rule_identification',
  example_analysis: 'example_analysis',
  rule_application: 'rule_application',
  error_analysis: 'error_analysis',
  konsep: 'concept',
  kaidah: 'rule_identification',
  contoh: 'rule_application',
  analisis: 'example_analysis',
  koreksi: 'error_analysis',
};

export interface CompactQuestionInput {
  t: CompactQuestionType;
  q: string;
  ar?: string;
  opts: [string, string, string, string];
  ans: 0 | 1 | 2 | 3;
  exp: string;
  ref?: string;
}

export function buildChapterQuestions(
  chapterId: string,
  bookId: 'al-amtsilah-at-tashrifiyyah' | 'mutammimah-al-jurumiyyah',
  defaultRef: string,
  items: CompactQuestionInput[]
): BabQuestion[] {
  return items.map((item, idx) => ({
    id: `${chapterId}_q${idx + 1}`,
    chapterId,
    bookId,
    type: QUESTION_TYPE_MAP[item.t] ?? 'concept',
    question: item.q,
    ...(item.ar ? { arabicSnippet: item.ar } : {}),
    options: item.opts,
    correctAnswerIndex: item.ans,
    explanation: item.exp,
    kitabReference: item.ref || defaultRef,
  }));
}
