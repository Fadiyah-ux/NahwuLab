import { LibraryBookItem, ExerciseItem } from '../types';
import { BOOK_PDF_META, CHAPTER_PDF_META } from './kitabPdfMetadata';
import { AMTSILAH_CHAPTERS, RawBookChapter } from './amtsilahChapters';
import { MUTAMMIMAH_CHAPTERS } from './mutammimahChapters';

const RAW_SEED_BOOKS: Array<
  Omit<LibraryBookItem, 'pdfUrl' | 'totalPages' | 'driveUrl' | 'chapters'> & {
    chapters: RawBookChapter[];
  }
> = [
  {
    id: 'mutammimah-al-jurumiyyah',
    title: 'Muthammimah al-Jurumiyah',
    titleArabic: 'مُتَمِّمَةُ الْآجُرُّومِيَّةِ فِي عِلْمِ الْعَرَبِيَّةِ',
    author: "Syaikh Syamsuddin Muhammad bin Muhammad Ar-Ra'ini (Al-Haththab Al-Maliki)",
    category: 'nahwu',
    description:
      "Kitab rujukan tunggal ilmu nahwu SmartKib. Karya penyempurna matan Al-Ajurumiyyah yang menguraikan kaidah sintaksis bahasa Arab secara mendalam, sistematis, dan komprehensif.",
    level: "Mubtadi', Mutawassith & Mutaqaddim",
    coverColor: 'from-[#0C122C] to-[#161F46]',
    chapters: MUTAMMIMAH_CHAPTERS,
  },
  {
    id: 'al-amtsilah-at-tashrifiyyah',
    title: 'Amtsilah Tasrifiyah',
    titleArabic: 'الْأَمْثِلَةُ التَّصْرِيفِيَّةُ',
    author: "K.H. Muhammad Ma'shum bin Ali (Pesantren Seblak, Jombang)",
    category: 'shorof',
    description:
      "Kitab rujukan tunggal ilmu shorof SmartKib. Masterpiece morfologi bahasa Arab warisan ulama Nusantara yang menyajikan seluruh bab tashrif istilahi, lughawi, dan kaidah bina' secara sistematis.",
    level: "Mubtadi', Mutawassith & Mutaqaddim",
    coverColor: 'from-amber-700 to-orange-950',
    chapters: AMTSILAH_CHAPTERS,
  },
];

const ORDERED_BOOK_IDS = ['al-amtsilah-at-tashrifiyyah', 'mutammimah-al-jurumiyyah'];

export const SEED_BOOKS: LibraryBookItem[] = ORDERED_BOOK_IDS
  .map((id) => RAW_SEED_BOOKS.find((b) => b.id === id)!)
  .filter(Boolean)
  .map((book) => {
    const bookMeta = BOOK_PDF_META[book.id] || { pdfUrl: '', totalPages: 0 };
    return {
      ...book,
      pdfUrl: bookMeta.pdfUrl,
      totalPages: bookMeta.totalPages,
      driveUrl: bookMeta.driveUrl,
      chapters: book.chapters.map((ch) => {
        const chMeta = CHAPTER_PDF_META[ch.id] || {
          groupTitle: 'Materi Pokok',
          pdfPage: 1,
        };
        return {
          ...ch,
          groupTitle: chMeta.groupTitle,
          pdfPage: chMeta.pdfPage,
          pdfEndPage: chMeta.pdfEndPage,
          pdfSections: chMeta.pdfSections,
          supplementImageUrl: chMeta.supplementImageUrl,
          pdfNote: chMeta.pdfNote,
        };
      }),
    };
  });

export const SEED_EXERCISES: ExerciseItem[] = [
  {
    "id": "ex-1",
    "title": "Menentukan Fa'il dalam Jumlah Fi'liyyah",
    "category": "nahwu",
    "difficulty": "pemula",
    "topicTag": "mutammimah-fail",
    "question": "Perhatikan kalimat bahasa Arab berikut: \"كَتَبَ الطَّالِبُ الدَّرْسَ\". Manakah kata yang berkedudukan sebagai Fa'il (pelaku) dan apa tanda I'rabnya?",
    "arabicSnippet": "كَتَبَ الطَّالِبُ الدَّرْسَ",
    "options": [
      "كَتَبَ (Fi'il Madhi mabni atas fathah)",
      "الطَّالِبُ (Fa'il marfu' dengan tanda dhommah zhahirah)",
      "الدَّرْسَ (Maf'ul bih manshub dengan fathah)",
      "Semua kata berkedudukan sebagai khabar"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dalam susunan Jumlah Fi'liyyah \"كَتَبَ الطَّالِبُ الدَّرْسَ\", kata \"الطَّالِبُ\" terletak setelah fi'il ma'lum (كَتَبَ) dan menunjukkan pelaku perbuatan menulis. Oleh karena itu, ia berkedudukan sebagai Fa'il yang berstatus Marfu' dengan tanda Dhommah zhahirah.",
    "kitabReference": "Kitab Muthammimah al-Jurumiyah, Bab الفاعل."
  },
  {
    "id": "ex-2",
    "title": "Tanda I'rab Isim Inna dan Khabar Inna",
    "category": "irab",
    "difficulty": "pemula",
    "topicTag": "mutammimah-awamil-nawasikh",
    "question": "Pada kalimat \"إِنَّ اللهَ غَفُورٌ رَحِيمٌ\", bagaimanakah status I'rab dari lafadz \"اللهَ\" dan \"غَفُورٌ\"?",
    "arabicSnippet": "إِنَّ اللهَ غَفُورٌ رَحِيمٌ",
    "options": [
      "اللهَ: Isim Inna marfu' | غَفُورٌ: Khabar Inna manshub",
      "اللهَ: Isim Inna manshub bil fathah | غَفُورٌ: Khabar Inna marfu' bid dhommah",
      "اللهَ: Mubtada' marfu' | غَفُورٌ: Fa'il marfu'",
      "Keduanya majrur karena didahului amil jar"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Amil Inna (إِنَّ) dan saudaranya bertugas menashabkan isim dan merafa'kan khabar (تَنْصِبُ الِاسْمَ وَتَرْفَعُ الْخَبَرَ). Lafadz Jalalah \"اللهَ\" berstatus Isim Inna manshub dengan fathah, sedangkan \"غَفُورٌ\" berstatus Khabar Inna marfu' dengan dhommah.",
    "kitabReference": "Kitab Muthammimah al-Jurumiyah, Bab العوامل الداخلة على المبتدأ والخبر (إن وأخواتها)."
  },
  {
    "id": "ex-3",
    "title": "Mengenal Wazan Fi'il Tsulatsi Mujarrad Bab 1",
    "category": "shorof",
    "difficulty": "pemula",
    "topicTag": "amtsilah-tsulatsi-1",
    "question": "Fi'il berikut yang mengikuti wazan Bab 1 Tsulatsi Mujarrad (فَعَلَ - يَفْعُلُ) dengan pola perubahan \"fathu-dhommin\" adalah:",
    "arabicSnippet": "فَعَلَ - يَفْعُلُ",
    "options": [
      "ضَرَبَ - يَضْرِبُ",
      "فَتَحَ - يَفْتَحُ",
      "نَصَرَ - يَنْصُرُ",
      "حَسِبَ - يَحْسِبُ"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Bab 1 Tsulatsi Mujarrad memiliki rumus \"Fathu Dhommin\" (فَعَلَ - يَفْعُلُ), dengan contoh mu'tamadnya adalah نَصَرَ - يَنْصُرُ dan كَتَبَ - يَكْتُبُ. Adapun ضَرَبَ يَضْرِبُ adalah bab 2 (fathu kasrin), dan فَتَحَ يَفْتَحُ adalah bab 3 (fathatani).",
    "kitabReference": "Kitab Amtsilah Tasrifiyah, Bab الثلاثي المجرد - الباب الأول."
  },
  {
    "id": "ex-4",
    "title": "Tanda I'rab Rafa' pada Jamak Mudzakkar Salim",
    "category": "nahwu",
    "difficulty": "pemula",
    "topicTag": "mutammimah-alamat-irab",
    "question": "Pada kalimat \"حَضَرَ الْمُعَلِّمُونَ\", tanda I'rab rafa' pada kata \"الْمُعَلِّمُونَ\" adalah:",
    "arabicSnippet": "حَضَرَ الْمُعَلِّمُونَ",
    "options": [
      "Dhommah zhahirah",
      "Huruf Wawu sebagai pengganti dhommah",
      "Huruf Alif",
      "Tetap sukun (mabni)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Jamak Mudzakkar Salim saat berada dalam keadaan rafa' ditandai dengan huruf Wawu (الْوَاوُ نِيَابَةً عَنِ الضَّمَّةِ), dan huruf Nun di akhirnya adalah pengganti tanwin pada isim mufrad.",
    "kitabReference": "Kitab Muthammimah al-Jurumiyah, Bab معرفة علامات الإعراب."
  },
  {
    "id": "ex-5",
    "title": "Tarkib Maf'ul Bih dan Hal pada Ayat Al-Qur'an",
    "category": "irab",
    "difficulty": "menengah",
    "topicTag": "mutammimah-hal",
    "question": "Pada firman Allah: \"وَخَلَقَ الْإِنْسَانَ ضَعِيفًا\", bagaimanakah kedudukan I'rab dari lafadz \"الْإِنْسَانَ\" dan \"ضَعِيفًا\"?",
    "arabicSnippet": "وَخَلَقَ الْإِنْسَانَ ضَعِيفًا",
    "options": [
      "الْإِنْسَانَ: Fa'il | ضَعِيفًا: Maf'ul bih",
      "الْإِنْسَانَ: Maf'ul bih manshub | ضَعِيفًا: Hal manshub",
      "الْإِنْسَانَ: Mubtada' | ضَعِيفًا: Khabar",
      "الْإِنْسَانَ: Naibul Fa'il | ضَعِيفًا: Tamyiz"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Kata \"الْإِنْسَانَ\" adalah Maf'ul bih (objek penciptaan) dari fi'il خَلَقَ yang fa'ilnya dhomir mustatir jawazan taqdiruhu Huwa (Allah). Sedangkan \"ضَعِيفًا\" adalah Hal (keterangan kondisi manusia saat diciptakan), keduanya wajib manshub dengan tanda fathah.",
    "kitabReference": "Kitab Muthammimah al-Jurumiyah, Bab الحال dan Bab المفعول به."
  },
  {
    "id": "ex-6",
    "title": "Bentuk Isim Fa'il dan Isim Maf'ul Fi'il Mazid",
    "category": "shorof",
    "difficulty": "menengah",
    "topicTag": "amtsilah-mazid-1",
    "question": "Dari fi'il \"أَكْرَمَ\" (wazan أَفْعَلَ / Tsulatsi Mazid bi Harfin), manakah bentuk Isim Fa'il dan Isim Maf'ul yang benar?",
    "arabicSnippet": "أَكْرَمَ - يُكْرِمُ",
    "options": [
      "كَارِمٌ dan مَكْرُومٌ",
      "مُكْرِمٌ (Isim Fa'il) dan مُكْرَمٌ (Isim Maf'ul)",
      "مُكْرَمٌ (Isim Fa'il) dan مُكْرِمٌ (Isim Maf'ul)",
      "إِكْرَامٌ dan مَكْرَمَةٌ"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Kaidah pembentukan Isim Fa'il dan Isim Maf'ul fi'il selain tsulatsi mujarrad: ambil fi'il mudhari' (يُكْرِمُ), ganti huruf mudhara'ah dengan Mim dhommah (مُـ), lalu kasrah huruf sebelum akhir untuk Isim Fa'il (مُكْرِمٌ = yang memuliakan) dan fathah untuk Isim Maf'ul (مُكْرَمٌ = yang dimuliakan).",
    "kitabReference": "Kitab Amtsilah Tasrifiyah, Bab الثلاثي المزيد فيه بحرف."
  },
  {
    "id": "ex-7",
    "title": "Kaidah I'lal: Asal Mula Kata \"قَالَ\"",
    "category": "shorof",
    "difficulty": "menengah",
    "topicTag": "amtsilah-muhimmah-ilal-idgham",
    "question": "Berdasarkan kaidah I'lal pada kitab Amtsilah Tasrifiyah, kata \"قَالَ\" berasal dari bentuk asal...",
    "arabicSnippet": "قَالَ (Fi'il Madhi Ajwaf Wawi)",
    "options": [
      "قَيَلَ",
      "قَوَلَ",
      "أَقْوَلَ",
      "قُولَ"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Asal kata قَالَ adalah قَوَلَ berwazan فَعَلَ. Sesuai Kaidah I'lal Qalb: \"Apabila huruf Wawu atau Ya berharakat dan huruf sebelumnya berharakat fathah, maka wajib diganti menjadi Alif\". Maka Wawu pada قَوَلَ diganti Alif menjadi قَالَ.",
    "kitabReference": "Kitab Amtsilah Tasrifiyah, Bab مهمات وقواعد الإعلال والإدغام."
  },
  {
    "id": "ex-8",
    "title": "Syarat I'rab Asma'us Sittah dengan Huruf",
    "category": "nahwu",
    "difficulty": "menengah",
    "topicTag": "mutammimah-alamat-irab",
    "question": "Kapankah lafadz \"أَبُو\" di-i'rab dengan huruf (Wawu, Alif, Ya), dan kapan di-i'rab dengan harakat taqdiriyah menurut Muthammimah?",
    "arabicSnippet": "جَاءَ أَبُوكَ vs جَاءَ أَبِي",
    "options": [
      "Selalu dengan huruf tanpa syarat apapun",
      "Dengan huruf jika diidhofahkan ke selain Ya Mutakallim (أَبُوكَ); dan dengan harakat taqdiriyah jika diidhofahkan ke Ya Mutakallim (أَبِي)",
      "Dengan huruf hanya jika berupa isim nakirah tanpa idhofah",
      "Hanya boleh di-i'rab saat berbentuk jamak taksir"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Syarat Asma'us Sittah di-i'rab dengan huruf: harus mufrad, mukabbarah, dan diidhofahkan kepada selain Ya Mutakallim. Jika diidhofahkan kepada Ya Mutakallim seperti \"أَبِي\", maka tanda i'rabnya adalah harakat taqdiriyah sebelum Ya.",
    "kitabReference": "Kitab Muthammimah al-Jurumiyah, Bab معرفة علامات الإعراب (الأسماء الستة)."
  },
  {
    "id": "ex-9",
    "title": "Taqdim Maf'ul Bih atas Fa'il pada Firman Allah",
    "category": "irab",
    "difficulty": "mahir",
    "topicTag": "mutammimah-fail",
    "question": "Pada firman Allah: \"إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ\", manakah kata yang berkedudukan sebagai Fa'il dan mengapa lafadz \"اللَّهَ\" berstatus manshub?",
    "arabicSnippet": "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ",
    "options": [
      "Fa'ilnya dhomir mustatir, dan lafadz Allah adalah badal",
      "Fa'ilnya adalah \"الْعُلَمَاءُ\" (marfu' diakhirkan), sedangkan \"اللَّهَ\" adalah Maf'ul bih muqaddam yang didahulukan (manshub)",
      "Lafadz \"اللَّهَ\" adalah Fa'il dan \"الْعُلَمَاءُ\" adalah Maf'ul bih",
      "Ayat ini tidak memiliki fa'il karena ada partikel pembatas إِنَّمَا"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Dalam ayat ini terjadi taqdim maf'ul bih atas fa'il (Maf'ul Muqaddam). Lafadz Jalalah \"اللَّهَ\" berstatus Maf'ul bih manshub (Dzat yang diagungkan/ditakuti). Sedangkan fa'il hakikinya adalah \"الْعُلَمَاءُ\" marfu' bid dhommah (para ulama lah yang memiliki rasa takut mengagungkan Allah).",
    "kitabReference": "Kitab Muthammimah al-Jurumiyah, Bab الفاعل (تقديم المفعول على الفاعل)."
  },
  {
    "id": "ex-10",
    "title": "Hukum Idgham Fi'il Mudho'af saat Bersambung Dhomir Rafa' Mutaharrik",
    "category": "shorof",
    "difficulty": "mahir",
    "topicTag": "amtsilah-muhimmah-ilal-idgham",
    "question": "Pada fi'il mudho'af \"مَدَّ\" (asalnya مَدَدَ), mengapakah ketika ditashrif bersama dhomir \"أَنَا\" menjadi \"مَدَدْتُ\" dan hukum idghamnya terlarang (mumtani')?",
    "arabicSnippet": "مَدَّ -> مَدَدْتُ",
    "options": [
      "Karena huruf dal berubah menjadi huruf halaq",
      "Karena huruf Dal kedua menjadi sukun akibat bersambung dengan dhomir rafa' mutaharrik (Ta' fa'il), sehingga syarat idgham gugur",
      "Karena wazannya berubah menjadi fi'il ruba'i",
      "Karena huruf Dal pertama diganti menjadi alif"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Syarat idgham dua huruf serupa adalah huruf kedua wajib berharakat. Ketika fi'il madhi bersambung dengan dhomir rafa' mutaharrik (تَ، تِ، تُ، نَا), huruf akhir fi'il disukunkan (مَدَدْتُ), sehingga idgham dilarang (Mumtani'ul Idgham) dan wajib diurai (Fakkul Idgham).",
    "kitabReference": "Kitab Amtsilah Tasrifiyah, Bab مهمات وقواعد الإعلال والإدغام."
  },
  {
    "id": "ex-11",
    "title": "Fa'il Sadda Masaddal Khabar pada Kaidah Muthammimah",
    "category": "nahwu",
    "difficulty": "mahir",
    "topicTag": "mutammimah-mubtada-khabar",
    "question": "Dalam kaidah Muthammimah: \"أَقَائِمٌ الزَّيْدَانِ\", bagaimanakah susunan tarkib dari lafadz \"قَائِمٌ\" dan \"الزَّيْدَانِ\"?",
    "arabicSnippet": "أَقَائِمٌ الزَّيْدَانِ",
    "options": [
      "قَائِمٌ: Fa'il | الزَّيْدَانِ: Maf'ul bih",
      "قَائِمٌ: Mubtada' berstatus sifat | الزَّيْدَانِ: Fa'il marfu' yang mencukupi dari khabar (Fa'il sadda masaddal khabar)",
      "قَائِمٌ: Khabar muqaddam | الزَّيْدَانِ: Mubtada' muakhkhar tanpa syarat",
      "Keduanya adalah dua khabar yang bertumpuk"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Apabila Isim Sifat (قَائِمٌ) terletak setelah huruf istifham atau nafi, ia menjadi Mubtada' yang merafa'kan isim zhahir setelahnya (الزَّيْدَانِ) sebagai Fa'il Sadda Masaddal Khabar (fa'il yang menempati dan mencukupi fungsi khabar).",
    "kitabReference": "Kitab Muthammimah al-Jurumiyah, Bab المبتدأ والخبر (مبتدأ له فاعل سد مسد الخبر)."
  },
  {
    "id": "ex-12",
    "title": "Hukum Wajib Ta'nits Fi'il bersama Fa'il Muannats Hakiki",
    "category": "nahwu",
    "difficulty": "menengah",
    "topicTag": "mutammimah-fail",
    "question": "Manakah di antara kalimat berikut yang WAJIB menyertakan Ta' Ta'nits pada fi'ilnya menurut kaidah Muthammimah?",
    "arabicSnippet": "قَامَتْ هِنْدٌ vs طَلَعَتِ الشَّمْسُ",
    "options": [
      "حَضَرَ الْقَاضِيَ امْرَأَةٌ",
      "قَامَتْ فَاطِمَةُ (Fa'il isim zhahir muannats hakiki tanpa pemisah dari fi'il)",
      "قَالَ نِسْوَةٌ فِي الْمَدِينَةِ",
      "Semua kalimat di atas hukumnya wajib mudzakkar"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Wajib menta'nits fi'il dengan ta' sakinah apabila fa'ilnya berupa isim zhahir muannats hakiki dan langsung bersambung tanpa pemisah dengan fi'ilnya, seperti \"قَامَتْ فَاطِمَةُ\".",
    "kitabReference": "Kitab Muthammimah al-Jurumiyah, Bab الفاعل (أحكام تأنيث الفعل مع الفاعل)."
  }
];
