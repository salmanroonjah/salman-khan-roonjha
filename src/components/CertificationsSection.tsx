import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Globe2, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface CertificationsSectionProps {
  lang: 'en' | 'ur';
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  return (
    <section id="certifications" className="py-20 sm:py-24 border-b border-slate-800/80 bg-[#0B0F17] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isUrdu ? 'عالمی اسناد و شناخت' : 'Credentials & Global Honors'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {isUrdu ? 'اسناد اور بین الاقوامی شناخت' : 'Certifications & Recognition'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isUrdu
              ? 'مصنوعی ذہانت اور نوجوانوں کی بین الاقوامی قیادت میں حاصل کردہ معتبر اسناد۔'
              : 'Accreditations and global delegations validating expertise in artificial intelligence pedagogy and youth leadership.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-3xl p-7 sm:p-9 border transition-all flex flex-col justify-between shadow-lg ${
                cert.highlight
                  ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border-emerald-500/40 hover:border-emerald-400'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{cert.year}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                    {isUrdu ? cert.issuerUrdu : cert.issuer}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {isUrdu ? cert.titleUrdu : cert.title}
                  </h3>
                  <p className="text-xs font-bold text-emerald-400 mt-1">
                    {isUrdu ? cert.issuerUrdu : cert.issuer}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {isUrdu ? cert.descriptionUrdu : cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-emerald-400 font-semibold">
                  {cert.id === 'russia-youth-fest' ? '1 of 10,000 Leaders (191 Countries)' : 'Verified Credential'}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
