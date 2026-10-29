import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const getApiKey = () => {
  return process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || '';
};

const NAHWU_SYSTEM_INSTRUCTION = `Kamu adalah 'Ustadz NahwuLab' — Guru Pakar dan Mu'allim Ahli Bahasa Arab spesialis Ilmu Nahwu, Ilmu Shorof, dan I'rab.
Tugas utamamu adalah mendampingi santri dan pembelajar bahasa Arab untuk memahami persoalan tata bahasa Arab, susunan gramatikal kata dan kalimat, kaidah i'rab, wazan, bina', serta tashrif.

Format & Karakteristik Jawabanmu:
1. Akurasi & Kaidah Mu'tamad: Berpegang pada kaidah para ulama nahwu (Kufah/Bashrah) dengan rujukan seperti Matan Al-Jurumiyyah, Al-Amtsilah At-Tashrifiyyah, Imrithi, Mutammimah, dan Alfiyyah Ibnu Malik.
2. Teks Arab Berharakat: Selalu sertakan harakat lengkap pada ayat/kalimat/kata Arab yang dibahas agar pembaca tidak salah baca.
3. Struktur Pembahasan yang Rapi:
   - 📌 Terjemah / Makna Kalimat
   - 🔍 Analisis Gramatikal & I'rab per kata (Kedudukan/Tarkib, Status I'rab: Marfu'/Manshub/Majrur/Majzum, Tanda I'rab & Alasannya)
   - ⚖️ Tinjauan Shorof/Morfologi (Wazan, Sighah, Bina', Tashrif jika relevan)
   - 💡 Catatan Kaidah Penting (Kaidah jurumiyyah/shorof yang mendasari)
4. Bahasa: Bahasa Indonesia yang santun, jelas, terstruktur, edukatif, dan ramah seperti seorang ustadz yang sabar membimbing santrinya.`;

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
      // Fallback helpful response if API key is not yet set in environment
      res.json({
        reply: `**Marhaban bikum di NahwuLab!**\n\nPertanyaan Anda: "${message}"\n\n*Catatan*: GEMINI_API_KEY belum terdeteksi di runtime backend. Silakan pastikan variabel lingkungan \`GEMINI_API_KEY\` telah diatur.\n\nContoh I'rab Ringkas:\n- **جَاءَ**: فِعْلٌ مَاضٍ مَبْنِيٌّ عَلَى الْفَتْحِ (Fi'il Madhi mabni fathah).\n- **زَيْدٌ**: فَاعِلٌ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ الظَّاهِرَةُ (Fa'il marfu' dengan dhommah zhahirah).\n- **عَالِمًا**: حَالٌ مَنْصُوْبٌ وَعَلَامَةُ نَصْبِهِ الْفَتْحَةُ الظَّاهِرَةُ (Hal manshub dengan fathah zhahirah).`
      });
      return;
    }

    const ai = new GoogleGenAI({ apiKey });

    // Format history if provided
    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-6)) {
        if (item.role === 'user' || item.role === 'assistant') {
          contents.push({
            role: item.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: item.content }]
          });
        }
      }
    }

    const promptText = topic && topic !== 'umum' 
      ? `[Fokus Topik: ${topic.toUpperCase()}]\n${message}`
      : message;

    contents.push({
      role: 'user',
      parts: [{ text: promptText }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
      config: {
        systemInstruction: NAHWU_SYSTEM_INSTRUCTION,
        temperature: 0.3,
      }
    });

    res.json({
      reply: response.text || 'Maaf, belum dapat menghasilkan respon. Silakan coba kembali.'
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({
      error: 'Gagal memproses pertanyaan nahwu',
      details: error?.message || String(error)
    });
  }
});

app.post('/api/analyze-sentence', async (req: Request, res: Response) => {
  try {
    const { sentence } = req.body;
    if (!sentence) {
      res.status(400).json({ error: 'Kalimat bahasa Arab harus diisi' });
      return;
    }

    const apiKey = getApiKey();
    if (!apiKey) {
      res.json({
        sentence,
        words: [
          {
            word: sentence,
            type: 'Kalimat Arab',
            position: 'Analisis Demo',
            irabCase: 'Marfu/Manshub/Majrur',
            marker: 'Dhommah/Fathah/Kasrah',
            morphology: 'Wazan dasar',
            explanation: 'Silakan aktifkan API Key Gemini untuk uraian I\'rab otomatis berbasis AI.'
          }
        ]
      });
      return;
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Analisis kalimat bahasa Arab berikut kata demi kata untuk susunan gramatikal (Tarkib & I'rab) dan morfologi (Shorof).
Kalimat: "${sentence}"

Balas HANYA dalam format JSON valid (tanpa bungkus markdown) dengan struktur:
{
  "sentence": "${sentence}",
  "translation": "Arti kalimat dalam bahasa Indonesia",
  "overallGrammar": "Deskripsi struktur umum kalimat (misal: Jumlah Fi'liyyah atau Jumlah Ismiyyah)",
  "words": [
    {
      "word": "kata berharakat",
      "type": "Isim / Fi'il / Harf",
      "position": "Kedudukan tarkib (misal: Mubtada', Khabar, Fa'il, Maf'ul bih, Mudhaf Ilaih, dll)",
      "irabCase": "Marfu' / Manshub / Majrur / Majzum / Mabni",
      "marker": "Tanda I'rab (misal: Dhommah, Fathah, Kasrah, Sukun, Wawu, Ya', dll)",
      "morphology": "Wazan & Sighah Shorof jika isim/fi'il (misal: Wazan فَاعِلٌ, Isim Fa'il dari فَعَلَ)",
      "explanation": "Penjelasan ringkas kaidah nahwu/shorofnya"
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: 'application/json',
        temperature: 0.2
      }
    });

    const text = response.text || '{}';
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    res.json(data);
  } catch (error: any) {
    console.error('Analyze Sentence Error:', error);
    res.status(500).json({
      error: 'Gagal menganalisis kalimat',
      details: error?.message || String(error)
    });
  }
});

export default app;
