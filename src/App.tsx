import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ShoppingBag, 
  Download, 
  RefreshCw, 
  FileText, 
  CheckCircle, 
  Video, 
  Sliders, 
  User, 
  Users, 
  Award, 
  ShieldCheck, 
  Heart, 
  Share2, 
  MessageCircle, 
  Check,
  Smartphone,
  ChevronRight,
  Info,
  Gift,
  Star,
  Layers,
  Sparkle
} from 'lucide-react';

// Reference local photorealistic assets as strings
const productImg = "/src/assets/images/lavender_product_1783540659436.jpg";
const girlImg = "/src/assets/images/girl_using_product_1783540673255.jpg";

// Define pre-loaded high-converting campaigns to use as default/fallbacks
const DEFAULT_CAMPAIGNS = {
  women: {
    videoScript: {
      title: "إعلان الانتعاش الأنثوي الفاخر",
      hook: "سحر اللافندر الطبيعي لبشرة حريرية جافة وجاذبية لا تقاوم 🪻",
      scenes: [
        {
          time: "0:00 - 0:04",
          visual: "لقطة سينمائية مقربة لبنت تبدأ يومها بابتسامة مشرقة وهي تستعمل رول-أون لافند الطبيعي بلطف وثقة تامة.",
          audio: "تبحثين عن انتعاش حقيقي وثقة تدوم طويلاً؟ ثوانٍ معدودة تمنحكِ انتعاشاً فريداً يرافقكِ طوال اليوم.",
          textOverlay: "متجر لافند | ثقة وانتعاش لا يزول ✨"
        },
        {
          time: "0:04 - 0:09",
          visual: "حركة كاميرا بطيئة تظهر تفاصيل عبوة مانع التعرق الفاخرة المحاطة بزهور الخزامى المتناثرة مع قطرات الندى المضيئة.",
          audio: "تركيبة طبيعية 100% بمستخلص اللافندر الفرنسي النقي. خالي من الكيماويات والبارابين، حماية قصوى تدوم 48 ساعة.",
          textOverlay: "مستخلصات طبيعية 100% 🌿 | خالي من الألمنيوم"
        },
        {
          time: "0:09 - 0:15",
          visual: "تأثير بصري ساطع يعلن عن عرض التوفير الخارق لـ 10 قطع مع كتابة السعر بخط كوفي ذهبي لامع.",
          audio: "والآن العرض الحصري من متجر لافند! احصلي على 10 قطع كاملة بسعر لا يصدق، فقط 1750 دينار! اطلبي الآن وتميزي.",
          textOverlay: "عـرض خـاص 💰 | 10 قطع بـ 1750 دينار فقط!"
        }
      ]
    },
    socialPost: {
      headline: "🪻 سر الجاذبية الطبيعية والانتعاش الدائم مع متجر لافند! 🪻",
      body: "كل يوم هو قصة جديدة من الثقة والتألق! ✨\n\nنقدم لكِ أقوى مانع تعرق طبيعي مستخلص من زهور اللافندر النقية 🪻.\n\n🛡️ مميزات منتج لافند المميز:\n✅ حماية قصوى ضد التعرق والروائح تدوم 48 ساعة كاملة.\n✅ تفتيح طبيعي وتنعيم لطيف لمنطقة الإبط دون أي حساسية.\n✅ خالي تماماً من المواد الكيميائية الضارة والألمنيوم والبارابين.\n✅ مناسب جداً للنساء والرجال الباحثين عن التميز.\n\n🎁 العرض الأقوى حالياً:\nاحصل على 10 قطع كاملة لتكفيكِ وتكفي عائلتكِ بسعر خيالي:\n🔥 فقط بـ 1750 دينار عراقي! 🔥\n\nالتوصيل سريع وآمن مباشرة لباب بيتك 🚚.",
      hashtags: ["متجر_لافند", "مانع_تعرق_طبيعي", "جمال_ونظافة", "انتعاش_اللافندر", "عروض_العراق"]
    },
    influencerBrief: {
      intro: "توجيهات تصوير إعلان للمؤثرات صانعات محتوى الجمال والنظافة الشخصية:",
      keyPoints: [
        "ابدأي الفيديو بلقطة قريبة لوجهك وأنتِ تتنفسين بعمق وتقولين: 'الريحة تاخذ العقل!'",
        "اعرضي قوام المنتج الخفيف على يدك لتوضيح سرعة امتصاصه وعدم تركه أي بقع بيضاء أو صفراء على الملابس.",
        "أكدي بقوة على فكرة التوفير العائلي: '10 قطع كاملة بـ 1750 دينار يعني وداعاً للقلق من التعرق طوال الصيف لكل البيت!'"
      ]
    }
  },
  men: {
    videoScript: {
      title: "إعلان القوة والأناقة للرجال",
      hook: "قوة الطبيعة تحارب التعرق والروائح في أصعب الظروف 🛡️",
      scenes: [
        {
          time: "0:00 - 0:04",
          visual: "لقطة حركية سريعة لشاب نشيط يمارس الرياضة أو يستعد للاجتماع بكامل أناقته وثقته.",
          audio: "يومك مليء بالتحديات والنشاط؟ تحتاج سلاحاً قوياً ضد التعرق يحافظ على هيبتك وأناقتك.",
          textOverlay: "متجر لافند | ثقة الرجال الحديدية 💪"
        },
        {
          time: "0:04 - 0:09",
          visual: "تأثير تبريد جليدي يحيط بعبوة لافند الفاخرة مع زهور اللافندر الزرقاء العميقة.",
          audio: "تركيبة لافند المطورة للرجال والنساء. انتعاش فوري وحماية حديدية تدوم 48 ساعة ضد البلل والرائحة.",
          textOverlay: "حماية 48 ساعة مضاعفة ❄️ | جفاف تام"
        },
        {
          time: "0:09 - 0:15",
          visual: "حركة بصرية مذهلة تكشف عن صندوق العرض الفاخر الذي يحتوي على 10 عبوات بأسلوب عصري.",
          audio: "لا ترضى بالقليل! عرض التوفير الخارق متوفر الآن: 10 قطع كاملة بسعر 1750 دينار فقط! اطلب الآن.",
          textOverlay: "العرض الأقوى 💰 | 10 عبوات بـ 1750 دينار"
        }
      ]
    },
    socialPost: {
      headline: "💪 الثقة والانتعاش المطلق للرجال والنساء مع لافند! 💪",
      body: "لا تدع حرارة اليوم والتعرق يقفان في طريق نجاحك وأناقتك! 🛡️\n\nمانع تعرق لافند الطبيعي المميز يمنحك الحماية القصوى والجفاف التام في أصعب الأوقات برائحة اللافندر الفاخرة.\n\n🪻 لماذا يفضله الرجال والنساء؟\n❄️ جفاف فوري بمجرد الاستعمال دون ملمس لزج.\n🛡️ حماية حقيقية معتمدة تدوم 48 ساعة متواصلة.\n🌿 مكونات طبيعية لطيفة تحافظ على صحة الجلد وتمنع الاسمرار.\n\n💰 عرض التوفير الحصري:\nاحصل على باقة الـ 10 قطع بسعر تصفية مذهل:\n🔥 1750 دينار فقط للعلبة العائلية كاملة! 🔥\n\nأثبت حضورك بنظافة وانتعاش دائمين.",
      hashtags: ["متجر_لافند", "قوة_الانتعاش", "عناية_بالرجل", "مانع_تعرق", "توفير_عائلي"]
    },
    influencerBrief: {
      intro: "إرشادات تقديم المحتوى للمؤثرين الرياضيين والشباب النشيطين:",
      keyPoints: [
        "ابدأ بالحديث عن معاناتك اليومية في الجيم أو العمل مع التعرق، وكيف حلّ منتج لافند هذه المشكلة تماماً.",
        "أبرز العبوة أمام الكاميرا بلقطة رجولية تبرز جودة البوكس والتصميم الأنيق.",
        "شدد على أهمية اغتنام عرض الـ 10 قطع لمشاركة الأصدقاء أو الاستخدام طويل الأمد بـ 1750 دينار فقط."
      ]
    }
  },
  unisex: {
    videoScript: {
      title: "العرض العائلي المتكامل للجميع",
      hook: "الحل النهائي للتعرق لكل أفراد العائلة في زجاجة واحدة 🪻",
      scenes: [
        {
          time: "0:00 - 0:04",
          visual: "مجموعة من لقطات سريعة ومبهجة لنساء ورجال من مختلف الأعمار يبتسمون بثقة وينعمون بيومهم بكل راحة.",
          audio: "لكِ، له، ولكل أفراد العائلة! متجر لافند يقدم الحل النهائي والآمن لمشكلة التعرق المزعجة.",
          textOverlay: "متجر لافند | الانتعاش العائلي الذكي 🪻"
        },
        {
          time: "0:04 - 0:09",
          visual: "عبوتان من مانع التعرق تقفان جنباً إلى جنب مع خلفية بنفسجية ساحرة وقطرات ماء متساقطة تدل على الانتعاش والبرودة.",
          audio: "تركيبة اللافندر الطبيعية اللطيفة جداً والمناسبة للجنسين. تقضي على البكتيريا المسببة للروائح بفعالية وتمنحك أماناً كاملاً.",
          textOverlay: "مناسب للنساء والرجال 🪻 | حماية لطيفة وآمنة"
        },
        {
          time: "0:09 - 0:15",
          visual: "تأثير احتفالي مبهج مع ظهور عرض الـ 10 قطع وسعر 1750 دينار بوضوح كبير يتوسط الشاشة.",
          audio: "وفري ميزانيتك واحصلي على بوكس العائلة: 10 قطع بـ 1750 دينار فقط! جودة مميزة وسعر لا يقارن. اطلبوا الآن.",
          textOverlay: "بوكس العائلة 📦 | 10 قطع بـ 1750 دينار"
        }
      ]
    },
    socialPost: {
      headline: "📦 البوكس العائلي المتكامل من متجر لافند - 10 قطع بـ 1750 دينار! 📦",
      body: "تبحثين عن التوفير الذكي والجودة الفاخرة لكل البيت؟ 🪻✨\n\nمتجر لافند يجمع لكِ الجمال، الصحة والتوفير في أقوى عرض لمانع التعرق للجنسين (نساء ورجال).\n\n❄️ مزايا بوكس لافند العائلي:\n1️⃣ حماية متواصلة لمدة 48 ساعة ضد التعرق في أقوى درجات الحرارة.\n2️⃣ مكونات طبيعية ناعمة على البشرة ورائحة لافندر منعشة تبهج الحواس.\n3️⃣ عبوة اقتصادية ومناسبة للاستعمال اليومي الآمن.\n\n🔥 العرض الخارق:\nاحصل على 10 قطع كاملة بسعر لا يصدق:\n💵 فقط 1750 دينار عراقي! 💵\n\nوفر الكثير واحصل على حماية حقيقية مميزة لكل من تحب.",
      hashtags: ["متجر_لافند", "العرض_العائلي", "حماية_طبيعية", "لافندر", "توفير_ذكي"]
    },
    influencerBrief: {
      intro: "إرشادات تقديم المحتوى للعائلات وصانعي المحتوى العائلي المشترك:",
      keyPoints: [
        "قوموا بتصوير فيديو ثنائي (الزوج والزوجة أو الأخ والأخت) يتنافسون بابتسامة على من يأخذ العبوة أولاً.",
        "إظهار العائلة وهي تفتح بوكس الـ 10 قطع معبرين عن دهشتهم من كرم العرض وسعره الخرافي (1750 دينار).",
        "توجيه المتابعين بشكل صريح للضغط على رابط متجر لافند للطلب الفوري قبل انتهاء المخزون المحدود."
      ]
    }
  }
};

// Define structure for petals
interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export default function App() {
  // Application tabs
  const [activeTab, setActiveTab] = useState<'home' | 'video' | 'copywriter' | 'order'>('home');
  
  // Product & offer state
  const [quantity, setQuantity] = useState<number>(10);
  const basePricePerTen = 1750;
  const computedPrice = Math.round((quantity / 10) * basePricePerTen);
  const savingsAmount = Math.round((quantity / 10) * 800); // Simulated savings

  // Checkout simulator state
  const [buyerName, setBuyerName] = useState<string>('');
  const [buyerPhone, setBuyerPhone] = useState<string>('');
  const [buyerCity, setBuyerCity] = useState<string>('بغداد');
  const [buyerNotes, setBuyerNotes] = useState<string>('');
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>('');

  // Video Simulator states
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoTime, setVideoTime] = useState<number>(0);
  const [videoDuration] = useState<number>(15);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [selectedTemplate, setSelectedTemplate] = useState<'women' | 'men' | 'unisex'>('women');
  const [videoFilter, setVideoFilter] = useState<'natural' | 'lavender' | 'warm' | 'noir'>('lavender');
  
  // Watermark customization states
  const [watermarkText, setWatermarkText] = useState<string>('متجر لافند 🪻');
  const [watermarkOpacity, setWatermarkOpacity] = useState<number>(0.85);
  const [watermarkSize, setWatermarkSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [watermarkPos, setWatermarkPos] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center'>('top-right');
  const [showWatermark, setShowWatermark] = useState<boolean>(true);

  // Floating petals state
  const [petals, setPetals] = useState<Petal[]>([]);
  
  // AI Ad Copwriter custom query states
  const [customTone, setCustomTone] = useState<string>('فاخرة وراقية');
  const [customAudience, setCustomAudience] = useState<string>('النساء العاملات والرجال النشيطين في العراق');
  const [customGender, setCustomGender] = useState<'women' | 'men' | 'unisex'>('unisex');
  const [customOffer, setCustomOffer] = useState<string>('10 قطع بسعر 1750 دينار');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedCampaign, setGeneratedCampaign] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Text-To-Speech (Voiceover Synthesizer) setup
  const [speechSupported, setSpeechSupported] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // References for video time loops
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    // Check speech synthesis support
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
      setSpeechSupported(true);
    }

    // Pre-populate petals
    const initialPetals = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      size: 10 + Math.random() * 15,
      rotation: Math.random() * 360,
    }));
    setPetals(initialPetals);

    return () => {
      stopAllVoiceovers();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Update video progress loop
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setVideoTime((prev) => {
          if (prev >= videoDuration) {
            // Loop video
            triggerVoiceoverForCurrentScene(0);
            return 0;
          }
          const nextTime = Number((prev + 0.1).toFixed(1));
          
          // Trigger voiceover check on scene shifts (approx at 0s, 4s, 9s)
          if (Math.abs(nextTime - 4.0) < 0.1) {
            triggerVoiceoverForCurrentScene(1);
          } else if (Math.abs(nextTime - 9.0) < 0.1) {
            triggerVoiceoverForCurrentScene(2);
          }

          return nextTime;
        });
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      stopAllVoiceovers();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, selectedTemplate, isMuted]);

  // Generate unique order ID
  const generateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerPhone) {
      alert('يرجى ملء الاسم ورقم الهاتف لإكمال الطلب المحاكي');
      return;
    }
    const id = 'LAV-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(id);
    setOrderSubmitted(true);
  };

  // Get active campaign script
  const getActiveCampaign = () => {
    if (generatedCampaign) return generatedCampaign;
    return DEFAULT_CAMPAIGNS[selectedTemplate];
  };

  const activeCampaign = getActiveCampaign();

  // Get current scene subtitle and voiceover based on time
  const getCurrentSceneIndex = () => {
    if (videoTime < 4) return 0;
    if (videoTime < 9) return 1;
    return 2;
  };

  const currentSceneIndex = getCurrentSceneIndex();
  const currentScene = activeCampaign.videoScript.scenes[currentSceneIndex] || activeCampaign.videoScript.scenes[0];

  // Arabic voice synthesis function
  const triggerVoiceoverForCurrentScene = (sceneIdx: number) => {
    if (!speechSupported || isMuted || !synthRef.current) return;
    
    // Stop any running speech first
    synthRef.current.cancel();

    const textToSpeak = activeCampaign.videoScript.scenes[sceneIdx]?.audio || '';
    if (!textToSpeak) return;

    utteranceRef.current = new SpeechSynthesisUtterance(textToSpeak);
    utteranceRef.current.lang = 'ar-EG'; // Default Egyptian Arabic for natural warm voice
    utteranceRef.current.rate = 0.88; // Slightly slower, more professional marketing pace
    utteranceRef.current.pitch = 1.05;

    // Search for Arabic voices
    const voices = synthRef.current.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arabicVoice) {
      utteranceRef.current.voice = arabicVoice;
    }

    utteranceRef.current.onstart = () => setIsSpeaking(true);
    utteranceRef.current.onend = () => setIsSpeaking(false);
    utteranceRef.current.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utteranceRef.current);
  };

  const stopAllVoiceovers = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsSpeaking(false);
  };

  // Handle Play/Pause
  const handlePlayToggle = () => {
    const nextPlayState = !isPlaying;
    setIsPlaying(nextPlayState);
    if (nextPlayState) {
      // Speak current scene immediately
      triggerVoiceoverForCurrentScene(currentSceneIndex);
    } else {
      stopAllVoiceovers();
    }
  };

  // Call Express API backend using Gemini to generate customized ad copy
  const handleGenerateAICopy = async () => {
    setIsGenerating(true);
    setErrorMessage('');
    try {
      const response = await fetch('/api/generate-ad', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gender: customGender,
          tone: customTone,
          targetAudience: customAudience,
          offerDetails: customOffer,
        }),
      });

      if (!response.ok) {
        throw new Error('فشل الخادم في توليد الإعلان. يرجى التحقق من إعدادات المفتاح.');
      }

      const data = await response.json();
      if (data && data.videoScript) {
        setGeneratedCampaign(data);
        // Automatically switch template settings
        setSelectedTemplate(customGender);
        // Switch to video tab to see the custom ad live
        setActiveTab('video');
        // Reset playhead
        setVideoTime(0);
        setIsPlaying(false);
      } else {
        throw new Error('تنسيق البيانات المستلمة غير صالح.');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'حدث خطأ غير متوقع أثناء توليد الإعلان بالذكاء الاصطناعي.');
      // Fallback: use template
      setGeneratedCampaign(null);
    } finally {
      setIsGenerating(false);
    }
  };

  // Helper to copy content to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('تم نسخ النص بنجاح إلى الحافظة! 📋');
  };

  // Sound effects simulator using Web Audio API
  const playClickSound = (type: 'success' | 'click' | 'bubble') => {
    if (typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'success') {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        
        osc1.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc1.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        osc2.frequency.setValueAtTime(783.99, ctx.currentTime); // G5
        osc2.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.1); // C6
        
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        
        osc1.start();
        osc2.start();
        osc1.stop(ctx.currentTime + 0.3);
        osc2.stop(ctx.currentTime + 0.3);
      } else if (type === 'bubble') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      }
    } catch (e) {
      // Audio context block prevention
    }
  };

  return (
    <div id="main_app_root" className="min-h-screen bg-red-950/95 text-slate-100 font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/40 via-slate-950 to-red-950">
      
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-red-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-1/4 w-[35rem] h-[35rem] bg-rose-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Decorative Lavender Leaf Rainfall on background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {petals.map((p) => (
          <div
            key={p.id}
            className="absolute text-purple-400/20 select-none animate-[ping_4s_infinite]"
            style={{
              left: `${p.left}%`,
              top: `${-20 + (p.id * 8)}%`,
              fontSize: `${p.size}px`,
              transform: `rotate(${p.rotation}deg)`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              animationName: 'fall-and-drift',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear'
            }}
          >
            🪻
          </div>
        ))}
      </div>

      {/* Styles for the petal rain falling */}
      <style>{`
        @keyframes fall-and-drift {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(110vh) rotate(360deg) translateX(50px);
            opacity: 0;
          }
        }
        .text-glow {
          text-shadow: 0 0 15px rgba(239, 68, 68, 0.4);
        }
      `}</style>

      {/* Top Banner Offer */}
      <div id="top_offer_ticker" className="bg-gradient-to-r from-red-950 via-rose-950 to-red-950 text-white text-xs md:text-sm py-2.5 px-4 text-center border-b border-red-500/20 flex items-center justify-center gap-2 font-medium z-50 relative">
        <Sparkles className="w-4 h-4 text-red-400 animate-spin" />
        <span>عـرض تـوفـير خـاص: <strong>10 قطع</strong> من مانع التعرق الفاخر بـ <strong>1750 دينار</strong> فقط!</span>
        <span className="hidden md:inline-block bg-red-500 text-white text-[10px] uppercase px-2 py-0.5 rounded-full font-bold animate-pulse">لفترة محدودة</span>
      </div>

      {/* Elegant Header */}
      <header id="app_header" className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-4 py-3.5 max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20 ring-2 ring-purple-400/20">
            <span className="text-xl">🪻</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wide bg-gradient-to-r from-purple-300 via-purple-100 to-indigo-200 bg-clip-text text-transparent">
              متجر لافند
            </h1>
            <p className="text-[10px] text-purple-400/80 font-medium">Lavender Deodorant Studio</p>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav id="header_nav_tabs" className="flex items-center bg-slate-900/60 p-1 rounded-xl border border-slate-800/80">
          <button 
            id="tab_home_btn"
            onClick={() => { setActiveTab('home'); playClickSound('click'); }}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'home' 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>المنتج والعرض</span>
          </button>
          
          <button 
            id="tab_video_btn"
            onClick={() => { setActiveTab('video'); playClickSound('click'); }}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 relative ${
              activeTab === 'video' 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>صانع الإعلان التفاعلي</span>
            <span className="absolute -top-1.5 -left-1.5 bg-red-500 text-[8px] text-white px-1.5 py-0.5 rounded-full font-bold scale-90">مباشر</span>
          </button>

          <button 
            id="tab_copywriter_btn"
            onClick={() => { setActiveTab('copywriter'); playClickSound('click'); }}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'copywriter' 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
            <span>مُولّد النصوص بالذكاء الاصطناعي</span>
          </button>
        </nav>

        {/* Quick Cart Indicator */}
        <button 
          id="quick_cart_btn"
          onClick={() => { setActiveTab('order'); playClickSound('click'); }}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-950 to-indigo-950 text-purple-300 border border-purple-500/30 px-3.5 py-1.5 rounded-xl text-xs font-semibold hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/5 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 text-purple-400" />
          <span className="hidden sm:inline">طلب سريع</span>
          <span className="bg-purple-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">{quantity}</span>
        </button>
      </header>

      {/* Main Content Stage */}
      <main className="max-w-7xl mx-auto px-4 mt-6">
        
        {/* ========================================================= */}
        {/* TAB 1: PRODUCT INFO & GOLDEN OFFERS                       */}
        {/* ========================================================= */}
        {activeTab === 'home' && (
          <div id="view_product_info" className="space-y-12 animate-fadeIn duration-500">
            
            {/* Elegant Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 p-6 md:p-10 rounded-3xl border border-slate-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
              
              {/* Product Visual */}
              <div className="lg:col-span-5 flex justify-center relative">
                <div className="relative group w-full max-w-sm">
                  {/* Decorative glowing backplate */}
                  <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-45 transition duration-500" />
                  
                  <div className="relative bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
                    <img 
                      src={productImg} 
                      alt="Lavender Antiperspirant Mockup" 
                      className="w-full aspect-square object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-purple-900/90 backdrop-blur-md text-purple-200 text-xs px-2.5 py-1 rounded-lg font-bold border border-purple-500/20">
                      قوي ومميز ✨
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 text-center">
                      <p className="text-xs text-purple-300 font-medium tracking-wider uppercase">رول-أون لافندر طبيعي فاخر</p>
                      <h3 className="text-xl font-bold text-white mt-1">حماية ونضارة للجنسين</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Copy & Marketing Arguments */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 animate-bounce" />
                  <span>المنتج الأكثر طلباً لهذا الصيف</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
                  مانع تعرق <span className="bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">لافند الطبيعي</span> الفاخر
                  <br />
                  <span className="text-xl md:text-2xl font-light text-slate-400">قوة حماية مطلقة تدوم 48 ساعة برائحة الخزامى الفرنسية</span>
                </h2>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  وداعاً للروائح والبلل مع منتجنا الطبيعي المبتكر المناسب تماماً للنساء والرجال. صُمم خصيصاً ليمنحك ثقة حديدية طوال اليوم بفضل مستخلصات زهور اللافندر الملطفة والمقاومة للبكتيريا، بتركيبة آمنة تماماً وخالية من مسببات الحساسية أو الألمنيوم.
                </p>

                {/* Key specs bento box */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                    <ShieldCheck className="w-6 h-6 text-purple-400 mx-auto mb-1.5" />
                    <p className="text-[10px] text-slate-400">حماية فائقة</p>
                    <p className="text-xs font-bold text-slate-200">48 ساعة متواصلة</p>
                  </div>
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                    <Sparkles className="w-6 h-6 text-purple-400 mx-auto mb-1.5" />
                    <p className="text-[10px] text-slate-400">تركيبة آمنة</p>
                    <p className="text-xs font-bold text-slate-200">طبيعية 100%</p>
                  </div>
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                    <Users className="w-6 h-6 text-purple-400 mx-auto mb-1.5" />
                    <p className="text-[10px] text-slate-400">للاستخدام</p>
                    <p className="text-xs font-bold text-slate-200">للنساء والرجال</p>
                  </div>
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-center">
                    <Gift className="w-6 h-6 text-purple-400 mx-auto mb-1.5" />
                    <p className="text-[10px] text-slate-400">عرض عائلي</p>
                    <p className="text-xs font-bold text-slate-200">10 قطع موفرة</p>
                  </div>
                </div>

                {/* Main Offer CTA Card */}
                <div className="bg-gradient-to-r from-purple-950/60 to-indigo-950/60 border border-purple-500/40 p-6 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 bg-yellow-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-br-xl shadow-md">
                    أفضل سعر متاح
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <p className="text-xs text-purple-300 font-bold tracking-wide uppercase">العرض الحصري الشامل</p>
                      <h4 className="text-2xl font-black text-white mt-1">
                        10 قطع كاملة بـ <span className="text-yellow-400 text-glow">1750 دينار</span> فقط!
                      </h4>
                      <p className="text-xs text-slate-300 mt-1">سعر القطعة المفردة خارج العرض هو 450 دينار (توفير أكثر من 60%)!</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => { setActiveTab('video'); playClickSound('success'); }}
                        className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs md:text-sm px-5 py-3 rounded-xl transition duration-300 flex items-center gap-2 cursor-pointer hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        <Video className="w-4 h-4" />
                        <span>شاهد فيديو الاستعمال</span>
                      </button>
                      <button 
                        onClick={() => { setActiveTab('order'); playClickSound('bubble'); }}
                        className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black text-xs md:text-sm px-5 py-3 rounded-xl transition duration-300 flex items-center gap-2 cursor-pointer shadow-md"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>اطلب العرض الآن</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Bundle Calculator & Interactive Pricing */}
            <div className="bg-slate-900/20 border border-slate-900 p-8 rounded-3xl space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-2xl font-bold text-white">محاكي التوفير الذكي من متجر لافند 💰</h3>
                <p className="text-slate-400 text-sm">عدّل عدد القطع التي ترغب بطلبها لترى حجم الخصم ومقدار التوفير الفعلي الذي تحصل عليه مع العرض العائلي.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
                {/* Controls */}
                <div className="md:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-850 space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400 font-medium">الكمية المطلوبة:</span>
                      <span className="text-purple-400 font-bold text-lg bg-purple-950/50 px-3 py-1 rounded-lg border border-purple-500/20">{quantity} قطع</span>
                    </div>
                    {/* Slider */}
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      step="10" 
                      value={quantity}
                      onChange={(e) => { setQuantity(Number(e.target.value)); playClickSound('click'); }}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold px-1">
                      <span>10 قطع (العادي)</span>
                      <span>30 قطعة (موصى به)</span>
                      <span>50 قطعة (عائلي كبير)</span>
                      <span>100 قطعة (موزعين)</span>
                    </div>
                  </div>

                  {/* Quick Select Buttons */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[10, 20, 30, 50, 100].map((num) => (
                      <button
                        key={num}
                        onClick={() => { setQuantity(num); playClickSound('bubble'); }}
                        className={`px-3 py-2 rounded-lg text-xs font-bold transition duration-300 ${
                          quantity === num 
                            ? 'bg-purple-600/20 text-purple-300 border-2 border-purple-500/60 shadow' 
                            : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800'
                        }`}
                      >
                        {num === 10 ? '📦 بوكس مفرد (10 قطع)' : `${num} قطعة`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculation Screen */}
                <div className="md:col-span-5 bg-gradient-to-br from-purple-950/40 to-slate-950 p-6 rounded-2xl border border-purple-900/30 text-center space-y-4">
                  <p className="text-xs text-purple-300 font-bold uppercase tracking-wider">الحساب الإجمالي التقديري</p>
                  
                  <div className="space-y-1">
                    <p className="text-4xl font-black text-yellow-400 text-glow">{computedPrice.toLocaleString()} دينار</p>
                    <p className="text-[10px] text-slate-400">لعدد {quantity} عبوة فاخرة</p>
                  </div>

                  <div className="h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

                  <div className="flex justify-between text-xs px-2">
                    <span className="text-slate-400">السعر خارج العرض:</span>
                    <span className="text-slate-500 line-through">{(quantity * 450).toLocaleString()} دينار</span>
                  </div>

                  <div className="flex justify-between text-xs px-2 text-green-400 font-bold bg-green-950/30 py-1.5 rounded-lg border border-green-500/20">
                    <span>قيمة توفيرك الحالية:</span>
                    <span>{savingsAmount.toLocaleString()} دينار (خصم 60%)</span>
                  </div>

                  <button 
                    onClick={() => { setActiveTab('order'); playClickSound('success'); }}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm py-3 rounded-xl transition duration-300 shadow-md shadow-purple-950/50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>تأكيد طلب الـ {quantity} قطع</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-900/30 border border-slate-900">
                <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">مكونات طبيعية 100%</h4>
                  <p className="text-xs text-slate-400 mt-1">نحن لا نستخدم الألمنيوم، البارابين، أو الكحول الضار بالبشرة، مما يمنع التحسس والاسمرار تماماً.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-900/30 border border-slate-900">
                <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">جودة مستوردة فاخرة</h4>
                  <p className="text-xs text-slate-400 mt-1">مصنوع بمقاييس دقيقة جداً مع مادة اللافندر العطرية الطبيعية المستوردة من فرنسا مباشرة.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-900/30 border border-slate-900">
                <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Sparkle className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">العرض الأقوى في العراق</h4>
                  <p className="text-xs text-slate-400 mt-1">سعر 1750 دينار لـ 10 قطع هو أفضل عرض عائلي وتجاري يجمع بين الجودة والسعر الزهيد.</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: INTERACTIVE VIDEO AD SIMULATOR                      */}
        {/* ========================================================= */}
        {activeTab === 'video' && (
          <div id="view_video_simulator" className="space-y-8 animate-fadeIn duration-500">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl font-extrabold text-white">استوديو الإعلانات المرئية التفاعلي 🎬</h2>
              <p className="text-slate-400 text-sm md:text-base">
                صممنا لك نظام محاكاة فيديو حقيقي فائق الجودة يعرض طريقة الاستعمال للبنت والشاب مع إمكانية كتابة العلامة المائية لـ <strong>"متجر لافند"</strong> والتحكم بمواقعها وتأثيراتها البصرية ومزامنة الدبلجة الصوتية باللغة العربية!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Customization Controls (Lg: col-span-5) */}
              <div className="lg:col-span-5 bg-slate-900/40 p-6 rounded-3xl border border-slate-900 space-y-6">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Sliders className="w-5 h-5 text-purple-400" />
                  <h3 className="font-bold text-white text-lg">لوحة التحكم بالإعلان</h3>
                </div>

                {/* Video Template / Campaign Selector */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 font-bold block">1. نمط وسيناريو الإعلان:</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => { setSelectedTemplate('women'); playClickSound('click'); setVideoTime(0); }}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedTemplate === 'women'
                          ? 'bg-purple-600/20 text-purple-200 border-purple-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-900'
                      }`}
                    >
                      <User className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                      <span className="text-xs font-bold block">للنساء (البنت)</span>
                    </button>
                    
                    <button
                      onClick={() => { setSelectedTemplate('men'); playClickSound('click'); setVideoTime(0); }}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedTemplate === 'men'
                          ? 'bg-purple-600/20 text-purple-200 border-purple-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-900'
                      }`}
                    >
                      <User className="w-4 h-4 mx-auto mb-1 text-indigo-400" />
                      <span className="text-xs font-bold block">للرجال (الشاب)</span>
                    </button>

                    <button
                      onClick={() => { setSelectedTemplate('unisex'); playClickSound('click'); setVideoTime(0); }}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedTemplate === 'unisex'
                          ? 'bg-purple-600/20 text-purple-200 border-purple-500'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-900'
                      }`}
                    >
                      <Users className="w-4 h-4 mx-auto mb-1 text-pink-400" />
                      <span className="text-xs font-bold block">العائلي (للجميع)</span>
                    </button>
                  </div>
                </div>

                {/* Filter Selector */}
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 font-bold block">2. الفلتر اللوني الكوزمتك:</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { key: 'natural', name: 'طبيعي' },
                      { key: 'lavender', name: 'لافندر بنفسجي' },
                      { key: 'warm', name: 'ذهبي دافئ' },
                      { key: 'noir', name: 'أبيض وأسود فاخر' }
                    ].map((f) => (
                      <button
                        key={f.key}
                        onClick={() => { setVideoFilter(f.key as any); playClickSound('click'); }}
                        className={`py-2 px-1 rounded-lg text-[11px] font-bold border text-center transition ${
                          videoFilter === f.key
                            ? 'bg-purple-600/10 text-purple-300 border-purple-500'
                            : 'bg-slate-950 text-slate-400 border-slate-850 hover:bg-slate-900'
                        }`}
                      >
                        {f.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Watermark customization */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/60 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <span className="text-xs font-bold text-slate-300">علامة مائية مخصصة (Watermark)</span>
                    <input 
                      type="checkbox" 
                      checked={showWatermark}
                      onChange={(e) => { setShowWatermark(e.target.checked); playClickSound('bubble'); }}
                      className="w-4 h-4 accent-purple-500 rounded cursor-pointer"
                    />
                  </div>

                  {showWatermark && (
                    <div className="space-y-3.5">
                      <div className="space-y-1">
                        <label className="text-[10px] text-slate-400 block">نص العلامة المائية (اسم المتجر):</label>
                        <input 
                          type="text"
                          value={watermarkText}
                          onChange={(e) => setWatermarkText(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500"
                          placeholder="مثلاً: متجر لافند"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-400 block">الموقع المفضل:</label>
                          <select
                            value={watermarkPos}
                            onChange={(e) => setWatermarkPos(e.target.value as any)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-[11px] text-slate-300 focus:outline-none"
                          >
                            <option value="top-right">أعلى اليمين</option>
                            <option value="top-left">أعلى اليسار</option>
                            <option value="bottom-right">أسفل اليمين</option>
                            <option value="bottom-left">أسفل اليسار</option>
                            <option value="center">وسط الشاشة</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-400 block">حجم الخط:</label>
                          <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-center">
                            {(['sm', 'md', 'lg'] as const).map((sz) => (
                              <button
                                key={sz}
                                onClick={() => setWatermarkSize(sz)}
                                className={`flex-1 py-1 text-[10px] font-bold rounded ${
                                  watermarkSize === sz 
                                    ? 'bg-purple-600 text-white' 
                                    : 'text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                {sz === 'sm' ? 'صغير' : sz === 'md' ? 'وسط' : 'كبير'}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] text-slate-400">
                          <span>شفافية الشعار:</span>
                          <span>{Math.round(watermarkOpacity * 100)}%</span>
                        </div>
                        <input 
                          type="range"
                          min="0.2"
                          max="1.0"
                          step="0.05"
                          value={watermarkOpacity}
                          onChange={(e) => setWatermarkOpacity(Number(e.target.value))}
                          className="w-full accent-purple-500 h-1 bg-slate-800 rounded-lg"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Voiceover and sound effects settings */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/60 space-y-3.5">
                  <h4 className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-purple-400" />
                    <span>التعليق الصوتي والمؤثرات (Audio Voiceover)</span>
                  </h4>

                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    يستخدم التطبيق تقنية <strong>تخليق الصوت الآلي باللغة العربية (TTS)</strong> لمحاكاة دبلجة الإعلان في الخلفية بصوت دافئ متوافق مع المقطع!
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-slate-300">حالة الصوت العام:</span>
                    <button
                      onClick={() => { setIsMuted(!isMuted); playClickSound('bubble'); }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        isMuted 
                          ? 'bg-red-950/40 text-red-400 border border-red-500/20' 
                          : 'bg-green-950/40 text-green-400 border border-green-500/20'
                      }`}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-3.5 h-3.5" />
                          <span>كتم الصوت</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>صوت فعال (عربي)</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Physical Smartphone Rendering (Lg: col-span-7) */}
              <div className="lg:col-span-7 flex flex-col items-center">
                
                {/* Physical Phone Frame Wrapper */}
                <div className="w-full max-w-[340px] aspect-[9/16] rounded-[48px] border-[10px] border-slate-800 bg-black shadow-2xl relative overflow-hidden ring-4 ring-purple-600/10 flex flex-col select-none">
                  
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-slate-800 rounded-b-2xl z-30 flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full mr-4" />
                    <div className="w-10 h-1.5 bg-slate-900 rounded-full" />
                  </div>

                  {/* VIDEO STAGE CANVAS (Pans and Zooms depending on play state and filters) */}
                  <div className={`flex-1 w-full relative overflow-hidden bg-slate-950`}>
                    
                    {/* Active Screen Filter Overlay */}
                    <div className={`absolute inset-0 z-10 pointer-events-none transition-all duration-300 ${
                      videoFilter === 'natural' ? '' :
                      videoFilter === 'lavender' ? 'bg-purple-800/10 backdrop-hue-rotate-15' :
                      videoFilter === 'warm' ? 'bg-amber-600/10 sepia-[0.15] contrast-105' :
                      'grayscale contrast-[1.15]'
                    }`} />

                    {/* DYNAMIC SCENE PANNING IMAGE */}
                    <div className="absolute inset-0 w-full h-full">
                      {/* Scene 1 (0 to 4s) / Scene 3 (9s to 15s) shows girl applying, Scene 2 (4s to 9s) shows product */}
                      {currentSceneIndex === 0 ? (
                        <img 
                          src={girlImg} 
                          alt="Real Usage Simulator" 
                          className={`w-full h-full object-cover transition-all duration-[4000ms] ease-out origin-center ${
                            isPlaying ? 'scale-110 translate-y-2' : 'scale-100'
                          }`}
                        />
                      ) : currentSceneIndex === 1 ? (
                        <img 
                          src={productImg} 
                          alt="Product detail" 
                          className={`w-full h-full object-cover transition-all duration-[5000ms] ease-out origin-bottom ${
                            isPlaying ? 'scale-115 rotate-1' : 'scale-100'
                          }`}
                        />
                      ) : (
                        // Scene 3
                        <div className="w-full h-full relative">
                          <img 
                            src={girlImg} 
                            alt="Final Offer call" 
                            className={`w-full h-full object-cover transition-all duration-[6000ms] ease-out ${
                              isPlaying ? 'scale-105 -translate-x-2' : 'scale-100'
                            }`}
                          />
                          {/* Offer pricing float card inside video */}
                          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 text-center">
                            <div className="bg-yellow-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full mb-1 animate-bounce">
                              عرض الـ 10 قطع
                            </div>
                            <h4 className="text-2xl font-black text-white leading-tight">10 قطع كاملة</h4>
                            <p className="text-3xl font-black text-yellow-400 mt-1">بـ 1750 دينار!</p>
                            <span className="text-[9px] text-slate-300 mt-2">متجر لافند المعتمد 🪻</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* DYNAMIC PETALS CLOUD overlaying on play */}
                    {isPlaying && (
                      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                        {Array.from({ length: 8 }).map((_, idx) => (
                          <div 
                            key={idx}
                            className="absolute text-purple-300/40 select-none animate-[ping_4s_infinite]"
                            style={{
                              left: `${(idx * 15) + (videoTime * 2) % 20}%`,
                              top: `${-10 + (idx * 20) + (videoTime * 5) % 30}%`,
                              fontSize: '14px',
                              transform: `rotate(${idx * 45 + videoTime * 20}deg)`,
                              transition: 'all 0.5s ease-out'
                            }}
                          >
                            🪻
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CUSTOM WATERMARK "متجر لافند" OVERLAY */}
                    {showWatermark && (
                      <div 
                        className={`absolute z-20 transition-all duration-300 text-white font-extrabold select-none pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] border border-white/20 px-2.5 py-1 rounded-xl bg-slate-950/40 backdrop-blur-sm ${
                          watermarkPos === 'top-right' ? 'top-8 right-4' :
                          watermarkPos === 'top-left' ? 'top-8 left-4' :
                          watermarkPos === 'bottom-right' ? 'bottom-20 right-4' :
                          watermarkPos === 'bottom-left' ? 'bottom-20 left-4' :
                          'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-3/4'
                        }`}
                        style={{
                          opacity: watermarkOpacity,
                          fontSize: watermarkSize === 'sm' ? '10px' : watermarkSize === 'md' ? '12px' : '15px'
                        }}
                      >
                        {watermarkText}
                      </div>
                    )}

                    {/* TikTok/Instagram Styled Icons (Hearts, Comments, Share) */}
                    <div className="absolute right-3 top-1/3 z-20 flex flex-col gap-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition active:scale-95 border border-white/10">
                          <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
                        </div>
                        <span className="text-[10px] text-white font-bold mt-1 drop-shadow-md">24.5K</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition active:scale-95 border border-white/10">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] text-white font-bold mt-1 drop-shadow-md">3.8K</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition active:scale-95 border border-white/10">
                          <Share2 className="w-5 h-5 text-yellow-400" />
                        </div>
                        <span className="text-[10px] text-white font-bold mt-1 drop-shadow-md">مشاركة</span>
                      </div>
                    </div>

                    {/* Dynamic Subtitle captions synchronised */}
                    <div className="absolute bottom-12 inset-x-3 z-20 bg-slate-950/80 backdrop-blur-md border border-purple-500/20 p-2.5 rounded-2xl text-center shadow-lg">
                      <p className="text-[11px] text-purple-300 font-extrabold tracking-wide mb-0.5">
                        {activeCampaign.videoScript.title}
                      </p>
                      <p className="text-xs text-white font-medium leading-relaxed">
                        {currentScene.textOverlay}
                      </p>
                    </div>

                    {/* VIDEO PROGRESS BAR (Interactive Timeline) */}
                    <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 py-2.5 px-3 border-t border-slate-900 flex items-center gap-2 z-20">
                      <button 
                        onClick={handlePlayToggle}
                        className="p-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition shrink-0"
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>

                      {/* Slider timeline */}
                      <div className="flex-1 h-1 bg-slate-800 rounded relative overflow-hidden">
                        <div 
                          className="h-full bg-purple-500 rounded"
                          style={{ width: `${(videoTime / videoDuration) * 100}%` }}
                        />
                      </div>

                      {/* Time Code */}
                      <span className="text-[9px] text-slate-400 font-mono shrink-0">
                        0:{videoTime < 10 ? `0${Math.floor(videoTime)}` : Math.floor(videoTime)} / 0:15
                      </span>
                    </div>

                  </div>
                </div>

                {/* Video Info Card & Narration Text */}
                <div className="w-full max-w-lg bg-slate-900/20 border border-slate-900 p-5 rounded-2xl mt-4 space-y-3 text-right">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="bg-purple-950/80 text-purple-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-purple-500/20">
                      نص مشهد {currentSceneIndex + 1} حالياً
                    </span>
                    <h4 className="font-bold text-white text-sm">سيناريو التعليق الصوتي الجاري 🔊</h4>
                  </div>
                  
                  <p className="text-slate-300 text-xs leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-850">
                    "{currentScene.audio}"
                  </p>
                  
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <Info className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>انقر على زر <strong>تشغيل الفيديو</strong> لتنشيط حركة الكاميرا والتعليق الصوتي الآلي.</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: AI AD CAMPAIGN & SCRIPT GENERATOR                  */}
        {/* ========================================================= */}
        {activeTab === 'copywriter' && (
          <div id="view_ai_copywriter" className="space-y-8 animate-fadeIn duration-500">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-white">مُولّد الحملات الإعلانية الذكي 🔮</h2>
              <p className="text-slate-400 text-sm">
                استعمل الذكاء الاصطناعي (Gemini 3.5 Flash) لتوليد نصوص إعلانية حصرية لـ <strong>متجر لافند</strong>، متطابقة مع عرض الـ 10 قطع بـ 1750 دينار!
              </p>
            </div>

            {/* Config & Input grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Generator input box (Lg: col-span-4) */}
              <div className="lg:col-span-4 bg-slate-900/40 p-6 rounded-3xl border border-slate-900 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                  <Sliders className="w-5 h-5 text-purple-400" />
                  <h3 className="font-bold text-white text-base">إعدادات الحملة</h3>
                </div>

                {/* Target Audience */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">الجمهور المستهدف بالتحديد:</label>
                  <textarea 
                    value={customAudience}
                    onChange={(e) => setCustomAudience(e.target.value)}
                    rows={3}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500 resize-none leading-relaxed"
                    placeholder="مثلاً: طلاب الجامعات والموظفين في العراق الباحثين عن توفير عالي للوقاية من الحر والتعرق"
                  />
                </div>

                {/* Tone select */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">نبرة الصوت للتسويق:</label>
                  <select
                    value={customTone}
                    onChange={(e) => setCustomTone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none"
                  >
                    <option value="فاخرة وراقية جداً">فاخرة وراقية جداً</option>
                    <option value="حماسية وسريعة البيع (مستعجل)">حماسية وسريعة للبيع</option>
                    <option value="شعبية عراقية مألوفة ودافئة">شعبية بلهجة عراقية محببة</option>
                    <option value="طبيعية علمية تركز على الفوائد">علمية تركز على الفوائد الصحية</option>
                  </select>
                </div>

                {/* Gender selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">الجنس المستهدف للإعلان:</label>
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      { key: 'women', name: 'للنساء' },
                      { key: 'men', name: 'للرجال' },
                      { key: 'unisex', name: 'للجنسين' }
                    ].map((g) => (
                      <button
                        key={g.key}
                        onClick={() => setCustomGender(g.key as any)}
                        className={`py-1.5 rounded-lg text-[11px] font-bold border text-center transition ${
                          customGender === g.key
                            ? 'bg-purple-600/20 text-purple-300 border-purple-500'
                            : 'bg-slate-950 text-slate-400 border-slate-850 hover:bg-slate-900'
                        }`}
                      >
                        {g.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Offer Details Lock */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">العرض والأسعار المثبتة:</label>
                  <input 
                    type="text"
                    disabled
                    value="10 قطع بسعر 1750 دينار"
                    className="w-full bg-slate-950 border border-slate-900 rounded-xl px-3 py-2 text-xs text-slate-400 font-mono font-bold cursor-not-allowed"
                  />
                </div>

                {/* Submit Action */}
                <button
                  onClick={handleGenerateAICopy}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-xs md:text-sm py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-purple-950"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>جاري التوليد من الذكاء الاصطناعي...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
                      <span>توليد إعلان مبتكر الآن</span>
                    </>
                  )}
                </button>

                {errorMessage && (
                  <p className="text-[10px] text-red-400 bg-red-950/20 p-2.5 rounded-xl border border-red-500/20 text-center">
                    {errorMessage}
                  </p>
                )}
              </div>

              {/* Generated Content View area (Lg: col-span-8) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Notice message */}
                <div className="bg-purple-950/30 border border-purple-500/20 p-4 rounded-2xl flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5 animate-pulse" />
                  <div className="text-xs leading-relaxed text-purple-300">
                    {generatedCampaign ? (
                      <strong>تم التوليد بنجاح!</strong>
                    ) : (
                      <strong>تم التحميل مسبقاً!</strong>
                    )}{' '}
                    لقد قمنا بتصميم وصياغة حزمة تسويقية متكاملة تبرز مانع تعرق لافند القوي والمميز وتفاصيل بوكس التوفير لـ 10 قطع. يمكنك نسخ هذه النصوص بنجاح والبدء بحملتك الترويجية!
                  </div>
                </div>

                {/* Video storyboard display */}
                <div className="bg-slate-900/30 p-6 rounded-3xl border border-slate-900 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <button 
                      onClick={() => copyToClipboard(JSON.stringify(activeCampaign.videoScript, null, 2))}
                      className="text-purple-400 hover:text-purple-300 text-xs font-bold flex items-center gap-1.5 transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>نسخ الهيكل الكامل</span>
                    </button>
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <Video className="w-5 h-5 text-purple-400" />
                      <span>1. سيناريو تصوير الفيديو الترويجي (TikTok / Reels)</span>
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-850 font-bold">
                    العنوان: {activeCampaign.videoScript.title} <br />
                    الافتتاحية الجاذبة: "{activeCampaign.videoScript.hook}"
                  </p>

                  <div className="space-y-3.5">
                    {activeCampaign.videoScript.scenes.map((scene: any, idx: number) => (
                      <div key={idx} className="bg-slate-950/80 p-4 rounded-xl border border-slate-900 grid grid-cols-1 md:grid-cols-12 gap-3">
                        <div className="md:col-span-2 text-purple-400 font-mono text-xs font-bold">
                          {scene.time}
                        </div>
                        <div className="md:col-span-10 space-y-2 text-right">
                          <p className="text-xs text-slate-300">
                            <strong>اللقطة البصرية:</strong> {scene.visual}
                          </p>
                          <p className="text-xs text-purple-200">
                            <strong>الكلام والمؤثر الصوتي:</strong> "{scene.audio}"
                          </p>
                          <p className="text-[10px] text-yellow-400">
                            <strong>كابشن الشاشة المكتوب:</strong> {scene.textOverlay}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social media post and captions */}
                <div className="bg-slate-900/30 p-6 rounded-3xl border border-slate-900 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <button 
                      onClick={() => copyToClipboard(`${activeCampaign.socialPost.headline}\n\n${activeCampaign.socialPost.body}\n\n${activeCampaign.socialPost.hashtags.map((h: string) => `#${h}`).join(' ')}`)}
                      className="text-purple-400 hover:text-purple-300 text-xs font-bold flex items-center gap-1.5 transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>نسخ المنشور</span>
                    </button>
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <FileText className="w-5 h-5 text-indigo-400" />
                      <span>2. كابشن ومنشور شبكات التواصل الاجتماعي</span>
                    </h3>
                  </div>

                  <div className="bg-slate-950 p-5 rounded-xl border border-slate-900 space-y-4 text-right">
                    <p className="text-sm font-bold text-purple-300">{activeCampaign.socialPost.headline}</p>
                    <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">{activeCampaign.socialPost.body}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {activeCampaign.socialPost.hashtags.map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] text-indigo-400 bg-indigo-950/40 px-2 py-0.5 rounded-full border border-indigo-500/10 font-bold">
                          #{tag.replace('#', '')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Influencer Brief */}
                <div className="bg-slate-900/30 p-6 rounded-3xl border border-slate-900 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <button 
                      onClick={() => copyToClipboard(activeCampaign.influencerBrief.keyPoints.join('\n'))}
                      className="text-purple-400 hover:text-purple-300 text-xs font-bold flex items-center gap-1.5 transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>نسخ النقاط الرئيسية</span>
                    </button>
                    <h3 className="font-bold text-white text-base flex items-center gap-2">
                      <Users className="w-5 h-5 text-pink-400" />
                      <span>3. إرشادات وتوجيهات صانعي المحتوى والمشاهير</span>
                    </h3>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 space-y-3 text-right">
                    <p className="text-xs text-slate-400 font-bold">
                      {activeCampaign.influencerBrief.intro}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-xs text-slate-300 pr-2">
                      {activeCampaign.influencerBrief.keyPoints.map((point: string, i: number) => (
                        <li key={i} className="leading-relaxed list-none flex items-start gap-2 justify-end">
                          <span>{point}</span>
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: INTERACTIVE ORDER SIMULATOR                        */}
        {/* ========================================================= */}
        {activeTab === 'order' && (
          <div id="view_order_tab" className="space-y-8 animate-fadeIn duration-500">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-white">إكمال الطلب السريع 🛍️</h2>
              <p className="text-slate-400 text-sm">أدخل معلوماتك بالأسفل للحصول على الفاتورة وتجربة إرسال طلب شراء مانع التعرق الفاخر لـ {quantity} قطع.</p>
            </div>

            <div className="max-w-xl mx-auto bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-slate-900">
              
              {!orderSubmitted ? (
                <form id="order_sim_form" onSubmit={generateOrder} className="space-y-5 text-right">
                  <div className="bg-purple-950/20 border border-purple-500/20 p-4 rounded-2xl text-center space-y-1">
                    <p className="text-[11px] text-purple-300 font-bold uppercase tracking-wide">المنتجات في السلة حالياً:</p>
                    <h4 className="text-lg font-bold text-white">بوكس التوفير من مانع تعرق لافند ({quantity} قطع)</h4>
                    <p className="text-xl font-black text-yellow-400 mt-1">{computedPrice.toLocaleString()} دينار فقط!</p>
                  </div>

                  {/* Buyer Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">اسم المستلم الثلاثي:</label>
                    <input 
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 text-right"
                      placeholder="مثال: زهراء أحمد الموسوي"
                    />
                  </div>

                  {/* Buyer Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">رقم الهاتف النشط (واتساب مفضل):</label>
                    <input 
                      type="tel"
                      required
                      value={buyerPhone}
                      onChange={(e) => setBuyerPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 text-left font-mono"
                      placeholder="07XXXXXXXX"
                    />
                  </div>

                  {/* City Select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">المحافظة / المدينة:</label>
                    <select
                      value={buyerCity}
                      onChange={(e) => setBuyerCity(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl p-3 text-sm text-slate-200 focus:outline-none"
                    >
                      <option value="بغداد">بغداد (العاصمة)</option>
                      <option value="البصرة">البصرة</option>
                      <option value="الموصل">الموصل</option>
                      <option value="أربيل">أربيل</option>
                      <option value="النجف">النجف</option>
                      <option value="كربلاء">كربلاء</option>
                      <option value="بابل">بابل</option>
                      <option value="السليمانية">السليمانية</option>
                      <option value="ذي قار">ذي قار</option>
                    </select>
                  </div>

                  {/* Extra Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">ملاحظات التوصيل (اختياري):</label>
                    <textarea 
                      value={buyerNotes}
                      onChange={(e) => setBuyerNotes(e.target.value)}
                      rows={2}
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500 resize-none text-right"
                      placeholder="مثلاً: يرجى الاتصال قبل الوصول بنصف ساعة"
                    />
                  </div>

                  {/* Submit Order */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-black text-sm py-3.5 rounded-xl transition duration-300 shadow-lg shadow-purple-950 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Check className="w-5 h-5 text-slate-950" />
                    <span>تأكيد وإرسال طلب الشراء المحاكي</span>
                  </button>
                </form>
              ) : (
                <div className="text-center space-y-6 py-4 animate-scaleUp">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 flex items-center justify-center mx-auto mb-2 animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">تم استلام طلبك بنجاح! 🎉</h3>
                    <p className="text-xs text-slate-400">لقد تم إنشاء فاتورة الشراء الرقمية لمتجر لافند.</p>
                  </div>

                  {/* Receipt mockup */}
                  <div className="bg-slate-950 border border-slate-850 rounded-2xl p-6 text-right space-y-4 max-w-sm mx-auto shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex justify-between items-center border-b border-slate-900 pb-2.5">
                      <span className="text-[10px] text-green-400 font-bold bg-green-950/40 px-2 py-0.5 rounded border border-green-500/20">جاهز للتوصيل</span>
                      <h4 className="font-extrabold text-sm text-slate-200">فاتورة متجر لافند # {orderId}</h4>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-300 font-bold">{buyerName}</span>
                        <span className="text-slate-500">العميل:</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300 font-mono">{buyerPhone}</span>
                        <span className="text-slate-500">رقم الهاتف:</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-300">{buyerCity}</span>
                        <span className="text-slate-500">العنوان:</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-900 pt-2 text-purple-300">
                        <span>{quantity} قطع مانع تعرق</span>
                        <span className="text-slate-500">تفاصيل المنتج:</span>
                      </div>
                    </div>

                    <div className="h-[1px] bg-dashed bg-slate-900 my-1" />

                    <div className="flex justify-between items-center text-sm font-extrabold">
                      <span className="text-yellow-400">{computedPrice.toLocaleString()} دينار</span>
                      <span className="text-slate-200">المجموع النهائي (شامل الخصم):</span>
                    </div>
                  </div>

                  {/* Reset order simulation button */}
                  <div className="pt-2 flex justify-center gap-2 max-w-xs mx-auto">
                    <button 
                      onClick={() => { setOrderSubmitted(false); setBuyerName(''); setBuyerPhone(''); playClickSound('bubble'); }}
                      className="flex-1 bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 text-xs py-2.5 rounded-xl transition font-bold"
                    >
                      طلب جديد
                    </button>
                    <button 
                      onClick={() => { setActiveTab('home'); playClickSound('click'); }}
                      className="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-xs py-2.5 rounded-xl transition font-bold"
                    >
                      عودة للمتجر
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

      </main>

      {/* Footer Branding */}
      <footer className="border-t border-slate-900/60 mt-20 pt-8 pb-12 text-center max-w-7xl mx-auto px-4 space-y-4">
        <p className="text-xs text-slate-500 leading-relaxed max-w-lg mx-auto">
          جميع حقوق المحاكاة الإعلانية والبرمجة محفوظة لـ <strong>متجر لافند 🪻</strong>. 
          <br />
          تم التطوير بكل فخر لمساندة رواد الأعمال وصناع المحتوى التجاري في العراق والوطن العربي.
        </p>
        <div className="flex justify-center gap-6 text-[11px] font-bold text-purple-400">
          <a href="#view_product_info" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }} className="hover:text-purple-300 transition">المنتجات</a>
          <a href="#view_video_simulator" onClick={(e) => { e.preventDefault(); setActiveTab('video'); }} className="hover:text-purple-300 transition">صانع الفيديو</a>
          <a href="#view_ai_copywriter" onClick={(e) => { e.preventDefault(); setActiveTab('copywriter'); }} className="hover:text-purple-300 transition">مولد الإعلانات</a>
        </div>
      </footer>

    </div>
  );
}
