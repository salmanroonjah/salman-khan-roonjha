import React, { useState } from 'react';
import { Languages, Download, Lock, Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

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
  const { theme, toggleTheme } = usePortfolio();
  const isDark = theme === 'dark';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#my-work', labelEn: 'Work', labelUr: 'میرا کام' },
    { href: '#about', labelEn: 'About', labelUr: 'تعارف' },
    { href: '#what-i-do', labelEn: 'Capabilities', labelUr: 'مہارتیں' },
    { href: '#experience', labelEn: 'Experience', labelUr: 'تجربہ' },
    { href: '#socials', labelEn: 'Connect', labelUr: 'سوشل میڈیا' },
    { href: '#contact', labelEn: 'Contact', labelUr: 'رابطہ' },
  ];

  return (
    <header className="sticky top-0 z-40 transition-all duration-300">
      {/* Main Glassmorphic Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-2 pb-2">
        <div className="cyber-glass rounded-2xl sm:rounded-3xl border transition-all duration-300 dark:bg-slate-900/65 bg-white/70 dark:border-white/12 border-slate-200/80 shadow-[0_12px_35px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.6)] px-3 sm:px-6 h-15 sm:h-16 flex items-center justify-between">
          
          {/* Brand Wordmark with Neon Glow */}
          <a
            href="#top"
            className="text-base sm:text-lg font-bold tracking-tight transition-colors flex items-center gap-2 group shrink-0"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 p-[1.5px] shadow-[0_0_15px_rgba(37,99,235,0.35)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow">
              <div className="w-full h-full rounded-[10px] dark:bg-slate-950 bg-white flex items-center justify-center font-black text-xs font-mono dark:text-cyan-400 text-blue-600">
                SK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight dark:text-white text-slate-900 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                Salman Khan
              </span>
              <span className="text-[10px] text-blue-600 dark:text-cyan-400 font-mono font-medium hidden sm:inline leading-none">
                {lang === 'en' ? 'AI Pedagogy & Media' : 'اے آئی و میڈیا'}
              </span>
            </div>
          </a>

          {/* Clean, Streamlined Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs sm:text-sm font-semibold dark:text-slate-300 text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="dark:hover:text-cyan-300 hover:text-blue-600 transition-colors"
              >
                {lang === 'en' ? link.labelEn : link.labelUr}
              </a>
            ))}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Dark / Light Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="group relative flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer border dark:border-white/10 border-slate-200 dark:bg-white/[0.04] bg-slate-100/90 hover:dark:bg-white/[0.1] hover:bg-slate-200/90 dark:text-amber-300 text-amber-600 shadow-sm hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]"
              title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle Dark and Light theme"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                  <span className="hidden sm:inline font-mono text-[11px] text-slate-200">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
                  <span className="hidden sm:inline font-mono text-[11px] text-slate-700">Dark</span>
                </>
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
              className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-xs font-semibold dark:text-slate-200 text-slate-700 dark:bg-white/[0.04] bg-slate-100 hover:dark:bg-white/[0.1] hover:bg-slate-200 rounded-xl transition-colors border dark:border-white/10 border-slate-200 cursor-pointer"
              title="Toggle between English and Urdu"
              aria-label="Switch Language"
            >
              <Languages className="w-3.5 h-3.5 text-cyan-500" />
              <span className={lang === 'ur' ? 'font-urdu' : 'font-sans'}>
                {lang === 'en' ? 'اردو' : 'EN'}
              </span>
            </button>

            {/* View CV Button (Desktop) */}
            <button
              onClick={onOpenResume}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold dark:text-slate-200 text-slate-700 dark:bg-white/[0.04] bg-slate-100 hover:dark:bg-white/[0.1] hover:bg-slate-200 border dark:border-white/10 border-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-400 dark:text-slate-300" />
              <span>{lang === 'en' ? 'CV' : 'سی وی'}</span>
            </button>

            {/* Contact Button */}
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex px-3.5 sm:px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:brightness-110 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] cursor-pointer"
            >
              <span>{lang === 'en' ? 'Contact' : 'رابطہ'}</span>
            </button>

            {/* Admin CMS Trigger (Prominently Accessible) */}
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 dark:bg-blue-500/10 bg-blue-50 hover:dark:bg-blue-500/20 hover:bg-blue-100 rounded-xl transition-all border border-blue-500/30 dark:border-blue-500/30 cursor-pointer shadow-[0_0_12px_rgba(37,99,235,0.15)]"
                title="Open Admin Dashboard (or press Alt + A)"
                aria-label="Open Admin Dashboard"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-500" />
                <span className="hidden sm:inline font-mono text-[11px] font-bold">
                  {lang === 'ur' ? 'ایڈمن' : 'Admin'}
                </span>
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 cursor-pointer transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl cyber-glass border dark:border-white/12 border-slate-200 dark:bg-slate-900/95 bg-white/95 shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b dark:border-white/10 border-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-xs font-semibold dark:text-slate-200 text-slate-700 hover:dark:bg-white/[0.08] hover:bg-slate-100 transition-colors flex items-center justify-between"
                >
                  <span>{lang === 'en' ? link.labelEn : link.labelUr}</span>
                  <ChevronRight className="w-3 h-3 opacity-40" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 py-2.5 px-3 text-xs font-semibold dark:text-slate-200 text-slate-700 dark:bg-white/[0.06] bg-slate-100 rounded-xl border dark:border-white/10 border-slate-200 flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang === 'en' ? 'View CV' : 'مکمل سی وی'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-md flex items-center justify-center"
              >
                <span>{lang === 'en' ? 'Contact' : 'رابطہ کریں'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
