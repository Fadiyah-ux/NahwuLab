import { BabQuestion, BabQuizMeta } from '../../types';
import { SEED_BOOKS } from '../seedData';

export const NON_KAIDAH_CHAPTER_IDS = new Set<string>([
  'amtsilah-muqaddimah-sambutan',
  'amtsilah-tadzyil',
  'amtsilah-fihris',
  'mutammimah-sampul-pengantar',
  'mutammimah-tarjamah',
  'mutammimah-muqaddimah',
  'mutammimah-fihris',
]);

export const QUIZ_BAB_CATALOG: BabQuizMeta[] = SEED_BOOKS.flatMap((book) => {
  const bookId = book.id as BabQuizMeta['bookId'];
  const category: 'shorof' | 'nahwu' =
    bookId === 'al-amtsilah-at-tashrifiyyah' ? 'shorof' : 'nahwu';

  return book.chapters.map((chapter, index) => {
    const isNonKaidah = NON_KAIDAH_CHAPTER_IDS.has(chapter.id);
    return {
      chapterId: chapter.id,
      bookId,
      bookTitle: book.title,
      bookTitleArabic: book.titleArabic,
      category,
      babNumber: index + 1,
      groupTitle: chapter.groupTitle,
      titleIndo: chapter.titleIndo,
      titleArabic: chapter.titleArabic,
      pdfPage: chapter.pdfPage,
      pdfEndPage: chapter.pdfEndPage,
      questionCount: isNonKaidah ? 7 : 15,
      isNonKaidah,
    };
  });
});

const BAB_META_MAP = new Map<string, BabQuizMeta>(
  QUIZ_BAB_CATALOG.map((meta) => [meta.chapterId, meta])
);

export function getBabMetaById(chapterId: string): BabQuizMeta | undefined {
  return BAB_META_MAP.get(chapterId);
}

type QuizChunkLoader = () => Promise<Record<string, BabQuestion[]>>;

const AMTSILAH_LOADERS: QuizChunkLoader[] = [
  () => import('./amtsilahMujarrad').then((m) => m.AMTSILAH_MUJARRAD_QUIZZES),
  () => import('./amtsilahMazid').then((m) => m.AMTSILAH_MAZID_QUIZZES),
  () => import('./amtsilahLughawi').then((m) => m.AMTSILAH_LUGHAWI_QUIZZES),
  () => import('./amtsilahIsimBina').then((m) => m.AMTSILAH_ISIM_BINA_QUIZZES),
];

const MUTAMMIMAH_LOADERS: QuizChunkLoader[] = [
  () => import('./mutammimahPart1').then((m) => m.MUTAMMIMAH_PART1_QUIZZES),
  () => import('./mutammimahPart2').then((m) => m.MUTAMMIMAH_PART2_QUIZZES),
  () => import('./mutammimahPart3').then((m) => m.MUTAMMIMAH_PART3_QUIZZES),
  () => import('./mutammimahPart4').then((m) => m.MUTAMMIMAH_PART4_QUIZZES),
];

const questionCache = new Map<string, BabQuestion[]>();

function pickPrimaryLoaderIndex(meta: BabQuizMeta): number {
  const n = meta.babNumber;
  if (meta.bookId === 'al-amtsilah-at-tashrifiyyah') {
    if (n <= 15) return 0;
    if (n <= 32) return 1;
    if (n <= 45) return 2;
    return 3;
  }
  if (n <= 15) return 0;
  if (n <= 31) return 1;
  if (n <= 46) return 2;
  return 3;
}

export async function loadBabQuestions(chapterId: string): Promise<BabQuestion[]> {
  const cached = questionCache.get(chapterId);
  if (cached) return cached;

  const meta = BAB_META_MAP.get(chapterId);
  if (!meta) return [];

  const loaders =
    meta.bookId === 'al-amtsilah-at-tashrifiyyah' ? AMTSILAH_LOADERS : MUTAMMIMAH_LOADERS;
  const primaryIdx = pickPrimaryLoaderIndex(meta);
  const orderedIndices = [
    primaryIdx,
    ...loaders.map((_, i) => i).filter((i) => i !== primaryIdx),
  ];

  for (const idx of orderedIndices) {
    const chunk = await loaders[idx]();
    for (const [key, list] of Object.entries(chunk)) {
      if (!questionCache.has(key)) {
        questionCache.set(key, list);
      }
    }
    const found = questionCache.get(chapterId);
    if (found && found.length > 0) {
      return found;
    }
  }

  return [];
}
