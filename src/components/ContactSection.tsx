import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink, MessageCircle, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  lang: 'en' | 'ur';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'AI Training',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#0E131F] border-b border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Reach & Coordinates */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-3">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isUrdu ? 'رابطہ کریں' : 'Get in Touch'}</span>
              </div>
              {/* Headline: Let's work together. */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {isUrdu ? portfolioData.contact.headlineUrdu : portfolioData.contact.headline}
              </h2>
              {/* Description: Whether it's an AI training, a digital literacy program, or a creative project, I'd be glad to hear from you. */}
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                {isUrdu ? portfolioData.contact.descriptionUrdu : portfolioData.contact.description}
              </p>
            </div>

            {/* Direct Coordinates Cards */}
            <div className="space-y-4 pt-1">
              {/* Email */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 block uppercase font-medium">
                      {isUrdu ? 'ای میل ایڈریس' : 'Email Address'}
                    </span>
                    <a
                      href={`mailto:${portfolioData.contact.email}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone & WhatsApp */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 block uppercase font-medium">
                      {isUrdu ? 'فون و واٹس ایپ' : 'Phone & WhatsApp'}
                    </span>
                    <a
                      href={`tel:${portfolioData.contact.phone}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {portfolioData.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={portfolioData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-emerald-500 text-slate-950 rounded-xl text-xs font-bold hover:bg-emerald-400 transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 block uppercase font-medium">
                      LinkedIn
                    </span>
                    <a
                      href={portfolioData.contact.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      linkedin.com/in/salmankhanroonjah
                    </a>
                  </div>
                </div>
                <a
                  href={portfolioData.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  Visit
                </a>
              </div>

              {/* Location: Bela, Lasbela, Balochistan, Pakistan */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center gap-3 shadow-md">
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block uppercase font-medium">
                    {isUrdu ? 'مقام' : 'Location'}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {isUrdu ? portfolioData.contact.locationUrdu : portfolioData.contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Collaboration Request Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-7 sm:p-9 shadow-xl backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-1.5">
              {isUrdu ? 'پیغام یا ورکشاپ کی درخواست بھیجیں' : 'Send an Inquiry / Collaboration Request'}
            </h3>
            <p className="text-xs text-slate-400 mb-7">
              {isUrdu
                ? 'اے آئی ورکشاپس، ڈیجیٹل خواندگی سیشنز، یا ویڈیو مواد کے منصوبوں کی تفصیل شیئر کریں۔'
                : 'Share details of your training workshop, educational program, or creative media project.'}
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-950/40 border border-emerald-800/80 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-7 h-7 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {isUrdu ? 'شکریہ! آپ کا پیغام موصول ہو چکا ہے۔' : 'Thank you! Your message has been prepared.'}
                    </h4>
                    <p className="text-xs text-emerald-300 mt-0.5">
                      Salman Khan responds to training and project requests promptly.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`mailto:${portfolioData.contact.email}?subject=Project Inquiry: ${formState.projectType}&body=From: ${formState.name} (${formState.email})%0D%0A%0D%0AMessage:%0D%0A${formState.message}`}
                    className="px-5 py-2.5 bg-emerald-500 text-slate-950 rounded-xl text-xs font-bold hover:bg-emerald-400 shadow-md shadow-emerald-500/20"
                  >
                    Open in Email App
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', projectType: 'AI Training', message: '' });
                    }}
                    className="px-5 py-2.5 bg-slate-800 text-slate-200 border border-slate-700 rounded-xl text-xs font-medium hover:bg-slate-700 cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-200 block">
                      {isUrdu ? 'آپ کا نام' : 'Your Name'} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Asad Baloch"
                      className="w-full px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-hidden focus:border-emerald-500 text-white placeholder-slate-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-slate-200 block">
                      {isUrdu ? 'ای میل ایڈریس' : 'Email Address'} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. name@organization.com"
                      className="w-full px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-hidden focus:border-emerald-500 text-white placeholder-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-200 block">
                    {isUrdu ? 'پراجیکٹ یا سیشن کی قسم' : 'Project / Engagement Type'}
                  </label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-hidden focus:border-emerald-500 text-white"
                  >
                    <option value="AI Training" className="bg-slate-900">AI Training & Workshops (Urdu / Local)</option>
                    <option value="Digital Literacy" className="bg-slate-900">Digital Literacy Cohort (Rural / Community)</option>
                    <option value="Content & Media" className="bg-slate-900">Content & Creative Video Production</option>
                    <option value="Program Management" className="bg-slate-900">Program & Field Event Leadership</option>
                    <option value="Speaking" className="bg-slate-900">Speaking Session / Panel Discussion</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-200 block">
                    {isUrdu ? 'پیغام کی تفصیل' : 'Project Scope / Message'} <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your participants, dates, or creative requirements..."
                    className="w-full px-3.5 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-hidden focus:border-emerald-500 text-white placeholder-slate-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isUrdu ? 'پیغام بھیجیں' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
