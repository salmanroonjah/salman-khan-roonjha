import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Copy, Check } from 'lucide-react';

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
    <section 
      id="contact" 
      className="py-24 sm:py-32 transition-colors duration-300 dark:bg-[#070913]/70 bg-slate-50/50 border-b dark:border-white/[0.08] border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Reach & Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide uppercase text-cyan-600 dark:text-cyan-400 dark:bg-cyan-950/40 bg-cyan-50 border dark:border-cyan-500/30 border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                <Mail className="w-3.5 h-3.5 text-cyan-500" />
                <span>{isUrdu ? 'رابطہ کریں' : 'Get in Touch'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight">
                {isUrdu ? data.contact.headlineUrdu : data.contact.headline}
              </h2>
              <p className="dark:text-slate-300 text-slate-600 text-sm sm:text-base leading-relaxed">
                {isUrdu ? data.contact.descriptionUrdu : data.contact.description}
              </p>
            </div>

              {/* Coordinates Cards */}
            <div className="space-y-4 pt-1">
              {/* Email Card */}
              <div className="rounded-2xl p-4 sm:p-5 cyber-glass-card dark:bg-slate-900/60 bg-white/75 border dark:border-white/[0.1] border-slate-200/90 flex items-center justify-between gap-3 shadow-md hover:dark:border-cyan-400/50 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl dark:bg-cyan-500/10 bg-cyan-50 border border-cyan-500/20 text-cyan-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono dark:text-slate-400 text-slate-500 block uppercase font-bold">
                      {isUrdu ? 'ای میل ایڈریس' : 'Email Address'}
                    </span>
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="text-xs sm:text-sm font-semibold dark:text-white text-slate-900 hover:text-cyan-500 transition-colors"
                    >
                      {data.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-900 rounded-lg transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone & WhatsApp */}
              <div className="rounded-2xl p-4 sm:p-5 cyber-glass-card dark:bg-slate-900/60 bg-white/75 border dark:border-white/[0.1] border-slate-200/90 flex items-center justify-between gap-3 shadow-md hover:dark:border-blue-500/40 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl dark:bg-blue-500/10 bg-blue-50 border border-blue-500/20 text-blue-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono dark:text-slate-400 text-slate-500 block uppercase font-bold">
                      {isUrdu ? 'فون و واٹس ایپ' : 'Phone & WhatsApp'}
                    </span>
                    <a
                      href={`tel:${data.contact.phone}`}
                      className="text-xs sm:text-sm font-semibold dark:text-white text-slate-900 hover:text-blue-500 transition-colors"
                    >
                      {data.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={data.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl text-xs font-bold hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(37,99,235,0.35)]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat</span>
                </a>
              </div>

              {/* Location */}
              <div className="rounded-2xl p-4 sm:p-5 cyber-glass-card dark:bg-slate-900/60 bg-white/75 border dark:border-white/[0.1] border-slate-200/90 flex items-center gap-3 shadow-md">
                <div className="w-11 h-11 rounded-xl dark:bg-white/[0.04] bg-slate-100 text-cyan-500 border dark:border-white/10 border-slate-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono dark:text-slate-400 text-slate-500 block uppercase font-bold">
                    {isUrdu ? 'مقام' : 'Location'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold dark:text-white text-slate-900">
                    {isUrdu ? data.contact.locationUrdu : data.contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Direct Inquiry Terminal */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 cyber-glass-card dark:bg-slate-900/60 bg-white/80 border dark:border-white/[0.12] border-slate-200/90 shadow-2xl relative overflow-hidden">
              {/* Professional Terminal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b dark:border-white/[0.08] border-slate-200/70">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                  </span>
                  <span className="font-mono text-xs font-bold dark:text-cyan-400 text-blue-600 tracking-wider">
                    {isUrdu ? 'براہِ راست پیغام رسانی' : 'DIRECT TRANSMISSION TERMINAL'}
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider dark:text-cyan-400 text-blue-600 font-bold px-2 py-0.5 rounded-md dark:bg-blue-950/40 bg-blue-50 border border-blue-500/20">
                  ONLINE · READY
                </span>
              </div>

              {submitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl dark:bg-blue-500/10 bg-blue-50 border border-blue-500/20 text-cyan-400 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold dark:text-white text-slate-900">
                    {isUrdu ? 'پیغام موصول ہو گیا ہے!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="dark:text-slate-300 text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    {isUrdu
                      ? 'آپ کے پیغام کا شکریہ۔ میں جلد از جلد آپ سے رابطہ کروں گا۔'
                      : 'Thank you for reaching out. I will respond to your training inquiry promptly.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', projectType: 'AI Training', message: '' });
                    }}
                    className="px-6 py-2.5 dark:bg-white/[0.06] bg-slate-100 hover:dark:bg-white/[0.1] hover:bg-slate-200 dark:text-white text-slate-900 rounded-xl text-xs font-semibold transition-colors border dark:border-white/[0.1] border-slate-200 cursor-pointer"
                  >
                    {isUrdu ? 'ایک اور پیغام بھیجیں' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold dark:text-white text-slate-900 tracking-tight">
                      {isUrdu ? 'پراجیکٹ یا ٹریننگ انکوائری' : 'Start a Collaboration'}
                    </h3>
                    <p className="dark:text-slate-400 text-slate-500 text-xs sm:text-sm">
                      {isUrdu
                        ? 'اپنے ادارے، ٹریننگ کی نوعیت یا تخلیقی ضرورت کے بارے میں تحریر کریں۔'
                        : 'Fill out this brief to discuss AI workshops, digital literacy, or creative media projects.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold dark:text-slate-300 text-slate-700">
                        {isUrdu ? 'آپ کا نام *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Tariq Baloch"
                        className="w-full px-4 py-3 dark:bg-black/50 bg-slate-50/90 border dark:border-white/[0.1] border-slate-200 rounded-2xl focus:outline-hidden focus:border-cyan-400 dark:text-white text-slate-900 text-sm shadow-inner transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold dark:text-slate-300 text-slate-700">
                        {isUrdu ? 'ای میل یا فون نمبر *' : 'Email or Phone *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="tariq@organization.org"
                        className="w-full px-4 py-3 dark:bg-black/50 bg-slate-50/90 border dark:border-white/[0.1] border-slate-200 rounded-2xl focus:outline-hidden focus:border-cyan-400 dark:text-white text-slate-900 text-sm shadow-inner transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold dark:text-slate-300 text-slate-700">
                      {isUrdu ? 'تعاون کی نوعیت (Category)' : 'Nature of Collaboration'}
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full px-4 py-3 dark:bg-slate-950 bg-slate-50 border dark:border-white/[0.1] border-slate-200 rounded-2xl focus:outline-hidden focus:border-cyan-400 dark:text-white text-slate-900 text-sm cursor-pointer shadow-inner transition-colors"
                    >
                      <option value="AI Training">AI Training & Workshops (Urdu / Local)</option>
                      <option value="Digital Literacy">Digital Literacy & Community Pedagogy</option>
                      <option value="Creative Media">Creative Media, Videos & Branding</option>
                      <option value="Program Management">Program Coordination & Field Leadership</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold dark:text-slate-300 text-slate-700">
                      {isUrdu ? 'پیغام کی تفصیل *' : 'Message Brief *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share dates, location, target audience, or requirements..."
                      className="w-full px-4 py-3 dark:bg-black/50 bg-slate-50/90 border dark:border-white/[0.1] border-slate-200 rounded-2xl focus:outline-hidden focus:border-cyan-400 dark:text-white text-slate-900 text-sm leading-relaxed shadow-inner transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:brightness-110 text-white font-bold rounded-2xl text-sm transition-all shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
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
