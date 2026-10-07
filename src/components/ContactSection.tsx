import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Send, CheckCircle, ExternalLink, Code2, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  lang: 'en' | 'ur';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    inquiryType: 'workshop',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;

    // Generate unique inquiry ID and simulate secure recording
    const newId = `SK-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryId(newId);

    try {
      const savedInquiries = JSON.parse(localStorage.getItem('sk_portfolio_inquiries') || '[]');
      savedInquiries.push({
        id: newId,
        date: new Date().toISOString(),
        ...formState,
      });
      localStorage.setItem('sk_portfolio_inquiries', JSON.stringify(savedInquiries));
    } catch {
      // Ignore localStorage errors
    }

    setSubmitted(true);
  };

  const handleCopyInquiry = () => {
    const text = `Inquiry ID: ${inquiryId}\nName: ${formState.name}\nOrganization: ${formState.organization}\nType: ${formState.inquiryType}\nMessage:\n${formState.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 bg-[#fafaf8] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct GitHub & Institutional Presence (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-1">
                <Code2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>{isUrdu ? 'آن لائن رابطہ و باہمی اشتراک' : 'Digital Reach & Collaboration'}</span>
                <span aria-hidden="true">·</span>
                <span>{isUrdu ? 'تعاون و شرکت' : 'Open Connect'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                {isUrdu ? 'تعلیمی و سماجی شراکت داری' : 'Connect for EdTech & Community Impact'}
              </h2>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                {isUrdu
                  ? 'بلوچستان کے سکولوں میں اے آئی ورکشاپس، کمیونٹی ڈیجیٹل لٹریسی سیشنز، یا فیلڈ ڈیٹا پراجیکٹس کے لیے رابطہ فارم اور گٹ ہب کے ذریعے رابطہ کریں۔'
                  : 'Available for AI capacity-building workshops, rural digital literacy training, and NGO field initiatives via the inquiry portal and GitHub.'}
              </p>
            </div>

            {/* GitHub & Institutional Cards (No personal phone or email displayed) */}
            <div className="space-y-3 pt-2">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-between gap-3 hover:border-stone-400 transition-colors group block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-stone-900 text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-stone-400 block uppercase">
                      {isUrdu ? 'گٹ ہب پروفائل' : 'GitHub Profile'}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                      github.com/salmanroonjah
                    </span>
                    <span className="text-[11px] text-stone-500 block">
                      {isUrdu ? 'اوپن سورس ریپوز اور کوڈ ڈسکشن' : 'Open-source code, worksheets & curriculum'}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-stone-900" />
              </a>

              <div className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-stone-600" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-stone-400 block uppercase">
                    {isUrdu ? 'ضلعی مرکز و وابستگی' : 'Base & Affiliation'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-stone-900">
                    {isUrdu ? portfolioData.personal.locationUrdu : portfolioData.personal.location}
                  </span>
                  <span className="text-[11px] text-stone-500 block">
                    WANG & Wang Lab of Innovation (WALI)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: In-Browser Collaboration Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-stone-900 mb-1">
              {isUrdu ? 'آن لائن پیغام یا ورکشاپ کی درخواست' : 'Online Workshop & Collaboration Form'}
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              {isUrdu
                ? 'براہ کرم اپنی تنظیم اور مطلوبہ پروگرام کی تفصیل درج کریں۔ آپ کا پیغام فوری لاگ میں محفوظ ہو جائے گا۔'
                : 'Submit details of your workshop, speaking session, or development project directly.'}
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-7 h-7 text-emerald-800 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">
                      {isUrdu ? 'آپ کا پیغام کامیابی سے درج ہو گیا ہے!' : 'Inquiry Submitted Successfully!'}
                    </h4>
                    <p className="text-xs text-emerald-900 font-mono mt-0.5">
                      Reference ID: {inquiryId}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white/90 border border-emerald-200/80 rounded-lg text-xs space-y-1 text-stone-800">
                  <div><span className="font-semibold text-stone-600">Sender:</span> {formState.name}</div>
                  {formState.organization && <div><span className="font-semibold text-stone-600">Org:</span> {formState.organization}</div>}
                  <div><span className="font-semibold text-stone-600">Type:</span> {formState.inquiryType}</div>
                  <div className="pt-1 text-stone-600 italic">"{formState.message}"</div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    onClick={handleCopyInquiry}
                    className="px-3.5 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied Details' : 'Copy Inquiry Summary'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', organization: '', inquiryType: 'workshop', message: '' });
                    }}
                    className="px-3.5 py-1.5 bg-white text-stone-700 hover:bg-stone-100 border border-stone-300 text-xs font-medium rounded-md transition-colors cursor-pointer"
                  >
                    {isUrdu ? 'نیا پیغام لکھیں' : 'Send Another'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-stone-700 block">
                      {isUrdu ? 'آپ کا نام' : 'Your Name / Representative'} <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Tariq Baloch"
                      className="w-full px-3 py-2 bg-[#fafaf8] border border-stone-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-emerald-700 focus:bg-white text-stone-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-stone-700 block">
                      {isUrdu ? 'تنظیم / سکول / ادارہ' : 'Organization / School / NGO'}
                    </label>
                    <input
                      type="text"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      placeholder="e.g. Community School / NGO"
                      className="w-full px-3 py-2 bg-[#fafaf8] border border-stone-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-emerald-700 focus:bg-white text-stone-900"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-700 block">
                    {isUrdu ? 'رابطے کا مقصد' : 'Purpose of Inquiry'}
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full px-3 py-2 bg-[#fafaf8] border border-stone-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-emerald-700 focus:bg-white text-stone-900"
                  >
                    <option value="workshop">Urdu AI / EdTech Workshop Invitation</option>
                    <option value="literacy">Rural Digital Literacy Training</option>
                    <option value="github">Open Source / GitHub Repo Collaboration</option>
                    <option value="health">Public Health / Mobile Survey Project</option>
                    <option value="consulting">General Speaking / Consultation</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-stone-700 block">
                    {isUrdu ? 'تفصیلی پیغام' : 'Message Details'} <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={
                      isUrdu
                        ? 'ورکشاپ کی تاریخ، متوقع طلبہ کی تعداد، اور مقام کی تفصیل درج کریں...'
                        : 'Provide details about your audience, dates, community location, or project scope...'
                    }
                    className="w-full px-3 py-2 bg-[#fafaf8] border border-stone-200 rounded-md focus:outline-hidden focus:ring-1 focus:ring-emerald-700 focus:bg-white text-stone-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded-md transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isUrdu ? 'پیغام لاگ میں محفوظ کریں' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
