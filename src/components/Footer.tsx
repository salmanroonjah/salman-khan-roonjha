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
    <footer className="transition-colors duration-300 dark:bg-[#05070D]/90 bg-slate-100/90 dark:text-slate-400 text-slate-600 py-16 border-t dark:border-white/[0.08] border-slate-200/80 text-xs backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b dark:border-white/[0.08] border-slate-200/80">
          <div className="max-w-md space-y-1.5">
            <div className="text-lg font-bold dark:text-white text-slate-900 tracking-tight flex items-center gap-2">
              <span>{isUrdu ? data.hero.headlineUrdu : data.hero.headline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
            </div>
            <p className="dark:text-slate-400 text-slate-600 text-xs leading-relaxed">
              {isUrdu ? data.footer.shortBioUrdu : data.footer.shortBio}
            </p>
            <p className="dark:text-slate-500 text-slate-500 text-[11px] font-mono pt-1">
              {data.contact.location} · {data.contact.email}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-7 dark:text-slate-300 text-slate-700 font-semibold">
            <a href="#my-work" className="hover:text-cyan-500 transition-colors">
              {isUrdu ? 'میرا کام' : 'Work'}
            </a>
            <a href="#about" className="hover:text-cyan-500 transition-colors">
              {isUrdu ? 'تعارف' : 'About'}
            </a>
            <a href="#experience" className="hover:text-cyan-500 transition-colors">
              {isUrdu ? 'تجربہ' : 'Experience'}
            </a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors">
              {isUrdu ? 'رابطہ' : 'Contact'}
            </a>
            <button
              onClick={onOpenResume}
              className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors cursor-pointer font-bold"
            >
              {isUrdu ? 'نصابِ حیات (CV)' : 'Full CV'}
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 dark:text-slate-500 text-slate-500 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Salman Khan. {isUrdu ? 'جملہ حقوق محفوظ ہیں۔' : 'All rights reserved.'}</span>
            <span className="dark:text-white/20 text-slate-300">·</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Futuristic Cyber Edition</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Bela, Lasbela, Balochistan</span>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors cursor-pointer font-bold"
                title="Open Admin Dashboard (or press Alt + A)"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{isUrdu ? 'ایڈمن' : 'Admin'}</span>
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 dark:text-slate-400 text-slate-600 hover:text-cyan-500 transition-colors cursor-pointer font-medium"
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
