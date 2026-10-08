import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, Printer, Check, Copy, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ur';
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  const { data } = usePortfolio();
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
AI Trainer · Digital Literacy Specialist · Creative Professional
Bela, Lasbela, Balochistan, Pakistan | ${data.contact.phone} | ${data.contact.email}
LinkedIn: ${data.contact.linkedIn}

PROFESSIONAL SUMMARY:
${data.about.paragraphs.join('\n\n')}

LANGUAGES:
${data.about.languages.join(', ')}

IMPACT IN NUMBERS:
${data.impact.map((s) => `• ${s.value} ${s.label}`).join('\n')}

PROFESSIONAL EXPERIENCE:
${data.experience
  .map(
    (exp) => `
• ${exp.role} – ${exp.organization} | ${exp.period} | ${exp.location}
${exp.bullets.map((b) => `  - ${b}`).join('\n')}`
  )
  .join('\n')}

EARLIER FIELD ROLES:
${data.earlierRoles.description}

CERTIFICATIONS & RECOGNITION:
${data.certifications
  .map((cert) => `• ${cert.title} (${cert.issuer}) – ${cert.year}\n  ${cert.description}`)
  .join('\n')}

CORE CAPABILITIES:
${data.whatIDo.map((item) => `• ${item.title}: ${item.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm transition-opacity">
      <div
        className="relative w-full max-w-4xl cyber-glass-card dark:bg-[#0B0F19]/95 bg-white/95 rounded-3xl shadow-2xl border dark:border-white/[0.15] border-slate-300 overflow-hidden max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar with Professional Document Header */}
        <div className="p-4 sm:p-5 dark:bg-black/60 bg-slate-100/80 border-b dark:border-white/[0.08] border-slate-200 flex items-center justify-between gap-3 shrink-0 no-print">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="text-white/20 dark:text-white/20 text-slate-300">|</span>
            <span className="text-sm font-bold dark:text-white text-slate-900">
              {isUrdu ? 'باضابطہ نصابِ حیات (CV)' : 'Official Curriculum Vitae'}
            </span>
            <span className="text-xs text-blue-600 dark:text-cyan-400 font-mono font-bold">Salman Khan</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyTextCV}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold dark:text-slate-200 text-slate-700 dark:bg-white/[0.04] bg-white hover:dark:bg-white/[0.08] hover:bg-slate-50 rounded-xl border dark:border-white/10 border-slate-200 transition-colors cursor-pointer shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:brightness-110 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isUrdu ? 'پرنٹ یا پی ڈی ایف محفوظ کریں' : 'Print / Save PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-950 rounded-xl transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="overflow-y-auto p-4 sm:p-8 dark:bg-slate-950 bg-slate-100 print:bg-white print:p-0">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 shadow-md print:shadow-none print:border-none border border-stone-200 text-stone-900 rounded-lg print:rounded-none space-y-6">
            {/* Header */}
            <div className="border-b border-stone-300 pb-5 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900 uppercase">
                SALMAN KHAN
              </h1>
              <p className="text-sm font-bold text-blue-700 dark:text-blue-400 mt-1">
                AI Trainer · Digital Literacy Specialist · Creative Professional
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-stone-600 mt-2 font-sans">
                <span>{data.contact.location}</span>
                <span aria-hidden="true" className="text-stone-300">|</span>
                <span>{data.contact.phone}</span>
                <span aria-hidden="true" className="text-stone-300">|</span>
                <a href={`mailto:${data.contact.email}`} className="hover:underline">
                  {data.contact.email}
                </a>
                <span aria-hidden="true" className="text-stone-300">|</span>
                <a href={data.contact.linkedIn} className="hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold tracking-wider uppercase text-stone-900 border-b border-stone-200 pb-1 font-mono">
                ABOUT ME
              </h2>
              {data.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  {p}
                </p>
              ))}
              <div className="text-xs text-stone-600 pt-1 font-semibold">
                Languages Spoken: <span className="font-normal">{data.about.languages.join(', ')}</span>
              </div>
            </div>

            {/* Impact in Numbers */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold tracking-wider uppercase text-stone-900 border-b border-stone-200 pb-1 font-mono">
                IMPACT IN NUMBERS
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-1">
                {data.impact.map((stat, idx) => (
                  <div key={idx} className="p-2 bg-stone-50 rounded border border-stone-200 text-center">
                    <div className="text-lg font-black text-stone-900 font-mono">{stat.value}</div>
                    <div className="text-[11px] text-stone-600 font-medium leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-wider uppercase text-stone-900 border-b border-stone-200 pb-1 font-mono">
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="text-xs space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-stone-900">
                      <span>{exp.role} · <span className="text-blue-700 dark:text-blue-400">{exp.organization}</span></span>
                      <span className="text-stone-500 font-mono font-normal text-[11px]">{exp.period}</span>
                    </div>
                    <p className="text-stone-700 font-medium">{exp.summary}</p>
                    <ul className="list-disc list-inside text-stone-600 pl-1 space-y-0.5">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Earlier Field Roles */}
                <div className="p-3 bg-stone-50 rounded border border-stone-200 text-xs space-y-1">
                  <div className="font-bold text-stone-900">Earlier Field Roles:</div>
                  <div className="text-stone-700">{data.earlierRoles.description}</div>
                </div>
              </div>
            </div>

            {/* Certifications & Recognition */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold tracking-wider uppercase text-stone-900 border-b border-stone-200 pb-1 font-mono">
                CERTIFICATIONS & RECOGNITION
              </h2>
              <div className="space-y-2 text-xs">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-bold text-stone-900">{cert.title}</div>
                      <div className="text-stone-600 text-[11px]">{cert.description}</div>
                    </div>
                    <span className="font-mono text-stone-500 shrink-0">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
