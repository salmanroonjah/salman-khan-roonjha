import React from 'react';
import { Languages, Download, Lock } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'ur';
  setLang: (lang: 'en' | 'ur') => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenResume,
  onOpenContact,
  onOpenAdmin,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#07080B]/80 backdrop-blur-2xl border-b border-white/[0.08] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Wordmark (Apple / Samsung Keynote style) */}
        <a
          href="#top"
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center gap-2 group"
        >
          <span className="font-extrabold tracking-tight">Salman Khan</span>
          <span className="text-white/20 font-mono text-xs hidden sm:inline">/</span>
          <span className="text-xs text-emerald-400/90 font-mono font-medium hidden sm:inline">
            {lang === 'en' ? 'AI Pedagogy & Media' : 'اے آئی و میڈیا'}
          </span>
        </a>

        {/* Clean, Streamlined Navigation Links (No Clutter) */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-slate-300">
          <a href="#my-work" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <span>{lang === 'en' ? 'Work' : 'میرا کام'}</span>
            <span className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
          </a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'About' : 'تعارف'}
          </a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'Experience' : 'تجربہ'}
          </a>
          <a href="#socials" className="hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'Connect' : 'سوشل میڈیا'}
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'Contact' : 'رابطہ'}
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] rounded-xl transition-colors border border-white/[0.08] cursor-pointer"
            title="Toggle between English and Urdu"
            aria-label="Switch Language"
          >
            <Languages className="w-3.5 h-3.5 text-emerald-400" />
            <span className={lang === 'ur' ? 'font-urdu' : 'font-sans'}>
              {lang === 'en' ? 'اردو' : 'EN'}
            </span>
          </button>

          {/* View CV Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] rounded-xl transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>{lang === 'en' ? 'CV' : 'سی وی'}</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="px-4 py-1.5 text-xs font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer"
          >
            <span>{lang === 'en' ? 'Contact' : 'رابطہ'}</span>
          </button>

          {/* Admin CMS Trigger (Minimal Keyhole) */}
          {onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="p-1.5 text-slate-400 hover:text-emerald-400 bg-white/[0.02] hover:bg-white/[0.08] rounded-xl transition-colors border border-white/[0.08] cursor-pointer"
              title="Admin Dashboard (or press Alt + A)"
              aria-label="Admin Dashboard"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
