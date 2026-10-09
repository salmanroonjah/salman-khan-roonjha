import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  ArrowUpRight, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Play, 
  Pause,
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
  const [isPlaying, setIsPlaying] = useState(true);

  // Automatic slide rotation every 6.5 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPlaying]);

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Column: Futuristic Keynote Typography */}
          <div className="lg:col-span-8 space-y-7">
            {/* Minimalist Micro Kicker with Neon Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide border dark:border-cyan-500/30 border-blue-500/20 dark:bg-blue-950/40 bg-blue-50/80 backdrop-blur-xl shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" />
              <span className="dark:text-slate-200 text-slate-700">AI Opportunity Fund: Asia-Pacific</span>
              <span aria-hidden="true" className="dark:text-white/30 text-slate-400">·</span>
              <span className="text-blue-600 dark:text-cyan-400 font-bold">Certified Instructor</span>
            </div>

            {/* Main Headline & Sub-headline */}
            <div className="space-y-3.5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05]">
                <span className="bg-gradient-to-r dark:from-white dark:via-slate-100 dark:to-cyan-200 from-slate-950 via-slate-900 to-blue-900 bg-clip-text text-transparent">
                  {isUrdu ? data.hero.headlineUrdu : data.hero.headline}
                </span>
              </h1>

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

          {/* Right Hero Column: Precision Ultra Glass Profile Card */}
          <div className="lg:col-span-4 relative group">
            {/* Live pulsating background aura */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/25 via-cyan-500/20 to-indigo-600/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none animate-aurora" />

            <div className="relative rounded-3xl p-6 sm:p-7 ultra-glass-card dark:bg-slate-900/65 bg-white/80 border dark:border-white/[0.15] border-slate-200/90 shadow-2xl space-y-6 overflow-hidden">
              {/* Continuous Laser Scanning Beam */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none animate-scan-laser" />
              
              {/* Header Status Bar (Clean & Professional) */}
              <div className="flex items-center justify-between pb-3 border-b dark:border-white/[0.08] border-slate-200/70">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#06b6d4]" />
                  <span className="font-mono text-xs font-bold dark:text-slate-200 text-slate-800">
                    {isUrdu ? 'تصدیق شدہ انسٹرکٹر' : 'Verified AI Instructor'}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider dark:text-cyan-400 text-blue-700 font-semibold px-2 py-0.5 rounded-full dark:bg-blue-950/40 bg-blue-50 border dark:border-cyan-500/30 border-blue-500/20">
                  Balochistan, PK
                </span>
              </div>

              {/* Profile Avatar Bar */}
              <div className="flex items-center gap-4">
                <div className="relative group/avatar">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 opacity-60 blur-sm group-hover/avatar:opacity-100 transition-opacity animate-pulse" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 text-white flex flex-col items-center justify-center font-black text-xl shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                    <span>SK</span>
                    <span className="text-[8px] tracking-widest font-mono uppercase font-bold text-cyan-200">BELA</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-xl font-bold dark:text-white text-slate-900 tracking-tight">Salman Khan</h2>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mt-0.5">
                    {isUrdu ? 'ماسٹر ٹرینر و کریئیٹو اسپیشلسٹ' : 'Master Trainer & Creative Lead'}
                  </p>
                  <p className="text-[11px] dark:text-slate-400 text-slate-500 mt-0.5">
                    WANG & UrduAI.org
                  </p>
                </div>
              </div>

              {/* Global Accreditation Spotlight */}
              <div className="p-4 rounded-2xl dark:bg-black/40 bg-slate-100/80 border dark:border-white/[0.08] border-slate-200/80 space-y-1.5 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-500 dark:text-cyan-400">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>AI Singapore & AVPN</span>
                </div>
                <p className="text-xs dark:text-slate-300 text-slate-700 leading-snug font-sans">
                  Certified Instructor under the <strong className="dark:text-white text-slate-900">AI Opportunity Fund: Asia-Pacific</strong> (2025).
                </p>
              </div>

              {/* Languages Spoken */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider dark:text-slate-400 text-slate-500 font-semibold">
                  {isUrdu ? 'زبانوں میں ابلاغ' : 'Languages Spoken'}
                </div>
                <div className="flex flex-wrap gap-2 text-xs dark:text-slate-300 text-slate-700">
                  {data.about.languages.map((item, idx) => (
                    <React.Fragment key={item}>
                      <span className="dark:text-slate-200 text-slate-800 font-medium">{item}</span>
                      {idx < data.about.languages.length - 1 && (
                        <span aria-hidden="true" className="dark:text-slate-600 text-slate-400">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Slideshow Controller Dock */}
              <div className="pt-4 border-t dark:border-white/[0.08] border-slate-200/70 flex items-center justify-between text-xs dark:text-slate-400 text-slate-500">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded-lg dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-950 hover:dark:bg-white/[0.08] hover:bg-slate-200 transition-colors cursor-pointer"
                    title={isPlaying ? 'Pause Background Reel' : 'Play Background Reel'}
                    aria-label="Toggle reel slideshow"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[11px] font-mono dark:text-slate-300 text-slate-600 truncate max-w-[170px]">
                    {isUrdu ? HERO_SLIDES[currentSlide].captionUrdu : HERO_SLIDES[currentSlide].caption}
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? 'w-5 bg-cyan-400 shadow-[0_0_8px_#06b6d4]' : 'w-1.5 dark:bg-white/20 bg-slate-300 hover:dark:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
