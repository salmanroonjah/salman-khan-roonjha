import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface ImpactStatsProps {
  lang: 'en' | 'ur';
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  return (
    <section className="py-10 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="border-l-2 border-emerald-800/80 pl-4 py-1 flex flex-col justify-between"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight tabular-nums">
                {stat.value}
              </span>
              <div className="mt-1">
                <span className="text-sm font-bold text-stone-900 block leading-tight">
                  {isUrdu ? stat.labelUrdu : stat.label}
                </span>
                <span className="text-xs text-stone-500 block mt-1 leading-snug">
                  {stat.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
