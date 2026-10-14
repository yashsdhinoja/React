import React, { useState, useEffect, useRef } from 'react';
import {
  Wand2,
  Sparkles,
  RefreshCw,
  Monitor,
  Tablet,
  Smartphone,
  Layout,
  Eye,
  Settings,
  Layers,
  Send,
  Image as ImageIcon,
  Star,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Download,
  Copy,
  Check,
  Sun,
  Moon,
  Flame,
  Zap,
  Coffee,
  Dumbbell,
  Home,
  Camera,
  Laptop,
  Shield,
  Award,
  Users,
  Target,
  Menu,
  X,
  Bot,
  Sliders,
  Maximize2,
  Minimize2,
  PanelLeftClose,
  PanelLeft,
  PenTool,
  MessageSquare,
  Globe,
  Palette,
  Briefcase,
  Play,
  Heart,
  HelpCircle
} from 'lucide-react';

// Curated image collection mapped to standard themes & keywords to ensure immediate visual quality
const CURATED_IMAGES = {
  bakery: [
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80"
  ],
  tech: [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  ],
  fitness: [
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
  ],
  realestate: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
  ],
  coffee: [
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80"
  ],
  photography: [
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
  ],
  agency: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
  ]
};

// Preset Client Briefs for instant quick testing
const PRESETS = [
  {
    id: "bakery",
    name: "Artisan Bakery",
    icon: Coffee,
    client: {
      businessName: "Aura Artisan Bakes",
      niche: "Artisanal Bakery & Organic Cafe",
      targetAudience: "Foodies, neighborhood locals, event hosts, coffee lovers",
      brandTone: "Warm & Friendly",
      visualStyle: "Cozy Rustic Modern",
      primaryColor: "#D97706"
    },
    ai: {
      focus: "Conversion focused",
      customPrompt: "Emphasize organic ingredients, sourdough traditions, and early morning fresh deliveries.",
      photoKeywords: "sourdough bread, croissant, cozy cafe, pastry display"
    }
  },
  {
    id: "tech",
    name: "SaaS AI Platform",
    icon: Laptop,
    client: {
      businessName: "ApexVision AI",
      niche: "Enterprise AI Analytics",
      targetAudience: "CTOs, Product Managers, Tech Founders, Data Engineers",
      brandTone: "Bold & Innovative",
      visualStyle: "Cyber Minimalist Dark",
      primaryColor: "#3B82F6"
    },
    ai: {
      focus: "SEO optimized",
      customPrompt: "Highlight real-time data streaming, high accuracy predictive models, and enterprise security.",
      photoKeywords: "abstract data, futuristic tech, servers, analytics dashboard"
    }
  },
  {
    id: "fitness",
    name: "Fitness Studio",
    icon: Dumbbell,
    client: {
      businessName: "Pulse Hybrid Fitness",
      niche: "HIIT & Functional Training Studio",
      targetAudience: "Young professionals, athletes, fitness enthusiasts",
      brandTone: "Energetic & Bold",
      visualStyle: "Vibrant Dark Athletic",
      primaryColor: "#EF4444"
    },
    ai: {
      focus: "Conversion focused",
      customPrompt: "Focus on community motivation, expert trainers, and transforming body & mindset.",
      photoKeywords: "gym workout, kettlebell, crossfit training, athlete sweat"
    }
  },
  {
    id: "realestate",
    name: "Luxury Real Estate",
    icon: Home,
    client: {
      businessName: "Elysian Private Estates",
      niche: "Luxury Waterfront Real Estate",
      targetAudience: "High-net-worth investors, luxury homebuyers, executives",
      brandTone: "Luxury & Sophisticated",
      visualStyle: "Ultra Minimalist Elegance",
      primaryColor: "#059669"
    },
    ai: {
      focus: "Creative narrative",
      customPrompt: "Highlight architectural exclusivity, ocean views, smart home technology, and discreet service.",
      photoKeywords: "modern villa, infinity pool, luxury interior, coastal estate"
    }
  }
];

// Initial default state for instant display before AI generation
const DEFAULT_SITE_DATA = {
  brandName: "Aura Artisan Bakes",
  tagline: "Handcrafted Sourdough & Specialty Coffee Crafted Daily",
  primaryColor: "#D97706",
  themeMode: "light",
  hero: {
    badge: "Baked Fresh Daily at 5:00 AM",
    headline: "Taste the Craft in Every Golden Crust",
    subheadline: "From slow-fermented organic sourdough to delicate French pastries, we bring timeless baking traditions to your neighborhood table.",
    ctaPrimary: "Explore Fresh Menu",
    ctaSecondary: "Order Catering",
    imageKeyword: "bakery bread",
    imageUrl: CURATED_IMAGES.bakery[0]
  },
  about: {
    badge: "Our Story",
    title: "Rooted in Passion, Fermented to Perfection",
    paragraphs: [
      "Founded in 2018, Aura Artisan Bakes started with a simple stone oven and an unyielding commitment to pure ingredients. We source 100% organic heirloom grains directly from family farms.",
      "Every loaf undergoes a 36-hour natural fermentation process, creating an unmistakable deep aroma, crispy caramelized crust, and airy, digestibly rich crumb."
    ],
    stats: [
      { value: "36 Hrs", label: "Fermentation Time" },
      { value: "100%", label: "Organic Flour" },
      { value: "12K+", label: "Loaves Baked Monthly" }
    ],
    imageUrl: CURATED_IMAGES.bakery[1]
  },
  features: [
    {
      title: "Wild Yeast Fermentation",
      description: "Naturally leavened dough fermented over 36 hours for rich complex depth of flavor and easy digestion.",
      iconName: "Flame",
      imageUrl: CURATED_IMAGES.bakery[2]
    },
    {
      title: "Single-Origin Specialty Brews",
      description: "Direct-trade roasted coffee beans extracted with precision to pair seamlessly with hot morning pastries.",
      iconName: "Coffee",
      imageUrl: CURATED_IMAGES.bakery[3]
    },
    {
      title: "Artisanal Catering",
      description: "Custom pastry towers, fresh breakfast boxes, and sourdough platters tailored for corporate events and celebrations.",
      iconName: "Award",
      imageUrl: CURATED_IMAGES.bakery[0]
    }
  ],
  gallery: [
    { title: "Golden Sourdough Boule", category: "Breads", imageUrl: CURATED_IMAGES.bakery[0] },
    { title: "Flaky Butter Croissants", category: "Pastries", imageUrl: CURATED_IMAGES.bakery[1] },
    { title: "Artisan Espresso Bar", category: "Beverages", imageUrl: CURATED_IMAGES.bakery[2] },
    { title: "Rustic Fruit Tarts", category: "Pastries", imageUrl: CURATED_IMAGES.bakery[3] }
  ],
  testimonials: [
    {
      name: "Elena Rostova",
      role: "Local Resident & Culinary Critic",
      quote: "The crust on their sourdough is unbelievable. You can taste the dedication in every single bite. Aura has transformed our morning routine!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marcus Vance",
      role: "Event Director, Culinary Guild",
      quote: "We ordered catering for a 200-guest event and the feedback was unanimous: the best pastries and coffee service in the city.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ],
  contact: {
    title: "Visit Our Cafe & Bakery",
    subtitle: "Stop by for hot loaves out of the oven or get in touch for custom event orders.",
    email: "hello@aurabakes.com",
    phone: "+1 (555) 382-9102",
    location: "482 Bakery Lane, Artisan District",
    ctaText: "Send Message"
  }
};

export default function App() {
  // Client & AI Input state
  const [clientReqs, setClientReqs] = useState({
    businessName: "Aura Artisan Bakes",
    niche: "Artisanal Bakery & Organic Cafe",
    targetAudience: "Foodies, neighborhood locals, event hosts",
    brandTone: "Warm & Friendly",
    visualStyle: "Cozy Rustic Modern",
    primaryColor: "#D97706"
  });

  const [aiReqs, setAiReqs] = useState({
    focus: "Conversion focused",
    customPrompt: "Emphasize organic ingredients, sourdough traditions, and fresh daily loaves.",
    photoKeywords: "sourdough bread, croissant, cozy cafe, pastry"
  });

  // Website dynamic data state
  const [siteData, setSiteData] = useState(DEFAULT_SITE_DATA);
  
  // UI Control states
  const [activeTab, setActiveTab] = useState("client"); // 'client' | 'ai' | 'presets' | 'sections'
  const [viewport, setViewport] = useState("desktop"); // 'desktop' | 'tablet' | 'mobile'
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [regeneratingSection, setRegeneratingSection] = useState(null); // 'hero', 'about', etc.
  const [generatingImageId, setGeneratingImageId] = useState(null); // tracking AI image calls
  const [toastMessage, setToastMessage] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [previewTheme, setPreviewTheme] = useState("light");
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("All");

  // Helper function for UI notifications
  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const getImageForKeyword = (keyword, index = 0) => {
    const lowerKey = (keyword || "").toLowerCase();
    let collection = CURATED_IMAGES.bakery;
    if (lowerKey.includes("tech") || lowerKey.includes("data") || lowerKey.includes("software") || lowerKey.includes("ai") || lowerKey.includes("app")) {
      collection = CURATED_IMAGES.tech;
    } else if (lowerKey.includes("fit") || lowerKey.includes("gym") || lowerKey.includes("workout") || lowerKey.includes("sport")) {
      collection = CURATED_IMAGES.fitness;
    } else if (lowerKey.includes("house") || lowerKey.includes("estate") || lowerKey.includes("room") || lowerKey.includes("villa") || lowerKey.includes("property")) {
      collection = CURATED_IMAGES.realestate;
    } else if (lowerKey.includes("coffee") || lowerKey.includes("cafe") || lowerKey.includes("drink") || lowerKey.includes("cup")) {
      collection = CURATED_IMAGES.coffee;
    } else if (lowerKey.includes("photo") || lowerKey.includes("camera") || lowerKey.includes("art") || lowerKey.includes("studio")) {
      collection = CURATED_IMAGES.photography;
    } else if (lowerKey.includes("agency") || lowerKey.includes("office") || lowerKey.includes("team") || lowerKey.includes("business")) {
      collection = CURATED_IMAGES.agency;
    }
    return collection[index % collection.length];
  };

  const handleGenerateWebsite = async () => {
    setIsGenerating(true);
    showNotification("✨ AI is analyzing requirements & building your site...");

    const apiKey = ""; // Canvas runtime provides the key automatically
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

    const systemPrompt = `You are a world-class UI/UX web designer, brand strategist, and copywriter.
Generate a structured JSON response for a full landing page based on the client requirements and AI directives.
Ensure tone is natural, compelling, tailored precisely to the target audience, and free of generic fluff.`;

    const userPrompt = `Build website content with the following specifications:
- Business Name: ${clientReqs.businessName}
- Industry/Niche: ${clientReqs.niche}
- Target Audience: ${clientReqs.targetAudience}
- Brand Tone: ${clientReqs.brandTone}
- Visual Style: ${clientReqs.visualStyle}
- Strategic Focus: ${aiReqs.focus}
- Custom Client Directive: ${aiReqs.customPrompt}
- Photo Theme Keywords: ${aiReqs.photoKeywords}`;

    const payload = {
      contents: [{ parts: [{ text: userPrompt }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            brandName: { type: "STRING" },
            tagline: { type: "STRING" },
            hero: {
              type: "OBJECT",
              properties: {
                badge: { type: "STRING" },
                headline: { type: "STRING" },
                subheadline: { type: "STRING" },
                ctaPrimary: { type: "STRING" },
                ctaSecondary: { type: "STRING" },
                imageKeyword: { type: "STRING" }
              },
              required: ["headline", "subheadline", "ctaPrimary", "ctaSecondary", "imageKeyword"]
            },
            about: {
              type: "OBJECT",
              properties: {
                badge: { type: "STRING" },
                title: { type: "STRING" },
                paragraphs: { type: "ARRAY", items: { type: "STRING" } },
                stats: {
                  type: "ARRAY",
                  items: {
                    type: "OBJECT",
                    properties: {
                      value: { type: "STRING" },
                      label: { type: "STRING" }
                    }
                  }
                },
                imageKeyword: { type: "STRING" }
              },
              required: ["title", "paragraphs", "imageKeyword"]
            },
            features: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  title: { type: "STRING" },
                  description: { type: "STRING" },
                  iconName: { type: "STRING" },
                  imageKeyword: { type: "STRING" }
                },
                required: ["title", "description", "iconName", "imageKeyword"]
              }
            },
            gallery: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  title: { type: "STRING" },
                  category: { type: "STRING" },
                  imageKeyword: { type: "STRING" }
                },
                required: ["title", "category", "imageKeyword"]
              }
            },
            testimonials: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  name: { type: "STRING" },
                  role: { type: "STRING" },
                  quote: { type: "STRING" },
                  rating: { type: "NUMBER" }
                },
                required: ["name", "role", "quote"]
              }
            },
            contact: {
              type: "OBJECT",
              properties: {
                title: { type: "STRING" },
                subtitle: { type: "STRING" },
                email: { type: "STRING" },
                phone: { type: "STRING" },
                location: { type: "STRING" },
                ctaText: { type: "STRING" }
              },
              required: ["title", "subtitle", "ctaText"]
            }
          },
          required: ["brandName", "tagline", "hero", "about", "features", "gallery", "testimonials", "contact"]
        }
      }
    };

    let retries = 0;
    const maxRetries = 3;
    let success = false;

    while (retries < maxRetries && !success) {
      try {
        const res = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const result = await res.json();
        const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;

        if (jsonText) {
          const parsed = JSON.parse(jsonText);
          
          // Map AI generated keywords to high quality visual URLs
          const updatedHeroImage = getImageForKeyword(parsed.hero.imageKeyword || clientReqs.niche, 0);
          const updatedAboutImage = getImageForKeyword(parsed.about.imageKeyword || clientReqs.niche, 1);
          
          const updatedFeatures = (parsed.features || []).map((feat, idx) => ({
            ...feat,
            imageUrl: getImageForKeyword(feat.imageKeyword || clientReqs.niche, idx + 2)
          }));

          const updatedGallery = (parsed.gallery || []).map((gal, idx) => ({
            ...gal,
            imageUrl: getImageForKeyword(gal.imageKeyword || clientReqs.niche, idx)
          }));

          const updatedTestimonials = (parsed.testimonials || []).map((test, idx) => ({
            ...test,
            avatar: `https://images.unsplash.com/photo-${1500000000000 + (idx * 342211) % 99999999}?auto=format&fit=crop&w=150&q=80`
          }));

          setSiteData({
            brandName: parsed.brandName || clientReqs.businessName,
            tagline: parsed.tagline,
            primaryColor: clientReqs.primaryColor,
            themeMode: previewTheme,
            hero: { ...parsed.hero, imageUrl: updatedHeroImage },
            about: { ...parsed.about, imageUrl: updatedAboutImage },
            features: updatedFeatures,
            gallery: updatedGallery,
            testimonials: updatedTestimonials.length ? updatedTestimonials : DEFAULT_SITE_DATA.testimonials,
            contact: parsed.contact
          });

          showNotification("🎉 Complete website successfully generated with AI!");
          success = true;
        }
      } catch (err) {
        retries++;
        if (retries >= maxRetries) {
          console.error("AI Generation Error:", err);
          showNotification("⚠️ Generation throttled. Applied fallback smart layout.");
        } else {
          await new Promise(r => setTimeout(r, 1000 * Math.pow(2, retries)));
        }
      }
    }
    setIsGenerating(false);
  };

  const handleRegenerateSection = async (sectionName) => {
    setRegeneratingSection(sectionName);
    showNotification(`⚡ Regenerating ${sectionName.toUpperCase()} section with AI...`);

    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

    const prompt = `Rewrite only the '${sectionName}' section for a website with:
Business: ${clientReqs.businessName} (${clientReqs.niche})
Tone: ${clientReqs.brandTone}
Focus: ${aiReqs.focus}
Directive: ${aiReqs.customPrompt}

Return a valid JSON object matching the '${sectionName}' schema.`;

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" }
        })
      });

      if (res.ok) {
        const result = await res.json();
        const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;
        if (jsonText) {
          const parsed = JSON.parse(jsonText);
          setSiteData(prev => ({
            ...prev,
            [sectionName]: {
              ...prev[sectionName],
              ...parsed,
              imageUrl: prev[sectionName]?.imageUrl || getImageForKeyword(clientReqs.niche)
            }
          }));
          showNotification(`✅ ${sectionName.toUpperCase()} refreshed!`);
        }
      }
    } catch (e) {
      console.error(e);
      showNotification(`Failed to refresh ${sectionName}.`);
    }
    setRegeneratingSection(null);
  };

  const handleGenerateAiPhoto = async (targetPath, promptDescription) => {
    setGeneratingImageId(targetPath);
    showNotification("🎨 Generating bespoke image with Gemini Flash Image model...");

    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-image:generateContent?key=${apiKey}`;

    const promptText = `High quality commercial studio photograph for a ${clientReqs.niche} business. Subject: ${promptDescription}. Style: ${clientReqs.visualStyle}, professional lighting, 8k resolution.`;

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: { responseModalities: ["TEXT", "IMAGE"] }
        })
      });

      if (res.ok) {
        const result = await res.json();
        const base64Data = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
        
        if (base64Data) {
          const generatedImgUrl = `data:image/png;base64,${base64Data}`;

          // Update image path inside siteData
          if (targetPath === 'hero') {
            setSiteData(prev => ({ ...prev, hero: { ...prev.hero, imageUrl: generatedImgUrl } }));
          } else if (targetPath === 'about') {
            setSiteData(prev => ({ ...prev, about: { ...prev.about, imageUrl: generatedImgUrl } }));
          } else if (targetPath.startsWith('feature-')) {
            const index = parseInt(targetPath.replace('feature-', ''));
            setSiteData(prev => {
              const newFeats = [...prev.features];
              if (newFeats[index]) newFeats[index].imageUrl = generatedImgUrl;
              return { ...prev, features: newFeats };
            });
          } else if (targetPath.startsWith('gallery-')) {
            const index = parseInt(targetPath.replace('gallery-', ''));
            setSiteData(prev => {
              const newGal = [...prev.gallery];
              if (newGal[index]) newGal[index].imageUrl = generatedImgUrl;
              return { ...prev, gallery: newGal };
            });
          }

          showNotification("🎨 Custom AI image successfully created and placed!");
        } else {
          showNotification("Image generation model busy. Applied curated high-res photo.");
        }
      }
    } catch (err) {
      console.error(err);
      showNotification("Could not generate AI photo right now.");
    }
    setGeneratingImageId(null);
  };

  const handleApplyPreset = (preset) => {
    setClientReqs(preset.client);
    setAiReqs(preset.ai);
    showNotification(`Loaded preset: ${preset.name}. Click 'Generate Site' to build!`);
  };

  const RenderIcon = ({ name, className = "w-6 h-6" }) => {
    switch (name) {
      case "Flame": return <Flame className={className} />;
      case "Coffee": return <Coffee className={className} />;
      case "Award": return <Award className={className} />;
      case "Zap": return <Zap className={className} />;
      case "Shield": return <Shield className={className} />;
      case "Cpu": return <Laptop className={className} />;
      case "Star": return <Star className={className} />;
      case "Users": return <Users className={className} />;
      case "Target": return <Target className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-slate-950 text-slate-100 font-sans overflow-hidden">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-indigo-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 border border-indigo-400/40 animate-bounce">
          <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main App Navigation Header */}
      <header className="h-16 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            title="Toggle Control Drawer"
          >
            {isSidebarOpen ? <PanelLeftClose className="w-5 h-5" /> : <PanelLeft className="w-5 h-5" />}
          </button>

          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl shadow-md">
              <Wand2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-base tracking-wide bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
                WebCraft AI Studio
              </h1>
              <p className="text-[10px] text-slate-400">Client & AI Requirement Powered Site Generator</p>
            </div>
          </div>
        </div>

        {/* Viewport & Preset Quick Switchers */}
        <div className="hidden md:flex items-center space-x-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setViewport("desktop")}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              viewport === "desktop" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Desktop</span>
          </button>
          <button
            onClick={() => setViewport("tablet")}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              viewport === "tablet" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span>Tablet</span>
          </button>
          <button
            onClick={() => setViewport("mobile")}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              viewport === "mobile" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setPreviewTheme(previewTheme === "light" ? "dark" : "light")}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            title="Toggle Generated Site Theme"
          >
            {previewTheme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </button>

          <button
            onClick={() => setShowExportModal(true)}
            className="flex items-center space-x-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-xl border border-slate-700 transition"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export Code</span>
          </button>

          <button
            onClick={handleGenerateWebsite}
            disabled={isGenerating}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 text-white text-xs font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition transform active:scale-95 disabled:opacity-50"
          >
            {isGenerating ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
            )}
            <span>{isGenerating ? "Building Site..." : "Generate AI Site"}</span>
          </button>
        </div>
      </header>

      {/* Main Split Body Workspace */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {}
        <div
          className={`w-full md:w-96 bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 z-20 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full absolute md:relative"
          }`}
        >
          {/* Panel Navigation Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/60 p-2 space-x-1 shrink-0">
            <button
              onClick={() => setActiveTab("client")}
              className={`flex-1 py-2 rounded-lg text-xs font-medium flex items-center justify-center space-x-1 transition ${
                activeTab === "client" ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Client Req</span>
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`flex-1 py-2 rounded-lg text-xs font-medium flex items-center justify-center space-x-1 transition ${
                activeTab === "ai" ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>AI Directives</span>
            </button>
            <button
              onClick={() => setActiveTab("presets")}
              className={`flex-1 py-2 rounded-lg text-xs font-medium flex items-center justify-center space-x-1 transition ${
                activeTab === "presets" ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Presets</span>
            </button>
          </div>

          {/* Form Controls Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 custom-scrollbar">

            {/* TAB 1: Client Requirements */}
            {activeTab === "client" && (
              <div className="space-y-4">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1 flex items-center">
                    <Briefcase className="w-3.5 h-3.5 mr-1.5" /> Business Identity
                  </h3>
                  <p className="text-xs text-slate-400">Define the core brand parameters provided by the client.</p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Business Name</label>
                  <input
                    type="text"
                    value={clientReqs.businessName}
                    onChange={(e) => setClientReqs({ ...clientReqs, businessName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="e.g. Aura Artisan Bakes"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Niche / Industry</label>
                  <input
                    type="text"
                    value={clientReqs.niche}
                    onChange={(e) => setClientReqs({ ...clientReqs, niche: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="e.g. Artisanal Bakery, Tech SaaS, Fitness Studio"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Target Audience</label>
                  <textarea
                    rows={2}
                    value={clientReqs.targetAudience}
                    onChange={(e) => setClientReqs({ ...clientReqs, targetAudience: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="e.g. Foodies, neighborhood locals, event hosts"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Brand Tone</label>
                    <select
                      value={clientReqs.brandTone}
                      onChange={(e) => setClientReqs({ ...clientReqs, brandTone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    >
                      <option>Warm & Friendly</option>
                      <option>Bold & Innovative</option>
                      <option>Professional & Corporate</option>
                      <option>Luxury & Sophisticated</option>
                      <option>Energetic & Vibrant</option>
                      <option>Minimalist & Clean</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Primary Color</label>
                    <div className="flex items-center space-x-2 bg-slate-950 border border-slate-800 rounded-xl p-1.5">
                      <input
                        type="color"
                        value={clientReqs.primaryColor}
                        onChange={(e) => setClientReqs({ ...clientReqs, primaryColor: e.target.value })}
                        className="w-7 h-7 rounded-lg border-0 cursor-pointer bg-transparent"
                      />
                      <span className="text-xs font-mono text-slate-300">{clientReqs.primaryColor}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Visual Aesthetic Style</label>
                  <input
                    type="text"
                    value={clientReqs.visualStyle}
                    onChange={(e) => setClientReqs({ ...clientReqs, visualStyle: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="e.g. Cozy Rustic Modern, Dark Cyberpunk"
                  />
                </div>
              </div>
            )}

            {/* TAB 2: AI Directives */}
            {activeTab === "ai" && (
              <div className="space-y-4">
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                  <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1 flex items-center">
                    <Bot className="w-3.5 h-3.5 mr-1.5" /> AI Engine Strategy
                  </h3>
                  <p className="text-xs text-slate-400">Guide how the Gemini LLM structures text narratives & photos.</p>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Strategic Conversion Focus</label>
                  <select
                    value={aiReqs.focus}
                    onChange={(e) => setAiReqs({ ...aiReqs, focus: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                  >
                    <option>Conversion focused</option>
                    <option>SEO optimized</option>
                    <option>Creative narrative & storytelling</option>
                    <option>Product feature deep-dive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Custom Prompt Instructions</label>
                  <textarea
                    rows={3}
                    value={aiReqs.customPrompt}
                    onChange={(e) => setAiReqs({ ...aiReqs, customPrompt: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="Instruct AI on key selling points, sourdough traditions, or special offerings..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Photo Theme & Imagery Keywords</label>
                  <input
                    type="text"
                    value={aiReqs.photoKeywords}
                    onChange={(e) => setAiReqs({ ...aiReqs, photoKeywords: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="e.g. sourdough, croissant, cozy cafe, espresso"
                  />
                </div>
              </div>
            )}

            {/* TAB 3: Quick Presets */}
            {activeTab === "presets" && (
              <div className="space-y-3">
                <p className="text-xs text-slate-400 mb-2">Click any preset to auto-fill client requirements and AI directives:</p>
                {PRESETS.map((p) => {
                  const IconComponent = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleApplyPreset(p)}
                      className="w-full text-left p-3 bg-slate-950 hover:bg-slate-800/80 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition group flex items-start space-x-3"
                    >
                      <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg group-hover:scale-110 transition">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white flex items-center justify-between">
                          <span>{p.name}</span>
                          <span className="text-[10px] text-slate-500">{p.client.brandTone}</span>
                        </h4>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">{p.client.niche}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

          </div>

          {/* Drawer Footer CTA */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 shrink-0">
            <button
              onClick={handleGenerateWebsite}
              disabled={isGenerating}
              className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold rounded-xl shadow-lg shadow-indigo-600/25 flex items-center justify-center space-x-2 transition disabled:opacity-50"
            >
              {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4 text-amber-300" />}
              <span>Generate Entire Website</span>
            </button>
          </div>
        </div>

        {}
        <div className="flex-1 bg-slate-950 overflow-y-auto flex flex-col items-center p-2 sm:p-6 custom-scrollbar">
          
          {/* Canvas Wrapper matching viewport dimension */}
          <div
            className={`transition-all duration-300 bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto border border-slate-800/80 ${
              viewport === "mobile"
                ? "w-[375px] min-h-[720px]"
                : viewport === "tablet"
                ? "w-[768px] min-h-[800px]"
                : "w-full max-w-6xl min-h-[900px]"
            } ${previewTheme === "dark" ? "dark bg-slate-900 text-slate-100" : "bg-white text-slate-900"}`}
          >

            {/* Generated Website Navigation Bar */}
            <nav className={`sticky top-0 z-40 px-6 py-4 border-b backdrop-blur-md flex items-center justify-between transition ${
              previewTheme === "dark" ? "bg-slate-900/90 border-slate-800 text-white" : "bg-white/90 border-slate-100 text-slate-900"
            }`}>
              <div className="flex items-center space-x-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md"
                  style={{ backgroundColor: siteData.primaryColor }}
                >
                  {siteData.brandName.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <span className="font-bold text-base tracking-tight">{siteData.brandName}</span>
                  <p className="text-[10px] opacity-70 hidden sm:block">{siteData.tagline}</p>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-6 text-xs font-medium">
                <a href="#hero" className="hover:opacity-75 transition">Home</a>
                <a href="#about" className="hover:opacity-75 transition">About</a>
                <a href="#features" className="hover:opacity-75 transition">Features</a>
                <a href="#gallery" className="hover:opacity-75 transition">Gallery</a>
                <a href="#testimonials" className="hover:opacity-75 transition">Reviews</a>
              </div>

              <a
                href="#contact"
                className="px-4 py-2 text-xs font-semibold rounded-xl text-white shadow-md transition transform hover:scale-105"
                style={{ backgroundColor: siteData.primaryColor }}
              >
                Get Started
              </a>
            </nav>

            {}
            <section id="hero" className="relative p-6 md:p-12 lg:p-16 overflow-hidden group">
              {/* Quick AI Section Action Floating Bar */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center space-x-2 bg-slate-900/90 backdrop-blur text-white p-1.5 rounded-xl border border-slate-700 shadow-xl">
                <button
                  onClick={() => handleRegenerateSection("hero")}
                  disabled={regeneratingSection === "hero"}
                  className="px-2.5 py-1 text-[11px] bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium flex items-center space-x-1"
                >
                  <RefreshCw className={`w-3 h-3 ${regeneratingSection === "hero" ? "animate-spin" : ""}`} />
                  <span>Regenerate Text</span>
                </button>
                <button
                  onClick={() => handleGenerateAiPhoto("hero", siteData.hero.imageKeyword || clientReqs.niche)}
                  disabled={generatingImageId === "hero"}
                  className="px-2.5 py-1 text-[11px] bg-purple-600 hover:bg-purple-500 rounded-lg font-medium flex items-center space-x-1"
                >
                  <ImageIcon className="w-3 h-3" />
                  <span>{generatingImageId === "hero" ? "Generating..." : "AI Photo"}</span>
                </button>
              </div>

              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-left">
                  {siteData.hero.badge && (
                    <span
                      className="inline-block px-3 py-1 text-xs font-semibold rounded-full tracking-wide uppercase shadow-sm"
                      style={{ backgroundColor: `${siteData.primaryColor}20`, color: siteData.primaryColor }}
                    >
                      {siteData.hero.badge}
                    </span>
                  )}

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                    {siteData.hero.headline}
                  </h1>

                  <p className="text-sm md:text-base opacity-80 leading-relaxed">
                    {siteData.hero.subheadline}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      className="px-5 py-2.5 text-xs font-semibold text-white rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
                      style={{ backgroundColor: siteData.primaryColor }}
                    >
                      {siteData.hero.ctaPrimary}
                    </button>

                    <button className={`px-5 py-2.5 text-xs font-semibold rounded-xl border transition ${
                      previewTheme === "dark" ? "border-slate-700 hover:bg-slate-800" : "border-slate-300 hover:bg-slate-100"
                    }`}>
                      {siteData.hero.ctaSecondary}
                    </button>
                  </div>
                </div>

                {/* Hero Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group/img aspect-4/3 border border-slate-200/20">
                  <img
                    src={siteData.hero.imageUrl}
                    alt="Hero Visual"
                    className="w-full h-full object-cover transition duration-500 group-hover/img:scale-105"
                  />
                  {generatingImageId === "hero" && (
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur flex flex-col items-center justify-center text-white space-y-2">
                      <Sparkles className="w-8 h-8 text-amber-300 animate-spin" />
                      <p className="text-xs font-medium">Generating bespoke image via Gemini...</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {}
            <section id="features" className={`p-6 md:p-12 border-t transition group relative ${
              previewTheme === "dark" ? "bg-slate-950/50 border-slate-800" : "bg-slate-50 border-slate-100"
            }`}>
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => handleRegenerateSection("features")}
                  disabled={regeneratingSection === "features"}
                  className="px-2.5 py-1 text-[11px] bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium flex items-center space-x-1 shadow-lg"
                >
                  <RefreshCw className={`w-3 h-3 ${regeneratingSection === "features" ? "animate-spin" : ""}`} />
                  <span>Regenerate Features</span>
                </button>
              </div>

              <div className="max-w-5xl mx-auto space-y-8 text-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Built to Excel in Every Detail</h2>
                  <p className="text-xs md:text-sm opacity-70 mt-1 max-w-xl mx-auto">
                    Custom tailored highlights aligned with the client narrative and audience requirements.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {siteData.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl border transition hover:shadow-xl text-left flex flex-col justify-between group/card ${
                        previewTheme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200/80"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className="p-2.5 rounded-xl text-white shadow-md"
                            style={{ backgroundColor: siteData.primaryColor }}
                          >
                            <RenderIcon name={feat.iconName} className="w-5 h-5" />
                          </div>
                          
                          <button
                            onClick={() => handleGenerateAiPhoto(`feature-${idx}`, feat.title)}
                            className="opacity-0 group-hover/card:opacity-100 transition text-[10px] text-indigo-500 hover:underline flex items-center"
                          >
                            <Sparkles className="w-3 h-3 mr-1" /> AI Photo
                          </button>
                        </div>

                        <h3 className="font-bold text-base mb-1.5">{feat.title}</h3>
                        <p className="text-xs opacity-75 leading-relaxed">{feat.description}</p>
                      </div>

                      {feat.imageUrl && (
                        <div className="mt-4 rounded-xl overflow-hidden h-32 relative border border-slate-100/10">
                          <img src={feat.imageUrl} alt={feat.title} className="w-full h-full object-cover" />
                          {generatingImageId === `feature-${idx}` && (
                            <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center text-white">
                              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {}
            <section id="about" className="p-6 md:p-12 border-t border-slate-200/20 relative group">
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center space-x-2">
                <button
                  onClick={() => handleRegenerateSection("about")}
                  disabled={regeneratingSection === "about"}
                  className="px-2.5 py-1 text-[11px] bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium flex items-center space-x-1 shadow-lg"
                >
                  <RefreshCw className={`w-3 h-3 ${regeneratingSection === "about" ? "animate-spin" : ""}`} />
                  <span>Regenerate About</span>
                </button>
              </div>

              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
                  <img src={siteData.about.imageUrl} alt="About Brand" className="w-full h-full object-cover" />
                  {generatingImageId === "about" && (
                    <div className="absolute inset-0 bg-slate-900/80 flex flex-col items-center justify-center text-white">
                      <Sparkles className="w-6 h-6 text-amber-300 animate-spin" />
                      <p className="text-xs mt-1">Generating AI Image...</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4 text-left">
                  {siteData.about.badge && (
                    <span
                      className="px-2.5 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider"
                      style={{ backgroundColor: `${siteData.primaryColor}20`, color: siteData.primaryColor }}
                    >
                      {siteData.about.badge}
                    </span>
                  )}

                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{siteData.about.title}</h2>

                  {siteData.about.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-xs md:text-sm opacity-80 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {/* Stats Grid */}
                  {siteData.about.stats && (
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/20">
                      {siteData.about.stats.map((st, idx) => (
                        <div key={idx}>
                          <div className="text-lg font-extrabold" style={{ color: siteData.primaryColor }}>
                            {st.value}
                          </div>
                          <div className="text-[10px] opacity-70 uppercase tracking-wider font-medium">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {}
            <section id="gallery" className={`p-6 md:p-12 border-t transition ${
              previewTheme === "dark" ? "bg-slate-950/80 border-slate-800" : "bg-slate-50 border-slate-200/60"
            }`}>
              <div className="max-w-5xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">Curated Visual Showcase</h2>
                    <p className="text-xs opacity-70 mt-1">Photos dynamically matched to target visual criteria.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {siteData.gallery.map((item, idx) => (
                    <div key={idx} className="group/gal relative rounded-xl overflow-hidden aspect-square shadow-md border border-slate-200/20">
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition duration-300 group-hover/gal:scale-110" />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover/gal:opacity-100 transition duration-200 p-3 flex flex-col justify-end text-white">
                        <span className="text-[9px] font-semibold uppercase tracking-wider opacity-80">{item.category}</span>
                        <h4 className="text-xs font-bold leading-tight">{item.title}</h4>
                        
                        <button
                          onClick={() => handleGenerateAiPhoto(`gallery-${idx}`, item.title)}
                          className="mt-2 text-[10px] bg-indigo-600 hover:bg-indigo-500 px-2 py-1 rounded font-medium flex items-center justify-center space-x-1"
                        >
                          <Sparkles className="w-3 h-3 text-amber-300" />
                          <span>AI Swap Photo</span>
                        </button>
                      </div>

                      {generatingImageId === `gallery-${idx}` && (
                        <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center text-white">
                          <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {}
            <section id="testimonials" className="p-6 md:p-12 border-t border-slate-200/20">
              <div className="max-w-5xl mx-auto space-y-8 text-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">What Our Clients Say</h2>
                  <p className="text-xs opacity-70 mt-1">Social proof generated specifically for this market niche.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                  {siteData.testimonials.map((t, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl border space-y-4 shadow-sm ${
                        previewTheme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200/80"
                      }`}
                    >
                      <div className="flex items-center space-x-1">
                        {[...Array(t.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <p className="text-xs md:text-sm italic opacity-80 leading-relaxed">"{t.quote}"</p>

                      <div className="flex items-center space-x-3 pt-2">
                        <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-slate-300" />
                        <div>
                          <h4 className="text-xs font-bold">{t.name}</h4>
                          <p className="text-[10px] opacity-60">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {}
            <section id="contact" className={`p-6 md:p-12 border-t transition ${
              previewTheme === "dark" ? "bg-slate-950 border-slate-800" : "bg-slate-900 text-white"
            }`}>
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight">{siteData.contact.title}</h2>
                  <p className="text-xs opacity-80">{siteData.contact.subtitle}</p>

                  <div className="space-y-2 text-xs opacity-90 pt-2">
                    <p className="flex items-center"><span className="font-semibold w-20">Email:</span> {siteData.contact.email}</p>
                    <p className="flex items-center"><span className="font-semibold w-20">Phone:</span> {siteData.contact.phone}</p>
                    <p className="flex items-center"><span className="font-semibold w-20">Location:</span> {siteData.contact.location}</p>
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    showNotification("🚀 Form submitted! Demo message captured.");
                  }}
                  className="p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/10 space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-indigo-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-indigo-400"
                  />
                  <textarea
                    rows={3}
                    required
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-indigo-400"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 text-xs font-semibold rounded-xl text-white shadow-lg transition hover:opacity-90"
                    style={{ backgroundColor: siteData.primaryColor }}
                  >
                    {siteData.contact.ctaText}
                  </button>
                </form>
              </div>

              <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-[10px] opacity-60">
                © {new Date().getFullYear()} {siteData.brandName}. All rights reserved. Generated dynamically by AI WebStudio.
              </div>
            </section>

          </div>
        </div>
      </div>

      {}
      {showExportModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 space-y-4 text-slate-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <Code className="w-5 h-5 mr-2 text-indigo-400" /> Export Generated Site Code
              </h3>
              <button onClick={() => setShowExportModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Copy your tailored JSON site schema or deployment config ready to integrate into React or Webflow:
            </p>

            <div className="bg-slate-950 p-4 rounded-xl font-mono text-xs text-emerald-400 overflow-x-auto max-h-80 border border-slate-800">
              <pre>{JSON.stringify(siteData, null, 2)}</pre>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(siteData, null, 2));
                  showNotification("Copied JSON config to clipboard!");
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl flex items-center space-x-1.5 shadow"
              >
                <Copy className="w-4 h-4" />
                <span>Copy JSON Schema</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}