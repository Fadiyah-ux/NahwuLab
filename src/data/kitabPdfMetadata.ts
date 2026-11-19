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
  // === KITAB AL-AMTSILAH AT-TASHRIFIYAH (SHOROF - 56 BAGIAN LENGKAP HAL. 1–33) ===
  'amtsilah-muqaddimah-sambutan': {
    groupTitle: 'Muqaddimah & Pengantar Kitab',
    pdfPage: 1,
    pdfEndPage: 3,
    pdfSections: [
      { label: 'Sampul & Halaman Judul (Hal. 1–2)', page: 1 },
      { label: 'Sambutan Menteri Agama RI 1965 (Hal. 3)', page: 3 },
    ],
  },
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
    groupTitle: "Tashrif Istilahi — Ruba'i Mujarrad & Mulhaq (7 Bab)",
    pdfPage: 7,
    pdfSections: [
      { label: "Awal Ruba'i Mujarrad: دَحْرَجَ–سَبْحَلَ (Hal. 7)", page: 7 },
      { label: 'Mulhaq Bab 5–7 Setelah Suplemen (Hal. 8)', page: 8 },
    ],
    supplementImageUrl: '/assets/aistudio/amtsilah_pages/page_008.png',
    pdfNote:
      'Bagian awal bab ini (دَحْرَجَ hingga سَبْحَلَ) tampil di PDF halaman 7. Tiga mauzun penutupnya (حَمْدَلَ، هَيْلَلَ، حَوْقَلَ) berada di halaman cetak Arab 10–11 yang terlampir bersih pada lembar suplemen di atas viewer PDF.',
  },
  'amtsilah-mulhaq-dahraja': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mujarrad & Mulhaq (7 Bab)",
    pdfPage: 8,
    pdfSections: [{ label: 'Kelanjutan Mulhaq di PDF (Hal. 8)', page: 8 }],
    supplementImageUrl: '/assets/aistudio/amtsilah_pages/page_008.png',
    pdfNote:
      'Pada berkas PDF bersih ini, lembar cetak Arab 10–11 (Bab 1–4 Mulhaq Ruba’i: جَلْبَبَ، حَوْقَلَ، بَيْطَرَ، جَهْوَرَ) terlewati di antara hal. 7 dan hal. 8; pindaian bersih aslinya ditampilkan langsung di atas viewer PDF.',
  },
  'amtsilah-mulhaq-dahraja-2': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mujarrad & Mulhaq (7 Bab)",
    pdfPage: 8,
    pdfSections: [{ label: 'Kelanjutan Mulhaq di PDF (Hal. 8)', page: 8 }],
    supplementImageUrl: '/assets/aistudio/amtsilah_pages/page_008.png',
    pdfNote:
      'Bab 2 Mulhaq Ruba’i (حَوْقَلَ) tercantum pada halaman cetak Arab 10–11 (lihat lembar pindaian suplemen bersih di atas viewer PDF).',
  },
  'amtsilah-mulhaq-dahraja-3': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mujarrad & Mulhaq (7 Bab)",
    pdfPage: 8,
    pdfSections: [{ label: 'Kelanjutan Mulhaq di PDF (Hal. 8)', page: 8 }],
    supplementImageUrl: '/assets/aistudio/amtsilah_pages/page_008.png',
    pdfNote:
      'Bab 3 Mulhaq Ruba’i (بَيْطَرَ) tercantum pada halaman cetak Arab 10–11 (lihat lembar pindaian suplemen bersih di atas viewer PDF).',
  },
  'amtsilah-mulhaq-dahraja-4': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mujarrad & Mulhaq (7 Bab)",
    pdfPage: 8,
    pdfSections: [{ label: 'Kelanjutan Mulhaq di PDF (Hal. 8)', page: 8 }],
    supplementImageUrl: '/assets/aistudio/amtsilah_pages/page_008.png',
    pdfNote:
      'Bab 4 Mulhaq Ruba’i (جَهْوَرَ) tercantum pada halaman cetak Arab 10–11 (lihat lembar pindaian suplemen bersih di atas viewer PDF).',
  },
  'amtsilah-mulhaq-dahraja-5': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mujarrad & Mulhaq (7 Bab)",
    pdfPage: 8,
    pdfSections: [{ label: 'Bab 5 Mulhaq: شَرْيَفَ (Hal. 8)', page: 8 }],
  },
  'amtsilah-mulhaq-dahraja-6': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mujarrad & Mulhaq (7 Bab)",
    pdfPage: 8,
    pdfSections: [{ label: 'Bab 6 Mulhaq: سَلْقَى (Hal. 8)', page: 8 }],
  },
  'amtsilah-mulhaq-dahraja-7': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mujarrad & Mulhaq (7 Bab)",
    pdfPage: 8,
    pdfSections: [{ label: 'Bab 7 Mulhaq: قَلْنَسَ (Hal. 8)', page: 8 }],
  },
  'amtsilah-mazid-1': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 8,
    pdfEndPage: 9,
    pdfSections: [
      { label: 'Awal Bab 1: فَعَّلَ (Hal. 8)', page: 8 },
      { label: 'Lanjutan Mauzun فَرَّحَ (Hal. 9)', page: 9 },
    ],
  },
  'amtsilah-mazid-1-faala': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 9,
    pdfEndPage: 10,
    pdfSections: [
      { label: 'Awal Bab 2: فَاعَلَ (Hal. 9)', page: 9 },
      { label: 'Lanjutan Mauzun قَاتَلَ (Hal. 10)', page: 10 },
    ],
  },
  'amtsilah-mazid-1-afala': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 10,
    pdfEndPage: 11,
    pdfSections: [
      { label: 'Awal Bab 3: أَفْعَلَ (Hal. 10)', page: 10 },
      { label: 'Lanjutan Mauzun أَكْرَمَ (Hal. 11)', page: 11 },
    ],
  },
  'amtsilah-mazid-2': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 11,
    pdfEndPage: 12,
    pdfSections: [
      { label: 'Awal Bab 1: تَفَاعَلَ (Hal. 11)', page: 11 },
      { label: 'Lanjutan Mauzun تَبَاعَدَ (Hal. 12)', page: 12 },
    ],
  },
  'amtsilah-mazid-2-tafaala': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 12,
    pdfEndPage: 13,
    pdfSections: [
      { label: 'Awal Bab 2: تَفَعَّلَ (Hal. 12)', page: 12 },
      { label: 'Lanjutan Mauzun تَكَسَّرَ (Hal. 13)', page: 13 },
    ],
  },
  'amtsilah-mazid-2-iftaala': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 13,
    pdfEndPage: 14,
    pdfSections: [
      { label: 'Awal Bab 3: اِفْتَعَلَ (Hal. 13)', page: 13 },
      { label: 'Lanjutan Mauzun اِجْتَمَعَ (Hal. 14)', page: 14 },
    ],
  },
  'amtsilah-mazid-2-infaala': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 14,
    pdfEndPage: 15,
    pdfSections: [
      { label: 'Awal Bab 4: اِنْفَعَلَ (Hal. 14)', page: 14 },
      { label: 'Penutup Mauzun اِنْطَفَأَ (Hal. 15)', page: 15 },
    ],
  },
  'amtsilah-mazid-2-ifalla': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 15,
  },
  'amtsilah-mazid-3': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 15,
    pdfEndPage: 16,
    pdfSections: [
      { label: 'Pengantar & Faedah اِسْتَفْعَلَ (Hal. 15)', page: 15 },
      { label: 'Tabel 13 Mauzun اِسْتَخْرَجَ (Hal. 16)', page: 16 },
    ],
  },
  'amtsilah-mazid-3-ifauaa': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 16,
  },
  'amtsilah-mazid-3-ifaalla': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 17,
  },
  'amtsilah-mazid-3-ifawwala': {
    groupTitle: 'Tashrif Istilahi — Tsulatsi Mazid (1, 2, 3 Huruf)',
    pdfPage: 17,
  },
  'amtsilah-mulhaq-tadahraja': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mazid & Mulhaq",
    pdfPage: 17,
  },
  'amtsilah-mulhaq-tadahraja-7': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mazid & Mulhaq",
    pdfPage: 18,
  },
  'amtsilah-mulhaq-ihranjama': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mazid & Mulhaq",
    pdfPage: 19,
  },
  'amtsilah-mulhaq-ihranjama-2': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mazid & Mulhaq",
    pdfPage: 19,
  },
  'amtsilah-mulhaq-iqsyarra': {
    groupTitle: "Tashrif Istilahi — Ruba'i Mazid & Mulhaq",
    pdfPage: 19,
  },
  'amtsilah-lughawi-madhi': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 20,
    pdfEndPage: 21,
    pdfSections: [
      { label: "Madhi Ma'lum Bagian 1 (Hal. 20)", page: 20 },
      { label: "Madhi Ma'lum Bagian 2 (Hal. 21)", page: 21 },
    ],
  },
  'amtsilah-lughawi-madhi-majhul': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 21,
  },
  'amtsilah-lughawi-mudhari': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 22,
  },
  'amtsilah-lughawi-mudhari-majhul': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 23,
  },
  'amtsilah-nun-taukid': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 23,
  },
  'amtsilah-nun-taukid-khafifah': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 24,
  },
  'amtsilah-amr-nahyi': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 24,
  },
  'amtsilah-amr-majhul': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 25,
  },
  'amtsilah-amr-taukid-tsaqilah': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 25,
  },
  'amtsilah-amr-taukid-khafifah': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 26,
  },
  'amtsilah-fiil-nahyi': {
    groupTitle: "Tashrif Lughawi — Fi'il (Madhi, Mudhari', Amr, Nahyi)",
    pdfPage: 26,
  },
  'amtsilah-dhamir-manshub': {
    groupTitle: "Tashrif Lughawi — Dhamir & Asma' Musytaqqah",
    pdfPage: 26,
  },
  'amtsilah-dhamir-muttashil-isyarah': {
    groupTitle: "Tashrif Lughawi — Dhamir & Asma' Musytaqqah",
    pdfPage: 27,
  },
  'amtsilah-fail-maful': {
    groupTitle: "Tashrif Lughawi — Dhamir & Asma' Musytaqqah",
    pdfPage: 27,
    pdfEndPage: 28,
    pdfSections: [
      { label: "Isim Fa'il Marfu' Bagian 1 (Hal. 27)", page: 27 },
      { label: "Isim Fa'il Marfu' Bagian 2 (Hal. 28)", page: 28 },
    ],
  },
  'amtsilah-isim-fail-manshub-majrur': {
    groupTitle: "Tashrif Lughawi — Dhamir & Asma' Musytaqqah",
    pdfPage: 28,
  },
  'amtsilah-isim-maful-marfu': {
    groupTitle: "Tashrif Lughawi — Dhamir & Asma' Musytaqqah",
    pdfPage: 28,
  },
  'amtsilah-isim-maful-manshub-majrur': {
    groupTitle: "Tashrif Lughawi — Dhamir & Asma' Musytaqqah",
    pdfPage: 29,
  },
  'amtsilah-sifat-tafdhil': {
    groupTitle: "Tashrif Lughawi — Dhamir & Asma' Musytaqqah",
    pdfPage: 29,
    pdfNote:
      "Catatan naskah asli: Di halaman 29 kitab Amtsilah at-Tashrifiyyah hanya tercantum tabel Shifah Musyabbahah Marfu'ah (حَسَنٌ، سَرِيٌّ، أَصْفَرُ، أَبْيَضُ، عَطْشَانُ) tanpa tabel tersendiri untuk Isim Tafdhil.",
  },
  'amtsilah-zaman-makan-alah': {
    groupTitle: "Tashrif Lughawi — Dhamir & Asma' Musytaqqah",
    pdfPage: 29,
  },
  'amtsilah-muhimmah-sifat': {
    groupTitle: "Tashrif Lughawi — Dhamir & Asma' Musytaqqah",
    pdfPage: 30,
    pdfEndPage: 31,
    pdfSections: [
      { label: 'Muhimmah Bagian 1 (Hal. 30)', page: 30 },
      { label: 'Muhimmah Bagian 2 & Khatam (Hal. 31)', page: 31 },
    ],
  },
  'amtsilah-aqsam-bina': {
    groupTitle: 'Kaidah Penunjang, Tadzyil & Fihris',
    pdfPage: 4,
    pdfEndPage: 19,
    pdfNote:
      "Klasifikasi 7 Bina' (Shahih, Mudha'af, Mitsal, Ajwaf, Naqish, Lafif, Mahmuz) tercantum langsung pada kolom tepi kanan di seluruh tabel Tashrif Istilahi (PDF hal. 4–19).",
  },
  'amtsilah-muhimmah-ilal-idgham': {
    groupTitle: 'Kaidah Penunjang, Tadzyil & Fihris',
    pdfPage: 20,
    pdfEndPage: 29,
    pdfNote:
      "Materi penunjang: Ringkasan kaidah I'lal dan Idgham ini disarikan sebagai pendamping belajar dari perubahan kata nyata di dalam tabel kitab (hal. 4–29), sekaligus menjadi acuan bank soal latihan.",
  },
  'amtsilah-tadzyil': {
    groupTitle: 'Kaidah Penunjang, Tadzyil & Fihris',
    pdfPage: 31,
  },
  'amtsilah-fihris': {
    groupTitle: 'Kaidah Penunjang, Tadzyil & Fihris',
    pdfPage: 32,
    pdfEndPage: 33,
    pdfSections: [
      { label: 'Fihris Asli Kitab (Hal. 32)', page: 32 },
      { label: 'Sampul Belakang (Hal. 33)', page: 33 },
    ],
  },

  // === KITAB MUTAMMIMAH AL-AJURRUMIYAH (NAHWU - 59 BAGIAN LENGKAP HAL. 1–99) ===
  'mutammimah-sampul-pengantar': {
    groupTitle: 'Muqaddimah & Dasar Kalam',
    pdfPage: 1,
    pdfEndPage: 2,
    pdfSections: [
      { label: 'Sampul Kitab (Hal. 1)', page: 1 },
      { label: 'Halaman Judul & Cetakan (Hal. 2)', page: 2 },
    ],
  },
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
    pdfEndPage: 9,
  },
  'mutammimah-alamat-nashab': {
    groupTitle: "I'rab, Bina' & 'Alamat I'rab",
    pdfPage: 9,
    pdfEndPage: 10,
  },
  'mutammimah-alamat-khafadh': {
    groupTitle: "I'rab, Bina' & 'Alamat I'rab",
    pdfPage: 10,
    pdfEndPage: 11,
  },
  'mutammimah-alamat-jazm': {
    groupTitle: "I'rab, Bina' & 'Alamat I'rab",
    pdfPage: 11,
    pdfEndPage: 12,
  },
  'mutammimah-fashl-murabat': {
    groupTitle: "I'rab, Bina' & 'Alamat I'rab",
    pdfPage: 12,
    pdfEndPage: 15,
    pdfSections: [
      { label: "Mu'rab bil-Harakat (Hal. 12–13)", page: 12 },
      { label: "Mu'rab bil-Huruf & Syarat (Hal. 13–15)", page: 13 },
    ],
  },
  'mutammimah-tanbih-niyabah': {
    groupTitle: "I'rab, Bina' & 'Alamat I'rab",
    pdfPage: 15,
    pdfEndPage: 16,
  },
  'mutammimah-irab-taqdiri': {
    groupTitle: "I'rab, Bina' & 'Alamat I'rab",
    pdfPage: 16,
  },
  'mutammimah-ghair-munsharif': {
    groupTitle: "I'rab, Bina' & 'Alamat I'rab",
    pdfPage: 16,
    pdfEndPage: 20,
    pdfSections: [
      { label: "Definisi & 9 'Illat (Hal. 16–17)", page: 16 },
      { label: "Kombinasi Shifah & 'Alamiyah (Hal. 18–20)", page: 18 },
    ],
  },
  'mutammimah-nakirah-marifah': {
    groupTitle: "Nakirah & Ma'rifah",
    pdfPage: 21,
  },
  'mutammimah-dhamir': {
    groupTitle: "Nakirah & Ma'rifah",
    pdfPage: 21,
    pdfEndPage: 24,
  },
  'mutammimah-alam': {
    groupTitle: "Nakirah & Ma'rifah",
    pdfPage: 24,
    pdfEndPage: 25,
  },
  'mutammimah-isyarah': {
    groupTitle: "Nakirah & Ma'rifah",
    pdfPage: 25,
    pdfEndPage: 26,
  },
  'mutammimah-maushul': {
    groupTitle: "Nakirah & Ma'rifah",
    pdfPage: 26,
    pdfEndPage: 29,
  },
  'mutammimah-muarraf-al': {
    groupTitle: "Nakirah & Ma'rifah",
    pdfPage: 29,
    pdfEndPage: 30,
  },
  'mutammimah-fashl-mudhaf': {
    groupTitle: "Nakirah & Ma'rifah",
    pdfPage: 30,
  },
  'mutammimah-marfuat': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 30,
    pdfEndPage: 31,
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
    pdfEndPage: 39,
  },
  'mutammimah-kana': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 39,
    pdfEndPage: 41,
  },
  'mutammimah-huruf-laisa': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 41,
    pdfEndPage: 42,
  },
  'mutammimah-afal-muqarabah': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 42,
    pdfEndPage: 44,
  },
  'mutammimah-inna': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 44,
    pdfEndPage: 47,
  },
  'mutammimah-la-jins': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 47,
    pdfEndPage: 50,
  },
  'mutammimah-zhanna': {
    groupTitle: "Marfu'atul Asma & Nawasikh",
    pdfPage: 50,
    pdfEndPage: 53,
  },
  'mutammimah-manshubat': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 54,
  },
  'mutammimah-maful-bihi': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 54,
    pdfEndPage: 55,
  },
  'mutammimah-isytighal': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 55,
    pdfEndPage: 56,
  },
  'mutammimah-munada': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 56,
    pdfEndPage: 57,
  },
  'mutammimah-munada-ya': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 57,
    pdfEndPage: 58,
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
  'mutammimah-musyabbah-maful': {
    groupTitle: 'Manshubatul Asma',
    pdfPage: 62,
    pdfEndPage: 63,
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
    pdfEndPage: 72,
  },
  'mutammimah-makhfudh-idhafah': {
    groupTitle: 'Makhfudhatul Asma',
    pdfPage: 72,
    pdfEndPage: 73,
  },
  'mutammimah-irab-afal': {
    groupTitle: "I'rab al-Af'al",
    pdfPage: 73,
    pdfEndPage: 74,
  },
  'mutammimah-nawashib': {
    groupTitle: "I'rab al-Af'al",
    pdfPage: 74,
    pdfEndPage: 77,
  },
  'mutammimah-jawazim': {
    groupTitle: "I'rab al-Af'al",
    pdfPage: 77,
    pdfEndPage: 79,
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
    groupTitle: 'Bab Pelengkap, Penutup & Fihris',
    pdfPage: 89,
    pdfEndPage: 92,
  },
  'mutammimah-tanazu': {
    groupTitle: 'Bab Pelengkap, Penutup & Fihris',
    pdfPage: 92,
    pdfEndPage: 93,
  },
  'mutammimah-taajjub': {
    groupTitle: 'Bab Pelengkap, Penutup & Fihris',
    pdfPage: 93,
    pdfEndPage: 94,
  },
  'mutammimah-adad': {
    groupTitle: 'Bab Pelengkap, Penutup & Fihris',
    pdfPage: 94,
    pdfEndPage: 95,
  },
  'mutammimah-waqf': {
    groupTitle: 'Bab Pelengkap, Penutup & Fihris',
    pdfPage: 95,
    pdfEndPage: 96,
  },
  'mutammimah-fihris': {
    groupTitle: 'Bab Pelengkap, Penutup & Fihris',
    pdfPage: 97,
    pdfEndPage: 99,
    pdfSections: [
      { label: 'Fihris Bagian 1 (Hal. 97)', page: 97 },
      { label: 'Fihris Bagian 2 (Hal. 98)', page: 98 },
      { label: 'Fihris Bagian 3 (Hal. 99)', page: 99 },
    ],
  },
};
