import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { User, Globe, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  lang: 'en' | 'ur';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const { data } = usePortfolio();
  const isUrdu = lang === 'ur';

  return (
    <section 
      id="about" 
      className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#07080B] relative overflow-hidden"
    >
      {/* Ambient background visual subtle backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
          alt="Learning Community"
          className="w-full h-full object-cover filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080B] via-[#07080B]/90 to-[#07080B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080B] via-[#07080B]/80 to-[#07080B]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
        
        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 space-y-5">
            <div className="text-xs font-mono font-medium tracking-wide uppercase text-emerald-400">
              {isUrdu ? 'میرے بارے میں' : 'About Me'}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {isUrdu
                ? 'ٹیکنالوجی کو ہر ایک کے لیے ان کی اپنی زبان میں قابل فہم بنانا'
                : 'Making Technology Accessible in Local Languages'}
            </h2>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl space-y-2.5">
              <div className="text-xs font-semibold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>{isUrdu ? 'زبانوں میں مہارت' : 'Languages Spoken'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {isUrdu
                  ? 'میں اردو، بلوچی، براہوی اور انگریزی بولتا ہوں۔'
                  : 'I speak Urdu, Balochi, Brahui and English.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {(isUrdu ? data.about.paragraphsUrdu : data.about.paragraphs).map(
              (paragraph, idx) => (
                <p 
                  key={idx} 
                  className={isUrdu ? 'font-urdu leading-[2.4] text-right text-slate-200 text-lg sm:text-xl' : 'text-slate-300 leading-relaxed'}
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>

        {/* 4. Impact in Numbers (Apple Keynote Metric Showcase) */}
        <div className="pt-14 border-t border-white/[0.08]">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-semibold mb-10">
            {isUrdu ? 'اعداد و شمار پر مبنی اثرات (Impact in Numbers)' : 'Impact in Numbers'}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {data.impact.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-300 group shadow-lg"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white font-mono tracking-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-white mt-3 group-hover:text-emerald-400 transition-colors">
                  {isUrdu ? stat.labelUrdu : stat.label}
                </div>
                <p className="text-xs text-slate-400 leading-normal mt-1">
                  {isUrdu ? stat.subUrdu : stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
