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

            {/* The Professional Picture Showcase (Clean & Executive) */}
            <div className="relative rounded-3xl ultra-glass-card dark:bg-slate-900/85 bg-white/95 border dark:border-white/[0.18] border-slate-200/90 shadow-2xl overflow-hidden group/photo">
              {/* Continuous Laser Scanning Beam */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${
                ((data.hero as any).photoBackdrop === 'warm') ? 'via-amber-400' :
                ((data.hero as any).photoBackdrop === 'studio') ? 'via-indigo-400' :
                ((data.hero as any).photoBackdrop === 'minimal') ? 'via-slate-300' : 'via-cyan-400'
              } to-transparent pointer-events-none z-20 animate-scan-laser`} />

              {/* Professional Photo Visual Canvas */}
              <div className={`relative w-full h-[420px] xs:h-[460px] sm:h-[510px] overflow-hidden ${
                ((data.hero as any).photoBackdrop === 'warm') ? 'bg-[#120d0a]' :
                ((data.hero as any).photoBackdrop === 'studio') ? 'bg-[#080d1a]' :
                ((data.hero as any).photoBackdrop === 'minimal') ? 'bg-[#090b10]' : 'bg-[#070b19]'
              }`}>
                {/* 1. Volumetric studio spotlight background for seamless depth (works for cutouts & photos) */}
                <div className={`absolute inset-0 pointer-events-none ${
                  ((data.hero as any).photoBackdrop === 'warm')
                    ? 'bg-[radial-gradient(circle_at_50%_35%,rgba(245,158,11,0.28)_0%,rgba(120,53,15,0.35)_45%,rgba(28,20,16,0.92)_70%,rgba(10,7,5,1)_100%)]'
                    : ((data.hero as any).photoBackdrop === 'studio')
                    ? 'bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.32)_0%,rgba(30,58,138,0.35)_45%,rgba(15,23,42,0.92)_70%,rgba(2,6,23,1)_100%)]'
                    : ((data.hero as any).photoBackdrop === 'minimal')
                    ? 'bg-[radial-gradient(circle_at_50%_35%,rgba(148,163,184,0.22)_0%,rgba(51,65,85,0.3)_45%,rgba(15,23,42,0.92)_70%,rgba(2,6,23,1)_100%)]'
                    : 'bg-[radial-gradient(circle_at_50%_35%,rgba(6,182,212,0.3)_0%,rgba(30,58,138,0.35)_45%,rgba(15,23,42,0.92)_70%,rgba(2,6,23,1)_100%)]'
                }`} />

                {/* 2. Soft Rim Light Halo behind head & shoulders if cutout/no-background */}
                {(data.hero as any).photoFit === 'contain' && (
                  <div className={`absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-60 ${
                    ((data.hero as any).photoBackdrop === 'warm') ? 'bg-amber-500/25' :
                    ((data.hero as any).photoBackdrop === 'studio') ? 'bg-indigo-500/25' :
                    ((data.hero as any).photoBackdrop === 'minimal') ? 'bg-slate-400/20' : 'bg-cyan-400/25'
                  }`} />
                )}

                {/* 3. The Portrait Image itself */}
                <img
                  src={currentPhoto}
                  alt={isUrdu ? 'سلمان خان - پروفیشنل پورٹریٹ' : 'Salman Khan - Professional Portrait'}
                  className={`w-full h-full transition-transform duration-700 ease-out group-hover/photo:scale-105 ${
                    (data.hero as any).photoFit === 'contain'
                      ? 'object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] drop-shadow-[0_6px_15px_rgba(6,182,212,0.2)] select-none pt-10'
                      : 'object-cover object-top filter brightness-[0.98] contrast-[1.03]'
                  }`}
                  loading="eager"
                  decoding="async"
                />

                {/* 4. Editorial Vignette & Legibility Scrim */}
                {(data.hero as any).photoFit === 'contain' ? (
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-radial-at-t from-transparent via-transparent to-slate-950/25 pointer-events-none" />
                  </>
                )}

                {/* Top Subtle Status Badge */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-10 pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md dark:bg-black/60 bg-white/85 border dark:border-white/20 border-slate-200 shadow-lg text-[11px] font-mono font-bold dark:text-white text-slate-900">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" />
                    <span>{isUrdu ? 'تصدیق شدہ انسٹرکٹر' : 'Verified AI Instructor'}</span>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-300 font-semibold px-2.5 py-1 rounded-full bg-blue-950/80 border border-cyan-500/30 backdrop-blur-md shadow-sm">
                    Balochistan, PK
                  </span>
                </div>

                {/* Bottom Identity Bio Bar inside Photo */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 space-y-1.5 z-10 text-white backdrop-blur-[2px]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-black tracking-tight text-white drop-shadow-md">
                        {isUrdu ? data.hero.headlineUrdu : data.hero.headline}
                      </h2>
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-cyan-300 drop-shadow">
                    {isUrdu ? 'ماسٹر ٹرینر و کریئیٹو اسپیشلسٹ' : 'Master Trainer & Creative Lead'}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[11px] text-slate-300 font-sans">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>AI Singapore & AVPN Certified</span>
                    </div>
                    <span className="font-mono text-slate-400">WANG · UrduAI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
