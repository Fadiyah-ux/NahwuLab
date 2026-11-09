import { LibraryBookItem, ExerciseItem } from '../types';

export const SEED_BOOKS: LibraryBookItem[] = [
  {
    "id": "mutammimah-al-jurumiyyah",
    "title": "Muthammimah al-Jurumiyah",
    "titleArabic": "مُتَمِّمَةُ الْآجُرُّومِيَّةِ فِي عِلْمِ الْعَرَبِيَّةِ",
    "author": "Syaikh Syamsuddin Muhammad bin Muhammad Ar-Ra'ini (Al-Haththab Al-Maliki)",
    "category": "nahwu",
    "description": "Kitab rujukan tunggal ilmu nahwu SmartKib. Karya penyempurna matan Al-Ajurumiyyah yang menguraikan kaidah sintaksis bahasa Arab secara mendalam, sistematis, dan komprehensif.",
    "level": "Mubtadi', Mutawassith & Mutaqaddim",
    "coverColor": "from-[#0C122C] to-[#161F46]",
    "chapters": [
      {
        "id": "mutammimah-tarjamah",
        "titleArabic": "تَرْجَمَةُ الْمُؤَلِّفِ",
        "titleIndo": "Bab 1: Biografi Pengarang (Syaikh Al-Haththab Ar-Ra'ini)",
        "contentArabic": "هُوَ الشَّيْخُ الْإِمَامُ الْعَلَّامَةُ أَبُو عَبْدِ اللَّهِ شَمْسُ الدِّينِ مُحَمَّدُ بْنُ مُحَمَّدِ بْنِ عَبْدِ الرَّحْمَنِ الرَّاعِينِيُّ الْمَعْرُوفُ بِالْحَطَّابِ الْمَالِكِيُّ. وُلِدَ بِمَكَّةَ الْمُكَرَّمَةِ سَنَةَ ٩٠٢ هـ، وَتُوُفِّيَ بِطَرَابُلُسَ سَنَةَ ٩٥٤ هـ. كَانَ فَقِيهًا أُصُولِيًّا نَحْوِيًّا بَارِعًا، صَنَّفَ \"مُتَمِّمَةَ الْآجُرُّومِيَّةِ\" لِتَكُونَ صِلَةً وَافِيَةً بَيْنَ الْمُخْتَصَرَاتِ وَالْمَبْسُوطَاتِ فِي عِلْمِ النَّحْوِ.",
        "translation": "Beliau adalah Al-Imam Al-'Allamah Abu Abdillah Syamsuddin Muhammad bin Muhammad bin Abdurrahman Ar-Ra'ini yang masyhur dengan julukan Al-Haththab Al-Maliki. Lahir di Makkah Al-Mukarramah tahun 902 H dan wafat di Tripoli tahun 954 H. Beliau adalah ahli fikih, ushul, dan nahwu terkemuka yang menyusun kitab Mutammimah ini sebagai jembatan penyempurna antara matan ringkas dan kitab-kitab induk nahwu.",
        "explanation": "Syaikh Al-Haththab menyusun Mutammimah guna melengkapi cabang-cabang kaidah yang belum sempat diuraikan secara luas dalam kitab ringkas, sehingga santri memiliki pijakan i'rab yang kokoh dan tuntas.",
        "keyPoints": [
          "Nama pengarang: Syaikh Syamsuddin Muhammad Ar-Ra'ini (Al-Haththab).",
          "Tujuan penulisan: Menyempurnakan (Tatmim) kaidah sintaksis bahasa Arab.",
          "Kedudukan: Sumber rujukan primer keilmuan nahwu di pesantren dan universitas Islam."
        ]
      },
      {
        "id": "mutammimah-muqaddimah",
        "titleArabic": "مُقَدِّمَةُ الْمُؤَلِّفِ",
        "titleIndo": "Bab 2: Mukaddimah Penulis tentang Penyempurnaan Kaidah",
        "contentArabic": "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى سَيِّدِنَا مُحَمَّدٍ خَاتَمِ النَّبِيِّينَ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ. أَمَّا بَعْدُ، فَهَذِهِ مُقَدِّمَةٌ فِي عِلْمِ الْعَرَبِيَّةِ مُتَمِّمَةٌ لِمَسَائِلِ \"الْآجُرُّومِيَّةِ\"، يَكْتَفِي بِهَا الْمُبْتَدِئُ عَنِ التَّطْوِيلِ، وَيَسْتَعِينُ بِهَا عَلَى فَهْمِ كَلَامِ رَبِّ الْعَالَمِينَ وَحَدِيثِ رَسُولِهِ الْأَمِينِ.",
        "translation": "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah Tuhan semesta alam, shalawat dan salam atas junjungan kita Muhammad penutup para Nabi serta keluarga dan segenap sahabatnya. Amma ba'du: Ini adalah risalah mukaddimah dalam ilmu tata bahasa Arab yang menyempurnakan permasalahan kitab Al-Ajurumiyyah, mencukupi penuntut pemula dari uraian bertele-tele dan menjadi washilah memahami kalam Allah dan sabda Rasul-Nya.",
        "explanation": "Mukaddimah menegaskan urgensi ilmu nahwu sebagai kunci memahami Al-Qur'an dan As-Sunnah. Pembahasan dalam kitab ini disusun secara aplikatif dan bernas.",
        "keyPoints": [
          "Fondasi utama: Membantu pemahaman nash Al-Qur'an dan Hadits secara akurat.",
          "Karakteristik: Ringkas, padat kaidah, dan kaya contoh i'rab aplikatif."
        ]
      },
      {
        "id": "mutammimah-kalam",
        "titleArabic": "الْكَلَامُ وَمَا يَتَأَلَّفُ مِنْهُ",
        "titleIndo": "Bab 3: Hakikat Kalam dan Unsur-Unsur Pembentuknya",
        "contentArabic": "الْكَلَامُ هُوَ اللَّفْظُ الْمُرَكَّبُ الْمُفِيدُ بِالْوَضْعِ. وَأَقْسَامُهُ الَّتِي يَتَأَلَّفُ مِنْهَا ثَلَاثَةٌ: اسْمٌ، وَفِعْلٌ، وَحَرْفٌ جَاءَ لِمَعْنًى.\nفَالِاسْمُ: يُعْرَفُ بِالْخَفْضِ، وَالتَّنْوِينِ، وَدُخُولِ الْأَلِفِ وَاللَّامِ، وَحُرُوفِ الْخَفْضِ.\nوَالْفِعْلُ: يُعْرَفُ بِقَدْ، وَالسِّينِ، وَسَوْفَ، وَتَاءِ التَّأْنِيثِ السَّاكِنَةِ، وَتَاءِ الْفَاعِلِ، وَيَاءِ الْمُخَاطَبَةِ، وَنُونِ التَّوْكِيدِ.\nوَالْحَرْفُ: مَا لَا يَصْلُحُ مَعَهُ دَلِيلُ الِاسْمِ وَلَا دَلِيلُ الْفِعْلِ.",
        "translation": "Kalam adalah lafadz yang tersusun (murakkab), berfaedah tuntas (mufid), dan berbahasa Arab (bil wadh'). Bagian pembentuknya ada tiga: Isim, Fi'il, dan Harf yang membawa makna. Isim dikenal dengan khafadh/kasrah, tanwin, masuknya alif lam (ال), dan huruf-huruf jar. Fi'il dikenal dengan قد, huruf sin (سـ), saufa (سوف), ta' ta'nits sakinah, ta' fa'il, ya' mukhatabah, dan nun taukid. Harf adalah kata yang tidak layak menerima tanda isim maupun tanda fi'il.",
        "explanation": "Kalam membutuhkan empat rukun: Suara bertata hijaiyah (lafadz), minimal dua kata (murakkab), memuaskan pemahaman pendengar (mufid), dan sengaja dirangkai menurut kaidah Arab (wadh').",
        "keyPoints": [
          "Empat rukun kalam: Al-Lafzh, Al-Murakkab, Al-Mufid, dan Al-Wadh'.",
          "Ciri isim: Jar, Tanwin, Alif-Lam, Idhafah.",
          "Ciri fi'il: Huruf Qad, Sin, Saufa, Ta' Ta'nits, Ta' Fa'il berharakat.",
          "Ciri harf: Bersifat pasif (menerima ketiadaan tanda isim & fi'il)."
        ]
      },
      {
        "id": "mutammimah-irab-bina",
        "titleArabic": "بَابُ الْإِعْرَابِ وَالْبِنَاءِ",
        "titleIndo": "Bab 4: Hakikat I'rab dan Pembagian Mabni",
        "contentArabic": "الْإِعْرَابُ: هُوَ تَغْيِيرُ أَوَاخِرِ الْكَلِمِ لِاخْتِلَافِ الْعَوَامِلِ الدَّاخِلَةِ عَلَيْهَا لَفْظًا أَوْ تَقْدِيرًا. وَأَقْسَامُهُ أَرْبَعَةٌ: رَفْعٌ، وَنَصْبٌ، وَخَفْضٌ، وَجَزْمٌ. فَلِلْأَسْمَاءِ مِنْ ذَلِكَ الرَّفْعُ، وَالنَّصْبُ، وَالْخَفْضُ، وَلَا جَزْمَ فِيهَا. وَلِلْأَفْعَالِ مِنْ ذَلِكَ الرَّفْعُ، وَالنَّصْبُ، وَالْجَزْمُ، وَلَا خَفْضَ فِيهَا.\nوَالْبِنَاءُ: لُزُومُ آخِرِ الْكَلِمَةِ حَالَةً وَاحِدَةً لِغَيْرِ عَامِلٍ وَلَا اعْتِلَالٍ.",
        "translation": "I'rab adalah perubahan kondisi akhir kata karena perbedaan amil yang masuk padanya, baik secara lafadz maupun taqdir (perkiraan). Bagian I'rab ada empat: Rafa', Nashab, Khafadh (Jar), dan Jazm. Isim mendapatkan Rafa', Nashab, dan Khafadh (tanpa jazm). Fi'il mendapatkan Rafa', Nashab, dan Jazm (tanpa khafadh). Sedangkan Bina' adalah bertahannya kondisi akhir kata pada satu keadaan bukan karena pengaruh amil dan bukan karena penyakit ilat.",
        "explanation": "Mutammimah merinci bahwa hukum asal pada isim adalah Mu'rab, dan mabni adalah cabang karena menyerupai huruf. Sebaliknya hukum asal fi'il (madhi & amr) adalah Mabni.",
        "keyPoints": [
          "Empat jenis I'rab: Rafa', Nashab, Jar/Khafadh, Jazm.",
          "Kekhususan Isim: Jar (tidak ada jazm pada isim).",
          "Kekhususan Fi'il: Jazm (tidak ada jar pada fi'il).",
          "Enam pintu isim mabni: Dhamir, Isyarah, Maushul, Syarat, Istifham, dan Asma'ul Af'al."
        ]
      },
      {
        "id": "mutammimah-alamat-irab",
        "titleArabic": "بَابُ مَعْرِفَةِ عَلَامَاتِ الْإِعْرَابِ",
        "titleIndo": "Bab 5: Pengenalan Tanda-Tanda I'rab dan Ragam Mu'rab",
        "contentArabic": "لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ: الضَّمَّةُ، وَالْوَاوُ، وَالْأَلِفُ، وَالنُّونُ.\nوَلِلنَّصْبِ خَمْسُ عَلَامَاتٍ: الْفَتْحَةُ، وَالْأَلِفُ، وَالْكَسْرَةُ، وَالْيَاءُ، وَحَذْفُ النُّونِ.\nوَلِلْخَفْضِ ثَلَاثُ عَلَامَاتٍ: الْكَسْرَةُ، وَالْيَاءُ، وَالْفَتْحَةُ.\nوَلِلْجَزْمِ عَلَامَتَانِ: السُّكُونُ، وَالْحَذْفُ.\nوَالْمُعْرَبَاتُ قِسْمَانِ: قِسْمٌ يُعْرَبُ بِالْحَرَكَاتِ، وَقِسْمٌ يُعْرَبُ بِالْحُرُوفِ. كَمَا يَنْقَسِمُ الْإِعْرَابُ إِلَى لَفْظِيٍّ وَتَقْدِيرِيٍّ فِي الْمَقْصُورِ وَالْمَنْقُوصِ وَالْمُضَافِ إِلَى يَاءِ الْمُتَكَلِّمِ.",
        "translation": "Rafa' memiliki 4 tanda: Dhommah, Wawu, Alif, dan Nun. Nashab memiliki 5 tanda: Fathah, Alif, Kasrah, Ya', dan Membuang Nun. Khafadh memiliki 3 tanda: Kasrah, Ya', dan Fathah. Jazm memiliki 2 tanda: Sukun dan Pembuangan (huruf 'ilat atau nun). Kata-kata mu'rab terbagi menjadi: mu'rab dengan harakat dan mu'rab dengan huruf. Mencakup pula i'rab taqdiri pada Isim Maqshur, Manqush, dan Mudhaf kepada Ya' Mutakallim, serta hukum Isim Ghair Munsharif.",
        "explanation": "Bab ini memetakan seluruh tanda pokok (ashliyyah) dan pengganti (far'iyyah) secara tuntas pada isim mufrad, jamak taksir, jamak muannats salim, jamak mudzakkar salim, asma'us sittah, isim ghair munsharif, dan af'alul khamsah.",
        "keyPoints": [
          "Tanda Rafa': Dhommah (pokok), Wawu (Jamak Mudzakkar & Asma'us Sittah), Alif (Tatsniyah), Nun (Af'alul Khamsah).",
          "Tanda Nashab: Fathah (pokok), Alif (Asma'us Sittah), Kasrah (Jamak Muannats), Ya' (Tatsniyah & Jamak), Hadzfun Nun.",
          "Tanda Khafadh: Kasrah (pokok), Ya' (Asma'us Sittah, Tatsniyah, Jamak), Fathah (Isim Ghair Munsharif).",
          "Tanda Jazm: Sukun (pokok), Hadzfun Nun dan Hadzfu Harfil 'Illah."
        ]
      },
      {
        "id": "mutammimah-nakirah-marifah",
        "titleArabic": "بَابُ النَّكِرَةِ وَالْمَعْرِفَةِ",
        "titleIndo": "Bab 6: Isim Nakirah dan Enam Ragam Isim Ma'rifah",
        "contentArabic": "النَّكِرَةُ: كُلُّ اسْمٍ شَائِعٍ فِي جِنْسِهِ لَا يَخْتَصُّ بِهِ وَاحِدٌ دُونَ آخَرَ، وَتَقْرِيبُهُ: كُلُّ مَا صَلَحَ دُخُولُ الْأَلِفِ وَاللَّامِ عَلَيْهِ نَحْوُ: رَجُلٍ وَفَرَسٍ.\nوَالْمَعْرِفَةُ سِتَّةُ أَقْسَامٍ:\n١. الْمُضْمَرُ (أَنَا، أَنْتَ، هُوَ).\n٢. الْعَلَمُ (زَيْدٌ، مَكَّةُ).\n٣. اسْمُ الْإِشَارَةِ (هَذَا، هَذِهِ، هَؤُلَاءِ).\n٤. الِاسْمُ الْمَوْصُولُ (الَّذِي، الَّتِي، الَّذِينَ).\n٥. الْمُعَرَّفُ بِالْأَلِفِ وَاللَّامِ (الرَّجُلُ، الْغُلَامُ).\n٦. الْمُضَافُ إِلَى وَاحِدٍ مِنْ هَذِهِ الْخَمْسَةِ.",
        "translation": "Nakirah adalah setiap isim yang berlaku umum pada jenisnya tanpa mengkhususkan satu dari yang lain; sederhananya adalah setiap kata yang pantas dimasuki Alif-Lam (seperti رجل dan فرس). Sedangkan Ma'rifah ada 6 bagian: (1) Isim Dhamir, (2) Isim 'Alam, (3) Isim Isyarah, (4) Isim Maushul, (5) Isim ber-Alif Lam, (6) Isim yang diidhafahkan kepada salah satu dari lima ma'rifah di atas.",
        "explanation": "Urutan tingkatan kema'rifahan menurut Mutammimah: Dhamir adalah yang paling ma'rifah, kemudian 'Alam, Isim Isyarah, Isim Maushul, Mu'arraf bi-Al, dan Mudhaf mengikuti derajat kata yang disandarinya.",
        "keyPoints": [
          "Nakirah: Bersifat umum dan menerima tanwin/Alif Lam.",
          "Tingkatan Ma'rifah: Dhamir > 'Alam > Isim Isyarah > Maushul > Ber-Alif Lam > Mudhaf.",
          "Dhamir munfashil rafa': أَنَا، نَحْنُ، أَنْتَ، هُوَ.",
          "Dhamir munfashil nashab: إِيَّايَ، إِيَّانَا، إِيَّاكَ."
        ]
      },
      {
        "id": "mutammimah-marfuat",
        "titleArabic": "بَابُ الْمَرْفُوعَاتِ مِنَ الْأَسْمَاءِ",
        "titleIndo": "Bab 7: Ikhtisar Tujuh Kategori Isim Marfu'",
        "contentArabic": "الْمَرْفُوعَاتُ سَبْعَةٌ وَهِيَ: الْفَاعِلُ، وَالْمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ، وَالْمُبْتَدَأُ، وَخَبَرُهُ، وَاسْمُ كَانَ وَأَخَوَاتِهَا، وَخَبَرُ إِنَّ وَأَخَوَاتِهَا، وَالتَّابِعُ لِلْمَرْفُوعِ وَهُوَ أَرْبَعَةُ أَشْيَاءَ: النَّعْتُ، وَالْعَطْفُ، وَالتَّوْكِيدُ، وَالْبَدَلُ.",
        "translation": "Isim-isim yang berstatus Marfu' ada 7: (1) Fa'il, (2) Maf'ul yang tidak disebutkan fa'ilnya (Na'ibul Fa'il), (3) Mubtada', (4) Khabar Mubtada', (5) Isim Kana dan saudaranya, (6) Khabar Inna dan saudaranya, (7) Pengikut isim marfu' (Tawabi') yang terdiri atas Na'at, 'Athaf, Taukid, dan Badal.",
        "explanation": "Status Rafa' adalah martabat i'rab tertinggi pada isim karena ia menandai pokok pembicaraan (Musnad ilaih dan Musnad). Mutammimah merincinya bab demi bab secara berurutan.",
        "keyPoints": [
          "Tujuh marfu'at asma': Fa'il, Na'ibul Fa'il, Mubtada', Khabar, Isim Kana, Khabar Inna, Tawabi'.",
          "Tawabi' lil marfu': Na'at, 'Athaf, Taukid, Badal."
        ]
      },
      {
        "id": "mutammimah-fail",
        "titleArabic": "بَابُ الْفَاعِلِ",
        "titleIndo": "Bab 8: Fa'il, Pembagiannya, dan Hukum Ta'nits Fi'il",
        "contentArabic": "الْفَاعِلُ: هُوَ الِاسْمُ الْمَرْفُوعُ الْمَذْكُورُ قَبْلَهُ فِعْلُهُ، نَحْوُ: قَامَ زَيْدٌ، وَيَقُومُ زَيْدٌ. وَهُوَ قِسْمَانِ: ظَاهِرٌ وَمُضْمَرٌ.\nوَيَجِبُ تَأْنِيثُ الْفِعْلِ مَعَ الْفَاعِلِ فِي مَوْضِعَيْنِ: أَحَدُهُمَا: أَنْ يَكُونَ الْفَاعِلُ اسْمًا ظَاهِرًا حَقِيقِيَّ التَّأْنِيثِ غَيْرَ مُنْفَصِلٍ عَنِ الْفِعْلِ نَحْوُ: قَامَتْ هِنْدٌ. وَالثَّانِي: أَنْ يَكُونَ ضَمِيرًا مُسْتَتِرًا يَعُودُ عَلَى مُؤَنَّثٍ نَحْوُ: الشَّمْسُ طَلَعَتْ.",
        "translation": "Fa'il adalah isim marfu' yang disebutkan fi'ilnya sebelum dirinya, seperti قَامَ زَيْدٌ dan يَقُومُ زَيْدٌ. Fa'il terbagi menjadi isim zhahir dan isim dhamir. Fi'il wajib dita'nits pada dua keadaan: (1) Fa'il berupa isim zhahir muannats hakiki tanpa pemisah dari fi'il (قَامَتْ هِنْدٌ), (2) Fa'il berupa dhamir mustatir yang kembali kepada muannats (الشَّمْسُ طَلَعَتْ).",
        "explanation": "Mutammimah memperinci hukum ta'nits wajib dan jaiz, serta hukum fi'il yang tetap dalam bentuk tunggal (mufrad) meskipun fa'ilnya berbentuk tatsniyah atau jamak (seperti قَامَ الزَّيْدَانِ dan قَامَ الزَّيْدُونَ).",
        "keyPoints": [
          "Definisi Fa'il: Isim marfu' yang terletak setelah fi'il ma'lum.",
          "Wajib Ta'nits: Muannats hakiki muttashil dan Dhamir mustatir muannats.",
          "Fi'il tidak dijama'kan bila fa'ilnya isim zhahir jamak (Lughah Fusha)."
        ]
      },
      {
        "id": "mutammimah-naibul-fail",
        "titleArabic": "بَابُ الْمَفْعُولِ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ",
        "titleIndo": "Bab 9: Na'ibul Fa'il dan Perubahan Wujud Fi'il Majhul",
        "contentArabic": "وَهُوَ الِاسْمُ الْمَرْفُوعُ الَّذِي لَمْ يُذْكَرْ مَعَهُ فَاعِلُهُ. فَإِنْ كَانَ الْفِعْلُ مَاضِيًا ضُمَّ أَوَّلُهُ وَكُسِرَ مَا قَبْلَ آخِرِهِ نَحْوُ: ضُرِبَ زَيْدٌ. وَإِنْ كَانَ مُضَارِعًا ضُمَّ أَوَّلُهُ وَفُتِحَ مَا قَبْلَ آخِرِهِ نَحْوُ: يُضْرَبُ زَيْدٌ.\nوَالَّذِي يَنُوبُ عَنِ الْفَاعِلِ أَرْبَعَةُ أَشْيَاءَ: الْمَفْعُولُ بِهِ، وَالْمَصْدَرُ الْمُتَصَرِّفُ الْمُخْتَصُّ، وَظَرْفُ الزَّمَانِ أَوِ الْمَكَانِ الْمُخْتَصُّ، وَالْجَارُّ وَالْمَجْرُورُ.",
        "translation": "Na'ibul Fa'il adalah isim marfu' yang tidak disebutkan bersama fa'ilnya. Jika fi'ilnya madhi maka huruf pertamanya didhommah dan huruf sebelum akhir dikasrah (ضُرِبَ). Jika fi'ilnya mudhari' maka huruf pertamanya didhommah dan huruf sebelum akhir difathah (يُضْرَبُ). Yang berhak menggantikan posisi fa'il ada 4: Maf'ul Bih, Masdar mutasharrif mukhtash, Zharf zaman/makan mukhtash, dan Jar-Majrur.",
        "explanation": "Ketika fa'il dibuang karena tujuan tertentu (meringkas, memuliakan, atau menyamarkan pelaku), maka objek maf'ul bih dinaikkan derajatnya menjadi marfu' dengan seluruh hukum fa'il.",
        "keyPoints": [
          "Rumus Fi'il Madhi Majhul: Dhommah awal, kasrah sebelum akhir (كُتِبَ).",
          "Rumus Mudhari' Majhul: Dhommah awal, fathah sebelum akhir (يُكْتَبُ).",
          "Empat pengganti fa'il: Maf'ul bih, Masdar mukhtash, Zharf mukhtash, Jar-Majrur."
        ]
      },
      {
        "id": "mutammimah-mubtada-khabar",
        "titleArabic": "بَابُ الْمُبْتَدَأِ وَالْخَبَرِ",
        "titleIndo": "Bab 10: Mubtada', Khabar, dan Fa'il Sadda Masaddal Khabar",
        "contentArabic": "الْمُبْتَدَأُ: هُوَ الِاسْمُ الْمَرْفُوعُ الْعَارِي عَنِ الْعَوَامِلِ اللَّفْظِيَّةِ. وَالْخَبَرُ: هُوَ الِاسْمُ الْمَرْفُوعُ الْمُسْنَدُ إِلَيْهِ، نَحْوُ: زَيْدٌ قَائِمٌ، وَالزَّيْدَانِ قَائِمَانِ، وَالزَّيْدُونَ قَائِمُونَ.\nوَالْمُبْتَدَأُ قِسْمَانِ: مُبْتَدَأٌ لَهُ خَبَرٌ نَحْوُ: زَيْدٌ قَائِمٌ، وَمُبْتَدَأٌ لَهُ فَاعِلٌ سَدَّ مَسَدَّ الْخَبَرِ نَحْوُ: أَقَائِمٌ الزَّيْدَانِ، وَمَا قَائِمٌ الزَّيْدَانِ، بِشَرْطِ أَنْ يَتَقَدَّمَهُ نَفْيٌ أَوْ اسْتِفْهَامٌ.\nوَالْخَبَرُ قِسْمَانِ: مُفْرَدٌ وَغَيْرُ مُفْرَدٍ (جُمْلَةٌ اسْمِيَّةٌ أَوْ فِعْلِيَّةٌ، وَشِبْهُ جُمْلَةٍ).",
        "translation": "Mubtada' adalah isim marfu' yang sunyi dari amil-amil lafdziyah. Khabar adalah isim marfu' yang disandarkan kepada mubtada', seperti زَيْدٌ قَائِمٌ. Mubtada' terbagi dua: (1) Mubtada' yang memiliki khabar, (2) Mubtada' yang memiliki Fa'il pengganti khabar (Fa'il Sadda Masaddal Khabar) pada contoh أَقَائِمٌ الزَّيْدَانِ dengan syarat didahului nafi atau istifham. Khabar terbagi menjadi: Mufrad dan Ghair Mufrad (Jumlah Ismiyyah, Fi'liyyah, Zharf, atau Jar-Majrur).",
        "explanation": "Amil pada mubtada' adalah amil maknawi (Ibtida'), sedangkan amil pada khabar adalah mubtada' itu sendiri. Mutammimah menerangkan syarat-syarat pembolehan mubtada' berupa nakirah.",
        "keyPoints": [
          "Amil Mubtada': Amil Maknawi (Ibtida').",
          "Fa'il Sadda Masaddal Khabar: Isim sifat setelah nafi/istifham yang merafa'kan fa'il zhahir.",
          "Khabar Ghair Mufrad: Jumlah (Fi'liyyah/Ismiyyah) yang membutuhkan rabith/dhamir penghubung, dan Syibhu Jumlah."
        ]
      },
      {
        "id": "mutammimah-awamil-nawasikh",
        "titleArabic": "بَابُ الْعَوَامِلِ الدَّاخِلَةِ عَلَى الْمُبْتَدَأِ وَالْخَبَرِ",
        "titleIndo": "Bab 11: Amil Pengubah (Kaana, Ma/La, Kada, Inna, La Jins, Zhanna)",
        "contentArabic": "وَهِيَ ثَلَاثَةُ أَشْيَاءَ: كَانَ وَأَخَوَاتُهَا، وَإِنَّ وَأَخَوَاتُهَا، وَظَنَنْتُ وَأَخَوَاتُهَا.\n١. كَانَ وَأَخَوَاتُهَا: تَرْفَعُ الِاسْمَ وَتَنْصِبُ الْخَبَرَ، وَيَلْحَقُ بِهَا الْحُرُوفُ الْمُشَبَّهَةُ بِلَيْسَ (مَا، لَا، لَاتَ، إِنْ)، وَأَفْعَالُ الْمُقَارَبَةِ (كَادَ، عَسَى).\n٢. إِنَّ وَأَخَوَاتُهَا: تَنْصِبُ الِاسْمَ وَتَرْفَعُ الْخَبَرَ (إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَيْتَ، لَعَلَّ)، وَيَلْحَقُ بِهَا لَا النَّافِيَةُ لِلْجِنْسِ.\n٣. ظَنَنْتُ وَأَخَوَاتُهَا: تَنْصِبُ الْمُبْتَدَأَ وَالْخَبَرَ مَعًا عَلَى أَنَّهُمَا مَفْعُولَانِ لَهَا (ظَنَّ، حَسِبَ، خَالَ، زَعَمَ، رَأَى، عَلِمَ، وَجَدَ، اتَّخَذَ، جَعَلَ).",
        "translation": "Amil nawasikh terbagi menjadi tiga kelompok: (1) Kaana dan saudaranya: merafa'kan isim dan menashabkan khabar; mencakup huruf yang diserupakan dengan Laisa (Ma, La, Lata, In) dan Af'alul Muqarabah (Kada, 'Asa). (2) Inna dan saudaranya: menashabkan isim dan merafa'kan khabar; mencakup La an-Nafiyah lil-Jins. (3) Zhanna dan saudaranya: menashabkan mubtada' dan khabar sekaligus sebagai dua maf'ul baginya.",
        "explanation": "Nawasikh merombak tatanan mubtada' dan khabar. Mutammimah menjelaskan secara mendalam hukum amil mulghah (batal beramal) dan amil mu'allaqah (tertahan amalnya karena istifham/nafi/lam ibtida').",
        "keyPoints": [
          "Kaana wa Akhawatuha: Rafa' isim, Nashab khabar.",
          "Huruful Musyabbahah bi Laisa: مَا الْحِجَازِيَّةُ beramal seperti Laisa.",
          "Inna wa Akhawatuha: Nashab isim, Rafa' khabar.",
          "Zhanna wa Akhawatuha: Menashabkan 2 maf'ul asal mubtada'-khabar."
        ]
      },
      {
        "id": "mutammimah-manshubat",
        "titleArabic": "بَابُ مَنْصُوبَاتِ الْأَسْمَاءِ",
        "titleIndo": "Bab 12: Ikhtisar Lima Belas Kategori Isim Manshub",
        "contentArabic": "الْمَنْصُوبَاتُ خَمْسَةَ عَشَرَ وَهِيَ: الْمَفْعُولُ بِهِ، وَالْمَفْعُولُ الْمُطْلَقُ، وَظَرْفُ الزَّمَانِ، وَظَرْفُ الْمَكَانِ، وَالْحَالُ، وَالتَّمْيِيزُ، وَالْمُسْتَثْنَى، وَاسْمُ لَا، وَالْمُنَادَى، وَالْمَفْعُولُ مِنْ أَجْلِهِ، وَالْمَفْعُولُ مَعَهُ، وَخَبَرُ كَانَ وَأَخَوَاتِهَا، وَاسْمُ إِنَّ وَأَخَوَاتِهَا، وَخَبَرُ الْحُرُوفِ الْمُشَبَّهَةِ بِلَيْسَ، وَالتَّابِعُ لِلْمَنْصُوبِ (النَّعْتُ، وَالْعَطْفُ، وَالتَّوْكِيدُ، وَالْبَدَلُ).",
        "translation": "Isim-isim yang berstatus Manshub ada 15: Maf'ul Bih, Maf'ul Muthlaq, Zharf Zaman, Zharf Makan, Hal, Tamyiz, Mustatsna, Isim La, Munada, Maf'ul min Ajlih, Maf'ul Ma'ah, Khabar Kaana, Isim Inna, Khabar Huruf Musyabbahah bi Laisa, dan Pengikut isim manshub (Tawabi').",
        "explanation": "Status Nashab adalah kedudukan terluas dalam bahasa Arab karena mencakup seluruh jenis maf'ul (fadhlah) dan pelengkap makna kalimat.",
        "keyPoints": [
          "Maf'ul Khamsah: Maf'ul Bih, Muthlaq, Fihi (Zharf), Lah/Min Ajlih, Ma'ahu.",
          "Pelengkap: Hal, Tamyiz, Mustatsna, Munada, Isim La.",
          "Nawasikh & Tawabi': Khabar Kaana, Isim Inna, dan pengikut manshub."
        ]
      },
      {
        "id": "mutammimah-maful-bihi",
        "titleArabic": "بَابُ الْمَفْعُولِ بِهِ وَأَحْكَامِهِ",
        "titleIndo": "Bab 13: Maf'ul Bih, Kaidah Isytighal, dan Munada",
        "contentArabic": "الْمَفْعُولُ بِهِ: هُوَ الِاسْمُ الْمَنْصُوبُ الَّذِي يَقَعُ بِهِ الْفِعْلُ، نَحْوُ: ضَرَبْتُ زَيْدًا، وَرَكِبْتُ الْفَرَسَ. وَهُوَ قِسْمَانِ: ظَاهِرٌ وَمُضْمَرٌ (مُتَّصِلٌ وَمُنْفَصِلٌ).\nوَمِنْ مَبَاحِثِهِ: بَابُ الِاشْتِغَالِ نَحْوُ: زَيْدًا ضَرَبْتُهُ، وَبَابُ الْمُنَادَى، وَهُوَ خَمْسَةُ أَنْوَاعٍ: الْمُفْرَدُ الْعَلَمُ، وَالنَّكِرَةُ الْمَقْصُودَةُ (يُبْنَيَانِ عَلَى الضَّمِّ)، وَالنَّكِرَةُ غَيْرُ الْمَقْصُودَةِ، وَالْمُضَافُ، وَالشَّبِيهُ بِالْمُضَافِ (تُنْصَبُ ثَلَاثَتُهَا).",
        "translation": "Maf'ul Bih adalah isim manshub yang dikenai oleh perbuatan, seperti ضَرَبْتُ زَيْدًا. Terbagi menjadi isim zhahir dan dhamir (muttashil & munfashil). Termasuk pembahasannya adalah Bab Isytighal (seperti زَيْدًا ضَرَبْتُهُ) dan Bab Munada yang terbagi 5 macam: Mufrad 'Alam dan Nakirah Maqshudah (keduanya mabni atas dhommah), serta Nakirah Ghair Maqshudah, Mudhaf, dan Syabih bil Mudhaf (ketiganya manshub).",
        "explanation": "Mutammimah memperinci bab Isytighal (kesibukan amil dengan dhamir) dan hukum nida' ketika diidhafahkan ke Ya' Mutakallim (يَا غُلَامِي / يَا غُلَامِ / يَا غُلَامَا).",
        "keyPoints": [
          "Dhamir Manshub Muttashil: ـه، ـها، ـك، ـي، ـنا.",
          "Munada Mabni 'Alad Dhomm: يَا زَيْدُ، يَا رَجُلُ (maqshudah).",
          "Munada Manshub: يَا رَجُلًا خُذْ بِيَدِي (ghair maqshudah), يَا عَبْدَ اللَّهِ (mudhaf)."
        ]
      },
      {
        "id": "mutammimah-maful-muthlaq",
        "titleArabic": "بَابُ الْمَفْعُولِ الْمُطْلَقِ",
        "titleIndo": "Bab 14: Maf'ul Muthlaq (Masdar Penguat, Jenis, dan Jumlah)",
        "contentArabic": "الْمَفْعُولُ الْمُطْلَقُ: هُوَ الْمَصْدَرُ الْمَنْصُوبُ الَّذِي يَجِيءُ ثَالِثًا فِي تَصْرِيفِ الْفِعْلِ، نَحْوُ: ضَرَبَ يَضْرِبُ ضَرْبًا. وَهُوَ قِسْمَانِ: لَفْظِيٌّ نَحْوُ: قَتَلْتُهُ قَتْلًا، وَمَعْنَوِيٌّ نَحْوُ: جَلَسْتُ قُعُودًا.\nوَفَائِدَتُهُ ثَلَاثَةُ أُمُورٍ: لِتَوْكِيدِ عَامِلِهِ نَحْوُ: وَكَلَّمَ اللَّهُ مُوسَى تَكْلِيمًا، أَوْ لِبَيَانِ نَوْعِهِ نَحْوُ: سِرْتُ سَيْرَ الصَّالِحِينَ، أَوْ لِبَيَانِ عَدَدِهِ نَحْوُ: ضَرَبْتُ زَيْدًا ضَرْبَتَيْنِ.",
        "translation": "Maf'ul Muthlaq adalah masdar manshub yang hadir pada urutan ketiga dalam tashrif fi'il (ضَرَبَ يَضْرِبُ ضَرْبًا). Terbagi dua: Lafdzi (sesuai lafadz fi'ilnya seperti قَتَلْتُهُ قَتْلًا) dan Ma'nawi (sesuai makna fi'ilnya seperti جَلَسْتُ قُعُودًا). Berfaedah untuk tiga hal: (1) Penegas amilnya, (2) Penjelas jenis perbuatannya, (3) Penjelas frekuensi/jumlah perbuatannya.",
        "explanation": "Disebut \"Muthlaq\" karena ia adalah maf'ul murni tanpa terikat oleh huruf jar (berbeda dengan maf'ul bih, fih, lahu, ma'ah).",
        "keyPoints": [
          "Tiga fungsi: Taukid (تَكْلِيمًا), Bayan Nau' (سَيْرَ الْعُقَلَاءِ), Bayan 'Adad (ضَرْبَتَيْنِ).",
          "Pengganti Masdar (Naib Masdar): كُلَّ، بَعْضَ، isim isyarah, dan bilangan masdar."
        ]
      },
      {
        "id": "mutammimah-maful-fihi",
        "titleArabic": "بَابُ الْمَفْعُولِ فِيهِ (ظَرْفُ الزَّمَانِ وَالْمَكَانِ)",
        "titleIndo": "Bab 15: Maf'ul Fihi (Zharf Zaman dan Zharf Makan)",
        "contentArabic": "الْمَفْعُولُ فِيهِ: هُوَ اسْمُ الزَّمَانِ أَوِ اسْمُ الْمَكَانِ الْمَنْصُوبُ بِتَقْدِيرِ (فِي). نَحْوُ: صُمْتُ يَوْمَ الْخَمِيسِ، وَجَلَسْتُ أَمَامَ الشَّيْخِ.\nوَظَرْفُ الزَّمَانِ يَقْبَلُ النَّصْبَ مُبْهَمًا كَانَ أَوْ مُخْتَصًّا. أَمَّا ظَرْفُ الْمَكَانِ فَلَا يُنْصَبُ مِنْهُ إِلَّا مَا كَانَ مُبْهَمًا كَالْجِهَاتِ السِّتِّ (أَمَامَ، خَلْفَ، يَمِينَ، شِمَالَ، فَوْقَ، تَحْتَ) وَأَسْمَاءِ الْمَقَادِيرِ (مِيلًا، فَرْسَخًا).",
        "translation": "Maf'ul Fihi adalah isim zaman atau isim makan yang dinashabkan dengan memperkirakan makna \"فِي\" (pada/di). Seperti صُمْتُ يَوْمَ الْخَمِيسِ (Aku berpuasa pada hari Kamis) dan جَلَسْتُ أَمَامَ الشَّيْخِ. Zharf zaman dapat dinashabkan baik yang mubham maupun yang mukhtash. Sedangkan zharf makan tidak boleh dinashabkan kecuali yang mubham seperti arah enam dan ukuran jarak.",
        "explanation": "Jika zharf makan berupa tempat yang memiliki batas ruang nyata (mukhtash seperti الْمَسْجِدُ atau الدَّارُ), maka tidak boleh dinashabkan sebagai zharf, melainkan wajib dimasuki huruf jar فِي (صَلَّيْتُ فِي الْمَسْجِدِ).",
        "keyPoints": [
          "Makna implisit: Mengandung takdir makna \"فِي\".",
          "Zharf Zaman: Seluruh isim waktu menerima nashab (يَوْمًا، لَيْلَةً، حِينًا).",
          "Zharf Makan: Hanya yang mubham (arah enam & ukuran) yang dinashabkan."
        ]
      },
      {
        "id": "mutammimah-maful-min-ajlih",
        "titleArabic": "بَابُ الْمَفْعُولِ مِنْ أَجْلِهِ",
        "titleIndo": "Bab 16: Maf'ul min Ajlih (Alasan dan Motivasi Perbuatan)",
        "contentArabic": "الْمَفْعُولُ مِنْ أَجْلِهِ (وَيُقَالُ لَهُ: الْمَفْعُولُ لَهُ): هُوَ الِاسْمُ الْمَنْصُوبُ الَّذِي يُذْكَرُ بَيَانًا لِسَبَبِ وُقُوعِ الْفِعْلِ، نَحْوُ: قَامَ زَيْدٌ إِجْلَالًا لِعَمْرٍو، وَقَصَدْتُكَ ابْتِغَاءَ مَعْرُوفِكَ.\nوَشَرْطُ نَصْبِهِ: أَنْ يَكُونَ مَصْدَرًا قَلْبِيًّا، مُتَّحِدًا مَعَ الْفِعْلِ فِي الزَّمَانِ وَالْفَاعِلِ.",
        "translation": "Maf'ul min Ajlih (disebut juga Maf'ul Lahu) adalah isim manshub yang disebutkan untuk menerangkan alasan terjadinya suatu perbuatan, seperti قَامَ زَيْدٌ إِجْلَالًا لِعَمْرٍو (Zaid berdiri demi memuliakan 'Amr). Syarat dinashabkannya: harus berupa masdar qalbiy (perasaan/kehendak hati), serta bersatu dengan fi'il dalam segi waktu dan pelakunya.",
        "explanation": "Jika syarat masdar qalbiy tidak terpenuhi (misal berupa materi fisik seperti جِئْتُ لِلْمَالِ), maka wajib dijarkan dengan huruf Lam Ta'lil.",
        "keyPoints": [
          "Menjawab pertanyaan: \"Mengapa perbuatan tersebut dilakukan?\".",
          "Syarat: Masdar qalbiy (إِجْلَالًا، خَوْفًا، رَغْبَةً، تَعْظِيمًا).",
          "Kesatuan waktu & fa'il antara perbuatan dan alasan perbuatan."
        ]
      },
      {
        "id": "mutammimah-maful-maah",
        "titleArabic": "بَابُ الْمَفْعُولِ مَعَهُ",
        "titleIndo": "Bab 17: Maf'ul Ma'ahu dan Wawu Al-Ma'iyyah",
        "contentArabic": "الْمَفْعُولُ مَعَهُ: هُوَ الِاسْمُ الْمَنْصُوبُ الَّذِي يُذْكَرُ لِبَيَانِ مَنْ فُعِلَ مَعَهُ الْفِعْلُ بَعْدَ وَاوٍ تُفِيدُ الْمَعِيَّةَ مَسْبُوقَةٍ بِفِعْلٍ أَوْ شِبْهِهِ، نَحْوُ: سِرْتُ وَالنِّيلَ، وَاسْتَوَى الْمَاءُ وَالْخَشَبَةَ.\nوَيَلْحَقُ بِهِ فَصْلٌ فِي الْمُشَبَّهِ بِالْمَفْعُولِ بِهِ فِي التَّرَاكِيبِ الْعَرَبِيَّةِ.",
        "translation": "Maf'ul Ma'ahu adalah isim manshub yang disebutkan setelah huruf Wawu bermakna Ma'iyyah (kebersamaan) yang didahului fi'il atau syibhu fi'il guna menjelaskan pihak yang menyertai perbuatan, seperti سِرْتُ وَالنِّيلَ (Aku berjalan bersama aliran sungai Nil) dan اسْتَوَى الْمَاءُ وَالْخَشَبَةَ (Air telah naik sejajar bersama kayu pancang). Disertai pembahasan Al-Musyabbah bil Maf'ul bih.",
        "explanation": "Wawu pada maf'ul ma'ahu bukan wawu 'athaf karena kedua kata tidak bersekutu dalam perbuatan (sungai Nil tidak ikut berjalan). Wajib dinashabkan sebagai maf'ul ma'ah ketika 'athaf mustahil dilakukan secara nalar.",
        "keyPoints": [
          "Wawu Ma'iyyah: Mengandung arti \"مَعَ\" (bersama).",
          "Wajib Nashab: Apabila dima'thufkan tidak masuk akal (سِرْتُ وَالْجَبَلَ).",
          "Jaiz Nashab/'Athaf: Apabila kedua isim sama-sama mampu berbuat (جَاءَ زَيْدٌ وَعَمْرًا/وَعَمْرٌو)."
        ]
      },
      {
        "id": "mutammimah-hal",
        "titleArabic": "بَابُ الْحَالِ",
        "titleIndo": "Bab 18: Kaidah Hal (Keterangan Keadaan) dan Shahibul Hal",
        "contentArabic": "الْحَالُ: هُوَ الِاسْمُ الْمَنْصُوبُ الْمُفَسِّرُ لِمَا انْبَهَمَ مِنَ الْهَيْئَاتِ، نَحْوُ: جَاءَ زَيْدٌ رَاكِبًا، وَرَكِبْتُ الْفَرَسَ مُسْرَجًا، وَلَقِيتُ عَبْدَ اللَّهِ رَاكِبًا.\nوَلَا يَكُونُ الْحَالُ إِلَّا نَكِرَةً، وَلَا يَكُونُ إِلَّا بَعْدَ تَمَامِ الْكَلَامِ، وَلَا يَكُونُ صَاحِبُهَا إِلَّا مَعْرِفَةً.",
        "translation": "Hal adalah isim manshub yang berfungsi menyingkap kesamaran bentuk/keadaan (Hai'ah) dari pelaku atau objek, seperti جَاءَ زَيْدٌ رَاكِبًا (Zaid datang dalam keadaan berkendara). Hal hukum asalnya harus nakirah dan terletak setelah kalam sempurna, sedangkan Shahibul Hal (pemilik keadaan) hukum asalnya wajib berupa ma'rifah.",
        "explanation": "Mutammimah menjelaskan bahwa jika hal datang berupa jumlah (seperti جَاءَ زَيْدٌ وَالشَّمْسُ طَالِعَةٌ), maka wajib memiliki penghubung (rabith) berupa Wawu Hal, dhamir, atau keduanya.",
        "keyPoints": [
          "Fungsi Hal: Menjelaskan keadaan (رَاكِبًا، مَاشِيًا، صَابِرًا).",
          "Sifat Hal: Nakirah, Musytaq, dan Fadhlah.",
          "Shahibul Hal: Wajib Ma'rifah (atau nakirah dengan pembenar/musawwigh)."
        ]
      },
      {
        "id": "mutammimah-tamyiz",
        "titleArabic": "بَابُ التَّمْيِيزِ",
        "titleIndo": "Bab 19: Tamyiz Dzat dan Tamyiz Nisbah",
        "contentArabic": "التَّمْيِيزُ: هُوَ الِاسْمُ الْمَنْصُوبُ الْمُفَسِّرُ لِمَا انْبَهَمَ مِنَ الذَّوَاتِ أَوِ النِّسَبِ.\nفَتَمْيِيزُ الذَّاتِ: يَقَعُ بَعْدَ الْمَقَادِيرِ مِنَ الْمَسَاحَاتِ وَالْمَكِيلَاتِ وَالْمَوْزُونَاتِ وَالْأَعْدَادِ، نَحْوُ: اشْتَرَيْتُ عِشْرِينَ غُلَامًا، وَمَلَكْتُ تِسْعِينَ نَعْجَةً.\nوَتَمْيِيزُ النِّسْبَةِ: هُوَ الْمُحَوَّلُ عَنِ الْفَاعِلِ نَحْوُ: تَصَبَّبَ زَيْدٌ عَرَقًا، أَوْ عَنِ الْمَفْعُولِ نَحْوُ: وَفَجَّرْنَا الْأَرْضَ عُيُونًا، أَوْ عَنِ الْمُبْتَدَأِ نَحْوُ: أَنَا أَكْثَرُ مِنْكَ مَالًا.",
        "translation": "Tamyiz adalah isim manshub yang berfungsi mengurai kesamaran dzat (benda) atau nisbah (hubungan kalimat). Tamyiz Dzat terletak setelah satuan takaran, timbangan, ukuran jarak, dan bilangan (seperti اشْتَرَيْتُ عِشْرِينَ غُلَامًا). Sedangkan Tamyiz Nisbah terbagi menjadi: pengalihan dari fa'il (تَصَبَّبَ زَيْدٌ عَرَقًا), pengalihan dari maf'ul (وَفَجَّرْنَا الْأَرْضَ عُيُونًا), atau pengalihan dari mubtada' (أَنَا أَكْثَرُ مِنْكَ مَالًا).",
        "explanation": "Perbedaan Hal dan Tamyiz: Hal menyingkap kesamaran keadaan (sifat perbuatan), sedangkan Tamyiz menyingkap ketidakjelasan jenis dzat benda atau hubungan predikat.",
        "keyPoints": [
          "Tamyiz Dzat/Mufrad: Menjelaskan bilangan (عِشْرُونَ دِرْهَمًا) atau takaran.",
          "Tamyiz Nisbah: Menjelaskan kalimat utuh (طَابَ زَيْدٌ نَفْسًا).",
          "Sifat Tamyiz: Jamid dan berharakat manshub."
        ]
      },
      {
        "id": "mutammimah-mustatsna",
        "titleArabic": "بَابُ الْمُسْتَثْنَى",
        "titleIndo": "Bab 20: Istitsna' dan Huruf Pengecualian (Illa, Ghair, dkk)",
        "contentArabic": "حُرُوفُ الِاسْتِثْنَاءِ ثَمَانِيَةٌ وَهِيَ: إِلَّا، وَغَيْرُ، وَسِوَى، وَسُوًى، وَسَوَاءٌ، وَخَلَا، وَعَدَا، وَحَاشَا.\nفَالْمُسْتَثْنَى بِإِلَّا: يُنْصَبُ إِذَا كَانَ الْكَلَامُ تَامًّا مُوجَبًا نَحْوُ: قَامَ الْقَوْمُ إِلَّا زَيْدًا. وَإِنْ كَانَ تَامًّا مَنْفِيًّا جَازَ فِيهِ الْبَدَلُ وَالنَّصْبُ عَلَى الِاسْتِثْنَاءِ نَحْوُ: مَا قَامَ الْقَوْمُ إِلَّا زَيْدٌ وَإِلَّا زَيْدًا. وَإِنْ كَانَ الْكَلَامُ نَاقِصًا كَانَ عَلَى حَسَبِ الْعَوَامِلِ نَحْوُ: مَا قَامَ إِلَّا زَيْدٌ.\nوَالْمُسْتَثْنَى بِغَيْرٍ وَسِوَى مَجْرُورٌ دَائِمًا بِالْإِضَافَةِ.",
        "translation": "Perangkat istitsna' ada 8: إِلَّا, غَيْر, سِوَى, سُوًى, سَوَاء, خَلَا, عَدَا, dan حَاشَا. Mustatsna dengan Illa: Wajib manshub apabila kalimatnya Taam Mujab (lengkap dan positif) seperti قَامَ الْقَوْمُ إِلَّا زَيْدًا. Boleh badal atau nashab jika Taam Manfiy (lengkap tapi didahului nafi) seperti مَا قَامَ الْقَوْمُ إِلَّا زَيْدٌ / زَيْدًا. Dan sesuai kebutuhan amil (Istitsna' Mufarragh) jika Naqish Manfiy seperti مَا قَامَ إِلَّا زَيْدٌ. Sedangkan kata setelah Ghair dan Siwa selalu majrur bil-idhafah.",
        "explanation": "Mutammimah menguraikan perangkat khala, 'ada, dan hasya: jika didahului \"مَا\" mashdariyyah (مَا خَلَا) maka wajib menashabkan kata setelahnya sebagai maf'ul bih; jika tanpa \"ما\" boleh menashabkan (sebagai fi'il) atau menjarkan (sebagai huruf jar).",
        "keyPoints": [
          "Taam Mujab: Wajib Nashab (فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ إِلَّا إِبْلِيسَ).",
          "Taam Manfiy: Boleh Badal (unggul) atau Nashab.",
          "Naqish / Mufarragh: Di-i'rab sesuai amilnya (مَا جَاءَ إِلَّا زَيْدٌ -> Zaid fa'il).",
          "Ghair & Siwa: Mengambil hukum i'rab isim setelah Illa."
        ]
      },
      {
        "id": "mutammimah-makhfudhat",
        "titleArabic": "بَابُ الْمَخْفُوضَاتِ مِنَ الْأَسْمَاءِ",
        "titleIndo": "Bab 21: Isim-Isim yang Di-jar-kan dan Ketentuan Idhafah",
        "contentArabic": "الْمَخْفُوضَاتُ ثَلَاثَةُ أَنْوَاعٍ: مَخْفُوضٌ بِالْحَرْفِ، وَمَخْفُوضٌ بِالْإِضَافَةِ، وَتَابِعٌ لِلْمَخْفُوضِ.\nفَأَمَّا الْمَخْفُوضُ بِالْحَرْفِ فَمَا يُخْفَضُ بِمِنْ، وَإِلَى، وَعَنْ، وَعَلَى، وَفِي، وَرُبَّ، وَالْبَاءِ، وَالْكَافِ، وَاللَّامِ، وَحُرُوفِ الْقَسَمِ.\nوَأَمَّا الْمَخْفُوضُ بِالْإِضَافَةِ فَنَحْوُ: غُلَامُ زَيْدٍ، وَهُوَ عَلَى ثَلَاثَةِ أَقْسَامٍ: مَا يُقَدَّرُ بِاللَّامِ (مِلْكِيَّةٌ نَحْوُ: غُلَامُ زَيْدٍ)، وَمَا يُقَدَّرُ بِمِنْ (جِنْسِيَّةٌ نَحْوُ: ثَوْبُ خَزٍّ)، وَمَا يُقَدَّرُ بِفِي (ظَرْفِيَّةٌ نَحْوُ: صَلَاةُ اللَّيْلِ).",
        "translation": "Isim-isim yang berstatus Khafadh (Majrur) ada 3: (1) Majrur karena huruf jar, (2) Majrur karena idhafah (penyandaran), (3) Pengikut isim majrur (tawabi'). Idhafah mengandung tiga takdir makna: Takdir Lam kepemilikan (غُلَامُ زَيْدٍ = budak milik Zaid), Takdir Min asal bahan (ثَوْبُ خَزٍّ = pakaian dari sutera), dan Takdir Fi wadah waktu/tempat (صَلَاةُ اللَّيْلِ = shalat di waktu malam).",
        "explanation": "Idhafah mensyaratkan dibuangnya tanwin pada isim mufrad atau dibuangnya nun pada isim tatsniyah dan jamak mudzakkar salim (طَالِبَا الْعِلْمِ).",
        "keyPoints": [
          "Tiga jenis penyebab Jar: Huruf Jar, Idhafah, Tawabi'.",
          "Tiga takdir Idhafah: Li (kepemilikan), Min (jenis bahan), Fi (wadah waktu/tempat).",
          "Konsekuensi Idhafah: Menghapus tanwin dan nun tatsniyah/jamak pada mudhaf."
        ]
      },
      {
        "id": "mutammimah-irab-afal",
        "titleArabic": "بَابُ إِعْرَابِ الْأَفْعَالِ",
        "titleIndo": "Bab 22: I'rab Perbuatan, Nawashib, dan Jawazim Mudhari'",
        "contentArabic": "الْأَفْعَالُ ثَلَاثَةٌ: مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ أَبَدًا، وَأَمْرٌ مَبْنِيٌّ عَلَى مَا يُجْزَمُ بِهِ مُضَارِعُهُ، وَمُضَارِعٌ وَهُوَ مُعْرَبٌ مَا لَمْ تَتَّصِلْ بِهِ نُونُ التَّوْكِيدِ أَوْ نُونُ النِّسْوَةِ.\nفَنَوَاصِبُهُ عَشَرَةٌ: أَنْ، وَلَنْ، وَإِذَنْ، وَكَيْ، وَلَامُ كَيْ، وَلَامُ الْجُحُودِ، وَحَتَّى، وَالْجَوَابُ بِالْفَاءِ وَالْوَاوِ، وَأَوْ.\nوَجَوَازِمُهُ ثَمَانِيَةَ عَشَرَ: لَمْ، وَلَمَّا، وَأَلَمْ، وَأَلَمَّا، وَلَامُ الْأَمْرِ وَالدُّعَاءِ، وَ(لَا) فِي النَّهْيِ وَالدُّعَاءِ، وَإِنْ، وَمَا، وَمَنْ، وَمَهْمَا، وَإِذْمَا، وَأَيٌّ، وَمَتَى، وَأَيَّانَ، وَأَيْنَ، وَأَنَّى، وَحَيْثُمَا، وَكَيْفَمَا.",
        "translation": "Fi'il ada 3: Madhi (selalu mabni atas fathah kecuali bersambung wawu jamak atau dhamir rafa'), Amr (mabni atas apa yang fi'il mudhari'nya dijazmkan), dan Mudhari' (mu'rab selama tidak bersambung dengan nun taukid mubasyirah atau nun niswah). Nawashib (penashab mudhari') ada 10: An, Lan, Idzan, Kai, Lam Kai, Lam Juhud, Hatta, Fa' Sababiyyah, Wawu Ma'iyyah, dan Au. Jawazim (penjazm mudhari') ada 18: penjazm satu fi'il dan penjazm dua fi'il (huruf & isim syarat).",
        "explanation": "Mutammimah merinci bahwa An mashdariyyah beramal secara zhahir maupun mudhmarah (tersimpan) wujuban (setelah lam juhud, hatta, fa' sababiyyah) atau jawazan (setelah lam ta'lil).",
        "keyPoints": [
          "Fi'il Mudhari' marfu' selama sunyi dari nawashib dan jawazim.",
          "Nawashib: Menashabkan mudhari' dengan fathah atau membuang nun.",
          "Jawazim satu fi'il: لَمْ، لَمَّا، لَامُ الْأَمْرِ، لَا النَّاهِيَةُ.",
          "Adawat Syarat: Menjazmkan Fi'il Syarat dan Jawab Syarat."
        ]
      },
      {
        "id": "mutammimah-naat",
        "titleArabic": "بَابُ النَّعْتِ",
        "titleIndo": "Bab 23: An-Na'at (Sifat Hakiki dan Sababi)",
        "contentArabic": "النَّعْتُ: هُوَ التَّابِعُ الْمُشْتَقُّ أَوِ الْمُؤَوَّلُ بِهِ الْمُبَيِّنُ لِمَتْبُوعِهِ، نَحْوُ: جَاءَ زَيْدٌ الْعَاقِلُ، وَرَأَيْتُ رَجُلًا فَقِيهًا.\nوَهُوَ يَتْبَعُ الْمَنْعُوتَ فِي أَرْبَعَةٍ مِنْ عَشَرَةٍ: فِي وَاحِدٍ مِنْ أَلْقَابِ الْإِعْرَابِ (الرَّفْعِ أَوِ النَّصْبِ أَوِ الْخَفْضِ)، وَفِي التَّعْرِيفِ أَوِ التَّنْكِيرِ، وَفِي التَّذْكِيرِ أَوِ التَّأْنِيثِ، وَفِي الْإِفْرَادِ أَوِ التَّثْنِيَةِ أَوِ الْجَمْعِ.\nوَالنَّعْتُ السَّبَبِيُّ يَتْبَعُ مَا بَعْدَهُ فِي التَّذْكِيرِ وَالتَّأْنِيثِ نَحْوُ: جَاءَ زَيْدٌ الْعَاقِلُ أَبُوهُ.",
        "translation": "Na'at adalah pengikut berupa kata musytaq (atau yang dita'wil musytaq) yang menerangkan sifat dari isim yang diikutinya (man'ut), seperti جَاءَ زَيْدٌ الْعَاقِلُ. Na'at hakiki mengikuti man'ut dalam 4 dari 10 perkara: status i'rab, ma'rifah/nakirah, mudzakkar/muannats, dan mufrad/tatsniyah/jamak. Sedangkan Na'at Sababi menerangkan kaitan yang berhubungan dengan man'ut dan mengikuti kata setelahnya dalam hal mudzakkar/muannats (جَاءَ زَيْدٌ الْعَاقِلُ أَبُوهُ).",
        "explanation": "Mutammimah membedakan na'at hakiki (yang menunjukkan sifat zat man'ut itu sendiri) dengan na'at sababi (yang menyifati hal yang berkaitan dengan man'ut).",
        "keyPoints": [
          "Na'at Hakiki: Menyamai man'ut dalam 4 dari 10 segi.",
          "Na'at Sababi: Selalu mufrad, dan mudzakkar/muannats-nya mengikuti isim setelahnya.",
          "Fungsi Na'at: Mengkhususkan pada nakirah (takhshish) dan memperjelas pada ma'rifah (ta'yid)."
        ]
      },
      {
        "id": "mutammimah-athaf",
        "titleArabic": "بَابُ الْعَطْفِ",
        "titleIndo": "Bab 24: Al-'Athaf ('Athaf Nasaq dan 'Athaf Bayan)",
        "contentArabic": "الْعَطْفُ قِسْمَانِ: عَطْفُ نَسَقٍ وَعَطْفُ بَيَانٍ.\nفَعَطْفُ النَّسَقِ: هُوَ التَّابِعُ الَّذِي يَتَوَسَّطُ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ أَحَدُ حُرُوفِ الْعَطْفِ الْعَشَرَةِ، وَهِيَ: الْوَاوُ (لِمُطْلَقِ الْجَمْعِ)، وَالْفَاءُ (لِلتَّرْتِيبِ وَالتَّعْقِيبِ)، وَثُمَّ (لِلتَّرْتِيبِ مَعَ التَّرَاخِي)، وَأَوْ، وَأَمْ، وَإِمَّا، وَبَلْ، وَلَا، وَلَكِنْ، وَحَتَّى.\nوَأَمَّا عَطْفُ الْبَيَانِ: فَهُوَ تَابِعٌ جَامِدٌ يُشْبِهُ النَّعْتَ فِي إِيضَاحِ مَتْبُوعِهِ إِنْ كَانَ مَعْرِفَةً وَتَخْصِيصِهِ إِنْ كَانَ نَكِرَةً نَحْوُ: أَقْسَمَ بِاللَّهِ أَبُو حَفْصٍ عُمَرُ.",
        "translation": "Al-'Athaf terbagi dua: 'Athaf Nasaq dan 'Athaf Bayan. 'Athaf Nasaq adalah pengikut yang ditengahi oleh salah satu dari 10 huruf 'athaf: Wawu (menghimpun secara mutlak), Fa' (berurutan langsung), Tsumma (berurutan dengan jeda waktu), Au, Am, Imma, Bal, La, Lakin, dan Hatta. Sedangkan 'Athaf Bayan adalah pengikut berupa isim jamid yang menyerupai na'at dalam memperjelas man'ut-nya jika ma'rifah dan mengkhususkannya jika nakirah, seperti أَقْسَمَ بِاللَّهِ أَبُو حَفْصٍ عُمَرُ (nama 'Umar memperjelas julukan Abu Hafsh).",
        "explanation": "Huruf 'athaf dapat menyambungkan isim kepada isim (زَيْدٌ وَعَمْرٌو) maupun fi'il kepada fi'il (يَقُومُ وَيَقْعُدُ).",
        "keyPoints": [
          "Sepuluh huruf 'athaf: Wawu, Fa', Tsumma, Au, Am, Imma, Bal, La, Lakin, Hatta.",
          "Kaidah Ma'thuf: Mengikuti ma'thuf 'alaih dalam seluruh status i'rabnya.",
          "'Athaf Bayan: Berupa isim jamid (bukan kata sifat), menjelaskan gelar/kunyah."
        ]
      },
      {
        "id": "mutammimah-taukid",
        "titleArabic": "بَابُ التَّوْكِيدِ",
        "titleIndo": "Bab 25: At-Taukid (Penguat Lafdzi dan Penguat Ma'nawi)",
        "contentArabic": "التَّوْكِيدُ: هُوَ التَّابِعُ الْمُقَرِّرُ لِأَمْرِ مَتْبُوعِهِ فِي الرَّفْعِ وَالنَّصْبِ وَالْخَفْضِ وَالتَّعْرِيفِ.\nوَهُوَ قِسْمَانِ: لَفْظِيٌّ، وَهُوَ إِعَادَةُ اللَّفْظِ الْأَوَّلِ بِعَيْنِهِ نَحْوُ: جَاءَ زَيْدٌ زَيْدٌ.\nوَمَعْنَوِيٌّ، وَيَكُونُ بِأَلْفَاظٍ مَعْلُومَةٍ وَهِيَ: النَّفْسُ، وَالْعَيْنُ، وَكِلَا، وَكِلْتَا، وَكُلٌّ، وَأَجْمَعُ، وَتَوَابِعُ أَجْمَعَ (أَكْتَعُ، أَبْتَعُ، أَبْصَعُ). نَحْوُ: قَامَ زَيْدٌ نَفْسُهُ، وَرَأَيْتُ الْقَوْمَ كُلَّهُمْ، وَمَرَرْتُ بِالرِّجَالِ أَجْمَعِينَ.",
        "translation": "Taukid adalah pengikut yang menegaskan perkara isim yang diikutinya dalam keadaan rafa', nashab, khafadh, serta kema'rifahannya. Taukid terbagi dua: (1) Lafdzi: mengulang lafadz yang sama secara persis (جَاءَ زَيْدٌ زَيْدٌ), (2) Ma'nawi: menggunakan kata-kata penguat tertentu yaitu An-Nafs, Al-'Ain, Kila, Kilta, Kullun, Ajma'u, dan pengikutnya. Seperti قَامَ زَيْدٌ نَفْسُهُ (Zaid sendiri telah berdiri) dan فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ.",
        "explanation": "Taukid ma'nawi mensyaratkan adanya dhamir yang merujuk kepada mu'akkad (kata yang dikuatkan), seperti نَفْسُهُ atau كُلُّهُمْ.",
        "keyPoints": [
          "Fungsi Taukid: Menghilangkan keraguan (syakk) dan majaz.",
          "Taukid Lafdzi: Pengulangan kata (isim, fi'il, atau kalimat).",
          "Taukid Ma'nawi: Menggunakan lafadz khusus yang diidhafahkan ke dhamir mu'akkad."
        ]
      },
      {
        "id": "mutammimah-badal",
        "titleArabic": "بَابُ الْبَدَلِ",
        "titleIndo": "Bab 26: Al-Badal dan Empat Ragam Pembagiannya",
        "contentArabic": "إِذَا أُبْدِلَ اسْمٌ مِنْ اسْمٍ أَوْ فِعْلٌ مِنْ فِعْلٍ تَبِعَهُ فِي جَمِيعِ إِعْرَابِهِ. وَهُوَ التَّابِعُ الْمَقْصُودُ بِالْحُكْمِ بِلَا وَاسِطَةٍ.\nوَأَقْسَامُهُ أَرْبَعَةٌ:\n١. بَدَلُ كُلٍّ مِنْ كُلٍّ (الْمُطَابِقُ) نَحْوُ: جَاءَنِي زَيْدٌ أَخُوكَ.\n٢. بَدَلُ بَعْضٍ مِنْ كُلٍّ نَحْوُ: أَكَلْتُ الرَّغِيفَ ثُلُثَهُ.\n٣. بَدَلُ اشْتِمَالٍ نَحْوُ: نَفَعَنِي زَيْدٌ عِلْمُهُ.\n٤. بَدَلُ الْغَلَطِ وَالنِّسْيَانِ نَحْوُ: رَأَيْتُ زَيْدًا الْفَرَسَ، أَرَدْتَ أَنْ تَقُولَ الْفَرَسَ فَغَلِطْتَ فَأَبْدَلْتَ زَيْدًا مِنْهُ.",
        "translation": "Apabila suatu isim digantikan dari isim lain atau fi'il digantikan dari fi'il lain, maka ia mengikuti dalam segenap status i'rabnya. Badal adalah pengikut yang menjadi sasaran pokok hukum tanpa perantara huruf. Badal terbagi menjadi 4: (1) Badal Kul min Kul / Muthabiq (جَاءَنِي زَيْدٌ أَخُوكَ), (2) Badal Ba'dh min Kul (أَكَلْتُ الرَّغِيفَ ثُلُثَهُ), (3) Badal Isytimal (نَفَعَنِي زَيْدٌ عِلْمُهُ), (4) Badal Ghalath / Nisyan (رَأَيْتُ زَيْدًا الْفَرَسَ).",
        "explanation": "Pada Badal Ba'dh dan Badal Isytimal disyaratkan memiliki dhamir yang kembali kepada Mubdal Minhu (kata yang digantikan).",
        "keyPoints": [
          "Definisi Badal: Al-Maqshud bil Hukmi bila washithah.",
          "Badal Muthabiq: Badal dan Mubdal Minhu adalah sosok yang sepadan.",
          "Badal Ba'dh & Isytimal: Wajib mengandung dhamir (ثُلُثَهُ، عِلْمُهُ).",
          "Badal Fi'il: Fi'il dapat menjadi badal bagi fi'il lain."
        ]
      },
      {
        "id": "mutammimah-asma-amilah",
        "titleArabic": "بَابُ الْأَسْمَاءِ الْعَامِلَةِ عَمَلَ الْفِعْلِ",
        "titleIndo": "Bab 27: Isim-Isim yang Beramal Seperti Fi'il",
        "contentArabic": "تَعْمَلُ بَعْضُ الْأَسْمَاءِ عَمَلَ الْفِعْلِ فِي الرَّفْعِ وَالنَّصْبِ، وَهِيَ سَبْعَةٌ:\n١. اسْمُ الْفِعْلِ نَحْوُ: صَهْ (اسْكُتْ)، هَيْهَاتَ (بَعُدَ).\n٢. الْمَصْدَرُ نَحْوُ: أَوْ إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ يَتِيمًا.\n٣. اسْمُ الْفَاعِلِ نَحْوُ: أَضَارِبٌ زَيْدٌ عَمْرًا؟\n٤. اسْمُ الْمَفْعُولِ نَحْوُ: زَيْدٌ مَضْرُوبٌ غُلَامُهُ.\n٥. الصِّفَةُ الْمُشَبَّهَةُ بِاسْمِ الْفَاعِلِ نَحْوُ: زَيْدٌ حَسَنٌ وَجْهُهُ.\n٦. اسْمُ التَّفْضِيلِ فِي مَسْأَلَةِ الْكُحْلِ نَحْوُ: مَا رَأَيْتُ رَجُلًا أَحْسَنَ فِي عَيْنِهِ الْكُحْلُ مِنْهُ فِي عَيْنِ زَيْدٍ.\n٧. اسْمُ الْمُبَالَغَةِ.",
        "translation": "Terdapat sejumlah isim yang mampu beramal seperti fungsi fi'il (merafa'kan fa'il dan menashabkan maf'ul): (1) Isim Fi'il (صَهْ, هَيْهَاتَ), (2) Masdar, (3) Isim Fa'il yang memenuhi syarat i'timad atas nafi/istifham/mubtada', (4) Isim Maf'ul (merafa'kan na'ibul fa'il), (5) Sifat Musyabbahah, (6) Isim Tafdhil, dan (7) Sighah Mubalaghah.",
        "explanation": "Bab ini merupakan salah satu keunggulan Mutammimah dibanding kitab ringkas pemula, karena membimbing santri membedah kalimat kompleks di mana kata benda bertindak aktif sebagai amil.",
        "keyPoints": [
          "Isim Fa'il beramal seperti fi'il ma'lum (merafa'kan fa'il, menashabkan maf'ul).",
          "Isim Maf'ul beramal seperti fi'il majhul (merafa'kan na'ibul fa'il).",
          "Masdar beramal baik dalam kondisi mudhaf, munawwan, maupun ber-alif lam."
        ]
      },
      {
        "id": "mutammimah-tanazu",
        "titleArabic": "بَابُ التَّنَازُعِ فِي الْعَمَلِ",
        "titleIndo": "Bab 28: At-Tanazu' fil-'Amal (Dua Amil Berebut Satu Ma'mul)",
        "contentArabic": "التَّنَازُعُ: هُوَ أَنْ يَتَوَجَّهَ عَامِلَانِ مُتَقَدِّمَانِ إِلَى مَعْمُولٍ وَاحِدٍ مُتَأَخِّرٍ، نَحْوُ: ضَرَبَنِي وَضَرَبْتُ زَيْدًا.\nوَيَجُوزُ إِعْمَالُ أَيِّ الْعَامِلَيْنِ شِئْتَ: فَالْبَصْرِيُّونَ يَخْتَارُونَ إِعْمَالَ الثَّانِي لِقُرْبِهِ، وَالْكُوفِيُّونَ يَخْتَارُونَ إِعْمَالَ الْأَوَّلِ لِسَبْقِهِ.\nفَإِنْ أَعْمَلْتَ الثَّانِيَ أَضْمَرْتَ فِي الْأَوَّلِ فَاعِلَهُ نَحْوُ: ضَرَبَانِي وَضَرَبْتُ الزَّيْدَيْنِ.",
        "translation": "At-Tanazu' adalah bertemunya dua amil di depan yang sama-sama menuntut satu ma'mul di belakangnya, seperti ضَرَبَنِي وَضَرَبْتُ زَيْدًا. Boleh mengamalkan salah satu amil yang dikehendaki: Ulama Bashrah memilih mengamalkan amil kedua karena kedekatan posisinya, sedangkan Ulama Kufah memilih mengamalkan amil pertama karena posisinya mendahului. Jika amil kedua diamalkan, maka amil pertama diberi dhamir sesuai kebutuhannya.",
        "explanation": "Kaidah Tanazu' memperlihatkan kekayaan logika tata bahasa Arab, menyelesaikan persengketaan sintaksis secara elegan dengan kaidah pengedepanan dhamir.",
        "keyPoints": [
          "Syarat Tanazu': Dua amil mendahului satu ma'mul yang diperebutkan.",
          "Madzhab Bashrah: Memprioritaskan Amil Kedua (karena kedekatan posisi).",
          "Madzhab Kufah: Memprioritaskan Amil Pertama (karena lebih dulu disebut)."
        ]
      },
      {
        "id": "mutammimah-taajjub",
        "titleArabic": "بَابُ التَّعَجُّبِ",
        "titleIndo": "Bab 29: Bab Ta'ajjub (Ungkapan Ketakjuban Sintaksis)",
        "contentArabic": "لِلتَّعَجُّبِ صِيغَتَانِ قِيَاسِيَّتَانِ:\n١. (مَا أَفْعَلَهُ) نَحْوُ: مَا أَحْسَنَ زَيْدًا! وَإِعْرَابُهَا: (مَا) نَكِرَةٌ تَامَّةٌ بِمَعْنَى شَيْءٍ عَظِيمٍ مُبْتَدَأٌ مَبْنِيٌّ عَلَى السُّكُونِ، (أَحْسَنَ) فِعْلٌ مَاضٍ جَامِدٌ مَبْنِيٌّ عَلَى الْفَتْحِ وَفَاعِلُهُ ضَمِيرٌ مُسْتَتِرٌ وُجُوبًا يَعُودُ عَلَى مَا، (زَيْدًا) مَفْعُولٌ بِهِ مَنْصُوبٌ، وَالْجُمْلَةُ فِي مَحَلِّ رَفْعٍ خَبَرُ الْمُبْتَدَأِ.\n٢. (أَفْعِلْ بِهِ) نَحْوُ: أَحْسِنْ بِزَيْدٍ! وَإِعْرَابُهُ: فِعْلٌ مَاضٍ جَاءَ عَلَى صُورَةِ الْأَمْرِ، وَالْبَاءُ حَرْفُ جَرٍّ زَائِدٌ، وَزَيْدٍ مَجْرُورٌ لَفْظًا مَرْفُوعٌ مَحَلًّا عَلَى أَنَّهُ فَاعِلٌ.",
        "translation": "Ta'ajjub memiliki 2 sighah qiyasiyyah: (1) مَا أَفْعَلَهُ seperti مَا أَحْسَنَ زَيْدًا! I'rabnya: \"ما\" adalah isim nakirah tammah bermakna \"sesuatu yang agung\" berstatus mubtada'; \"أَحْسَنَ\" fi'il madhi jamid dan fa'ilnya dhamir mustatir wujuban kembali ke \"ما\"; \"زَيْدًا\" maf'ul bih manshub; dan jumlah fi'liyyah menjadi khabar mubtada'. (2) أَفْعِلْ بِهِ seperti أَحْسِنْ بِزَيْدٍ! I'rabnya: Fi'il madhi berwujud amr, huruf Ba' adalah huruf jar za'idah, dan kata setelahnya majrur lafdzan marfu' mahallan sebagai fa'il.",
        "explanation": "Syarat fi'il yang dapat dibentuk langsung ta'ajjub: Tsulatsi, Mutasharrif, Taam, Qabil lit Tafadhul, dan bukan sifat berwazan Af'alu yang muannatsnya Fa'la'.",
        "keyPoints": [
          "Dua pola baku: مَا أَفْعَلَهُ dan أَفْعِلْ بِهِ.",
          "I'rab مَا أَحْسَنَ زَيْدًا: Ma (mubtada') + fi'il fa'il (khabar) + Zaid (maf'ul bih).",
          "I'rab أَحْسِنْ بِزَيْدٍ: Ba' za'idah + isim majrur lafdzan marfu' mahallan fa'il."
        ]
      },
      {
        "id": "mutammimah-adad",
        "titleArabic": "بَابُ الْعَدَدِ وَأَحْكَامِ تَمْيِيزِهِ",
        "titleIndo": "Bab 30: Tata Bilangan Arab (Adad) dan Tamyiz Ma'dud",
        "contentArabic": "أَحْكَامُ الْعَدَدِ مَعَ الْمَعْدُودِ عَلَى أَرْبَعَةِ أَقْسَامٍ:\n١. الْوَاحِدُ وَالِاثْنَانِ: يُوَافِقَانِ الْمَعْدُودَ دَائِمًا فِي التَّذْكِيرِ وَالتَّأْنِيثِ نَحْوُ: كِتَابٌ وَاحِدٌ، وَامْرَأَتَانِ اثْنَتَانِ.\n٢. مِنَ الثَّلَاثَةِ إِلَى الْعَشَرَةِ: تُخَالِفُ الْمَعْدُودَ فَتُؤَنَّثُ مَعَ الْمُذَكَّرِ وَتُذَكَّرُ مَعَ الْمُؤَنَّثِ، وَمَعْدُودُهَا جَمْعٌ مَجْرُورٌ بِالْإِضَافَةِ نَحْوُ: ثَلَاثَةُ رِجَالٍ، وَثَلَاثُ نِسْوَةٍ.\n٣. مِنَ أَحَدَ عَشَرَ إِلَى تِسْعَةَ عَشَرَ: صَدْرُهَا يُخَالِفُ وَعَجُزُهَا يُوَافِقُ (مَا عَدَا ١١ وَ ١٢ فَكِلَاهُمَا يُوَافِقَانِ)، وَمَعْدُودُهَا مُفْرَدٌ مَنْصُوبٌ عَلَى التَّمْيِيزِ نَحْوُ: أَحَدَ عَشَرَ كَوْكَبًا.\n٤. أَلْفَاظُ الْعُقُودِ (٢٠ - ٩٠): تَلْزَمُ صُورَةً وَاحِدَةً، وَتُعْرَبُ إِعْرَابَ جَمْعِ الْمُذَكَّرِ السَّالِمِ، وَمَعْدُودُهَا مُفْرَدٌ مَنْصُوبٌ نَحْوُ: عِشْرُونَ رَجُلًا.\n٥. الْمِائَةُ وَالْأَلْفُ: تَلْزَمَانِ صُورَةً وَاحِدَةً وَمَعْدُودُهُمَا مُفْرَدٌ مَجْرُورٌ.",
        "translation": "Hukum bilangan ('Adad) dan benda yang dihitung (Ma'dud) terbagi menjadi: (1) 1 dan 2: Selalu bersesuaian dengan ma'dud dalam mudzakkar/muannats. (2) 3 sampai 10: Berlawanan jenis dengan ma'dud (ber-Ta' marbuthah untuk mudzakkar, tanpa Ta' untuk muannats) dan ma'dudnya jamak majrur bil-idhafah (ثَلَاثَةُ رِجَالٍ). (3) 11 sampai 19: Ma'dudnya mufrad manshub sebagai tamyiz. (4) Bilangan puluhan/uqud (20-90): Bentuknya tetap dan di-i'rab seperti jamak mudzakkar salim dengan ma'dud mufrad manshub. (5) Ratusan dan ribuan: Ma'dudnya mufrad majrur.",
        "explanation": "Aturan 'adad ma'dud merupakan salah satu bab yang paling menuntut ketelitian dalam nahwu. Mutammimah memberikan kaidah baku yang menghindarkan kekeliruan.",
        "keyPoints": [
          "Bilangan 3-10: Berlawanan jenis gender + Jamak Majrur.",
          "Bilangan 11-99: Ma'dud berupa Isim Mufrad Manshub (Tamyiz).",
          "Bilangan 100 & 1000: Ma'dud berupa Isim Mufrad Majrur bil-Idhafah."
        ]
      },
      {
        "id": "mutammimah-waqf",
        "titleArabic": "بَابُ الْوَقْفِ",
        "titleIndo": "Bab 31: Kaidah Waqf (Cara Berhenti pada Akhir Kata)",
        "contentArabic": "الْوَقْفُ عَلَى أَوَاخِرِ الْكَلِمِ إِمَّا بِالسُّكُونِ الْمَحْضِ (وَهُوَ الْأَصْلُ فِي الْوَقْفِ)، وَإِمَّا بِالرَّوْمِ (تَبْعِيضُ الْحَرَكَةِ)، وَإِمَّا بِالْإِشْمَامِ (ضَمُّ الشَّفَتَيْنِ بُعَيْدَ السُّكُونِ فِي الْمَرْفُوعِ).\nوَإِذَا وُقِفَ عَلَى الْمُنَوَّنِ الْمَنْصُوبِ أُبْدِلَ تَنْوِينُهُ أَلِفًا نَحْوُ: رَأَيْتُ زَيْدَا. أَمَّا الْمَرْفُوعُ وَالْمَجْرُورُ فَيُحْذَفُ تَنْوِينُهُمَا وَيُسَكَّنُ آخِرُهُمَا نَحْوُ: جَاءَ زَيْدْ، وَمَرَرْتُ بِزَيْدْ.\nوَتَاءُ التَّأْنِيثِ فِي الِاسْمِ الْمُفْرَدِ يُوقَفُ عَلَيْهَا بِالْهَاءِ نَحْوُ: رَحْمَهْ وَفَاطِمَهْ، وَفِي جَمْعِ الْمُؤَنَّثِ بِالتَّاءِ نَحْوُ: مُسْلِمَاتْ.",
        "translation": "Cara waqf (berhenti) pada akhir kata: Hukum asalnya adalah dengan Sukun Murni, atau dengan Raum (mengurangi volume harakat), atau dengan Isymam (memonyongkan bibir tanpa suara pada kata marfu'). Apabila waqf pada kata bertanwin manshub maka tanwin diganti Alif (رَأَيْتُ زَيْدَا). Adapun marfu' dan majrur maka tanwin dibuang dan huruf akhirnya disukunkan (جَاءَ زَيْدْ). Ta' Ta'nits pada isim mufrad diwakafkan menjadi Ha' (رَحْمَهْ / فَاطِمَهْ), sedangkan pada jamak muannats salim tetap berbunyi Ta' sukun (مُسْلِمَاتْ).",
        "explanation": "Bab penutup Mutammimah ini memadukan kaidah sintaksis nahwu dengan kaidah artikulasi fonetik lisan Arab yang fasih saat mengakhiri kalam.",
        "keyPoints": [
          "Hukum asal waqf: Disukunkan huruf terakhirnya.",
          "Waqf Tanwin Nashab: Diganti huruf Alif (Mad 'Iwadh).",
          "Waqf Ta' Marbuthah: Berubah bunyi menjadi Ha' sukun (هـ)."
        ]
      }
    ]
  },
  {
    "id": "al-amtsilah-at-tashrifiyyah",
    "title": "Amtsilah Tasrifiyah",
    "titleArabic": "الْأَمْثِلَةُ التَّصْرِيفِيَّةُ",
    "author": "K.H. Muhammad Ma'shum bin Ali (Pesantren Seblak, Jombang)",
    "category": "shorof",
    "description": "Kitab rujukan tunggal ilmu shorof SmartKib. Masterpiece morfologi bahasa Arab warisan ulama Nusantara yang menyajikan seluruh bab tashrif istilahi, lughawi, dan kaidah bina' secara sistematis.",
    "level": "Mubtadi', Mutawassith & Mutaqaddim",
    "coverColor": "from-amber-700 to-orange-950",
    "chapters": [
      {
        "id": "amtsilah-tsulatsi-1",
        "titleArabic": "الثُّلَاثِيُّ الْمُجَرَّدُ - الْبَابُ الْأَوَّلُ: فَعَلَ يَفْعُلُ",
        "titleIndo": "Bab 1: Tsulatsi Mujarrad Bab 1 (فَعَلَ - يَفْعُلُ / نَصَرَ - يَنْصُرُ)",
        "contentArabic": "الْبَابُ الْأَوَّلُ مِنْ أَبْوَابِ الثُّلَاثِيِّ الْمُجَرَّدِ: (فَعَلَ يَفْعُلُ) بِفَتْحِ الْعَيْنِ فِي الْمَاضِي وَضَمِّهَا فِي الْمُضَارِعِ.\nمِثَالُهُ: نَصَرَ يَنْصُرُ نَصْرًا وَمَنْصَرًا فَهُوَ نَاصِرٌ وَذَاكَ مَنْصُورٌ، انْصُرْ لَا تَنْصُرْ مَنْصَرٌ مَنْصَرٌ مِنْصَرٌ.\nوَمِنْ أَمْثِلَتِهِ: كَتَبَ يَكْتُبُ، خَرَجَ يَخْرُجُ، قَعَدَ يَقْعُدُ، دَخَلَ يَدْخُلُ، قَتَلَ يَقْتُلُ.",
        "translation": "Bab Pertama dari enam bab Tsulatsi Mujarrad: wazan (فَعَلَ يَفْعُلُ) dengan memfathahkan 'Ain fi'il pada madhi dan mendhommahkannya pada mudhari' (Fathu Dhommin). Pola tashrif: نَصَرَ (telah menolong) - يَنْصُرُ (sedang menolong) - نَصْرًا (pertolongan) - فَهُوَ نَاصِرٌ (penolong) - وَذَاكَ مَنْصُورٌ (yang ditolong) - انْصُرْ (tolonglah!) - لَا تَنْصُرْ (jangan menolong!) - مَنْصَرٌ (waktu/tempat menolong) - مِنْصَرٌ (alat menolong).",
        "explanation": "Bab 1 adalah bab paling produktif dan banyak memiliki kosa kata muta'addi (transitif) serta lazim dalam bahasa Arab. Ciri khasnya adalah rumus Fathu Dhommin.",
        "keyPoints": [
          "Rumus: Fathu Dhommin (فَعَلَ - يَفْعُلُ).",
          "Contoh Masyhur: نَصَرَ يَنْصُرُ, كَتَبَ يَكْتُبُ, خَرَجَ يَخْرُجُ.",
          "Sepuluh Sighah Tashrif: Madhi, Mudhari', Masdar, Masdar Mim, Isim Fa'il, Isim Maf'ul, Amr, Nahyi, Zaman/Makan, Alah."
        ]
      },
      {
        "id": "amtsilah-tsulatsi-2",
        "titleArabic": "الثُّلَاثِيُّ الْمُجَرَّدُ - الْبَابُ الثَّانِي: فَعَلَ يَفْعِلُ",
        "titleIndo": "Bab 2: Tsulatsi Mujarrad Bab 2 (فَعَلَ - يَفْعِلُ / ضَرَبَ - يَضْرِبُ)",
        "contentArabic": "الْبَابُ الثَّانِي: (فَعَلَ يَفْعِلُ) بِفَتْحِ الْعَيْنِ فِي الْمَاضِي وَكَسْرِهَا فِي الْمُضَارِعِ (فَتْحُ كَسْرٍ).\nمِثَالُهُ: ضَرَبَ يَضْرِبُ ضَرْبًا وَمَضْرَبًا فَهُوَ ضَارِبٌ وَذَاكَ مَضْرُوبٌ، اضْرِبْ لَا تَضْرِبْ مَضْرِبٌ مَضْرِبٌ مِضْرَبٌ.\nوَمِنْ أَمْثِلَتِهِ: جَلَسَ يَجْلِسُ، غَفَرَ يَغْفِرُ، حَمَلَ يَحْمِلُ، عَرَفَ يَعْرِفُ، صَبَرَ يَصْبِرُ.",
        "translation": "Bab Kedua Tsulatsi Mujarrad: wazan (فَعَلَ يَفْعِلُ) dengan memfathahkan 'Ain pada madhi dan mengkasrahkannya pada mudhari' (Fathu Kasrin). Contoh: ضَرَبَ يَضْرِبُ ضَرْبًا (memukul). Contoh lainnya: جَلَسَ يَجْلِسُ (duduk), غَفَرَ يَغْفِرُ (mengampuni), صَبَرَ يَصْبِرُ (bersabar).",
        "explanation": "Banyak fi'il bertipe bina' Mitsal Wawi (وَعَدَ يَعِدُ) dan Ajwaf Ya'i (بَاعَ يَبِيعُ) yang masuk ke dalam bab kedua ini.",
        "keyPoints": [
          "Rumus: Fathu Kasrin (فَعَلَ - يَفْعِلُ).",
          "Isim Zaman & Makan berwazan مَفْعِلٌ (kasrah 'ain): مَجْلِسٌ، مَضْرِبٌ.",
          "Contoh: ضَرَبَ، جَلَسَ، غَفَرَ، عَرَفَ."
        ]
      },
      {
        "id": "amtsilah-tsulatsi-3",
        "titleArabic": "الثُّلَاثِيُّ الْمُجَرَّدُ - الْبَابُ الثَّالِثُ: فَعَلَ يَفْعَلُ",
        "titleIndo": "Bab 3: Tsulatsi Mujarrad Bab 3 (فَعَلَ - يَفْعَلُ / فَتَحَ - يَفْتَحُ)",
        "contentArabic": "الْبَابُ الثَّالِثُ: (فَعَلَ يَفْعَلُ) بِفَتْحِ الْعَيْنِ فِيهِمَا (فَتْحَتَانِ).\nمِثَالُهُ: فَتَحَ يَفْتَحُ فَتْحًا وَمَفْتَحًا فَهُوَ فَاتِحٌ وَذَاكَ مَفْتُوحٌ، افْتَحْ لَا تَفْتَحْ مَفْتَحٌ مَفْتَحٌ مِفْتَحٌ.\nشَرْطُهُ: أَنْ تَكُونَ عَيْنُهُ أَوْ لَامُهُ حَرْفًا مِنْ حُرُوفِ الْحَلْقِ السِّتَّةِ (الْهَمْزَةِ، وَالْهَاءِ، وَالْعَيْنِ، وَالْحَاءِ، وَالْغَيْنِ، وَالْخَاءِ). نَحْوُ: ذَهَبَ يَذْهَبُ، قَرَأَ يَقْرَأُ، رَفَعَ يَرْفَعُ.",
        "translation": "Bab Ketiga Tsulatsi Mujarrad: wazan (فَعَلَ يَفْعَلُ) dengan memfathahkan 'Ain pada madhi maupun mudhari' (Fathatani). Contoh: فَتَحَ يَفْتَحُ (membuka). Syarat bab ini: 'Ain fi'il atau Lam fi'ilnya harus berupa salah satu dari 6 huruf halaq (ء، هـ، ع، ح، غ، خ), seperti ذَهَبَ يَذْهَبُ, قَرَأَ يَقْرَأُ, رَفَعَ يَرْفَعُ.",
        "explanation": "Fathah adalah harakat paling ringan, disesuaikan dengan makhraj huruf halaq yang keluar dari tenggorokan.",
        "keyPoints": [
          "Rumus: Fathatani (فَعَلَ - يَفْعَلُ).",
          "Syarat Mutlak: 'Ain atau Lam fi'il berupa huruf halaq.",
          "Contoh: فَتَحَ يَفْتَحُ، ذَهَبَ يَذْهَبُ، قَرَأَ يَقْرَأُ."
        ]
      },
      {
        "id": "amtsilah-tsulatsi-4",
        "titleArabic": "الثُّلَاثِيُّ الْمُجَرَّدُ - الْبَابُ الرَّابِعُ: فَعِلَ يَفْعَلُ",
        "titleIndo": "Bab 4: Tsulatsi Mujarrad Bab 4 (فَعِلَ - يَفْعَلُ / عَلِمَ - يَعْلَمُ)",
        "contentArabic": "الْبَابُ الرَّابِعُ: (فَعِلَ يَفْعَلُ) بِكَسْرِ الْعَيْنِ فِي الْمَاضِي وَفَتْحِهَا فِي الْمُضَارِعِ (كَسْرُ فَتْحٍ).\nمِثَالُهُ: عَلِمَ يَعْلَمُ عِلْمًا وَمَعْلَمًا فَهُوَ عَالِمٌ وَذَاكَ مَعْلُومٌ، اعْلَمْ لَا تَعْلَمْ مَعْلَمٌ مَعْلَمٌ.\nوَمِنْ أَمْثِلَتِهِ: فَهِمَ يَفْهَمُ، سَمِعَ يَسْمَعُ، شَرِبَ يَشْرَبُ، فَرِحَ يَفْرَحُ، حَمِدَ يَحْمَدُ.",
        "translation": "Bab Keempat Tsulatsi Mujarrad: wazan (فَعِلَ يَفْعَلُ) dengan mengkasrah 'Ain pada madhi dan memfathahkannya pada mudhari' (Kasru Fathin). Contoh: عَلِمَ يَعْلَمُ عِلْمًا (mengetahui). Contoh lainnya: فَهِمَ يَفْهَمُ (memahami), سَمِعَ يَسْمَعُ (mendengar), شَرِبَ يَشْرَبُ (minum), فَرِحَ يَفْرَحُ (gembira).",
        "explanation": "Bab ini sering digunakan untuk fi'il-fi'il yang menunjukkan sifat batin, perasaan, kepuasan, atau pengetahuan indrawi.",
        "keyPoints": [
          "Rumus: Kasru Fathin (فَعِلَ - يَفْعَلُ).",
          "Karakteristik: Makna pengetahuan indrawi dan emosi/perasaan.",
          "Contoh: عَلِمَ، فَهِمَ، سَمِعَ، شَرِبَ."
        ]
      },
      {
        "id": "amtsilah-tsulatsi-5",
        "titleArabic": "الثُّلَاثِيُّ الْمُجَرَّدُ - الْبَابُ الْخَامِسُ: فَعُلَ يَفْعُلُ",
        "titleIndo": "Bab 5: Tsulatsi Mujarrad Bab 5 (فَعُلَ - يَفْعُلُ / حَسُنَ - يَحْسُنُ)",
        "contentArabic": "الْبَابُ الْخَامِسُ: (فَعُلَ يَفْعُلُ) بِضَمِّ الْعَيْنِ فِيهِمَا (ضَمُّ ضَمٍّ).\nمِثَالُهُ: حَسُنَ يَحْسُنُ حُسْنًا فَهُوَ حَسَنٌ، احْسُنْ لَا تَحْسُنْ مَحْسَنٌ مَحْسَنٌ.\nوَهَذَا الْبَابُ لَا يَكُونُ إِلَّا لَازِمًا، وَلَا يَكُونُ إِلَّا لِلْأَوْصَافِ الْخِلْقِيَّةِ وَالطَّبَائِعِ الثَّابِتَةِ، نَحْوُ: كَرُمَ يَكْرُمُ، شَرُفَ يَشْرُفُ، جَمُلَ يَجْمُلُ، عَظُمَ يَعْظُمُ.",
        "translation": "Bab Kelima Tsulatsi Mujarrad: wazan (فَعُلَ يَفْعُلُ) dengan mendhommahkan 'Ain pada madhi dan mudhari' (Dhommu Dhommin). Contoh: حَسُنَ يَحْسُنُ حُسْنًا (menjadi baik/tampan). Bab ini HANYA berupa fi'il lazim (tidak membutuhkan objek) dan khusus untuk sifat watak/tabiat pembawaan asli, seperti كَرُمَ (dermawan), شَرُفَ (mulia), عَظُمَ (agung).",
        "explanation": "Karena hanya lazim, bab ini tidak memiliki Isim Maf'ul dan tidak memiliki Isim Alat, melainkan menghasilkan Sifat Musyabbahah seperti حَسَنٌ atau كَرِيمٌ.",
        "keyPoints": [
          "Rumus: Dhommu Dhommin (فَعُلَ - يَفْعُلُ).",
          "Khusus Fi'il Lazim: Menunjukkan sifat watak bawaan.",
          "Tidak memiliki Isim Maf'ul (diganti Sifat Musyabbahah)."
        ]
      },
      {
        "id": "amtsilah-tsulatsi-6",
        "titleArabic": "الثُّلَاثِيُّ الْمُجَرَّدُ - الْبَابُ السَّادِسُ: فَعِلَ يَفْعِلُ",
        "titleIndo": "Bab 6: Tsulatsi Mujarrad Bab 6 (فَعِلَ - يَفْعِلُ / حَسِبَ - يَحْسِبُ)",
        "contentArabic": "الْبَابُ السَّادِسُ: (فَعِلَ يَفْعِلُ) بِكَسْرِ الْعَيْنِ فِيهِمَا (كَسْرَتَانِ).\nمِثَالُهُ: حَسِبَ يَحْسِبُ حِسْبَانًا وَمَحْسَبَةً فَهُوَ حَاسِبٌ وَذَاكَ مَحْسُوبٌ، احْسِبْ لَا تَحْسِبْ مَحْسِبٌ مَحْسِبٌ.\nوَهُوَ أَقَلُّ أَبْوَابِ الثُّلَاثِيِّ أَلْفَاظًا فِي لِسَانِ الْعَرَبِ، نَحْوُ: وَرِثَ يَرِثُ، وَوَلِيَ يَلِي، وَوَمِقَ يَمِقُ.",
        "translation": "Bab Keenam Tsulatsi Mujarrad: wazan (فَعِلَ يَفْعِلُ) dengan mengkasrahkan 'Ain pada madhi dan mudhari' (Kasratani). Contoh: حَسِبَ يَحْسِبُ (mengira/menghitung). Bab ini adalah bab paling sedikit kosa katanya dalam bahasa Arab, contoh lainnya: وَرِثَ يَرِثُ (mewarisi), وَلِيَ يَلِي (memimpin/dekat).",
        "explanation": "Kebanyakan kosa kata pada bab 6 ini berupa bina' Mitsal Wawi yang membuang huruf wawu pada bentuk mudhari'nya (وَرِثَ -> يَرِثُ).",
        "keyPoints": [
          "Rumus: Kasratani (فَعِلَ - يَفْعِلُ).",
          "Bab paling sedikit kosa katanya dalam lisan Arab.",
          "Contoh: حَسِبَ، وَرِثَ، وَلِيَ."
        ]
      },
      {
        "id": "amtsilah-rubai-mujarrad",
        "titleArabic": "الرُّبَاعِيُّ الْمُجَرَّدُ: فَعْلَلَ يُفَعْلِلُ",
        "titleIndo": "Bab 7: Ruba'i Mujarrad (فَعْلَلَ - يُفَعْلِلُ / دَحْرَجَ - يُدَحْرِجُ)",
        "contentArabic": "لِلرُّبَاعِيِّ الْمُجَرَّدِ بَابٌ وَاحِدٌ وَهُوَ: (فَعْلَلَ يُفَعْلِلُ فَعْلَلَةً وَفِعْلَالًا).\nمِثَالُهُ: دَحْرَجَ يُدَحْرِجُ دَحْرَجَةً وَدِحْرَاجًا فَهُوَ مُدَحْرِجٌ وَذَاكَ مُدَحْرَجٌ، دَحْرِجْ لَا تُدَحْرِجْ مُدَحْرَجٌ مُدَحْرَجٌ.\nوَمِنْ أَمْثِلَتِهِ: زَلْزَلَ يُزَلْزِلُ، وَسْوَسَ يُوَسْوِسُ، طَمْأَنَ يُطَمْئِنُ، بَعْثَرَ يُبَعْثِرُ.",
        "translation": "Ruba'i Mujarrad (kata kerja empat huruf asli tanpa imbuhan) hanya memiliki satu bab yaitu wazan: فَعْلَلَ يُفَعْلِلُ. Contoh pokok: دَحْرَجَ يُدَحْرِجُ دَحْرَجَةً (menggelindingkan). Contoh lainnya: زَلْزَلَ يُزَلْزِلُ (menggoncangkan), وَسْوَسَ يُوَسْوِسُ (membisikkan), طَمْأَنَ يُطَمْئِنُ (menenangkan), بَعْثَرَ يُبَعْثِرُ (menghamburkan).",
        "explanation": "Keempat huruf pada wazan ini berstatus huruf ashliyah (Fa, 'Ain, Lam Awwal, dan Lam Tsani).",
        "keyPoints": [
          "Hanya memiliki 1 wazan pokok: فَعْلَلَ يُفَعْلِلُ.",
          "Masdar: فَعْلَلَةً (دَحْرَجَةً) dan فِعْلَالًا (دِحْرَاجًا / زِلْزَالًا).",
          "Seluruh 4 hurufnya adalah huruf asli."
        ]
      },
      {
        "id": "amtsilah-mulhaq-dahraja",
        "titleArabic": "الْأَبْوَابُ السَّبْعَةُ الْمُلْحَقَةُ بِدَحْرَجَ",
        "titleIndo": "Bab 8: Tujuh Bab Mulhaq Ruba'i Mujarrad (Mulhaq bi Dahraja)",
        "contentArabic": "الْمُلْحَقُ بِدَحْرَجَ سَبْعَةُ أَبْوَابٍ، صِيغَتْ لِتُلْحَقَ بِالرُّبَاعِيِّ فِي عَدَدِ الْحُرُوفِ وَالْحَرَكَاتِ وَالسَّكَنَاتِ:\n١. (فَوْعَلَ يُفَوْعِلُ) نَحْوُ: حَوْقَلَ يُحَوْقِلُ حَوْقَلَةً.\n٢. (فَيْعَلَ يُفَيْعِلُ) نَحْوُ: بَيْطَرَ يُبَيْطِرُ بَيْطَرَةً.\n٣. (فَعْوَلَ يُفَعْوِلُ) نَحْوُ: جَهْوَرَ يُجَهْوِرُ جَهْوَرَةً.\n٤. (فَعْيَلَ يُفَعْيِلُ) نَحْوُ: عَيْثَرَ يُعَيْثِرُ عَيْثَرَةً.\n٥. (فَعْلَى يُفَعْلِي) نَحْوُ: سَلْقَى يُسَلْقِي سَلْقَيَةً وَسِلْقَاءً.\n٦. (فَعْنَلَ يُفَعْنِلُ) نَحْوُ: قَلْنَسَ يُقَلْنِسُ قَلْنَسَةً.\n٧. (فَعْلَتَ يُفَعْلِتُ) نَحْوُ: جَلْبَبَ يُجَلْبِبُ جَلْبَبَةً.",
        "translation": "Fi'il Mulhaq bi Dahraja ada 7 bab yang dibentuk agar menyerupai wazan ruba'i dalam jumlah huruf, harakat, dan sukunnya: (1) فَوْعَلَ (حَوْقَلَ mengucap la haula), (2) فَيْعَلَ (بَيْطَرَ mengobati hewan), (3) فَعْوَلَ (جَهْوَرَ mengeraskan suara), (4) فَعْيَلَ (عَيْثَرَ), (5) فَعْلَى (سَلْقَى), (6) فَعْنَلَ (قَلْنَسَ mengenakan peci), (7) فَعْلَتَ (جَلْبَبَ mengenakan jilbab).",
        "explanation": "Ilhaq bertujuan menyamakan pola tasarruf suatu kata dengan kata ruba'i tanpa mengubah fungsi dasar akar katanya.",
        "keyPoints": [
          "Tujuh bab mulhaq: Fau'ala, Fai'ala, Fa'wala, Fa'yala, Fa'la, Fa'nala, Fa'lata.",
          "Tujuan Ilhaq: Menyamakan timbangan tashrif dengan Dahraja."
        ]
      },
      {
        "id": "amtsilah-mazid-1",
        "titleArabic": "الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِحَرْفٍ وَاحِدٍ",
        "titleIndo": "Bab 9: Tsulatsi Mazid 1 Huruf (أَفْعَلَ، فَعَّلَ، فَاعَلَ)",
        "contentArabic": "أَوْزَانُ الثُّلَاثِيِّ الْمَزِيدِ بِحَرْفٍ ثَلَاثَةٌ:\n١. (أَفْعَلَ يُفْعِلُ إِفْعَالًا) نَحْوُ: أَكْرَمَ يُكْرِمُ إِكْرَامًا فَهُوَ مُكْرِمٌ وَذَاكَ مُكْرَمٌ، أَكْرِمْ لَا تُكْرِمْ مُكْرَمٌ مُكْرَمٌ. (فَائِدَتُهُ التَّعْدِيَةُ نَحْوُ: أَخْرَجَ).\n٢. (فَعَّلَ يُفَعِّلُ تَفْعِيلًا) نَحْوُ: فَرَّحَ يُفَرِّحُ تَفْرِيحًا فَهُوَ مُفَرِّحٌ وَذَاكَ مُفَرَّحٌ، فَرِّحْ لَا تُفَرِّحْ مُفَرَّحٌ مُفَرَّحٌ. (فَائِدَتُهُ التَّكْثِيرُ نَحْوُ: قَطَّعَ).\n٣. (فَاعَلَ يُفَاعِلُ مُفَاعَلَةً وَفِعَالًا) نَحْوُ: قَاتَلَ يُقَاتِلُ مُقَاتَلَةً وَقِتَالًا فَهُوَ مُقَاتِلٌ وَذَاكَ مُقَاتَلٌ. (فَائِدَتُهُ الْمُشَارَكَةُ بَيْنَ اثْنَيْنِ).",
        "translation": "Wazan Tsulatsi Mazid bi Harfin (tiga huruf asal ditambah satu huruf) ada 3: (1) أَفْعَلَ يُفْعِلُ إِفْعَالًا (أَكْرَمَ memuliakan - faedah ta'diyah/menjadikan transitif), (2) فَعَّلَ يُفَعِّلُ تَفْعِيلًا (فَرَّحَ menggembirakan - faedah taktsir/intensitas banyak), (3) فَاعَلَ يُفَاعِلُ مُفَاعَلَةً (قَاتَلَ memerangi - faedah musyarakah/saling berinteraksi).",
        "explanation": "Kaidah emas shorof: Penambahan huruf pada wazan (ziyadatul mabna) menghasilkan penambahan nuansa makna (ziyadatul ma'na).",
        "keyPoints": [
          "Tiga wazan pokok: Af'ala, Fa'ala, Fa'ala.",
          "Faedah Af'ala: Ta'diyah (خَرَجَ keluar -> أَخْرَجَ mengeluarkan).",
          "Faedah Fa'ala: Taktsir (قَطَّعَ memotong berulang-ulang/banyak).",
          "Faedah Fa'ala: Musyarakah (ضَارَبَ saling memukul)."
        ]
      },
      {
        "id": "amtsilah-mazid-2",
        "titleArabic": "الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِحَرْفَيْنِ",
        "titleIndo": "Bab 10: Tsulatsi Mazid 2 Huruf (تَفَعَّلَ، تَفَاعَلَ، اِفْتَعَلَ، اِنْفَعَلَ، اِفْعَلَّ)",
        "contentArabic": "أَوْزَانُ الثُّلَاثِيِّ الْمَزِيدِ بِحَرْفَيْنِ خَمْسَةٌ:\n١. (تَفَعَّلَ يَتَفَعَّلُ تَفَعُّلًا) نَحْوُ: تَكَلَّمَ يَتَكَلَّمُ تَكَلُّمًا (لِلتَّكَلُّفِ وَالتَّدَرُّجِ نَحْوُ: تَعَلَّمَ).\n٢. (تَفَاعَلَ يَتَفَاعَلُ تَفَاعُلًا) نَحْوُ: تَبَاعَدَ يَتَبَاعَدُ تَبَاعُدًا (لِلْمُشَارَكَةِ بَيْنَ اثْنَيْنِ فَأَكْثَرَ).\n٣. (افْتَعَلَ يَفْتَعِلُ افْتِعَالًا) نَحْوُ: اكْتَسَبَ يَكْتَسِبُ اكْتِسَابًا (لِلِاجْتِهَادِ وَالْمُطَاوَعَةِ).\n٤. (انْفَعَلَ يَنْفَعِلُ انْفِعَالًا) نَحْوُ: انْكَسَرَ يَنْكَسِرُ انْكِسَارًا (لِلْمُطَاوَعَةِ، وَلَا يَكُونُ إِلَّا لَازِمًا).\n٥. (افْعَلَّ يَفْعَلُّ افْعِلَالًا) نَحْوُ: احْمَرَّ يَحْمَرُّ احْمِرَارًا (لِلْمُبَالَغَةِ فِي الْأَلْوَانِ وَالْعُيُوبِ).",
        "translation": "Wazan Tsulatsi Mazid bi Harfain (tiga huruf ditambah dua huruf) ada 5: (1) تَفَعَّلَ (تَعَلَّمَ belajar bertahap), (2) تَفَاعَلَ (تَبَاعَدَ saling menjauh), (3) اِفْتَعَلَ (اِكْتَسَبَ berupaya sungguh-sungguh), (4) اِنْفَعَلَ (اِنْكَسَرَ menjadi pecah - khusus muthawa'ah dan lazim), (5) اِفْعَلَّ (اِحْمَرَّ sangat merah - khusus penguatan warna/cacat).",
        "explanation": "Wazan Infa'ala (انفعل) hanya menerima kata kerja muta'addi yang memiliki dampak fisik nyata dan hasilnya selalu menjadi fi'il lazim.",
        "keyPoints": [
          "Lima wazan: Tafa'ala, Tafa'ala, Ifta'ala, Infa'ala, If'alla.",
          "Muthawa'ah: Penerimaan bekas perbuatan (كَسَرْتُهُ فَانْكَسَرَ).",
          "Wazan If'alla: Khusus warna dan cacat fisik (احْمَرَّ، اعْوَرَّ)."
        ]
      },
      {
        "id": "amtsilah-mazid-3",
        "titleArabic": "الثُّلَاثِيُّ الْمَزِيدُ فِيهِ بِثَلَاثَةِ أَحْرُفٍ",
        "titleIndo": "Bab 11: Tsulatsi Mazid 3 Huruf (اِسْتَفْعَلَ، اِفْعَوْعَلَ، اِفْعَوَّلَ، اِفْعَالَّ)",
        "contentArabic": "أَوْزَانُ الثُّلَاثِيِّ الْمَزِيدِ بِثَلَاثَةِ أَحْرُفٍ أَرْبَعَةٌ:\n١. (اسْتَفْعَلَ يَسْتَفْعِلُ اسْتِفْعَالًا) نَحْوُ: اسْتَخْرَجَ يَسْتَخْرِجُ اسْتِخْرَاجًا (فَائِدَتُهُ الطَّلَبُ نَحْوُ: اسْتَغْفَرَ أَيْ طَلَبَ الْمَغْفِرَةَ، وَالتَّحَوُّلُ نَحْوُ: اسْتَحْجَرَ الطِّينُ).\n٢. (افْعَوْعَلَ يَفْعَوْعِلُ افْعِيعَالًا) نَحْوُ: اعْشَوْشَبَ يَعْشَوْشِبُ اعْشِيشَابًا (لِلْمُبَالَغَةِ فِي الْفِعْلِ).\n٣. (افْعَوَّلَ يَفْعَوِّلُ افْعِوَّالًا) نَحْوُ: اجْلَوَّذَ يَجْلَوِّذُ اجْلِوَّاذًا (أَسْرَعَ فِي السَّيْرِ).\n٤. (افْعَالَّ يَفْعَالُّ افْعِيلَالًا) نَحْوُ: احْمَارَّ يَحْمَارُّ احْمِيرَارًا (لِقُوَّةِ اللَّوْنِ زِيَادَةً عَلَى احْمَرَّ).",
        "translation": "Wazan Tsulatsi Mazid bi Tsalatsati Ahruf (tiga huruf asal ditambah tiga huruf) ada 4: (1) اسْتَفْعَلَ (اسْتَغْفَرَ memohon ampunan - faedah thalab/meminta, atau istihalah/berubah wujud), (2) افْعَوْعَلَ (اعْشَوْشَبَ tanah sangat lebat rumputnya - mubalaghah), (3) افْعَوَّلَ (اجْلَوَّذَ bergegas cepat), (4) افْعَالَّ (احْمَارَّ merah padam luar biasa).",
        "explanation": "Wazan Istaf'ala adalah wazan enam huruf (sudasi) paling luas pemakaiannya dalam teks Arab untuk makna memohon atau menganggap sesuatu.",
        "keyPoints": [
          "Wazan Istaf'ala: Thalab (permohonan) seperti اسْتَعَانَ، اسْتَغْفَرَ.",
          "Mubalaghah: If'au'ala dan If'alla melipatgandakan intensitas sifat."
        ]
      },
      {
        "id": "amtsilah-mulhaq-tadahraja",
        "titleArabic": "مُلْحَقُ تَدَحْرَجَ (الْخُمَاسِيُّ الْمُلْحَقُ)",
        "titleIndo": "Bab 12: Mulhaq Tadahraja (تَفَعْلَلَ والمُلحَقَاتُ به)",
        "contentArabic": "الْمُلْحَقُ بِتَدَحْرَجَ خَمْسَةُ أَبْوَابٍ كُلُّهَا لِلْمُطَاوَعَةِ:\n١. (تَفَعْلَلَ يَتَفَعْلَلُ تَفَعْلُلًا) نَحْوُ: تَدَحْرَجَ يَتَدَحْرَجُ تَدَحْرُجًا.\n٢. (تَفَوْعَلَ يَتَفَوْعَلُ تَفَوْعُلًا) نَحْوُ: تَجَوْرَبَ يَتَجَوْرَبُ تَجَوْرُبًا (لَبِسَ الْجَوْرَبَ).\n٣. (تَفَيْعَلَ يَتَفَيْعَلُ تَفَيْعُلًا) نَحْوُ: تَشَيْطَنَ يَتَشَيْطَنُ تَشَيْطُنًا.\n٤. (تَفَعْوَلَ يَتَفَعْوَلُ تَفَعْوُلًا) نَحْوُ: تَرَهْوَكَ يَتَرَهْوَكُ تَرَهْوُكًا.\n٥. (تَفَعْلَى يَتَفَعْلَى تَفَعْلِيًا) نَحْوُ: تَسَلْقَى يَتَسَلْقَى تَسَلْقِيًا.",
        "translation": "Mulhaq Tadahraja mencakup 5 bab yang disamakan dengan pola lima huruf (khumasi): (1) تَفَعْلَلَ (تَدَحْرَجَ menggelinding), (2) تَفَوْعَلَ (تَجَوْرَبَ memakai kaos kaki), (3) تَفَيْعَلَ (تَشَيْطَنَ bersikap seperti setan), (4) تَفَعْوَلَ (تَرَهْوَكَ), (5) تَفَعْلَى (تَسَلْقَى terlentang).",
        "explanation": "Kelima bab ini berfaedah muthawa'ah dari wazan mulhaq bi dahraja.",
        "keyPoints": [
          "Tadahraja dan lima cabangnya.",
          "Faedah: Muthawa'ah terhadap fi'il ruba'i mujarrad mulhaq."
        ]
      },
      {
        "id": "amtsilah-mulhaq-ihranjama",
        "titleArabic": "مُلْحَقُ احْرَنْجَمَ",
        "titleIndo": "Bab 13: Mulhaq Ihranjama (اِفْعَنْلَلَ والمُلحَقَاتُ به)",
        "contentArabic": "الْمُلْحَقُ بِاحْرَنْجَمَ بَابَانِ:\n١. (افْعَنْلَلَ يَفْعَنْلِلُ افْعِنْلَالًا) نَحْوُ: احْرَنْجَمَ يَحْرَنْجِمُ احْرِنْجَامًا (اجْتَمَعَتِ الْإِبِلُ).\n٢. (افْعَنْلَى يَفْعَنْلِي افْعِنْلَاءً) نَحْوُ: اقْعَنْسَسَ يَاقْعَنْسِسُ اقْعِنْسَاسًا، وَاحْرَنْبَى يَحْرَنْبِي احْرِنْبَاءً.",
        "translation": "Mulhaq Ihranjama memiliki wazan enam huruf: (1) افْعَنْلَلَ (احْرَنْجَمَ sekumpulan unta berkumpul padat), (2) افْعَنْلَى (اقْعَنْسَسَ membusungkan dada).",
        "explanation": "Wazan ini menunjukkan pemadatan makna berkumpul atau kekukuhan fisik.",
        "keyPoints": [
          "Wazan If'anlala dan If'anla.",
          "Karakteristik: Enam huruf berfaedah muthawa'ah."
        ]
      },
      {
        "id": "amtsilah-mulhaq-iqsyarra",
        "titleArabic": "مُلْحَقُ اقْشَعَرَّ",
        "titleIndo": "Bab 14: Mulhaq Iqsy'arra (اِفْعَلَلَّ)",
        "contentArabic": "بَابُ (افْعَلَلَّ يَفْعَلِلُّ افْعِلَّالًا) نَحْوُ: اقْشَعَرَّ يَقْشَعِرُّ اقْشِعْرَارًا (ارْتَعَدَ جِلْدُهُ مِنْ خَوْفٍ أَوْ بَرْدٍ)، وَاطْمَأَنَّ يَطْمَئِنُّ طُمَأْنِينَةً.\nوَفَائِدَتُهُ الْمُبَالَغَةُ الشَّدِيدَةُ فِي حُصُولِ الْأَثَرِ.",
        "translation": "Wazan: افْعَلَلَّ يَفْعَلِلُّ افْعِلَّالًا seperti: اقْشَعَرَّ يَقْشَعِرُّ اقْشِعْرَارًا (kulitnya merinding hebat karena takut atau dingin), dan اطْمَأَنَّ يَطْمَئِنُّ طُمَأْنِينَةً (hatinya tenteram sempurna). Faedahnya adalah puncak kesangatan rasa (Mubalaghah Syadidah).",
        "explanation": "Wazan ini diakhiri dengan dua huruf sejenis yang diidghamkan (tasydid) pada lam kedua dan ketiga.",
        "keyPoints": [
          "Contoh Masyhur: اقْشَعَرَّ dan اطْمَأَنَّ.",
          "Makna: Kesangatan rasa merinding dan ketenangan jiwa."
        ]
      },
      {
        "id": "amtsilah-lughawi-madhi",
        "titleArabic": "التَّصْرِيفُ اللُّغَوِيُّ لِلْفِعْلِ الْمَاضِي",
        "titleIndo": "Bab 15: Tashrif Lughawi Fi'il Madhi Ma'lum & Majhul (14 Dhamir)",
        "contentArabic": "التَّصْرِيفُ اللُّغَوِيُّ هُوَ تَقْلِيبُ الصِّيغَةِ الْوَاحِدَةِ بِحَسَبِ الضَّمَائِرِ الْأَرْبَعَةَ عَشَرَ (لِلْغَائِبِ وَالْغَائِبَةِ وَالْمُخَاطَبِ وَالْمُخَاطَبَةِ وَالْمُتَكَلِّمِ):\n١. الْمَعْلُومُ: فَعَلَ، فَعَلَا، فَعَلُوا، فَعَلَتْ، فَعَلَتَا، فَعَلْنَ، فَعَلْتَ، فَعَلْتُمَا، فَعَلْتُمْ، فَعَلْتِ، فَعَلْتُمَا، فَعَلْتُنَّ، فَعَلْتُ، فَعَلْنَا.\n٢. الْمَجْهُولُ: فُعِلَ، فُعِلَا، فُعِلُوا، فُعِلَتْ، فُعِلَتَا، فُعِلْنَ، فُعِلْتَ، فُعِلْتُمَا، فُعِلْتُمْ، فُعِلْتِ، فُعِلْتُمَا، فُعِلْتُنَّ، فُعِلْتُ، فُعِلْنَا.",
        "translation": "Tashrif Lughawi adalah perputaran bentuk kata menurut 14 dhamir pelakunya (Gha'ib, Gha'ibah, Mukhatab, Mukhatabah, dan Mutakallim): Madhi Ma'lum: فَعَلَ (dia lk), فَعَلَا (mereka 2 lk), فَعَلُوا (mereka jamak lk), فَعَلَتْ (dia pr), فَعَلَتَا (mereka 2 pr), فَعَلْنَ (mereka jamak pr), فَعَلْتَ (kamu lk), فَعَلْتُمَا (kalian 2 lk), فَعَلْتُمْ (kalian jamak lk), فَعَلْتِ (kamu pr), فَعَلْتُمَا (kalian 2 pr), فَعَلْتُنَّ (kalian jamak pr), فَعَلْتُ (aku), فَعَلْنَا (kami). Bentuk Majhul: فُعِلَ hingga فُعِلْنَا.",
        "explanation": "Perubahan harakat akhir fi'il madhi terjadi saat bertemu dhamir mutaharrik (فَعَلْنَ، فَعَلْتَ -> sukun) atau wawu jamak (فَعَلُوا -> dhommah).",
        "keyPoints": [
          "Empat belas dhamir: 6 Gha'ib/ah, 6 Mukhatab/ah, 2 Mutakallim.",
          "Mabni 'alal Fath: فَعَلَ، فَعَلَا، فَعَلَتْ.",
          "Mabni 'alad Dhomm: فَعَلُوا (bertemu Wawu Jamak).",
          "Mabni 'alas Sukun: فَعَلْنَ hingga فَعَلْنَا (bertemu Dhamir Rafa' Mutaharrik)."
        ]
      },
      {
        "id": "amtsilah-lughawi-mudhari",
        "titleArabic": "التَّصْرِيفُ اللُّغَوِيُّ لِلْفِعْلِ الْمُضَارِعِ",
        "titleIndo": "Bab 16: Tashrif Lughawi Fi'il Mudhari' Ma'lum & Majhul (14 Dhamir)",
        "contentArabic": "تَصْرِيفُ الْمُضَارِعِ مَعَ الضَّمَائِرِ الْأَرْبَعَةَ عَشَرَ:\n١. الْمَعْلُومُ: يَفْعُلُ، يَفْعُلَانِ، يَفْعُلُونَ، تَفْعُلُ، تَفْعُلَانِ، يَفْعُلْنَ، تَفْعُلُ، تَفْعُلَانِ، تَفْعُلُونَ، تَفْعُلِينَ، تَفْعُلَانِ، تَفْعُلْنَ، أَفْعُلُ، نَفْعُلُ.\n٢. الْمَجْهُولُ: يُفْعَلُ، يُفْعَلَانِ، يُفْعَلُونَ، تُفْعَلُ، تُفْعَلَانِ، يُفْعَلْنَ، تُفْعَلُ، تُفْعَلَانِ، تُفْعَلُونَ، تُفْعَلِينَ، تُفْعَلَانِ، تُفْعَلْنَ، أُفْعَلُ، نُفْعَلُ.\nوَتُسَمَّى الْأَمْثِلَةُ الْخَمْسَةُ (الْأَفْعَالُ الْخَمْسَةُ): يَفْعُلَانِ، تَفْعُلَانِ، يَفْعُلُونَ، تَفْعُلُونَ، تَفْعُلِينَ، وَإِعْرَابُهَا بِثُبُوتِ النُّونِ رَفْعًا وَحَذْفِهَا نَصْبًا وَجَزْمًا.",
        "translation": "Tashrif Lughawi Fi'il Mudhari' bersama 14 dhamir: يَفْعُلُ (dia lk sedang berbuat) hingga نَفْعُلُ (kami sedang berbuat). Lima bentuk yang diakhiri nun disebut Af'alul Khamsah (يَفْعَلَانِ، تَفْعَلَانِ، يَفْعَلُونَ، تَفْعَلُونَ، تَفْعَلِينَ) yang di-i'rab dengan tetapnya nun saat rafa' dan dibuangnya nun saat nashab atau jazm.",
        "explanation": "Huruf Mudhara'ah ada 4 terhimpun dalam kata أَنَيْتُ. Dhommah pada huruf mudhara'ah menandakan fi'il ruba'i (يُكْرِمُ، يُدَحْرِجُ) atau fi'il majhul (يُنْصَرُ).",
        "keyPoints": [
          "Empat huruf mudhara'ah: Alif, Nun, Ya, Ta.",
          "Af'alul Khamsah: Tanda rafa' dengan Tsubutun Nun.",
          "Mabni Mabshur: Hanya pada jama' muannats (يَفْعُلْنَ dan تَفْعُلْنَ) karena bersambung Nun Niswah."
        ]
      },
      {
        "id": "amtsilah-nun-taukid",
        "titleArabic": "تَصْرِيفُ نُونِ التَّوْكِيدِ الثَّقِيلَةِ وَالْخَفِيفَةِ",
        "titleIndo": "Bab 17: Tashrif Nun Taukid Tsaqilah (ّ) dan Khafifah (ْ)",
        "contentArabic": "تَدْخُلُ نُونُ التَّوْكِيدِ عَلَى الْمُضَارِعِ وَالْأَمْرِ لِتَأْكِيدِ مَعْنَاهُمَا وَتَخْلِيصِ الْمُسْتَقْبَلِ:\n١. الثَّقِيلَةُ (الْمُشَدَّدَةُ): يَفْعُلَنَّ، يَفْعُلَانِّ، يَفْعُلُنَّ، تَفْعُلَنَّ، تَفْعُلَانِّ، يَفْعُلْنَانِّ، تَفْعُلَنَّ، تَفْعُلَانِّ، تَفْعُلُنَّ، تَفْعُلِنَّ، تَفْعُلَانِّ، تَفْعُلْنَانِّ، أَفْعُلَنَّ، نَفْعُلَنَّ.\n٢. الْخَفِيفَةُ (السَّاكِنَةُ): تَكُونُ فِي ثَمَانِيَةِ مَوَاضِعَ (لَا تَدْخُلُ عَلَى التَّثْنِيَةِ وَلَا جَمْعِ الْمُؤَنَّثِ) نَحْوُ: يَفْعُلَنْ، يَفْعُلُنْ، تَفْعُلَنْ، تَفْعُلُنْ، تَفْعُلِنْ، أَفْعُلَنْ، نَفْعُلَنْ.\nنَحْوُ قَوْلِهِ تَعَالَى: (لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ).",
        "translation": "Nun Taukid masuk pada fi'il mudhari' dan amr untuk menguatkan makna dan memurnikan waktu masa depan. Terbagi dua: (1) Nun Taukid Tsaqilah (bertasydid): يَفْعُلَنَّ... (2) Nun Taukid Khafifah (sukun): يَفْعُلَنْ... tidak masuk pada bentuk tatsniyah dan jamak muannats karena menghindari bertemunya dua sukun. Contoh dalam Al-Qur'an QS. Yusuf: 32 menggabungkan keduanya: لَيُسْجَنَنَّ (tsaqilah) dan لَيَكُونًا (khafifah tertulis alif).",
        "explanation": "Ketika fi'il mudhari' langsung bersambung dengan nun taukid (tanpa pemisah alif, wawu, ya), maka fi'il mudhari' tersebut berubah hukum menjadi Mabni di atas harakat Fathah.",
        "keyPoints": [
          "Dua jenis Nun: Tsaqilah (ّ) dan Khafifah (ْ).",
          "Pengaruh Gramatikal: Menyebabkan fi'il mudhari' mabni 'alal fath.",
          "Pengecualian Khafifah: Tidak boleh masuk pada tatsniyah dan jamak muannats."
        ]
      },
      {
        "id": "amtsilah-amr-nahyi",
        "titleArabic": "تَصْرِيفُ فِعْلِ الْأَمْرِ وَفِعْلِ النَّهْيِ",
        "titleIndo": "Bab 18: Tashrif Fi'il Amr (Perintah) dan Fi'il Nahyi (Larangan)",
        "contentArabic": "١. فِعْلُ الْأَمْرِ: يُشْتَقُّ مِنَ الْمُضَارِعِ الْمَجْزُومِ بِحَذْفِ حَرْفِ الْمُضَارَعَةِ، فَإِنْ كَانَ أَوَّلُهُ سَاكِنًا زِيدَتْ هَمْزَةُ الْوَصْلِ نَحْوُ: انْصُرْ، انْصُرَا، انْصُرُوا، انْصُرِي، انْصُرَا، انْصُرْنَ.\nوَمَعَ نُونِ التَّوْكِيدِ: انْصُرَنَّ، انْصُرَانِّ، انْصُرُنَّ، انْصُرِنَّ، انْصُرَانِّ، انْصُرْنَانِّ.\n٢. فِعْلُ النَّهْيِ: هُوَ الْمُضَارِعُ الْمَسْبُوقُ بِلَا النَّاهِيَةِ الْجَازِمَةِ نَحْوُ: لَا تَنْصُرْ، لَا تَنْصُرَا، لَا تَنْصُرُوا، لَا تَنْصُرِي، لَا تَنْصُرَا، لَا تَنْصُرْنَ.",
        "translation": "Fi'il Amr (kata kerja perintah) dibentuk dari fi'il mudhari' yang dijazmkan dengan membuang huruf mudhara'ah; jika huruf setelahnya sukun maka ditambah Hamzah Washal: انْصُرْ (tolonglah kamu 1 lk), انْصُرَا (kalian 2), انْصُرُوا (kalian jamak lk), انْصُرِي (kamu 1 pr), انْصُرَا (kalian 2 pr), انْصُرْنَ (kalian jamak pr). Fi'il Nahyi adalah fi'il mudhari' yang didahului Laa an-Nahiyah: لَا تَنْصُرْ hingga لَا تَنْصُرْنَ.",
        "explanation": "Harakat hamzah washal pada fi'il amr mengikuti harakat 'ain fi'il mudhari': jika 'ain fi'il dhommah maka hamzah washal berharakat dhommah (انْصُرْ), jika fathah atau kasrah maka hamzah washal berharakat kasrah (اضْرِبْ، افْتَحْ).",
        "keyPoints": [
          "Enam bentuk mukhatab pada Amr dan Nahyi.",
          "Harakat Hamzah Washal: Dhommah jika 'ain mudhari' dhommah, Kasrah pada selainnya.",
          "Nahyi menggunakan Laa Jazimah (لَا النَّاهِيَةُ)."
        ]
      },
      {
        "id": "amtsilah-dhamir-manshub",
        "titleArabic": "تَصْرِيفُ الضَّمِيرِ الْمَنْصُوبِ الْمُتَّصِلِ مَعَ الْأَفْعَالِ",
        "titleIndo": "Bab 19: Tashrif Dhamir Manshub Muttashil pada Fi'il (Maf'ul Bih)",
        "contentArabic": "تَتَّصِلُ ضَمَائِرُ النَّصْبِ بِالْأَفْعَالِ لِتَقَعَ مَفْعُولًا بِهِ، وَهِيَ اثْنَا عَشَرَ لَفْظًا:\nنَحْوُ: نَصَرَهُ (نَصَرَهُ هُوَ)، نَصَرَهُمَا، نَصَرَهُمْ، نَصَرَهَا، نَصَرَهُمَا، نَصَرَهُنَّ، نَصَرَكَ، نَصَرَكُمَا، نَصَرَكُمْ، نَصَرَكِ، نَصَرَكُمَا، نَصَرَكُنَّ، نَصَرَنِي (بِنُونِ الْوِقَايَةِ)، نَصَرَنَا.\nوَتَلْزَمُ نُونُ الْوِقَايَةِ مَعَ يَاءِ الْمُتَكَلِّمِ لِتَقِيَ الْفِعْلَ مِنَ الْكَسْرِ.",
        "translation": "Dhamir manshub muttashil bersambung dengan fi'il berkedudukan sebagai Maf'ul Bih: نَصَرَهُ (dia telah menolongnya), نَصَرَهُمَا, نَصَرَهُمْ, نَصَرَهَا, نَصَرَكَ, نَصَرَكُمْ, نَصَرَنِي (dia telah menolongku), نَصَرَنَا (dia telah menolong kami). Disertai Nun Wiqayah sebelum Ya' Mutakallim guna menjaga fi'il dari harakat kasrah.",
        "explanation": "Fi'il tidak pernah menerima harakat kasrah, maka dihadirkan Nun Wiqayah (penjaga) agar kasrah jatuh pada nun, bukan pada fi'il (نَصَرَنِي).",
        "keyPoints": [
          "Dhamir Muttashil sebagai Maf'ul Bih.",
          "Nun Wiqayah: Wajib disisipkan antara fi'il dan Ya' Mutakallim (نَصَرَنِي).",
          "Dua belas variasi dhamir maf'ul muttashil."
        ]
      },
      {
        "id": "amtsilah-fail-maful",
        "titleArabic": "تَصْرِيفُ اسْمِ الْفَاعِلِ وَاسْمِ الْمَفْعُولِ",
        "titleIndo": "Bab 20: Tashrif Isim Fa'il dan Isim Maf'ul (Mufrad, Tatsniyah, Jamak)",
        "contentArabic": "١. اسْمُ الْفَاعِلِ: نَاصِرٌ (مُفْرَدٌ مُذَكَّرٌ)، نَاصِرَانِ (تَثْنِيَةٌ)، نَاصِرُونَ (جَمْعُ مُذَكَّرٍ سَالِمٌ)، نُصَّارٌ وَنُصَّرٌ (جَمْعُ تَكْسِيرٍ)، نَاصِرَةٌ (مُفْرَدَةٌ مُؤَنَّثَةٌ)، نَاصِرَتَانِ، نَاصِرَاتٌ (جَمْعُ مُؤَنَّثٍ سَالِمٌ)، نَوَاصِرُ.\n٢. اسْمُ الْمَفْعُولِ: مَنْصُورٌ، مَنْصُورَانِ، مَنْصُورُونَ، مَنْصُورَةٌ، مَنْصُورَتَانِ، مَنْصُورَاتٌ، مَنَاصِيرُ.\nوَمِنْ غَيْرِ الثُّلَاثِيِّ يَكُونُ عَلَى وَزْنِ مُضَارِعِهِ بِإِبْدَالِ حَرْفِ الْمُضَارَعَةِ مِيمًا مَضْمُومَةً وَكَسْرِ مَا قَبْلَ الْآخِرِ فِي الْفَاعِلِ (مُكْرِمٌ) وَفَتْحِهِ فِي الْمَفْعُولِ (مُكْرَمٌ).",
        "translation": "Tashrif Isim Fa'il: نَاصِرٌ (penolong tunggal lk), نَاصِرَانِ (dua penolong), نَاصِرُونَ (para penolong jamak salim), نُصَّارٌ (jamak taksir), نَاصِرَةٌ (penolong wanita), نَاصِرَاتٌ (para penolong wanita). Tashrif Isim Maf'ul: مَنْصُورٌ (yang ditolong) hingga مَنْصُورَاتٌ. Pada selain fi'il tsulatsi mujarrad dibentuk dari wazan mudhari' dengan mengganti huruf mudhara'ah menjadi Mim dhommah dan mengkasrah sebelum akhir untuk fa'il (مُكْرِمٌ) dan memfathah untuk maf'ul (مُكْرَمٌ).",
        "explanation": "Isim Fa'il dan Isim Maf'ul mencakup bentuk mufrad, dual, jamak mudzakkar salim, jamak muannats salim, dan jamak taksir.",
        "keyPoints": [
          "Tsulatsi Mujarrad: Isim Fa'il wazan فَاعِلٌ, Isim Maf'ul wazan مَفْعُولٌ.",
          "Selain Tsulatsi: Mim dhommah + Kasrah sebelum akhir (Fa'il) / Fathah (Maf'ul).",
          "Tashrif ragam jumlah dan jenis kelamin."
        ]
      },
      {
        "id": "amtsilah-sifat-tafdhil",
        "titleArabic": "تَصْرِيفُ الصِّفَةِ الْمُشَبَّهَةِ وَاسْمِ التَّفْضِيلِ",
        "titleIndo": "Bab 21: Tashrif Sifat Musyabbahah dan Isim Tafdhil",
        "contentArabic": "١. الصِّفَةُ الْمُشَبَّهَةُ بِاسْمِ الْفَاعِلِ: تَصْدُرُ مِنَ الْفِعْلِ اللَّازِمِ لِلدَّلَالَةِ عَلَى الثُّبُوتِ، نَحْوُ: حَسَنٌ، حَسَنَانِ، حَسَنُونَ، حِسَانٌ، حَسَنَةٌ، حَسَنَتَانِ، حَسَنَاتٌ. وَنَحْوُ: كَرِيمٌ، كَرِيمَانِ، كُرَمَاءُ، كَرِيمَةٌ، كَرَائِمُ.\n٢. اسْمُ التَّفْضِيلِ: عَلَى وَزْنِ (أَفْعَلَ) لِلْمُذَكَّرِ وَ(فُعْلَى) لِلْمُؤَنَّثِ لِلدَّلَالَةِ عَلَى الزِّيَادَةِ فِي الْوَصْفِ، نَحْوُ: أَفْضَلُ، أَفْضَلَانِ، أَفْضَلُونَ، أَفَاضِلُ، فُضْلَى، فُضْلَيَانِ، فُضْلَيَاتٌ، فُضَلُ.",
        "translation": "Sifat Musyabbahah bersumber dari fi'il lazim untuk menunjukkan sifat yang melekat tetap: حَسَنٌ (tampan/baik) dan كَرِيمٌ (mulia) beserta perubahannya. Sedangkan Isim Tafdhil berwazan أَفْعَلُ untuk mudzakkar dan فُعْلَى untuk muannats guna menyatakan perbandingan kelebihan (paling/lebih): أَفْضَلُ (pria paling utama) dan فُضْلَى (wanita paling utama).",
        "explanation": "Isim Tafdhil tidak boleh dibentuk kecuali dari fi'il yang memenuhi syarat: tsulatsi, mujarrad, mutasharrif, dan menerima tingkatan kelebihan.",
        "keyPoints": [
          "Sifat Musyabbahah: Menunjukkan sifat permanen (ثُبُوتٌ).",
          "Isim Tafdhil Mudzakkar: أَفْعَلُ (أَكْبَرُ، أَعْظَمُ).",
          "Isim Tafdhil Muannats: فُعْلَى (كُبْرَى، عُظْمَى)."
        ]
      },
      {
        "id": "amtsilah-zaman-makan-alah",
        "titleArabic": "تَصْرِيفُ أَسْمَاءِ الزَّمَانِ وَالْمَكَانِ وَاسْمِ الْآلَةِ",
        "titleIndo": "Bab 22: Tashrif Asma' Az-Zaman, Al-Makan, dan Isim Alat",
        "contentArabic": "١. اسْمَا الزَّمَانِ وَالْمَكَانِ: يُصَاغَانِ مِنَ الثُّلَاثِيِّ عَلَى وَزْنِ (مَفْعَلٍ) بِفَتْحِ الْعَيْنِ نَحْوُ: مَنْصَرٌ، مَكْتَبٌ، مَفْتَحٌ. وَعَلَى (مَفْعِلٍ) بِكَسْرِ الْعَيْنِ إِذَا كَانَتْ عَيْنُ مُضَارِعِهِ مَكْسُورَةً نَحْوُ: مَجْلِسٌ، مَضْرِبٌ، مَوْعِدٌ.\n٢. اسْمُ الْآلَةِ: مَا يُعَالَجُ بِهِ الْفِعْلُ، وَلَهُ ثَلَاثَةُ أَوْزَانٍ قِيَاسِيَّةٍ:\n- مِفْعَلٌ نَحْوُ: مِنْصَرٌ، مِبْرَدٌ (kikir).\n- مِفْعَالٌ نَحْوُ: مِفْتَاحٌ (kunci), مِيزَانٌ (timbangan).\n- مِفْعَلَةٌ نَحْوُ: مِكْنَسَةٌ (sapu), مِمْسَحَةٌ (penghapus).",
        "translation": "Isim Zaman dan Makan dibentuk dari tsulatsi pada wazan مَفْعَلٌ (fathah 'ain) seperti مَكْتَبٌ (kantor/tempat menulis), dan wazan مَفْعِلٌ (kasrah 'ain) apabila 'ain mudhari'nya kasrah seperti مَجْلِسٌ (tempat duduk) atau مَوْعِدٌ (waktu perjanjian). Isim Alat adalah perkakas untuk melakukan perbuatan, memiliki 3 wazan baku: (1) مِفْعَلٌ (مِبْرَدٌ kikir), (2) مِفْعَالٌ (مِفْتَاحٌ kunci), (3) مِفْعَلَةٌ (مِكْنَسَةٌ sapu).",
        "explanation": "Pada fi'il selain tsulatsi mujarrad, bentuk Isim Zaman dan Isim Makan sama persis dengan bentuk Isim Maf'ulnya (seperti مُسْتَشْفَى rumah sakit).",
        "keyPoints": [
          "Wazan Zaman & Makan: مَفْعَلٌ dan مَفْعِلٌ.",
          "Tiga Wazan Isim Alat: مِفْعَلٌ، مِفْعَالٌ، مِفْعَلَةٌ.",
          "Isim Alat selalu diawali huruf Mim berharakat Kasrah (مِـ)."
        ]
      },
      {
        "id": "amtsilah-aqsam-bina",
        "titleArabic": "تَقْسِيمُ الْأَبْنِيَةِ (أَقْسَامُ الْبِنَاءِ السَّبْعَةِ)",
        "titleIndo": "Bab 23: Pembagian 7 Bina' Kata (Shahih, Mitsal, Mudha'af, Mahmuz, Ajwaf, Naqish, Lafif)",
        "contentArabic": "تَنْقَسِمُ أَبْنِيَةُ الْكَلِمَاتِ فِي الصَّرْفِ إِلَى سَبْعَةِ أَقْسَامٍ يَجْمَعُهَا بَيْتُ الشِّعْرِ:\n(صَحِيحٌ مِثَالٌ مُضَاعَفٌ لَفِيفٌ # نَاقِصٌ مَهْمُوزٌ أَجْوَفُ سَبِيلُ الْمَعْرِفَهْ)\n١. الصَّحِيحُ: مَا خَلَتْ أُصُولُهُ مِنْ أَحْرُفِ الْعِلَّةِ وَالْهَمْزَةِ وَالتَّضْعِيفِ نَحْوُ: نَصَرَ.\n٢. الْمِثَالُ: مَا كَانَتْ فَاؤُهُ حَرْفَ عِلَّةٍ نَحْوُ: وَعَدَ، يَسَرَ.\n٣. الْمُضَاعَفُ: مَا كَانَتْ عَيْنُهُ وَلَامُهُ مِنْ جِنْسٍ وَاحِدٍ نَحْوُ: مَدَّ (مَدَدَ).\n٤. اللَّفِيفُ: مَا كَانَ فِيهِ حَرْفَا عِلَّةٍ (مَفْرُوقٌ نَحْوُ: وَقَى، أَوْ مَقْرُونٌ نَحْوُ: شَوَى).\n٥. النَّاقِصُ: مَا كَانَتْ لَامُهُ حَرْفَ عِلَّةٍ نَحْوُ: غَزَا، رَمَى.\n٦. الْمَهْمُوزُ: مَا كَانَ أَحَدُ أُصُولِهِ هَمْزَةً نَحْوُ: أَخَذَ، سَأَلَ، قَرَأَ.\n٧. الْأَجْوَفُ: مَا كَانَتْ عَيْنُهُ حَرْفَ عِلَّةٍ نَحْوُ: قَالَ، بَاعَ.",
        "translation": "Struktur bangunan kata dalam ilmu shorof terbagi menjadi 7 jenis Bina': (1) Shohih: huruf aslinya bersih dari huruf illat, hamzah, dan tadl'if (نَصَرَ), (2) Mitsal: Fa fi'ilnya huruf illat (وَعَدَ), (3) Mudha'af: 'Ain dan Lam fi'ilnya berupa huruf kembar (مَدَّ), (4) Lafif: memiliki 2 huruf illat (Lafif Mafruq: وَقَى, Lafif Maqrun: شَوَى), (5) Naqish: Lam fi'ilnya huruf illat (غَزَا، رَمَى), (6) Mahmuz: salah satu huruf aslinya hamzah (أَخَذَ، سَأَلَ، قَرَأَ), (7) Ajwaf: 'Ain fi'ilnya huruf illat (قَالَ، بَاعَ).",
        "explanation": "Klasifikasi 7 bina' ini merupakan fondasi terpenting dalam memahami tabiat perubahan wujud kata pada saat ditashrif.",
        "keyPoints": [
          "Tujuh Bina': Shohih, Mitsal, Mudha'af, Lafif, Naqish, Mahmuz, Ajwaf.",
          "Huruf 'Illat: Alif, Wawu, Ya (واي).",
          "Bina' Mu'tal terbagi menurut letak huruf illat: Fa (Mitsal), 'Ain (Ajwaf), Lam (Naqish)."
        ]
      },
      {
        "id": "amtsilah-muhimmah-ilal-idgham",
        "titleArabic": "مُهِمَّاتٌ وَقَوَاعِدُ الْإِعْلَالِ وَالْإِدْغَامِ",
        "titleIndo": "Bab 24: Kaidah Inti I'lal dan Hukum Idgham Amtsilah",
        "contentArabic": "أَهَمُّ قَوَاعِدِ التَّصْرِيفِ فِي الْأَمْثِلَةِ:\n١. إِعْلَالُ الْقَلْبِ: إِذَا تَحَرَّكَتِ الْوَاوُ أَوِ الْيَاءُ وَانْفَتَحَ مَا قَبْلَهُمَا قُلِبَتَا أَلِفًا نَحْوُ: (قَالَ) أَصْلُهُ (قَوَلَ)، وَ(بَاعَ) أَصْلُهُ (بَيَعَ).\n٢. إِعْلَالُ النَّقْلِ (التَّسْكِينُ): إِذَا كَانَتِ الْعَيْنُ حَرْفَ عِلَّةٍ مُتَحَرِّكًا وَقَبْلَهُ حَرْفٌ صَحِيحٌ سَاكِنٌ نُقِلَتْ حَرَكَتُهَا إِلَى السَّاكِنِ نَحْوُ: (يَقُولُ) أَصْلُهُ (يَقْوُلُ).\n٣. إِعْلَالُ الْحَذْفِ: يُحْذَفُ حَرْفُ الْعِلَّةِ لِالْتِقَاءِ السَّاكِنَيْنِ نَحْوُ: (قُلْنَ) وَ(لَمْ يَقُلْ)، وَتُحْذَفُ فَاءُ الْمِثَالِ فِي الْمُضَارِعِ نَحْوُ: (وَعَدَ - يَعِدُ).\n٤. أَحْكَامُ الْإِدْغَامِ فِي الْمُضَاعَفِ:\n- وَاجِبٌ: نَحْوُ (مَدَّ يَمُدُّ).\n- مُمْتَنِعٌ: إِذَا اتَّصَلَ بِهِ ضَمِيرُ رَفْعٍ مُتَحَرِّكٌ نَحْوُ (مَدَدْتُ، مَدَدْنَا).\n- جَائِزٌ: فِي جَزْمِ الْمُضَارِعِ وَأَمْرِهِ نَحْوُ (لَمْ يَمُدَّ / لَمْ يَمْدُدْ، وَمُدَّ / امْدُدْ).",
        "translation": "Kaidah pokok tashrif dalam Amtsilah: (1) I'lal Qalb (Penggantian): Apabila Wawu atau Ya berharakat dan huruf sebelumnya fathah, wajib diganti Alif (قَالَ asalnya قَوَلَ, dan بَاعَ asalnya بَيَعَ). (2) I'lal Naql (Pemindahan harakat): Memindahkan harakat huruf illat ke huruf shahih sukun sebelumnya (يَقُولُ asalnya يَقْوُلُ). (3) I'lal Hadzf (Pembuangan): Membuang huruf illat karena bertemunya dua sukun (قُلْتُ atau لَمْ يَقُلْ), atau pembuangan Wawu pada mitsal (وَعَدَ -> يَعِدُ). (4) Hukum Idgham pada Mudha'af: Wajib (مَدَّ), Terlarang/Mumtani' saat bersambung dhamir rafa' berharakat (مَدَدْتُ), dan Boleh/Jaiz saat jazm (لَمْ يَمُدَّ / لَمْ يَمْدُدْ).",
        "explanation": "Bab pamungkas ini merangkum seluruh prinsip adaptasi fonologis shorof yang menjadikan pelafalan bahasa Arab seimbang dan harmonis.",
        "keyPoints": [
          "Tiga Ragam I'lal: Qalb (ganti), Naql (pindah), Hadzf (buang).",
          "Wajib Idgham: مَدَّ (asalnya مَدَدَ).",
          "Fakkul Idgham Wajib: مَدَدْتُ (karena Dal kedua sukun bertemu Ta' fa'il).",
          "Jaiz Idgham: Pada fi'il mudhari' majzum (لَمْ يَمُدَّ / لَمْ يَمْدُدْ)."
        ]
      }
    ]
  }
];

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
