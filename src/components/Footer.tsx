import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'ur';
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenResume }) => {
  const isUrdu = lang === 'ur';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <div className="text-base font-bold text-white tracking-tight">
              {isUrdu ? portfolioData.personal.nameUrdu : portfolioData.personal.name}
            </div>
            <p className="text-stone-400 mt-0.5 text-xs">
              {isUrdu ? portfolioData.personal.titleUrdu : portfolioData.personal.title}
            </p>
            <p className="text-stone-500 text-[11px] mt-1">
              Lasbela, Balochistan, Pakistan · GitHub: github.com/salmankhan
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-stone-300 font-medium">
            <a href="#about" className="hover:text-white transition-colors">
              {isUrdu ? 'تعارف' : 'About'}
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              {isUrdu ? 'تجربہ' : 'Experience'}
            </a>
            <a href="#urdu-ai" className="hover:text-white transition-colors">
              {isUrdu ? 'اردو اے آئی' : 'Urdu AI'}
            </a>
            <a href="#github-projects" className="hover:text-white transition-colors">
              {isUrdu ? 'گٹ ہب ریپوز' : 'GitHub Repos'}
            </a>
            <a href="https://github.com/salmankhan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <span>GitHub</span>
            </a>
            <button
              onClick={onOpenResume}
              className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              {isUrdu ? 'نصابِ حیات (CV)' : 'Full Resume'}
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Salman Khan. {isUrdu ? 'جملہ حقوق محفوظ ہیں۔' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <span>District Lasbela, Balochistan</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
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
