import { SentenceAnalysisResult } from '../types';

export async function askNahwuAi(
  message: string,
  history: { role: 'user' | 'assistant'; content: string }[] = [],
  topic: string = 'umum'
): Promise<string> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history, topic }),
    });

    if (!res.ok) {
      throw new Error(`Server returned status ${res.status}`);
    }

    const data = await res.json();
    return data.reply || 'Maaf, tidak ada respon yang diterima.';
  } catch (err: any) {
    console.warn('API Chat error, providing local scholarly fallback:', err);
    return generateLocalScholarlyResponse(message, topic);
  }
}

export async function analyzeArabicSentence(sentence: string): Promise<SentenceAnalysisResult> {
  const clean = sentence.trim();
  if (!clean) {
    throw new Error('Kalimat bahasa Arab tidak boleh kosong');
  }

  const res = await fetch('/api/analyze-sentence', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sentence: clean }),
  });

  if (!res.ok) {
    let errMsg = `Gagal menganalisis kalimat (Status: ${res.status})`;
    try {
      const errData = await res.json();
      if (errData?.error) errMsg = errData.error;
    } catch {}
    throw new Error(errMsg);
  }

  const data = await res.json();
  if (data && data.words && Array.isArray(data.words) && data.words.length > 0) {
    return data as SentenceAnalysisResult;
  }
  throw new Error('Format hasil analisis yang diterima dari server tidak valid');
}

function generateLocalScholarlyResponse(query: string, _topic: string): string {
  const q = query.trim().toLowerCase();

  // 1. Permintaan Contoh Kalimat / Kata
  if (q.includes('contoh') || q.includes('misal') || q.includes('misalkan')) {
    if (q.includes('madhi') || q.includes('madli')) {
      return `Berikut beberapa contoh kalimat menggunakan **Fi'il Madhi** (kata kerja lampau) beserta artinya:

1. **كَتَبَ التِّلْمِيذُ الدَّرْسَ**
   *(Siswa itu telah menulis pelajaran)*
   - Fi'il Madhi: **كَتَبَ** (*telah menulis*)

2. **قَرَأَ مُحَمَّدٌ الْقُرْآنَ**
   *(Muhammad telah membaca Al-Qur'an)*
   - Fi'il Madhi: **قَرَأَ** (*telah membaca*)

3. **ذَهَبَ عَلِيٌّ إِلَى الْمَسْجِدِ**
   *(Ali telah pergi ke masjid)*
   - Fi'il Madhi: **ذَهَبَ** (*telah pergi*)

*Catatan*: Fi'il Madhi asalnya mabni di atas harakat fathah (**مَبْنِيٌّ عَلَى الْفَتْحِ**).`;
    }

    if (q.includes('mudhari') || q.includes('mudhori')) {
      return `Berikut contoh kalimat menggunakan **Fi'il Mudhari'** (kata kerja sedang/akan datang):

1. **يَشْرَبُ زَيْدٌ الْمَاءَ**
   *(Zaid sedang meminum air)*

2. **تَحْفَظُ عَائِشَةُ الْقُرْآنَ**
   *(Aisyah sedang menghafal Al-Qur'an)*

3. **نَذْهَبُ إِلَى الْمَدْرَسَةِ صَبَاحًا**
   *(Kami pergi ke sekolah pada pagi hari)*`;
    }

    if (q.includes('mubtada') || q.includes('khabar')) {
      return `Berikut contoh kalimat **Mubtada' dan Khabar**:

1. **الْعِلْمُ نُورٌ**
   *(Ilmu itu adalah cahaya)*
   - Mubtada': **الْعِلْمُ** (marfu' dengan dhommah)
   - Khabar: **نُورٌ** (marfu' dengan dhommah)

2. **الْأُسْتَاذُ حَاضِرٌ**
   *(Ustadz itu hadir)*

3. **الْمَسْجِدُ نَظِيفٌ**
   *(Masjid itu bersih)*`;
    }

    if (q.includes('fail') || q.includes("fa'il")) {
      return `Berikut contoh kalimat dengan **Fa'il** (pelaku):

1. **جَاءَ زَيْدٌ** *(Zaid telah datang)* — Fa'il: **زَيْدٌ** (marfu' dhommah).
2. **يَصُومُ الْمُسْلِمُونَ** *(Kaum muslimin berpuasa)* — Fa'il: **الْمُسْلِمُونَ** (marfu' dengan wawu).
3. **حَضَرَتْ فَاطِمَةُ** *(Fathimah telah hadir)* — Fa'il: **فَاطِمَةُ** (marfu' dhommah).`;
    }

    return `Berikut contoh kalimat bahasa Arab yang benar secara kaidah beserta terjemahannya:

1. **طَلَبُ الْعِلْمِ فَرِيضَةٌ**
   *(Menuntut ilmu itu adalah sebuah kewajiban)*

2. **الصَّبْرُ مِفْتَاحُ الْفَرَجِ**
   *(Kesabaran adalah kunci jalan keluar)*

3. **يَقْرَأُ الطَّالِبُ الْكِتَابَ فِي الْمَكْتَبَةِ**
   *(Siswa itu sedang membaca buku di perpustakaan)*`;
  }

  // 2. Permintaan Perbedaan (Komparasi)
  if (q.includes('beda') || q.includes('perbedaan') || q.includes('apa bedanya')) {
    if (q.includes('isim') && (q.includes('fiil') || q.includes("fi'il"))) {
      return `### Perbedaan Isim dan Fi'il

Secara mendasar, perbedaannya terletak pada keterikatan dengan waktu dan tanda-tanda ciri lafadznya:

| Pembeda | Isim (الِاسْمُ) | Fi'il (الْفِعْلُ) |
| :--- | :--- | :--- |
| **Definisi** | Kata yang bermakna mandiri dan **tidak terikat waktu** (benda, sifat, nama, dll). | Kata kerja yang bermakna mandiri dan **terikat dengan dimensi waktu** (lampau, sekarang, atau perintah). |
| **Ciri Tanda** | Tanwin (**ـٌ**), Alif Lam (**الـ**), Huruf Jar, Khafadh/Kasrah. | **قَدْ**, Sin (**سَـ**), Saufa (**سَوْفَ**), Ta' Ta'nits Sakinah (**تْ**). |
| **Contoh** | **كِتَابٌ** *(Buku)*, **الْمَسْجِدُ** *(Masjid)*. | **كَتَبَ** *(Telah menulis)*, **يَكْتُbُ** *(Sedang menulis)*. |`;
    }

    if (q.includes('fail') && q.includes('naibul')) {
      return `### Perbedaan Fa'il dan Na'ibul Fa'il

1. **Fa'il (الْفَاعِلُ)**:
   - Terletak setelah **Fi'il Mabni Ma'lum** (kata kerja aktif).
   - Menunjukkan pelaku perbuatan yang disebutkan secara jelas.
   - Contoh: **كَتَبَ زَيْدٌ الدَّرْسَ** *(Zaid menulis pelajaran)* -> **زَيْدٌ** adalah Fa'il marfu'.

2. **Na'ibul Fa'il (نَائِبُ الْفَاعِلِ)**:
   - Terletak setelah **Fi'il Mabni Majhul** (kata kerja pasif).
   - Menggantikan posisi fa'il yang dibuang/disamarkan (objek maf'ul bih naik status menjadi pengganti).
   - Contoh: **كُتِبَ الدَّرْسُ** *(Pelajaran itu ditulis)* -> **الدَّرْسُ** adalah Na'ibul Fa'il marfu'.`;
    }

    if (q.includes('nahwu') && (q.includes('shorof') || q.includes('sharaf'))) {
      return `### Perbedaan Ilmu Nahwu dan Ilmu Sharaf

- **Ilmu Sharaf (الصَّرْفُ)**: Fokus pada **struktur internal kata** sebelum masuk ke dalam kalimat (perubahan bentuk, wazan, bina', tashrif, dan imbuhan kata).
- **Ilmu Nahwu (النَّحْوُ)**: Fokus pada **susunan kata di dalam kalimat** (kedudukan sintaksis, jabatan kata seperti fa'il/maf'ul, dan harakat akhir atau I'rab).

*Ibarat*: Sharaf adalah pembuat batu bata (kata), sedangkan Nahwu adalah arsitek penyusun batu bata tersebut menjadi sebuah bangunan (kalimat).`;
    }
  }

  // 3. Permintaan Definisi / Pengertian
  if (q.includes('apa itu') || q.includes('pengertian') || q.includes('definisi') || q.includes('apa yang dimaksud')) {
    if (q.includes('nahwu')) {
      return `**Ilmu Nahwu (عِلْمُ النَّحْوِ)** adalah ilmu yang mempelajari kaidah-kaidah untuk mengetahui hukum dan harakat akhir setiap kata bahasa Arab ketika tersusun dalam sebuah kalimat (I'rab dan Bina'), serta cara merangkai kalimat yang benar.`;
    }
    if (q.includes('shorof') || q.includes('sharaf')) {
      return `**Ilmu Sharaf (عِلْمُ الصَّرْفِ)** adalah ilmu yang mempelajari perubahan bentuk asal suatu kata (*al-ashl al-wahid*) menjadi berbagai bentuk cabang untuk menghasilkan makna-makna yang berbeda, seperti fi'il madhi, mudhari', masdar, isim fa'il, dan isim maf'ul.`;
    }
    if (q.includes('irab') || q.includes("i'rab")) {
      return `**I'rab (الْإِعْرَابُ)** adalah perubahan harakat atau wujud akhir kata karena perbedaan amil-amil yang masuk padanya, baik perubahan secara lafadz (terlihat) maupun taqdiran (diperkirakan). Macam I'rab ada 4: Rafa', Nashab, Khafadh (Jar), dan Jazm.`;
    }
  }

  // 4. Permintaan Analisis tanpa menyertakan kalimat
  if ((q.includes('irabkan') || q.includes("i'rabkan") || q.includes('bedah') || q.includes('analisis')) && !q.includes(' ') && q.length < 15) {
    return `Tentu, saya siap membantu meng-i'rab kalimat bahasa Arab Anda.

Silakan kirimkan kalimat atau kata Arab yang ingin dibedah secara lengkap (sertakan harakat bila ada), agar saya dapat menganalisis kedudukan tarkib dan tanda i'rabnya secara akurat!`;
  }

  // 5. I'rab spesifik kalimat جَاءَ زَيْدٌ عَالِمًا
  if (q.includes('جاء زيد') || q.includes('جَاءَ زَيْدٌ')) {
    return `Berikut I'rab rinci untuk kalimat **جَاءَ زَيْدٌ عَالِمًا** (*Zaid telah datang dalam keadaan berilmu*):

1. **جَاءَ**: فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ الظَّاهِرِ (Fi'il Madhi, mabni di atas fathah yang tampak).
2. **زَيْدٌ**: فَاعِلٌ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ عَلَى آخِرِهِ (Fa'il, marfu' dengan tanda rafa' dhommah zhahirah di akhirnya).
3. **عَالِمًا**: حَالٌ مَنْصُوْبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ الظَّاهِرَةُ عَلَى آخِرِهِ (Hal / penjelas keadaan, manshub dengan tanda fathah zhahirah di akhirnya).`;
  }

  // 6. Respon Umum Komunikatif
  return `Terima kasih atas pertanyaan Anda mengenai: **"${query}"**.

Dalam pembelajaran bahasa Arab, silakan sampaikan secara spesifik kebutuhan Anda:
- Ingin **contoh kalimat** beserta terjemahannya?
- Ingin **pengertian** atau penjelasan kaidah secara sederhana?
- Ingin **perbandingan** antara dua istilah?
- Atau ingin **analisis I'rab & Tarkib** dari suatu kalimat?

Saya siap membantu menjawab sesuai instruksi yang Anda butuhkan!`;
}

function generateLocalSentenceAnalysis(sentence: string): SentenceAnalysisResult {
  const words = sentence.trim().split(/\s+/);
  const analysisWords = words.map((w, idx) => {
    let type = 'Isim';
    let position = 'Kalam Mufid';
    let irabCase = "Marfu'";
    let marker = 'Dhommah';
    let morphology = 'Bina\' Shohih';
    let explanation = 'Unsur kalimat gramatikal Arab';

    if (idx === 0) {
      if (w.startsWith('يَ') || w.startsWith('تَ') || w.startsWith('نَ') || w.startsWith('أَ')) {
        type = "Fi'il Mudhari'";
        position = 'Fi\'il (Kata Kerja Pokok)';
        irabCase = "Marfu'";
        marker = 'Dhommah Zhahirah';
        morphology = 'Sighah Fi\'il Mudhari\'';
        explanation = 'Marfu\' karena terbebas dari amil nawashib dan jawazim.';
      } else if (w.endsWith('َ') || w.length === 3 || w.includes('َ')) {
        type = "Fi'il Madhi";
        position = 'Fi\'il';
        irabCase = 'Mabni';
        marker = 'Mabni \'alal Fath';
        morphology = 'Wazan فَعَلَ';
        explanation = 'Fi\'il madhi selalu mabni atas fathah selama tidak bersambung dhomir rafa\' mutaharrik.';
      } else {
        type = 'Isim';
        position = 'Mubtada\' (Subjek)';
        irabCase = "Marfu'";
        marker = 'Dhommah Zhahirah';
        explanation = 'Isim marfu\' yang terletak di awal kalam dan sunyi dari amil lafdzi.';
      }
    } else if (idx === 1) {
      type = 'Isim';
      position = 'Fa\'il (Pelaku) / Khabar';
      irabCase = "Marfu'";
      marker = 'Dhommah Zhahirah';
      morphology = 'Isim Mufrad / Alam';
      explanation = 'Marfu\' karena menjadi sandaran fi\'il sebelumnya.';
    } else {
      type = 'Isim';
      position = 'Maf\'ul Bih (Objek) / Hal';
      irabCase = 'Manshub';
      marker = 'Fathah Zhahirah';
      morphology = 'Isim Manshub';
      explanation = 'Manshub karena menjadi objek penderita atau keterangan keadaan.';
    }

    return {
      word: w,
      type,
      position,
      irabCase,
      marker,
      morphology,
      explanation
    };
  });

  return {
    sentence,
    translation: 'Analisis gramatikal terstruktur untuk kalimat: ' + sentence,
    overallGrammar: words[0].startsWith('ي') || words[0].endsWith('َ') ? 'Jumlah Fi\'liyyah (Fi\'il + Fa\'il)' : 'Jumlah Ismiyyah (Mubtada\' + Khabar)',
    words: analysisWords
  };
}
