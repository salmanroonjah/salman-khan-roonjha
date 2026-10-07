import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { ExperienceShowcase } from './components/ExperienceShowcase';
import { WorkShowcase } from './components/WorkShowcase';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ur'>('en');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="top"
      className={`min-h-screen bg-[#0B0F17] text-slate-100 ${
        lang === 'ur' ? 'font-sans selection:bg-emerald-500 selection:text-slate-950' : 'font-sans selection:bg-emerald-500 selection:text-slate-950'
      }`}
    >
      {/* 3-Zone Sticky Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* 1. Home (Hero Section) */}
        <Hero
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* 2. About Me & 4. Impact in Numbers */}
        <AboutSection lang={lang} />

        {/* 3. What I Do (4 Core Domains) */}
        <WhatIDoSection lang={lang} />

        {/* 5. Experience Timeline + Earlier Field Roles */}
        <ExperienceShowcase
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 6. My Work (Videos & Creative Projects) */}
        <WorkShowcase lang={lang} />

        {/* 7. Certifications & Recognition */}
        <CertificationsSection lang={lang} />

        {/* 8. Contact & Collaboration */}
        <ContactSection lang={lang} />
      </main>

      {/* 9. Footer with Short Bio & Meta */}
      <Footer
        lang={lang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Official Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}
