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
      className="py-16 sm:py-28 border-b transition-colors duration-300 dark:border-white/[0.08] border-slate-200/80 dark:bg-[#070913]/70 bg-white/60 relative overflow-hidden"
    >
      {/* Ambient background visual subtle backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15 dark:opacity-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=75&w=900&auto=format&fit=crop"
          alt="Learning Community"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover filter blur-sm scale-105"
        />
        <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#070913] dark:via-[#070913]/90 dark:to-[#070913] bg-gradient-to-b from-white via-white/90 to-white" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">
        
        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase text-cyan-600 dark:text-cyan-400 dark:bg-cyan-950/40 bg-cyan-50 border dark:border-cyan-500/30 border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              {isUrdu ? 'میرے بارے میں' : 'About Me'}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-slate-900 tracking-tight leading-snug">
              {isUrdu
                ? 'ٹیکنالوجی کو ہر ایک کے لیے ان کی اپنی زبان میں قابل فہم بنانا'
                : 'Making Technology Accessible in Local Languages'}
            </h2>

            <div className="p-6 rounded-2xl cyber-glass-card dark:bg-slate-900/60 bg-white/80 border dark:border-white/[0.1] border-slate-200/90 shadow-xl space-y-2.5">
              <div className="text-xs font-bold dark:text-white text-slate-900 flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>{isUrdu ? 'زبانوں میں مہارت' : 'Languages Spoken'}</span>
              </div>
              <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-700 leading-relaxed font-sans">
                {isUrdu
                  ? 'میں اردو، بلوچی، براہوی اور انگریزی بولتا ہوں۔'
                  : 'I speak Urdu, Balochi, Brahui and English.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 dark:text-slate-300 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {(isUrdu ? data.about.paragraphsUrdu : data.about.paragraphs).map(
              (paragraph, idx) => (
                <p 
                  key={idx} 
                  className={isUrdu ? 'font-urdu leading-[2.4] text-right dark:text-slate-200 text-slate-800 text-lg sm:text-xl' : 'dark:text-slate-300 text-slate-700 leading-relaxed'}
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>

        {/* 4. Impact in Numbers */}
        <div className="pt-14 border-t dark:border-white/[0.08] border-slate-200/80">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold mb-10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" />
            <span>{isUrdu ? 'اعداد و شمار پر مبنی اثرات (Impact in Numbers)' : 'Impact in Numbers'}</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {data.impact.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-7 rounded-3xl cyber-glass-card dark:bg-slate-900/60 bg-white/80 border dark:border-white/[0.1] border-slate-200/90 hover:dark:border-cyan-400/50 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-400/10 to-transparent pointer-events-none" />
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 font-mono tracking-tight tabular-nums drop-shadow-sm">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold dark:text-white text-slate-900 mt-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {isUrdu ? stat.labelUrdu : stat.label}
                </div>
                <p className="text-xs dark:text-slate-400 text-slate-500 leading-normal mt-1">
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
