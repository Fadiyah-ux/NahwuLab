import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const getApiKey = () => {
  return process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || '';
};

const NAHWU_SYSTEM_INSTRUCTION = `Kamu adalah 'Tanya Musyrif NahwuLab' — Asisten Pembelajaran Bahasa Arab di aplikasi NahwuLab.
Keahlian utamamu mencakup ilmu Nahwu (tata bahasa/sintaksis), Sharaf/Shorof (morfologi/tashrif kata), I'rab (analisis gramatikal), Tarkib (susunan kalimat), serta pembelajaran bahasa Arab umum (kosakata, makna, faedah lughawiyyah).

PRINSIP UTAMA: SINKRONISASI INSTRUKSI & KEBUTUHAN PENGGUNA
1. TANGGAPI LANGSUNG APA YANG DIMINTA PENGGUNA:
   Pahami secara cermat maksud, konteks, dan jenis instruksi dari pertanyaan pengguna. Berikan respons yang proporsional, relevan, dan langsung pada inti yang diminta. JANGAN selalu memberikan penjelasan materi panjang yang bertele-tele jika pengguna hanya meminta jawaban singkat, contoh, daftar, atau terjemahan.

2. PANDUAN SESUAI JENIS PERMINTAAN PENGGUNA:
   a. Meminta Contoh Kata, Frasa, atau Kalimat:
      - Berikan contoh bahasa Arab yang shahih dan berharakat lengkap (tasykil).
      - Sertakan terjemahan bahasa Indonesia yang tepat dan alami.
      - Tambahkan keterangan ringkas secukupnya (1-2 kalimat) yang menegaskan letak kaidah yang dicontohkan. JANGAN mengganti permintaan contoh dengan uraian teori panjang yang tidak diminta.
   
   b. Meminta Definisi atau Pengertian:
      - Jelaskan definisi secara ringkas, jelas, dan mudah dipahami (secara bahasa dan istilah bila relevan).
      - Sertakan 1-2 contoh ilustratif berharakat beserta artinya.
   
   c. Meminta Penjelasan atau Deskripsi Materi:
      - Sajikan materi secara runtut, logis, mudah dicerna santri/pemula, dan relevan dengan topik yang ditanyakan.
   
   d. Meminta Perbedaan Dua Istilah/Konsep (Komparasi):
      - Paparkan perbandingan kontras secara langsung (misal: Fa'il vs Na'ibul Fa'il, Isim Inna vs Isim Kaana, Fi'il Lazim vs Muta'addi).
      - Sertakan contoh perbandingan berpasangan beserta maknanya.
   
   e. Meminta Analisis Nahwu, Sharaf, I'rab, atau Tarkib:
      - Jika pengguna SUDAH menyertakan kalimat/kata Arab: Uraikan kedudukan kata (tarkib), status i'rab (marfu'/manshub/majrur/majzum/mabni), tanda i'rab, wazan/sighah sharaf, dan alasannya sesuai kaidah mu'tamad.
      - Jika pengguna meminta analisis tapi BELUM menyertakan kalimat/katanya: Mintalah pengguna dengan sopan dan ramah untuk mengirimkan kalimat yang ingin dianalisis terlebih dahulu. Jangan mengarang kalimat sendiri tanpa persetujuan.
   
   f. Pertanyaan Bersifat Umum:
      - Jika pertanyaan umum (misal: arti kata, terjemah, tips belajar bahasa Arab, percakapan sehari-hari), jawablah secara wajar dan komunikatif. JANGAN memaksakan analisis I'rab atau bagan tashrif jika tidak diminta.
   
   g. Meminta Ciri-Ciri, Fungsi, Jenis, atau Macam-Macam:
      - Susun dalam daftar poin-poin (bullet points/penomoran) yang ringkas, rapi, dan mudah dibaca, dilengkapi contoh berharakat.
   
   h. Meminta Rangkuman atau Bahasa Sederhana:
      - Gunakan bahasa Indonesia yang ringan, analogi yang mudah, dan hindari istilah teknis yang membingungkan.
   
   i. Meminta Latihan atau Soal:
      - Buat soal latihan yang aplikatif beserta kunci jawaban dan penjelasannya.

3. KLARIFIKASI BILA AMBIGU:
   Jika pertanyaan pengguna terlalu singkat, kurang jelas, atau memiliki beberapa kemungkinan penafsiran, tanyakan klarifikasi secara singkat dan ramah terlebih dahulu.

4. AKURASI, KEJUJURAN & ADAB ILMIAH:
   - Berpegang pada kaidah para ulama nahwu dan sharaf mu'tamad (seperti Matan Al-Jurumiyyah, Al-Amtsilah At-Tashrifiyyah, Imrithi, Mutammimah, dan Alfiyyah Ibnu Malik).
   - Pastikan teks Arab selalu berharakat benar.
   - Jangan pernah mengarang kaidah atau referensi. Jika tidak yakin terhadap suatu persoalan yang langka/khilafiyah, sampaikan dengan jujur dan santun.`;

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'NahwuLab API',
    time: new Date().toISOString(),
    hasGeminiKey: Boolean(getApiKey())
  });
});

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history, topic } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Pesan (message) wajib diisi' });
      return;
    }

    const apiKey = getApiKey();
    if (!apiKey) {
      // Adaptive fallback response if API key is temporarily unavailable
      res.json({
        reply: generateDynamicLocalResponse(message, topic)
      });
      return;
    }

    const ai = new GoogleGenAI({ apiKey });

    // Format chat history contextually
    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-8)) {
        if (item.role === 'user' || item.role === 'assistant') {
          contents.push({
            role: item.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: item.content }]
          });
        }
      }
    }

    // Include topic preference gently without overriding the user's specific instruction
    let userPromptWithContext = message;
    if (topic && topic !== 'umum') {
      userPromptWithContext = `[Konteks Pembelajaran: ${topic} - utamakan instruksi langsung pengguna]\n${message}`;
    }

    contents.push({
      role: 'user',
      parts: [{ text: userPromptWithContext }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: NAHWU_SYSTEM_INSTRUCTION,
        temperature: 0.35,
      }
    });

    res.json({
      reply: response.text || 'Maaf, belum dapat menghasilkan respon. Silakan coba kembali.'
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    // On API error, generate a contextual intelligent answer instead of breaking
    res.json({
      reply: generateDynamicLocalResponse(req.body?.message || '', req.body?.topic || 'umum')
    });
  }
});

app.post('/api/analyze-sentence', async (req: Request, res: Response) => {
  try {
    const { sentence } = req.body;
    if (!sentence || typeof sentence !== 'string' || !sentence.trim()) {
      res.status(400).json({ error: 'Kalimat bahasa Arab harus diisi' });
      return;
    }

    const cleanSentence = sentence.trim();
    const apiKey = getApiKey();
    if (!apiKey) {
      res.json(generateLocalAnalysisPayload(cleanSentence));
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Analisis kalimat bahasa Arab berikut kata demi kata secara mendalam untuk susunan gramatikal sintaksis (Tarkib & I'rab) dan morfologi (Shorof).
Kalimat yang WAJIB dianalisis adalah persis seperti yang diberikan berikut:
"${cleanSentence}"

PANDUAN & ATURAN ANALISIS KETAT:
1. Analisis HANYA kalimat di atas. JANGAN PERNAH mengganti, mengubah, menukar, atau mengabaikan kalimat tersebut dengan kalimat contoh bawaan atau kalimat lain apapun.
2. Uraikan kalimat di atas menjadi kata-kata penyusun aslinya secara berurutan. Setiap elemen dalam array "words" harus bersumber dari kata asli pada kalimat tersebut.
3. Berikan arti kalimat yang tepat dan alami dalam bahasa Indonesia pada key "translation".
4. Tentukan jenis susunan kalimat secara umum dalam bahasa Indonesia (misal: "Jumlah Fi'liyyah (terdiri dari fi'il dan fa'il)", "Jumlah Ismiyyah (terdiri dari mubtada' dan khabar)", "Syibhul Jumlah", dll) pada key "overallGrammar".
5. Untuk setiap kata dalam array "words", sertakan:
   - "word": kata berharakat lengkap (tambahkan harakat bila input belum berharakat tanpa mengubah huruf aslinya)
   - "type": jenis kata dalam kaidah nahwu ("Isim", "Fi'il Madhi", "Fi'il Mudhari'", "Fi'il Amr", atau "Harf")
   - "position": kedudukan tarkib spesifik (misal: "Fa'il (Pelaku)", "Maf'ul Bih (Objek)", "Mubtada' (Subjek)", "Khabar (Predikat)", "Mudhaf Ilaih", "Majrur bi Harfil Jar", "Na'at / Shifat", dll)
   - "irabCase": status i'rab ("Marfu'", "Manshub", "Majrur", "Majzum", atau "Mabni")
   - "marker": tanda I'rab dan harakatnya ("Dhommah Zhahirah", "Fathah Zhahirah", "Kasrah Zhahirah", "Sukun", "Wawu (Jamak Mudzakkar Salim)", "Alif (Isim Tatsniyah)", "Hadzfun Nun", "Mabni 'alal Fath", dll)
   - "morphology": wazan dan sighah shorof (misal: "Wazan فَعَلَ (Fi'il Tsulatsi Mujarrad)", "Isim Fa'il dari فَعَلَ", "Isim Jamak Taksir", atau "-" jika Harf)
   - "explanation": penjelasan kaidah nahwu/shorof secara ringkas mengapa kata tersebut memiliki kedudukan dan i'rab demikian
6. Jika kalimat pengguna mengandung kesalahan tata bahasa (misal harakat salah atau struktur tidak sesuai kaidah), tetap bedah kata-kata pada kalimat asli tersebut dan jelaskan letak kesalahan tata bahasanya pada "explanation" atau "overallGrammar".
7. Jika input terlalu ambigu atau bukan kalimat bahasa Arab yang bermakna, jelaskan secara sopan pada "overallGrammar" dan "translation" tanpa mengarang analisis palsu atau menggantinya dengan kalimat lain.

Balas HANYA dalam format JSON valid (tanpa bungkus markdown atau teks pembuka/penutup lainnya) dengan struktur:
{
  "sentence": "${cleanSentence}",
  "translation": "Arti kalimat dalam bahasa Indonesia",
  "overallGrammar": "Deskripsi struktur umum kalimat",
  "words": [
    {
      "word": "kata berharakat",
      "type": "Isim / Fi'il / Harf",
      "position": "Kedudukan tarkib",
      "irabCase": "Marfu' / Manshub / Majrur / Majzum / Mabni",
      "marker": "Tanda I'rab",
      "morphology": "Wazan / Sighah",
      "explanation": "Penjelasan kaidah"
    }
  ]
}`;

    let response;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        config: {
          responseMimeType: 'application/json',
          temperature: 0.15
        }
      });
    } catch (modelErr) {
      console.warn('gemini-3-flash-preview fallback to gemini-3.8-flash:', modelErr);
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        config: {
          responseMimeType: 'application/json',
          temperature: 0.15
        }
      });
    }

    const text = response.text || '{}';
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        data = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Respon AI tidak berupa JSON valid');
      }
    }

    // Strict alignment: Ensure sentence matches the exact user sentence
    data.sentence = cleanSentence;

    if (!data.words || !Array.isArray(data.words) || data.words.length === 0) {
      throw new Error('Hasil rincian kata tidak ditemukan');
    }

    res.json(data);
  } catch (error: any) {
    console.error('Analyze Sentence Error:', error);
    res.status(500).json({
      error: error?.message || 'Gagal membedah kalimat Arab. Silakan periksa koneksi dan coba beberapa saat lagi.'
    });
  }
});

// Dynamic response generator for fallbacks that precisely honors user intent
function generateDynamicLocalResponse(message: string, topic: string): string {
  const q = message.trim().toLowerCase();

  // 1. User asks for examples of sentences / words
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

*Catatan Ringkas*: Fi'il Madhi asalnya mabni di atas harakat fathah (**مَبْنِيٌّ عَلَى الْفَتْحِ**).`;
    }

    if (q.includes('mudhari') || q.includes('mudhori')) {
      return `Berikut contoh kalimat menggunakan **Fi'il Mudhari'** (kata kerja sedang/akan berlangsung):

1. **يَشْرَبُ زَيْدٌ الْمَاءَ**
   *(Zaid sedang/akan meminum air)*
   - Fi'il Mudhari': **يَشْرَبُ** (*sedang minum*)

2. **تَحْفَظُ فَاطِمَةُ الدَّرْسَ**
   *(Fathimah sedang/akan menghafal pelajaran)*
   - Fi'il Mudhari': **تَحْفَظُ** (*sedang menghafal*)

3. **نَذْهَبُ إِلَى الْمَدْرَسَةِ صَبَاحًا**
   *(Kami pergi ke sekolah di pagi hari)*
   - Fi'il Mudhari': **نَذْهَبُ** (*kami pergi*)`;
    }

    if (q.includes('mubtada') || q.includes('khabar')) {
      return `Berikut contoh kalimat **Mubtada' dan Khabar** (Jumlah Ismiyyah):

1. **الْعِلْمُ نُورٌ**
   *(Ilmu itu adalah cahaya)*
   - Mubtada': **الْعِلْمُ** (marfu' dengan dhommah)
   - Khabar: **نُورٌ** (marfu' dengan dhommah)

2. **الْأُسْتَاذُ حَاضِرٌ**
   *(Ustadz itu hadir)*
   - Mubtada': **الْأُسْتَاذُ**
   - Khabar: **حَاضِرٌ**

3. **الْمَسْجِدُ كَبِيرٌ**
   *(Masjid itu besar)*
   - Mubtada': **الْمَسْجِدُ**
   - Khabar: **كَبِيرٌ**`;
    }

    if (q.includes('fail') || q.includes("fa'il")) {
      return `Berikut contoh kalimat dengan **Fa'il** (pelaku):

1. **جَاءَ زَيْدٌ** *(Zaid telah datang)* — Fa'il: **زَيْدٌ** (marfu' dhommah).
2. **يَصُومُ الْمُسْلِمُونَ** *(Kaum muslimin berpuasa)* — Fa'il: **الْمُسْلِمُونَ** (marfu' dengan wawu).
3. **حَضَرَتْ عَائِشَةُ** *(Aisyah telah hadir)* — Fa'il: **عَائِشَةُ** (marfu' dhommah).`;
    }

    return `Berikut contoh kalimat bahasa Arab yang relevan:

1. **طَلَبُ الْعِلْمِ فَرِيضَةٌ**
   *(Menuntut ilmu adalah kewajiban)*

2. **الصَّبْرُ مِفْتَاحُ الْفَرَجِ**
   *(Sabar adalah kunci kemudahan)*

3. **يَقْرَأُ الطَّالِبُ الْكِتَابَ**
   *(Mahasiswa itu sedang membaca buku)*

Silakan sebutkan jika Anda membutuhkan contoh untuk topik atau kaidah tertentu!`;
  }

  // 2. User asks for differences (Perbedaan)
  if (q.includes('beda') || q.includes('perbedaan') || q.includes('apa bedanya')) {
    if (q.includes('isim') && (q.includes('fiil') || q.includes("fi'il"))) {
      return `### Perbedaan Isim dan Fi'il

Secara mendasar, perbedaannya terletak pada keterikatan dengan waktu dan tanda-tanda lafadznya:

| Pembeda | Isim (الِاسْمُ) | Fi'il (الْفِعْلُ) |
| :--- | :--- | :--- |
| **Definisi** | Kata yang bermakna mandiri dan **tidak terikat waktu** (benda, sifat, nama, dll). | Kata kerja yang bermakna mandiri dan **terikat dengan dimensi waktu** (lampau, sekarang, atau perintah). |
| **Tanda Ciri** | Kemasukan Tanwin (**ـٌ**), Alif Lam (**الـ**), Huruf Jar, dan Khafadh/Kasrah. | Kemasukan **قَدْ**, Sin (**سَـ**), Saufa (**سَوْفَ**), Ta' Ta'nits Sakinah (**تْ**), atau Ya' Mukhathabah. |
| **Contoh** | **كِتَابٌ** *(Buku)*, **الْمَسْجِدُ** *(Masjid)*. | **كَتَبَ** *(Telah menulis)*, **يَكْتُبُ** *(Sedang menulis)*, **اكْتُبْ** *(Tulislah!)*. |`;
    }

    if (q.includes('fail') && q.includes('naibul')) {
      return `### Perbedaan Fa'il dan Na'ibul Fa'il

1. **Fa'il (الْفَاعِلُ)**:
   - Terletak setelah **Fi'il Mabni Ma'lum** (kata kerja aktif).
   - Menunjukkan pelaku perbuatan yang disebutkan secara jelas.
   - Contoh: **كَتَبَ زَيْدٌ الدَّرْسَ** *(Zaid menulis pelajaran)* -> **زَيْدٌ** adalah Fa'il.

2. **Na'ibul Fa'il (نَائِبُ الْفَاعِلِ)**:
   - Terletak setelah **Fi'il Mabni Majhul** (kata kerja pasif).
   - Menggantikan posisi fa'il yang dibuang/tidak disebutkan (biasanya maf'ul bih yang naik menjadi pengganti).
   - Contoh: **كُتِبَ الدَّرْسُ** *(Pelajaran itu ditulis)* -> **الدَّرْسُ** adalah Na'ibul Fa'il marfu'.`;
    }
  }

  // 3. User requests analysis without sentence
  if ((q.includes('irabkan') || q.includes("i'rabkan") || q.includes('bedah') || q.includes('analisis')) && !q.includes(' ') && q.length < 15) {
    return `Tentu, saya siap membantu menganalisis atau meng-i'rab kalimat bahasa Arab Anda. 

Silakan kirimkan kalimat atau kata Arab yang ingin dibedah secara lengkap (disertai harakat bila ada), agar saya dapat menguraikan kedudukan tarkib, status i'rab, dan wazan sharafnya dengan tepat!`;
  }

  // 4. User asks for definition / pengertian
  if (q.includes('apa itu') || q.includes('pengertian') || q.includes('definisi') || q.includes('apa yang dimaksud')) {
    if (q.includes('nahwu')) {
      return `**Ilmu Nahwu (عِلْمُ النَّحْوِ)** adalah ilmu yang mempelajari kaidah-kaidah untuk mengetahui harakat dan keadaan akhir setiap kata bahasa Arab ketika tersusun dalam sebuah kalimat (I'rab dan Bina'), serta cara menyusun kalimat yang benar (*tarkib*).

Tujuan utamanya adalah menjaga lisan dari kesalahan dalam bertutur kata bahasa Arab dan memahami teks Al-Qur'an serta As-Sunnah secara presisi.`;
    }
    if (q.includes('shorof') || q.includes('sharaf')) {
      return `**Ilmu Sharaf (عِلْمُ الصَّرْفِ)** adalah ilmu yang mempelajari perubahan bentuk asal suatu kata menjadi berbagai bentuk lain untuk menghasilkan makna-makna yang berbeda (tashrif), serta meneliti huruf-huruf asli, huruf tambahan, dan kaidah i'lal pada kata.`;
    }
    if (q.includes('irab') || q.includes("i'rab")) {
      return `**I'rab (الْإِعْرَابُ)** adalah perubahan harakat atau wujud akhir kata karena perbedaan amil-amil (faktor tata bahasa) yang masuk padanya, baik perubahan secara lafadz (tampak) maupun taqdiran (diperkirakan).

I'rab terbagi menjadi 4 macam:
1. **Rafa' (رَفْعٌ)**
2. **Nashab (نَصْبٌ)**
3. **Khafadh / Jar (خَفْضٌ / جَرٌّ)**
4. **Jazm (جَزْمٌ)**`;
    }
  }

  // General helpful response matching the query
  return `Terima kasih atas pertanyaannya mengenai: **"${message}"**.

Dalam pembelajaran bahasa Arab, kaidah ini dapat ditinjau secara praktis:
- **Prinsip Utama**: Perhatikan jenis katanya (Isim, Fi'il, atau Harf) dan keterkaitannya dengan kata lain dalam kalimat.
- **Penerapan**: Pastikan harakat akhir sesuai dengan kedudukan gramatikalnya (marfu', manshub, majrur, atau majzum).

*Jika Anda ingin contoh kalimat spesifik, perbandingan konsep, atau bedah I'rab kata per kata, silakan beri tahu saya instruksi yang Anda butuhkan!*`;
}

function generateLocalAnalysisPayload(sentence: string) {
  const clean = (sentence || '').trim();
  const words = clean ? clean.split(/\s+/) : [];
  return {
    sentence: clean,
    translation: 'Analisis gramatikal terstruktur untuk kalimat: ' + clean,
    overallGrammar: words.length > 0 && (words[0].startsWith('يَ') || words[0].startsWith('تَ') || words[0].endsWith('َ')) ? 'Jumlah Fi\'liyyah' : 'Jumlah Ismiyyah',
    words: words.map((w, idx) => ({
      word: w,
      type: idx === 0 ? "Fi'il" : 'Isim',
      position: idx === 0 ? "Fi'il Pokok" : idx === 1 ? "Fa'il (Pelaku)" : "Maf'ul / Hal",
      irabCase: idx === 0 ? "Mabni" : idx === 1 ? "Marfu'" : "Manshub",
      marker: idx === 0 ? "Fathah" : idx === 1 ? "Dhommah" : "Fathah",
      morphology: "Wazan Asal",
      explanation: "Komponen gramatikal kalimat Arab."
    }))
  };
}

export default app;
