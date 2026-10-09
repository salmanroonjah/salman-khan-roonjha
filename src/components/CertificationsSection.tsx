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
      className="py-16 sm:py-28 border-b transition-colors duration-300 dark:border-white/[0.08] border-slate-200/80 dark:bg-[#070913]/70 bg-white/60 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase text-cyan-600 dark:text-cyan-400 dark:bg-cyan-950/40 bg-cyan-50 border dark:border-cyan-500/30 border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
            <Award className="w-3.5 h-3.5 text-cyan-500" />
            <span>{isUrdu ? 'عالمی اسناد و شناخت' : 'Credentials & Honors'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight">
            {isUrdu ? 'اسناد اور بین الاقوامی شناخت' : 'Certifications & Recognition'}
          </h2>
          <p className="dark:text-slate-300 text-slate-600 text-sm sm:text-base leading-relaxed">
            {isUrdu
              ? 'مصنوعی ذہانت اور نوجوانوں کی بین الاقوامی قیادت میں حاصل کردہ معتبر اسناد۔'
              : 'Accreditations and global delegations validating expertise in artificial intelligence pedagogy and youth leadership.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.certifications.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-3xl p-8 sm:p-10 cyber-glass-card border transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1 ${
                cert.highlight
                  ? 'dark:bg-slate-900/75 bg-white/80 dark:border-cyan-500/40 border-cyan-500/30 hover:dark:border-cyan-400 hover:border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                  : 'dark:bg-slate-900/60 bg-white/75 dark:border-white/[0.1] border-slate-200/90 hover:dark:border-white/[0.25] hover:border-slate-300'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold">
                    <ShieldCheck className="w-4 h-4 text-cyan-500" />
                    <span>{cert.year}</span>
                  </div>
                  <span className="dark:text-slate-400 text-slate-500">
                    {isUrdu ? cert.issuerUrdu : cert.issuer}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold dark:text-white text-slate-900 tracking-tight leading-snug">
                    {isUrdu ? cert.titleUrdu : cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-1">
                    {isUrdu ? cert.issuerUrdu : cert.issuer}
                  </p>
                </div>

                <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed font-normal">
                  {isUrdu ? cert.descriptionUrdu : cert.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t dark:border-white/[0.08] border-slate-200/80 flex items-center justify-between text-xs dark:text-slate-400 text-slate-500 font-mono">
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                  {cert.id === 'russia-youth-fest' ? '1 of 10,000 Leaders (191 Countries)' : 'Verified Credential'}
                </span>
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
