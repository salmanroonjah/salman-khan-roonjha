import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
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
  const { data } = usePortfolio();
  const isUrdu = lang === 'ur';

  return (
    <section 
      id="experience" 
      className="py-24 sm:py-32 border-b transition-colors duration-300 dark:border-white/[0.08] border-slate-200/80 dark:bg-[#070913]/70 bg-white/60 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase text-blue-600 dark:text-cyan-400 dark:bg-blue-950/40 bg-blue-50 border dark:border-blue-500/30 border-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.15)]">
              <Briefcase className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
              <span>{isUrdu ? 'پیشہ ورانہ سفر' : 'Leadership & Field Track'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight">
              {isUrdu ? 'تجربہ اور فیلڈ قیادت (Experience)' : 'Professional Experience'}
            </h2>
            <p className="dark:text-slate-300 text-slate-600 text-sm sm:text-base leading-relaxed">
              {isUrdu
                ? 'بلوچستان کے تعلیمی اداروں اور کمیونٹیز میں فیلڈ آپریشنز، تدریس اور ڈیجیٹل مینجمنٹ کی قیادت۔'
                : 'A proven track record of grassroots field operations, master AI pedagogy, creative content, and digital literacy leadership.'}
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3.5 dark:bg-white/[0.03] bg-white/80 hover:dark:bg-white/[0.08] hover:bg-white dark:text-white text-slate-800 text-xs sm:text-sm font-semibold border dark:border-white/[0.12] border-slate-200/90 hover:dark:border-white/[0.25] hover:border-slate-300 rounded-2xl transition-all duration-200 backdrop-blur-md self-start md:self-auto cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]"
          >
            <Download className="w-4 h-4 text-blue-500 dark:text-cyan-400" />
            <span>{isUrdu ? 'مکمل سی وی ڈاؤن لوڈ کریں' : 'Download Full CV'}</span>
          </button>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {data.experience.map((exp) => (
            <div
              key={exp.id}
              className="rounded-3xl p-8 sm:p-10 cyber-glass-card dark:bg-slate-900/60 bg-white/75 border dark:border-white/[0.1] border-slate-200/90 hover:dark:border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold dark:text-white text-slate-900 tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {isUrdu ? exp.roleUrdu : exp.role}
                  </h3>
                  <div className="text-sm sm:text-base font-semibold text-blue-600 dark:text-cyan-400 mt-1">
                    {isUrdu ? exp.organizationUrdu : exp.organization}
                  </div>

                  {/* Organization Social & Web Links Bar (WANG, Urdu AI, etc.) */}
                  {exp.links && (
                    <div className="flex flex-wrap items-center gap-2 mt-3 pt-1">
                      {exp.links.website && (
                        <a
                          href={exp.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium dark:bg-black/40 bg-slate-100 dark:text-slate-300 text-slate-700 hover:dark:text-white hover:text-slate-950 border dark:border-white/[0.08] border-slate-200 transition-colors"
                          title="Official Website"
                        >
                          <Globe className="w-3.5 h-3.5 text-blue-500" />
                          <span>Website</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      )}

                      {exp.links.linkedin && (
                        <a
                          href={exp.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium dark:bg-black/40 bg-slate-100 text-sky-500 hover:text-sky-600 border dark:border-white/[0.08] border-slate-200 transition-colors"
                          title="LinkedIn Page"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                          </svg>
                          <span>LinkedIn</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      )}

                      {exp.links.instagram && (
                        <a
                          href={exp.links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium dark:bg-black/40 bg-slate-100 text-pink-500 hover:text-pink-600 border dark:border-white/[0.08] border-slate-200 transition-colors"
                          title="Instagram Profile"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <span>Instagram</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs dark:text-slate-400 text-slate-500 font-mono">
                  <div className="flex items-center gap-1.5 font-medium dark:text-slate-200 text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{isUrdu ? exp.periodUrdu : exp.period}</span>
                  </div>
                  <span aria-hidden="true" className="dark:text-white/20 text-slate-300">·</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{isUrdu ? exp.locationUrdu : exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary description */}
              <p className="dark:text-slate-300 text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {isUrdu ? exp.summaryUrdu : exp.summary}
              </p>

              {/* Bullet points */}
              {exp.bullets && (
                <div className="pt-6 border-t dark:border-white/[0.08] border-slate-200/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm dark:text-slate-400 text-slate-600">
                  {((isUrdu && exp.bulletsUrdu && exp.bulletsUrdu.length > 0) ? exp.bulletsUrdu : exp.bullets).map((bullet: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="dark:text-slate-300 text-slate-700 leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Earlier Field Roles Card */}
          <div className="rounded-3xl p-8 sm:p-10 cyber-glass-card dark:bg-slate-900/60 bg-white/75 border dark:border-white/[0.08] border-slate-200/90 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-bold">
              {isUrdu ? data.earlierRoles.titleUrdu : data.earlierRoles.title}
            </div>
            <p className="dark:text-white text-slate-900 text-sm sm:text-base font-semibold">
              {isUrdu ? data.earlierRoles.descriptionUrdu : data.earlierRoles.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {data.earlierRoles.roles.map((item, idx: number) => (
                <div key={idx} className="p-4 rounded-2xl dark:bg-black/40 bg-slate-100/90 border dark:border-white/[0.06] border-slate-200/90 text-xs space-y-1 shadow-inner">
                  <div className="font-bold dark:text-white text-slate-900">{item.title} · <span className="text-blue-600 dark:text-cyan-400 font-mono">{item.project}</span></div>
                  <div className="dark:text-slate-400 text-slate-600">{item.scope}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
