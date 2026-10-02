import React from 'react';
import { Languages, Download, Send } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'ur';
  setLang: (lang: 'en' | 'ur') => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenResume,
  onOpenContact,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fafaf8]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-stone-900 hover:text-emerald-800 transition-colors flex items-center gap-2"
        >
          <span className="font-extrabold text-stone-900">Salman Khan</span>
          <span className="text-xs text-stone-400 font-normal hidden sm:inline">|</span>
          <span className="text-xs text-stone-500 font-medium hidden sm:inline">
            {lang === 'en' ? 'Lasbela, Balochistan' : 'لسبیلہ، بلوچستان'}
          </span>
        </a>

        {/* Zone 2: 4-5 Clean Text Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="#about" className="hover:text-stone-950 transition-colors">
            {lang === 'en' ? 'About' : 'تعارف'}
          </a>
          <a href="#experience" className="hover:text-stone-950 transition-colors">
            {lang === 'en' ? 'Experience' : 'تجربہ'}
          </a>
          <a href="#urdu-ai" className="hover:text-stone-950 transition-colors">
            {lang === 'en' ? 'Urdu AI Pedagogy' : 'اردو اے آئی'}
          </a>
          <a href="#skills" className="hover:text-stone-950 transition-colors">
            {lang === 'en' ? 'Skills' : 'مہارتیں'}
          </a>
          <a href="#github-projects" className="hover:text-stone-950 transition-colors">
            {lang === 'en' ? 'Code & Repos' : 'کوڈ و ریپوز'}
          </a>
          <a href="#certifications" className="hover:text-stone-950 transition-colors">
            {lang === 'en' ? 'Credentials' : 'اسناد و تعلیم'}
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* GitHub Profile Icon Link */}
          <a
            href="https://github.com/salmankhan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-stone-600 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors"
            title="View GitHub Profile"
            aria-label="GitHub Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors border border-stone-200"
            title="Toggle between English and Urdu"
            aria-label="Switch Language"
          >
            <Languages className="w-3.5 h-3.5 text-emerald-700" />
            <span className={lang === 'ur' ? 'font-urdu' : 'font-sans'}>
              {lang === 'en' ? 'اردو' : 'English'}
            </span>
          </button>

          {/* Quick Resume View */}
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-md transition-colors shadow-2xs"
          >
            <Download className="w-3.5 h-3.5 text-stone-600" />
            <span>{lang === 'en' ? 'View CV' : 'سی وی دیکھیں'}</span>
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-md transition-colors shadow-xs"
          >
            <Send className="w-3 h-3" />
            <span>{lang === 'en' ? 'Contact' : 'رابطہ کریں'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
