import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';

interface CertificationsEducationProps {
  lang: 'en' | 'ur';
}

export const CertificationsEducation: React.FC<CertificationsEducationProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  return (
    <section id="certifications" className="py-16 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Certifications & Fellowships (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-1">
                <Award className="w-3.5 h-3.5 text-emerald-700" />
                <span>{isUrdu ? 'بین الاقوامی و قومی اسناد' : 'Accreditations & Training'}</span>
                <span aria-hidden="true">·</span>
                <span>{isUrdu ? 'تصدیق شدہ قابلیت' : 'Verified Pedagogy'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                {isUrdu ? 'سرٹیفیکیشنز اور اعزازات' : 'Certifications & Accreditations'}
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                {isUrdu
                  ? 'مصنوعی ذہانت، ریسرچ، اور ماحولیاتی ایکشن کے شعبوں میں حاصل کردہ باضابطہ تربیتی اسناد۔'
                  : 'Specialized certifications validating instructional pedagogy, data collection accuracy, and climate action.'}
              </p>
            </div>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#fafaf8] border border-stone-200/90 rounded-xl p-5 hover:border-emerald-700/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-emerald-800 font-semibold uppercase">
                          {cert.badge}
                        </span>
                        <span aria-hidden="true" className="text-stone-300">·</span>
                        <span className="text-xs text-stone-500 font-medium">{cert.year}</span>
                      </div>
                      <h3 className="text-base font-bold text-stone-900 leading-snug">
                        {isUrdu ? cert.titleUrdu : cert.title}
                      </h3>
                      <div className="text-xs font-semibold text-stone-700">
                        {isUrdu ? cert.issuerUrdu : cert.issuer}
                      </div>
                    </div>

                    <div className="p-1.5 bg-emerald-100/70 text-emerald-800 rounded-md shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal mt-2">
                    {isUrdu ? cert.descriptionUrdu : cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Degrees & Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-1">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                <span>{isUrdu ? 'تعلیمی پس منظر' : 'Academic Foundation'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                {isUrdu ? 'تعلیم و تدریسی ڈگری' : 'Academic Degrees'}
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                {isUrdu
                  ? 'کمپیوٹر سائنس کی مضبوط بنیاد اور تعلیمی تدریس کی اعلیٰ تعلیم۔'
                  : 'Rigorous technical foundation in Computer Science complemented by professional Education pedagogy.'}
              </p>
            </div>

            <div className="space-y-4">
              {portfolioData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-[#fafaf8] border border-stone-200/90 rounded-xl p-5"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[11px] font-mono text-stone-500 font-medium">
                        {edu.period}
                      </span>
                      <h3 className="text-base font-bold text-stone-900 mt-0.5">
                        {isUrdu ? edu.degreeUrdu : edu.degree}
                      </h3>
                    </div>

                    {edu.status && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100/80 text-amber-900 whitespace-nowrap">
                        {edu.status}
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-semibold text-emerald-800 mb-2">
                    {isUrdu ? edu.institutionUrdu : edu.institution}
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {isUrdu ? edu.detailsUrdu : edu.details}
                  </p>
                </div>
              ))}

              {/* Research & Technical Synergy Box */}
              <div className="p-4 bg-emerald-950 text-white rounded-xl text-xs space-y-2">
                <div className="font-bold text-emerald-300">
                  {isUrdu ? 'تکنیک اور تدریس کا باہمی ربط' : 'The Tech-Pedagogy Synthesis'}
                </div>
                <p className="text-stone-300 leading-relaxed">
                  {isUrdu
                    ? 'کمپیوٹر سائنس (LUAWMS) کے تکنیکی فہم اور بی ایڈ (AIOU) کے تدریسی اصولوں کا ملاپ سلمان کو جدید اے آئی کے مشکل ترین تصورات کو گاؤں کے بچوں کے لیے آسان بنانے کی منفرد صلاحیت دیتا ہے۔'
                    : 'The intersection of a rigorous Computer Science degree (LUAWMS) and formal B.Ed pedagogy (AIOU) enables Salman to translate intricate technical architectures into intuitive, culturally resonant community modules.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
