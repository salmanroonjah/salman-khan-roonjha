import React, { useState } from 'react';
import { portfolioData, ExperienceItem } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

interface ExperienceShowcaseProps {
  lang: 'en' | 'ur';
  onSelectExperience: (item: ExperienceItem) => void;
}

export const ExperienceShowcase: React.FC<ExperienceShowcaseProps> = ({
  lang,
  onSelectExperience,
}) => {
  const isUrdu = lang === 'ur';
  const [filter, setFilter] = useState<'all' | 'edtech' | 'health' | 'crisis' | 'agritech'>('all');

  const filteredExperiences = portfolioData.experiences.filter((exp) => {
    if (filter === 'all') return true;
    return exp.category === filter;
  });

  const categories = [
    { key: 'all', label: 'All Initiatives', labelUrdu: 'تمام منصوبے' },
    { key: 'edtech', label: 'AI & EdTech', labelUrdu: 'اے آئی و تعلیم' },
    { key: 'health', label: 'Public Health', labelUrdu: 'صحتِ عامہ' },
    { key: 'crisis', label: 'Disaster Relief', labelUrdu: 'سیلاب و آفات' },
    { key: 'agritech', label: 'Agri-Tech & Climate', labelUrdu: 'ماحولیات و زراعت' },
  ];

  return (
    <section id="experience" className="py-16 bg-[#fafaf8] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-1">
              <span>{isUrdu ? 'پیشہ ورانہ سفر' : 'Track Record & Leadership'}</span>
              <span aria-hidden="true">·</span>
              <span>{isUrdu ? 'عملی تجربہ' : 'Field-Verified Impact'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {isUrdu ? 'پیشہ ورانہ تجربات اور فیلڈ منصوبے' : 'Professional Experience & Field Initiatives'}
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              {isUrdu
                ? 'تعلیم، صحت، قدرتی آفات اور موسمیاتی پائیداری کے شعبوں میں نچلی سطح پر کی گئی قیادت اور عملی کام کا احاطہ۔'
                : 'Direct field supervisory and instructional roles bridging technical tools with grassroots reality in Balochistan.'}
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-lg overflow-x-auto self-start md:self-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  filter === cat.key
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {isUrdu ? cat.labelUrdu : cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {filteredExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white border border-stone-200/90 rounded-xl p-6 shadow-2xs hover:border-emerald-700/40 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold mb-1">
                    <span>{isUrdu ? exp.categoryLabelUrdu : exp.categoryLabel}</span>
                    <span aria-hidden="true" className="text-stone-300">·</span>
                    <span className="text-stone-500 font-medium">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                    {isUrdu ? exp.roleUrdu : exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-stone-700 mt-0.5">
                    {isUrdu ? exp.organizationUrdu : exp.organization}
                  </div>
                </div>

                {/* Metadata: Period & Location (Unboxed text with separators) */}
                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-x-3 gap-y-1 text-xs text-stone-500 shrink-0">
                  <div className="flex items-center gap-1.5 font-medium text-stone-700">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{isUrdu ? exp.periodUrdu : exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-stone-700 mb-4 leading-relaxed font-normal">
                {isUrdu ? exp.summaryUrdu : exp.summary}
              </p>

              {/* Bullet Points directly from CV */}
              <div className="space-y-2 mb-5">
                {(isUrdu ? exp.bulletsUrdu : exp.bullets).map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Footer of Card: Tools & Skills (Clean inline tags) + Impact + Deep Dive Action */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                {/* Tools as clean text items */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-stone-500">
                  <span className="font-semibold text-stone-700">{isUrdu ? 'ٹولز:' : 'Key Tools:'}</span>
                  {exp.toolsAndSkills.map((tool, tIdx) => (
                    <React.Fragment key={tool}>
                      <span className="text-stone-700">{tool}</span>
                      {tIdx < exp.toolsAndSkills.length - 1 && (
                        <span aria-hidden="true" className="text-stone-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Case Study Details Button */}
                <button
                  onClick={() => onSelectExperience(exp)}
                  className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 hover:text-emerald-950 transition-colors self-start sm:self-auto cursor-pointer"
                >
                  <span>{isUrdu ? 'کیس اسٹڈی کی تفصیلات' : 'View Full Case Study'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
