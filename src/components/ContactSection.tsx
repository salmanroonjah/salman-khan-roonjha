import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink, MessageCircle, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  lang: 'en' | 'ur';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const { data } = usePortfolio();
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
    navigator.clipboard.writeText(data.contact.email);
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
                {isUrdu ? data.contact.headlineUrdu : data.contact.headline}
              </h2>
              {/* Description: Whether it's an AI training, a digital literacy program, or a creative project, I'd be glad to hear from you. */}
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                {isUrdu ? data.contact.descriptionUrdu : data.contact.description}
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
                      href={`mailto:${data.contact.email}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {data.contact.email}
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
                      href={`tel:${data.contact.phone}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {data.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={data.contact.whatsappLink}
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
                      href={data.contact.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-sky-400 transition-colors"
                    >
                      linkedin.com/in/salmankhanroonjah
                    </a>
                  </div>
                </div>
                <a
                  href={data.contact.linkedIn}
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
                      href={data.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-pink-400 transition-colors"
                    >
                      @salmankhanroonjah
                    </a>
                  </div>
                </div>
                <a
                  href={data.contact.instagram}
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
                      href={data.contact.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      facebook.com/salmankhanroonjah
                    </a>
                  </div>
                </div>
                <a
                  href={data.contact.facebook}
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
                    {isUrdu ? data.contact.locationUrdu : data.contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Interactive Inquiry Box */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-7 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {isUrdu ? 'پیغام موصول ہو گیا ہے!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    {isUrdu
                      ? 'آپ کے پیغام کا شکریہ۔ میں جلد از جلد آپ سے ای میل یا فون پر رابطہ کروں گا۔'
                      : 'Thank you for reaching out. I will respond to your training inquiry promptly.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', projectType: 'AI Training', message: '' });
                    }}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {isUrdu ? 'ایک اور پیغام بھیجیں' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {isUrdu ? 'پراجیکٹ یا ٹریننگ انکوائری' : 'Start a Collaboration'}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1">
                      {isUrdu
                        ? 'اپنے ادارے، ٹریننگ کی نوعیت یا تخلیقی ضرورت کے بارے میں تحریر کریں۔'
                        : 'Fill out this quick brief to discuss AI workshops, digital literacy, or creative media projects.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {isUrdu ? 'آپ کا نام *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Tariq Baloch"
                        className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-hidden focus:border-emerald-500 text-white text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {isUrdu ? 'ای میل یا فون نمبر *' : 'Email or Phone *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="tariq@organization.org"
                        className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-hidden focus:border-emerald-500 text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {isUrdu ? 'تعاون کی نوعیت (Category)' : 'Nature of Collaboration'}
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-hidden focus:border-emerald-500 text-white text-sm"
                    >
                      <option value="AI Training">AI Training & Workshops (Urdu/Local)</option>
                      <option value="Digital Literacy">Digital Literacy & Community Pedagogy</option>
                      <option value="Creative Media">Creative Media, Videos & Branding</option>
                      <option value="Program Management">Program Coordination & Field Leadership</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {isUrdu ? 'پیغام کی تفصیل *' : 'Message Brief *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share dates, location, target audience, or requirements..."
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl focus:outline-hidden focus:border-emerald-500 text-white text-sm leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-101"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isUrdu ? 'پیغام بھیجیں' : 'Send Message to Salman'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
