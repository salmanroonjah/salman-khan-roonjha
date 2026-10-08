import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowUp, Lock } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'ur';
  onOpenResume: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenResume, onOpenAdmin }) => {
  const { data } = usePortfolio();
  const isUrdu = lang === 'ur';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] text-slate-400 py-16 border-t border-white/[0.08] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.08]">
          <div className="max-w-md space-y-1.5">
            <div className="text-lg font-bold text-white tracking-tight">
              {isUrdu ? data.hero.headlineUrdu : data.hero.headline}
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {isUrdu ? data.footer.shortBioUrdu : data.footer.shortBio}
            </p>
            <p className="text-slate-500 text-[11px] font-mono pt-1">
              {data.contact.location} · {data.contact.email}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-7 text-slate-300 font-medium">
            <a href="#my-work" className="hover:text-emerald-400 transition-colors">
              {isUrdu ? 'میرا کام' : 'Work'}
            </a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              {isUrdu ? 'تعارف' : 'About'}
            </a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">
              {isUrdu ? 'تجربہ' : 'Experience'}
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">
              {isUrdu ? 'رابطہ' : 'Contact'}
            </a>
            <button
              onClick={onOpenResume}
              className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-bold"
            >
              {isUrdu ? 'نصابِ حیات (CV)' : 'Full CV'}
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Salman Khan. {isUrdu ? 'جملہ حقوق محفوظ ہیں۔' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-6">
            <span>Bela, Lasbela, Balochistan</span>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer"
                title="Open Admin Dashboard (or press Alt + A)"
              >
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isUrdu ? 'ایڈمن' : 'Admin'}</span>
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <span>{isUrdu ? 'اوپر جائیں' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
