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
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1800&auto=format&fit=crop',
    caption: 'Urdu AI Workshops & Hands-on Training',
    captionUrdu: 'اردو اے آئی عملی تربیتی ورکشاپس',
  },
  {
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1800&auto=format&fit=crop',
    caption: 'Digital Literacy for Rural Communities',
    captionUrdu: 'دیہی کمیونٹیز کے لیے ڈیجیٹل خواندگی',
  },
  {
    image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1800&auto=format&fit=crop',
    caption: 'Creative Video Production & Visual Storytelling',
    captionUrdu: 'ویڈیو پروڈکشن اور تخلیقی میڈیا',
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1800&auto=format&fit=crop',
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
      className="relative min-h-[92vh] flex items-center justify-center border-b border-white/[0.08] bg-[#07080B] overflow-hidden"
    >
      {/* 1. Cinematic Background Slideshow Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-35 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              } transition-transform duration-[7000ms]`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover object-center filter brightness-90 contrast-110 saturate-110"
              />
            </div>
          );
        })}

        {/* Multi-layered Obsidian Scrims (Apple / Samsung stage lighting) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080B] via-[#07080B]/80 to-[#07080B]/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#07080B]/60 to-[#07080B]" />
        
        {/* Subtle Cybernetic Edge Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-10 w-[500px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Main Content Canvas */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Column: Apple Keynote Style Typography */}
          <div className="lg:col-span-8 space-y-7">
            {/* Minimalist Micro Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-mono font-medium tracking-wide text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
              <span className="text-white/80">AI Opportunity Fund: Asia-Pacific</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span className="text-emerald-400">Certified Instructor</span>
            </div>

            {/* Main Headline & Sub-headline */}
            <div className="space-y-3.5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.05]">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  {isUrdu ? data.hero.headlineUrdu : data.hero.headline}
                </span>
              </h1>

              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-emerald-400/95 font-sans">
                {isUrdu ? data.hero.subHeadlineUrdu : data.hero.subHeadline}
              </div>

              {/* Intro Narrative */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2 max-w-2xl text-balance">
                {isUrdu ? (
                  <span className="font-urdu leading-loose block text-right text-slate-200 text-lg sm:text-xl">
                    {data.hero.introLineUrdu}
                  </span>
                ) : (
                  data.hero.introLine
                )}
              </p>
            </div>

            {/* Apple-grade Minimal Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToWork}
                className="group px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] flex items-center gap-2.5 cursor-pointer active:scale-95"
              >
                <Film className="w-4 h-4 text-slate-950" />
                <span>{isUrdu ? data.hero.buttons.workUrdu : data.hero.buttons.work}</span>
                <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-semibold border border-white/[0.12] hover:border-white/[0.25] rounded-2xl transition-all duration-200 backdrop-blur-md flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>{isUrdu ? data.hero.buttons.contactUrdu : data.hero.buttons.contact}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>{isUrdu ? 'نصابِ حیات (CV)' : 'Full CV'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>

            {/* Verified Location & Social Coordinates */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isUrdu ? data.contact.locationUrdu : data.contact.location}</span>
              </div>
              <span aria-hidden="true" className="text-white/20">/</span>
              <a 
                href={data.contact.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-emerald-400 transition-colors"
              >
                LinkedIn
              </a>
              <span aria-hidden="true" className="text-white/20">/</span>
              <a 
                href={data.contact.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-emerald-400 transition-colors"
              >
                Instagram
              </a>
              <span aria-hidden="true" className="text-white/20">/</span>
              <a 
                href={data.contact.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-emerald-400 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Right Hero Column: Precision Titanium Glass Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.1] shadow-2xl space-y-6 overflow-hidden">
              {/* Subtle top edge gradient reflection */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

              {/* Profile Avatar Bar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-700 text-slate-950 flex flex-col items-center justify-center font-black text-xl shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  <span>SK</span>
                  <span className="text-[8px] tracking-widest font-mono uppercase font-bold text-slate-950">BELA</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-xl font-bold text-white tracking-tight">Salman Khan</h2>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {isUrdu ? 'ماسٹر ٹرینر و کریئیٹو اسپیشلسٹ' : 'Master Trainer & Creative Lead'}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    WANG & UrduAI.org
                  </p>
                </div>
              </div>

              {/* Global Accreditation Spotlight */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>AI Singapore & AVPN</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug font-sans">
                  Certified Instructor under the <strong className="text-white">AI Opportunity Fund: Asia-Pacific</strong> (2025).
                </p>
              </div>

              {/* Languages Spoken (Clean Unboxed Metadata) */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  {isUrdu ? 'زبانوں میں ابلاغ' : 'Languages Spoken'}
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  {data.about.languages.map((item, idx) => (
                    <React.Fragment key={item}>
                      <span className="text-slate-200 font-medium">{item}</span>
                      {idx < data.about.languages.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Slideshow Controller Dock (Apple style) */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                    title={isPlaying ? 'Pause Background Reel' : 'Play Background Reel'}
                    aria-label="Toggle reel slideshow"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[170px]">
                    {isUrdu ? HERO_SLIDES[currentSlide].captionUrdu : HERO_SLIDES[currentSlide].caption}
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentSlide ? 'w-5 bg-emerald-400' : 'w-1.5 bg-white/20 hover:bg-white/40'
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
