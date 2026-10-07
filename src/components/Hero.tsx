import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Play,
  Film
} from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'ur';
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenResume, onOpenContact }) => {
  const isUrdu = lang === 'ur';

  const scrollToWork = () => {
    const elem = document.getElementById('my-work');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-slate-800/80 bg-[#0B0F17] relative overflow-hidden">
      {/* Dynamic ambient studio lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Subheadline, Intro & Action Buttons */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top kicker separator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isUrdu ? 'مصنوعی ذہانت و ڈیجیٹل خواندگی' : 'AI Literacy & Creative Media'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{isUrdu ? 'بلوچستان، پاکستان' : 'Balochistan, Pakistan'}</span>
            </div>

            <div className="space-y-3">
              {/* 1. Headline: Salman Khan */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
                {isUrdu ? portfolioData.hero.headlineUrdu : portfolioData.hero.headline}
              </h1>

              {/* Sub-headline: AI Trainer · Digital Literacy Specialist · Creative Professional */}
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-400 tracking-tight">
                {isUrdu ? portfolioData.hero.subHeadlineUrdu : portfolioData.hero.subHeadline}
              </p>

              {/* Intro line: I help students, professionals and rural communities understand and use AI, in their own language. */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2 max-w-2xl">
                {isUrdu ? (
                  <span className="font-urdu leading-loose block text-right">
                    {portfolioData.hero.introLineUrdu}
                  </span>
                ) : (
                  portfolioData.hero.introLine
                )}
              </p>
            </div>

            {/* Buttons: [View My Work] [Contact Me] */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={scrollToWork}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 cursor-pointer hover:scale-102"
              >
                <Film className="w-4 h-4 text-slate-950" />
                <span>{isUrdu ? portfolioData.hero.buttons.workUrdu : portfolioData.hero.buttons.work}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white text-sm font-semibold border border-slate-700/80 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>{isUrdu ? portfolioData.hero.buttons.contactUrdu : portfolioData.hero.buttons.contact}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-3.5 text-slate-400 hover:text-white text-sm font-medium transition-colors cursor-pointer"
              >
                <span>{isUrdu ? 'سی وی دیکھیں' : 'View Full CV'}</span>
              </button>
            </div>

            {/* Quick Metadata Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 font-sans">
              <div className="flex items-center gap-1.5 font-medium text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{isUrdu ? portfolioData.contact.locationUrdu : portfolioData.contact.location}</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={portfolioData.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 font-medium transition-colors"
              >
                LinkedIn
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={portfolioData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 font-medium transition-colors"
              >
                Instagram
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={portfolioData.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 font-medium transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Studio Profile Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden space-y-5 backdrop-blur-xl">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-slate-950 flex flex-col items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-emerald-500/20">
                  <span>SK</span>
                  <span className="text-[8px] tracking-widest text-slate-950 font-mono uppercase font-extrabold">Bela</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-xl font-black text-white">Salman Khan</h2>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {isUrdu ? 'ماسٹر ٹرینر و کریئیٹو اسپیشلسٹ' : 'Master Trainer & Creative Lead'}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    WANG & UrduAI.org
                  </p>
                </div>
              </div>

              {/* Verified International Credential Callout */}
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI Singapore & AVPN</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Certified Instructor under the <strong className="text-white">AI Opportunity Fund: Asia-Pacific</strong> (2025).
                </p>
              </div>

              {/* Multilingual Fluency */}
              <div className="space-y-2 text-xs">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                  {isUrdu ? 'زبانوں میں ابلاغ' : 'Languages Spoken'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {portfolioData.about.languages.map((langItem) => (
                    <span
                      key={langItem}
                      className="px-2.5 py-1 bg-slate-800/90 text-slate-200 font-medium rounded-md text-xs border border-slate-700/60"
                    >
                      {langItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick direct video spotlight badge */}
              <div 
                onClick={scrollToWork}
                className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-between text-xs text-emerald-300 cursor-pointer hover:bg-emerald-500/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-current text-emerald-400" />
                  <span className="font-semibold">Watch Training Media Reel</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
