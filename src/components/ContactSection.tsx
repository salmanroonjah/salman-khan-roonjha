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
      className="py-24 sm:py-32 bg-[#07080B] border-b border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Reach & Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wide uppercase text-emerald-400">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isUrdu ? 'رابطہ کریں' : 'Get in Touch'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {isUrdu ? data.contact.headlineUrdu : data.contact.headline}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {isUrdu ? data.contact.descriptionUrdu : data.contact.description}
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4 pt-1">
              {/* Email Card */}
              <div className="rounded-2xl p-4 sm:p-5 bg-white/[0.02] border border-white/[0.08] flex items-center justify-between gap-3 shadow-md hover:border-emerald-500/40 transition-colors">
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
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
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
              <div className="rounded-2xl p-4 sm:p-5 bg-white/[0.02] border border-white/[0.08] flex items-center justify-between gap-3 shadow-md hover:border-emerald-500/40 transition-colors">
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
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      {data.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={data.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-emerald-500 text-slate-950 rounded-xl text-xs font-bold hover:bg-emerald-400 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat</span>
                </a>
              </div>

              {/* Location */}
              <div className="rounded-2xl p-4 sm:p-5 bg-white/[0.02] border border-white/[0.08] flex items-center gap-3 shadow-md">
                <div className="w-11 h-11 rounded-xl bg-white/[0.03] text-emerald-400 border border-white/[0.06] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block uppercase font-medium">
                    {isUrdu ? 'مقام' : 'Location'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {isUrdu ? data.contact.locationUrdu : data.contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

              {submitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {isUrdu ? 'پیغام موصول ہو گیا ہے!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    {isUrdu
                      ? 'آپ کے پیغام کا شکریہ۔ میں جلد از جلد آپ سے رابطہ کروں گا۔'
                      : 'Thank you for reaching out. I will respond to your training inquiry promptly.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', projectType: 'AI Training', message: '' });
                    }}
                    className="px-6 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-white rounded-xl text-xs font-semibold transition-colors border border-white/[0.1] cursor-pointer"
                  >
                    {isUrdu ? 'ایک اور پیغام بھیجیں' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {isUrdu ? 'پراجیکٹ یا ٹریننگ انکوائری' : 'Start a Collaboration'}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      {isUrdu
                        ? 'اپنے ادارے، ٹریننگ کی نوعیت یا تخلیقی ضرورت کے بارے میں تحریر کریں۔'
                        : 'Fill out this brief to discuss AI workshops, digital literacy, or creative media projects.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        {isUrdu ? 'آپ کا نام *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Tariq Baloch"
                        className="w-full px-4 py-3 bg-black/50 border border-white/[0.1] rounded-2xl focus:outline-hidden focus:border-emerald-500 text-white text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        {isUrdu ? 'ای میل یا فون نمبر *' : 'Email or Phone *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="tariq@organization.org"
                        className="w-full px-4 py-3 bg-black/50 border border-white/[0.1] rounded-2xl focus:outline-hidden focus:border-emerald-500 text-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      {isUrdu ? 'تعاون کی نوعیت (Category)' : 'Nature of Collaboration'}
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/[0.1] rounded-2xl focus:outline-hidden focus:border-emerald-500 text-white text-sm cursor-pointer"
                    >
                      <option value="AI Training">AI Training & Workshops (Urdu / Local)</option>
                      <option value="Digital Literacy">Digital Literacy & Community Pedagogy</option>
                      <option value="Creative Media">Creative Media, Videos & Branding</option>
                      <option value="Program Management">Program Coordination & Field Leadership</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      {isUrdu ? 'پیغام کی تفصیل *' : 'Message Brief *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share dates, location, target audience, or requirements..."
                      className="w-full px-4 py-3 bg-black/50 border border-white/[0.1] rounded-2xl focus:outline-hidden focus:border-emerald-500 text-white text-sm leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl text-sm transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
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
