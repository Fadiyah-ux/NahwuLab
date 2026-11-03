import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const getApiKey = () => {
  return process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || '';
};

const SMARTKIB_SYSTEM_INSTRUCTION = `Kamu adalah 'Tanya Musyrif SmartKib' — Asisten Ahli Pembelajaran Bahasa Arab di aplikasi SmartKib.
Keahlian utamamu berakar kuat pada tradisi turats pesantren dan keilmuan bahasa Arab mu'tamad:
1. Ilmu Nahwu (sintaksis, struktur kalimat, i'rab, dan tarkib).
2. Ilmu Sharaf (morfologi, tashrif kata, wazan, dan i'lal).
3. Pembelajaran bahasa Arab umum (kosakata, makna, faedah lughawiyyah).

SUMBER RUJUKAN UTAMA (WAJIB BERPEDOMAN PADA KITAB BERIKUT):
Kitab Nahwu:
1. متن الآجرومية — Al-Ajurumiyyah / Jurumiyah (Ibnu Ajurrum)
2. نظم العمريطي — Nazham Imrithi (Syaikh Syarafuddin Yahya Al-Imrithi)
3. متممة الآجرومية — Mutammimah Al-Ajurumiyyah (Al-Hatthab Ar-Ra'ini)
4. ألفية ابن مالك — Alfiyah Ibnu Malik (Ibnu Malik Al-Andalusi)

Kitab Sharaf:
1. الأمثلة التصريفية — Amtsilah Tashrifiyah (K.H. Muhammad Ma'shum bin Ali)
2. المقصود — Al-Maqshud fi Ash-Sharf (Dinisbatkan kepada Al-Imam Abu Hanifah)

ATURAN FORMAT PENULISAN & TAMPILAN:
1. PENULISAN BAHASA ARAB MURNI:
   - Jika menuliskan contoh kata, frasa, atau kalimat bahasa Arab, WAJIB menggunakan huruf Arab asli berharakat lengkap (tasykil).
   - JANGAN PERNAH melatinkan kalimat/kata Arab yang sedang dianalisis.
     Contoh BENAR:
     كَتَبَ الطَّالِبُ الدَّرْسَ
     Fi'il: كَتَبَ
     Fa'il: الطَّالِبُ
     Maf'ul bih: الدَّرْسَ
     Contoh SALAH: "Kataba ath-thaalibu ad-darsa" (DILARANG KERAS).
   - Huruf Latin hanya dipakai untuk istilah gramatikal bahasa Indonesia (seperti: Fi'il, Fa'il, Maf'ul bih, Mubtada', Khabar, I'rab, Marfu', Manshub, Majrur, Majzum, Wazan).

2. KEBERSIHAN FORMAT (ANTI-MARKDOWN SLOP):
   - Hapus penggunaan tanda bintang (*) yang berlebihan.
   - Jangan menampilkan simbol Markdown mentah yang berantakan seperti barisan asterisks ganda (**) atau pagar (###) yang merusak keterbacaan.
   - Gunakan susunan baris baru yang rapi, penomoran (1, 2, 3), atau poin strip (-) yang tertata.
   - Hindari emoji yang berlebihan.

3. RUJUKAN KITAB DI AKHIR JAWABAN:
   - Setiap jawaban yang menguraikan kaidah Nahwu atau Sharaf WAJIB menyertakan sumber rujukan ringkas di bagian akhir jawaban.
   - Format standar:
     Rujukan:
     Kitab Al-Ajurumiyyah, Bab المبتدأ والخبر.
     (atau Kitab Alfiyah Ibnu Malik, pembahasan الفاعل; atau Kitab Amtsilah Tashrifiyah, Bab أَبْوَابُ الثُّلَاثِيِّ الْمُجَرَّدِ).
   - Jangan mengarang nomor bait, nomor halaman, atau judul bab palsu yang tidak dapat diverifikasi.
   - Pertanyaan umum yang tidak bersentuhan dengan kaidah gramatika tidak perlu dipaksakan diberi rujukan.

4. PRINSIP RESPON CEPAT & TEPAT SASARAN:
   - Tanggapi langsung inti pertanyaan pengguna. Jika pengguna hanya meminta contoh kalimat, berikan contoh Arab berharakat beserta artinya secara ringkas tanpa uraian teori panjang yang tidak diminta.
   - Jika pengguna meminta analisis kalimat tetapi belum menyertakan kalimatnya, mintalah dengan santun agar pengguna mengetikkan kalimat yang ingin dibedah.`;

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'SmartKib API',
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

    let userPromptWithContext = message;
    if (topic && topic !== 'umum') {
      userPromptWithContext = `[Fokus Pembahasan: ${topic} - jawab langsung sesuai instruksi]\n${message}`;
    }

    contents.push({
      role: 'user',
      parts: [{ text: userPromptWithContext }]
    });

    let response;
    try {
      response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents,
        config: {
          systemInstruction: SMARTKIB_SYSTEM_INSTRUCTION,
          temperature: 0.3,
        }
      });
    } catch (modelErr) {
      console.warn('gemini-3-flash-preview fallback to gemini-3.8-flash:', modelErr);
      response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: SMARTKIB_SYSTEM_INSTRUCTION,
          temperature: 0.3,
        }
      });
    }

    const cleanReply = cleanFormatting(response.text || 'Maaf, belum dapat menghasilkan respon. Silakan coba kembali.');
    res.json({ reply: cleanReply });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
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
    const prompt = `Analisis kalimat bahasa Arab berikut kata demi kata secara mendalam untuk susunan sintaksis (Tarkib & I'rab) dan morfologi (Shorof) berdasarkan kaidah mu'tamad (Al-Ajurumiyyah, Imrithi, Alfiyah Ibnu Malik, dan Amtsilah Tashrifiyah).
Kalimat yang WAJIB dianalisis adalah persis seperti yang diberikan berikut:
"${cleanSentence}"

ATURAN ANALISIS KETAT:
1. Analisis HANYA kalimat di atas. JANGAN PERNAH menukar atau mengganti kalimat tersebut.
2. Tuliskan teks Arab pada setiap kata dalam huruf Arab berharakat asli. JANGAN gunakan transliterasi Latin untuk kalimat Arab.
3. Berikan arti kalimat yang tepat dan wajar dalam bahasa Indonesia pada "translation".
4. Tentukan jenis susunan kalimat pada "overallGrammar" (misal: "Jumlah Fi'liyyah (tersusun dari fi'il dan fa'il)" atau "Jumlah Ismiyyah (mubtada' dan khabar)").
5. Untuk setiap kata dalam array "words", sertakan:
   - "word": kata berharakat lengkap dalam huruf Arab
   - "type": "Isim", "Fi'il Madhi", "Fi'il Mudhari'", "Fi'il Amr", atau "Harf"
   - "position": kedudukan tarkib (Fa'il, Maf'ul Bih, Mubtada', Khabar, Mudhaf Ilaih, Majrur bil Harf, Na'at, dll)
   - "irabCase": status i'rab ("Marfu'", "Manshub", "Majrur", "Majzum", atau "Mabni")
   - "marker": tanda I'rab (Dhommah Zhahirah, Fathah Zhahirah, Kasrah Zhahirah, Wawu, Alif, Sukun, dll)
   - "morphology": wazan/sighah sharaf (misal: "Wazan فَعَلَ (Fi'il Tsulatsi Mujarrad)", "Isim Fa'il", "Jamak Taksir", dll)
   - "explanation": penjelasan kaidah mengapa kata tersebut memiliki kedudukan dan i'rab demikian
6. Sertakan sumber rujukan kitab yang mendasari analisis ini pada key "kitabReference" (misal: "Kitab Al-Ajurumiyyah, Bab مَرْفُوعَاتِ الْأَسْمَاءِ (الْفَاعِلُ)").

Balas HANYA dalam format JSON valid berikut:
{
  "sentence": "${cleanSentence}",
  "translation": "Arti kalimat dalam bahasa Indonesia",
  "overallGrammar": "Deskripsi struktur umum kalimat",
  "words": [
    {
      "word": "kata berharakat Arab",
      "type": "Isim / Fi'il / Harf",
      "position": "Kedudukan tarkib",
      "irabCase": "Marfu' / Manshub / Majrur / Majzum / Mabni",
      "marker": "Tanda I'rab",
      "morphology": "Wazan / Sighah",
      "explanation": "Penjelasan kaidah"
    }
  ],
  "kitabReference": "Kitab Al-Ajurumiyyah, Bab ..."
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

    const parsed = JSON.parse(response.text || '{}');
    if (!parsed.words || !Array.isArray(parsed.words)) {
      res.json(generateLocalAnalysisPayload(cleanSentence));
      return;
    }

    res.json(parsed);
  } catch (error: any) {
    console.error('Sentence Analysis Error:', error);
    res.json(generateLocalAnalysisPayload(req.body?.sentence || ''));
  }
});

function cleanFormatting(text: string): string {
  // Remove markdown headers and excessive asterisks while preserving readability
  return text
    .replace(/^###+\s+/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .trim();
}

function generateDynamicLocalResponse(message: string, _topic?: string): string {
  const q = (message || '').toLowerCase();

  // 1. Permintaan contoh kalimat atau kata
  if (q.includes('contoh') || q.includes('berikan contoh') || q.includes('misal')) {
    if (q.includes('fa\'il') || q.includes('fail')) {
      return `Berikut contoh kalimat dengan Fa'il (pelaku):

كَتَبَ الطَّالِبُ الدَّرْسَ
Arti: Siswa itu telah menulis pelajaran.
Keterangan: Lafadz الطَّالِبُ berkedudukan sebagai Fa'il yang berstatus Marfu' dengan tanda Dhommah zhahirah karena berupa isim mufrad.

Rujukan:
Kitab Al-Ajurumiyyah, Bab مَرْفُوعَاتِ الْأَسْمَاءِ (فَصْلُ الْفَاعِلِ).`;
    }

    if (q.includes('mubtada') || q.includes('khabar')) {
      return `Berikut contoh Jumlah Ismiyyah (Mubtada' dan Khabar):

زَيْدٌ عَالِمٌ
Arti: Zaid adalah orang yang berilmu.
Keterangan: زَيْدٌ adalah Mubtada' marfu' dengan dhommah, dan عَالِمٌ adalah Khabar marfu' dengan dhommah yang menyempurnakan makna kalimat.

Rujukan:
Kitab Al-Ajurumiyyah & Nazham Imrithi, Bab الْمُبْتَدَأُ وَالْخَبَرُ.`;
    }

    if (q.includes('maf\'ul') || q.includes('maful')) {
      return `Berikut contoh Maf'ul Bih (objek):

قَرَأَ مُحَمَّدٌ الْقُرْآنَ
Arti: Muhammad telah membaca Al-Qur'an.
Keterangan: Lafadz الْقُرْآنَ adalah Maf'ul Bih yang berstatus Manshub dengan tanda Fathah zhahirah.

Rujukan:
Kitab Al-Ajurumiyyah, Bab مَنْصُوبَاتِ الْأَسْمَاءِ (الْمَفْعُولُ بِهِ).`;
    }

    if (q.includes('inna') || q.includes('kaana') || q.includes('kana')) {
      return `Berikut perbandingan contoh amil Kaana dan Inna:

1. Amil Kaana (Merafa'kan isim, menashabkan khabar):
كَانَ زَيْدٌ عَالِمًا
Arti: Adalah Zaid itu seorang yang berilmu.

2. Amil Inna (Menashabkan isim, merafa'kan khabar):
إِنَّ زَيْدًا عَالِمٌ
Arti: Sesungguhnya Zaid adalah orang yang berilmu.

Rujukan:
Kitab Al-Ajurumiyyah & Nazham Imrithi, Bab كَانَ وَأَخَوَاتُهَا وَإِنَّ وَأَخَوَاتُهَا.`;
    }
  }

  // 2. Permintaan perbedaan konsep
  if (q.includes('perbedaan') || q.includes('beda') || q.includes('bandingkan')) {
    if (q.includes('fail') || q.includes('fa\'il')) {
      return `Perbedaan Fa'il dan Na'ibul Fa'il:

1. Fa'il (الْفَاعِلُ):
- Terletak setelah Fi'il Ma'lum (kata kerja aktif).
- Menunjukkan pelaku perbuatan secara jelas.
- Contoh: كَتَبَ زَيْدٌ الدَّرْسَ (Zaid menulis pelajaran), kata زَيْدٌ adalah Fa'il marfu'.

2. Na'ibul Fa'il (نَائِبُ الْفَاعِلِ):
- Terletak setelah Fi'il Majhul (kata kerja pasif).
- Menggantikan posisi fa'il yang tidak disebutkan.
- Contoh: كُتِبَ الدَّرْسُ (Pelajaran itu ditulis), kata الدَّرْسُ adalah Na'ibul Fa'il marfu'.

Rujukan:
Kitab Al-Ajurumiyyah & Alfiyah Ibnu Malik, Bab الْفَاعِلُ وَنَائِبُ الْفَاعِلِ.`;
    }
  }

  // 3. Permintaan definisi
  if (q.includes('apa itu') || q.includes('pengertian') || q.includes('definisi')) {
    if (q.includes('nahwu')) {
      return `Ilmu Nahwu (عِلْمُ النَّحْوِ):
Kaidah-kaidah untuk mengetahui harakat dan keadaan akhir setiap kata bahasa Arab ketika tersusun dalam kalimat (I'rab dan Bina'), serta susunan tarkib yang benar.

Tujuannya adalah memelihara lisan dari kesalahan gramatika dan memahami Al-Qur'an serta Sunnah secara tepat.

Rujukan:
Kitab Al-Ajurumiyyah & Nazham Imrithi, Bab بَابُ الْكَلَامِ.`;
    }

    if (q.includes('shorof') || q.includes('sharaf')) {
      return `Ilmu Sharaf (عِلْمُ الصَّرْفِ):
Ilmu yang mempelajari perubahan bentuk asal suatu kata menjadi aneka bentuk turunan (tashrif) untuk melahirkan makna-makna yang dikehendaki, serta mengenali huruf asli, huruf tambahan, dan kaidah i'lal.

Rujukan:
Kitab Al-Maqshud fi Ash-Sharf, Bab حَقِيقَةُ عِلْمِ التَّصْرِيفِ.`;
    }

    if (q.includes('irab') || q.includes("i'rab")) {
      return `I'rab (الْإِعْرَابُ):
Perubahan harakat atau wujud akhir kata karena perbedaan amil yang masuk padanya, baik secara lafadz (tampak) maupun taqdiran (diperkirakan).

Pembagian I'rab ada 4 macam:
1. Rafa' (رَفْعٌ)
2. Nashab (نَصْبٌ)
3. Khafadh / Jar (خَفْضٌ / جَرٌّ)
4. Jazm (جَزْمٌ)

Rujukan:
Kitab Al-Ajurumiyyah, Bab بَابُ الْإِعْرَابِ.`;
    }
  }

  // Respon umum
  return `Terima kasih atas pertanyaannya mengenai: "${message}".

Dalam kaidah gramatika bahasa Arab, pembahasan ini ditinjau dari:
1. Jenis kata yang digunakan (Isim, Fi'il, atau Harf).
2. Kedudukan kata dalam susunan kalimat (Tarkib).
3. Status dan tanda akhir kata (I'rab).

Jika Anda membutuhkan contoh kalimat berharakat, perbandingan kaidah, atau analisis kata per kata, silakan beritahu saya apa yang ingin Anda bahas lebih lanjut.

Rujukan:
Kitab Al-Ajurumiyyah, Bab الْكَلَامِ وَالْإِعْرَابِ.`;
}

function generateLocalAnalysisPayload(sentence: string) {
  const clean = (sentence || '').trim();
  const words = clean ? clean.split(/\s+/) : [];
  return {
    sentence: clean,
    translation: 'Analisis gramatikal terstruktur untuk kalimat: ' + clean,
    overallGrammar: words.length > 0 && (words[0].startsWith('يَ') || words[0].startsWith('تَ') || words[0].startsWith('كَتَبَ') || words[0].endsWith('َ')) ? 'Jumlah Fi\'liyyah' : 'Jumlah Ismiyyah',
    words: words.map((w, idx) => ({
      word: w,
      type: idx === 0 ? "Fi'il" : 'Isim',
      position: idx === 0 ? "Fi'il Pokok" : idx === 1 ? "Fa'il (Pelaku)" : "Maf'ul Bih / Keterangan",
      irabCase: idx === 0 ? "Mabni" : idx === 1 ? "Marfu'" : "Manshub",
      marker: idx === 0 ? "Mabni 'alal Fath" : idx === 1 ? "Dhommah Zhahirah" : "Fathah Zhahirah",
      morphology: idx === 0 ? "Wazan فَعَلَ" : "Isim Mufrad",
      explanation: idx === 0 ? "Kata kerja pokok kalimat" : idx === 1 ? "Pelaku perbuatan (Fa'il) berstatus marfu'" : "Objek kalimat (Maf'ul bih) berstatus manshub"
    })),
    kitabReference: 'Kitab Al-Ajurumiyyah, Bab مَرْفُوعَاتِ الْأَسْمَاءِ (الْفَاعِلُ) وَمَنْصُوبَاتِ الْأَسْمَاءِ (الْمَفْعُولُ بِهِ).'
  };
}

export default app;
