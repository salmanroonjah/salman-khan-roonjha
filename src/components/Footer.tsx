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
    <footer className="bg-[#070A0F] text-slate-400 py-14 border-t border-slate-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="max-w-md">
            <div className="text-base font-extrabold text-white tracking-tight">
              {isUrdu ? data.hero.headlineUrdu : data.hero.headline}
            </div>
            {/* Sub-headline / short bio */}
            <p className="text-slate-400 mt-1 text-xs leading-relaxed">
              {isUrdu ? data.footer.shortBioUrdu : data.footer.shortBio}
            </p>
            <p className="text-slate-500 text-[11px] mt-2 font-mono">
              {data.contact.location} · {data.contact.email}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-300 font-medium">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              {isUrdu ? 'تعارف' : 'About'}
            </a>
            <a href="#what-i-do" className="hover:text-emerald-400 transition-colors">
              {isUrdu ? 'خدمات' : 'What I Do'}
            </a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">
              {isUrdu ? 'تجربہ' : 'Experience'}
            </a>
            <a href="#my-work" className="hover:text-emerald-400 transition-colors">
              {isUrdu ? 'میرا کام' : 'My Work'}
            </a>
            <a href="#certifications" className="hover:text-emerald-400 transition-colors">
              {isUrdu ? 'اسناد' : 'Certifications'}
            </a>
            <button
              onClick={onOpenResume}
              className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-bold"
            >
              {isUrdu ? 'نصابِ حیات (CV)' : 'Full CV'}
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Salman Khan. {isUrdu ? 'جملہ حقوق محفوظ ہیں۔' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <span>Bela, Lasbela, Balochistan</span>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1 text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer"
                title="Open Admin Dashboard (or press Alt + A)"
              >
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>{isUrdu ? 'ایڈمن' : 'Admin'}</span>
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
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
