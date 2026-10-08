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
    <section id="what-i-do" className="py-20 sm:py-24 border-b border-slate-800/80 bg-[#0B0F17] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-3">
            {isUrdu ? 'میری بنیادی خدمات' : 'Core Capabilities'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {isUrdu ? 'میں کیا کام کرتا ہوں (What I Do)' : 'What I Do'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isUrdu
              ? 'مقامی زبانوں میں مصنوعی ذہانت کی تدریس، ڈیجیٹل خواندگی، تخلیقی مواد کی تیاری اور فیلڈ پروگراموں کا انتظام۔'
              : 'Empowering communities through localized AI literacy, digital fundamentals, creative digital storytelling, and hands-on program leadership.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {data.whatIDo.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 sm:p-9 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/20 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors shadow-inner">
                  {getIcon(item.iconName)}
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {isUrdu ? item.titleUrdu : item.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                    {isUrdu ? item.descriptionUrdu : item.description}
                  </p>
                </div>
              </div>

              {/* Tag metadata */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap gap-x-2 gap-y-1.5 text-xs text-slate-400 font-mono">
                {item.tags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span className="text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                      {tag}
                    </span>
                    {idx < item.tags.length - 1 && (
                      <span aria-hidden="true" className="text-slate-700">·</span>
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
