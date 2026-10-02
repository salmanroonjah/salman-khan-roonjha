import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Download, Check, Mail, Phone, MapPin, Copy } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ur';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  const isUrdu = lang === 'ur';
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextCV = () => {
    const textCV = `
SALMAN KHAN
Community Development Practitioner & EdTech Trainer
Lasbela, Balochistan | GitHub: github.com/salmankhan

PROFESSIONAL SUMMARY:
${portfolioData.personal.summary}

PROFESSIONAL EXPERIENCE:
${portfolioData.experiences
  .map(
    (exp) => `
• ${exp.role} – ${exp.organization} | ${exp.period} | ${exp.location}
${exp.bullets.map((b) => `  - ${b}`).join('\n')}`
  )
  .join('\n')}

EDUCATION:
${portfolioData.education
  .map((edu) => `• ${edu.degree} – ${edu.institution} | ${edu.period}`)
  .join('\n')}

CERTIFICATIONS & AWARDS:
${portfolioData.certifications
  .map((cert) => `• ${cert.title} (${cert.issuer}) – ${cert.year}\n  ${cert.description}`)
  .join('\n')}

SKILLS:
• Community Development: ${portfolioData.skills.community.skills.map((s) => s.name).join(', ')}
• Technical: ${portfolioData.skills.technical.skills.map((s) => s.name).join(', ')}
• Creative: ${portfolioData.skills.creative.skills.map((s) => s.name).join(', ')}
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs transition-opacity">
      <div
        className="relative w-full max-w-4xl bg-stone-100 rounded-2xl shadow-2xl border border-stone-300 overflow-hidden max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="p-4 bg-white border-b border-stone-200 flex items-center justify-between gap-3 shrink-0 no-print">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-stone-900">
              {isUrdu ? 'باضابطہ نصابِ حیات (CV)' : 'Official Curriculum Vitae'}
            </span>
            <span className="text-xs text-stone-400 font-mono">v2025</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyTextCV}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-md transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isUrdu ? 'پرنٹ یا پی ڈی ایف محفوظ کریں' : 'Print / Save PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-md transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-stone-200/50 print:bg-white print:p-0">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 shadow-md print:shadow-none print:border-none border border-stone-200 text-stone-900 rounded-lg print:rounded-none">
            {/* Header */}
            <div className="border-b border-stone-300 pb-5 mb-6 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 uppercase">
                SALMAN KHAN
              </h1>
              <p className="text-sm font-semibold text-emerald-800 mt-1">
                Community Development Practitioner & EdTech Trainer
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-stone-600 mt-2 font-sans">
                <span>Lasbela, Balochistan, Pakistan</span>
                <span aria-hidden="true" className="text-stone-300">|</span>
                <a
                  href="https://github.com/salmankhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-mono text-stone-700"
                >
                  github.com/salmankhan
                </a>
                <span aria-hidden="true" className="text-stone-300">|</span>
                <span>WANG & WALI Innovation Lab</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-bold tracking-wider uppercase text-stone-900 border-b border-stone-200 pb-1 mb-2 font-mono">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                {portfolioData.personal.summary}
              </p>
            </div>

            {/* Professional Experience */}
            <div className="mb-6">
              <h2 className="text-xs font-bold tracking-wider uppercase text-stone-900 border-b border-stone-200 pb-1 mb-4 font-mono">
                PROFESSIONAL EXPERIENCE
              </h2>

              <div className="space-y-5">
                {portfolioData.experiences.map((exp) => (
                  <div key={exp.id} className="text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-stone-900 gap-1">
                      <div>
                        <span>{exp.role}</span>
                        <span className="font-normal text-stone-700"> – {exp.organization}</span>
                      </div>
                      <div className="text-xs text-stone-500 font-mono font-medium shrink-0">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="mt-2 space-y-1.5 list-disc list-outside pl-4 text-xs text-stone-700 leading-relaxed">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xs font-bold tracking-wider uppercase text-stone-900 border-b border-stone-200 pb-1 mb-3 font-mono">
                EDUCATION
              </h2>

              <div className="space-y-3 text-xs sm:text-sm">
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-bold text-stone-900">{edu.degree}</span>
                      <span className="text-stone-700"> – {edu.institution}</span>
                    </div>
                    <span className="text-xs text-stone-500 font-mono shrink-0">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Awards */}
            <div className="mb-6">
              <h2 className="text-xs font-bold tracking-wider uppercase text-stone-900 border-b border-stone-200 pb-1 mb-3 font-mono">
                CERTIFICATIONS & AWARDS
              </h2>

              <div className="space-y-3 text-xs sm:text-sm">
                {portfolioData.certifications.map((cert) => (
                  <div key={cert.id} className="text-xs text-stone-700">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-bold text-stone-900">
                        {cert.title} ({cert.issuer})
                      </span>
                      <span className="text-stone-500 font-mono shrink-0">{cert.year}</span>
                    </div>
                    <p className="mt-0.5 text-stone-600 pl-3 border-l-2 border-stone-200">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold tracking-wider uppercase text-stone-900 border-b border-stone-200 pb-1 mb-3 font-mono">
                SKILLS
              </h2>

              <div className="space-y-2 text-xs text-stone-700">
                <div>
                  <span className="font-bold text-stone-900">Community Development: </span>
                  <span>{portfolioData.skills.community.skills.map((s) => s.name).join(', ')}</span>
                </div>
                <div>
                  <span className="font-bold text-stone-900">Technical: </span>
                  <span>{portfolioData.skills.technical.skills.map((s) => s.name).join(', ')}</span>
                </div>
                <div>
                  <span className="font-bold text-stone-900">Creative: </span>
                  <span>{portfolioData.skills.creative.skills.map((s) => s.name).join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
