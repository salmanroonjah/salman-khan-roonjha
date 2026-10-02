import React, { useState } from 'react';
import { portfolioData, UrduPromptExample } from '../data/portfolioData';
import { Sparkles, Copy, Check, Terminal, Lightbulb, Compass, Award } from 'lucide-react';

interface UrduAiShowcaseProps {
  lang: 'en' | 'ur';
}

export const UrduAiShowcase: React.FC<UrduAiShowcaseProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';
  const [selectedExample, setSelectedExample] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const active = portfolioData.urduPromptPlayground[selectedExample];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="urdu-ai" className="py-16 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>{isUrdu ? 'دستخطی تدریسی پروگرام' : 'Signature Educational Framework'}</span>
            <span aria-hidden="true">·</span>
            <span>WANG Urdu AI Program</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {isUrdu
              ? 'مقامی زبان (اردو) میں مصنوعی ذہانت کی تدریس کا طریقہ کار'
              : 'Democratizing Artificial Intelligence in Urdu'}
          </h2>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            {isUrdu
              ? 'تکنیکی اصطلاحات کی انگریزی بندش کو توڑ کر دیہی اور غیر تکنیکی پس منظر رکھنے والے طلبہ کو پرامپٹ انجینئرنگ کے ذریعے عملی مسائل حل کرنے کے قابل بنانا۔'
              : 'By breaking English-only barriers, Salman empowers students in Lasbela to master Generative AI, responsible prompting, and daily productivity using their native language.'}
          </p>
        </div>

        {/* 3 Pillars of Urdu AI Pedagogy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#fafaf8] border border-stone-200 rounded-xl p-5">
            <div className="w-9 h-9 rounded-lg bg-emerald-100/80 text-emerald-800 flex items-center justify-center mb-3">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">
              {isUrdu ? 'مقامی ثقافت سے جڑی مثالیں' : 'Culturally Grounded Analogies'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isUrdu
                ? 'کمپیوٹر سائنس کے تجریدی تصورات کو بلوچستان کی روزمرہ معیشت، زراعت اور دیہی روایات کی مثالوں سے سمجھانا۔'
                : 'Mapping complex AI parameters (temperature, persona, context length) to tangible analogies from daily rural life.'}
            </p>
          </div>

          <div className="bg-[#fafaf8] border border-stone-200 rounded-xl p-5">
            <div className="w-9 h-9 rounded-lg bg-amber-100/80 text-amber-900 flex items-center justify-center mb-3">
              <Terminal className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">
              {isUrdu ? 'عملی پرامپٹ انجینئرنگ' : 'Hands-on Prompt Engineering'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isUrdu
                ? 'طلبہ کو یہ سکھانا کہ کمپیوٹر کو سلیس اردو میں واضح احکامات اور مرحلہ وار ہدایات کیسے دی جاتی ہیں۔'
                : 'Teaching structured prompting in Urdu so students can generate lesson plans, draft applications, and analyze local survey data.'}
            </p>
          </div>

          <div className="bg-[#fafaf8] border border-stone-200 rounded-xl p-5">
            <div className="w-9 h-9 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center mb-3">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">
              {isUrdu ? 'اخلاقیات اور ڈیٹا پرائیویسی' : 'Responsible & Ethical Adoption'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {isUrdu
                ? 'غلط معلومات (Hallucinations) کی پہچان، حقائق کی تصدیق اور ذاتی معلومات کے تحفظ کی تربیت۔'
                : 'Certified by AI Singapore & AVPN to instill verification habits, combat hallucination risks, and protect personal privacy.'}
            </p>
          </div>
        </div>

        {/* Interactive Pedagogical Prompt Explorer */}
        <div className="bg-stone-900 text-stone-100 rounded-xl p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-800">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-emerald-400">
                {isUrdu ? 'اردو پرامپٹ تعلیمی ماڈل' : 'Interactive Classroom Blueprint'}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {isUrdu ? 'کلاس روم میں پرامپٹ سکھانے کا نمونہ' : 'How Salman Teaches Structured Prompting in Urdu'}
              </h3>
            </div>

            {/* Segmented Selector for the 3 pedagogical concepts */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-800/80 rounded-lg text-xs overflow-x-auto">
              {portfolioData.urduPromptPlayground.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedExample(idx)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap ${
                    selectedExample === idx
                      ? 'bg-emerald-700 text-white font-semibold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {isUrdu ? item.urduConcept.split(' ')[0] : item.englishConcept}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Explanation & Pedagogical Intent */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs text-stone-400 font-mono block">
                  {isUrdu ? 'بنیادی تکنیکی تصور' : 'Technical Foundation'}
                </span>
                <div className="text-base font-bold text-emerald-300 mt-0.5">
                  {active.englishConcept}
                </div>
                <div className="text-sm font-semibold text-stone-200 mt-1 font-urdu">
                  {active.urduConcept}
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-stone-300 leading-relaxed">
                <span className="font-semibold text-stone-400 uppercase tracking-wider block text-[10px]">
                  {isUrdu ? 'تدریسی طریقہ' : 'Classroom Strategy'}
                </span>
                <p className="font-urdu leading-loose text-stone-200">
                  {active.explanation}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-800 text-xs">
                <span className="text-stone-400 font-mono text-[10px] uppercase block">
                  {isUrdu ? 'حقیقی دنیا میں اطلاق' : 'Applied Community Outcome'}
                </span>
                <p className="text-stone-300 mt-0.5 font-urdu">
                  {active.practicalApplication}
                </p>
              </div>
            </div>

            {/* Right: The Actual Prompt Box with Copy Tool */}
            <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-lg p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800/80">
                  <span>{isUrdu ? 'اردو پرامپٹ کی مثال' : 'Classroom Tested Urdu Prompt'}</span>
                  <button
                    onClick={() => handleCopy(active.examplePrompt)}
                    className="flex items-center gap-1.5 text-xs text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 px-2.5 py-1 rounded transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">{isUrdu ? 'کاپی ہو گیا' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isUrdu ? 'کاپی کریں' : 'Copy Prompt'}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="font-urdu text-sm sm:text-base leading-[2.3] text-stone-100 py-2 text-right">
                  "{active.examplePrompt}"
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                <span>WANG Lab of Innovation Curriculum Module</span>
                <span className="font-mono text-emerald-400">Urdu AI 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
