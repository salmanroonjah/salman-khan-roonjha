import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Brain, Laptop, Video, CalendarCheck, Sparkles } from 'lucide-react';

interface WhatIDoSectionProps {
  lang: 'en' | 'ur';
}

export const WhatIDoSection: React.FC<WhatIDoSectionProps> = ({ lang }) => {
  const { data } = usePortfolio();
  const isUrdu = lang === 'ur';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-sky-400" />;
      case 'Video':
        return <Video className="w-6 h-6 text-violet-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section 
      id="what-i-do" 
      className="py-24 sm:py-32 border-b transition-colors duration-300 dark:border-white/[0.08] border-slate-200/80 dark:bg-[#070913]/60 bg-slate-50/50 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase text-indigo-600 dark:text-indigo-400 dark:bg-indigo-950/40 bg-indigo-50 border dark:border-indigo-500/30 border-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.15)]">
            {isUrdu ? 'بنیادی مہارتیں' : 'Core Capabilities'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            {isUrdu ? 'میں کیا کام کرتا ہوں (What I Do)' : 'What I Do'}
          </h2>
          <p className="dark:text-slate-300 text-slate-600 text-sm sm:text-base leading-relaxed">
            {isUrdu
              ? 'مقامی زبانوں میں مصنوعی ذہانت کی تدریس، ڈیجیٹل خواندگی، تخلیقی مواد کی تیاری اور فیلڈ پروگراموں کا انتظام۔'
              : 'Empowering communities through localized AI literacy, digital fundamentals, creative digital storytelling, and hands-on program leadership.'}
          </p>
        </div>

        {/* 4 Feature Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.whatIDo.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-8 sm:p-10 cyber-glass-card dark:bg-slate-900/60 bg-white/75 border dark:border-white/[0.1] border-slate-200/90 hover:dark:border-cyan-400/50 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl dark:bg-slate-800/80 bg-slate-100 border dark:border-white/10 border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all">
                  {getIcon(item.iconName)}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold dark:text-white text-slate-900 tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {isUrdu ? item.titleUrdu : item.title}
                  </h3>
                  <p className="dark:text-slate-300 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {isUrdu ? item.descriptionUrdu : item.description}
                  </p>
                </div>
              </div>

              {/* Tag metadata */}
              <div className="pt-6 mt-6 border-t dark:border-white/[0.08] border-slate-200/80 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs dark:text-slate-400 text-slate-500 font-mono">
                {item.tags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span className="dark:text-slate-300 text-slate-700 font-medium">{tag}</span>
                    {idx < item.tags.length - 1 && (
                      <span aria-hidden="true" className="dark:text-white/20 text-slate-300">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
