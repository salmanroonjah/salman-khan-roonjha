import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CertificationsSectionProps {
  lang: 'en' | 'ur';
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ lang }) => {
  const { data } = usePortfolio();
  const isUrdu = lang === 'ur';

  return (
    <section 
      id="certifications" 
      className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#07080B] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wide uppercase text-emerald-400">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isUrdu ? 'عالمی اسناد و شناخت' : 'Credentials & Honors'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {isUrdu ? 'اسناد اور بین الاقوامی شناخت' : 'Certifications & Recognition'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isUrdu
              ? 'مصنوعی ذہانت اور نوجوانوں کی بین الاقوامی قیادت میں حاصل کردہ معتبر اسناد۔'
              : 'Accreditations and global delegations validating expertise in artificial intelligence pedagogy and youth leadership.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.certifications.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between shadow-xl ${
                cert.highlight
                  ? 'bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-emerald-950/20 border-emerald-500/40 hover:border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.1)]'
                  : 'bg-white/[0.02] border-white/[0.08] hover:border-white/[0.2]'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{cert.year}</span>
                  </div>
                  <span className="text-slate-400">
                    {isUrdu ? cert.issuerUrdu : cert.issuer}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                    {isUrdu ? cert.titleUrdu : cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                    {isUrdu ? cert.issuerUrdu : cert.issuer}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {isUrdu ? cert.descriptionUrdu : cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="text-emerald-400 font-medium">
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
