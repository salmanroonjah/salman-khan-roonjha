import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  ArrowUpRight, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Film, 
  Sparkles, 
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'ur';
  onOpenResume: () => void;
  onOpenContact: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=75&w=1080&auto=format&fit=crop',
    caption: 'Urdu AI Workshops & Hands-on Training',
    captionUrdu: 'اردو اے آئی عملی تربیتی ورکشاپس',
  },
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=75&w=1080&auto=format&fit=crop',
    caption: 'Digital Literacy for Rural Communities',
    captionUrdu: 'دیہی کمیونٹیز کے لیے ڈیجیٹل خواندگی',
  },
  {
    image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=75&w=1080&auto=format&fit=crop',
    caption: 'Creative Video Production & Visual Storytelling',
    captionUrdu: 'ویڈیو پروڈکشن اور تخلیقی میڈیا',
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=75&w=1080&auto=format&fit=crop',
    caption: 'Empowering Youth Across Balochistan',
    captionUrdu: 'بلوچستان کے نوجوانوں کو بااختیار بنانا',
  },
];

export const Hero: React.FC<HeroProps> = ({ lang, onOpenResume, onOpenContact }) => {
  const { data } = usePortfolio();
  const isUrdu = lang === 'ur';

  const [currentSlide, setCurrentSlide] = useState(0);

  const currentPhoto = (data.hero as any).profilePhotoUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop';

  // Automatic slide rotation every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    const elem = document.getElementById('my-work');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center border-b transition-colors duration-300 dark:border-white/[0.08] border-slate-200/80 dark:bg-[#070913]/70 bg-slate-50/50 overflow-hidden"
    >
      {/* 1. Cinematic Background Slideshow Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-25 dark:opacity-35 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transition-transform duration-[7000ms]`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110 saturate-110"
              />
            </div>
          );
        })}

        {/* Multi-layered Glass Scrims */}
        <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-[#070913] dark:via-[#070913]/85 dark:to-[#070913]/90 bg-gradient-to-t from-white via-white/80 to-white/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent dark:via-[#070913]/60 via-white/40 dark:to-[#070913] to-white" />
        
        {/* Subtle Cybernetic Edge Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[800px] h-[250px] sm:h-[350px] bg-gradient-to-b from-blue-500/20 via-cyan-500/15 to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none" />
        <div className="hidden sm:block absolute -bottom-24 right-10 w-[500px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Main Content Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-0 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Hero Column: Futuristic Keynote Typography */}
          <div className="lg:col-span-7 space-y-7 pb-10 sm:pb-16 lg:pb-20">
            {/* Minimalist Micro Kicker with Neon Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide border dark:border-cyan-500/30 border-blue-500/20 dark:bg-blue-950/40 bg-blue-50/80 backdrop-blur-xl shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" />
              <span className="dark:text-slate-200 text-slate-700">AI Opportunity Fund: Asia-Pacific</span>
              <span aria-hidden="true" className="dark:text-white/30 text-slate-400">·</span>
              <span className="text-blue-600 dark:text-cyan-400 font-bold">Certified Instructor</span>
            </div>

            {/* Main Headline & Sub-headline */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05]">
                  <span className="bg-gradient-to-r dark:from-white dark:via-slate-100 dark:to-cyan-200 from-slate-950 via-slate-900 to-blue-900 bg-clip-text text-transparent">
                    {isUrdu ? data.hero.headlineUrdu : data.hero.headline}
                  </span>
                </h1>
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 shrink-0" />
              </div>

              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-blue-600 dark:text-cyan-400 font-sans flex items-center gap-2">
                <span>{isUrdu ? data.hero.subHeadlineUrdu : data.hero.subHeadline}</span>
                <Sparkles className="w-5 h-5 text-cyan-400 hidden sm:inline" />
              </div>

              {/* Intro Narrative */}
              <p className="text-base sm:text-lg dark:text-slate-300 text-slate-700 leading-relaxed font-normal pt-2 max-w-2xl text-balance">
                {isUrdu ? (
                  <span className="font-urdu leading-loose block text-right dark:text-slate-200 text-slate-800 text-lg sm:text-xl">
                    {data.hero.introLineUrdu}
                  </span>
                ) : (
                  data.hero.introLine
                )}
              </p>
            </div>

            {/* High-Grade Futuristic Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToWork}
                className="group px-7 py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:brightness-110 text-white text-sm font-bold rounded-2xl transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center gap-2.5 cursor-pointer active:scale-95"
              >
                <Film className="w-4 h-4 text-white" />
                <span>{isUrdu ? data.hero.buttons.workUrdu : data.hero.buttons.work}</span>
                <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 dark:bg-white/[0.04] bg-white/80 hover:dark:bg-white/[0.08] hover:bg-white dark:text-white text-slate-800 text-sm font-semibold border dark:border-white/[0.12] border-slate-300/80 hover:dark:border-white/[0.25] hover:border-slate-400 rounded-2xl transition-all duration-200 backdrop-blur-xl shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>{isUrdu ? data.hero.buttons.contactUrdu : data.hero.buttons.contact}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-3.5 text-xs sm:text-sm font-medium dark:text-slate-400 text-slate-600 hover:dark:text-cyan-300 hover:text-cyan-700 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>{isUrdu ? 'نصابِ حیات (CV)' : 'Full CV'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Verified Location & Social Coordinates */}
            <div className="pt-6 border-t dark:border-white/[0.08] border-slate-200/80 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs dark:text-slate-400 text-slate-500 font-mono">
              <div className="flex items-center gap-1.5 dark:text-slate-300 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
                <span>{isUrdu ? data.contact.locationUrdu : data.contact.location}</span>
              </div>
              <span aria-hidden="true" className="dark:text-white/20 text-slate-300">/</span>
              <div className="flex items-center gap-1.5 dark:text-slate-300 text-slate-700">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Singapore & AVPN</span>
              </div>
              <span aria-hidden="true" className="dark:text-white/20 text-slate-300">/</span>
              <a 
                href={data.contact.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-500 transition-colors font-medium"
              >
                LinkedIn
              </a>
              <span aria-hidden="true" className="dark:text-white/20 text-slate-300">/</span>
              <a 
                href={data.contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-500 transition-colors font-medium"
              >
                Instagram
              </a>
              <span aria-hidden="true" className="dark:text-white/20 text-slate-300">/</span>
              <a 
                href={data.contact.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-500 transition-colors font-medium"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Right Hero Column: Natural Unboxed Portrait (Fruitful-Style, Zero Box, Zero Card) */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end self-end pointer-events-none sm:pointer-events-auto">
            <div className="relative w-full max-w-[360px] sm:max-w-[430px] lg:max-w-[500px] flex items-end justify-center">
              {/* Subtle natural backlight glow directly on hero canvas */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-t from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

              {/* The Subject Photo: Clean, unboxed, natural, directly on the canvas */}
              <img
                src={currentPhoto}
                alt={isUrdu ? 'سلمان خان - پورٹریٹ' : 'Salman Khan - Portrait'}
                className="w-full h-auto max-h-[480px] sm:max-h-[560px] lg:max-h-[630px] object-contain object-bottom select-none filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-[1.01]"
                loading="eager"
                decoding="async"
              />

              {/* Seamless feathering at the bottom so it melts naturally into the section floor */}
              <div className="absolute inset-x-0 bottom-0 h-10 sm:h-16 bg-gradient-to-t dark:from-[#070913] from-[#F8FAFC] to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
