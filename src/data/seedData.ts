import { LibraryBookItem, ExerciseItem } from '../types';

export const SEED_BOOKS: LibraryBookItem[] = [
  {
    id: 'matan-al-jurumiyyah',
    title: 'Matan Al-Jurumiyyah',
    titleArabic: 'مَتْنُ الْآجُرُّومِيَّةِ',
    author: 'Syaikh Abu Abdillah Sidi Muhammad bin Dawud Ash-Shanhaji (Ibnu Ajurrum)',
    category: 'nahwu',
    description: 'Kitab rujukan pokok ilmu nahwu paling populer di seluruh pesantren Nusantara dan dunia Islam untuk pemula hingga menengah.',
    level: 'Mubtadi\' & Mutawassith',
    coverColor: 'from-emerald-700 to-teal-900',
    chapters: [
      {
        id: 'bab-kalam',
        titleArabic: 'بَابُ الْكَلَامِ',
        titleIndo: 'Bab Pengertian Kalam',
        contentArabic: 'الْكَلَامُ: هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ. وَأَقْسَامُهُ ثَلَاثَةٌ: اسْمٌ، وَفِعْلٌ، وَحَرْفٌ جَاءَ لِمَعْنًى.',
        translation: 'Kalam adalah lafadz yang tersusun (murakkab), berfaedah (mufid), dan menggunakan bahasa Arab (bil wadh\'). Pembagian kalam ada tiga: Isim (kata benda/sifat), Fi\'il (kata kerja), dan Harf (kata tugas/hubung) yang memiliki makna.',
        explanation: 'Empat syarat kalam: (1) Lafadz (suara berhuruf hijaiyah), (2) Murakkab (tersusun minimal 2 kata), (3) Mufid (memberikan pemahaman sempurna hingga pendengar diam/tidak bertanya lagi), (4) Bil Wadh\' (disengaja dan berbahasa Arab).',
        keyPoints: [
          'Isim dikenal dengan: Tanwin, Alif Lam (ال), Khafadh (Kasrah), dan huruf Jar.',
          'Fi\'il dikenal dengan: Qod (قَدْ), Sin (سَـ), Saufa (سَوْفَ), dan Ta\' Ta\'nits Sakinah (تْ).',
          'Harf adalah: kata yang tidak layak dimasuki tanda isim maupun tanda fi\'il.'
        ]
      },
      {
        id: 'bab-irab',
        titleArabic: 'بَابُ الْإِعْرَابِ',
        titleIndo: 'Bab Hakikat I\'rab',
        contentArabic: 'الْإِعْرَابُ: هُوَ تَغْيِيرُ أَوَاخِرِ الْكَلِمِ لِاخْتِلَافِ الْعَوَامِلِ الدَّاخِلَةِ عَلَيْهَا لَفْظًا أَوْ تَقْدِيرًا. وَأَقْسَامُهُ أَرْبَعَةٌ: رَفْعٌ، وَنَصْبٌ، وَخَفْضٌ، وَجَزْمٌ.',
        translation: 'I\'rab adalah perubahan harakat atau bentuk akhir kata karena perbedaan amil-amil yang masuk padanya, baik perubahan secara lafadz (terlihat/terbaca) maupun taqdiran (diperkirakan). Macam I\'rab ada 4: Rafa\', Nashab, Khafadh (Jar), dan Jazm.',
        explanation: 'Untuk Isim hanya berlaku tiga I\'rab: Rafa\', Nashab, dan Khafadh (tidak ada Jazm pada Isim). Sedangkan untuk Fi\'il (khususnya Fi\'il Mudhori\') hanya berlaku tiga I\'rab: Rafa\', Nashab, dan Jazm (tidak ada Khafadh pada Fi\'il).',
        keyPoints: [
          'I\'rab Isim: Rafa\', Nashab, Khafadh.',
          'I\'rab Fi\'il: Rafa\', Nashab, Jazm.',
          'Perubahan lafdziy: seperti جَاءَ زَيْدٌ, رَأَيْتُ زَيْدًا, مَرَرْتُ بِزَيْدٍ.',
          'Perubahan taqdiriy: seperti جَاءَ الْفَتَى, di mana harakat tidak bisa tampak karena uzur (udzur).'
        ]
      },
      {
        id: 'bab-alamat-rafa',
        titleArabic: 'عَلَامَاتُ الرَّفْعِ',
        titleIndo: 'Tanda-tanda I\'rab Rafa\'',
        contentArabic: 'لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ: الضَّمَّةُ، وَالْوَاوُ، وَالْأَلِفُ، وَالنُّونُ.',
        translation: 'I\'rab Rafa\' memiliki empat tanda: Dhommah (tanda pokok), Wawu, Alif, dan Nun.',
        explanation: 'Dhommah menjadi tanda rafa\' pada 4 tempat: Isim Mufrad, Jamak Taksir, Jamak Muannats Salim, dan Fi\'il Mudhari\' yang belum bersambung dengan alif tasniyah, wawu jamak, ya mukhathabah. Wawu pada Jamak Mudzakkar Salim dan Asma\'ul Khamsah. Alif pada Isim Tatsniyah. Nun pada Af\'alul Khamsah.',
        keyPoints: [
          'Dhommah: Isim Mufrad (زَيْدٌ), Jamak Taksir (رِجَالٌ), Jamak Muannats Salim (مُسْلِمَاتٌ), Fi\'il Mudhari\' (يَضْرِبُ).',
          'Wawu: Jamak Mudzakkar Salim (مُسْلِمُونَ), Asma\'ul Khamsah (أَبُوكَ، أَخُوكَ، حَمُوكَ، فُوكَ، ذُو مَالٍ).',
          'Alif: Isim Tatsniyah / Dual (الزَّيْدَانِ).',
          'Nun: Af\'alul Khamsah (يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ).'
        ]
      },
      {
        id: 'bab-marfuat',
        titleArabic: 'بَابُ مَرْفُوعَاتِ الْأَسْمَاءِ',
        titleIndo: 'Isim-Isim yang Wajib Dibaca Rafa\'',
        contentArabic: 'الْمَرْفُوعَاتُ سَبْعَةٌ، وَهِيَ: الْفَاعِلُ، وَالْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ، وَالْمُبْتَدَأُ، وَخَبَرُهُ، وَاسْمُ كَانَ وَأَخَوَاتِهَا، وَخَبَرُ إِنَّ وَأَخَوَاتِهَا، وَالتَّابِعُ لِلْمَرْفُوعِ (النَّعْتُ، وَالْعَطْفُ، وَالتَّوْكِيدُ، وَالْبَدَلُ).',
        translation: 'Isim yang wajib dibaca rafa\' ada 7 golongan: Fa\'il (pelaku), Na\'ibul Fa\'il (pengganti fa\'il), Mubtada\' (subjek mula), Khabar (predikat), Isim Kaana dan saudaranya, Khabar Inna dan saudaranya, serta Tabi\' (kata pengikut yang terdiri atas Na\'at, Athaf, Taukid, Badal).',
        explanation: 'Setiap kali menjumpai salah satu dari 7 kedudukan ini dalam kalimat, harakat akhirnya harus mengikuti kaidah rafa\' (dhommah, wawu, alif, atau tetap dalam keadaan marfu\').',
        keyPoints: [
          'Fa\'il: Isim marfu\' yang terletak setelah fi\'il ma\'lum. Contoh: قَامَ زَيْدٌ.',
          'Mubtada\': Isim marfu\' yang terbebas dari amil lafdzi. Contoh: زَيْدٌ قَائِمٌ.',
          'Isim Kaana: كَانَ زَيْدٌ عَالِمًا (Zaid marfu\').',
          'Khabar Inna: إِنَّ زَيْدًا عَالِمٌ (Alim marfu\').'
        ]
      },
      {
        id: 'bab-manshubat',
        titleArabic: 'بَابُ مَنْصُوبَاتِ الْأَسْمَاءِ',
        titleIndo: 'Isim-Isim yang Wajib Dibaca Nashab',
        contentArabic: 'الْمَنْصُوبَاتُ خَمْسَةَ عَشَرَ، وَهِيَ: الْمَفْعُولُ بِهِ، وَالْمَصْدَرُ، وَظَرْفُ الزَّمَانِ، وَظَرْفُ الْمَكَانِ، وَالْحَالُ، وَالتَّمْيِيزُ، وَالْمُسْتَثْنَى، وَاسْمُ لَا، وَالْمُنَادَى، وَالْمَفْعُولُ مِنْ أَجْلِهِ، وَالْمَفْعُولُ مَعَهُ، وَخَبَرُ كَانَ وَأَخَوَاتِهَا، وَاسْمُ إِنَّ وَأَخَوَاتِهَا، وَالتَّابِعُ لِلْمَنْصُوبِ.',
        translation: 'Isim-isim yang wajib dibaca nashab ada 15: Maf\'ul bih (objek penderita), Masdar/Maf\'ul Muthlaq, Zhorof Zaman, Zhorof Makan, Hal (keterangan keadaan), Tamyiz (keterangan penjelas), Mustatsna (pengecualian), Isim Laa, Munada (panggilan), Maf\'ul li Ajlih (sebab/alasan), Maf\'ul Ma\'ah (penyerta), Khabar Kaana, Isim Inna, dan Pengikut isim manshub.',
        explanation: 'Kategori manshubat adalah kelompok isim paling luas dalam sintaksis Arab karena mencakup berbagai fungsi objek, keterangan waktu, tempat, cara, dan tujuan.',
        keyPoints: [
          'Maf\'ul bih: ضَرَبَ زَيْدٌ عَمْرًا (Amr sebagai objek/manshub fathah).',
          'Hal: جَاءَ زَيْدٌ رَاكِبًا (Rakiban = dalam keadaan berkendara).',
          'Tamyiz: تَصَبَّبَ زَيْدٌ عَرَقًا (Araqa = penjelas apa yang mengucur).',
          'Maf\'ul li ajlih: قُمْتُ إِجْلَالًا لِعَمْرٍو (Ijlaalan = karena menghormati).'
        ]
      }
    ]
  },
  {
    id: 'al-amtsilah-at-tashrifiyyah',
    title: 'Al-Amtsilah At-Tashrifiyyah',
    titleArabic: 'الْأَمْثِلَةُ التَّصْرِيفِيَّةُ',
    author: 'K.H. Muhammad Ma\'shum bin Ali (Jombang, Jawa Timur)',
    category: 'shorof',
    description: 'Kitab master tasrifan shorof sistematis warisan ulama Nusantara yang menjadi panduan baku morfologi bahasa Arab di seluruh pesantren.',
    level: 'Mubtadi\' & Mutawassith',
    coverColor: 'from-amber-700 to-orange-900',
    chapters: [
      {
        id: 'bab-tsulatsi-mujarrad',
        titleArabic: 'أَبْوَابُ الثُّلَاثِيِّ الْمُجَرَّدِ السِّتَّةُ',
        titleIndo: '6 Bab Fi\'il Tsulatsi Mujarrad',
        contentArabic: 'فَتْحُ ضَمٍّ، فَتْحُ كَسْرٍ، فَتْحَتَانِ # كَسْرُ فَتْحٍ، ضَمُّ ضَمٍّ، كَسْرَتَانِ',
        translation: 'Nazam 6 bab fi\'il tiga huruf asli tanpa imbuhan: (1) Fathu Dhommin (فَعَلَ يَفْعُلُ), (2) Fathu Kasrin (فَعَلَ يَفْعِلُ), (3) Fathatani (فَعَلَ يَفْعَلُ), (4) Kasru Fathin (فَعِلَ يَفْعَلُ), (5) Dhommu Dhommin (فَعُلَ يَفْعُلُ), (6) Kasratani (فَعِلَ يَفْعِلُ).',
        explanation: 'Perubahan harakat \'Ain fi\'il dari fi\'il madhi ke fi\'il mudhari\' menentukan kelompok bab shorofnya.',
        keyPoints: [
          'Bab 1: نَصَرَ - يَنْصُرُ - نَصْرًا (Fathu Dhommin)',
          'Bab 2: ضَرَبَ - يَضْرِبُ - ضَرْبًا (Fathu Kasrin)',
          'Bab 3: فَتَحَ - يَفْتَحُ - فَتْحًا (Fathatani)',
          'Bab 4: عَلِمَ - يَعْلَمُ - عِلْمًا (Kasru Fathin)',
          'Bab 5: حَسُنَ - يَحْسُنُ - حُسْنًا (Dhommu Dhommin)',
          'Bab 6: حَسِبَ - يَحْسِبُ - حِسْبَانًا (Kasratani)'
        ]
      },
      {
        id: 'sighah-tashrif-istilahi',
        titleArabic: 'صِيَغُ التَّصْرِيفِ الِاصْطِلَاحِيِّ',
        titleIndo: 'Urutan Sighah Tashrif Istilahi',
        contentArabic: 'فَعَلَ - يَفْعُلُ - فَعْلًا وَمَفْعَلًا - فَهُوَ فَاعِلٌ - وَذَاكَ مَفْعُولٌ - افْعُلْ - لَا تَفْعُلْ - مَفْعَلٌ - مَفْعَلٌ - مِفْعَلٌ',
        translation: 'Urutan perubahan kata istilahi dari satu bentuk asal ke berbagai makna: Fi\'il Madhi, Fi\'il Mudhari\', Masdar Mim & Ghair Mim, Isim Fa\'il, Isim Maf\'ul, Fi\'il Amr, Fi\'il Nahyi, Isim Zaman, Isim Makan, Isim Alat.',
        explanation: 'Setiap sighah mempunyai fungsi semantik tersendiri. Contoh pada kata نَصَرَ: menolong (lampau), sedang/akan menolong, pertolongan, orang yang menolong (penolong), yang ditolong (korban), tolonglah!, jangan menolong!, waktu menolong, tempat menolong, alat untuk menolong.',
        keyPoints: [
          'Fi\'il Madhi: Pekerjaan masa lampau',
          'Fi\'il Mudhari\': Pekerjaan sedang/akan datang',
          'Isim Fa\'il: Pelaku tindakan (pola فَاعِل)',
          'Isim Maf\'ul: Sasaran perbuatan (pola مَفْعُول)',
          'Isim Alat: Instrumen perbuatan (pola مِفْعَل / مِفْعَال)'
        ]
      },
      {
        id: 'tsulatsi-mazid',
        titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ بِحَرْفٍ وَحَرْفَيْنِ وَثَلَاثَةٍ',
        titleIndo: 'Fi\'il Tsulatsi Mazid (Dengan Huruf Tambahan)',
        contentArabic: 'أَفْعَلَ يُفْعِلُ إِفْعَالًا | فَعَّلَ يُفَعِّلُ تَفْعِيلًا | فَاعَلَ يُفَاعِلُ مُفَاعَلَةً | تَفَعَّلَ يَتَفَعَّلُ تَفَعُّلًا | اسْتَفْعَلَ يَسْتَفْعِلُ اسْتِفْعَالًا',
        translation: 'Fi\'il tiga huruf yang ditambah satu huruf (Rubai), dua huruf (Khumasi), atau tiga huruf (Sudasi) yang menghasilkan makna baru seperti Ta\'diyah (menjadikan transitif), Musyarakah (saling berbuat), Thalab (memohon/mencari).',
        explanation: 'Contoh penambahan makna: عَلِمَ (mengetahui) -> عَلَّمَ (mengajarkan kepada orang lain) -> تَعَلَّمَ (mempelajari sungguh-sungguh) -> اسْتَعْلَمَ (mencari informasi/bertanya).',
        keyPoints: [
          'Wazan أَفْعَلَ: Makna Ta\'diyah (أَخْرَجَ = mengeluarkan).',
          'Wazan فَاعَلَ: Makna Musyarakah/saling (قَاتَلَ = saling berperang).',
          'Wazan اسْتَفْعَلَ: Makna Thalab (اسْتَغْفَرَ = memohon ampunan).'
        ]
      }
    ]
  },
  {
    id: 'qawaid-ilal-shorof',
    title: 'Kaidah I\'lal Penting',
    titleArabic: 'قَوَاعِدُ الْإِعْلَالِ فِي الصَّرْفِ',
    author: 'Kaidah Mu\'tabarah Ulama Shorof',
    category: 'kaidah',
    description: 'Panduan memecahkan kata-kata mu\'tal (berhuruf illat: Alif, Wawu, Ya) yang mengalami perubahan bentuk dan harakat.',
    level: 'Mutawassith & Mutaqaddim',
    coverColor: 'from-purple-800 to-indigo-950',
    chapters: [
      {
        id: 'kaidah-ilal-1',
        titleArabic: 'الْقَاعِدَةُ الْأُولَى: قَلْبُ الْوَاوِ وَالْيَاءِ أَلِفًا',
        titleIndo: 'Kaidah I\'lal 1: Penggantian Wawu dan Ya Menjadi Alif',
        contentArabic: 'إِذَا تَحَرَّكَتِ الْوَاوُ أَوِ الْيَاءُ بِأَيِّ حَرَكَةٍ وَانْفَتَحَ مَا قَبْلَهُمَا قُلِبَتَا أَلِفًا.',
        translation: 'Apabila huruf Wawu (و) atau Ya (ي) berharakat apa saja, dan huruf sebelumnya berharakat Fathah, maka Wawu atau Ya tersebut diganti menjadi Alif.',
        explanation: 'Contoh klasik: Bentuk asal قَالَ adalah قَوَلَ (wazan فَعَلَ). Huruf Wawu berharakat fathah dan huruf Qaf sebelumnya berharakat fathah, maka wawu diganti alif menjadi قَالَ. Begitu juga بَاعَ asalnya بَيَعَ diganti menjadi بَاعَ.',
        keyPoints: [
          'Syarat: Wawu/Ya berharakat.',
          'Syarat: Huruf sebelumnya berharakat fathah.',
          'Contoh: قَوَلَ -> قَالَ, بَيَعَ -> بَاعَ, دَعَوَ -> دَعَا, رَمَيَ -> رَمَى.'
        ]
      },
      {
        id: 'kaidah-idgham',
        titleArabic: 'قَاعِدَةُ الْإِدْغَامِ فِي الْمُضَاعَفِ',
        titleIndo: 'Kaidah Idgham pada Fi\'il Mudho\'af',
        contentArabic: 'إِذَا اجْتَمَعَ حَرْفَانِ مِنْ جِنْسٍ وَاحِدٍ فِي كَلِمَةٍ وَاحِدَةٍ وَكَانَ أَوَّلُهُمَا سَاكِنًا وَالثَّانِي مُتَحَرِّكًا أَوْ كِلَاهُمَا مُتَحَرِّكَيْنِ وَجَبَ الْإِدْغَامُ.',
        translation: 'Apabila berkumpul dua huruf yang sejenis dalam satu kata, maka huruf pertama dimasukkan (di-idghamkan) ke huruf kedua dan diberi tanda tasydid.',
        explanation: 'Contoh: مَدَّ asalnya مَدَدَ (berkumpul dua Dal). Huruf Dal pertama disukunkan lalu dimasukkan ke Dal kedua menjadi مَدَّ.',
        keyPoints: [
          'Asal kata: مَدَدَ -> menjadi مَدَّ.',
          'Asal kata: فَرَرَ -> menjadi فَرَّ.',
          'Asal kata: رَدَدَ -> menjadi رَدَّ.'
        ]
      }
    ]
  },
  {
    id: 'nazham-al-imrithi',
    title: 'Ringkasan Nadhom Al-Imrithi',
    titleArabic: 'مَنْظُومَةُ الْعِمْرِيطِيِّ',
    author: 'Syaikh Syarafuddin Yahya Al-Imrithi',
    category: 'irab',
    description: 'Untaian bait syair indah yang menggubah Matan Al-Jurumiyyah menjadi bahar rajaz yang mudah dihafalkan dan sarat pemahaman kaidah.',
    level: 'Mutawassith',
    coverColor: 'from-blue-700 to-indigo-900',
    chapters: [
      {
        id: 'imrithi-kalam',
        titleArabic: 'فَصْلٌ فِي بَيَانِ الْكَلَامِ',
        titleIndo: 'Bait Nazham Kalam Al-Imrithi',
        contentArabic: 'كَلَامُهُمْ لَفْظٌ مُفِيدٌ مُسْنَدُ # وَالْكِلْمَةُ اللَّفْظُ الْمُفِيدُ الْمُفْرَدُ\nلِاسْمٍ وَفِعْلٍ ثُمَّ حَرْفٍ تَنْقَسِمْ # وَهَذِهِ ثَلَاثَةٌ هِيَ الْكَلِمْ',
        translation: 'Kalam menurut ulama Nahwu adalah lafadz yang berfaedah dan bersandar (musnad). Sedangkan kalimah adalah lafadz tunggal yang berfaedah. Kalimah terbagi menjadi isim, fi\'il, dan harf; ketiganya dinamakan al-kalim.',
        explanation: 'Nadhom Imrithi merangkum definisi kalam dengan sangat padat, menekankan unsur isnad (hubungan mubtada\'-khabar atau fi\'il-fa\'il) sebagai poros utama keutuhan kalimat.',
        keyPoints: [
          'Musnad: Keterkaitan antara pokok kalimat dan penjelasnya.',
          'Al-Kalim: Kumpulan tiga jenis kata (isim, fi\'il, harf).'
        ]
      }
    ]
  }
];

export const SEED_EXERCISES: ExerciseItem[] = [
  {
    id: 'ex-1',
    title: 'Menentukan Kedudukan Fa\'il dalam Jumlah Fi\'liyyah',
    category: 'nahwu',
    difficulty: 'pemula',
    question: 'Perhatikan kalimat berikut: "كَتَبَ التِّلْمِيذُ الرِّسَالَةَ". Manakah kata yang berkedudukan sebagai Fa\'il (pelaku) dan apa status I\'rabnya?',
    arabicSnippet: 'كَتَبَ التِّلْمِيذُ الرِّسَالَةَ',
    options: [
      'كَتَبَ (Fi\'il Madhi mabni atas fathah)',
      'التِّلْمِيذُ (Fa\'il marfu\' dengan tanda dhommah)',
      'الرِّسَالَةَ (Maf\'ul bih manshub dengan fathah)',
      'Semua kata di atas berkedudukan sebagai khabar'
    ],
    correctAnswerIndex: 1,
    explanation: 'Dalam kalimat "كَتَبَ التِّلْمِيذُ الرِّسَالَةَ", kata "التِّلْمِيذُ" terletak setelah fi\'il ma\'lum (كَتَبَ) dan menunjukkan siapa yang melakukan pekerjaan menulis. Maka kedudukannya adalah Fa\'il yang hukumnya wajib Marfu\', tanda rafa\'nya dhommah zhahirah di akhir kata.'
  },
  {
    id: 'ex-2',
    title: 'I\'rab Isim Inna dan Khabar Inna',
    category: 'irab',
    difficulty: 'pemula',
    question: 'Pada kalimat "إِنَّ اللهَ غَفُورٌ رَحِيمٌ", bagaimanakah I\'rab dari lafadz "اللهَ" dan "غَفُورٌ"?',
    arabicSnippet: 'إِنَّ اللهَ غَفُورٌ رَحِيمٌ',
    options: [
      'اللهَ: Isim Inna marfu\' | غَفُورٌ: Khabar Inna manshub',
      'اللهَ: Isim Inna manshub bil fathah | غَفُورٌ: Khabar Inna marfu\' bid dhommah',
      'اللهَ: Mubtada\' marfu\' | غَفُورٌ: Fa\'il marfu\'',
      'Keduanya majrur karena kemasukan huruf jar'
    ],
    correctAnswerIndex: 1,
    explanation: 'Huruf Inna (إِنَّ) dan saudaranya bertugas mentanshibkan isim dan merafa\'kan khabar (تَنْصِبُ الِاسْمَ وَتَرْفَعُ الْخَبَرَ). Maka lafadz Jalalah "اللهَ" menjadi Isim Inna manshub dengan fathah, dan "غَفُورٌ" menjadi Khabar Inna marfu\' dengan dhommah.'
  },
  {
    id: 'ex-3',
    title: 'Mengenal Wazan Fi\'il Tsulatsi Mujarrad Bab 1',
    category: 'shorof',
    difficulty: 'pemula',
    question: 'Fi\'il berikut yang mengikuti wazan Bab 1 Tsulatsi Mujarrad (فَعَلَ - يَفْعُلُ) dengan perubahan fathu-dhommin adalah:',
    arabicSnippet: 'فَعَلَ - يَفْعُلُ',
    options: [
      'ضَرَبَ - يَضْرِبُ',
      'فَتَحَ - يَفْتَحُ',
      'نَصَرَ - يَنْصُرُ',
      'حَسِبَ - يَحْسِبُ'
    ],
    correctAnswerIndex: 2,
    explanation: 'Bab 1 Tsulatsi Mujarrad memiliki rumus "Fathu Dhommin" (فَعَلَ - يَفْعُلُ), contoh mutamadnya adalah نَصَرَ - يَنْصُرُ dan كَتَبَ - يَكْتُبُ. Sedangkan ضَرَبَ يَضْرِبُ adalah bab 2 (fathu kasrin), dan فَتَحَ يَفْتَحُ adalah bab 3 (fathatani).'
  },
  {
    id: 'ex-4',
    title: 'Tarkib Maf\'ul Bih pada Kalimat Al-Qur\'an',
    category: 'irab',
    difficulty: 'menengah',
    question: 'Pada firman Allah SWT: "وَخَلَقَ الْإِنْسَانَ ضَعِيفًا", apa kedudukan lafadz "الْإِنْسَانَ" dan "ضَعِيفًا"?',
    arabicSnippet: 'وَخَلَقَ الْإِنْسَانَ ضَعِيفًا',
    options: [
      'الْإِنْسَانَ: Fa\'il | ضَعِيفًا: Maf\'ul bih',
      'الْإِنْسَانَ: Maf\'ul bih manshub | ضَعِيفًا: Hal manshub',
      'الْإِنْسَانَ: Mubtada\' | ضَعِيفًا: Khabar',
      'الْإِنْسَانَ: Naibul Fa\'il | ضَعِيفًا: Tamyiz'
    ],
    correctAnswerIndex: 1,
    explanation: 'Lafadz "الْإِنْسَانَ" adalah Maf\'ul bih (objek penciptaan) dari fi\'il خَلَقَ, hukumnya manshub bil fathah (fa\'ilnya adalah dhomir mustatir jawazan taqdiruhu Huwa/Allah). Sedangkan "ضَعِيفًا" adalah Hal (keterangan keadaan manusia saat diciptakan), hukumnya manshub bil fathah.'
  },
  {
    id: 'ex-5',
    title: 'Bentuk Isim Fa\'il dan Isim Maf\'ul',
    category: 'shorof',
    difficulty: 'menengah',
    question: 'Dari fi\'il "أَكْرَمَ" (wazan أَفْعَلَ / Tsulatsi Mazid bi Harfin), manakah bentuk Isim Fa\'il dan Isim Maf\'ul yang benar?',
    arabicSnippet: 'أَكْرَمَ - يُكْرِمُ',
    options: [
      'كَارِمٌ dan مَكْرُومٌ',
      'مُكْرِمٌ (Isim Fa\'il) dan مُكْرَمٌ (Isim Maf\'ul)',
      'مُكْرَمٌ (Isim Fa\'il) dan مُكْرِمٌ (Isim Maf\'ul)',
      'إِكْرَامٌ dan مَكْرَمَةٌ'
    ],
    correctAnswerIndex: 1,
    explanation: 'Kaidah Isim Fa\'il dan Isim Maf\'ul untuk fi\'il lebih dari tiga huruf: Mengambil fi\'il mudhari\'nya (يُكْرِمُ), mengganti huruf mudhara\'ah dengan mim berharakat dhommah (مُـ), lalu mengkasrah huruf sebelum akhir untuk Isim Fa\'il (مُكْرِمٌ = orang yang memuliakan) dan memfathah huruf sebelum akhir untuk Isim Maf\'ul (مُكْرَمٌ = orang yang dimuliakan).'
  },
  {
    id: 'ex-6',
    title: 'Analisis I\'rab Ayat: إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ',
    category: 'irab',
    difficulty: 'mahir',
    question: 'Pada ayat mulia: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ" (QS. Fathir: 28), manakah yang berkedudukan sebagai Fa\'il dan mengapa lafadz "اللَّهَ" dibaca manshub (fathah)?',
    arabicSnippet: 'إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ',
    options: [
      'Fa\'ilnya adalah dhomir mustatir, dan lafadz Allah adalah badal',
      'Fa\'ilnya adalah "الْعُلَمَاءُ" (diakhirkan), sedangkan "اللَّهَ" adalah Maf\'ul bih muqaddam (objek yang didahulukan) yang wajib manshub',
      'Lafadz "اللَّهَ" adalah Fa\'il dan "الْعُلَمَاءُ" adalah Maf\'ul bih',
      'Ayat ini tidak memiliki fa\'il karena ada إِنَّمَا'
    ],
    correctAnswerIndex: 1,
    explanation: 'Dalam ayat ini terjadi taqdim maf\'ul bih atas fa\'il (Maf\'ul Muqaddam). "اللَّهَ" adalah Maf\'ul bih manshub bil fathah (Yang ditakuti/diagungkan). Sedangkan fa\'il hakikinya adalah "الْعُلَمَاءُ" marfu\' bid dhommah (para ulama lah yang takut kepada Allah). Jika dibaca terbalik maknanya akan rusak.'
  },
  {
    id: 'ex-7',
    title: 'Kaidah I\'lal: Asal Mula Kata "قَالَ"',
    category: 'shorof',
    difficulty: 'menengah',
    question: 'Berdasarkan kaidah I\'lal pertama, kata "قَالَ" berasal dari bentuk asli...',
    arabicSnippet: 'قَالَ (Fi\'il Madhi Ajwaf Wawi)',
    options: [
      'قَيَلَ',
      'قَوَلَ',
      'أَقْوَلَ',
      'قُولَ'
    ],
    correctAnswerIndex: 1,
    explanation: 'Asal kata قَالَ adalah قَوَلَ mengikuti wazan فَعَلَ. Sesuai Kaidah I\'lal 1: "Apabila huruf Wawu atau Ya berharakat dan huruf sebelumnya berharakat fathah, maka wajib diganti alif". Wawu pada قَوَلَ diganti menjadi Alif, sehingga menjadi قَالَ.'
  },
  {
    id: 'ex-8',
    title: 'Tanda I\'rab Asma\'ul Khamsah saat Nashab',
    category: 'nahwu',
    difficulty: 'pemula',
    question: 'Bagaimanakah tanda I\'rab nashab untuk Asma\'ul Khamsah (أَبُو, أَخُو, حَمُو, فُو, ذُو)?',
    arabicSnippet: 'رَأَيْتُ أَبَاكَ وَأَخَاكَ',
    options: [
      'Dengan Fathah',
      'Dengan Alif (contoh: أَبَاكَ)',
      'Dengan Ya\' (contoh: أَبِيكَ)',
      'Dengan Wawu (contoh: أَبُوكَ)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Asma\'ul Khamsah saat Marfu\' bertanda Wawu (جَاءَ أَبُوكَ), saat Manshub bertanda Alif (رَأَيْتُ أَبَاكَ), dan saat Majrur bertanda Ya\' (مَرَرْتُ بِأَبِيكَ).'
  }
];
