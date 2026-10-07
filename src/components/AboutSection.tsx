import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { User, Globe, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  lang: 'en' | 'ur';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  return (
    <section id="about" className="py-20 sm:py-24 border-b border-slate-800/80 bg-[#0E131F] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {/* About Me Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isUrdu ? 'میرے بارے میں' : 'About Me'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              {isUrdu
                ? 'ٹیکنالوجی کو ہر ایک کے لیے ان کی اپنی زبان میں قابل فہم بنانا'
                : 'Making Technology Accessible in Local Languages'}
            </h2>
            <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-2">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>{isUrdu ? 'زبانوں میں مہارت' : 'Languages Spoken'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isUrdu
                  ? 'میں اردو، بلوچی، براہوی اور انگریزی بولتا ہوں۔'
                  : 'I speak Urdu, Balochi, Brahui and English.'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {(isUrdu ? portfolioData.about.paragraphsUrdu : portfolioData.about.paragraphs).map(
              (paragraph, idx) => (
                <p key={idx} className={isUrdu ? 'font-urdu leading-loose text-right text-slate-200' : 'text-slate-300'}>
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>

        {/* 4. Impact in Numbers */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-semibold mb-8">
            {isUrdu ? 'اعداد و شمار پر مبنی اثرات' : 'Impact in Numbers'}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {portfolioData.impact.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl space-y-2 hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-mono tabular-nums">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                    {stat.value}
                  </span>
                </div>
                <div className="text-sm font-bold text-white">
                  {isUrdu ? stat.labelUrdu : stat.label}
                </div>
                <p className="text-xs text-slate-400 leading-normal">
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
