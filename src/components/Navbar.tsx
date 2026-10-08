import React from 'react';
import { Languages, Download, Send, Lock } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-[#0B0F17]/90 backdrop-blur-md border-b border-slate-800/90 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
        >
          <span className="font-extrabold tracking-tight">Salman Khan</span>
          <span className="text-xs text-slate-600 font-normal hidden sm:inline">|</span>
          <span className="text-xs text-emerald-400/90 font-medium hidden sm:inline">
            {lang === 'en' ? 'AI Trainer & Media' : 'اے آئی ٹرینر'}
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'About' : 'تعارف'}
          </a>
          <a href="#what-i-do" className="hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'What I Do' : 'خدمات'}
          </a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'Experience' : 'تجربہ'}
          </a>
          <a href="#my-work" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <span>{lang === 'en' ? 'My Work' : 'تخلیقی کام'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </a>
          <a href="#socials" className="hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'Socials' : 'سوشل میڈیا'}
          </a>
          <a href="#certifications" className="hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'Certifications' : 'اسناد'}
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">
            {lang === 'en' ? 'Contact' : 'رابطہ'}
          </a>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Admin Dashboard Trigger */}
          {onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 bg-slate-900/80 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800 cursor-pointer"
              title="Admin CMS Dashboard (or press Alt + A)"
              aria-label="Admin Dashboard"
            >
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden xl:inline">{lang === 'en' ? 'Admin' : 'ایڈمن'}</span>
            </button>
          )}

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700/80 cursor-pointer"
            title="Toggle between English and Urdu"
            aria-label="Switch Language"
          >
            <Languages className="w-3.5 h-3.5 text-emerald-400" />
            <span className={lang === 'ur' ? 'font-urdu' : 'font-sans'}>
              {lang === 'en' ? 'اردو' : 'English'}
            </span>
          </button>

          {/* View CV Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>{lang === 'en' ? 'View CV' : 'سی وی'}</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 rounded-lg transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
          >
            <Send className="w-3 h-3" />
            <span>{lang === 'en' ? 'Contact' : 'رابطہ'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
