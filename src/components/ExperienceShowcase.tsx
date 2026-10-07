import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Download, 
  CheckCircle2, 
  Globe, 
  ExternalLink 
} from 'lucide-react';

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
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {isUrdu ? exp.roleUrdu : exp.role}
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5">
                    {isUrdu ? exp.organizationUrdu : exp.organization}
                  </div>

                  {/* Organization Social & Web Links Bar (WANG, Urdu AI, WALI, CSFT) */}
                  {exp.links && (
                    <div className="flex flex-wrap items-center gap-2 mt-3 pt-1">
                      {exp.links.website && (
                        <a
                          href={exp.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                          title="Official Website"
                        >
                          <Globe className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Website</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                      )}

                      {exp.links.linkedin && (
                        <a
                          href={exp.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 text-sky-400 hover:text-sky-300 hover:bg-slate-800 border border-slate-800 transition-colors"
                          title="LinkedIn Page"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                          </svg>
                          <span>LinkedIn</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                      )}

                      {exp.links.instagram && (
                        <a
                          href={exp.links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 text-pink-400 hover:text-pink-300 hover:bg-slate-800 border border-slate-800 transition-colors"
                          title="Instagram Profile"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <span>Instagram</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                      )}

                      {exp.links.facebook && (
                        <a
                          href={exp.links.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-950 text-blue-400 hover:text-blue-300 hover:bg-slate-800 border border-slate-800 transition-colors"
                          title="Facebook Page"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          <span>Facebook</span>
                          <ExternalLink className="w-3 h-3 text-slate-500" />
                        </a>
                      )}
                    </div>
                  )}
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
