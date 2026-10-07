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
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 block uppercase font-medium">
                      LinkedIn
                    </span>
                    <a
                      href={portfolioData.contact.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-sky-400 transition-colors"
                    >
                      linkedin.com/in/salmankhanroonjah
                    </a>
                  </div>
                </div>
                <a
                  href={portfolioData.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300"
                >
                  Visit
                </a>
              </div>

              {/* Instagram */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 block uppercase font-medium">
                      Instagram
                    </span>
                    <a
                      href={portfolioData.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-pink-400 transition-colors"
                    >
                      @salmankhanroonjah
                    </a>
                  </div>
                </div>
                <a
                  href={portfolioData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-pink-400 hover:text-pink-300"
                >
                  Follow
                </a>
              </div>

              {/* Facebook */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-600/20 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 block uppercase font-medium">
                      Facebook
                    </span>
                    <a
                      href={portfolioData.contact.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      facebook.com/salmankhanroonjah
                    </a>
                  </div>
                </div>
                <a
                  href={portfolioData.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  Follow
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
