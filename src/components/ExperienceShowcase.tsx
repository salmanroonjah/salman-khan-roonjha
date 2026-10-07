import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Download, CheckCircle2 } from 'lucide-react';

interface ExperienceShowcaseProps {
  lang: 'en' | 'ur';
  onOpenResume: () => void;
}

export const ExperienceShowcase: React.FC<ExperienceShowcaseProps> = ({ lang, onOpenResume }) => {
  const isUrdu = lang === 'ur';

  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-slate-800/80 bg-[#0E131F] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with [Download Full CV] button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isUrdu ? 'پیشہ ورانہ سفر' : 'Professional Journey'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {isUrdu ? 'تجربہ اور فیلڈ قیادت (Experience)' : 'Professional Experience'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              {isUrdu
                ? 'بلوچستان کے تعلیمی اداروں اور کمیونٹیز میں فیلڈ آپریشنز، تدریس اور ڈیجیٹل مینجمنٹ کی قیادت۔'
                : 'A track record of field operations, training delivery, creative leadership, and digital infrastructure management across Balochistan.'}
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20 self-start md:self-auto cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>{isUrdu ? 'مکمل سی وی ڈاؤن لوڈ کریں' : 'Download Full CV'}</span>
          </button>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {portfolioData.experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-7 sm:p-9 hover:border-emerald-500/40 transition-all shadow-md group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {isUrdu ? exp.roleUrdu : exp.role}
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5">
                    {isUrdu ? exp.organizationUrdu : exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-200 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isUrdu ? exp.periodUrdu : exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{isUrdu ? exp.locationUrdu : exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary line */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                {isUrdu ? exp.summaryUrdu : exp.summary}
              </p>

              {/* Bullet points */}
              <div className="pt-5 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-400">
                {(isUrdu ? exp.bulletsUrdu : exp.bullets).map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Earlier Field Roles Card */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-7 sm:p-8 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              {isUrdu ? portfolioData.earlierRoles.titleUrdu : portfolioData.earlierRoles.title}
            </div>
            <p className="text-white text-sm sm:text-base font-semibold">
              {isUrdu ? portfolioData.earlierRoles.descriptionUrdu : portfolioData.earlierRoles.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {portfolioData.earlierRoles.roles.map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl text-xs space-y-1">
                  <div className="font-bold text-white">{item.title} · <span className="text-emerald-400">{item.project}</span></div>
                  <div className="text-slate-400">{item.scope}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
