export interface RawBookChapter {
  id: string;
  titleArabic: string;
  titleIndo: string;
  contentArabic: string;
  translation: string;
  explanation: string;
  keyPoints?: string[];
}

export const AMTSILAH_CHAPTERS: RawBookChapter[] = [
  {
    id: 'amtsilah-muqaddimah-sambutan',
    titleArabic: 'صَفْحَةُ الْعُنْوَانِ وَمُقَدِّمَةُ وَزِيرِ الشُّؤُونِ الدِّينِيَّةِ',
    titleIndo: 'Sampul Kitab, Halaman Judul & Sambutan Menteri Agama RI (1965)',
    contentArabic:
      'الْأَمْثِلَةُ التَّصْرِيفِيَّةُ لِلْمَدَارِسِ السَّلَفِيَّةِ الشَّافِعِيَّةِ\nتَأْلِيفُ الْأُسْتَاذِ الْفَاضِلِ وَالْعَلَّامَةِ الْكَامِلِ الشَّيْخِ مُحَمَّد مَعْصُوم بْنِ عَلِي كُوَارُون جُومْبَانْغ، رَحِمَهُ اللَّهُ تَعَالَى وَنَفَعَ بِعُلُومِهِ آمِينَ.\nقَرَّرَتْ إِدَارَةُ مَدَارِسِ الْجَمْعِيَّةِ السَّلَفِيَّةِ الشَّافِعِيَّةِ تَدْرِيسَ هَذَا الْكِتَابِ بِمَدَارِسِهَا.\nوَمُقَدِّمَةُ وَزِيرِ الشُّؤُونِ الدِّينِيَّةِ الْبُرُوفِسُور كِيَاهِي الْحَاج سَيْفِ الدِّين زُهْرِي (٢٥ يُولِيُو ١٩٦٥).',
    translation:
      'Al-Amtsilah at-Tashrifiyyah untuk Madrasah Salafiyah Syafi’iyah, disusun oleh Al-Ustadz Al-Fadhil Syaikh Muhammad Ma’shum bin Ali Kwaron Jombang, semoga Allah merahmatinya dan memberi kemanfaatan dengan ilmu-ilmunya. Pimpinan Madrasah Jam’iyyah Salafiyah Syafi’iyah menetapkan kitab ini diajarkan di madrasah-madrasahnya. Disertai sambutan Menteri Agama RI Prof. K.H. Saifuddin Zuhri (25 Juli 1965) tentang keutamaan bahasa Arab sebagai bahasa Al-Qur’an dan Hadits.',
    explanation:
      'Tiga halaman pembuka kitab edisi resmi Maktabah Salim bin Sa’d Nabhan Surabaya ini memuat sampul kaligrafi, halaman judul pengarang beserta sanad pengajaran di Pesantren Tebuireng/Seblak Jombang, serta kata pengantar resmi Menteri Agama RI tahun 1965.',
    keyPoints: [
      'Pengarang: K.H. Muhammad Ma’shum bin Ali (Seblak, Kwaron, Jombang).',
      'Penerbit edisi rujukan: Maktabah wa Mathba’ah Salim Nabhan, Surabaya.',
      'Kata sambutan resmi Menteri Agama RI Prof. K.H. Saifuddin Zuhri tertanggal 25 Juli 1965.',
    ],
  },
  {
    id: 'amtsilah-tsulatsi-1',
    titleArabic: 'التَّصْرِيفُ الْاِصْطِلَاحِيُّ — الثُّلَاثِيُّ الْمُجَرَّدُ (الْبَابُ الْأَوَّلُ: فَعَلَ يَفْعُلُ)',
    titleIndo: 'Tsulatsi Mujarrad Bab 1 (فَعَلَ - يَفْعُلُ / نَصَرَ - يَنْصُرُ)',
    contentArabic:
      'الْبَابُ الْأَوَّلُ مِنْ أَبْوَابِ الثُّلَاثِيِّ الْمُجَرَّدِ: (فَعَلَ يَفْعُلُ فَعْلًا وَمَفْعَلًا فَهُوَ فَاعِلٌ وَذَاكَ مَفْعُولٌ، أُفْعُلْ لَا تَفْعُلْ مَفْعَلٌ مَفْعَلٌ مِفْعَلٌ).\nمَوْزُونُهُ:\n- الصَّحِيحُ: نَصَرَ يَنْصُرُ نَصْرًا وَمَنْصَرًا فَهُوَ نَاصِرٌ وَذَاكَ مَنْصُورٌ، اُنْصُرْ لَا تَنْصُرْ مَنْصَرٌ مَنْصَرٌ مِنْصَرٌ.\n- الْمُضَاعَفُ: مَدَّ يَمُدُّ مَدًّا وَمَمَدًّا فَهُوَ مَادٌّ وَذَاكَ مَمْدُودٌ، مُدَّ لَا تَمُدَّ مَمَدٌّ مَمَدٌّ مِمَدٌّ.\n- الْأَجْوَفُ الْوَاوِيُّ: صَانَ يَصُونُ صَوْنًا وَمَصَانًا فَهُوَ صَائِنٌ وَذَاكَ مَصُونٌ، صُنْ لَا تَصُنْ مَصَانٌ مَصَانٌ مِصْوَنٌ.\n- النَّاقِصُ الْوَاوِيُّ: غَزَا يَغْزُو غَزْوًا وَمَغْزًى فَهُوَ غَازٍ وَذَاكَ مَغْزُوٌّ، اُغْزُ لَا تَغْزُ مَغْزًى مَغْزًى مِغْزًى.\n- الْمَهْمُوزُ الْفَاءِ: أَمَلَ يَأْمُلُ أَمَلًا وَمَأْمَلًا فَهُوَ آمِلٌ وَذَاكَ مَأْمُولٌ، اُؤْمُلْ لَا تَأْمُلْ مَأْمَلٌ مَأْمَلٌ مِئْمَلٌ.',
    translation:
      'Bab Pertama Tsulatsi Mujarrad berwazan فَعَلَ يَفْعُلُ (fathah ‘ain madhi, dhommah ‘ain mudhari’). Mauzun dalam kitab meliputi lima contoh bina’: Shahih (نَصَرَ menolong), Mudha’af (مَدَّ memanjangkan), Ajwaf Wawi (صَانَ menjaga), Naqish Wawi (غَزَا memerangi), dan Mahmuz Fa’ (أَمَلَ mengharapkan).',
    explanation:
      'Bab 1 membuka bagian Tashrif Istilahi kitab ini dengan sepuluh sighah baku dan contoh penerapan langsung pada lima ragam bina’ yang tertera di kolom tepi kanan halaman.',
    keyPoints: [
      'Rumus harakat ‘Ain: Fathu Dhommin (فَعَلَ - يَفْعُلُ).',
      'Lima mauzun resmi kitab pada Bab 1: نَصَرَ، مَدَّ، صَانَ، غَزَا، أَمَلَ.',
      'Urutan 10 sighah: Madhi, Mudhari’, Masdar, Masdar Mim, Isim Fa’il, Isim Maf’ul, Amr, Nahyi, Isim Zaman & Makan, Isim Alat.',
    ],
  },
  {
    id: 'amtsilah-tsulatsi-2',
    titleArabic: 'الثُّلَاثِيُّ الْمُجَرَّدُ (الْبَابُ الثَّانِي: فَعَلَ يَفْعِلُ)',
    titleIndo: 'Tsulatsi Mujarrad Bab 2 (فَعَلَ - يَفْعِلُ / ضَرَبَ - يَضْرِبُ)',
    contentArabic:
      'الْبَابُ الثَّانِي: (فَعَلَ يَفْعِلُ فَعْلًا وَمَفْعَلًا فَهُوَ فَاعِلٌ وَذَاكَ مَفْعُولٌ، اِفْعِلْ لَا تَفْعِلْ مَفْعِلٌ مَفْعِلٌ مِفْعَلٌ).\nمِنْ مَوْزُونَاتِهِ فِي الْكِتَابِ:\n- الصَّحِيحُ: ضَرَبَ يَضْرِبُ ضَرْبًا وَمَضْرَبًا فَهُوَ ضَارِبٌ وَذَاكَ مَضْرُوبٌ، اِضْرِبْ لَا تَضْرِبْ مَضْرِبٌ مَضْرِبٌ مِضْرَبٌ.\n- الْمُضَاعَفُ: فَرَّ يَفِرُّ فَرًّا وَمَفَرًّا، فِرَّ لَا تَفِرَّ مَفِرٌّ مَفِرٌّ مِفَرٌّ.\n- الْمِثَالُ الْوَاوِيُّ: وَعَدَ يَعِدُ عِدَةً وَمَوْعِدًا، عِدْ لَا تَعِدْ مَوْعِدٌ مَوْعِدٌ مِيعَادٌ.\n- الْمِثَالُ الْيَائِيُّ: يَسَرَ يَيْسِرُ يُسْرًا وَمَيْسَرًا، اِيْسِرْ لَا تَيْسِرْ مَيْسِرٌ مَيْسِرٌ مِيسَرٌ.\n- الْأَجْوَفُ الْيَائِيُّ: سَارَ يَسِيرُ سَيْرًا وَمَسِيرَةً، سِرْ لَا تَسِرْ مَسِيرٌ مَسِيرٌ مِسْيَرٌ.\n- النَّاقِصُ الْيَائِيُّ: سَرَى يَسْرِي سِرَايَةً وَمَسْرًى، اِسْرِ لَا تَسْرِ مَسْرًى.\n- اللَّفِيفُ الْمَفْرُوقُ وَالْمَقْرُونُ: وَقَى يَقِي وِقَايَةً (قِ لَا تَقِ)، وَشَوَى يَشْوِي شَيًّا (اِشْوِ لَا تَشْوِ).\n- الْمَهْمُوزُ (فَاءً وَعَيْنًا وَلَامًا): أَدَمَ يَأْدِمُ، وَأَدَ يَئِدُ، فَاءَ يَفِيءُ.',
    translation:
      'Bab Kedua berwazan فَعَلَ يَفْعِلُ (Fathu Kasrin). Memuat sebelas mauzun lengkap: Shahih (ضَرَبَ), Mudha’af (فَرَّ), Mitsal Wawi (وَعَدَ), Mitsal Ya’i (يَسَرَ), Ajwaf Ya’i (سَارَ), Naqish Ya’i (سَرَى), Lafif Mafruq (وَقَى), Lafif Maqrun (شَوَى), Mahmuz Fa’ (أَدَمَ), Mahmuz ‘Ain+Mitsal (وَأَدَ), dan Mahmuz Lam+Ajwaf (فَاءَ).',
    explanation:
      'Isim Zaman dan Makan pada Bab 2 berwazan مَفْعِلٌ (kasrah ‘ain) karena ‘ain fi’il mudhari’nya berharakat kasrah, sebagaimana tampak pada مَضْرِبٌ dan مَوْعِدٌ.',
    keyPoints: [
      'Rumus harakat ‘Ain: Fathu Kasrin (فَعَلَ - يَفْعِلُ).',
      'Contoh penting i’lal fi’il amr satu huruf pada Lafif Mafruq: وَقَى -> قِ (jagalah!).',
      'Mitsal Wawi membuang huruf wawu di mudhari’ dan amr: وَعَدَ - يَعِدُ - عِدْ.',
    ],
  },
  {
    id: 'amtsilah-tsulatsi-3',
    titleArabic: 'الثُّلَاثِيُّ الْمُجَرَّدُ (الْبَابُ الثَّالِثُ: فَعَلَ يَفْعَلُ)',
    titleIndo: 'Tsulatsi Mujarrad Bab 3 (فَعَلَ - يَفْعَلُ / فَتَحَ - يَفْتَحُ)',
    contentArabic:
      'الْبَابُ الثَّالِثُ: (فَعَلَ يَفْعَلُ فَعْلًا وَمَفْعَلًا فَهُوَ فَاعِلٌ وَذَاكَ مَفْعُولٌ، اِفْعَلْ لَا تَفْعَلْ مَفْعَلٌ مَفْعَلٌ مِفْعَالٌ).\nمَوْزُونُهُ فِي الْكِتَابِ:\n- الصَّحِيحُ: فَتَحَ يَفْتَحُ فَتْحًا وَمَفْتَحًا فَهُوَ فَاتِحٌ وَذَاكَ مَفْتُوحٌ، اِفْتَحْ لَا تَفْتَحْ مَفْتَحٌ مَفْتَحٌ مِفْتَاحٌ.\n- الْمِثَالُ الْوَاوِيُّ: وَضَعَ يَضَعُ وَضْعًا وَمَوْضِعًا، ضَعْ لَا تَضَعْ مَوْضِعٌ مَوْضِعٌ مِيضَاعٌ.\n- الْمِثَالُ الْيَائِيُّ: يَفَعَ يَيْفَعُ يَفْعًا، اِيْفَعْ لَا تَيْفَعْ.\n- مَهْمُوزُ الْعَيْنِ وَنَاقِصٌ يَائِيٌّ: نَأَى يَنْأَى نَأْيًا، اِنْأَ لَا تَنْأَ.\n- مَهْمُوزُ اللَّامِ: نَشَأَ يَنْشَأُ نَشْأَةً، اِنْشَأْ لَا تَنْشَأْ.\n- مَهْمُوزُ الْعَيْنِ وَنَاقِصٌ يَائِيٌّ: رَأَى يَرَى رُؤْيَةً وَمَرْأًى فَهُوَ رَاءٍ وَذَاكَ مَرْئِيٌّ، رَ لَا تَرَ مَرْأًى مَرْأًى مِرْآةٌ.',
    translation:
      'Bab Ketiga berwazan فَعَلَ يَفْعَلُ (Fathatani). Mauzun dalam kitab: Shahih (فَتَحَ membuka), Mitsal Wawi (وَضَعَ meletakkan), Mitsal Ya’i (يَفَعَ tumbuh dewasa), Mahmuz ‘Ain + Naqish (نَأَى menjauh), Mahmuz Lam (نَشَأَ tumbuh), dan Mahmuz ‘Ain + Naqish dengan pembuangan hamzah di mudhari’ (رَأَى يَرَى melihat).',
    explanation:
      'Bab 3 memiliki ciri khas adanya huruf halaq (ء، هـ، ع، ح، غ، خ) pada posisi ‘Ain atau Lam fi’ilnya. Perhatikan pula fi’il رَأَى yang mengalami takhfif hamzah pada mudhari’nya (يَرَى) hingga fi’il amr-nya tinggal satu huruf (رَ).',
    keyPoints: [
      'Rumus harakat ‘Ain: Fathatani (فَعَلَ - يَفْعَلُ).',
      'Syarat umum bab: ‘Ain atau Lam fi’il berupa salah satu huruf halaq.',
      'Fi’il unik dalam kitab: رَأَى يَرَى -> amr رَ، nahyi لَا تَرَ، alat مِرْآةٌ (cermin).',
    ],
  },
  {
    id: 'amtsilah-tsulatsi-4',
    titleArabic: 'الثُّلَاثِيُّ الْمُجَرَّدُ (الْبَابُ الرَّابِعُ: فَعِلَ يَفْعَلُ)',
    titleIndo: 'Tsulatsi Mujarrad Bab 4 (فَعِلَ - يَفْعَلُ / عَلِمَ - يَعْلَمُ)',
    contentArabic:
      'الْبَابُ الرَّابِعُ: (فَعِلَ يَفْعَلُ فِعْلًا وَمَفْعَلًا فَهُوَ فَاعِلٌ وَذَاكَ مَفْعُولٌ، اِفْعَلْ لَا تَفْعَلْ مَفْعَلٌ مَفْعَلٌ).\nمِنْ مَوْزُونَاتِهِ فِي الْكِتَابِ:\n- الصَّحِيحُ: عَلِمَ يَعْلَمُ عِلْمًا وَمَعْلَمًا فَهُوَ عَالِمٌ وَذَاكَ مَعْلُومٌ، اِعْلَمْ لَا تَعْلَمْ مَعْلَمٌ مَعْلَمٌ.\n- الْمُضَاعَفُ: عَضَّ يَعَضُّ عَضًّا، عَضَّ لَا تَعَضَّ مَعَضٌّ.\n- الْمِثَالُ: وَجِلَ يَوْجَلُ وَجَلًا، وَيَبِسَ يَيْبَسُ يُبْسًا.\n- الْأَجْوَفُ: خَافَ يَخَافُ خَوْفًا وَمَخَافَةً (خَفْ)، وَهَابَ يَهَابُ هَيْبَةً (هَبْ).\n- النَّاقِصُ: رَضِيَ يَرْضَى رِضًا وَمَرْضَاةً (اِرْضَ)، وَخَشِيَ يَخْشَى خَشْيَةً (اِخْشَ).\n- اللَّفِيفُ: وَجِيَ يَوْجَى وَجًى، وَقَوِيَ يَقْوَى قُوَّةً، وَرَوِيَ يَرْوَى رَيًّا.\n- الْمَهْمُوزُ: أَثِمَ يَأْثَمُ إِثْمًا، بَئِسَ يَبْأَسُ بُؤْسًا، بَرِئَ يَبْرَأُ بَرَاءَةً.',
    translation:
      'Bab Keempat berwazan فَعِلَ يَفْعَلُ (Kasru Fathin). Mencakup 14 mauzun: Shahih (عَلِمَ), Mudha’af (عَضَّ), Mitsal (وَجِلَ، يَبِسَ), Ajwaf (خَافَ، هَابَ), Naqish (رَضِيَ، خَشِيَ), Lafif (وَجِيَ، قَوِيَ، رَوِيَ), serta Mahmuz (أَثِمَ، بَئِسَ، بَرِئَ).',
    explanation:
      'Pada Bab 4 tidak dicantumkan kolom Isim Alat dalam tabel kitab karena mayoritas fi’il pada wazan ini bersifat lazim atau menunjukkan kondisi batin, pengetahuan, dan sifat.',
    keyPoints: [
      'Rumus harakat ‘Ain: Kasru Fathin (فَعِلَ - يَفْعَلُ).',
      'Ajwaf pada bab ini memunculkan Alif pada madhi dan mudhari’: خَافَ يَخَافُ، هَابَ يَهَابُ.',
      'Bentuk amr dari خَافَ adalah خَفْ (membuang Alif karena pertemuan dua sukun).',
    ],
  },
  {
    id: 'amtsilah-tsulatsi-5',
    titleArabic: 'الثُّلَاثِيُّ الْمُجَرَّدُ (الْبَابُ الْخَامِسُ: فَعُلَ يَفْعُلُ)',
    titleIndo: 'Tsulatsi Mujarrad Bab 5 (فَعُلَ - يَفْعُلُ / حَسُنَ - يَحْسُنُ)',
    contentArabic:
      'الْبَابُ الْخَامِسُ: (فَعُلَ يَفْعُلُ فُعْلًا وَمَفْعَلًا فَهُوَ فَعِلٌ، أُفْعُلْ لَا تَفْعُلْ مَفْعَلٌ مَفْعَلٌ).\nمَوْزُونَاتُهُ فِي الْكِتَابِ:\n- الصَّحِيحُ: حَسُنَ يَحْسُنُ حُسْنًا فَهُوَ حَسَنٌ، اُحْسُنْ لَا تَحْسُنْ مَحْسَنٌ مَحْسَنٌ.\nوَكَذَا: ضَخُمَ (ضَخْمٌ)، جَنُبَ (جُنُبٌ)، شَجُعَ (شُجَاعٌ)، جَبُنَ (جَبَانٌ)، نَجُسَ (نَجِسٌ).\n- الْمِثَالُ: وَجُهَ يَوْجُهُ وَجَاهَةً (وَجِيهٌ)، يَمُنَ يَيْمُنُ يُمْنًا (مَيْمُونٌ)، وَقُرَ يَوْقُرُ وَقَارًا (وَقُورٌ).\n- الْأَجْوَفُ الْوَاوِيُّ: طَالَ يَطُولُ طُولًا فَهُوَ طَوِيلٌ، طُلْ لَا تَطُلْ مَطَالٌ.\n- النَّاقِصُ الْوَاوِيُّ: سَرُوَ يَسْرُو سَرْوًا وَسَرْوَةً فَهُوَ سَرِيٌّ، اُسْرُ لَا تَسْرُ مَسْرًى.\n- الْمَهْمُوزُ: أَدُبَ يَأْدُبُ أَدَبًا فَهُوَ أَدِيبٌ، لَؤُمَ يَلْؤُمُ لُؤْمًا فَهُوَ لَئِيمٌ، بَطُؤَ يَبْطُؤُ بُطْئًا فَهُوَ بَطِيءٌ.',
    translation:
      'Bab Kelima berwazan فَعُلَ يَفْعُلُ (Dhommu Dhommin). Memuat 14 mauzun sifat bawaan (lazim), di antaranya: حَسُنَ (baik -> حَسَنٌ), ضَخُمَ (besar -> ضَخْمٌ), شَجُعَ (berani -> شُجَاعٌ), طَالَ (panjang -> طَوِيلٌ), سَرُوَ (mulia -> سَرِيٌّ), أَدُبَ (beradab -> أَدِيبٌ), dan لَؤُمَ (tercela -> لَئِيمٌ).',
    explanation:
      'Karena seluruh kata kerja pada Bab 5 bersifat lazim (intransitif), tabelnya tidak memiliki kolom Isim Maf’ul (وَذَاكَ مَفْعُولٌ) dan tidak memakai Isim Alat; posisinya diganti langsung oleh Shifah Musyabbahah.',
    keyPoints: [
      'Rumus harakat ‘Ain: Dhommu Dhommin (فَعُلَ - يَفْعُلُ).',
      'Khusus fi’il lazim yang menyatakan tabiat dan sifat permanen.',
      'Menghasilkan wazan Shifah Musyabbahah yang beragam: فَعَلٌ، فَعِيلٌ، فَعَالٌ، فَعُولٌ.',
    ],
  },
  {
    id: 'amtsilah-tsulatsi-6',
    titleArabic: 'الثُّلَاثِيُّ الْمُجَرَّدُ (الْبَابُ السَّادِسُ: فَعِلَ يَفْعِلُ)',
    titleIndo: 'Tsulatsi Mujarrad Bab 6 (فَعِلَ - يَفْعِلُ / حَسِبَ - يَحْسِبُ)',
    contentArabic:
      'الْبَابُ السَّادِسُ: (فَعِلَ يَفْعِلُ فُعْلَانًا وَمَفْعَلًا فَهُوَ فَاعِلٌ وَذَاكَ مَفْعُولٌ، اِفْعِلْ لَا تَفْعِلْ مَفْعِلٌ مَفْعِلٌ).\nمَوْزُونُهُ فِي الْكِتَابِ:\n- الصَّحِيحُ: حَسِبَ يَحْسِبُ حِسْبَانًا وَمَحْسَبًا فَهُوَ حَاسِبٌ وَذَاكَ مَحْسُوبٌ، اِحْسِبْ لَا تَحْسِبْ مَحْسِبٌ مَحْسِبٌ.\n- الْمِثَالُ الْوَاوِيُّ: وَمِقَ يَمِقُ مِقَةً وَمَوْمِقًا فَهُوَ وَامِقٌ وَذَاكَ مَوْمُوقٌ، مِقْ لَا تَمِقْ مَوْمِقٌ مَوْمِقٌ.',
    translation:
      'Bab Keenam berwazan فَعِلَ يَفْعِلُ (Kasratani). Di dalam kitab hanya dicantumkan dua mauzun: Shahih (حَسِبَ يَحْسِبُ mengira/menghitung) dan Mitsal Wawi (وَمِقَ يَمِقُ mencintai).',
    explanation:
      'Bab 6 merupakan bab paling sedikit kosakatanya dalam bahasa Arab. Pada bina’ Mitsal Wawi seperti وَمِقَ, huruf wawu selalu hilang pada fi’il mudhari’ (يَمِقُ) dan fi’il amr-nya (مِقْ).',
    keyPoints: [
      'Rumus harakat ‘Ain: Kasratani (فَعِلَ - يَفْعِلُ).',
      'Dua mauzun kitab: حَسِبَ (mengira) dan وَمِقَ (mencintai).',
      'Isim Zaman & Makan berwazan مَفْعِلٌ dengan kasrah ‘Ain (مَحْسِبٌ، مَوْمِقٌ).',
    ],
  },
  {
    id: 'amtsilah-rubai-mujarrad',
    titleArabic: 'بَابُ الرُّبَاعِيِّ الْمُجَرَّدِ وَهُوَ بَابٌ وَاحِدٌ (فَعْلَلَ يُفَعْلِلُ)',
    titleIndo: "Ruba'i Mujarrad (فَعْلَلَ - يُفَعْلِلُ / دَحْرَجَ - يُدَحْرِجُ)",
    contentArabic:
      'بَابُ الرُّبَاعِيِّ الْمُجَرَّدِ وَهُوَ بَابٌ وَاحِدٌ: (فَعْلَلَ يُفَعْلِلُ فَعْلَلَةً وَفِعْلَالًا وَمُفَعْلَلًا فَهُوَ مُفَعْلِلٌ وَذَاكَ مُفَعْلَلٌ، فَعْلِلْ لَا تُفَعْلِلْ مُفَعْلَلٌ مُفَعْلَلٌ).\nمَوْزُونَاتُهُ فِي الْكِتَابِ:\n- الصَّحِيحُ: دَحْرَجَ يُدَحْرِجُ دَحْرَجَةً وَدِحْرَاجًا وَمُدَحْرَجًا فَهُوَ مُدَحْرِجٌ وَذَاكَ مُدَحْرَجٌ، دَحْرِجْ لَا تُدَحْرِجْ مُدَحْرَجٌ مُدَحْرَجٌ.\n- الْمُضَاعَفُ: طَأْطَأَ يُطَأْطِئُ، وَسْوَسَ يُوَسْوِسُ، قَلْقَلَ يُقَلْقِلُ، فَلْفَلَ يُفَلْفِلُ.\n- الصَّحِيحُ النَّحْتِيُّ: تَرْجَمَ يُتَرْجِمُ، بَسْمَلَ يُبَسْمِلُ (بِسْمِ اللَّهِ)، سَبْحَلَ يُسَبْحِلُ (سُبْحَانَ اللَّهِ)، حَمْدَلَ يُحَمْدِلُ (الْحَمْدُ لِلَّهِ)، هَيْلَلَ يُهَيْلِلُ (لَا إِلَهَ إِلَّا اللَّهُ)، حَوْقَلَ يُحَوْقِلُ (لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ).',
    translation:
      "Ruba'i Mujarrad hanya memiliki satu wazan pokok yaitu فَعْلَلَ يُفَعْلِلُ. Kitab Amtsilah mencantumkan 11 mauzun: دَحْرَجَ (menggelindingkan), طَأْطَأَ (menundukkan), تَرْجَمَ (menerjemahkan), وَسْوَسَ (membisikkan), قَلْقَلَ (menggerakkan), فَلْفَلَ (membumbui merica), serta kata kerja ringkasan dzikir (naht): بَسْمَلَ، سَبْحَلَ، حَمْدَلَ، هَيْلَلَ، dan حَوْقَلَ.",
    explanation:
      'Empat huruf asal dalam Ruba’i Mujarrad diwakili pola Fa-‘Ain-Lam 1-Lam 2. Bagian awal bab ini tampil di halaman PDF 7 (دَحْرَجَ hingga سَبْحَلَ), sedangkan kelanjutannya (حَمْدَلَ، هَيْلَلَ، حَوْقَلَ) berada di halaman cetak Arab 10–11 pada lembar pindaian suplemen di atas viewer PDF.',
    keyPoints: [
      'Satu-satunya wazan Ruba’i Mujarrad: فَعْلَلَ يُفَعْلِلُ.',
      'Dua pola masdar standar: فَعْلَلَةً (دَحْرَجَةً) dan فِعْلَالًا (دِحْرَاجًا).',
      'Memuat fi’il naht (akronim kalimat dzikir): بَسْمَلَ، سَبْحَلَ، حَمْدَلَ، هَيْلَلَ، حَوْقَلَ.',
    ],
  },
  {
    id: 'amtsilah-mulhaq-dahraja',
    titleArabic: 'الْبَابُ الْأَوَّلُ مِنَ الرُّبَاعِيِّ الْمُجَرَّدِ الْمُلْحَقِ: فَعْلَلَ (جَلْبَبَ)',
    titleIndo: "Mulhaq Ruba'i Mujarrad Bab 1 (فَعْلَلَ - يُفَعْلِلُ / جَلْبَبَ)",
    contentArabic:
      'الْمُجَرَّدُ الْمُلْحَقُ وَهُوَ سَبْعَةُ أَبْوَابٍ، الْبَابُ الْأَوَّلُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: (فَعْلَلَ يُفَعْلِلُ فَعْلَلَةً وَفِعْلَالًا وَمُفَعْلَلًا فَهُوَ مُفَعْلِلٌ وَذَاكَ مُفَعْلَلٌ، فَعْلِلْ لَا تُفَعْلِلْ مُفَعْلَلٌ مُفَعْلَلٌ).\nمَوْزُونُهُ: جَلْبَبَ يُجَلْبِبُ جَلْبَبَةً وَجِلْبَابًا وَمُجَلْبَبًا فَهُوَ مُجَلْبِبٌ وَذَاكَ مُجَلْبَبٌ، جَلْبِبْ لَا تُجَلْبِبْ مُجَلْبَبٌ مُجَلْبَبٌ.',
    translation:
      "Bab Pertama dari tujuh bab Mulhaq Ruba'i Mujarrad: wazan فَعْلَلَ يُفَعْلِلُ (asalnya tiga huruf ج-ل-ب lalu digandakan huruf Lam-nya untuk menyamai wazan دَحْرَجَ). Contoh: جَلْبَبَ يُجَلْبِبُ جَلْبَبَةً وَجِلْبَابًا (mengenakan jilbab/baju kurung).",
    explanation:
      'Pada berkas PDF bersih, bagian cetak Arab 10–11 yang memuat Bab 1 Mulhaq Ruba’i ini ditampilkan melalui lembar pindaian suplemen bersih di atas viewer PDF, sedangkan kelanjutan Mulhaq Bab 5–7 tampil di halaman PDF 8.',
    keyPoints: [
      'Akar kata: ج-ل-ب (tsulatsi) ditambah satu huruf Ba’ di akhir.',
      'Masdar: جَلْبَبَةً dan جِلْبَابًا.',
      'Status bina’ di tepi kitab: Shahih.',
    ],
  },
  {
    id: 'amtsilah-mulhaq-dahraja-2',
    titleArabic: 'الْبَابُ الثَّانِي مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: فَوْعَلَ (حَوْقَلَ)',
    titleIndo: "Mulhaq Ruba'i Mujarrad Bab 2 (فَوْعَلَ - يُفَوْعِلُ / حَوْقَلَ)",
    contentArabic:
      'الْبَابُ الثَّانِي مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: (فَوْعَلَ يُفَوْعِلُ فَوْعَلَةً وَفِيعَالًا وَمُفَوْعَلًا فَهُوَ مُفَوْعِلٌ وَذَاكَ مُفَوْعَلٌ، فَوْعِلْ لَا تُفَوْعِلْ مُفَوْعَلٌ مُفَوْعَلٌ).\nمَوْزُونُهُ: حَوْقَلَ يُحَوْقِلُ حَوْقَلَةً وَحِيقَالًا وَمُحَوْقَلًا فَهُوَ مُحَوْقِلٌ وَذَاكَ مُحَوْقَلٌ، حَوْقِلْ لَا تُحَوْقِلْ مُحَوْقَلٌ مُحَوْقَلٌ.',
    translation:
      "Bab Kedua Mulhaq Ruba'i Mujarrad: wazan فَوْعَلَ يُفَوْعِلُ dengan tambahan Wawu setelah Fa’ fi’il. Mauzun: حَوْقَلَ يُحَوْقِلُ حَوْقَلَةً وَحِيقَالًا (berjalan lemah karena tua, dari akar ح-ق-ل; berbeda dengan حَوْقَلَ naht dari لاحول).",
    explanation:
      'Wazan فَوْعَلَ menyisipkan Wawu mati antara huruf pertama dan kedua sehingga harakat dan sukunnya persis menyerupai دَحْرَجَ.',
    keyPoints: [
      'Huruf tambahan ilhaq: Wawu setelah Fa’ fi’il.',
      'Masdar qiyasi kedua berubah menjadi حِيقَالًا (Wawu menjadi Ya’ setelah kasrah).',
    ],
  },
  {
    id: 'amtsilah-mulhaq-dahraja-3',
    titleArabic: 'الْبَابُ الثَّالِثُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: فَيْعَلَ (بَيْطَرَ)',
    titleIndo: "Mulhaq Ruba'i Mujarrad Bab 3 (فَيْعَلَ - يُفَيْعِلُ / بَيْطَرَ)",
    contentArabic:
      'الْبَابُ الثَّالِثُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: (فَيْعَلَ يُفَيْعِلُ فَيْعَلَةً وَفِيعَالًا وَمُفَيْعَلًا فَهُوَ مُفَيْعِلٌ وَذَاكَ مُفَيْعَلٌ، فَيْعِلْ لَا تُفَيْعِلْ مُفَيْعَلٌ مُفَيْعَلٌ).\nمَوْزُونُهُ: بَيْطَرَ يُبَيْطِرُ بَيْطَرَةً وَبِيطَارًا وَمُبَيْطَرًا فَهُوَ مُبَيْطِرٌ وَذَاكَ مُبَيْطَرٌ، بَيْطِرْ لَا تُبَيْطِرْ مُبَيْطَرٌ مُبَيْطَرٌ.',
    translation:
      "Bab Ketiga Mulhaq Ruba'i Mujarrad: wazan فَيْعَلَ يُفَيْعِلُ dengan tambahan Ya’ setelah Fa’ fi’il. Mauzun: بَيْطَرَ يُبَيْطِرُ بَيْطَرَةً وَبِيطَارًا (mengobati atau membelah kuku hewan ternak/kuda).",
    explanation:
      'Dari kata inilah lahir istilah populer البَيْطَارُ (dokter hewan). Tambahan Ya’ sukun menjaga kesesuaian wazan dengan Ruba’i Mujarrad.',
    keyPoints: [
      'Huruf tambahan ilhaq: Ya’ sukun setelah Fa’ fi’il.',
      'Masdar: بَيْطَرَةً dan بِيطَارًا.',
    ],
  },
  {
    id: 'amtsilah-mulhaq-dahraja-4',
    titleArabic: 'الْبَابُ الرَّابِعُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: فَعْوَلَ (جَهْوَرَ)',
    titleIndo: "Mulhaq Ruba'i Mujarrad Bab 4 (فَعْوَلَ - يُفَعْوِلُ / جَهْوَرَ)",
    contentArabic:
      'الْبَابُ الرَّابِعُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: (فَعْوَلَ يُفَعْوِلُ فَعْوَلَةً وَفِعْوَالًا وَمُفَعْوَلًا فَهُوَ مُفَعْوِلٌ وَذَاكَ مُفَعْوَلٌ، فَعْوِلْ لَا تُفَعْوِلْ مُفَعْوَلٌ مُفَعْوَلٌ).\nمَوْزُونُهُ: جَهْوَرَ يُجَهْوِرُ جَهْوَرَةً وَجِهْوَارًا وَمُجَهْوَرًا فَهُوَ مُجَهْوِرٌ وَذَاكَ مُجَهْوَرٌ، جَهْوِرْ لَا تُجَهْوِرْ مُجَهْوَرٌ مُجَهْوَرٌ.',
    translation:
      "Bab Keempat Mulhaq Ruba'i Mujarrad: wazan فَعْوَلَ يُفَعْوِلُ dengan tambahan Wawu setelah ‘Ain fi’il. Mauzun: جَهْوَرَ يُجَهْوِرُ جَهْوَرَةً وَجِهْوَارًا (mengeraskan dan memperjelas suara).",
    explanation:
      'Berbeda dengan فَوْعَلَ yang menyisipkan Wawu sebelum ‘Ain, Bab 4 menyisipkan Wawu sesudah ‘Ain fi’il.',
    keyPoints: [
      'Akar kata: ج-ه-ر ditambah Wawu setelah ‘Ain.',
      'Masdar: جَهْوَرَةً dan جِهْوَارًا.',
    ],
  },
  {
    id: 'amtsilah-mulhaq-dahraja-5',
    titleArabic: 'الْبَابُ الْخَامِسُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: فَعْيَلَ (شَرْيَفَ)',
    titleIndo: "Mulhaq Ruba'i Mujarrad Bab 5 (فَعْيَلَ - يُفَعْيِلُ / شَرْيَفَ)",
    contentArabic:
      'الْبَابُ الْخَامِسُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: (فَعْيَلَ يُفَعْيِلُ فَعْيَلَةً وَفِعْيَالًا وَمُفَعْيَلًا فَهُوَ مُفَعْيِلٌ وَذَاكَ مُفَعْيَلٌ، فَعْيِلْ لَا تُفَعْيِلْ مُفَعْيَلٌ مُفَعْيَلٌ).\nمَوْزُونُهُ: شَرْيَفَ يُشَرْيِفُ شَرْيَفَةً وَشِرْيَافًا وَمُشَرْيَفًا فَهُوَ مُشَرْيِفٌ وَذَاكَ مُشَرْيَفٌ، شَرْيِفْ لَا تُشَرْيِفْ مُشَرْيَفٌ مُشَرْيَفٌ.',
    translation:
      "Bab Kelima Mulhaq Ruba'i Mujarrad: wazan فَعْيَلَ يُفَعْيِلُ dengan tambahan Ya’ setelah ‘Ain fi’il. Mauzun: شَرْيَفَ يُشَرْيِفُ شَرْيَفَةً وَشِرْيَافًا (memotong daun tangkai tanaman yang tumbuh terlalu rimbun).",
    explanation:
      'Kiai Ma’shum menggunakan mauzun شَرْيَفَ yang masyhur di kalangan ulama sharaf Nusantara dan tercatat jelas di halaman PDF 8 (halaman cetak Arab 12–13).',
    keyPoints: [
      'Akar kata: ش-ر-ف ditambah Ya’ sesudah ‘Ain fi’il.',
      'Masdar: شَرْيَفَةً dan شِرْيَافًا.',
    ],
  },
  {
    id: 'amtsilah-mulhaq-dahraja-6',
    titleArabic: 'الْبَابُ السَّادِسُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: فَعْلَى (سَلْقَى)',
    titleIndo: "Mulhaq Ruba'i Mujarrad Bab 6 (فَعْلَى - يُفَعْلِي / سَلْقَى)",
    contentArabic:
      'الْبَابُ السَّادِسُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: (فَعْلَى يُفَعْلِي فَعْلَاةً وَفِعْلَاءً وَمُفَعْلًى فَهُوَ مُفَعْلٍ وَذَاكَ مُفَعْلًى، فَعْلِ لَا تُفَعْلِ مُفَعْلًى مُفَعْلًى).\nمَوْزُونُهُ: سَلْقَى يُسَلْقِي سَلْقَاةً وَسِلْقَاءً وَمُسَلْقًى فَهُوَ مُسَلْقٍ وَذَاكَ مُسَلْقًى، سَلْقِ لَا تُسَلْقِ مُسَلْقًى مُسَلْقًى.',
    translation:
      "Bab Keenam Mulhaq Ruba'i Mujarrad: wazan فَعْلَى يُفَعْلِي dengan tambahan Ya’ di akhir kata (yang diganti Alif Maqshurah karena berharakat setelah fathah). Mauzun: سَلْقَى يُسَلْقِي سَلْقَاةً وَسِلْقَاءً (menelentangkan di atas punggung).",
    explanation:
      'Pada Isim Fa’ilnya berlaku hukum Isim Manqush sehingga dibaca مُسَلْقٍ ketika marfu’ tanpa Alif-Lam, dan pada fi’il amr huruf Ya’ akhir dibuang menjadi سَلْقِ.',
    keyPoints: [
      'Akar kata: س-ل-ق ditambah Ya’ di akhir untuk ilhaq.',
      'Fi’il Amr membuang huruf ilat akhir: سَلْقِ لَا تُسَلْقِ.',
    ],
  },
  {
    id: 'amtsilah-mulhaq-dahraja-7',
    titleArabic: 'الْبَابُ السَّابِعُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: فَعْنَلَ (قَلْنَسَ)',
    titleIndo: "Mulhaq Ruba'i Mujarrad Bab 7 (فَعْنَلَ - يُفَعْنِلُ / قَلْنَسَ)",
    contentArabic:
      'الْبَابُ السَّابِعُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ: (فَعْنَلَ يُفَعْنِلُ فَعْنَلَةً وَفِعْنَالًا وَمُفَعْنَلًا فَهُوَ مُفَعْنِلٌ وَذَاكَ مُفَعْنَلٌ، فَعْنِلْ لَا تُفَعْنِلْ مُفَعْنَلٌ مُفَعْنَلٌ).\nمَوْزُونُهُ: قَلْنَسَ يُقَلْنِسُ قَلْنَسَةً وَقِلْنَاسًا وَمُقَلْنَسًا فَهُوَ مُقَلْنِسٌ وَذَاكَ مُقَلْنَسٌ، قَلْنِسْ لَا تُقَلْنِسْ مُقَلْنَسٌ مُقَلْنَسٌ.',
    translation:
      "Bab Ketujuh Mulhaq Ruba'i Mujarrad: wazan فَعْنَلَ يُفَعْنِلُ dengan sisipan Nun sukun setelah ‘Ain fi’il. Mauzun: قَلْنَسَ يُقَلْنِسُ قَلْنَسَةً وَقِلْنَاسًا (memakaikan peci/qalansuwah).",
    explanation:
      'Bab ketujuh menutup kelompok Mulhaq Ruba’i Mujarrad di halaman PDF 8 sebelum kitab beralih ke pembahasan Tsulatsi Mazid.',
    keyPoints: [
      'Huruf tambahan ilhaq: Nun sukun setelah ‘Ain fi’il.',
      'Masdar: قَلْنَسَةً dan قِلْنَاسًا.',
    ],
  },
  {
    id: 'amtsilah-mazid-1',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِحَرْفٍ — الْبَابُ الْأَوَّلُ: فَعَّلَ يُفَعِّلُ',
    titleIndo: 'Tsulatsi Mazid 1 Huruf Bab 1 (فَعَّلَ - يُفَعِّلُ / فَرَّحَ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ الْمُجَرَّدُ إِلَى وَزْنِ (فَعَّلَ) بِزِيَادَةِ التَّضْعِيفِ: ١- لِلتَّعْدِيَةِ نَحْوُ: فَرَّحَ زَيْدٌ عَمْرًا؛ ٢- وَلِلتَّكْثِيرِ نَحْوُ: قَطَّعَ زَيْدٌ الْحَبْلَ؛ ٣- وَلِنِسْبَةِ الْمَفْعُولِ إِلَى أَصْلِ الْفِعْلِ نَحْوُ: كَفَّرَ زَيْدٌ عَمْرًا؛ ٤- وَلِسَلْبِ أَصْلِ الْفِعْلِ نَحْوُ: قَشَّرَ زَيْدٌ الرُّمَّانَ؛ ٥- وَلِاتِّخَاذِ الْفِعْلِ مِنَ الِاسْمِ نَحْوُ: خَيَّمَ الْقَوْمُ.\nالْمَوْزُونُ: فَرَّحَ يُفَرِّحُ تَفْرِيحًا وَتَفْرِحَةً وَتَفْرَاحًا وَتِفْرَاحًا وَمُفَرَّحًا فَهُوَ مُفَرِّحٌ وَذَاكَ مُفَرَّحٌ، فَرِّحْ لَا تُفَرِّحْ مُفَرَّحٌ مُفَرَّحٌ.\nوَمِنْ أَمْثِلَتِهِ: كَرَّرَ، وَكَّلَ، يَسَّرَ، نَوَّرَ، بَيَّنَ، زَكَّى، لَقَّى، وَلَّى، قَوَّى، أَدَّبَ، شَأَّمَ، هَنَّأَ.',
    translation:
      'Bab 1 Tsulatsi Mazid satu huruf (menambah tasydid pada ‘Ain fi’il): فَعَّلَ يُفَعِّلُ تَفْعِيلًا. Lima faedah maknanya dalam kitab: (1) Ta’diyah (فَرَّحَ menggembirakan), (2) Taktsir (قَطَّعَ memotong banyak), (3) Nisbah (كَفَّرَ menisbahkan kekafiran), (4) Salbu/membuang (قَشَّرَ mengupas kulit), (5) Ittikhadzul fi’l minal ism (خَيَّمَ memasang kemah). Memuat 13 mauzun lintas bina’.',
    explanation:
      'Kitab Amtsilah mencantumkan empat bentuk masdar lengkap pada wazan ini: تَفْعِيلًا، تَفْعِلَةً، تَفْعَالًا، تِفْعَالًا (ditambah masdar mim مُفَرَّحًا).',
    keyPoints: [
      'Huruf ziyadah: Penggandaan (tasydid) ‘Ain fi’il.',
      'Lima faedah makna: Ta’diyah, Taktsir, Nisbah, Salbu, Ittikhadz.',
      'Masdar khas Naqish/Mahmuz Lam pada bab ini cenderung memakai تَفْعِلَةً seperti تَزْكِيَةً dan تَهْنِئَةً.',
    ],
  },
  {
    id: 'amtsilah-mazid-1-faala',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِحَرْفٍ — الْبَابُ الثَّانِي: فَاعَلَ يُفَاعِلُ',
    titleIndo: 'Tsulatsi Mazid 1 Huruf Bab 2 (فَاعَلَ - يُفَاعِلُ / قَاتَلَ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ الْمُجَرَّدُ إِلَى وَزْنِ (فَاعَلَ) بِزِيَادَةِ الْأَلِفِ بَعْدَ الْفَاءِ:\n١- لِلْمُشَارَكَةِ بَيْنَ اثْنَيْنِ، نَحْوُ: ضَارَبَ زَيْدٌ عَمْرًا؛\n٢- وَلِمَعْنَى (فَعَّلَ) الَّتِي لِلتَّكْثِيرِ، نَحْوُ: ضَاعَفَ اللَّهُ؛\n٣- وَلِمَعْنَى (أَفْعَلَ) الَّتِي لِلتَّعْدِيَةِ، نَحْوُ: عَافَاكَ اللَّهُ؛\n٤- وَلِمَعْنَى (فَعَلَ) الْمُجَرَّدِ، نَحْوُ: سَافَرَ زَيْدٌ، وَقَاتَلَهُ اللَّهُ، وَبَارَكَ اللَّهُ فِيكَ.\nالْمَوْزُونُ: قَاتَلَ يُقَاتِلُ مُقَاتَلَةً وَقِتَالًا وَقِيْتَالًا فَهُوَ مُقَاتِلٌ وَذَاكَ مُقَاتَلٌ، قَاتِلْ لَا تُقَاتِلْ مُقَاتَلٌ مُقَاتَلٌ.\nوَمِنْ أَمْثِلَتِهِ: مَاسَّ، وَاعَدَ، يَاسَرَ، عَاوَنَ، بَايَنَ، عَاطَى، لَاقَى، وَالَى، دَاوَى، آخَذَ، لَاءَمَ، نَاسَأَ.',
    translation:
      'Bab 2 Tsulatsi Mazid satu huruf (menambah Alif setelah Fa’ fi’il): فَاعَلَ يُفَاعِلُ مُفَاعَلَةً. Empat faedah maknanya: (1) Musyarakah antara dua pihak (ضَارَبَ saling memukul), (2) Bermakna taktsir seperti فَعَّلَ (ضَاعَفَ melipatgandakan), (3) Bermakna ta’diyah seperti أَفْعَلَ (عَافَاكَ Allah menyehatkanmu), (4) Bermakna mujarrad (سَافَرَ bepergian).',
    explanation:
      'Kitab menyajikan 13 mauzun lintas bina’ mulai dari Shahih (قَاتَلَ) dan Mudha’af (مَاسَّ) hingga Mahmuz (آخَذَ، لَاءَمَ، نَاسَأَ).',
    keyPoints: [
      'Huruf ziyadah: Alif setelah Fa’ fi’il.',
      'Tiga pola masdar: مُفَاعَلَةً، فِعَالًا، فِيعَالًا.',
      'Pada Mahmuz Fa’, Alif ziyadah bergabung dengan Hamzah menjadi Mad (آخَذَ).',
    ],
  },
  {
    id: 'amtsilah-mazid-1-afala',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِحَرْفٍ — الْبَابُ الثَّالِثُ: أَفْعَلَ يُفْعِلُ',
    titleIndo: 'Tsulatsi Mazid 1 Huruf Bab 3 (أَفْعَلَ - يُفْعِلُ / أَكْرَمَ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ إِلَى وَزْنِ (أَفْعَلَ) بِزِيَادَةِ هَمْزَةِ الْقَطْعِ فِي أَوَّلِهِ: ١- لِلتَّعْدِيَةِ نَحْوُ: أَكْرَمْتُ زَيْدًا؛ ٢- وَلِلدُّخُولِ فِي الشَّيْءِ نَحْوُ: أَمْسَى الْمُسَافِرُ؛ ٣- وَلِقَصْدِ الْمَكَانِ نَحْوُ: أَحْجَزَ زَيْدٌ وَأَعْرَقَ عَمْرٌو؛ ٤- وَلِوُجُودِ مَا اشْتُقَّ مِنْهُ الْفِعْلُ فِي الْفَاعِلِ نَحْوُ: أَثْمَرَ الطَّلْعُ؛ ٥- وَلِلْمُبَالَغَةِ نَحْوُ: أَشْغَلْتُ عَمْرًا؛ ٦- وَلِوِجْدَانِ الشَّيْءِ فِي صِفَةٍ نَحْوُ: أَعْظَمْتُهُ وَأَحْمَدْتُهُ؛ ٧- وَلِلصَّيْرُورَةِ نَحْوُ: أَقْفَرَ الْبَلَدُ؛ ٨- وَلِلتَّعْرِيضِ نَحْوُ: أَبَاعَ الثَّوْبَ؛ ٩- وَلِلسَّلْبِ نَحْوُ: أَشْفَى الْمَرِيضُ؛ ١٠- وَلِلْحَيْنُونَةِ نَحْوُ: أَحْصَدَ الزَّرْعُ.\nالْمَوْزُونُ: أَكْرَمَ يُكْرِمُ إِكْرَامًا وَمُكْرَمًا فَهُوَ مُكْرِمٌ وَذَاكَ مُكْرَمٌ، أَكْرِمْ لَا تُكْرِمْ مُكْرَمٌ مُكْرَمٌ.\nوَمِنْ أَمْثِلَتِهِ: أَمَدَّ، أَوْعَدَ، أَيْسَرَ، أَجَابَ، أَبَانَ، أَعْطَى، أَدْرَى، أَوْدَى، أَرْوَى، آمَنَ، أَجْأَرَ، أَبْرَأَ.',
    translation:
      'Bab 3 Tsulatsi Mazid satu huruf (menambah Hamzah Qatha’ di awal kata): أَفْعَلَ يُفْعِلُ إِفْعَالًا. Kitab merinci sepuluh faedah makna wazan ini, antara lain Ta’diyah (membuat transitif), Dukhul (memasuki waktu/tempat), Shairurah (menjadi), Ta’ridh (memajang), Salbu (hilang), dan Hainunah (tiba waktunya). Disertai 13 mauzun lintas bina’.',
    explanation:
      'Perhatikan bahwa Hamzah Qatha’ pada أَفْعَلَ tetap muncul pada madhi, masdar, dan amr (أَكْرِمْ berharakat fathah), namun dibuang pada fi’il mudhari’ agar tidak berat (يُكْرِمُ, bukan يُؤَكْرِمُ).',
    keyPoints: [
      'Huruf ziyadah: Hamzah Qatha’ di awal fi’il madhi.',
      'Sepuluh faedah makna rinci tercantum di halaman PDF 10.',
      'Pada mudhari’ huruf mudhara’ahnya selalu berharakat dhommah: يُفْعِلُ.',
    ],
  },
  {
    id: 'amtsilah-mazid-2',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِحَرْفَيْنِ — الْبَابُ الْأَوَّلُ: تَفَاعَلَ يَتَفَاعَلُ',
    titleIndo: 'Tsulatsi Mazid 2 Huruf Bab 1 (تَفَاعَلَ - يَتَفَاعَلُ / تَبَاعَدَ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ إِلَى وَزْنِ (تَفَاعَلَ) بِزِيَادَةِ التَّاءِ فِي أَوَّلِهِ وَالْأَلِفِ بَعْدَ الْفَاءِ:\n١- لِلْمُشَارَكَةِ بَيْنَ اثْنَيْنِ فَأَكْثَرَ، نَحْوُ: تَصَالَحَ الْقَوْمُ وَتَضَارَبَ زَيْدٌ وَعَمْرٌو؛\n٢- وَلِإِظْهَارِ مَا لَيْسَ فِي الْوَاقِعِ، نَحْوُ: تَمَارَضَ زَيْدٌ؛\n٣- وَلِلْوُقُوعِ تَدْرِيجًا، نَحْوُ: تَوَارَدَ الْقَوْمُ؛\n٤- وَلِتَأْدِيَةِ مَعْنَى الْمُجَرَّدِ، نَحْوُ: تَعَالَى وَتَسَامَى؛\n٥- وَلِمُطَاوَعَةِ (فَاعَلَ)، نَحْوُ: بَاعَدْتُهُ فَتَبَاعَدَ.\nالْمَوْزُونُ: تَبَاعَدَ يَتَبَاعَدُ تَبَاعُدًا وَمُتَبَاعَدًا فَهُوَ مُتَبَاعِدٌ وَذَاكَ مُتَبَاعَدٌ، تَبَاعَدْ لَا تَتَبَاعَدْ مُتَبَاعَدٌ مُتَبَاعَدٌ.',
    translation:
      'Bab 1 Tsulatsi Mazid dua huruf (menambah Ta’ di awal dan Alif setelah Fa’): تَفَاعَلَ يَتَفَاعَلُ تَفَاعُلًا. Memiliki 5 faedah makna: Musyarakah dua pihak atau lebih (تَصَالَحَ), berpura-pura (تَمَارَضَ pura-pura sakit), berurutan bertahap (تَوَارَدَ), bermakna mujarrad (تَعَالَى), dan muthawa’ah dari فَاعَلَ (بَاعَدْتُهُ فَتَبَاعَدَ).',
    explanation:
      'Di dalam kitab, bab ini menampilkan 13 mauzun lintas bina’ meliputi تَبَاعَدَ، تَمَاسَّ، تَوَاعَدَ، تَيَامَنَ، تَلَاوَمَ، تَبَايَنَ، تَعَاطَى، تَلَاقَى، تَوَارَى، تَدَاوَى، تَأَنَّفَ، تَسَاءَلَ، dan تَمَالَأَ.',
    keyPoints: [
      'Dua huruf tambahan: Ta’ di depan dan Alif setelah Fa’.',
      'Masdarnya mendhommahkan ‘Ain fi’il sebelum akhir (تَبَاعُدًا) dan mengkasrahkannya pada Naqish (تَلَاقِيًا).',
    ],
  },
  {
    id: 'amtsilah-mazid-2-tafaala',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِحَرْفَيْنِ — الْبَابُ الثَّانِي: تَفَعَّلَ يَتَفَعَّلُ',
    titleIndo: 'Tsulatsi Mazid 2 Huruf Bab 2 (تَفَعَّلَ - يَتَفَعَّلُ / تَكَسَّرَ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ إِلَى وَزْنِ (تَفَعَّلَ) بِزِيَادَةِ التَّاءِ فِي أَوَّلِهِ وَتَضْعِيفِ الْعَيْنِ:\n١- لِمُطَاوَعَةِ (فَعَّلَ) الْمُضَعَّفِ الْعَيْنِ نَحْوُ: كَسَّرْتُ الزُّجَاجَ فَتَكَسَّرَ؛ ٢- وَلِلتَّكَلُّفِ نَحْوُ: تَشَجَّعَ زَيْدٌ؛ ٣- وَلِاتِّخَاذِ الْفَاعِلِ أَصْلَ الْفِعْلِ مَفْعُولًا نَحْوُ: تَبَنَّيْتُ يُوسُفَ؛ ٤- وَلِلدَّلَالَةِ عَلَى مُجَانَبَةِ الْفِعْلِ نَحْوُ: تَذَمَّمَ زَيْدٌ؛ ٥- وَلِلصَّيْرُورَةِ نَحْوُ: تَأَيَّمَتِ الْمَرْأَةُ؛ ٦- وَلِلدَّلَالَةِ عَلَى حُصُولِ أَصْلِ الْفِعْلِ مَرَّةً بَعْدَ أُخْرَى نَحْوُ: تَجَرَّعَ زَيْدٌ؛ ٧- وَلِلطَّلَبِ نَحْوُ: تَعَجَّلَ الشَّيْءَ.\nالْمَوْزُونُ: تَكَسَّرَ يَتَكَسَّرُ تَكَسُّرًا وَمُتَكَسَّرًا فَهُوَ مُتَكَسِّرٌ وَذَاكَ مُتَكَسَّرٌ، تَكَسَّرْ لَا تَتَكَسَّرْ مُتَكَسَّرٌ مُتَكَسَّرٌ.',
    translation:
      'Bab 2 Tsulatsi Mazid dua huruf (menambah Ta’ di awal dan tasydid pada ‘Ain fi’il): تَفَعَّلَ يَتَفَعَّلُ تَفَعُّلًا. Memiliki 7 faedah makna: Muthawa’ah dari فَعَّلَ (كَسَّرْتُهُ فَتَكَسَّرَ), takalluf/berupaya keras (تَشَجَّعَ), menjadikan sebagai objek (تَبَنَّيْتُ), menjauhi (تَذَمَّمَ), menjadi (تَأَيَّمَتْ), bertahap sedikit demi sedikit (تَجَرَّعَ), dan meminta/menuntut (تَعَجَّلَ).',
    explanation:
      'Memuat 13 mauzun lintas bina’: تَكَسَّرَ، تَكَرَّرَ، تَوَعَّدَ، تَيَسَّرَ، تَنَوَّرَ، تَبَيَّنَ، تَعَدَّى، تَلَقَّى، تَوَلَّى، تَرَوَّى، تَأَدَّبَ، تَرَأَّدَ، dan تَصَدَّأَ.',
    keyPoints: [
      'Dua huruf tambahan: Ta’ awal dan tasydid ‘Ain.',
      'Fathah tetap dipertahankan pada madhi dan mudhari’: تَكَسَّرَ - يَتَكَسَّرُ.',
    ],
  },
  {
    id: 'amtsilah-mazid-2-iftaala',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِحَرْفَيْنِ — الْبَابُ الثَّالِثُ: اِفْتَعَلَ يَفْتَعِلُ',
    titleIndo: 'Tsulatsi Mazid 2 Huruf Bab 3 (اِفْتَعَلَ - يَفْتَعِلُ / اِجْتَمَعَ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ إِلَى وَزْنِ (اِفْتَعَلَ) بِزِيَادَةِ الْهَمْزَةِ فِي أَوَّلِهِ وَالتَّاءِ بَيْنَ الْفَاءِ وَالْعَيْنِ:\n١- لِمُطَاوَعَةِ (فَعَلَ) نَحْوُ: جَمَعْتُ الْإِبِلَ فَاجْتَمَعَ؛ ٢- وَلِلِاتِّخَاذِ نَحْوُ: اخْتَبَزَ زَيْدٌ؛ ٣- وَلِزِيَادَةِ الْمُبَالَغَةِ فِي الْمَعْنَى نَحْوُ: اكْتَسَبَ زَيْدٌ؛ ٤- وَلِمَعْنَى (فَعَلَ) نَحْوُ: اجْتَذَبَ؛ ٥- وَلِمَعْنَى (تَفَاعَلَ) نَحْوُ: اخْتَصَمَ؛ ٦- وَلِلطَّلَبِ نَحْوُ: اكْتَدَّ.\nالْمَوْزُونُ: اِجْتَمَعَ يَجْتَمِعُ اجْتِمَاعًا وَمُجْتَمَعًا فَهُوَ مُجْتَمِعٌ وَذَاكَ مُجْتَمَعٌ، اِجْتَمِعْ لَا تَجْتَمِعْ مُجْتَمَعٌ مُجْتَمَعٌ.\nوَمِنْ أَمْثِلَتِهِ: اِمْتَدَّ، اِتَّصَلَ، اِتَّسَرَ، اِعْتَادَ، اِشْتَرَى، اِتَّقَى، اِرْتَوَى، اِئْتَمَنَ، اِبْتَأَسَ، اِجْتَرَأَ، اِخْتَارَ، اِعْتَدَى.',
    translation:
      'Bab 3 Tsulatsi Mazid dua huruf (Hamzah Washal di awal dan Ta’ di antara Fa’ dan ‘Ain): اِفْتَعَلَ يَفْتَعِلُ افْتِعَالًا. Enam faedah maknanya: Muthawa’ah dari فَعَلَ (اِجْتَمَعَ), ittikhadz (اِخْتَبَزَ membuat roti), kesungguhan/mubalaghah (اِكْتَسَبَ), makna mujarrad (اِجْتَذَبَ), makna saling/tafa’ala (اِخْتَصَمَ), dan memohon (اِكْتَدَّ).',
    explanation:
      'Perhatikan kaidah ibdal penting pada Mitsal Wawi/Ya’i dan Lafif Mafruq: pada اِتَّصَلَ (asalnya اِوْتَصَلَ), اِتَّسَرَ (asalnya اِيْتَسَرَ), dan اِتَّقَى (asalnya اِوْتَقَى), huruf illat berubah menjadi Ta’ lalu diidghamkan ke Ta’ ifti’al menjadi تّ.',
    keyPoints: [
      'Dua huruf tambahan: Hamzah Washal awal dan sisipan Ta’ setelah Fa’.',
      'Ibdal penting: اِوْتَقَى -> اِتَّقَى، اِوْتَصَلَ -> اِتَّصَلَ.',
    ],
  },
  {
    id: 'amtsilah-mazid-2-infaala',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِحَرْفَيْنِ — الْبَابُ الرَّابِعُ: اِنْفَعَلَ يَنْفَعِلُ',
    titleIndo: 'Tsulatsi Mazid 2 Huruf Bab 4 (اِنْفَعَلَ - يَنْفَعِلُ / اِنْكَسَرَ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ إِلَى وَزْنِ (اِنْفَعَلَ) بِزِيَادَةِ الْهَمْزَةِ وَالنُّونِ فِي أَوَّلِهِ:\n١- لِمُطَاوَعَةِ (فَعَلَ) نَحْوُ: كَسَرْتُ الزُّجَاجَ فَانْكَسَرَ؛\n٢- وَلِمُطَاوَعَةِ (أَفْعَلَ) قَلِيلًا نَحْوُ: أَزْعَجَهُ فَانْزَعَجَ.\nوَلَا يُبْنَى (اِنْفَعَلَ) إِلَّا مِمَّا فِيهِ عِلَاجٌ وَتَأْثِيرٌ مَحْسُوسٌ.\nالْمَوْزُونُ: اِنْكَسَرَ يَنْكَسِرُ انْكِسَارًا وَمُنْكَسَرًا فَهُوَ مُنْكَسِرٌ وَذَاكَ مُنْكَسَرٌ، اِنْكَسِرْ لَا تَنْكَسِرْ مُنْكَسَرٌ مُنْكَسَرٌ.\nوَمِنْ أَمْثِلَتِهِ: اِنْفَضَّ، اِنْقَادَ، اِنْمَاعَ، اِنْجَلَى، اِنْبَرَى، اِنْطَفَأَ.',
    translation:
      'Bab 4 Tsulatsi Mazid dua huruf (Hamzah Washal dan Nun di awal): اِنْفَعَلَ يَنْفَعِلُ انْفِعَالًا. Fungsinya khusus untuk muthawa’ah (menerima akibat perbuatan) dari فَعَلَ dan sedikit dari أَفْعَلَ, serta hanya dibentuk dari perbuatan yang mengandung tindakan fisik dan dampak yang terindera (عِلَاجٌ وَتَأْثِيرٌ مَحْسُوسٌ).',
    explanation:
      'Seluruh kata kerja berwazan اِنْفَعَلَ berstatus fi’il lazim (tidak membutuhkan objek maf’ul bih). Contoh kitab: اِنْكَسَرَ، اِنْفَضَّ، اِنْقَادَ، اِنْمَاعَ، اِنْجَلَى، اِنْبَرَى، اِنْطَفَأَ.',
    keyPoints: [
      'Dua huruf tambahan: Hamzah Washal dan Nun sukun di awal.',
      'Syarat pembentukan: Hanya untuk pekerjaan berunsur fisik dan dampak terindera.',
      'Selalu berupa fi’il lazim.',
    ],
  },
  {
    id: 'amtsilah-mazid-2-ifalla',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِحَرْفَيْنِ — الْبَابُ الْخَامِسُ: اِفْعَلَّ يَفْعَلُّ',
    titleIndo: 'Tsulatsi Mazid 2 Huruf Bab 5 (اِفْعَلَّ - يَفْعَلُّ / اِحْمَرَّ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ إِلَى وَزْنِ (اِفْعَلَّ) بِزِيَادَةِ هَمْزَةِ الْوَصْلِ وَتَضْعِيفِ اللَّامِ:\n١- لِلدَّلَالَةِ عَلَى الدُّخُولِ فِي الصِّفَةِ نَحْوُ: اِحْمَرَّ الْبُسْرُ، أَيْ دَخَلَ فِي الْحُمْرَةِ؛\n٢- وَلِلْمُبَالَغَةِ نَحْوُ: اِسْوَدَّ اللَّيْلُ، أَيِ اشْتَدَّ سَوَادُهُ.\nالْمَوْزُونُ: اِحْمَرَّ يَحْمَرُّ احْمِرَارًا وَمُحْمَرًّا فَهُوَ مُحْمَرٌّ وَذَاكَ مُحْمَرٌّ، اِحْمَرَّ لَا تَحْمَرَّ مُحْمَرٌّ مُحْمَرٌّ.\nوَمِنْ أَمْثِلَتِهِ: اِسْوَدَّ، اِبْيَضَّ، اِصْفَرَّ، اِخْضَرَّ، اِشْهَبَّ، اِسْمَرَّ.',
    translation:
      'Bab 5 Tsulatsi Mazid dua huruf (Hamzah Washal di awal dan tasydid Lam di akhir): اِفْعَلَّ يَفْعَلُّ افْعِلَالًا. Berfaedah menunjukkan masuknya sesuatu ke dalam sifat warna/cacat atau menguatkan intensitasnya, seperti اِحْمَرَّ (memerah), اِسْوَدَّ (menghitam pekat), اِبْيَضَّ (memutih), اِصْفَرَّ (menguning), اِخْضَرَّ (menghijau), اِشْهَبَّ (kelabu), dan اِسْمَرَّ (cokelat).',
    explanation:
      'Pada wazan ini, bentuk Isim Fa’il dan Isim Maf’ul terlihat identik secara lafadz (مُحْمَرٌّ) akibat idgham dua huruf akhir, meski secara makna hanya bermakna lazim/fa’il.',
    keyPoints: [
      'Dua huruf tambahan: Hamzah Washal dan penggandaan Lam fi’il.',
      'Khusus digunakan untuk perubahan warna dan sifat/cacat tubuh.',
    ],
  },
  {
    id: 'amtsilah-mazid-3',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِثَلَاثَةِ أَحْرُفٍ — الْبَابُ الْأَوَّلُ: اِسْتَفْعَلَ',
    titleIndo: 'Tsulatsi Mazid 3 Huruf Bab 1 (اِسْتَفْعَلَ - يَسْتَفْعِلُ / اِسْتَخْرَجَ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ إِلَى وَزْنِ (اِسْتَفْعَلَ) بِزِيَادَةِ هَمْزَةِ الْوَصْلِ وَالسِّينِ وَالتَّاءِ:\n١- لِطَلَبِ الْفِعْلِ نَحْوُ: اِسْتَغْفَرَ اللَّهَ؛ ٢- وَلِلْوِجْدَانِ عَلَى صِفَةٍ نَحْوُ: اِسْتَعْظَمْتُ الْأَمْرَ وَاسْتَحْسَنْتُهُ؛ ٣- وَلِلتَّحَوُّلِ نَحْوُ: اِسْتَحْجَرَ الطِّينُ؛ ٤- وَلِلتَّكَلُّفِ نَحْوُ: اِسْتَجْرَأَ؛ ٥- وَلِمَعْنَى فَعَلَ الْمُجَرَّدِ نَحْوُ: اِسْتَقَرَّ؛ ٦- وَلِلْمُطَاوَعَةِ نَحْوُ: أَرَاحَهُ فَاسْتَرَاحَ.\nالْمَوْزُونُ: اِسْتَخْرَجَ يَسْتَخْرِجُ اسْتِخْرَاجًا وَمُسْتَخْرَجًا فَهُوَ مُسْتَخْرِجٌ وَذَاكَ مُسْتَخْرَجٌ، اِسْتَخْرِجْ لَا تَسْتَخْرِجْ مُسْتَخْرَجٌ مُسْتَخْرَجٌ.\nوَمِنْ أَمْثِلَتِهِ: اِسْتَمَدَّ، اِسْتَوْثَقَ، اِسْتَيْقَظَ، اِسْتَجَابَ، اِسْتَبَانَ، اِسْتَرْشَى، اِسْتَلْقَى، اِسْتَوْفَى، اِسْتَرْوَى، اِسْتَأْمَنَ، اِسْتَرْأَسَ، اِسْتَبْرَأَ.',
    translation:
      'Bab 1 Tsulatsi Mazid tiga huruf (menambah Hamzah Washal, Sin, dan Ta’ di awal): اِسْتَفْعَلَ يَسْتَفْعِلُ اسْتِفْعَالًا. Kitab merinci 6 faedahnya: (1) Thalab/meminta (اِسْتَغْفَرَ memohon ampun), (2) Menganggap bersifat demikian (اِسْتَحْسَنَ menilai baik), (3) Berubah wujud (اِسْتَحْجَرَ membatu), (4) Takalluf/memberanikan diri (اِسْتَجْرَأَ), (5) Bermakna mujarrad (اِسْتَقَرَّ), dan (6) Muthawa’ah dari أَفْعَلَ (أَرَاحَهُ فَاسْتَرَاحَ). Memuat 13 mauzun lengkap.',
    explanation:
      'Pada bina’ Ajwaf seperti اِسْتَجَابَ dan اِسْتَبَانَ, huruf Alif pada masdar dipendekkan dan diganti Ta’ marbuthah di akhir menjadi اِسْتِجَابَةً dan اِسْتِبَانَةً.',
    keyPoints: [
      'Tiga huruf tambahan di awal: ا + س + ت.',
      'Faedah paling populer: Thalab (memohon/meminta) dan Wijdân (menganggap).',
      'Masdar Ajwaf mendapat Ta’ kompensasi di akhir: اِسْتِقَامَةً / اِسْتِجَابَةً.',
    ],
  },
  {
    id: 'amtsilah-mazid-3-ifauaa',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِثَلَاثَةِ أَحْرُفٍ — الْبَابُ الثَّانِي: اِفْعَوْعَلَ',
    titleIndo: 'Tsulatsi Mazid 3 Huruf Bab 2 (اِفْعَوْعَلَ - يَفْعَوْعِلُ / اِحْلَوْلَى)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ إِلَى وَزْنِ (اِفْعَوْعَلَ) بِزِيَادَةِ هَمْزَةِ الْوَصْلِ، وَتَضْعِيفِ الْعَيْنِ، وَالْوَاوِ بَيْنَ الْعَيْنَيْنِ:\n١- لِلْمُبَالَغَةِ، نَحْوُ: اِحْدَوْدَبَ زَيْدٌ، أَيِ اشْتَدَّ حَدَبُهُ؛\n٢- وَلِمَعْنَى فَعَلَ الْمُجَرَّدِ، نَحْوُ: اِحْلَوْلَى التَّمْرُ، أَيْ حَلَا.\nالْمَوْزُونُ فِي الْكِتَابِ (نَاقِصٌ وَاوِيٌّ): اِحْلَوْلَى يَحْلَوْلِي احْلِيلَاءً وَمُحْلَوْلًى فَهُوَ مُحْلَوْلٍ وَذَاكَ مُحْلَوْلًى، اِحْلَوْلِ لَا تَحْلَوْلِ مُحْلَوْلًى مُحْلَوْلًى.',
    translation:
      'Bab 2 Tsulatsi Mazid tiga huruf: اِفْعَوْعَلَ يَفْعَوْعِلُ افْعِيعَالًا (menambah Hamzah Washal, menggandakan ‘Ain, dan menyisipkan Wawu di antara dua ‘Ain). Berfaedah mubalaghah (sangat membungkuk pada اِحْدَوْدَبَ) atau bermakna mujarrad pada contoh mauzun kitab اِحْلَوْلَى يَحْلَوْلِي احْلِيلَاءً (kurma itu terasa sangat manis).',
    explanation:
      'Di halaman PDF 16, kitab mencantumkan contoh Naqish Wawi اِحْلَوْلَى dengan masdar اِحْلِيلَاءً (Wawu berubah menjadi Ya’ sukun karena didahului kasrah dan disusul Alif).',
    keyPoints: [
      'Tiga huruf tambahan: Hamzah Washal, ‘Ain ganda, dan Wawu sisipan.',
      'Masdar: اِفْعِيعَالًا (اِحْلِيلَاءً / اِعْشِيشَابًا).',
    ],
  },
  {
    id: 'amtsilah-mazid-3-ifaalla',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِثَلَاثَةِ أَحْرُفٍ — الْبَابُ الثَّالِثُ: اِفْعَالَّ',
    titleIndo: 'Tsulatsi Mazid 3 Huruf Bab 3 (اِفْعَالَّ - يَفْعَالُّ / اِحْمَارَّ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ إِلَى وَزْنِ (اِفْعَالَّ) بِزِيَادَةِ هَمْزَةِ الْوَصْلِ، وَالْأَلِفِ بَعْدَ الْعَيْنِ، وَتَضْعِيفِ اللَّامِ:\n١- لِلْمُبَالَغَةِ فِي الدُّخُولِ فِي الصِّفَةِ، نَحْوُ: اِصْفَارَّ الْمَوْزُ، أَيِ اشْتَدَّ اصْفِرَارُهُ.\nمَوْزُونُهُ فِي الْكِتَابِ:\n- الصَّحِيحُ: اِحْمَارَّ يَحْمَارُّ احْمِيرَارًا وَمُحْمَارًّا فَهُوَ مُحْمَارٌّ وَذَاكَ مُحْمَارٌّ، اِحْمَارَّ لَا تَحْمَارَّ مُحْمَارٌّ مُحْمَارٌّ، وَكَذَا اِصْفَارَّ يَصْفَارُّ اصْفِيرَارًا.\n- الْأَجْوَفُ الْيَائِيُّ: اِبْيَاضَّ يَبْيَاضُّ ابْيِيضَاضًا فَهُوَ مُبْيَاضٌّ.',
    translation:
      'Bab 3 Tsulatsi Mazid tiga huruf: اِفْعَالَّ يَفْعَالُّ افْعِيلَالًا (menambah Hamzah Washal, Alif setelah ‘Ain, dan tasydid Lam). Berfaedah mubalaghah (lebih kuat lagi daripada wazan اِفْعَلَّ), seperti اِحْمَارَّ (merah menyala), اِصْفَارَّ (kuning pekat), dan اِبْيَاضَّ (putih cemerlang).',
    explanation:
      'Tambahan Alif panjang di tengah mempertegas tingkatan warna dibanding اِحْمَرَّ. Pada masdarnya Alif berubah menjadi Ya’ mad sesudah kasrah (اِحْمِيرَارًا).',
    keyPoints: [
      'Tingkatan lebih tinggi dari اِفْعَلَّ untuk makna warna dan sifat.',
      'Tiga mauzun kitab di halaman PDF 17: اِحْمَارَّ، اِصْفَارَّ، اِبْيَاضَّ.',
    ],
  },
  {
    id: 'amtsilah-mazid-3-ifawwala',
    titleArabic: 'الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِثَلَاثَةِ أَحْرُفٍ — الْبَابُ الرَّابِعُ: اِفْعَوَّلَ',
    titleIndo: 'Tsulatsi Mazid 3 Huruf Bab 4 (اِفْعَوَّلَ - يَفْعَوِّلُ / اِعْلَوَّطَ)',
    contentArabic:
      'يُنْقَلُ الثُّلَاثِيُّ إِلَى وَزْنِ (اِفْعَوَّلَ) بِزِيَادَةِ هَمْزَةِ الْوَصْلِ وَالْوَاوَيْنِ بَعْدَ الْعَيْنِ:\n١- لِمُبَالَغَةِ اللَّازِمِ، نَحْوُ: اِخْرَوَّطَ شُعَاعُ الشَّمْسِ.\nالْمَوْزُونُ فِي الْكِتَابِ:\nاِعْلَوَّطَ يَعْلَوِّطُ اعْلِوَّاطًا وَمُعْلَوَّطًا فَهُوَ مُعْلَوِّطٌ وَذَاكَ مُعْلَوَّطٌ، اِعْلَوِّطْ لَا تَعْلَوِّطْ مُعْلَوَّطٌ مُعْلَوَّطٌ.',
    translation:
      'Bab 4 Tsulatsi Mazid tiga huruf: اِفْعَوَّلَ يَفْعَوِّلُ افْعِوَّالًا (menambah Hamzah Washal dan dua Wawu bertasydid sesudah ‘Ain fi’il). Berfaedah menguatkan makna lazim seperti اِخْرَوَّطَ (memanjang cepat). Mauzun dalam kitab: اِعْلَوَّطَ يَعْلَوِّطُ اعْلِوَّاطًا (memegang leher unta dan menungganginya tanpa pelana).',
    explanation:
      'Bab ini menutup empat wazan Tsulatsi Mazid tiga huruf di bagian tengah halaman PDF 17.',
    keyPoints: [
      'Tiga huruf tambahan: Hamzah Washal dan dua Wawu bertasydid (وّ) sesudah ‘Ain.',
      'Mauzun kitab: اِعْلَوَّطَ يَعْلَوِّطُ اعْلِوَّاطًا.',
    ],
  },
  {
    id: 'amtsilah-mulhaq-tadahraja',
    titleArabic: 'مَزِيدُ الرُّبَاعِيِّ بِحَرْفٍ: تَفَعْلَلَ يَتَفَعْلَلُ (تَدَحْرَجَ)',
    titleIndo: "Ruba'i Mazid 1 Huruf (تَفَعْلَلَ - يَتَفَعْلَلُ / تَدَحْرَجَ)",
    contentArabic:
      'يُنْقَلُ الرُّبَاعِيُّ إِلَى وَزْنِ (تَفَعْلَلَ) بِزِيَادَةِ التَّاءِ فِي أَوَّلِهِ:\n١- لِمُطَاوَعَةِ (فَعْلَلَ) نَحْوُ: دَحْرَجْتُ الْحَجَرَ فَتَدَحْرَجَ؛\n٢- وَلِمَعْنَى الْمُجَرَّدِ نَحْوُ: تَلَأْلَأَ الزُّجَاجُ.\nالْمَوْزُونُ فِي الْكِتَابِ:\n- الصَّحِيحُ: تَدَحْرَجَ يَتَدَحْرَجُ تَدَحْرُجًا وَمُتَدَحْرَجًا فَهُوَ مُتَدَحْرِجٌ وَذَاكَ مُتَدَحْرَجٌ، تَدَحْرَجْ لَا تَتَدَحْرَجْ مُتَدَحْرَجٌ مُتَدَحْرَجٌ.\n- الْمُضَاعَفُ: تَلَأْلَأَ يَتَلَأْلَأُ تَلَأْلُؤًا وَمُتَلَأْلَأً فَهُوَ مُتَلَأْلِئٌ وَذَاكَ مُتَلَأْلَأٌ.',
    translation:
      "Ruba'i Mazid satu huruf (menambah Ta’ di awal Ruba’i Mujarrad): تَفَعْلَلَ يَتَفَعْلَلُ تَفَعْلُلًا. Berfaedah muthawa’ah dari فَعْلَلَ (دَحْرَجْتُ الْحَجَرَ فَتَدَحْرَجَ = aku menggelindingkan batu lalu ia pun menggelinding) dan bermakna mujarrad seperti تَلَأْلَأَ الزُّجَاجُ (kaca itu berkilauan).",
    explanation:
      'Bagian ini terletak di baris bawah halaman PDF 17 (halaman cetak Arab 30–31), tepat setelah Ruba’i Mujarrad bertambah satu huruf.',
    keyPoints: [
      'Satu huruf tambahan pada Ruba’i: Ta’ di awal kata.',
      'Dua mauzun kitab: تَدَحْرَجَ (shahih) dan تَلَأْلَأَ (mudha’af).',
    ],
  },
  {
    id: 'amtsilah-mulhaq-tadahraja-7',
    titleArabic: 'الْأَبْوَابُ السَّبْعَةُ الْمُلْحَقَةُ بِتَدَحْرَجَ',
    titleIndo: 'Tujuh Bab Mulhaq bi Tadahraja (تَجَلْبَبَ – تَسَلْقَى)',
    contentArabic:
      'يُلْحَقُ الثُّلَاثِيُّ بِـ(تَدَحْرَجَ): ١- لِمُطَاوَعَةِ مُلْحَقِ دَحْرَجَ نَحْوُ: جَلْبَبْتُ زَيْدًا فَتَجَلْبَبَ وَجَوْرَبْتُهُ فَتَجَوْرَبَ؛ ٢- وَلِلتَّشْبِيهِ لِأَصْلِ الْفِعْلِ نَحْوُ: تَشَيْطَنَ عَمْرٌو أَيْ فَعَلَ فِعْلَ الشَّيْطَانِ.\nأَبْوَابُهُ السَّبْعَةُ فِي الْكِتَابِ:\n١. (تَفَعْلَلَ): تَجَلْبَبَ يَتَجَلْبَبُ تَجَلْبُبًا.\n٢. (تَفَوْعَلَ): تَجَوْرَبَ يَتَجَوْرَبُ تَجَوْرُبًا.\n٣. (تَمَفْعَلَ): تَمَسْكَنَ يَتَمَسْكَنُ تَمَسْكُنًا.\n٤. (تَفَيْعَلَ): تَشَيْطَنَ يَتَشَيْطَنُ تَشَيْطُنًا.\n٥. (تَفَعْوَلَ): تَرَهْوَكَ يَتَرَهْوَكُ تَرَهْوُكًا.\n٦. (تَفَعْيَلَ): تَشَرْيَفَ يَتَشَرْيَفُ تَشَرْيُفًا.\n٧. (تَفَعْلَى): تَسَلْقَى يَتَسَلْقَى تَسَلْقِيًا.',
    translation:
      'Tujuh bab Tsulatsi yang di-ilhaq-kan dengan تَدَحْرَجَ pada halaman PDF 18 (halaman cetak Arab 32–33): (1) تَجَلْبَبَ (berbaju kurung), (2) تَجَوْرَبَ (berkaus kaki), (3) تَمَسْكَنَ (bersikap rendah/miskin), (4) تَشَيْطَنَ (berperilaku seperti setan), (5) تَرَهْوَكَ (berjalan gemulai), (6) تَشَرْيَفَ (tumbuh tinggi), dan (7) تَسَلْقَى (berbaring terlentang).',
    explanation:
      'Berfaedah muthawa’ah dari mulhaq dahraja dan menyerupai sifat akar kata (tasybih), seluruhnya mengikuti pola تَفَعْلَلَ dalam harakat dan sukunnya.',
    keyPoints: [
      'Catatan urutan wazan ke-3 di kitab: تَمَفْعَلَ (تَمَسْكَنَ) memakai Mim tambahan di depan.',
      'Ketujuhnya seluruhnya tercatat utuh pada halaman PDF 18.',
    ],
  },
  {
    id: 'amtsilah-mulhaq-ihranjama',
    titleArabic: 'مَزِيدُ الرُّبَاعِيِّ بِحَرْفَيْنِ: اِفْعَنْلَلَ يَفْعَنْلِلُ (اِحْرَنْجَمَ)',
    titleIndo: "Ruba'i Mazid 2 Huruf Bab 1 (اِفْعَنْلَلَ - يَفْعَنْلِلُ / اِحْرَنْجَمَ)",
    contentArabic:
      'يُنْقَلُ الرُّبَاعِيُّ إِلَى وَزْنِ (اِفْعَنْلَلَ) بِزِيَادَةِ هَمْزَةِ الْوَصْلِ وَالنُّونِ بَعْدَ الْعَيْنِ:\n١- لِمُطَاوَعَةِ (فَعْلَلَ) نَحْوُ: حَرْجَمْتُ الْإِبِلَ فَاحْرَنْجَمَ.\nالْمَوْزُونُ: اِحْرَنْجَمَ يَحْرَنْجِمُ احْرِنْجَامًا وَمُحْرَنْجَمًا فَهُوَ مُحْرَنْجِمٌ وَذَاكَ مُحْرَنْجَمٌ، اِحْرَنْجِمْ لَا تَحْرَنْجِمْ مُحْرَنْجَمٌ مُحْرَنْجَمٌ.',
    translation:
      "Ruba'i Mazid dua huruf pertama: اِفْعَنْلَلَ يَفْعَنْلِلُ افْعِنْلَالًا (menambah Hamzah Washal di awal dan Nun sukun sesudah ‘Ain). Berfaedah muthawa’ah dari فَعْلَلَ, contoh: حَرْجَمْتُ الْإِبِلَ فَاحْرَنْجَمَ (aku mengumpulkan unta-unta itu, lalu mereka pun berdesakan berkumpul).",
    explanation:
      'Terletak di bagian atas halaman PDF 19 (halaman cetak Arab 34–35), membuka tiga bagian penutup Tashrif Istilahi.',
    keyPoints: [
      'Tambahan pada Ruba’i: Hamzah Washal awal + Nun sesudah ‘Ain.',
      'Mauzun: اِحْرَنْجَمَ يَحْرَنْجِمُ احْرِنْجَامًا.',
    ],
  },
  {
    id: 'amtsilah-mulhaq-ihranjama-2',
    titleArabic: 'بَابَا الْمُلْحَقِ بِاحْرَنْجَمَ (اِقْعَنْسَسَ وَاسْلَنْقَى)',
    titleIndo: 'Dua Bab Mulhaq bi Ihranjama (اِقْعَنْسَسَ & اِسْلَنْقَى)',
    contentArabic:
      'يُلْحَقُ الثُّلَاثِيُّ بِـ(اِحْرَنْجَمَ) بِزِيَادَةِ هَمْزَةِ الْوَصْلِ وَالنُّونِ بَعْدَ الْعَيْنِ وَتَضْعِيفِ اللَّامِ:\n١- لِمُطَاوَعَةِ اللَّازِمِ نَحْوُ: اِقْعَنْسَسَ الرَّجُلُ.\nالْبَابُ الْأَوَّلُ (اِفْعَنْلَلَ): اِقْعَنْسَسَ يَقْعَنْسِسُ اقْعِنْسَاسًا وَمُقْعَنْسَسًا فَهُوَ مُقْعَنْسِسٌ وَذَاكَ مُقْعَنْسَسٌ، اِقْعَنْسِسْ لَا تَقْعَنْسِسْ مُقْعَنْسَسٌ مُقْعَنْسَسٌ.\nالْبَابُ الثَّانِي (اِفْعَنْلَى): اِسْلَنْقَى يَسْلَنْقِي اسْلِنْقَاءً وَمُسْلَنْقًى فَهُوَ مُسْلَنْقٍ وَذَاكَ مُسْلَنْقًى، اِسْلَنْقِ لَا تَسْلَنْقِ مُسْلَنْقًى مُسْلَنْقًى.',
    translation:
      'Dua bab Mulhaq bi Ihranjama (kata tiga huruf asal ditambah huruf hingga menjadi enam huruf agar setimbang dengan اِحْرَنْجَمَ): (1) اِفْعَنْلَلَ pada mauzun اِقْعَنْسَسَ (membusungkan dada ke depan dan menarik punggung ke belakang), dan (2) اِفْعَنْلَى pada mauzun اِسْلَنْقَى (berbaring terlentang di atas punggungnya).',
    explanation:
      'Kedua wazan mulhaq ini berada di bagian tengah halaman PDF 19. Perhatikan bahwa اِقْعَنْسَسَ menggandakan Lam tanpa idgham karena adanya pemisah harakat.',
    keyPoints: [
      'Bab 1 Mulhaq: اِقْعَنْسَسَ (dengan menggandakan huruf akhir).',
      'Bab 2 Mulhaq: اِسْلَنْقَى (dengan menambahkan Ya’ di akhir menjadi Alif Maqshurah).',
    ],
  },
  {
    id: 'amtsilah-mulhaq-iqsyarra',
    titleArabic: 'مَزِيدُ الرُّبَاعِيِّ: اِفْعَلَلَّ يَفْعَلِلُّ (اِقْشَعَرَّ وَاطْمَأَنَّ) — خَاتِمَةُ الِاصْطِلَاحِيِّ',
    titleIndo: "Ruba'i Mazid 2 Huruf Bab 2 (اِفْعَلَلَّ / اِقْشَعَرَّ & اِطْمَأَنَّ — Penutup Istilahi)",
    contentArabic:
      'يُنْقَلُ الرُّبَاعِيُّ إِلَى وَزْنِ (اِفْعَلَلَّ) بِزِيَادَةِ هَمْزَةِ الْوَصْلِ وَتَضْعِيفِ اللَّامِ:\n١- لِمُبَالَغَةِ اللَّازِمِ نَحْوُ: اِقْشَعَرَّ الْجِلْدُ.\nالْمَوْزُونُ:\n- اِقْشَعَرَّ يَقْشَعِرُّ اقْشِعْرَارًا وَقُشَعْرِيرَةً وَمُقْشَعَرًّا فَهُوَ مُقْشَعِرٌّ وَذَاكَ مُقْشَعَرٌّ، اِقْشَعِرَّ لَا تَقْشَعِرَّ مُقْشَعَرٌّ مُقْشَعَرٌّ.\n- اِطْمَأَنَّ يَطْمَئِنُّ اطْمِئْنَانًا وَطُمَأْنِينَةً وَمُطْمَأَنًّا فَهُوَ مُطْمَئِنٌّ وَذَاكَ مُطْمَأَنٌّ، اِطْمَئِنَّ لَا تَطْمَئِنَّ مُطْمَأَنٌّ مُطْمَأَنٌّ.\nتَمَّ التَّصْرِيفُ الْاِصْطِلَاحِيُّ بِعَوْنِ الْمَلِكِ الْمَنَّانِ.',
    translation:
      'Wazan terakhir dalam bagian Tashrif Istilahi: اِفْعَلَلَّ يَفْعَلِلُّ افْعِلَّالًا (menambah Hamzah Washal di awal dan menggandakan Lam kedua menjadi tasydid di akhir) dengan dua contoh di halaman PDF 19: اِقْشَعَرَّ (kulitnya merinding hebat, masdarnya اقْشِعْرَارًا dan قُشَعْرِيرَةً) serta اِطْمَأَنَّ (hatinya tenteram tenang, masdarnya اطْمِئْنَانًا dan طُمَأْنِينَةً). Ditutup kalimat: "Telah sempurna bagian Tashrif Istilahi dengan pertolongan Allah Sang Maha Pemberi Karunia."',
    explanation:
      'Dengan selesainya wazan اِفْعَلَلَّ pada halaman PDF 19 (halaman Arab 35), tuntaslah seluruh bagian pertama kitab Amtsilah Tasrifiyah yaitu at-Tashrif al-Isthilahi.',
    keyPoints: [
      'Dua mauzun resmi: اِقْشَعَرَّ dan اِطْمَأَنَّ.',
      'Keduanya memiliki dua bentuk masdar yang sama-sama tercantum di tabel kitab.',
      'Menandai penutup resmi bagian Tashrif Istilahi sebelum memasuki Tashrif Lughawi.',
    ],
  },
  {
    id: 'amtsilah-lughawi-madhi',
    titleArabic: 'التَّصْرِيفُ اللُّغَوِيُّ — الْفِعْلُ الْمَاضِي الْمَبْنِيُّ لِلْفَاعِلِ',
    titleIndo: "Tashrif Lughawi: Fi'il Madhi Ma'lum (14 Dhamir)",
    contentArabic:
      'الْفِعْلُ الْمَاضِي الْمَبْنِيُّ لِلْفَاعِلِ الْمُتَّصِلُ بِضَمِيرِ رَفْعٍ:\nفَعَلَ (هُوَ مُقَدَّرٌ مُفْرَدٌ مُذَكَّرٌ غَائِبٌ)، فَعَلَا (أَلِفٌ تَثْنِيَةٌ)، فَعَلُوا (وَاوٌ جَمْعٌ)، فَعَلَتْ (هِيَ مُقَدَّرٌ مُفْرَدٌ مُؤَنَّثٌ غَائِبَةٌ)، فَعَلَتَا، فَعَلْنَ (نُونٌ)، فَعَلْتَ، فَعَلْتُمَا، فَعَلْتُمْ، فَعَلْتِ، فَعَلْتُمَا، فَعَلْتُنَّ، فَعَلْتُ، فَعَلْنَا.\nالْأَمْثِلَةُ فِي الْكِتَابِ:\nنَصَرَ، مَدَّ (مَدَدْتَ)، عَضَّ (عَضِضْتَ)، اِفْعَلَّ (اِفْعَلَلْتَ)، صَانَ (صُنْتَ)، بَاعَ (بِعْتَ)، خَافَ (خِفْتَ)، طَالَ (طُلْتَ)، غَزَا (غَزَوْتَ)، رَمَى (رَمَيْتَ)، رَضِيَ (رَضِيتَ)، سَرُوَ (سَرُوتَ).',
    translation:
      'Pembuka bagian kedua kitab (At-Tashrif al-Lughawi) di halaman PDF 20–21: konjugasi Fi’il Madhi Mabni lil-Fa’il (Ma’lum) bersambung dhamir rafa’ pada 14 posisi pelaku (3 gha’ib, 3 gha’ibah, 3 mukhatab, 3 mukhatabah, 2 mutakallim), disertai keterangan jenis dhamir/fa’ilnya dan contoh penerapan pada 12 variasi bina’ (نَصَرَ hingga سَرُوَ).',
    explanation:
      'Perhatikan kaidah i’lal dan penguraian idgham saat bertemu dhamir berharakat: مَدَّ terurai menjadi مَدَدْتَ; huruf ‘Ain pada صَانَ/طَالَ berubah menjadi dhommah (صُنْتَ، طُلْتَ) karena asalnya wawi; sedangkan بَاعَ/خَافَ berubah menjadi kasrah (بِعْتَ، خِفْتَ).',
    keyPoints: [
      'Menampilkan kolom penjelas dhamir di sisi tabel: هُوَ مُقَدَّرٌ، أَلِفٌ، وَاوٌ، هِيَ مُقَدَّرٌ، تَاءٌ، نَا.',
      'Dua belas contoh perubahan bina’ terbentang dari halaman PDF 20 hingga kolom kanan halaman PDF 21.',
    ],
  },
  {
    id: 'amtsilah-lughawi-madhi-majhul',
    titleArabic: 'التَّصْرِيفُ اللُّغَوِيُّ — الْفِعْلُ الْمَاضِي الْمَبْنِيُّ لِلْمَفْعُولِ',
    titleIndo: "Tashrif Lughawi: Fi'il Madhi Majhul (14 Dhamir)",
    contentArabic:
      'الْفِعْلُ الْمَاضِي الْمَبْنِيُّ لِلْمَفْعُولِ الْمُتَّصِلُ بِضَمِيرِ رَفْعٍ:\nفُعِلَ، فُعِلَا، فُعِلُوا، فُعِلَتْ، فُعِلَتَا، فُعِلْنَ، فُعِلْتَ، فُعِلْتُمَا، فُعِلْتُمْ، فُعِلْتِ، فُعِلْتُمَا، فُعِلْتُنَّ، فُعِلْتُ، فُعِلْنَا.\nالْأَمْثِلَةُ الْمُعْتَلَّةُ وَالْمُضَاعَفَةُ فِي الْكِتَابِ:\n- مُدَّ، مُدَّا، مُدُّوا، مُدَّتْ، مُدَّتَا، مُدِدْنَ، مُدِدْتَ...\n- صِينَ، صِينَا، صِينُوا، صِينَتْ، صِينَتَا، صُنَّ، صُنْتَ...\n- بِيعَ، بِيعَا، بِيعُوا، بِيعَتْ، بِيعَتَا، بِعْنَ، بِعْتَ...\n- غُزِيَ، غُزِيَا، غُزُوا، غُزِيَتْ، غُزِيَتَا، غُزِينَ، غُزِيتَ...',
    translation:
      'Tashrif Lughawi Fi’il Madhi Mabni lil-Maf’ul (Majhul/Pasif) bersama 14 dhamir pada halaman PDF 21 (halaman Arab 38–39): فُعِلَ (dia telah dikenai perbuatan) hingga فُعِلْنَا, disertai penerapan pada bina’ Mudha’af (مُدَّ -> مُدِدْنَ), Ajwaf Wawi (صِينَ -> صُنْتَ), Ajwaf Ya’i (بِيعَ -> بِعْتَ), dan Naqish (غُزِيَ -> غُزُوا).',
    explanation:
      'Pada bentuk majhul Ajwaf seperti صِينَ dan بِيعَ, huruf awal dikasrahkan sebelum Ya’ sukun pada dhamir gha’ib, namun saat huruf tengah hilang bertemu dhamir mutaharrik, صِينَ kembali berharakat dhommah (صُنْتَ) untuk membedakannya dari ma’lum dan menjaga kesesuaian wawi.',
    keyPoints: [
      'Pola dasar majhul madhi: فُعِلَ (dhommah awal, kasrah sebelum akhir).',
      'Contoh kitab PDF hal. 21: فُعِلَ، مُدَّ، صِينَ، بِيعَ، غُزِيَ.',
    ],
  },
  {
    id: 'amtsilah-lughawi-mudhari',
    titleArabic: 'التَّصْرِيفُ اللُّغَوِيُّ — الْفِعْلُ الْمُضَارِعُ الْمَبْنِيُّ لِلْفَاعِلِ',
    titleIndo: "Tashrif Lughawi: Fi'il Mudhari' Ma'lum (14 Dhamir)",
    contentArabic:
      'الْفِعْلُ الْمُضَارِعُ الْمَبْنِيُّ لِلْفَاعِلِ الْمُتَّصِلُ بِضَمِيرِ رَفْعٍ:\nيَفْعُلُ (هُوَ مُقَدَّرٌ)، يَفْعُلَانِ (أَلِفٌ)، يَفْعُلُونَ (وَاوٌ)، تَفْعُلُ (هِيَ مُقَدَّرٌ)، تَفْعُلَانِ، يَفْعُلْنَ (نُونٌ)، تَفْعُلُ (أَنْتَ مُقَدَّرٌ)، تَفْعُلَانِ، تَفْعُلُونَ، تَفْعُلِينَ (يَاءٌ)، تَفْعُلَانِ، تَفْعُلْنَ، أَفْعُلُ (أَنَا)، نَفْعُلُ (نَحْنُ).\nالْأَمْثِلَةُ فِي الْكِتَابِ:\nيَنْصُرُ، يَمُدُّ، يَعَضُّ، يَفْعَلُّ، يَصُونُ، يَبِيعُ، يَخَافُ، يَغْزُو، يَرْمِي، يَرْضَى.',
    translation:
      'Tashrif Lughawi Fi’il Mudhari’ Mabni lil-Fa’il (Ma’lum) bersama 14 dhamir pada halaman PDF 22 (halaman Arab 40–41): dimulai dengan wazan يَفْعُلُ disertai rincian fa’il di setiap baris, lalu diikuti sepuluh contoh ragam bina’: يَنْصُرُ، يَمُدُّ، يَعَضُّ، يَفْعَلُّ، يَصُونُ، يَبِيعُ، يَخَافُ، يَغْزُو، يَرْمِي، dan يَرْضَى.',
    explanation:
      'Lima shighah yang berakhiran huruf Nun tetap (يَفْعُلَانِ، تَفْعُلَانِ، يَفْعُلُونَ، تَفْعُلُونَ، تَفْعُلِينَ) merupakan Al-Af’al al-Khamsah, sedangkan dua shighah jamak muannats (يَفْعُلْنَ dan تَفْعُلْنَ) berstatus mabni di atas sukun karena bertemu Nun Niswah.',
    keyPoints: [
      'Menampilkan 10 kolom variasi bina’ termasuk Naqish Wawi (يَغْزُو), Naqish Ya’i (يَرْمِي), dan Naqish Ya’i berharakat fathah (يَرْضَى).',
      'Perhatikan perbedaan i’lal saat bertemu Nun Niswah: يَصُنَّ، يَبِعْنَ، يَخَفْنَ.',
    ],
  },
  {
    id: 'amtsilah-lughawi-mudhari-majhul',
    titleArabic: 'التَّصْرِيفُ اللُّغَوِيُّ — الْفِعْلُ الْمُضَارِعُ الْمَبْنِيُّ لِلْمَفْعُولِ',
    titleIndo: "Tashrif Lughawi: Fi'il Mudhari' Majhul (14 Dhamir)",
    contentArabic:
      'الْفِعْلُ الْمُضَارِعُ الْمَبْنِيُّ لِلْمَفْعُولِ الْمُتَّصِلُ بِضَمِيرِ رَفْعٍ:\nيُفْعَلُ، يُفْعَلَانِ، يُفْعَلُونَ، تُفْعَلُ، تُفْعَلَانِ، يُفْعَلْنَ، تُفْعَلُ، تُفْعَلَانِ، تُفْعَلُونَ، تُفْعَلِينَ، تُفْعَلَانِ، تُفْعَلْنَ، أُفْعَلُ، نُفْعَلُ.\nالْأَمْثِلَةُ فِي الْكِتَابِ:\nيُمَدُّ (يُمْدَدْنَ)، يُصَانُ (يُصَنَّ)، يُغْزَى (يُغْزَوْنَ، تُغْزَيْنَ، يُغْزَيَانِ).',
    translation:
      'Tashrif Lughawi Fi’il Mudhari’ Mabni lil-Maf’ul (Majhul/Pasif) bersama 14 dhamir pada sisi kanan halaman PDF 23 (halaman Arab 42): dimulai dari wazan يُفْعَلُ hingga نُفْعَلُ, diikuti contoh Mudha’af (يُمَدُّ), Ajwaf (يُصَانُ), dan Naqish (يُغْزَى).',
    explanation:
      'Ciri utama Mudhari’ Majhul adalah huruf mudhara’ahnya didhommah dan huruf sebelum akhir difathah. Pada Ajwaf (يُصَانُ), harakat fathah dipindahkan ke Shad lalu Wawu diganti Alif.',
    keyPoints: [
      'Rumus Mudhari’ Majhul: يُفْعَلُ (dhommah huruf pertama, fathah sebelum akhir).',
      'Tercantum jelas pada halaman PDF 23 kolom kanan.',
    ],
  },
  {
    id: 'amtsilah-nun-taukid',
    titleArabic: 'الْفِعْلُ الْمُضَارِعُ الْمُتَّصِلُ بِنُونِ التَّوْكِيدِ الثَّقِيلَةِ',
    titleIndo: "Mudhari' Ma'lum Bersambung Nun Taukid Tsaqilah (ّ)",
    contentArabic:
      'الْفِعْلُ الْمُضَارِعُ الْمَبْنِيُّ لِلْفَاعِلِ الْمُتَّصِلُ بِنُونِ التَّوْكِيدِ الثَّقِيلَةِ:\n- يَصُونَنَّ، يَصُونَانِّ، يَصُونُنَّ، تَصُونَنَّ، تَصُونَانِّ، يَصُنَّانِّ، تَصُونَنَّ، تَصُونَانِّ، تَصُونُنَّ، تَصُونِنَّ، تَصُونَانِّ، تَصُنَّانِّ، أَصُونَنَّ، نَصُونَنَّ.\n- يَغْزُوَنَّ، يَغْزُوَانِّ، يَغْزُنَّ، تَغْزُوَنَّ، تَغْزُوَانِّ، يَغْزُونَانِّ...\n- يَرْمِيَنَّ، يَرْمِيَانِّ، يَرْمُنَّ، تَرْمِيَنَّ، تَرْمِيَانِّ، يَرْمِينَانِّ...\n- يَرْضَيَنَّ، يَرْضَيَانِّ، يَرْضَوُنَّ، تَرْضَيَنَّ، تَرْمِيَانِّ، يَرْضَيْنَانِّ...',
    translation:
      'Tashrif Fi’il Mudhari’ Ma’lum yang dipertegas dengan Nun Taukid Tsaqilah (Nun bertasydid) di halaman PDF 23 sisi kiri (halaman Arab 43). Kitab mencontohkannya pada empat fi’il mu’tal yang sarat kaidah perubahan akhir: يَصُونَنَّ (Ajwaf), يَغْزُوَنَّ (Naqish Wawi), يَرْمِيَنَّ (Naqish Ya’i), dan يَرْضَيَنَّ (Naqish berakhiran Alif).',
    explanation:
      'Ketika Nun Taukid Tsaqilah masuk pada Af’alul Khamsah, Nun rafa’ dibuang agar tidak menumpuk tiga huruf Nun; sementara pada tatsniyah dan jamak muannats disisipkan Alif Fashilah sehingga Nun taukidnya berharakat kasrah (انِّ).',
    keyPoints: [
      'Menempati 14 posisi dhamir secara lengkap.',
      'Pada jamak muannats disisipkan Alif pemisah antara Nun Niswah dan Nun Taukid: يَغْزُونَانِّ.',
    ],
  },
  {
    id: 'amtsilah-nun-taukid-khafifah',
    titleArabic: 'الْفِعْلُ الْمُضَارِعُ الْمُؤَكَّدُ بِنُونِ التَّوْكِيدِ الْخَفِيفَةِ',
    titleIndo: "Mudhari' Ma'lum Bersambung Nun Taukid Khafifah (ْ)",
    contentArabic:
      'الْفِعْلُ الْمُضَارِعُ الْمَبْنِيُّ لِلْفَاعِلِ الْمُؤَكَّدُ بِنُونِ التَّوْكِيدِ الْخَفِيفَةِ (٨ مَوَاضِعَ):\n- يَغْزُوَنْ، (—)، يَغْزُنْ، تَغْزُوَنْ، (—)، (—)، تَغْزُوَنْ، (—)، تَغْزُنْ، تَغْزِنْ، (—)، (—)، أَغْزُوَنْ، نَغْزُوَنْ.\n- يَرْمِيَنْ، يَرْمُنْ، تَرْمِيَنْ، تَرْمُنْ، تَرْمِنْ، أَرْمِيَنْ، نَرْمِيَنْ.\n- يَرْضَيَنْ، يَرْضَوُنْ، تَرْضَيَنْ، تَرْضَوُنْ، تَرْضَيِنْ، أَرْضَيَنْ، نَرْضَيَنْ.',
    translation:
      'Tashrif Fi’il Mudhari’ dengan Nun Taukid Khafifah (Nun sukun) di sisi kanan halaman PDF 24 (halaman Arab 44). Kitab secara visual memberi tanda garis kosong (—) pada kolom tatsniyah dan jamak muannats karena Nun Khafifah hanya berlaku pada 8 posisi (mufrad mudzakkar/muannats, jamak mudzakkar, dan dua mutakallim).',
    explanation:
      'Alasan terlarangnya Nun Khafifah pada tatsniyah dan jamak muannats adalah bertemunya dua huruf sukun secara terlarang (Alif tatsniyah / Alif fashilah yang sukun bertemu dengan Nun Khafifah yang juga sukun).',
    keyPoints: [
      'Hanya berlaku pada 8 dari 14 posisi dhamir.',
      'Tiga mauzun kitab pada halaman PDF 24: يَغْزُوَنْ، يَرْمِيَنْ، يَرْضَيَنْ.',
    ],
  },
  {
    id: 'amtsilah-amr-nahyi',
    titleArabic: 'فِعْلُ الْأَمْرِ الْمَبْنِيُّ لِلْفَاعِلِ لِلْغَائِبِ وَالْحَاضِرِ',
    titleIndo: "Fi'il Amr Ma'lum Gha'ib & Hadhir (لِيَفْعُلْ / اُفْعُلْ)",
    contentArabic:
      'فِعْلُ الْأَمْرِ الْمَبْنِيُّ لِلْفَاعِلِ لِلْغَائِبِ وَالْحَاضِرِ:\n- لِلْغَائِبِ (بِلَامِ الْأَمْرِ): لِيَفْعُلْ، لِيَفْعُلَا، لِيَفْعُلُوا، لِتَفْعُلْ، لِتَفْعُلَا، لِيَفْعُلْنَ.\n- لِلْحَاضِرِ (الْمُخَاطَبِ): اُفْعُلْ، اُفْعُلَا، اُفْعُلُوا، اُفْعُلِي، اُفْعُلَا، اُفْعُلْنَ.\nالْأَمْثِلَةُ الْمُتَنَوِّعَةُ فِي الْكِتَابِ:\nلِيَمُدَّ / مُدَّ، لِيَفِرَّ / فِرَّ، لِيَعَضَّ / عَضَّ، لِيَعِدْ / عِدْ، لِيَصُنْ / صُنْ، لِيَبِعْ / بِعْ، لِيَخَفْ / خَفْ، لِيَغْزُ / اُغْزُ، لِيَفِ / فِ، لِيَرَ / رَ.',
    translation:
      'Tashrif Fi’il Amr Ma’lum untuk orang ketiga/gha’ib (memakai Lam Amr) dan orang kedua/hadhir pada halaman PDF 24 (halaman Arab 44–45). Mencakup 11 contoh perubahan kata pada berbagai bina’: لِيَفْعُلْ / اُفْعُلْ, لِيَمُدَّ / مُدَّ, لِيَفِرَّ / فِرَّ, لِيَعَضَّ / عَضَّ, لِيَعِدْ / عِدْ, لِيَصُنْ / صُنْ, لِيَبِعْ / بِعْ, لِيَخَفْ / خَفْ, لِيَغْزُ / اُغْزُ, لِيَفِ / فِ (dari وَفَى), dan لِيَرَ / رَ (dari رَأَى).',
    explanation:
      'Amr untuk Gha’ib menggunakan Lam Amr yang menjazmkan Fi’il Mudhari’ (لِيَفْعُلْ), sedangkan Amr untuk Hadhir dibentuk dengan membuang huruf mudhara’ah.',
    keyPoints: [
      'Menampilkan 12 posisi: 6 Gha’ib/Gha’ibah (pakai لِـ) dan 6 Hadhir/Mukhatabah.',
      'Pada Lafif Mafruq وَفَى dan Mahmuz-Naqish رَأَى, fi’il amr hadirnya tinggal 1 huruf: فِ dan رَ.',
    ],
  },
  {
    id: 'amtsilah-amr-majhul',
    titleArabic: 'فِعْلُ الْأَمْرِ الْمَبْنِيُّ لِلْمَفْعُولِ',
    titleIndo: "Fi'il Amr Mabni lil-Maf'ul (لِيُرْمَ / لِيُبَعْ / لِيُولَدْ)",
    contentArabic:
      'فِعْلُ الْأَمْرِ الْمَبْنِيُّ لِلْمَفْعُولِ (١٤ ضَمِيرًا بِلَامِ الْأَمْرِ):\n- لِيُرْمَ، لِيُرْمَيَا، لِيُرْمَوْا، لِتُرْمَ، لِتُرْمَيَا، لِيُرْمَيْنَ، لِتُرْمَ، لِتُرْمَيَا، لِتُرْمَوْا، لِتُرْمَيْ، لِتُرْمَيَا، لِتُرْمَيْنَ، لِأُرْمَ، لِنُرْمَ.\n- لِيُبَعْ، لِيُبَاعَا، لِيُبَاعُوا، لِتُبَعْ، لِتُبَاعَا، لِيُبَعْنَ، لِتُبَعْ...\n- لِيُولَدْ، لِيُولَدَا، لِيُولَدُوا، لِتُولَدْ، لِتُولَدَا، لِيُولَدْنَ، لِتُولَدْ...',
    translation:
      'Tashrif Fi’il Amr Mabni lil-Maf’ul (Perintah Pasif) untuk seluruh 14 dhamir dengan Lam Amr pada sisi kanan halaman PDF 25 (halaman Arab 46). Dicontohkan dalam kitab dengan tiga kata kerja: لِيُرْمَ (hendaknya ia dilempar), لِيُبَعْ (hendaknya ia dijual), dan لِيُولَدْ (hendaknya ia dilahirkan).',
    explanation:
      'Berbeda dengan Amr Ma’lum yang hanya 12 posisi (Gha’ib dan Hadhir), Amr Majhul mencakup 14 posisi lengkap termasuk Mutakallim (لِأُرْمَ dan لِنُرْمَ).',
    keyPoints: [
      'Memakai Lam Amr di depan Mudhari’ Majhul yang dijazmkan.',
      'Mencakup seluruh 14 dhamir termasuk Mutakallim (لِأُ... / لِنُ...).',
    ],
  },
  {
    id: 'amtsilah-amr-taukid-tsaqilah',
    titleArabic: 'فِعْلُ الْأَمْرِ الْمُؤَكَّدُ بِنُونِ التَّوْكِيدِ الثَّقِيلَةِ',
    titleIndo: "Fi'il Amr Mu'akkad Nun Taukid Tsaqilah (لِيَقَعَنَّ / قَعَنَّ)",
    contentArabic:
      'فِعْلُ الْأَمْرِ الْمُؤَكَّدُ بِنُونِ التَّوْكِيدِ الثَّقِيلَةِ:\n- لِيَقَعَنَّ، لِيَقَعَانِّ، لِيَقَعُنَّ، لِتَقَعَنَّ، لِتَقَعَانِّ، لِيَقَعْنَانِّ، قَعَنَّ، قَعَانِّ، قَعُنَّ، قَعِنَّ، قَعَانِّ، قَعْنَانِّ.\n- وَمِنْ أَمْثِلَتِهِ فِي الْكِتَابِ: لِيَعِدَنَّ / عِدَنَّ، لِيَصُونَنَّ / صُونَنَّ، لِيَبِيعَنَّ / بِيعَنَّ، لِيَخَافَنَّ / خَافَنَّ، لِيَغْزُوَنَّ / اُغْزُوَنَّ، لِيَرْمِيَنَّ / اِرْمِيَنَّ، لِيَرْضَيَنَّ / اِرْضَيَنَّ.',
    translation:
      'Tashrif Fi’il Amr yang diperkuat dengan Nun Taukid Tsaqilah (12 posisi Gha’ib & Hadhir) pada halaman PDF 25 (halaman Arab 46–47). Memuat 8 mauzun: لِيَقَعَنَّ، لِيَعِدَنَّ، لِيَصُونَنَّ، لِيَبِيعَنَّ، لِيَخَافَنَّ، لِيَغْزُوَنَّ، لِيَرْمِيَنَّ، dan لِيَرْضَيَنَّ.',
    explanation:
      'Perhatikan kaidah indah pada huruf illat yang tadinya terbuang di Fi’il Amr mufrad (seperti صُنْ، بِعْ، خَفْ، اُغْزُ، اِرْمِ): ketika Nun Taukid masuk, huruf illat tersebut kembali muncul karena baris akhir menjadi berharakat fathah: صُونَنَّ، بِيعَنَّ، خَافَنَّ، اُغْزُوَنَّ، اِرْمِيَنَّ!',
    keyPoints: [
      'Huruf ‘illat yang terbuang di Amr (صُنْ، بِعْ، اِرْمِ) dikembalikan saat masuk Nun Taukid (صُونَنَّ، بِيعَنَّ، اِرْمِيَنَّ).',
      'Delapan mauzun lengkap tercantum pada halaman PDF 25.',
    ],
  },
  {
    id: 'amtsilah-amr-taukid-khafifah',
    titleArabic: 'فِعْلُ الْأَمْرِ الْمَبْنِيُّ لِلْفَاعِلِ الْمُؤَكَّدُ بِنُونِ التَّوْكِيدِ الْخَفِيفَةِ',
    titleIndo: "Fi'il Amr Mu'akkad Nun Taukid Khafifah (لِيَلِيَنْ / رَيَنْ)",
    contentArabic:
      'فِعْلُ الْأَمْرِ الْمَبْنِيُّ لِلْفَاعِلِ الْمُؤَكَّدُ بِنُونِ التَّوْكِيدِ الْخَفِيفَةِ:\n- مِنْ (وَلِيَ): لِيَلِيَنْ، لِيَلُنْ، لِتَلِيَنْ، لِنْ، لُنْ، لِنْ.\n- مِنْ (رَأَى): لِيَرَيَنْ، لِيَرَوُنْ، لِتَرَيَنْ، رَيَنْ، رَوُنْ، رَيِنْ.',
    translation:
      'Tashrif Fi’il Amr Ma’lum yang dipertegas dengan Nun Taukid Khafifah di kolom paling kanan halaman PDF 26 (halaman Arab 48). Hanya berlaku pada 6 posisi (tanpa tatsniyah dan jamak muannats), dengan contoh unik dari fi’il yang hanya tersisa satu huruf pada amr mutlaknya: وَلِيَ (لِ -> لِنْ / لِيَلِيَنْ) dan رَأَى (رَ -> رَيَنْ / لِيَرَيَنْ).',
    explanation:
      'Bentuk ringkas لِنْ، لُنْ، لِنْ berasal dari وَفَى/وَلِيَ (fi’il amr aslinya لِ lalu bertemu nun khafifah menjadi لِنْ).',
    keyPoints: [
      'Hanya mengisi 6 posisi (3 Gha’ib dan 3 Hadhir tanpa tatsniyah & jamak muannats).',
      'Menampilkan contoh ringkas yang sangat jarang ditemukan: لِيَلِيَنْ / لِنْ dan لِيَرَيَنْ / رَيَنْ.',
    ],
  },
  {
    id: 'amtsilah-fiil-nahyi',
    titleArabic: 'فِعْلُ النَّهْيِ الْمُتَّصِلُ بِضَمِيرِ رَفْعٍ',
    titleIndo: "Fi'il Nahyi Muttashil bi Dhamir Rafa' (لَا يَفْعَلْ / لَا تَضْرِبْ)",
    contentArabic:
      'فِعْلُ النَّهْيِ الْمُتَّصِلُ بِضَمِيرِ رَفْعٍ:\n- لَا يَفْعَلْ، لَا يَفْعَلَا، لَا يَفْعَلُوا، لَا تَفْعَلْ، لَا تَفْعَلَا، لَا يَفْعَلْنَ، لَا تَفْعَلْ، لَا تَفْعَلَا، لَا تَفْعَلُوا، لَا تَفْعَلِي، لَا تَفْعَلَا، لَا تَفْعَلْنَ.\nالْأَمْثِلَةُ فِي الْكِتَابِ:\n- لَا يَفْعَلَلْ (رُبَاعِيٌّ / اِفْعَلَلَّ)\n- لَا يَضْرِبْ، لَا يَضْرِبَا، لَا يَضْرِبُوا، لَا تَضْرِبْ...\n- لَا يَنْقَدْ، لَا يَنْقَادَا، لَا يَنْقَادُوا...\n- لَا يَخْشَ، لَا يَخْشَيَا، لَا يَخْشَوْا، لَا تَخْشَ...',
    translation:
      'Tashrif Fi’il Nahyi (kata kerja larangan dengan Laa an-Nahiyah al-Jazimah) untuk 12 posisi Gha’ib dan Hadhir pada halaman PDF 26 (halaman Arab 48–49). Kitab menampilkan lima kolom mauzun: لَا يَفْعَلْ, لَا يَفْعَلَلْ (contoh penguraian idgham saat jazm), لَا يَضْرِبْ (Shahih), لَا يَنْقَدْ (Ajwaf Bab Infa’ala), dan لَا يَخْشَ (Naqish dengan pembuangan huruf ‘illat akhir).',
    explanation:
      'Pada Fi’il Nahyi, huruf Laa berfungsi menjazmkan Fi’il Mudhari’ baik secara sukun (لَا تَضْرِبْ), pembuangan huruf ‘illat (لَا تَخْشَ), maupun pembuangan Nun pada Af’alul Khamsah (لَا تَضْرِبُوا).',
    keyPoints: [
      'Menampilkan 12 posisi (6 Gha’ib/Gha’ibah + 6 Hadhir/Mukhatabah).',
      'Contoh Mudha’af majzum terurai pada kolom wazan: لَا يَفْعَلَلْ.',
      'Pada Naqish huruf ‘illat dibuang saat mufrad: لَا يَخْشَ، لَا تَخْشَ.',
    ],
  },
  {
    id: 'amtsilah-dhamir-manshub',
    titleArabic: 'الضَّمِيرُ الْمَنْصُوبُ الْمُتَّصِلُ بِالْفِعْلِ الْمَاضِي وَالْفِعْلِ الْمُضَارِعِ',
    titleIndo: "Dhamir Manshub Muttashil pada Fi'il (ضَرَبَهُ / ضَرَبْتُمُوهُ / يَضْرِبُهُ)",
    contentArabic:
      'الضَّمِيرُ الْمَنْصُوبُ الْمُتَّصِلُ بِالْفِعْلِ الْمَاضِي وَالْمُضَارِعِ:\n١. الْمَاضِي الْمُفْرَدُ: ضَرَبَهُ، ضَرَبَهُمَا، ضَرَبَهُمْ، ضَرَبَهَا، ضَرَبَهُمَا، ضَرَبَهُنَّ، ضَرَبَكَ، ضَرَبَكُمَا، ضَرَبَكُمْ، ضَرَبَكِ، ضَرَبَكُمَا، ضَرَبَكُنَّ، ضَرَبَنِي، ضَرَبَنَا.\n٢. الْمَاضِي مَعَ تَاءِ الْجَمْعِ (ضَرَبْتُمُوهُ): ضَرَبْتُمُوهُ، ضَرَبْتُمُوهُمَا، ضَرَبْتُمُوهُمْ، ضَرَبْتُمُوهَا، ضَرَبْتُمُوهُنَّ، ضَرَبْتُمُونِي، ضَرَبْتُمُونَا (بِوَاوِ الْإِشْبَاعِ).\n٣. الْفِعْلُ الْمُضَارِعُ: يَضْرِبُهُ، يَضْرِبُهُمَا، يَضْرِبُهُمْ، يَضْرِبُهَا، يَضْرِبُكَ، يَضْرِبُكُمْ، يَضْرِبُنِي، يَضْرِبُنَا.',
    translation:
      'Tashrif 14 Dhamir Manshub Muttashil (kata ganti objek yang menempel langsung pada kata kerja) di sisi kiri halaman PDF 26 (halaman Arab 49). Kitab memajang tiga kolom lengkap: bersama madhi mufrad (ضَرَبَهُ = dia memukulnya), bersama madhi jamak mukhatab (ضَرَبْتُمُوهُ = kalian memukulnya, dengan tambahan Wawu penyambung setelah Mim jamak), dan bersama mudhari’ (يَضْرِبُهُ = dia sedang memukulnya).',
    explanation:
      'Ketika dhamir مُخَاطَب jamak (ـتُمْ) bersambung dengan dhamir objek, Mim didhommahkan dan ditambah Wawu isyba’ (ضَرَبْتُمُوهُ). Dan sebelum Ya’ Mutakallim wajib disisipkan Nun Wiqayah (ضَرَبَنِي، يَضْرِبُنِي).',
    keyPoints: [
      'Dua kata kerja berderet di kolom ضَرَبَهُ (objek) dan ضَرَبْتُمُوهُ (pelaku jamak + objek).',
      'Nun Wiqayah wajib muncul sebelum Ya’ Mutakallim pada fi’il.',
    ],
  },
  {
    id: 'amtsilah-dhamir-muttashil-isyarah',
    titleArabic: 'الضَّمِيرُ الْمُتَّصِلُ (مَحَلُّ جَرٍّ وَنَصْبٍ وَرَفْعٍ) وَالْإِشَارَةُ',
    titleIndo: "Adh-Dhamir al-Muttashil (Jar/Nashab/Rafa') & Isim Isyarah",
    contentArabic:
      'الضَّمِيرُ الْمُتَّصِلُ وَالْمُنْفَصِلُ وَأَسْمَاءُ الْإِشَارَةِ (١٤ مَوْضِعًا):\n- مَحَلُّ جَرٍّ: بِهِ، بِهِمَا، بِهِمْ، بِهَا، بِهِمَا، بِهِنَّ، بِكَ، بِكُمَا، بِكُمْ، بِكِ، بِكُمَا، بِكُنَّ، بِي، بِنَا.\n- مَحَلُّ نَصْبٍ: إِيَّاهُ، إِيَّاهُمَا، إِيَّاهُمْ، إِيَّاهَا، إِيَّاهُمَا، إِيَّاهُنَّ، إِيَّاكَ، إِيَّاكُمَا، إِيَّاكُمْ، إِيَّاكِ، إِيَّاكُمَا، إِيَّاكُنَّ، إِيَّايَ، إِيَّانَا.\n- مَحَلُّ رَفْعٍ: هُوَ، هُمَا، هُمْ، هِيَ، هُمَا، هُنَّ، أَنْتَ، أَنْتُمَا، أَنْتُمْ، أَنْتِ، أَنْتُمَا، أَنْتُنَّ، أَنَا، نَحْنُ.\n- الْإِشَارَةُ: ذَا، ذَانِ، أُولَاءِ (لِلْمُذَكَّرِ)، تَا، تَانِ، أُولَاءِ (لِلْمُؤَنَّثِ).',
    translation:
      'Tabel perbandingan seluruh kata ganti (Dhamir) pada tiga kedudukan I’rab serta kata tunjuk (Isim Isyarah) di halaman PDF 27 sisi kanan (halaman Arab 50): (1) Mahal Jar bersambung dengan huruf Ba’ (بِهِ hingga بِنَا), (2) Mahal Nashab munfashil (إِيَّاهُ hingga إِيَّانَا), (3) Mahal Rafa’ munfashil (هُوَ hingga نَحْنُ), dan (4) Isim Isyarah pokok tanpa Ha’ tanbih (ذَا، ذَانِ، أُولَاءِ untuk mudzakkar; تَا، تَانِ، أُولَاءِ untuk muannats).',
    explanation:
      'Walaupun kepala kolom bertuliskan الضَّمِيرُ الْمُتَّصِلُ, tabel ini secara berpasangan mengkontraskan dhamir jar muttashil (بِهِ) dengan dhamir munfashil nashab (إِيَّاهُ), dhamir munfashil rafa’ (هُوَ), serta isim isyarah yang sesuai dengan dhamir gha’ib.',
    keyPoints: [
      'Menghimpun empat kolom sejajar: Mahal Jar (بِهِ), Mahal Nashab (إِيَّاهُ), Mahal Rafa’ (هُوَ), dan Isyarah (ذَا/تَا).',
      'Tertera lengkap di sisi kanan halaman PDF 27.',
    ],
  },
  {
    id: 'amtsilah-fail-maful',
    titleArabic: 'تَصْرِيفُ اسْمِ الْفَاعِلِ الْمَرْفُوعِ',
    titleIndo: "Isim Fa'il Marfu' (فَاعِلٌ / مَادٌّ / بَائِعٌ / غَازٍ / مُعْطٍ)",
    contentArabic:
      'اِسْمُ الْفَاعِلِ الْمَرْفُوعُ مَعَ ضَمَائِرِهِ:\n- فَاعِلٌ (هُوَ، أَنْتَ، أَنَا: مُفْرَدٌ مُذَكَّرٌ)، فَاعِلَانِ (هُمَا، أَنْتُمَا، نَحْنُ: تَثْنِيَةٌ مُذَكَّرٌ)، فَاعِلُونَ (هُمْ، أَنْتُمْ، نَحْنُ: جَمْعٌ مُذَكَّرٌ).\n- وَجَمْعُ التَّكْسِيرِ: فُعَّالٌ، وَفُعَّلٌ، وَفَعَلَةٌ.\n- الْمُؤَنَّثُ: فَاعِلَةٌ، فَاعِلَتَانِ، فَاعِلَاتٌ، وَفَوَاعِلُ (صِيغَةُ مُنْتَهَى الْجُمُوعِ).\nالْأَمْثِلَةُ فِي الْكِتَابِ:\nمَادٌّ، صَائِنٌ (ص. ٢٧)، بَائِعٌ، وَاعِدٌ، غَازٍ، وَاقٍ، مُعْلَوِّطٌ، مُعْطٍ (ص. ٢٨).',
    translation:
      "Tashrif Lughawi Isim Fa'il dalam keadaan Marfu' pada halaman PDF 27–28 (halaman Arab 51–52). Kitab merinci 10 baris bentuk (Mufrad, Tatsniyah, Jamak Mudzakkar Salim, 3 wazan Jamak Taksir مُذَكَّر: فُعَّالٌ/فُعَّلٌ/فَعَلَةٌ, Mufrad Muannats, Tatsniyah Muannats, Jamak Muannats Salim, serta Shighah Muntahal Jumu' فَوَاعِلُ) dan menerapkannya pada delapan mauzun lintas bina’ hingga fi’il mazid (مُعْطٍ، مُعْلَوِّطٌ).",
    explanation:
      'Perhatikan perbedaan pada Isim Manqush (غَازٍ، وَاقٍ، مُعْطٍ): huruf Ya’ akhir dibuang dan diganti tanwin kasrah ketika rafa’ dan nakirah, lalu muncul kembali pada bentuk tatsniyah (غَازِيَانِ) dan muannats (غَازِيَةٌ).',
    keyPoints: [
      'Menampilkan 10 baris lengkap beserta tabel dhamir yang cocok pada setiap barisnya.',
      'Delapan mauzun terbentang di PDF hal. 27–28.',
    ],
  },
  {
    id: 'amtsilah-isim-fail-manshub-majrur',
    titleArabic: 'تَصْرِيفُ اسْمِ الْفَاعِلِ الْمَنْصُوبِ وَالْمَجْرُورِ',
    titleIndo: "Isim Fa'il Manshub & Majrur (وَاقِيًا / غَازِيًا / وَاعِدٍ)",
    contentArabic:
      'اِسْمُ الْفَاعِلِ الْمَنْصُوبُ وَالْمَجْرُورُ:\n- الْمَنْصُوبُ (نَحْوُ وَاقِيًا وَغَازِيًا): وَاقِيًا، وَاقِيَيْنِ، وَاقِينَ، وَوُقَّاءً، وَوُقًّى، وَوُقَاةً؛ وَاقِيَةً، وَاقِيَتَيْنِ، وَاقِيَاتٍ، وَأَوَاقِيَ.\n- وَالْمَنْصُوبُ مِنْ غَازٍ: غَازِيًا، غَازِيَيْنِ، غَازِينَ، وَغُزَّاءً، وَغُزًّى، وَغُزَاةً؛ غَازِيَةً، غَازِيَتَيْنِ، غَازِيَاتٍ، وَغَوَازِيَ.\n- الْمَجْرُورُ (نَحْوُ وَاعِدٍ): وَاعِدٍ، وَاعِدَيْنِ، وَاعِدِينَ، وَوُعَّادٍ، وَوُعَّدٍ، وَوَعَدَةٍ؛ وَاعِدَةٍ، وَاعِدَتَيْنِ، وَاعِدَاتٍ، وَأَوَاعِدَ.',
    translation:
      "Tashrif Isim Fa'il dalam keadaan Manshub (objek) dan Majrur pada kolom tengah halaman PDF 28 (halaman Arab 53). Untuk Manshub dicontohkan melalui وَاقِيًا dan غَازِيًا (memunculkan kembali Ya’ berharakat fathah pada mufrad dan shighah muntahal jumu’ أَوَاقِيَ / غَوَازِيَ), sedangkan untuk Majrur dicontohkan melalui وَاعِدٍ dengan akhiran ـَيْنِ dan ـِينَ.",
    explanation:
      'Pada bentuk jamak taksir berpola فَوَاعِلُ (أَوَاقِيَ، غَوَازِيَ، أَوَاعِدَ), karena termasuk Isim Ghair Munsharif (Shighah Muntahal Jumu’), ia tidak bertanwin saat manshub dan ditandai fathah ketika majrur.',
    keyPoints: [
      'Isim Manqush manshub menampakkan huruf Ya’ dan fathah: وَاقِيًا / غَازِيًا.',
      'Pada Tatsniyah dan Jamak Mudzakkar Salim, Alif/Wawu berubah menjadi Ya’ (ـَيْنِ / ـِينَ) baik saat manshub maupun majrur.',
    ],
  },
  {
    id: 'amtsilah-isim-maful-marfu',
    titleArabic: 'تَصْرِيفُ اسْمِ الْمَفْعُولِ الْمَرْفُوعِ',
    titleIndo: "Isim Maf'ul Marfu' (مَفْعُولٌ / مَغْزُوٌّ / مُعْطًى)",
    contentArabic:
      'اِسْمُ الْمَفْعُولِ الْمَرْفُوعُ:\n- مَفْعُولٌ، مَفْعُولَانِ، مَفْعُولُونَ، وَمَفَاعِيلُ (صِيغَةُ مُنْتَهَى الْجُمُوعِ)؛ مَفْعُولَةٌ، مَفْعُولَتَانِ، مَفْعُولَاتٌ.\n- النَّاقِصُ الْوَاوِيُّ: مَغْزُوٌّ، مَغْزُوَّانِ، مَغْزُوُّونَ، وَمَغَازِيُ؛ مَغْزُوَّةٌ، مَغْزُوَّتَانِ، مَغْزُوَّاتٌ.\n- مَزِيدٌ نَاقِصٌ: مُعْطًى، مُعْطَيَانِ، مُعْطَوْنَ؛ مُعْطَاةٌ، مُعْطَاتَانِ، مُعْطَيَاتٌ.',
    translation:
      "Tashrif Isim Maf'ul dalam keadaan Marfu' di kolom paling kiri halaman PDF 28 (halaman Arab 53). Menampilkan wazan pokok مَفْعُولٌ bersama dua contoh mu’tal penting: مَغْزُوٌّ (Naqish Wawi yang mengidghamkan dua Wawu menjadi وّ) dan مُعْطًى (Mazid Naqish Isim Maqshur yang berakhiran Alif Maqshurah).",
    explanation:
      'Perhatikan perbedaan baris Isim Maf’ul dibanding Isim Fa’il: Isim Maf’ul hanya memiliki satu bentuk jamak taksir (مَفَاعِيلُ) dan tujuh variasi baku secara keseluruhan.',
    keyPoints: [
      'Tiga kolom mauzun di PDF hal. 28: مَفْعُولٌ، مَغْزُوٌّ، مُعْطًى.',
      'Pada Isim Maqshur jamak muannats salim, Alif kembali ke asalnya Ya’: مُعْطَيَاتٌ.',
    ],
  },
  {
    id: 'amtsilah-isim-maful-manshub-majrur',
    titleArabic: 'تَصْرِيفُ الِاسْمِ الْمَفْعُولِ الْمَنْصُوبِ وَالْمَجْرُورِ',
    titleIndo: "Isim Maf'ul Manshub & Majrur (مَمْدُودًا / مَصُونٍ)",
    contentArabic:
      'الِاسْمُ الْمَفْعُولُ الْمَنْصُوبُ وَالْمَجْرُورُ:\n- الْمَنْصُوبُ: مَمْدُودًا، مَمْدُودَيْنِ، مَمْدُودِينَ، وَمَمَادِيدَ؛ مَمْدُودَةً، مَمْدُودَتَيْنِ، مَمْدُودَاتٍ.\n- الْمَجْرُورُ: مَصُونٍ، مَصُونَيْنِ، مَصُونِينَ، وَمَصَانِينَ؛ مَصُونَةٍ، مَصُونَتَيْنِ، مَصُونَتَيْنِ/مَصُونَاتٍ.',
    translation:
      "Tashrif Isim Maf'ul dalam keadaan Manshub (مَمْدُودًا = yang dipanjangkan) dan Majrur (مَصُونٍ = yang dijaga) di kolom paling kanan halaman PDF 29 (halaman Arab 54).",
    explanation:
      'Perhatikan pada jamak muannats salim (مَمْدُودَاتٍ / مَصُونَاتٍ) tanda nashab dan tanda jar sama-sama menggunakan kasrah, sedangkan Shighah Muntahal Jumu’ (مَمَادِيدَ / مَصَانِينَ) bertanda fathah ketika manshub maupun majrur karena Ghair Munsharif.',
    keyPoints: [
      'Jamak Muannats Salim: مَمْدُودَاتٍ (nashab dengan kasrah).',
      'Shighah Muntahal Jumu’: مَمَادِيدَ dan مَصَانِينَ tanpa tanwin.',
    ],
  },
  {
    id: 'amtsilah-sifat-tafdhil',
    titleArabic: 'تَصْرِيفُ الصِّفَةِ الْمُشَبَّهَةِ الْمَرْفُوعَةِ',
    titleIndo: 'Shifah Musyabbahah Marfu’ah (حَسَنٌ / سَرِيٌّ / أَصْفَرُ / أَبْيَضُ / عَطْشَانُ)',
    contentArabic:
      'الصِّفَةُ الْمُشَبَّهَةُ الْمَرْفُوعَةُ:\n- حَسَنٌ، حَسَنَانِ، حَسَنُونَ، حِسَانٌ؛ حَسَنَةٌ، حَسَنَتَانِ، حَسَنَاتٌ، وَحِسَانٌ.\n- سَرِيٌّ، سَرِيَّانِ، (—)، سَرَاةٌ؛ سَرِيَّةٌ، سَرِيَّتَانِ، سَرِيَّاتٌ، وَسَرَاءٌ وَسَرَايَا.\n- أَصْفَرُ، أَصْفَرَانِ، (—)، صُفْرٌ؛ صَفْرَاءُ، صَفْرَاوَانِ، (—)، صُفْرٌ.\n- أَبْيَضُ، أَبْيَضَانِ، (—)، بِيضٌ؛ بَيْضَاءُ، بَيْضَاوَانِ، (—)، بِيضٌ.\n- عَطْشَانُ، عَطْشَانَانِ، (—)، عِطَاشٌ؛ عَطْشَى، عَطْشَيَانِ، (—)، عِطَاشٌ وَعِطَاشَى.',
    translation:
      'Tashrif Shifah Musyabbahah dalam keadaan Marfu’ pada halaman PDF 29 (halaman Arab 54–55). Kitab menyajikan lima wazan sifat lazim yang paling sering dipakai: حَسَنٌ (baik), سَرِيٌّ (mulia), أَصْفَرُ (kuning — muannats صَفْرَاءُ), أَبْيَضُ (putih — muannats بَيْضَاءُ), dan عَطْشَانُ (haus — muannats عَطْشَى).',
    explanation:
      'Catatan naskah asli: Di dalam kitab Amtsilah Tasrifiyah edisi asli ini tidak terdapat tabel terpisah untuk Isim Tafdhil, melainkan pembahasan langsung tertuju pada tabel Shifah Musyabbahah di halaman PDF 29 serta lanjutannya pada bagian Muhimmah di halaman PDF 30–31.',
    keyPoints: [
      'Wazan warna & fisik: أَفْعَلُ untuk mudzakkar, فَعْلَاءُ untuk muannats, dan jamak taksir فُعْلٌ.',
      'Pada jamak بِيضٌ asalnya بُيْضٌ lalu dhommah Ba’ diganti kasrah agar serasi dengan Ya’.',
      'Wazan فَعْلَانُ (عَطْشَانُ) berpasangan muannats فَعْلَى (عَطْشَى).',
    ],
  },
  {
    id: 'amtsilah-zaman-makan-alah',
    titleArabic: 'أَسْمَاءُ الزَّمَانِ وَالْمَكَانِ وَالْآلَةِ (وَاسْمُ الْمَكَانِ الدَّالُّ عَلَى الْكَثْرَةِ)',
    titleIndo: "Asma' az-Zaman, al-Makan, al-Alah & Ism al-Makan al-Katsrah",
    contentArabic:
      'أَسْمَاءُ الزَّمَانِ وَالْمَكَانِ وَالْآلَةِ:\n- أَسْمَاءُ الزَّمَانِ وَالْمَكَانِ: مَضْرِبٌ، مَضْرِبَانِ، مَضَارِبُ؛ مَمَدٌّ، مَمَدَّانِ، مَمَادُّ؛ مَغْزًى، مَغْزَيَانِ، مَغَازٍ.\n- أَسْمَاءُ الْآلَةِ: مِمَدٌّ، مِمَدَّانِ، مَمَادُّ؛ مِصْبَاحٌ، مِصْبَاحَانِ، مَصَابِيحُ؛ مِرْمًى، مِرْمَيَانِ، مَرَامٍ.\n- اِسْمُ الْمَكَانِ الدَّالُّ عَلَى الْكَثْرَةِ (وَزْنُ مَفْعَلَةٌ): مَأْسَدَةٌ، مَأْسَدَتَانِ، مَآسِدُ؛ مَدْرَسَةٌ، مَدْرَسَتَانِ، مَدَارِسُ.\n- اِسْمُ الْآلَةِ الثَّالِثُ (وَزْنُ مِفْعَلَةٌ): مِدَقَّةٌ، مِدَقَّتَانِ، مَدَاقُّ؛ مِكْنَسَةٌ، مِكْنَسَتَانِ، مَكَانِسُ؛ مِصْفَاةٌ، مِصْفَاتَانِ، مَصَافٍ.',
    translation:
      'Tabel empat serangkai di sisi kiri halaman PDF 29 (halaman Arab 55): (1) Isim Zaman & Makan (مَضْرِبٌ، مَمَدٌّ، مَغْزًى), (2) Isim Alat wazan مِفْعَلٌ dan مِفْعَالٌ (مِمَدٌّ، مِصْبَاحٌ، مِرْمًى), (3) Isim Makan yang menunjukkan makna banyaknya sesuatu di tempat itu berwazan مَفْعَلَةٌ (مَأْسَدَةٌ = tempat banyak singa, مَدْرَسَةٌ = tempat banyak belajar/sekolah), dan (4) Isim Alat berwazan مِفْعَلَةٌ (مِدَقَّةٌ alu penumbuk, مِكْنَسَةٌ sapu, مِصْفَاةٌ saringan).',
    explanation:
      'Keempat sub-tabel ini disusun berdampingan dengan pola mufrad, tatsniyah, dan jamak taksir (Shighah Muntahal Jumu’ مَفَاعِلُ / مَفَاعِيلُ).',
    keyPoints: [
      'Ismul Makan ad-Dall ‘alal Katsrah berwazan مَفْعَلَةٌ (فَعَلَ + مَـ + ة): مَأْسَدَةٌ، مَدْرَسَةٌ.',
      'Tiga pola baku Isim Alat diwakili oleh: مِمَدٌّ (مِفْعَلٌ), مِصْبَاحٌ (مِفْعَالٌ), dan مِكْنَسَةٌ (مِفْعَلَةٌ).',
    ],
  },
  {
    id: 'amtsilah-muhimmah-sifat',
    titleArabic: 'مُهِمَّةٌ: تَصْرِيفُ الصِّفَةِ الْمُشَبَّهَةِ الْمُعْتَلَّةِ وَالْمَهْمُوزَةِ',
    titleIndo: 'Muhimmah: Lanjutan Tashrif Shifah Musyabbahah (Hal. 30–31)',
    contentArabic:
      'مُهِمَّةٌ (تَتِمَّةُ تَصْرِيفِ الصِّفَةِ الْمُشَبَّهَةِ بِأَنْوَاعِهَا):\n- ص. ٣٠ يَمِينٌ: فَاءٍ (فَائِيَانِ، فَائُونَ)، رَاءٍ (رَائِيَانِ، رَاؤُونَ)، قَوِيٌّ (أَقْوِيَاءُ)، ضَخْمٌ (ضِخَامٌ)، شُجَاعٌ (شُجْعَانٌ)، طَوِيلٌ (طِوَالٌ).\n- ص. ٣٠ يَسَارٌ: رَيَّانُ (رِوَاءٌ، رَيَّا)، أَدِيبٌ (أُدَبَاءُ)، وَجِيهٌ (وُجَهَاءُ)، لَئِيمٌ (لُؤَمَاءُ)، بَطِيءٌ (بِطَاءٌ)، بَرِيءٌ (بُرَاءُ، بَرَايَا).\n- ص. ٣١ يَمِينٌ: جَبَانٌ (جُبَنَاءُ)، وَقُورٌ (وُقُرٌ)، وَجِلٌ (وَجِلُونَ)، وَجٍ (وَجُونَ)، مَيْمُونٌ (مَيْمُونُونَ).\nتَمَّتْ هَذِهِ الْأَمْثِلَةُ الْمُخْتَلِفَةُ بِعَوْنِ اللَّهِ الْمَلِكِ التَّوَّابِ. جَعَلَهَا اللَّهُ مَيْمُونَةً، وَغَفَرَ لِكَاتِبِهَا وَلِمُؤَلِّفِهَا وَلِجَمِيعِ الْمُسْلِمِينَ، آمِينَ.',
    translation:
      'Bagian "Muhimmah" pada halaman PDF 30–31 (halaman cetak Arab 56–58): pelengkap penting tasrif Shifah Musyabbahah dan ragam jamak taksirnya pada kata-kata mu’tal, mahmuz, dan shahih pilihan: فَاءٍ، رَاءٍ، قَوِيٌّ، ضَخْمٌ، شُجَاعٌ، طَوِيلٌ، رَيَّانُ، أَدِيبٌ، وَجِيهٌ، لَئِيمٌ، بَطِيءٌ، بَرِيءٌ، جَبَانٌ، وَقُورٌ، وَجِلٌ، وَجٍ، dan مَيْمُونٌ. Diakhiri doa khatam kitab di halaman cetak Arab 58.',
    explanation:
      'Banyak pembaca mengira kata "Muhimmah" di Fihris berisi kaidah i’lal teoritis, padahal di naskah fisik Amtsilah Tasrifiyah halaman 56–58 Arab, "Muhimmah" adalah tabel lanjutan mufrad-tatsniyah-jamak dari Shifah Musyabbahah yang variatif dan tidak beraturan jamaknya.',
    keyPoints: [
      'Memuat 17 kata sifat penting beserta jamak taksir mudzakkar dan muannats-nya.',
      'Menutup seluruh rangkaian tabel tashrif dengan kalimat doa khatam (تَمَّتْ هَذِهِ الْأَمْثِلَةُ الْمُخْتَلِفَةُ...).',
    ],
  },
  {
    id: 'amtsilah-aqsam-bina',
    titleArabic: 'تَقْسِيمُ الْأَبْنِيَةِ السَّبْعَةِ (الْحَاشِيَةُ الْجَانِبِيَّةُ لِلْجَدَاوِلِ)',
    titleIndo: "Pembagian 7 Bina' Kata (Catatan Tepi Halaman 4–19)",
    contentArabic:
      'أَقْسَامُ الْبِنَاءِ السَّبْعَةِ الْمَذْكُورَةُ فِي هَوَامِشِ جَدَاوِلِ التَّصْرِيفِ الِاصْطِلَاحِيِّ:\n١. الصَّحِيحُ: نَصَرَ، ضَرَبَ، فَتَحَ، عَلِمَ، حَسُنَ، حَسِبَ.\n٢. الْمُضَاعَفُ: مَدَّ، فَرَّ، عَضَّ.\n٣. الْمِثَالُ (وَاوِيٌّ وَيَائِيٌّ): وَعَدَ، يَسَرَ، وَضَعَ، وَجِلَ، يَبِسَ، وَجُهَ، يَمُنَ، وَمِقَ.\n٤. الْأَجْوَفُ (وَاوِيٌّ وَيَائِيٌّ): صَانَ، سَارَ، خَافَ، هَابَ، طَالَ.\n٥. النَّاقِصُ (وَاوِيٌّ وَيَائِيٌّ): غَزَا، سَرَى، رَضِيَ، خَشِيَ، سَرُوَ.\n٦. اللَّفِيفُ (مَفْرُوقٌ وَمَقْرُونٌ): وَقَى، شَوَى، وَجِيَ، قَوِيَ، رَوِيَ.\n٧. الْمَهْمُوزُ (فَاءٍ وَعَيْنٍ وَلَامٍ): أَمَلَ، أَدَمَ، نَشَأَ، أَثِمَ، بَئِسَ، بَرِئَ، أَدُبَ، لَؤُمَ، بَطُؤَ.',
    translation:
      'Klasifikasi 7 Bina’ (struktur huruf asal kata) sebagaimana tertulis pada kolom tepi sebelah kanan di sepanjang tabel Tashrif Istilahi (halaman PDF 4–19): (1) Shahih, (2) Mudha’af, (3) Mitsal (Wawi/Ya’i), (4) Ajwaf (Wawi/Ya’i), (5) Naqish (Wawi/Ya’i), (6) Lafif (Mafruq/Maqrun), dan (7) Mahmuz (Fa’/‘Ain/Lam).',
    explanation:
      'Di dalam naskah cetak Amtsilah Tasrifiyah, istilah-istilah Bina’ tidak ditulis sebagai bab teori tersendiri, melainkan selalu dicantumkan secara konsisten di tepi kanan setiap baris mauzun guna melatih santri mengidentifikasi jenis struktur kata.',
    keyPoints: [
      'Sumber langsung naskah: catatan kolom tepi kanan di halaman PDF 4–19.',
      'Memudahkan pengenalan alasan terjadinya perubahan i’lal atau idgham pada setiap mauzun.',
    ],
  },
  {
    id: 'amtsilah-muhimmah-ilal-idgham',
    titleArabic: 'قَوَاعِدُ الْإِعْلَالِ وَالْإِدْغَامِ الْمُقَرَّرَةُ فِي أَمْثِلَةِ الْكِتَابِ',
    titleIndo: "Kaidah Penunjang I'lal dan Hukum Idgham pada Tabel Amtsilah",
    contentArabic:
      'مُلَخَّصُ قَوَاعِدِ الْإِعْلَالِ وَالْإِدْغَامِ الْمُطَبَّقَةِ فِي أَمْثِلَةِ الْكِتَابِ:\n١. إِعْلَالُ الْقَلْبِ: إِذَا تَحَرَّكَتِ الْوَاوُ أَوِ الْيَاءُ وَانْفَتَحَ مَا قَبْلَهُمَا قُلِبَتَا أَلِفًا نَحْوُ: (صَانَ) أَصْلُهُ (صَوَنَ)، وَ(بَاعَ) أَصْلُهُ (بَيَعَ)، وَ(غَزَا) أَصْلُهُ (غَزَوَ).\n٢. إِعْلَالُ النَّقْلِ: نَقْلُ حَرَكَةِ حَرْفِ الْعِلَّةِ إِلَى الصَّحِيحِ السَّاكِنِ قَبْلَهُ نَحْوُ: (يَصُونُ) أَصْلُهُ (يَصْوُنُ)، وَ(يَبِيعُ) أَصْلُهُ (يَبْيِعُ).\n٣. إِعْلَالُ الْحَذْفِ: حَذْفُ الْعَيْنِ لِالْتِقَاءِ السَّاكِنَيْنِ نَحْوُ: (صُنْ، بِعْ، صُنْتَ، بِعْتَ)، وَحَذْفُ فَاءِ الْمِثَالِ الْوَاوِيِّ نَحْوُ: (وَعَدَ -> يَعِدُ).\n٤. أَحْكَامُ الْإِدْغَامِ فِي الْمُضَاعَفِ: وَاجِبٌ فِي نَحْوِ (مَدَّ يَمُدُّ)، وَمُمْتَنِعٌ عِنْدَ اتِّصَالِ ضَمِيرِ الرَّفْعِ الْمُتَحَرِّكِ نَحْوُ (مَدَدْتُ، مَدَدْنَا)، وَجَائِزٌ فِي الْجَزْمِ وَالْأَمْرِ نَحْوُ (لَمْ يَمُدَّ / لَمْ يَمْدُدْ، وَمُدَّ / اُمْدُدْ).',
    translation:
      'Ringkasan kaidah penunjang I’lal dan Idgham yang melandasi perubahan-perubahan kata pada tabel Tashrif Istilahi dan Lughawi (seperti صَانَ, بَاعَ, مَدَّ, dan وَعَدَ): (1) I’lal Qalb (mengganti Wawu/Ya’ berharakat setelah fathah menjadi Alif), (2) I’lal Naql (memindahkan harakat huruf ‘illat ke huruf shahih sukun sebelumnya), (3) I’lal Hadzf (membuang huruf ‘illat saat bertemu dua sukun atau Wawu pada Mitsal), dan (4) Tiga hukum Idgham pada Mudha’af (Wajib, Mumtani’/Terurai saat bertemu dhamir rafa’ mutaharrik, dan Jaiz saat jazm/amr).',
    explanation:
      'Catatan transparansi: Penjelasan kaidah I’lal dan Idgham dalam bentuk poin-poin ini merupakan uraian penunjang yang dirangkum dari penerapan nyata contoh-contoh dalam kitab (bukan teks narasi terpisah di dalam kitab Amtsilah), serta tetap dipertahankan sebagai rujukan topik latihan soal.',
    keyPoints: [
      'Materi penunjang analisis perubahan kata yang terjadi pada PDF hal. 4–26.',
      'Wajib Idgham (مَدَّ), Mumtani’/Fakkul Idgham (مَدَدْتُ), Jaiz Idgham (لَمْ يَمُدَّ / لَمْ يَمْدُدْ).',
    ],
  },
  {
    id: 'amtsilah-tadzyil',
    titleArabic: 'تَذْيِيلٌ — تَرْجَمَةُ الْمُؤَلِّفِ الشَّيْخِ مَعْصُوم عَلِي وَمُؤَلَّفَاتُهُ',
    titleIndo: "Tadzyil: Biografi Pengarang K.H. Ma'shum Ali & Daftar Karya (Hal. 31)",
    contentArabic:
      'تَذْيِيلٌ:\nشَمَّرَ الْمُؤَلِّفُ — رَحِمَهُ اللَّهُ تَعَالَى — عَنْ سَاعِدِ جِدِّهِ — إِذْ كَانَ مُفَتِّشًا لِلْمَدْرَسَةِ السَّلَفِيَّةِ — فِي تَنْظِيمِ أَمْرِ التَّعَالِيمِ فِيهَا، فَأَلَّفَ كُتُبًا قَيِّمَةً، لَا يَسْتَغْنِي عَنْهَا كُلُّ طَالِبٍ فِي هَذَا الْعَصْرِ.\nفَمِنْهَا: هَذِهِ الْأَمْثِلَةُ الْمُخْتَلِفَةُ، وَبَدِيعَةُ الْمِثَالِ فِي حِسَابِ السِّنِينَ وَالْهِلَالِ: (قَدْ بَذَلَ جُهْدَهُ فِي تَسْهِيلِهِ، بِوَضْعِ مِثَالٍ فِي كُلِّ بَابٍ)، وَفَتْحُ الْقَدِيرِ فِي عَجَائِبِ الْمَقَادِيرِ، وَثَلَاثَةُ كُتُبٍ مِنَ الدُّرُوسِ الْفَلَكِيَّةِ.\nوَبَقِيَ الْمُؤَلِّفُ كَذَلِكَ — غَيْرَ مُزَاحَمٍ وَلَا مُدَافَعٍ — حَتَّى تُوُفِّيَ فِي رَمَضَانَ لِسَنَةِ ١٣٥١ هـ، وَالْمَدْرَسَةُ قَدْ أَظَلَّتِ الْعَالَمَ بِأَنْوَارِهَا. فَجَزَاهُ اللَّهُ الْجَزَاءَ الْأَوْفَرَ.',
    translation:
      'Tadzyil (Penutup/Lampiran Biografi di halaman PDF 31 / halaman Arab 59/61): Pengarang — semoga Allah merahmatinya — menyingsingkan lengan kesungguhannya tatkala beliau menjabat pengawas (mufattisy) Madrasah Salafiyah dalam menata sistem pengajaran di sana. Maka beliau mengarang kitab-kitab bernilai tinggi yang tak terpisahkan dari kebutuhan setiap pelajar masa kini, di antaranya: Kitab Al-Amtsilah ini, Badi’atul Mitsal (ilmu hisab tahun dan hilal), Fathul Qadir fi ‘Aja’ibil Maqadir (ilmu ukuran/timbangan), dan tiga kitab ad-Durus al-Falakiyyah (astronomi Islam). Beliau terus berkhidmah hingga wafat pada bulan Ramadhan tahun 1351 H (1933 M), sementara madrasahnya telah menaungi dunia dengan cahayanya.',
    explanation:
      'Halaman Tadzyil asli ini mengabadikan peran besar K.H. Muhammad Ma’shum bin Ali (menantu Hadratussyaikh K.H. Hasyim Asy’ari) bukan hanya sebagai ahli sharaf, tetapi juga pakar ilmu falak dan matematika klasik Nusantara.',
    keyPoints: [
      'Karya-karya K.H. Ma’shum Ali: Al-Amtsilah at-Tashrifiyyah, Badi’atul Mitsal, Fathul Qadir, dan 3 jilid Ad-Durus al-Falakiyyah.',
      'Wafat pada bulan Ramadhan 1351 H dalam pengabdian pendidikan di Madrasah Salafiyah.',
    ],
  },
  {
    id: 'amtsilah-fihris',
    titleArabic: 'فِهْرِسُ الْأَمْثِلَةِ التَّصْرِيفِيَّةِ (الْفِهْرِسُ الْأَصْلِيُّ)',
    titleIndo: 'Fihris Asli Kitab Al-Amtsilah At-Tashrifiyyah (Hal. 32)',
    contentArabic:
      'فِهْرِسُ الْأَمْثِلَةِ التَّصْرِيفِيَّةِ:\n- التَّصْرِيفُ الِاصْطِلَاحِيُّ (ص. ٢–٣): الْبَابُ الْأَوَّلُ – السَّادِسُ مِنَ الثُّلَاثِيِّ الْمُجَرَّدِ، بَابُ الرُّبَاعِيِّ الْمُجَرَّدِ، الْأَبْوَابُ السَّبْعَةُ مِنَ الرُّبَاعِيِّ الْمُلْحَقِ، وَالْأَبْوَابُ الْمَزِيدَةُ.\n- التَّصْرِيفُ اللُّغَوِيُّ (ص. ٣٦–٥٩): الْفِعْلُ الْمَاضِي لِلْفَاعِلِ وَالْمَفْعُولِ، الْمُضَارِعُ لِلْفَاعِلِ وَالْمَفْعُولِ، نُونُ التَّوْكِيدِ الثَّقِيلَةُ وَالْخَفِيفَةُ، فِعْلُ الْأَمْرِ لِلْفَاعِلِ وَالْمَفْعُولِ وَالتَّوْكِيدِ، فِعْلُ النَّهْيِ، الضَّمِيرُ الْمَنْصُوبُ وَاسْمُ الْإِشَارَةِ، اِسْمُ الْفَاعِلِ وَالْمَفْعُولِ، الصِّفَةُ الْمُشَبَّهَةُ، أَسْمَاءُ الزَّمَانِ وَالْمَكَانِ وَالْآلَةِ، مُهِمَّةٌ، تَذْيِيلٌ. تَمَّتْ.',
    translation:
      'Daftar isi (Fihris) cetakan asli kitab pada halaman PDF 32 (cetak Arab 60/62) yang memetakan urutan pembahasan dari Tashrif Istilahi (halaman cetak Arab 2 dst.), Tashrif Lughawi (halaman cetak Arab 36–55), Muhimmah (56–58), hingga Tadzyil (59). Adapun halaman 33 berisi sampul belakang resmi.',
    explanation:
      'Catatan verifikasi naskah: Pada cetakan fisik Fihris halaman 32 ini, kolom kanan memang langsung melompat dari Bab 1 Tsulatsi Mazid (hal. 12–13) menuju Tashrif Lughawi (hal. 36–37), sedangkan pembahasan lengkap Tsulatsi Mazid 1–3 huruf hingga Ruba’i Mazid tetap hadir lengkap di isi kitab (halaman PDF 8–19).',
    keyPoints: [
      'Menjadi halaman penutup isi (halaman 32 dari 33, diikuti sampul belakang di halaman 33) pada dokumen PDF bersih.',
      'Memverifikasi susunan asli kitab dari awal hingga akhir.',
    ],
  },
];
