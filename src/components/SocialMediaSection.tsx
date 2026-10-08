import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  ArrowUpRight, 
  Share2, 
  MessageCircle, 
} from 'lucide-react';

interface SocialMediaSectionProps {
  lang: 'en' | 'ur';
}

export const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ lang }) => {
  const { data } = usePortfolio();
  const isUrdu = lang === 'ur';

  return (
    <section 
      id="socials" 
      className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#07080B] relative overflow-hidden"
    >
      {/* Subtle planetary ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wide uppercase text-emerald-400">
            <Share2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isUrdu ? 'ڈیجیٹل ابلاغ و روابط' : 'Official Social Channels'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {isUrdu ? 'سوشل میڈیا پلیٹ فارمز (Social Media)' : 'Connect Across Platforms'}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isUrdu
              ? 'میری روزمرہ اے آئی ٹریننگ کی جھلکیاں، ریلز، تعلیمی مضامین اور کمیونٹی سیشنز کے لیے ان پلیٹ فارمز پر جڑیں۔'
              : 'Follow daily AI training highlights, workshop reels, educational write-ups, and community milestones.'}
          </p>
        </div>

        {/* 3 Main Social Cards: LinkedIn, Instagram, Facebook */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. LinkedIn Card */}
          <div className="rounded-3xl p-8 sm:p-9 bg-white/[0.02] border border-white/[0.08] hover:border-sky-500/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-sky-500" />
            
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(14,165,233,0.15)]">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <span className="text-[11px] font-mono font-medium text-sky-400">Professional</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-xs text-sky-400/80 font-mono mt-0.5">
                  salmankhanroonjah
                </p>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  {isUrdu
                    ? 'پیشہ ورانہ نیٹ ورکنگ، ٹریننگ اپڈیٹس، تعلیمی تجزیے اور کیریئر کی اہم خبریں۔'
                    : 'Professional networking, training announcements, field reports, and AI literacy pedagogy.'}
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08]">
              <a
                href={data.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-sky-600/90 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition-all shadow-[0_0_20px_rgba(2,132,199,0.3)] flex items-center justify-center gap-2"
              >
                <span>{isUrdu ? 'لنکڈ اِن پر جڑیں' : 'Connect on LinkedIn'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Instagram Card */}
          <div className="rounded-3xl p-8 sm:p-9 bg-white/[0.02] border border-white/[0.08] hover:border-pink-500/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500" />
            
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(236,72,153,0.15)]">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-[11px] font-mono font-medium text-pink-400">Visual Reels</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                  Instagram
                </h3>
                <p className="text-xs text-pink-400/80 font-mono mt-0.5">
                  @salmankhanroonjah
                </p>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  {isUrdu
                    ? 'کلاس روم کی ویڈیوز، اے آئی ورکشاپس کے ریلز، اسٹوڈنٹ مومنٹس اور تصویری کہانیاں۔'
                    : 'Classroom moments, student interaction reels, workshop highlights, and visual tech stories.'}
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08]">
              <a
                href={data.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-xl text-xs font-bold transition-all shadow-[0_0_20px_rgba(219,39,119,0.3)] flex items-center justify-center gap-2"
              >
                <span>{isUrdu ? 'انسٹاگرام پر فالو کریں' : 'Follow on Instagram'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 3. Facebook Card */}
          <div className="rounded-3xl p-8 sm:p-9 bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-600" />
            
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-[11px] font-mono font-medium text-blue-400">Community</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Facebook
                </h3>
                <p className="text-xs text-blue-400/80 font-mono mt-0.5">
                  salmankhanroonjah
                </p>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                  {isUrdu
                    ? 'کمیونٹی بیٹھکیں، دیہی یوتھ مباحثے، عوامی تربیتی شیڈول اور تصویری البمز۔'
                    : 'Community discussions, rural education seminars, local youth forums, and event albums.'}
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08]">
              <a
                href={data.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-blue-600/90 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2"
              >
                <span>{isUrdu ? 'فیس بک پر رابطہ کریں' : 'Connect on Facebook'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Direct WhatsApp Messaging Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {isUrdu ? 'فوری براہِ راست رابطہ (WhatsApp)' : 'Instant Direct Messaging'}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                {data.contact.phoneDisplay} · {data.contact.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={data.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl text-xs transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`mailto:${data.contact.email}`}
              className="px-5 py-3 bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium rounded-2xl text-xs border border-white/[0.1] transition-colors"
            >
              Direct Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
