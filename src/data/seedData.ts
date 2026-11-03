import { LibraryBookItem, ExerciseItem } from '../types';

export const SEED_BOOKS: LibraryBookItem[] = [
  // 1. AL-AJURUMIYYAH (NAHWU)
  {
    id: 'matan-al-jurumiyyah',
    title: 'Al-Ajurumiyyah (Jurumiyah)',
    titleArabic: 'مَتْنُ الْآجُرُّومِيَّةِ',
    author: 'Syaikh Abu Abdillah Sidi Muhammad bin Dawud Ash-Shanhaji (Ibnu Ajurrum)',
    category: 'nahwu',
    description: 'Kitab rujukan pokok ilmu nahwu paling populer di seluruh pesantren dan dunia Islam yang menguraikan kaidah dasar kalam, i\'rab, marfu\'at, manshubat, dan makhfudhat.',
    level: 'Mubtadi\' (Pemula)',
    coverColor: 'from-emerald-700 to-teal-900',
    chapters: [
      {
        id: 'jurumiyyah-kalam',
        titleArabic: 'بَابُ الْكَلَامِ',
        titleIndo: 'Bab 1: Hakikat dan Pembagian Kalam',
        contentArabic: 'الْكَلَامُ: هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ. وَأَقْسَامُهُ ثَلَاثَةٌ: اسْمٌ، وَفِعْلٌ، وَحَرْفٌ جَاءَ لِمَعْنًى. فَالِاسْمُ يُعْرَفُ بِالْخَفْضِ، وَالتَّنْوِينِ، وَدُخُولِ الْأَلِفِ وَاللَّامِ، وَحُرُوفِ الْخَفْضِ. وَالْفِعْلُ يُعْرَفُ بِقَدْ، وَالسِّينِ، وَسَوْفَ، وَتَاءِ التَّأْنِيثِ السَّاكِنَةِ. وَالْحَرْفُ مَا لَا يَصْلُحُ مَعَهُ دَلِيلُ الِاسْمِ وَلَا دَلِيلُ الْفِعْلِ.',
        translation: 'Kalam adalah lafadz yang tersusun (murakkab), berfaedah (mufid), dan menggunakan bahasa Arab (bil wadh\'). Pembagian kalam ada tiga: Isim (kata benda/sifat), Fi\'il (kata kerja), dan Harf (kata tugas) yang memiliki makna.',
        explanation: 'Empat rukun kalam: (1) Lafadz (suara berhuruf hijaiyah), (2) Murakkab (tersusun minimal 2 kata), (3) Mufid (maknanya tuntas sehingga pendengar tidak bingung/menunggu kelanjutan), (4) Bil Wadh\' (disengaja dalam bahasa Arab).',
        keyPoints: [
          'Isim dikenal dengan: Tanwin, Alif Lam (ال), Khafadh (Kasrah), dan huruf Jar.',
          'Fi\'il dikenal dengan: Qod (قَدْ), Sin (سَـ), Saufa (سَوْفَ), dan Ta\' Ta\'nits Sakinah (تْ).',
          'Harf adalah: kata yang tidak menerima tanda isim maupun tanda fi\'il.'
        ]
      },
      {
        id: 'jurumiyyah-irab',
        titleArabic: 'بَابُ الْإِعْرَابِ',
        titleIndo: 'Bab 2: Hakikat dan Macam-Macam I\'rab',
        contentArabic: 'الْإِعْرَابُ: هُوَ تَغْيِيرُ أَوَاخِرِ الْكَلِمِ لِاخْتِلَافِ الْعَوَامِلِ الدَّاخِلَةِ عَلَيْهَا لَفْظًا أَوْ تَقْدِيرًا. وَأَقْسَامُهُ أَرْبَعَةٌ: رَفْعٌ، وَنَصْبٌ، وَخَفْضٌ، وَجَزْمٌ. فَلِلْأَسْمَاءِ مِنْ ذَلِكَ الرَّفْعُ، وَالنَّصْبُ، وَالْخَفْضُ، وَلَا جَزْمَ فِيهَا. وَلِلْأَفْعَالِ مِنْ ذَلِكَ الرَّفْعُ، وَالنَّصْبُ، وَالْجَزْمُ، وَلَا خَفْضَ فِيهَا.',
        translation: 'I\'rab adalah perubahan akhir kata karena perbedaan amil-amil yang masuk padanya, baik secara lafadz (tampak) maupun taqdiran (diperkirakan). Macam I\'rab ada 4: Rafa\', Nashab, Khafadh (Jar), dan Jazm.',
        explanation: 'Isim hanya menerima tiga I\'rab: Rafa\', Nashab, dan Khafadh (tidak ada Jazm pada Isim). Sedangkan Fi\'il Mudhari\' menerima Rafa\', Nashab, dan Jazm (tidak ada Khafadh pada Fi\'il).',
        keyPoints: [
          'I\'rab Isim: Rafa\', Nashab, Khafadh.',
          'I\'rab Fi\'il: Rafa\', Nashab, Jazm.',
          'Perubahan lafdziy: seperti جَاءَ زَيْدٌ, رَأَيْتُ زَيْدًا, مَرَرْتُ بِزَيْدٍ.',
          'Perubahan taqdiriy: seperti جَاءَ الْفَتَى (harakat diperkirakan karena uzur).'
        ]
      },
      {
        id: 'jurumiyyah-alamat-irab',
        titleArabic: 'بَابُ مَعْرِفَةِ عَلَامَاتِ الْإِعْرَابِ',
        titleIndo: 'Bab 3: Tanda-Tanda I\'rab (Rafa\', Nashab, Khafadh, Jazm)',
        contentArabic: 'لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ: الضَّمَّةُ، وَالْوَاوُ، وَالْأَلِفُ، وَالنُّونُ. وَلِلنَّصْبِ خَمْسُ عَلَامَاتٍ: الْفَتْحَةُ، وَالْأَلِفُ، وَالْكَسْرَةُ، وَالْيَاءُ، وَحَذْفُ النُّونِ. وَلِلْخَفْضِ ثَلَاثُ عَلَامَاتٍ: الْكَسْرَةُ، وَالْيَاءُ، وَالْفَتْحَةُ. وَلِلْجَزْمِ عَلَامَتَانِ: السُّكُونُ، وَالْحَذْفُ.',
        translation: 'Rafa\' memiliki 4 tanda (Dhommah, Wawu, Alif, Nun). Nashab memiliki 5 tanda (Fathah, Alif, Kasrah, Ya, Hadzfun Nun). Khafadh memiliki 3 tanda (Kasrah, Ya, Fathah). Jazm memiliki 2 tanda (Sukun dan Hadzf/pembuangan).',
        explanation: 'Setiap tanda pokok (Dhommah, Fathah, Kasrah, Sukun) memiliki tanda pengganti (niyabah) pada kategori kata tertentu seperti Jamak Mudzakkar Salim, Asma\'ul Khamsah, Jamak Muannats Salim, dan Isim Ghair Munsharif.',
        keyPoints: [
          'Dhommah: Tanda asal Rafa\' pada Isim Mufrad, Jamak Taksir, Jamak Muannats Salim, Fi\'il Mudhari\'.',
          'Wawu: Tanda Rafa\' Jamak Mudzakkar Salim & Asma\'ul Khamsah.',
          'Alif: Tanda Rafa\' Isim Tatsniyah (dua), dan tanda Nashab Asma\'ul Khamsah.',
          'Hadzf (pembuangan): Hadzfu Harfil \'Illah atau Hadzfun Nun pada Af\'alul Khamsah.'
        ]
      },
      {
        id: 'jurumiyyah-afal',
        titleArabic: 'بَابُ الْأَفْعَالِ وَنَوَاصِبِهَا وَجَوَازِمِهَا',
        titleIndo: 'Bab 4: Macam-Macam Fi\'il, Nawashib, dan Jawazim',
        contentArabic: 'الْأَفْعَالُ ثَلَاثَةٌ: مَاضٍ، وَمُضَارِعٌ، وَأَمْرٌ، نَحْوُ: ضَرَبَ، وَيَضْرِبُ، وَاضْرِبْ. فَالْمَاضِي مَفْتُوحُ الْآخِرِ أَبَدًا، وَالْأَمْرُ مَجْزُومٌ أَبَدًا، وَالْمُضَارِعُ مَا كَانَ فِي أَوَّلِهِ إِحْدَى الزَّوَائِدِ الْأَرْبَعِ الَّتِي يَجْمَعُهَا قَوْلُكَ (أَنَيْتُ). فَنَوَاصِبُهُ عَشَرَةٌ، وَجَوَازِمُهُ ثَمَانِيَةَ عَشَرَ.',
        translation: 'Fi\'il terbagi 3: Madhi (lampau), Mudhari\' (sedang/akan), dan Amr (perintah). Fi\'il Madhi selalu mabni fathah, Fi\'il Amr mabni sukun/hadzf, dan Fi\'il Mudhari\' diawali huruf mudhara\'ah (أ - ن - ي - ت) dan berstatus mu\'rab kecuali bertemu Nun Niswah atau Nun Taukid.',
        explanation: 'Fi\'il Mudhari\' asalnya marfu\', dinashabkan oleh 10 amil nashab (seperti أَنْ، لَنْ، إِذَنْ، كَيْ), dan dijazmkan oleh 18 amil jazm (seperti لَمْ، لَمَّا، أَلَمْ، لَا النَّاهِيَةُ، إِنْ الشَّرْطِيَّةُ).',
        keyPoints: [
          'Fi\'il Madhi: Selalu mabni (ضَرَبَ).',
          'Fi\'il Amr: Selalu mabni (اضْرِبْ).',
          'Amil Nashab populer: أَنْ، لَنْ، كَيْ، حَتَّى.',
          'Amil Jazm populer: لَمْ، لَا النَّاهِيَةُ، لَامُ الْأَمْرِ، إِنْ.'
        ]
      },
      {
        id: 'jurumiyyah-marfuat',
        titleArabic: 'بَابُ مَرْفُوعَاتِ الْأَسْمَاءِ',
        titleIndo: 'Bab 5: 7 Isim yang Wajib Dibaca Rafa\'',
        contentArabic: 'الْمَرْفُوعَاتُ سَبْعَةٌ، وَهِيَ: الْفَاعِلُ، وَالْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ، وَالْمُبْتَدَأُ، وَخَبَرُهُ، وَاسْمُ كَانَ وَأَخَوَاتِهَا، وَخَبَرُ إِنَّ وَأَخَوَاتِهَا، وَالتَّابِعُ لِلْمَرْفُوعِ، وَهُوَ أَرْبَعَةُ أَشْيَاءَ: النَّعْتُ، وَالْعَطْفُ، وَالتَّوْكِيدُ، وَالْبَدَلُ.',
        translation: 'Isim yang wajib dibaca rafa\' ada 7: Fa\'il (pelaku), Na\'ibul Fa\'il (pengganti fa\'il), Mubtada\' (subjek mula), Khabar (predikat), Isim Kaana dan saudaranya, Khabar Inna dan saudaranya, serta Tabi\' (kata pengikut yang meliputi Na\'at, Athaf, Taukid, dan Badal).',
        explanation: 'Setiap kata isim yang menempati salah satu dari 7 fungsi ini wajib berada dalam keadaan I\'rab Rafa\' (ditandai dhommah, wawu, alif, atau nun).',
        keyPoints: [
          'Fa\'il: Isim marfu\' setelah fi\'il ma\'lum (قَامَ زَيْدٌ).',
          'Na\'ibul Fa\'il: Isim marfu\' setelah fi\'il majhul (ضُرِبَ زَيْدٌ).',
          'Mubtada\' & Khabar: زَيْدٌ قَائِمٌ (keduanya marfu\').',
          'Isim Kaana: كَانَ زَيْدٌ عَالِمًا (Zaid marfu\').',
          'Khabar Inna: إِنَّ زَيْدًا عَالِمٌ (Alim marfu\').'
        ]
      },
      {
        id: 'jurumiyyah-manshubat',
        titleArabic: 'بَابُ مَنْصُوبَاتِ الْأَسْمَاءِ',
        titleIndo: 'Bab 6: 15 Isim yang Wajib Dibaca Nashab',
        contentArabic: 'الْمَنْصُوبَاتُ خَمْسَةَ عَشَرَ، وَهِيَ: الْمَفْعُولُ بِهِ، وَالْمَصْدَرُ، وَظَرْفُ الزَّمَانِ، وَظَرْفُ الْمَكَانِ، وَالْحَالُ، وَالتَّمْيِيزُ، وَالْمُسْتَثْنَى، وَاسْمُ لَا، وَالْمُنَادَى، وَالْمَفْعُولُ مِنْ أَجْلِهِ، وَالْمَفْعُولُ مَعَهُ، وَخَبَرُ كَانَ وَأَخَوَاتِهَا، وَاسْمُ إِنَّ وَأَخَوَاتِهَا، وَالتَّابِعُ لِلْمَنْصُوبِ.',
        translation: 'Isim yang wajib dibaca nashab ada 15: Maf\'ul bih (objek), Masdar/Maf\'ul Muthlaq, Zhorof Zaman, Zhorof Makan, Hal (keterangan kondisi), Tamyiz (keterangan penjelas), Mustatsna (pengecualian), Isim Laa, Munada, Maf\'ul li Ajlih (alasan), Maf\'ul Ma\'ah (penyerta), Khabar Kaana, Isim Inna, dan Pengikut isim manshub.',
        explanation: 'Manshubat merupakan kelompok kedudukan isim paling kaya dan luas dalam sintaksis bahasa Arab untuk melengkapi struktur kalimat sempurna.',
        keyPoints: [
          'Maf\'ul bih: ضَرَبَ زَيْدٌ عَمْرًا (Amr = objek).',
          'Hal: جَاءَ زَيْدٌ رَاكِبًا (Rakiban = kondisi berkendara).',
          'Tamyiz: طَابَ زَيْدٌ نَفْسًا (Nafsan = penjelas aspek yang baik).',
          'Maf\'ul li ajlih: قُمْتُ إِجْلَالًا لَكَ (Ijlaalan = karena memuliakan).'
        ]
      },
      {
        id: 'jurumiyyah-makhfudhat',
        titleArabic: 'بَابُ الْمَخْفُوضَاتِ مِنَ الْأَسْمَاءِ',
        titleIndo: 'Bab 7: Isim-Isim yang Dibaca Khafadh / Jar',
        contentArabic: 'الْمَخْفُوضَاتُ ثَلَاثَةُ أَنْوَاعٍ: مَخْفُوضٌ بِالْحَرْفِ، وَمَخْفُوضٌ بِالْإِضَافَةِ، وَتَابِعٌ لِلْمَخْفُوضِ. فَأَمَّا الْمَخْفُوضُ بِالْحَرْفِ فَهُوَ مَا يُخْفَضُ بِمِنْ، وَإِلَى، وَعَنْ، وَعَلَى، وَفِي، وَرُبَّ، وَالْبَاءِ، وَالْكَافِ، وَاللَّامِ، وَحُرُوفِ الْقَسَمِ.',
        translation: 'Isim yang dibaca khafadh (jar) ada tiga macam: (1) Khafadh karena didahului huruf jar, (2) Khafadh karena idhofah (penyandaran kepemilikan/nisbah), (3) Pengikut (tabi\') bagi isim yang majrur.',
        explanation: 'Khafadh adalah ciri khas isim (tidak pernah masuk pada fi\'il). Idhafah terbagi atas makna Li (kepemilikan: غُلَامُ زَيْدٍ), Min (bahan asal: خَاتَمُ حَدِيدٍ), dan Fi (tempat/waktu: مَكْرُ اللَّيْلِ).',
        keyPoints: [
          'Majrur bil harf: مَرَرْتُ بِزَيْدٍ.',
          'Majrur bil idhafah: كِتَابُ الطَّالِبِ.',
          'Majrur bit tabi\'iyah: مَرَرْتُ بِزَيْدٍ الْعَالِمِ (Na\'at majrur).'
        ]
      }
    ]
  },

  // 2. NAZHAM AL-IMRITHI (NAHWU)
  {
    id: 'nazham-al-imrithi',
    title: 'Nazham Imrithi',
    titleArabic: 'نَظْمُ الْعِمْرِيطِيِّ (الدُّرَّةُ الْبَهِيَّةُ)',
    author: 'Syaikh Syarafuddin Yahya Al-Imrithi',
    category: 'nahwu',
    description: 'Untaian 254 bait nadzham bahar rajaz yang menggubah Matan Al-Jurumiyyah secara sistematis, mendalam, dan menjadi rujukan hafalan santri tingkat menengah.',
    level: 'Mutawassith (Menengah)',
    coverColor: 'from-blue-700 to-indigo-900',
    chapters: [
      {
        id: 'imrithi-kalam',
        titleArabic: 'فَصْلٌ فِي بَيَانِ الْكَلَامِ',
        titleIndo: 'Bait 1-15: Pengertian Kalam dan Al-Kalim',
        contentArabic: 'كَلَامُهُمْ لَفْظٌ مُفِيدٌ مُسْنَدُ # وَالْكِلْمَةُ اللَّفْظُ الْمُفِيدُ الْمُفْرَدُ\nلِاسْمٍ وَفِعْلٍ ثُمَّ حَرْفٍ تَنْقَسِمْ # وَهَذِهِ ثَلَاثَةٌ هِيَ الْكَلِمْ\nفَالِاسْمُ بِالتَّنْوِينِ وَالْخَفْضِ عُرِفْ # وَأَلْ وَحَرْفِ الْخَفْضِ طُرًّا فَاعْتَرِفْ',
        translation: 'Kalam menurut ulama Nahwu adalah lafadz yang berfaedah dan musnad (tersusun keterkaitan isnad). Sedangkan kalimah adalah lafadz tunggal yang berfaedah. Kalimah terbagi menjadi isim, fi\'il, dan harf, dan ketiganya disebut al-kalim.',
        explanation: 'Imrithi menambahkan konsep penting: "Al-Musnad" (hubungan Isnad antara subjek dan predikat). Kalam tidak akan terbentuk tanpa Isnad hakiki (seperti fi\'il-fa\'il atau mubtada\'-khabar).',
        keyPoints: [
          'Kalam mensyaratkan Isnad: Keterikatan dua kata yang menghasilkan faedah sempurna.',
          'Al-Kalim: Istilah untuk gabungan tiga macam kata sekaligus.',
          'Tanda Isim ditegaskan dengan tanwin, khafadh, alif lam, dan huruf jar.'
        ]
      },
      {
        id: 'imrithi-irab-bina',
        titleArabic: 'بَابُ الْإِعْرَابِ وَالْبِنَاءِ',
        titleIndo: 'Bait 16-35: Pembagian I\'rab dan Bina\'',
        contentArabic: 'إِعْرَابُهُمْ تَغْيِيرُ آخِرِ الْكَلِمْ # تَقْدِيرًا أَوْ لَفْظًا لِعَامِلٍ عُلِمْ\nأَقْسَامُهُ أَرْبَعَةٌ فَلْتُعْتَبَرْ # رَفْعٌ وَنَصْبٌ وَكَذَا خَفْضٌ وَجَزْمْ\nفَالْكُلُّ وَاقِعٌ بِالِاسْمِ وَالْفِعْلِ اسْتَقَرّْ # فِي غَيْرِ خَفْضٍ وَسِوَى جَزْمٍ أَثَرْ',
        translation: 'I\'rab adalah perubahan akhir kata secara taqdiran maupun lafadz karena amil yang diketahui. Pembagiannya ada 4: Rafa\', Nashab, Khafadh, dan Jazm. Semuanya masuk pada isim dan fi\'il, selain khafadh khusus isim dan jazm khusus fi\'il.',
        explanation: 'Nadzham Imrithi memadatkan konsep amil sebagai penggerak I\'rab. Kata yang tidak berubah akhirnya disebut Mabni (lawan dari Mu\'rab).',
        keyPoints: [
          'Amil lafdzi: amil yang tampak diucapkan (seperti huruf jar, inna, kaana).',
          'Amil ma\'nawi: amil yang tidak dilafadzkan (seperti ibtida\' pada mubtada\').',
          'Isim Mabni: Dhomir, Isim Isyarah, Isim Maushul, Isim Syarat, Isim Istifham.'
        ]
      },
      {
        id: 'imrithi-nawasikh',
        titleArabic: 'بَابُ النَّوَاسِخِ (كَانَ وَإِنَّ وَظَنَّ)',
        titleIndo: 'Bait 85-115: Bab Amil Nawasikh Pembatal Kalimat Dasar',
        contentArabic: 'وَرَافِعٌ لِلِاسْمِ نَاصِبٌ خَبَرْ # كَانَ وَأَمْسَى مَعَ بَاتَ وَاسْتَقَرّْ\nوَإِنَّ عَكْسُ كَانَ فِي حُكْمِ الْعَمَلْ # تَنْصِبُ الِاسْمَ وَارْفَعِ الْخَبَرَ الْأَجَلّْ',
        translation: 'Kaana dan saudaranya merafa\'kan isim dan menashabkan khabar. Sedangkan Inna dan saudaranya berkebalikan dari Kaana: menashabkan isim dan merafa\'kan khabar.',
        explanation: 'Nawasikh (pembatal) masuk ke dalam Jumlah Ismiyyah (Mubtada\' + Khabar). Kaana membiarkan mubtada\' marfu\' dan mengubah khabar menjadi manshub. Inna mengubah mubtada\' menjadi manshub dan membiarkan khabar marfu\'.',
        keyPoints: [
          'Kaana: تَرْفَعُ الِاسْمَ وَتَنْصِبُ الْخَبَرَ (كَانَ زَيْدٌ عَالِمًا).',
          'Inna: تَنْصِبُ الِاسْمَ وَتَرْفَعُ الْخَبَرَ (إِنَّ زَيْدًا عَالِمٌ).',
          'Dhanna: تَنْصِبُهُمَا جَمِيعًا (menashabkan keduanya sebagai dua maf\'ul).'
        ]
      },
      {
        id: 'imrithi-mafail',
        titleArabic: 'بَابُ الْمَفَاعِيلِ الْخَمْسَةِ',
        titleIndo: 'Bait 140-175: 5 Macam Maf\'ul dalam Sintaksis Arab',
        contentArabic: 'خَمْسُ مَفَاعِيلٍ أَتَتْ مَنْصُوبَةً # مَفْعُولٌ مُطْلَقٌ وَبِهِ مَنْسُوبَةً\nوَظَرْفُ وَقْتٍ أَوْ مَكَانٍ فِيهِ صَحّْ # وَمَعَهُ مَفْعُولٌ لَهُ الْحَقُّ اتَّضَحّْ',
        translation: 'Lima macam maf\'ul semuanya dihukumi manshub: (1) Maf\'ul Muthlaq/Masdar, (2) Maf\'ul Bih, (3) Maf\'ul Fih (Zhorof Zaman & Makan), (4) Maf\'ul Ma\'ah, (5) Maf\'ul Li Ajlih.',
        explanation: 'Kelima maf\'ul ini menjawab 5 aspek esensial: apa/siapa yang dikenai perbuatan (bih), penegasan/macam perbuatan (muthlaq), kapan dan di mana terjadi (fih), bersama siapa (ma\'ah), dan untuk alasan apa (li ajlih).',
        keyPoints: [
          'Maf\'ul Bih: كَتَبَ زَيْدٌ رِسَالَةً (menjawab objek "apa").',
          'Maf\'ul Muthlaq: ضَرَبْتُ ضَرْبًا (menjawab penegasan).',
          'Maf\'ul Fih: صُمْتُ يَوْمَ الْخَمِيسِ (menjawab "kapan/di mana").',
          'Maf\'ul Li Ajlih: سَافَرْتُ رَغْبَةً فِي الْعِلْمِ (menjawab "mengapa").',
          'Maf\'ul Ma\'ah: سِرْتُ وَالنِّيلَ (menjawab "bersama apa/siapa").'
        ]
      }
    ]
  },

  // 3. MUTAMMIMAH AL-AJURUMIYYAH (NAHWU)
  {
    id: 'mutammimah-al-ajurumiyyah',
    title: 'Mutammimah Al-Ajurumiyyah',
    titleArabic: 'مُتَمِّمَةُ الْآجُرُّومِيَّةِ فِي عِلْمِ الْعَرَبِيَّةِ',
    author: 'Syaikh Syamsuddin Muhammad bin Muhammad Ar-Ra\'ini (Al-Hatthab)',
    category: 'nahwu',
    description: 'Kitab penyempurna (tatmim) dari matan Al-Ajurumiyyah dengan tambahan pembahasan mendalam tentang isim mu\'tal, tanis al-fi\'il, isim-isim mabni, dan rincian i\'rab lanjutan.',
    level: 'Mutawassith & Mutaqaddim',
    coverColor: 'from-teal-800 to-cyan-950',
    chapters: [
      {
        id: 'mutammimah-muarab-mabni',
        titleArabic: 'فَصْلٌ فِي تَقْسِيمِ الِاسْمِ إِلَى مُعْرَبٍ وَمَبْنِيٍّ',
        titleIndo: 'Bab 1: Rincian Isim Mu\'rab dan Isim Mabni',
        contentArabic: 'الِاسْمُ قِسْمَانِ: مُعْرَبٌ وَهُوَ الْأَصْلُ، وَمَبْنِيٌّ وَهُوَ الْفَرْعُ. فَالْمَبْنِيُّ: مَا لَا يَتَغَيَّرُ آخِرُهُ لِاخْتِلَافِ الْعَوَامِلِ، وَأَبْوَابُهُ سِتَّةٌ: الْمُضْمَرَاتُ، وَأَسْمَاءُ الْإِشَارَةِ، وَالْمَوْصُولَاتُ، وَأَسْمَاءُ الشَّرْطِ، وَأَسْمَاءُ الِاسْتِفْهَامِ، وَأَسْمَاءُ الْأَفْعَالِ.',
        translation: 'Isim terbagi dua: Mu\'rab (hukum asal pada isim) dan Mabni (cabang). Isim Mabni adalah kata yang harakat/bentuk akhirnya tidak berubah meskipun amil yang memasukinya berbeda-beda. Pintu isim mabni ada 6: Dhomir, Isim Isyarah, Isim Maushul, Isim Syarat, Isim Istifham, dan Isim Fi\'il.',
        explanation: 'Al-Hatthab menjelaskan bahwa kemabnian isim terjadi karena adanya keserupaan (syabah) dengan huruf, baik syabah wadh\'i, ma\'nawi, maupun isti\'mali.',
        keyPoints: [
          'Dhomir: هُوَ، هِيَ، أَنَا، أَنْتَ (selalu mabni).',
          'Isim Isyarah: هَذَا، هَذِهِ، ذَلِكَ (kecuali tatsniyah هَذَانِ & هَاتَانِ mu\'rab dengan alif/ya).',
          'Isim Maushul: الَّذِي، الَّتِي (kecuali tatsniyah اللَّذَانِ & اللَّتَانِ).'
        ]
      },
      {
        id: 'mutammimah-asma-sittah',
        titleArabic: 'بَابُ الْأَسْمَاءِ السِّتَّةِ وَشُرُوطِ إِعْرَابِهَا بِالْحُرُوفِ',
        titleIndo: 'Bab 2: Asma\'us Sittah dan Syarat I\'rab dengan Huruf',
        contentArabic: 'الْأَسْمَاءُ السِّتَّةُ هِيَ: أَبُوكَ، وَأَخُوكَ، وَحَمُوكَ، وَفُوكَ، وَذُو مَالٍ، وَهَنُوكَ. وَتُعْرَبُ بِالْوَاوِ رَفْعًا، وَبِالْأَلِفِ نَصْبًا، وَبِالْيَاءِ جَرًّا. بِشَرْطِ: أَنْ تَكُونَ مُفْرَدَةً، مُكَبَّرَةً، مُضَافَةً إِلَى غَيْرِ يَاءِ الْمُتَكَلِّمِ.',
        translation: 'Asma\'us Sittah (6 Isim Khusus): Abuka, Akhuka, Hamuka, Fuka, Dzu Malin, dan Hanuka. Di-i\'rab dengan Wawu saat rafa\', Alif saat nashab, dan Ya saat jar. Dengan 4 syarat: (1) Mufrad (bukan jamak/tatsniyah), (2) Mukabbarah (bukan tashghir), (3) Mudhaf, (4) Idhafah kepada selain Ya Mutakallim.',
        explanation: 'Jika syarat tidak terpenuhi (misal diidhofahkan ke Ya Mutakallim: أَبِي), maka i\'rabnya dengan harakat taqdiriyah atas Ya, bukan dengan huruf.',
        keyPoints: [
          'Rafa\': جَاءَ أَبُوكَ (Wawu).',
          'Nashab: رَأَيْتُ أَبَاكَ (Alif).',
          'Jar: مَرَرْتُ بِأَبِيكَ (Ya).',
          'Pengecualian: أَبِي (di-i\'rab harakat taqdiriyah sebelum ya mutakallim).'
        ]
      },
      {
        id: 'mutammimah-tanis-fil',
        titleArabic: 'بَابُ أَحْكَامِ تَأْنِيثِ الْفِعْلِ مَعَ الْفَاعِلِ',
        titleIndo: 'Bab 3: Hukum Ta\'nits Fi\'il Bersama Fa\'il',
        contentArabic: 'يَجِبُ تَأْنِيثُ الْفِعْلِ فِي مَوْضِعَيْنِ: (١) إِذَا كَانَ الْفَاعِلُ اسْمًا ظَاهِرًا حَقِيقِيَّ التَّأْنِيثِ غَيْرَ مَفْصُولٍ عَنِ الْفِعْلِ نَحْوُ: قَامَتْ هِنْدٌ. (٢) إِذَا كَانَ الْفَاعِلُ ضَمِيرًا مُسْتَتِرًا يَعُودُ عَلَى مُؤَنَّثٍ حَقِيقِيٍّ أَوْ مَجَازِيٍّ نَحْوُ: الشَّمْسُ طَلَعَتْ.',
        translation: 'Wajib memberikan tanda ta\'nits (ta\' sakinah) pada fi\'il pada dua tempat: (1) Jika fa\'il berupa isim zhahir muannats hakiki tanpa pemisah dari fi\'il (قَامَتْ هِنْدٌ). (2) Jika fa\'il berupa dhomir mustatir yang merujuk pada muannats hakiki maupun majazi (الشَّمْسُ طَلَعَتْ).',
        explanation: 'Jika ada pemisah (fashil) antara fi\'il dan fa\'il muannats hakiki, hukumnya boleh menta\'nits dan boleh mentadzkkir (contoh: حَضَرَ الْيَوْمَ هِنْدٌ atau حَضَرَتِ الْيَوْمَ هِنْدٌ).',
        keyPoints: [
          'Wajib Ta\'nits: قَامَتْ هِنْدٌ (muannats hakiki tanpa pemisah).',
          'Wajib Ta\'nits: الشَّمْسُ طَلَعَتْ (dhomir mustatir kembali ke muannats).',
          'Jaiz (Boleh): حَضَرَ الْقَاضِيَ امْرَأَةٌ (ada pemisah maf\'ul).'
        ]
      }
    ]
  },

  // 4. ALFIYAH IBNU MALIK (NAHWU)
  {
    id: 'alfiyah-ibnu-malik',
    title: 'Alfiyah Ibnu Malik',
    titleArabic: 'الْخُلَاصَةُ الْأَلْفِيَّةُ فِي النَّحْوِ وَالتَّصْرِيفِ',
    author: 'Al-Imam Jamaluddin Muhammad bin Abdullah bin Malik Al-Andalusi',
    category: 'nahwu',
    description: 'Mahakarya 1.002 bait syair rajaz yang mencakup seluruh kaidah Nahwu dan Sharaf tingkat mahir, menjadi standar tertinggi penguasaan bahasa Arab klasik.',
    level: 'Mutaqaddim (Mahir / Lanjutan)',
    coverColor: 'from-amber-800 to-yellow-950',
    chapters: [
      {
        id: 'alfiyah-kalam',
        titleArabic: 'الْكَلَامُ وَمَا يَتَأَلَّفُ مِنْهُ',
        titleIndo: 'Bait 1-7: Hakekat Kalam, Kalim, dan Kalimah',
        contentArabic: 'كَلَامُنَا لَفْظٌ مُفِيدٌ كَاسْتَقِمْ # وَاسْمٌ وَفِعْلٌ ثُمَّ حَرْفٌ الْكَلِمْ\nوَاحِدُهُ كَلِمَةٌ وَالْقَوْلُ عَمّْ # وَكِلْمَةٌ بِهَا كَلَامٌ قَدْ يُؤَمّْ\nبِالْجَرِّ وَالتَّنْوِينِ وَالنِّدَا وَأَلْ # وَمُسْنَدٍ لِلِاسْمِ تَمْيِيزٌ حَصَلْ',
        translation: 'Kalam kita menurut ahli nahwu adalah lafadz yang berfaedah seperti lafadz "Istaqim" (luruslah!). Isim, fi\'il, dan harf disebut Al-Kalim. Bentuk tunggalnya adalah Kalimah, sedangkan Al-Qaul mencakup semuanya. Isim dibedakan dengan: Jar, Tanwin, Nida\' (panggilan), Al (ال), dan Musnad ilaih.',
        explanation: 'Ibnu Malik mendemonstrasikan kalam sempurna hanya dengan satu kata "اسْتَقِمْ" yang hakikatnya tersusun dari fi\'il dan dhomir mustatir (أَنْتَ). Tanda isim paling kuat menurutnya adalah "Musnad ilaih" karena mampu membuktikan kemu\'raban dhomir.',
        keyPoints: [
          'Kalam tercermin dalam "اسْتَقِمْ": Murakkab takdiri.',
          'Musnad ilaih: Tanda isim yang membuktikan kata seperti "تَـ" pada قُمْتَ adalah isim.',
          'Al-Qaul: Lafadz yang menunjukkan makna secara umum.'
        ]
      },
      {
        id: 'alfiyah-mubtada-khabar',
        titleArabic: 'الْمُبْتَدَأُ وَالْخَبَرُ',
        titleIndo: 'Bait 116-145: Hakikat Mubtada\' dan Khabar',
        contentArabic: 'مُبْتَدَأٌ زَيْدٌ وَعَاذِرٌ خَبَرْ # إِنْ قُلْتَ زَيْدٌ عَاذِرٌ مَنِ اعْتَذَرْ\nوَأَوَّلٌ مُبْتَدَأٌ وَالثَّانِي # فَاعِلٌ اغْنَى فِي أُسَارٍ ذَانِ\nوَالْخَبَرُ الْجُزْءُ الْمُتِمُّ الْفَائِدَهْ # كَاللَّهُ بَرٌّ وَالْأَيَادِي شَاهِدَهْ',
        translation: 'Zaid adalah mubtada\' dan \'Aadzirun adalah khabar jika engkau berkata "Zaidun \'aadzirun man i\'tadzara". Dan yang pertama adalah mubtada\' sedang yang kedua adalah Fa\'il yang mencukupi dari khabar pada contoh "A saarin dzaani?". Khabar adalah bagian yang menyempurnakan faedah.',
        explanation: 'Ibnu Malik membagi Mubtada\' menjadi dua: (1) Mubtada\' yang memiliki Khabar (زَيْدٌ قَائِمٌ), (2) Mubtada\' berupa Isim Sifat yang didahului Nafi/Istifham dan merafa\'kan Isim Zhahir sebagai Fa\'il Sadda Masaddal Khabar (أَقَائِمٌ الزَّيْدَانِ).',
        keyPoints: [
          'Khabar adalah penyempurna faedah kalimat bersama mubtada\'.',
          'Fa\'il Sadda Masaddal Khabar: Fa\'il isim sifat yang menggantikan posisi khabar.',
          'Hukum asal mubtada\' harus ma\'rifah, dan khabar nakirah.'
        ]
      },
      {
        id: 'alfiyah-fail-naibul-fail',
        titleArabic: 'الْفَاعِلُ وَنَائِبُ الْفَاعِلِ',
        titleIndo: 'Bait 205-235: Kaidah Fa\'il dan Na\'ibul Fa\'il',
        contentArabic: 'الْفَاعِلُ الَّذِي كَمَرْفُوعَيْ أَتَى # زَيْدٌ مُنِيرًا وَجْهُهُ نِعْمَ الْفَتَى\nوَبَعْدَ فِعْلٍ فَاعِلٌ فَإِنْ ظَهَرْ # فَهْوَ وَإِلَّا فَضَمِيرٌ اسْتَتَرْ\nيَنُوبُ مَفْعُولٌ بِهِ عَنْ فَاعِلِ # فِي كُلِّ مَا لَهُ كَنِيلَ نَائِلُ',
        translation: 'Fa\'il adalah seperti dua isim marfu\' pada kalimat "Ataa Zaidun muniiran wajhuhu ni\'mal fataa". Setelah fi\'il wajib ada fa\'il; jika tampak zhahir maka itulah dia, dan jika tidak maka berupa dhomir mustatir. Maf\'ul bih menggantikan fa\'il (na\'ibul fa\'il) dalam segala hukumnya seperti "Niila naailu".',
        explanation: 'Fa\'il tidak boleh mendahului fi\'ilnya. Jika ada isim di depan fi\'il (seperti زَيْدٌ قَامَ), maka Zaid adalah Mubtada\', dan fa\'il fi\'ilnya adalah dhomir mustatir (هُوَ) yang kembali ke Zaid.',
        keyPoints: [
          'Fa\'il wajib terletak setelah fi\'il.',
          'Fi\'il tidak berubah menjadi jamak walau fa\'ilnya jamak (قَامَ الرِّجَالُ, bukan قَامُوا الرِّجَالُ menurut lughah fusha).',
          'Perubahan fi\'il majhul: Dhommah huruf awal dan kasrah huruf sebelum akhir pada madhi (نِيلَ / كُتِبَ).'
        ]
      }
    ]
  },

  // 5. AL-AMTSIALAH AT-TASHRIFIYYAH (SHARAF)
  {
    id: 'al-amtsilah-at-tashrifiyyah',
    title: 'Amtsilah Tashrifiyah',
    titleArabic: 'الْأَمْثِلَةُ التَّصْرِيفِيَّةُ',
    author: 'K.H. Muhammad Ma\'shum bin Ali (Pesantren Seblak, Jombang)',
    category: 'shorof',
    description: 'Kitab master tasrifan shorof sistematis warisan ulama Nusantara yang menjadi panduan baku tata bentuk kata (morfologi) bahasa Arab dari Tsulatsi Mujarrad hingga Mazid.',
    level: 'Mubtadi\' & Mutawassith',
    coverColor: 'from-orange-700 to-amber-900',
    chapters: [
      {
        id: 'amtsilah-tsulatsi-mujarrad',
        titleArabic: 'أَبْوَابُ الثُّلَاثِيِّ الْمُجَرَّدِ السِّتَّةُ',
        titleIndo: 'Bab 1: Enam Bab Fi\'il Tsulatsi Mujarrad',
        contentArabic: 'فَتْحُ ضَمٍّ، فَتْحُ كَسْرٍ، فَتْحَتَانِ # كَسْرُ فَتْحٍ، ضَمُّ ضَمٍّ، كَسْرَتَانِ\n١. فَعَلَ يَفْعُلُ (نَصَرَ يَنْصُرُ)\n٢. فَعَلَ يَفْعِلُ (ضَرَبَ يَضْرِبُ)\n٣. فَعَلَ يَفْعَلُ (فَتَحَ يَفْتَحُ)\n٤. فَعِلَ يَفْعَلُ (عَلِمَ يَعْلَمُ)\n٥. فَعُلَ يَفْعُلُ (حَسُنَ يَحْسُنُ)\n٦. فَعِلَ يَفْعِلُ (حَسِبَ يَحْسِبُ)',
        translation: 'Nadzham 6 bab fi\'il tiga huruf asli: Fathu Dhommin, Fathu Kasrin, Fathatani, Kasru Fathin, Dhommu Dhommin, Kasratani.',
        explanation: 'Enam bab ini dibedakan berdasarkan variasi harakat \'Ain Fi\'il pada bentuk Madhi dan Mudhari\'. Bab 1 sampai 4 adalah bab muta\'addi/lazim terbanyak; Bab 5 khusus fi\'il lazim yang menunjukkan sifat/watak asli; Bab 6 bab paling sedikit kosa katanya.',
        keyPoints: [
          'Bab 1: نَصَرَ يَنْصُرُ (Fathu Dhommin).',
          'Bab 2: ضَرَبَ يَضْرِبُ (Fathu Kasrin).',
          'Bab 3: فَتَحَ يَفْتَحُ (Fathatani - mensyaratkan \'ain atau lam fi\'il berupa huruf halaq).',
          'Bab 4: عَلِمَ يَعْلَمُ (Kasru Fathin).',
          'Bab 5: حَسُنَ يَحْسُنُ (Dhommu Dhommin - fi\'il lazim sifat tabiat).',
          'Bab 6: حَسِبَ يَحْسِبُ (Kasratani).'
        ]
      },
      {
        id: 'amtsilah-sighah-istilahi',
        titleArabic: 'صِيَغُ التَّصْرِيفِ الِاصْطِلَاحِيِّ الَعَشَرَةِ',
        titleIndo: 'Bab 2: 10 Sighah Tashrif Istilahi',
        contentArabic: 'فَعَلَ (مَاضٍ) - يَفْعُلُ (مُضَارِعٌ) - فَعْلًا (مَصْدَرٌ غَيْرُ مِيمٍ) - وَمَفْعَلًا (مَصْدَرٌ مِيمِيٌّ) - فَهُوَ فَاعِلٌ (اسْمُ فَاعِلٍ) - وَذَاكَ مَفْعُولٌ (اسْمُ مَفْعُولٍ) - افْعُلْ (أَمْرٌ) - لَا تَفْعُلْ (نَهْيٌ) - مَفْعَلٌ (اسْمُ زَمَانٍ) - مَفْعَلٌ (اسْمُ مَكَانٍ) - مِفْعَلٌ (اسْمُ آلَةٍ).',
        translation: 'Perubahan satu bentuk dasar ke 10 sighah morfologis: Fi\'il Madhi, Fi\'il Mudhari\', Masdar Ashli, Masdar Mim, Isim Fa\'il (pelaku), Isim Maf\'ul (objek), Fi\'il Amr (perintah), Fi\'il Nahyi (larangan), Isim Zaman (waktu), Isim Makan (tempat), Isim Alat (perkakas).',
        explanation: 'Tashrif Istilahi mengubah satu kata dasar menjadi aneka bentuk yang mengemban makna gramatikal berbeda tanpa mengubah makna dasar akarnya.',
        keyPoints: [
          'Fi\'il Madhi: كَتَبَ (telah menulis).',
          'Fi\'il Mudhari\': يَكْتُبُ (sedang/akan menulis).',
          'Isim Fa\'il: كَاتِبٌ (penulis).',
          'Isim Maf\'ul: مَكْتُوبٌ (yang ditulis / surat).',
          'Isim Makan: مَكْتَبٌ (meja tulis / kantor).'
        ]
      },
      {
        id: 'amtsilah-tsulatsi-mazid',
        titleArabic: 'أَوْزَانُ الثُّلَاثِيِّ الْمَزِيدِ فِيهِ',
        titleIndo: 'Bab 3: Wazan Fi\'il Tsulatsi Mazid (Imbuhan 1, 2, 3 Huruf)',
        contentArabic: '١. الْمَزِيدُ بِحَرْفٍ: أَفْعَلَ (أَكْرَمَ)، فَعَّلَ (فَرَّحَ)، فَاعَلَ (قَاتَلَ).\n٢. الْمَزِيدُ بِحَرْفَيْنِ: انْفَعَلَ (انْكَسَرَ)، افْتَعَلَ (اجْتَمَعَ)، افْعَلَّ (احْمَرَّ)، تَفَعَّلَ (تَعَلَّمَ)، تَفَاعَلَ (تَبَاعَدَ).\n٣. الْمَزِيدُ بِثَلَاثَةِ أَحْرُفٍ: اسْتَفْعَلَ (اسْتَغْفَرَ)، افْعَوْعَلَ (اعْشَوْشَبَ).',
        translation: 'Fi\'il tiga huruf yang mendapat tambahan satu huruf (Rubai), dua huruf (Khumasi), atau tiga huruf (Sudasi) yang melahirkan nuansa makna baru seperti Ta\'diyah (transitif), Musyarakah (saling), Muthawa\'ah, dan Thalab (memohon).',
        explanation: 'Kaidah sharaf: "Ziyadatul Mabna Tadullu \'ala Ziyadatil Ma\'na" (Setiap penambahan huruf pembentuk kata menunjukkan adanya penambahan atau penguatan makna).',
        keyPoints: [
          'Wazan أَفْعَلَ: Ta\'diyah (خَرَجَ keluar -> أَخْرَجَ mengeluarkan).',
          'Wazan فَعَّلَ: Taktsir/banyak (قَطَّعَ memotong berkali-kali).',
          'Wazan فَاعَلَ: Musyarakah (ضَارَبَ saling memukul).',
          'Wazan اسْتَفْعَلَ: Thalab (اسْتَغْفَرَ memohon ampun).'
        ]
      }
    ]
  },

  // 6. AL-MAQSHUD (SHARAF)
  {
    id: 'matan-al-maqshud',
    title: 'Al-Maqshud',
    titleArabic: 'مَتْنُ الْمَقْصُودِ فِي عِلْمِ الصَّرْفِ',
    author: 'Dinisbatkan kepada Al-Imam Al-A\'zham Abu Hanifah An-Nu\'man',
    category: 'shorof',
    description: 'Kitab matan sharaf legendaris yang mengupas tuntas hakikat tashrif, faedah wazan, kaidah i\'lal huruf illat (wawu, alif, ya), dan hukum idgham pada fi\'il mudho\'af.',
    level: 'Mutawassith & Mutaqaddim',
    coverColor: 'from-purple-800 to-rose-950',
    chapters: [
      {
        id: 'maqshud-haqiqat',
        titleArabic: 'فَصْلٌ فِي حَقِيقَةِ عِلْمِ التَّصْرِيفِ وَفَائِدَتِهِ',
        titleIndo: 'Bab 1: Hakikat Ilmu Tashrif dan Faedahnya',
        contentArabic: 'اعْلَمْ أَنَّ الصَّرْفَ أُمُّ الْعُلُومِ، وَالنَّحْوَ أَبُوهَا. وَالتَّصْرِيفُ فِي اللُّغَةِ: التَّغْيِيرُ. وَفِي الصِّنَاعَةِ: تَحْوِيلُ الْأَصْلِ الْوَاحِدِ إِلَى أَمْثِلَةٍ مُخْتَلِفَةٍ لِمَعَانٍ مَقْصُودَةٍ لَا تَحْصُلُ إِلَّا بِهَا.',
        translation: 'Ketahuilah bahwa ilmu Sharaf adalah ibu segala ilmu bahasa, dan Nahwu adalah bapaknya. Tashrif menurut bahasa adalah perubahan; menurut istilah adalah mengubah satu bentuk asal (akar kata) menjadi aneka contoh bentuk yang berbeda guna menghasilkan makna-makna yang dituju.',
        explanation: 'Kitab Al-Maqshud menegaskan bahwa tanpa ilmu sharaf, seorang santri tidak akan dapat membedakan sighah kata kerja, kata benda, pelaku, objek, dan ragam maknanya.',
        keyPoints: [
          'Sharaf adalah Ummul \'Ulum (ibu ilmu-ilmu bahasa Arab).',
          'Tujuan: Mengetahui asal kata, huruf asli vs tambahan, dan perubahan bentuk.',
          'Mizan Tashrifi: Huruf Fa, \'Ain, dan Lam (ف - ع - ل) sebagai neraca timbangan kata.'
        ]
      },
      {
        id: 'maqshud-ilal-qalb',
        titleArabic: 'بَابُ قَوَاعِدِ الْإِعْلَالِ وَقَلْبِ حُرُوفِ الْعِلَّةِ',
        titleIndo: 'Bab 2: Kaidah I\'lal Huruf \'Illat (Penggantian Wawu & Ya)',
        contentArabic: 'الْقَاعِدَةُ: إِذَا تَحَرَّكَتِ الْوَاوُ أَوِ الْيَاءُ بِأَيِّ حَرَكَةٍ كَانَتْ، وَانْفَتَحَ مَا قَبْلَهُمَا، قُلِبَتَا أَلِفًا، نَحْوُ: قَالَ وَبَاعَ، أَصْلُهُمَا: قَوَلَ وَبَيَعَ.\nوَإِذَا سَكَنَتِ الْوَاوُ إِثْرَ كَسْرَةٍ قُلِبَتْ يَاءً، نَحْوُ: مِيزَانٌ، أَصْلُهُ: مِوْزَانٌ.',
        translation: 'Kaidah I\'lal: Apabila huruf Wawu atau Ya berharakat apa saja dan huruf sebelumnya berharakat fathah, maka keduanya wajib diganti menjadi Alif, seperti قَالَ dan بَاعَ (asalnya قَوَلَ dan بَيَعَ). Dan jika Wawu sukun jatuh setelah kasrah, maka diganti Ya, seperti مِيزَانٌ (asalnya مِوْزَانٌ).',
        explanation: 'I\'lal adalah perubahan pada huruf illat (Alif, Wawu, Ya) karena beratnya pelafalan lidah Arab. Penggantian (qalb) bertujuan meringankan bunyi kata.',
        keyPoints: [
          'Kaidah 1: قَوَلَ -> قَالَ (Wawu fathah setelah fathah diganti Alif).',
          'Kaidah 2: بَيَعَ -> بَاعَ (Ya fathah setelah fathah diganti Alif).',
          'Kaidah 3: مِوْزَانٌ -> مِيزَانٌ (Wawu sukun setelah kasrah diganti Ya).',
          'Kaidah 4: دَعَوَ -> دَعَا dan رَمَيَ -> رَمَى.'
        ]
      },
      {
        id: 'maqshud-idgham',
        titleArabic: 'بَابُ أَحْكَامِ الْإِدْغَامِ فِي الْفِعْلِ الْمُضَاعَفِ',
        titleIndo: 'Bab 3: Hukum Idgham pada Fi\'il Mudho\'af (Tasydid)',
        contentArabic: 'الْإِدْغَامُ إِدْخَالُ أَحَدِ الْمِثْلَيْنِ فِي الْآخَرِ. وَهُوَ ثَلَاثَةُ أَقْسَامٍ: وَاجِبٌ، وَجَائِزٌ، وَمُمْتَنِعٌ.\nفَالْوَاجِبُ: نَحْوُ مَدَّ يَمُدُّ، أَصْلُهُ: مَدَدَ يَمْدُدُ.\nوَالْمُمْتَنِعُ: إِذَا اتَّصَلَ بِالْفِعْلِ ضَمِيرُ رَفْعٍ مُتَحَرِّكٌ نَحْوُ: مَدَدْتُ، مَدَدْنَا.\nوَالْجَائِزُ: فِي جَزْمِ الْمُضَارِعِ نَحْوُ: لَمْ يَمُدَّ وَلَمْ يَمْدُدْ.',
        translation: 'Idgham adalah memasukkan satu huruf yang serupa ke huruf lainnya. Hukumnya ada 3: (1) Wajib idgham (مَدَّ يَمُدُّ), (2) Terlarang/mumtani\' idgham jika bersambung dengan dhomir rafa\' berharakat (مَدَدْتُ, مَدَدْنَا), (3) Boleh/jaiz idgham saat fi\'il mudhari\' dijazmkan (لَمْ يَمُدَّ atau لَمْ يَمْدُدْ).',
        explanation: 'Idgham memudahkan artikulasi agar penutur tidak mengulang huruf konsonan yang sama berturut-turut dalam satu kata.',
        keyPoints: [
          'Wajib Idgham: مَدَّ (asalnya مَدَدَ).',
          'Mumtani\' (Terlarang): مَدَدْتُ (karena Dal kedua sukun bertemu Ta fa\'il).',
          'Jaiz (Boleh): لَمْ يَفِرَّ atau لَمْ يَفْرِرْ.'
        ]
      }
    ]
  }
];

export const SEED_EXERCISES: ExerciseItem[] = [
  // LEVEL 1: PEMULA
  {
    id: 'ex-1',
    title: 'Menentukan Fa\'il dalam Jumlah Fi\'liyyah',
    category: 'nahwu',
    difficulty: 'pemula',
    topicTag: 'jurumiyyah-marfuat',
    question: 'Perhatikan kalimat bahasa Arab berikut: "كَتَبَ الطَّالِبُ الدَّرْسَ". Manakah kata yang berkedudukan sebagai Fa\'il (pelaku) dan apa tanda I\'rabnya?',
    arabicSnippet: 'كَتَبَ الطَّالِبُ الدَّرْسَ',
    options: [
      'كَتَبَ (Fi\'il Madhi mabni atas fathah)',
      'الطَّالِبُ (Fa\'il marfu\' dengan tanda dhommah)',
      'الدَّرْسَ (Maf\'ul bih manshub dengan fathah)',
      'Semua kata berkedudukan sebagai khabar'
    ],
    correctAnswerIndex: 1,
    explanation: 'Dalam susunan Jumlah Fi\'liyyah "كَتَبَ الطَّالِبُ الدَّرْسَ", kata "الطَّالِبُ" terletak setelah fi\'il ma\'lum (كَتَبَ) dan menunjukkan siapa yang melakukan perbuatan menulis. Oleh karena itu, ia berkedudukan sebagai Fa\'il yang berstatus Marfu\' dengan tanda Dhommah zhahirah.',
    kitabReference: 'Kitab Al-Ajurumiyyah, Bab مَرْفُوعَاتِ الْأَسْمَاءِ (فَصْلُ الْفَاعِلِ).'
  },
  {
    id: 'ex-2',
    title: 'Tanda I\'rab Isim Inna dan Khabar Inna',
    category: 'irab',
    difficulty: 'pemula',
    topicTag: 'imrithi-nawasikh',
    question: 'Pada kalimat "إِنَّ اللهَ غَفُورٌ رَحِيمٌ", bagaimanakah status I\'rab dari lafadz "اللهَ" dan "غَفُورٌ"?',
    arabicSnippet: 'إِنَّ اللهَ غَفُورٌ رَحِيمٌ',
    options: [
      'اللهَ: Isim Inna marfu\' | غَفُورٌ: Khabar Inna manshub',
      'اللهَ: Isim Inna manshub bil fathah | غَفُورٌ: Khabar Inna marfu\' bid dhommah',
      'اللهَ: Mubtada\' marfu\' | غَفُورٌ: Fa\'il marfu\'',
      'Keduanya majrur karena didahului amil jar'
    ],
    correctAnswerIndex: 1,
    explanation: 'Amil Inna (إِنَّ) dan saudaranya bertugas menashabkan isim dan merafa\'kan khabar (تَنْصِبُ الِاسْمَ وَتَرْفَعُ الْخَبَرَ). Lafadz Jalalah "اللهَ" berstatus Isim Inna manshub dengan fathah, sedangkan "غَفُورٌ" berstatus Khabar Inna marfu\' dengan dhommah.',
    kitabReference: 'Kitab Al-Ajurumiyyah & Nazham Imrithi, Bab بَابُ إِنَّ وَأَخَوَاتِهَا.'
  },
  {
    id: 'ex-3',
    title: 'Mengenal Wazan Fi\'il Tsulatsi Mujarrad Bab 1',
    category: 'shorof',
    difficulty: 'pemula',
    topicTag: 'amtsilah-tsulatsi-mujarrad',
    question: 'Fi\'il berikut yang mengikuti wazan Bab 1 Tsulatsi Mujarrad (فَعَلَ - يَفْعُلُ) dengan pola perubahan "fathu-dhommin" adalah:',
    arabicSnippet: 'فَعَلَ - يَفْعُلُ',
    options: [
      'ضَرَبَ - يَضْرِبُ',
      'فَتَحَ - يَفْتَحُ',
      'نَصَرَ - يَنْصُرُ',
      'حَسِبَ - يَحْسِبُ'
    ],
    correctAnswerIndex: 2,
    explanation: 'Bab 1 Tsulatsi Mujarrad memiliki rumus "Fathu Dhommin" (فَعَلَ - يَفْعُلُ), dengan contoh mu\'tamadnya adalah نَصَرَ - يَنْصُرُ dan كَتَبَ - يَكْتُبُ. Adapun ضَرَبَ يَضْرِبُ adalah bab 2 (fathu kasrin), dan فَتَحَ يَفْتَحُ adalah bab 3 (fathatani).',
    kitabReference: 'Kitab Amtsilah Tashrifiyah, Bab أَبْوَابُ الثُّلَاثِيِّ الْمُجَرَّدِ السِّتَّةُ.'
  },
  {
    id: 'ex-4',
    title: 'Tanda I\'rab Rafa\' pada Jamak Mudzakkar Salim',
    category: 'nahwu',
    difficulty: 'pemula',
    topicTag: 'jurumiyyah-alamat-irab',
    question: 'Pada kalimat "حَضَرَ الْمُعَلِّمُونَ", tanda I\'rab rafa\' pada kata "الْمُعَلِّمُونَ" adalah:',
    arabicSnippet: 'حَضَرَ الْمُعَلِّمُونَ',
    options: [
      'Dhommah zhahirah',
      'Huruf Wawu sebagai pengganti dhommah',
      'Huruf Alif',
      'Tetap sukun (mabni)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Jamak Mudzakkar Salim saat berada dalam keadaan rafa\' ditandai dengan huruf Wawu (الْوَاوُ نِيَابَةً عَنِ الضَّمَّةِ), dan huruf Nun di akhirnya adalah pengganti tanwin pada isim mufrad.',
    kitabReference: 'Kitab Al-Ajurumiyyah, Bab عَلَامَاتُ الرَّفْعِ (فَصْلُ الْوَاوِ).'
  },

  // LEVEL 2: MENENGAH
  {
    id: 'ex-5',
    title: 'Tarkib Maf\'ul Bih dan Hal pada Ayat Al-Qur\'an',
    category: 'irab',
    difficulty: 'menengah',
    topicTag: 'jurumiyyah-manshubat',
    question: 'Pada firman Allah: "وَخَلَقَ الْإِنْسَانَ ضَعِيفًا", bagaimanakah kedudukan I\'rab dari lafadz "الْإِنْسَانَ" dan "ضَعِيفًا"?',
    arabicSnippet: 'وَخَلَقَ الْإِنْسَانَ ضَعِيفًا',
    options: [
      'الْإِنْسَانَ: Fa\'il | ضَعِيفًا: Maf\'ul bih',
      'الْإِنْسَانَ: Maf\'ul bih manshub | ضَعِيفًا: Hal manshub',
      'الْإِنْسَانَ: Mubtada\' | ضَعِيفًا: Khabar',
      'الْإِنْسَانَ: Naibul Fa\'il | ضَعِيفًا: Tamyiz'
    ],
    correctAnswerIndex: 1,
    explanation: 'Kata "الْإِنْسَانَ" adalah Maf\'ul bih (objek penciptaan) dari fi\'il خَلَقَ yang fa\'ilnya dhomir mustatir jawazan taqdiruhu Huwa (Allah). Sedangkan "ضَعِيفًا" adalah Hal (keterangan kondisi manusia saat diciptakan), keduanya wajib manshub dengan tanda fathah.',
    kitabReference: 'Kitab Al-Ajurumiyyah & Nazham Imrithi, Bab بَابُ الْحَالِ وَالْمَفْعُولِ بِهِ.'
  },
  {
    id: 'ex-6',
    title: 'Bentuk Isim Fa\'il dan Isim Maf\'ul Fi\'il Mazid',
    category: 'shorof',
    difficulty: 'menengah',
    topicTag: 'amtsilah-tsulatsi-mazid',
    question: 'Dari fi\'il "أَكْرَمَ" (wazan أَفْعَلَ / Tsulatsi Mazid bi Harfin), manakah bentuk Isim Fa\'il dan Isim Maf\'ul yang benar?',
    arabicSnippet: 'أَكْرَمَ - يُكْرِمُ',
    options: [
      'كَارِمٌ dan مَكْرُومٌ',
      'مُكْرِمٌ (Isim Fa\'il) dan مُكْرَمٌ (Isim Maf\'ul)',
      'مُكْرَمٌ (Isim Fa\'il) dan مُكْرِمٌ (Isim Maf\'ul)',
      'إِكْرَامٌ dan مَكْرَمَةٌ'
    ],
    correctAnswerIndex: 1,
    explanation: 'Kaidah pembentukan Isim Fa\'il dan Isim Maf\'ul fi\'il selain tsulatsi mujarrad: ambil fi\'il mudhari\' (يُكْرِمُ), ganti huruf mudhara\'ah dengan Mim dhommah (مُـ), lalu kasrah huruf sebelum akhir untuk Isim Fa\'il (مُكْرِمٌ = yang memuliakan) dan fathah untuk Isim Maf\'ul (مُكْرَمٌ = yang dimuliakan).',
    kitabReference: 'Kitab Amtsilah Tashrifiyah, Bab الثُّلَاثِيُّ الْمَزِيدُ بِحَرْفٍ.'
  },
  {
    id: 'ex-7',
    title: 'Kaidah I\'lal: Asal Mula Kata "قَالَ"',
    category: 'shorof',
    difficulty: 'menengah',
    topicTag: 'maqshud-ilal-qalb',
    question: 'Berdasarkan kaidah I\'lal pada kitab Al-Maqshud, kata "قَالَ" berasal dari bentuk asal...',
    arabicSnippet: 'قَالَ (Fi\'il Madhi Ajwaf Wawi)',
    options: [
      'قَيَلَ',
      'قَوَلَ',
      'أَقْوَلَ',
      'قُولَ'
    ],
    correctAnswerIndex: 1,
    explanation: 'Asal kata قَالَ adalah قَوَلَ berwazan فَعَلَ. Sesuai Kaidah I\'lal: "Apabila huruf Wawu atau Ya berharakat dan huruf sebelumnya berharakat fathah, maka wajib diganti menjadi Alif". Maka Wawu pada قَوَلَ diganti Alif menjadi قَالَ.',
    kitabReference: 'Kitab Al-Maqshud, Bab قَوَاعِدُ الْإِعْلَالِ وَقَلْبِ حُرُوفِ الْعِلَّةِ.'
  },
  {
    id: 'ex-8',
    title: 'Syarat I\'rab Asma\'us Sittah dengan Huruf',
    category: 'nahwu',
    difficulty: 'menengah',
    topicTag: 'mutammimah-asma-sittah',
    question: 'Kapankah lafadz "أَبُو" di-i\'rab dengan huruf (Wawu, Alif, Ya), dan kapan di-i\'rab dengan harakat taqdiriyah?',
    arabicSnippet: 'جَاءَ أَبُوكَ vs جَاءَ أَبِي',
    options: [
      'Selalu dengan huruf tanpa syarat apapun',
      'Dengan huruf jika diidhofahkan ke selain Ya Mutakallim (أَبُوكَ); dan dengan harakat taqdiriyah jika diidhofahkan ke Ya Mutakallim (أَبِي)',
      'Dengan huruf hanya jika berupa isim nakirah tanpa idhofah',
      'Hanya boleh di-i\'rab saat berbentuk jamak taksir'
    ],
    correctAnswerIndex: 1,
    explanation: 'Syarat Asma\'us Sittah di-i\'rab dengan huruf: harus mufrad, mukabbarah, dan diidhofahkan kepada selain Ya Mutakallim. Jika diidhofahkan kepada Ya Mutakallim seperti "أَبِي", maka tanda i\'rabnya adalah harakat taqdiriyah sebelum Ya.',
    kitabReference: 'Kitab Mutammimah Al-Ajurumiyyah, Bab الْأَسْمَاءِ السِّتَّةِ.'
  },

  // LEVEL 3: MAHIR / LANJUTAN
  {
    id: 'ex-9',
    title: 'Taqdim Maf\'ul Bih atas Fa\'il pada QS. Fathir: 28',
    category: 'irab',
    difficulty: 'mahir',
    topicTag: 'alfiyah-fail-naibul-fail',
    question: 'Pada firman Allah: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ", manakah kata yang berkedudukan sebagai Fa\'il dan mengapa lafadz "اللَّهَ" berstatus manshub?',
    arabicSnippet: 'إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ',
    options: [
      'Fa\'ilnya dhomir mustatir, dan lafadz Allah adalah badal',
      'Fa\'ilnya adalah "الْعُلَمَاءُ" (marfu\' diakhirkan), sedangkan "اللَّهَ" adalah Maf\'ul bih muqaddam yang didahulukan (manshub)',
      'Lafadz "اللَّهَ" adalah Fa\'il dan "الْعُلَمَاءُ" adalah Maf\'ul bih',
      'Ayat ini tidak memiliki fa\'il karena ada partikel pembatas إِنَّمَا'
    ],
    correctAnswerIndex: 1,
    explanation: 'Dalam ayat ini terjadi taqdim maf\'ul bih atas fa\'il (Maf\'ul Muqaddam). Lafadz Jalalah "اللَّهَ" berstatus Maf\'ul bih manshub (Dzat yang diagungkan/ditakuti). Sedangkan fa\'il hakikinya adalah "الْعُلَمَاءُ" marfu\' bid dhommah (para ulama lah yang memiliki rasa takut mengagungkan Allah).',
    kitabReference: 'Kitab Alfiyah Ibnu Malik, Bab الْفَاعِلُ (فَصْلُ تَقْدِيمِ الْمَفْعُولِ عَلَى الْفَاعِلِ).'
  },
  {
    id: 'ex-10',
    title: 'Hukum Idgham Fi\'il Mudho\'af saat Bersambung Dhomir Rafa\' Mutaharrik',
    category: 'shorof',
    difficulty: 'mahir',
    topicTag: 'maqshud-idgham',
    question: 'Pada fi\'il mudho\'af "مَدَّ" (asalnya مَدَدَ), mengapakah ketika ditashrif bersama dhomir "أَنَا" menjadi "مَدَدْتُ" dan hukum idghamnya terlarang (mumtani\')?',
    arabicSnippet: 'مَدَّ -> مَدَدْتُ',
    options: [
      'Karena huruf dal berubah menjadi huruf halaq',
      'Karena huruf Dal kedua menjadi sukun akibat bersambung dengan dhomir rafa\' mutaharrik (Ta\' fa\'il), sehingga syarat idgham gugur',
      'Karena wazannya berubah menjadi fi\'il ruba\'i',
      'Karena huruf Dal pertama diganti menjadi alif'
    ],
    correctAnswerIndex: 1,
    explanation: 'Syarat idgham dua huruf serupa adalah huruf kedua wajib berharakat. Ketika fi\'il madhi bersambung dengan dhomir rafa\' mutaharrik (تَ، تِ، تُ، نَا), huruf akhir fi\'il disukunkan (مَدَدْتُ), sehingga idgham dilarang (Mumtani\'ul Idgham) dan wajib diurai (Fakkul Idgham).',
    kitabReference: 'Kitab Al-Maqshud, Bab أَحْكَامُ الْإِدْغَامِ فِي الْفِعْلِ الْمُضَاعَفِ.'
  },
  {
    id: 'ex-11',
    title: 'Fa\'il Sadda Masaddal Khabar pada Nadzham Alfiyah',
    category: 'nahwu',
    difficulty: 'mahir',
    topicTag: 'alfiyah-mubtada-khabar',
    question: 'Dalam kaidah Ibnu Malik: "أَقَائِمٌ الزَّيْدَانِ", bagaimanakah susunan tarkib dari lafadz "قَائِمٌ" dan "الزَّيْدَانِ"?',
    arabicSnippet: 'أَقَائِمٌ الزَّيْدَانِ',
    options: [
      'قَائِمٌ: Fa\'il | الزَّيْدَانِ: Maf\'ul bih',
      'قَائِمٌ: Mubtada\' berstatus sifat | الزَّيْدَانِ: Fa\'il marfu\' yang mencukupi dari khabar (Fa\'il sadda masaddal khabar)',
      'قَائِمٌ: Khabar muqaddam | الزَّيْدَانِ: Mubtada\' muakhkhar tanpa syarat',
      'Keduanya adalah dua khabar yang bertumpuk'
    ],
    correctAnswerIndex: 1,
    explanation: 'Apabila Isim Sifat (قَائِمٌ) terletak setelah huruf istifham atau nafi, ia menjadi Mubtada\' yang merafa\'kan isim zhahir setelahnya (الزَّيْدَانِ) sebagai Fa\'il Sadda Masaddal Khabar (fa\'il yang menempati dan mencukupi fungsi khabar).',
    kitabReference: 'Kitab Alfiyah Ibnu Malik, Bab الْمُبْتَدَأُ وَالْخَبَرُ (فَصْلُ وَصْفٍ سَدَّ مَسَدَّ الْخَبَرِ).'
  },
  {
    id: 'ex-12',
    title: 'Hukum Wajib Ta\'nits Fi\'il bersama Fa\'il Muannats Hakiki',
    category: 'nahwu',
    difficulty: 'menengah',
    topicTag: 'mutammimah-tanis-fil',
    question: 'Manakah di antara kalimat berikut yang WAJIB menyertakan Ta\' Ta\'nits pada fi\'ilnya menurut kaidah Mutammimah?',
    arabicSnippet: 'قَامَتْ هِنْدٌ vs طَلَعَتِ الشَّمْسُ',
    options: [
      'حَضَرَ الْقَاضِيَ امْرَأَةٌ',
      'قَامَتْ فَاطِمَةُ (Fa\'il isim zhahir muannats hakiki tanpa pemisah dari fi\'il)',
      'قَالَ نِسْوَةٌ فِي الْمَدِينَةِ',
      'Semua kalimat di atas hukumnya wajib mudzakkar'
    ],
    correctAnswerIndex: 1,
    explanation: 'Wajib menta\'nits fi\'il dengan ta\' sakinah apabila fa\'ilnya berupa isim zhahir muannats hakiki dan langsung bersambung tanpa pemisah dengan fi\'ilnya, seperti "قَامَتْ فَاطِمَةُ".',
    kitabReference: 'Kitab Mutammimah Al-Ajurumiyyah, Bab أَحْكَامِ تَأْنِيثِ الْفِعْلِ مَعَ الْفَاعِلِ.'
  }
];
