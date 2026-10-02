import React, { useEffect } from 'react';
import { ExperienceItem } from '../data/portfolioData';
import { X, Calendar, MapPin, CheckCircle, Target, ShieldCheck } from 'lucide-react';

interface ProjectDetailModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
  lang: 'en' | 'ur';
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  experience,
  onClose,
  lang,
}) => {
  const isUrdu = lang === 'ur';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (experience) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [experience, onClose]);

  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-stone-200 bg-[#fafaf8] flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              <span>{isUrdu ? experience.categoryLabelUrdu : experience.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{experience.location}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
              {isUrdu ? experience.roleUrdu : experience.role}
            </h2>
            <div className="text-sm font-semibold text-stone-700 mt-1">
              {isUrdu ? experience.organizationUrdu : experience.organization}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-800">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pb-4 border-b border-stone-100">
            <div className="flex items-center gap-1.5 font-medium text-stone-700">
              <Calendar className="w-4 h-4 text-stone-400" />
              <span>{isUrdu ? experience.periodUrdu : experience.period}</span>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5 font-medium text-stone-700">
              <MapPin className="w-4 h-4 text-stone-400" />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Key Impact Metric Banner */}
          {experience.impactMetric && (
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-4 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                  {isUrdu ? 'فیلڈ میں حاصل شدہ کامیابی' : 'Field Impact Metric'}
                </span>
                <p className="text-sm font-medium text-emerald-950 mt-0.5">
                  {isUrdu ? experience.impactMetricUrdu : experience.impactMetric}
                </p>
              </div>
            </div>
          )}

          {/* Executive Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              {isUrdu ? 'منصوبے کا تعارف اور مقصد' : 'Initiative Overview'}
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed font-normal">
              {isUrdu ? experience.summaryUrdu : experience.summary}
            </p>
          </div>

          {/* Core CV Action Items */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              {isUrdu ? 'اہم ذمہ داریاں اور فیلڈ نتائج' : 'Field Responsibilities & Key Deliverables'}
            </h3>
            <div className="space-y-3">
              {(isUrdu ? experience.bulletsUrdu : experience.bullets).map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Methodologies */}
          <div className="pt-4 border-t border-stone-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
              {isUrdu ? 'استعمال شدہ ٹیکنالوجی اور فریم ورک' : 'Applied Tech Stack & Frameworks'}
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {experience.toolsAndSkills.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-stone-100 text-stone-800 rounded-md font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
          >
            {isUrdu ? 'بند کریں' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
