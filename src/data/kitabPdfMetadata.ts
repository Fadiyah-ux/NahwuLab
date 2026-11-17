import { PdfSectionLink } from '../types';

export interface BookPdfMeta {
  pdfUrl: string;
  totalPages: number;
  driveUrl?: string;
}

export interface ChapterPdfMeta {
  groupTitle: string;
  pdfPage: number;
  pdfEndPage?: number;
  pdfSections?: PdfSectionLink[];
  supplementImageUrl?: string;
  pdfNote?: string;
}

export const BOOK_PDF_META: Record<string, BookPdfMeta> = {
  'al-amtsilah-at-tashrifiyyah': {
    pdfUrl: '/assets/aistudio/7_1._Amtsilah_Tashrifiyyah_509dfd9e.pdf',
    totalPages: 33,
  },
  'mutammimah-al-jurumiyyah': {
    pdfUrl: '/assets/aistudio/muthammimah_al_jurumiyah_c2ff1164.pdf',
    totalPages: 99,
  },
};

export const CHAPTER_PDF_META: Record<string, ChapterPdfMeta> = {
  // === KITAB AL-AMTSILAH AT-TASHRIFIYAH (SHOROF - 24 BAB) ===
  'amtsilah-tsulatsi-1': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mujarrad (Bab 1–6)',
    pdfPage: 4,
    pdfSections: [{ label: 'Bab 1: نَصَرَ - يَنْصُرُ (Hal. 4)', page: 4 }],
  },
  'amtsilah-tsulatsi-2': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mujarrad (Bab 1–6)',
    pdfPage: 4,
    pdfEndPage: 5,
    pdfSections: [
      { label: 'Awal Bab 2: ضَرَبَ (Hal. 4)', page: 4 },
      { label: 'Lanjutan Bab 2 (Hal. 5)', page: 5 },
    ],
  },
  'amtsilah-tsulatsi-3': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mujarrad (Bab 1–6)',
    pdfPage: 5,
  },
  'amtsilah-tsulatsi-4': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mujarrad (Bab 1–6)',
    pdfPage: 5,
    pdfEndPage: 6,
    pdfSections: [
      { label: 'Awal Bab 4: عَلِمَ (Hal. 5)', page: 5 },
      { label: 'Lanjutan Bab 4 (Hal. 6)', page: 6 },
    ],
  },
  'amtsilah-tsulatsi-5': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mujarrad (Bab 1–6)',
    pdfPage: 6,
    pdfEndPage: 7,
    pdfSections: [
      { label: 'Awal Bab 5: حَسُنَ (Hal. 6)', page: 6 },
      { label: 'Lanjutan Bab 5 (Hal. 7)', page: 7 },
    ],
  },
  'amtsilah-tsulatsi-6': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mujarrad (Bab 1–6)',
    pdfPage: 7,
  },
  'amtsilah-rubai-mujarrad': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mujarrad & Mulhaq",
    pdfPage: 7,
  },
  'amtsilah-mulhaq-dahraja': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mujarrad & Mulhaq",
    pdfPage: 8,
    supplementImageUrl: '/assets/aistudio/amtsilah_pages/page_008.png',
    pdfNote:
      "Catatan PDF: File PDF melompati halaman cetak Arab 10–11 (Bab 1–4 Mulhaq Ruba'i: Jalbaba, Hauqala, Baithara, Jahwara) dan langsung menuju halaman PDF 8 (Bab 5–7: Syaryafa, Salqa, Qalnasa). Gunakan tampilan pindaian suplemen di bawah untuk melihat halaman yang terlewat.",
  },
  'amtsilah-mazid-1': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 8,
    pdfEndPage: 11,
    pdfSections: [
      { label: 'فَعَّلَ (Hal. 8–9)', page: 8 },
      { label: 'فَاعَلَ (Hal. 9–10)', page: 9 },
      { label: 'أَفْعَلَ (Hal. 10–11)', page: 10 },
    ],
  },
  'amtsilah-mazid-2': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 11,
    pdfEndPage: 15,
    pdfSections: [
      { label: 'تَفَاعَلَ (Hal. 11–12)', page: 11 },
      { label: 'تَفَعَّلَ (Hal. 12–13)', page: 12 },
      { label: 'اِفْتَعَلَ (Hal. 13–14)', page: 13 },
      { label: 'اِنْفَعَلَ (Hal. 14–15)', page: 14 },
      { label: 'اِفْعَلَّ (Hal. 15)', page: 15 },
    ],
  },
  'amtsilah-mazid-3': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 15,
    pdfEndPage: 17,
    pdfSections: [
      { label: 'اِسْتَفْعَلَ (Hal. 15–16)', page: 15 },
      { label: 'اِفْعَوْعَلَ (Hal. 16)', page: 16 },
      { label: 'اِفْعَالَّ & اِفْعَوَّلَ (Hal. 17)', page: 17 },
    ],
  },
  'amtsilah-mulhaq-tadahraja': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mazid & Mulhaq",
    pdfPage: 17,
    pdfEndPage: 18,
    pdfSections: [
      { label: 'تَفَعْلَلَ (Hal. 17)', page: 17 },
      { label: '7 Bab Mulhaq bi Tadahraja (Hal. 18)', page: 18 },
    ],
  },
  'amtsilah-mulhaq-ihranjama': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mazid & Mulhaq",
    pdfPage: 19,
  },
  'amtsilah-mulhaq-iqsyarra': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mazid & Mulhaq",
    pdfPage: 19,
  },
  'amtsilah-lughawi-madhi': {
    groupTitle: 'Tashrif Lughawi & Kaidah Shorof',
    pdfPage: 20,
    pdfEndPage: 21,
    pdfSections: [
      { label: "Madhi Ma'lum (Hal. 20)", page: 20 },
      { label: 'Madhi Majhul (Hal. 21)', page: 21 },
    ],
  },
  'amtsilah-lughawi-mudhari': {
    groupTitle: 'Tashrif Lughawi & Kaidah Shorof',
    pdfPage: 22,
    pdfEndPage: 23,
    pdfSections: [
      { label: "Mudhari' Ma'lum (Hal. 22)", page: 22 },
      { label: "Mudhari' Majhul (Hal. 23)", page: 23 },
    ],
  },
  'amtsilah-nun-taukid': {
    groupTitle: 'Tashrif Lughawi & Kaidah Shorof',
    pdfPage: 23,
    pdfEndPage: 24,
    pdfSections: [
      { label: 'Nun Taukid Tsaqilah (Hal. 23)', page: 23 },
      { label: 'Nun Taukid Khafifah (Hal. 24)', page: 24 },
    ],
  },
  'amtsilah-amr-nahyi': {
    groupTitle: 'Tashrif Lughawi & Kaidah Shorof',
    pdfPage: 24,
    pdfEndPage: 26,
    pdfSections: [
      { label: "Amr Ma'lum (Hal. 24)", page: 24 },
      { label: 'Amr Majhul & Tsaqilah (Hal. 25)', page: 25 },
      { label: 'Amr Khafifah & Nahyi (Hal. 26)', page: 26 },
    ],
  },
  'amtsilah-dhamir-manshub': {
    groupTitle: 'Tashrif Lughawi & Kaidah Shorof',
    pdfPage: 26,
    pdfEndPage: 27,
    pdfSections: [
      { label: "Dhamir Manshub Fi'il (Hal. 26)", page: 26 },
      { label: 'Dhamir Muttashil & Isyarah (Hal. 27)', page: 27 },
    ],
  },
  'amtsilah-fail-maful': {
    groupTitle: 'Tashrif Lughawi & Kaidah Shorof',
    pdfPage: 27,
    pdfEndPage: 29,
    pdfSections: [
      { label: "Isim Fa'il Marfu' (Hal. 27)", page: 27 },
      { label: "Fa'il Manshub & Maf'ul (Hal. 28)", page: 28 },
      { label: "Isim Maf'ul Lanjutan (Hal. 29)", page: 29 },
    ],
  },
  'amtsilah-sifat-tafdhil': {
    groupTitle: 'Tashrif Lughawi & Kaidah Shorof',
    pdfPage: 29,
    pdfEndPage: 31,
    pdfSections: [
      { label: 'Sifat Musyabbahah (Hal. 29)', page: 29 },
      { label: 'Muhimmah Sifat (Hal. 30–31)', page: 30 },
    ],
  },
  'amtsilah-zaman-makan-alah': {
    groupTitle: 'Tashrif Lughawi & Kaidah Shorof',
    pdfPage: 29,
  },
  'amtsilah-aqsam-bina': {
    groupTitle: 'Tashrif Lughawi & Kaidah Shorof',
    pdfPage: 4,
    pdfNote:
      "Klasifikasi Bina' (Shahih, Mudha'af, Mitsal, Ajwaf, Naqish, Lafif, Mahmuz) tercantum di kolom tepi kanan pada seluruh tabel Tashrif Istilahi (PDF hal. 4–19).",
  },
  'amtsilah-muhimmah-ilal-idgham': {
    groupTitle: 'Tashrif Lughawi & Kaidah Shorof',
    pdfPage: 30,
    pdfEndPage: 32,
    pdfSections: [
      { label: 'Muhimmah Kaidah (Hal. 30)', page: 30 },
      { label: 'Tadzyil Biografi (Hal. 31)', page: 31 },
      { label: 'Fihris Kitab (Hal. 32)', page: 32 },
    ],
  },

  // === KITAB MUTAMMIMAH AL-AJURRUMIYAH (NAHWU - 31 BAB) ===
  'mutammimah-tarjamah': {
    groupTitle: 'Muqaddimah & Dasar Kalam',
    pdfPage: 3,
  },
  'mutammimah-muqaddimah': {
    groupTitle: 'Muqaddimah & Dasar Kalam',
    pdfPage: 4,
  },
  'mutammimah-kalam': {
    groupTitle: 'Muqaddimah & Dasar Kalam',
    pdfPage: 4,
    pdfEndPage: 5,
  },
  'mutammimah-irab-bina': {
    groupTitle: "I'rab, Bina' & 'Alamat I'rab",
    pdfPage: 5,
    pdfEndPage: 7,
  },
  'mutammimah-alamat-irab': {
    groupTitle: "I'rab, Bina' & 'Alamat I'rab",
    pdfPage: 7,
    pdfEndPage: 20,
    pdfSections: [
      { label: 'Tanda Rafa/Nashab/Jar (Hal. 7)', page: 7 },
      { label: "Fashl Mu'rabat (Hal. 12)", page: 12 },
      { label: "I'rab Taqdiri (Hal. 16)", page: 16 },
      { label: 'Isim Ghair Munsharif (Hal. 16–20)', page: 17 },
    ],
  },
  'mutammimah-nakirah-marifah': {
    groupTitle: "Nakirah & Ma'rifah",
    pdfPage: 21,
    pdfEndPage: 30,
    pdfSections: [
      { label: 'Dhamir (Hal. 21)', page: 21 },
      { label: "'Alam & Isyarah (Hal. 24–25)", page: 24 },
      { label: 'Maushul & Alif Lam (Hal. 26–29)', page: 26 },
    ],
  },
  'mutammimah-marfuat': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 30,
  },
  'mutammimah-fail': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 31,
    pdfEndPage: 33,
  },
  'mutammimah-naibul-fail': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 33,
    pdfEndPage: 35,
  },
  'mutammimah-mubtada-khabar': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 35,
    pdfEndPage: 38,
  },
  'mutammimah-awamil-nawasikh': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 38,
    pdfEndPage: 53,
    pdfSections: [
      { label: 'Kaana wa Akhawatuha (Hal. 39)', page: 39 },
      { label: 'Huruf Musyabbahah bi Laisa (Hal. 41)', page: 41 },
      { label: "Af'alul Muqarabah (Hal. 42)", page: 42 },
      { label: 'Inna wa Akhawatuha (Hal. 44)', page: 44 },
      { label: 'La Nafiyah lil Jins (Hal. 47)', page: 47 },
      { label: 'Zhanna wa Akhawatuha (Hal. 50)', page: 50 },
    ],
  },
  'mutammimah-manshubat': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 54,
  },
  'mutammimah-maful-bihi': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 54,
    pdfEndPage: 58,
    pdfSections: [
      { label: "Maf'ul Bih (Hal. 54)", page: 54 },
      { label: 'Isytighal (Hal. 55)', page: 55 },
      { label: 'Munada (Hal. 56–58)', page: 56 },
    ],
  },
  'mutammimah-maful-muthlaq': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 58,
    pdfEndPage: 59,
  },
  'mutammimah-maful-fihi': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 59,
    pdfEndPage: 61,
  },
  'mutammimah-maful-min-ajlih': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 61,
  },
  'mutammimah-maful-maah': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 61,
    pdfEndPage: 62,
  },
  'mutammimah-hal': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 63,
    pdfEndPage: 64,
  },
  'mutammimah-tamyiz': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 64,
    pdfEndPage: 65,
  },
  'mutammimah-mustatsna': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 66,
    pdfEndPage: 69,
  },
  'mutammimah-makhfudhat': {
    groupTitle: 'Makhfudhatul Asma',
    pdfPage: 69,
    pdfEndPage: 73,
    pdfSections: [
      { label: 'Huruf Jar (Hal. 69)', page: 69 },
      { label: 'Idhafah (Hal. 72–73)', page: 72 },
    ],
  },
  'mutammimah-irab-afal': {
    groupTitle: "I'rab al-Af'al",
    pdfPage: 73,
    pdfEndPage: 79,
    pdfSections: [
      { label: "Rafa' & Nawashib (Hal. 74)", page: 74 },
      { label: 'Jawazim (Hal. 77–79)', page: 77 },
    ],
  },
  'mutammimah-naat': {
    groupTitle: "At-Tawabi' (Na'at, 'Athaf, Taukid, Badal)",
    pdfPage: 79,
    pdfEndPage: 82,
  },
  'mutammimah-athaf': {
    groupTitle: "At-Tawabi' (Na'at, 'Athaf, Taukid, Badal)",
    pdfPage: 83,
    pdfEndPage: 85,
  },
  'mutammimah-taukid': {
    groupTitle: "At-Tawabi' (Na'at, 'Athaf, Taukid, Badal)",
    pdfPage: 85,
    pdfEndPage: 87,
  },
  'mutammimah-badal': {
    groupTitle: "At-Tawabi' (Na'at, 'Athaf, Taukid, Badal)",
    pdfPage: 87,
    pdfEndPage: 89,
  },
  'mutammimah-asma-amilah': {
    groupTitle: 'Bab Pelengkap & Penutup',
    pdfPage: 89,
    pdfEndPage: 92,
  },
  'mutammimah-tanazu': {
    groupTitle: 'Bab Pelengkap & Penutup',
    pdfPage: 92,
    pdfEndPage: 93,
  },
  'mutammimah-taajjub': {
    groupTitle: 'Bab Pelengkap & Penutup',
    pdfPage: 93,
  },
  'mutammimah-adad': {
    groupTitle: 'Bab Pelengkap & Penutup',
    pdfPage: 94,
    pdfEndPage: 95,
  },
  'mutammimah-waqf': {
    groupTitle: 'Bab Pelengkap & Penutup',
    pdfPage: 95,
    pdfEndPage: 96,
  },
};
