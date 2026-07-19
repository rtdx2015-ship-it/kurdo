import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

const app = express();
app.use(express.json());

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// API Endpoint for generating highly optimized Arabic marketing copy
app.post('/api/generate-ad', async (req, res) => {
  try {
    const { gender, tone, targetAudience, offerDetails } = req.body;
    
    const prompt = `أنت خبير تسويق وصناعة محتوى إعلاني لعلامة تجارية فاخرة تسمى "متجر لافند" (Lavender Store).
المنتج هو: مانع تعرق طبيعي فاخر للنساء والرجال برائحة اللافندر المنعشة، قوي ومميز، حماية تدوم 48 ساعة ومقاومة تامة للروائح والبلل.
العرض الخاص الحالي: 10 قطع بسعر مميز جداً هو 1750 دينار فقط.

المطلوب كتابة 3 نصوص إعلانية احترافية باللغة العربية الفصحى أو اللهجة العراقية الراقية حسب اختيارك:
1. سيناريو فيديو إعلاني قصير وتفاعلي لـ (TikTok / Reels / Snapchat) مع توجيهات بصرية ووصف للمشاهد للبنت وهي تستعمله برقة، ويجب الإشارة لظهور علامة مائية "متجر لافند" بوضوح على الشاشة.
2. منشور تسويقي شبكي لإنستغرام وسناب شات مع عبارات رنانة وجذابة تدعو لطلب العرض (10 قطع بـ 1750 دينار) ورموز تعبيرية راقية (زهرة الخزامى 🪻، الانتعاش ❄️، التوفير 💰).
3. نص إعلاني للمؤثرين والمشاهير يصف تجربة الاستعمال الحقيقية بطريقة طبيعية ومقنعة للغاية تركز على الجاذبية والقوة وحماية الـ 48 ساعة.

المعلومات المدخلة للتخصيص:
الفئة المستهدفة: ${targetAudience || 'الجميع (نساء ورجال)'}
نبرة الصوت الإعلانية: ${tone || 'فاخرة وحماسية'}
الجنس المستهدف: ${gender || 'للجنسين (نساء ورجال)'}
تفاصيل العرض: ${offerDetails || '10 قطع بـ 1750 دينار'}

يرجى إرجاع النتيجة بتنسيق JSON حصراً يحتوي على الحقول التالية وبدون أي نصوص إضافية خارج الـ JSON لتسهيل معالجته:
{
  "videoScript": {
    "title": "عنوان الفيديو الإعلاني",
    "hook": "العبارة الافتتاحية القوية للجذب السريع",
    "scenes": [
      {
        "time": "0:00 - 0:05",
        "visual": "وصف المشهد البصري بالتفصيل (مثل بنت تستعمل المنتج برقة في حمام مشرق مع شعار متجر لافند)",
        "audio": "نص الكلام المقروء في الخلفية بصوت دافئ ومقنع",
        "textOverlay": "النص المكتوب على الشاشة ككابشن"
      },
      {
        "time": "0:05 - 0:10",
        "visual": "لقطة قريبة للمنتج الفاخر المحاط بزهور اللافندر المنعشة مع زاوية تصوير سينمائية",
        "audio": "شرح مميزات المنتج: طبيعي، خالي من الكيماويات، وحماية 48 ساعة",
        "textOverlay": "طبيعي 100% | حماية 48 ساعة"
      },
      {
        "time": "0:10 - 0:15",
        "visual": "عرض متحرك جذاب للعرض الخاص: 10 قطع بسعر 1750 دينار مع أيقونة سلة الشراء وموقع متجر لافند",
        "audio": "اطلب العرض الآن من متجر لافند قبل نفاد الكمية! 10 قطع بسعر 1750 دينار فقط!",
        "textOverlay": "عرض خاص: 10 قطع بـ 1750 دينار!"
      }
    ]
  },
  "socialPost": {
    "headline": "العنوان الرئيسي المثير للانتباه",
    "body": "نص المنشور بالكامل مع الرموز التعبيرية المناسبة",
    "hashtags": ["متجر_لافند", "مانع_تعرق_طبيعي", "انتعاش_اللافندر", "عروض_خاصة"]
  },
  "influencerBrief": {
    "intro": "توجيهات للمؤثر لطريقة التقديم",
    "keyPoints": [
      "حماية قوية تدوم 48 ساعة ضد العرق والرطوبة",
      "رائحة اللافندر الفاخرة والطبيعية تماماً",
      "عرض الـ 10 قطع بـ 1750 دينار هو فرصة لا تتكرر لتوفير هائل"
    ]
  }
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const responseText = response.text || '{}';
    res.json(JSON.parse(responseText));
  } catch (error: any) {
    console.error('Error generating content:', error);
    res.status(500).json({ error: error.message || 'Failed to generate ad contents' });
  }
});

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
  // Integrate Vite dynamically for development mode
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });
  app.use(vite.middlewares);
  
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const templatePath = path.resolve(process.cwd(), 'index.html');
      let template = fs.readFileSync(templatePath, 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
} else {
  // Serve production built files
  const distPath = path.resolve(process.cwd(), 'dist');
  app.use(express.static(distPath));
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
