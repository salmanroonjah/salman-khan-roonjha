import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  MapPin, 
  FileText, 
  CheckCircle2, 
  Award, 
  ArrowUpRight, 
  Sparkles,
  BookOpen,
  Code2
} from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'ur';
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenResume, onOpenContact }) => {
  const isUrdu = lang === 'ur';

  return (
    <section id="about" className="pt-10 pb-16 border-b border-stone-200/70 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Kicker - Clean unboxed text with typographic separator */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase mb-4">
          <span>{isUrdu ? 'کمیونٹی ڈویلپمنٹ' : 'Community Development'}</span>
          <span aria-hidden="true">·</span>
          <span>{isUrdu ? 'ایڈٹیک و مصنوعی ذہانت' : 'EdTech & AI Pedagogy'}</span>
          <span aria-hidden="true">·</span>
          <span>{isUrdu ? 'اوپن سورس و آفات سے بحالی' : 'Open Source & Disaster Relief'}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Headline & Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
                {isUrdu ? (
                  <span className="font-urdu leading-[2.1] block">
                    دیہی بلوچستان میں مقامی زبان کے ذریعے ڈیجیٹل تفریق کا خاتمہ
                  </span>
                ) : (
                  <span>
                    Bridging the Digital Divide in Balochistan through{' '}
                    <span className="text-emerald-800 underline decoration-emerald-300 underline-offset-4 decoration-2">
                      AI Literacy in Urdu
                    </span>{' '}
                    & Grassroots Action.
                  </span>
                )}
              </h1>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-normal">
                {isUrdu ? (
                  <span className="font-urdu leading-loose block text-right">
                    {portfolioData.personal.summaryUrdu}
                  </span>
                ) : (
                  portfolioData.personal.summary
                )}
              </p>
            </div>

            {/* Location & GitHub Indicator Bar (Unboxed metadata with separators) */}
            <div className="pt-2 border-t border-stone-200/90 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-stone-600">
              <div className="flex items-center gap-1.5 font-medium text-stone-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{isUrdu ? portfolioData.personal.locationUrdu : portfolioData.personal.location}</span>
              </div>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-stone-950 font-medium transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current text-stone-700" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>github.com/salmanroonjah</span>
              </a>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span className="text-emerald-800 font-medium">
                {isUrdu ? 'ورکشاپس اور پراجیکٹس کے لیے دستیاب' : 'Open for EdTech Collaborations'}
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-semibold rounded-md transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>{isUrdu ? 'تعاون یا ورکشاپ کے لیے رابطہ کریں' : 'Invite for Workshop / Collaboration'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 bg-white hover:bg-stone-50 text-stone-800 text-sm font-medium border border-stone-300 rounded-md transition-colors shadow-2xs flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-stone-600" />
                <span>{isUrdu ? 'سی وی کا مکمل جائزہ لیں' : 'View Full Curriculum Vitae'}</span>
              </button>

              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm font-medium border border-stone-200 rounded-md transition-colors flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-stone-700" />
                <span>{isUrdu ? 'گٹ ہب کوڈ دیکھیں' : 'GitHub Repos'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Profile & Verified Credentials Frame */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-stone-200/90 rounded-xl p-6 shadow-xs relative overflow-hidden">
              {/* Subtle Balochi-inspired geometric accent border top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-800 via-stone-700 to-amber-700" />

              <div className="flex items-start gap-4 mb-5">
                {/* Avatar / Monogram */}
                <div className="w-16 h-16 rounded-lg bg-stone-900 text-amber-100 flex flex-col items-center justify-center font-bold text-xl shrink-0 shadow-inner">
                  <span>SK</span>
                  <span className="text-[9px] tracking-widest text-emerald-300 font-sans uppercase">Lasbela</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-xl font-bold text-stone-900 leading-tight">
                      {isUrdu ? portfolioData.personal.nameUrdu : portfolioData.personal.name}
                    </h2>
                    <span title="Verified Professional" className="inline-flex items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    </span>
                  </div>
                  <p className="text-xs font-medium text-stone-600">
                    {isUrdu ? portfolioData.personal.titleUrdu : portfolioData.personal.title}
                  </p>
                  <p className="text-xs text-stone-500">
                    WANG & Wang Lab of Innovation (WALI)
                  </p>
                </div>
              </div>

              {/* Verified Badges & Pillars */}
              <div className="space-y-3 pt-3 border-t border-stone-100 text-xs">
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-stone-800">
                      {isUrdu ? 'ایشیا پیسیفک تصدیق شدہ انسٹرکٹر' : 'Asia-Pacific Certified Instructor (2025)'}
                    </span>
                    <p className="text-stone-500 text-[11px] mt-0.5">
                      AI Opportunity Fund by AI Singapore & AVPN (8-week intensive AI pedagogy)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-stone-800">
                      {isUrdu ? 'اردو اے آئی و ڈیجیٹل لٹریسی ٹرینر' : 'Urdu AI & Digital Literacy Trainer'}
                    </span>
                    <p className="text-stone-500 text-[11px] mt-0.5">
                      {isUrdu 
                        ? 'مفت ورکشاپس کے ذریعے دیہی نوجوانوں کو پرامپٹ انجینئرنگ کی تعلیم' 
                        : 'Democratizing Generative AI prompt engineering for rural learners'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-stone-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-stone-800">
                      {isUrdu ? 'بی ایس کمپیوٹر سائنس (LUAWMS)' : 'BS Computer Science (LUAWMS, 2019-2023)'}
                    </span>
                    <p className="text-stone-500 text-[11px] mt-0.5">
                      B.Ed in Educational Pedagogy in progress (AIOU)
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Quote / Mission statement */}
              <div className="mt-5 p-3.5 bg-stone-50 rounded-lg border border-stone-200/60 text-xs text-stone-700 italic">
                "{isUrdu ? portfolioData.testimonialsAndQuotes[0].quoteUrdu : portfolioData.testimonialsAndQuotes[0].quote}"
                <div className="mt-1.5 not-italic font-semibold text-[11px] text-stone-900 text-right">
                  — {isUrdu ? portfolioData.personal.nameUrdu : portfolioData.personal.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
