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
        return <Brain className="w-6 h-6 text-emerald-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-emerald-400" />;
      case 'Video':
        return <Video className="w-6 h-6 text-emerald-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section 
      id="what-i-do" 
      className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#07080B] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-mono font-medium tracking-wide uppercase text-emerald-400">
            {isUrdu ? 'بنیادی مہارتیں' : 'Core Capabilities'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {isUrdu ? 'میں کیا کام کرتا ہوں (What I Do)' : 'What I Do'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
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
              className="rounded-3xl p-8 sm:p-10 bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  {getIcon(item.iconName)}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {isUrdu ? item.titleUrdu : item.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {isUrdu ? item.descriptionUrdu : item.description}
                  </p>
                </div>
              </div>

              {/* Clean unboxed tag metadata (No pills) */}
              <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400 font-mono">
                {item.tags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span className="text-slate-300 font-medium">{tag}</span>
                    {idx < item.tags.length - 1 && (
                      <span aria-hidden="true" className="text-white/20">·</span>
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
