import React, { useState } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { GalaxyBackground } from './components/GalaxyBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhatIDoSection } from './components/WhatIDoSection';
import { ExperienceShowcase } from './components/ExperienceShowcase';
import { WorkShowcase } from './components/WorkShowcase';
import { SocialMediaSection } from './components/SocialMediaSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

function PortfolioApp() {
  const [lang, setLang] = useState<'en' | 'ur'>('en');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { setIsAdminOpen } = usePortfolio();

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#07080B] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 relative selection:shadow-lg"
    >
      {/* Interactive Galaxy Particle Background Animation */}
      <GalaxyBackground />

      {/* Streamlined Minimalist Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      <main className="relative z-10">
        {/* 1. Home (Hero Section with Ambient Background Reel Slideshow) */}
        <Hero
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* 2. My Work (Videos & Creative Projects Gallery) */}
        <WorkShowcase lang={lang} />

        {/* 3. About Me & 4. Impact in Numbers */}
        <AboutSection lang={lang} />

        {/* 4. What I Do (Core Pedagogical Capabilities) */}
        <WhatIDoSection lang={lang} />

        {/* 5. Experience Timeline + Earlier Field Roles */}
        <ExperienceShowcase
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 6. Social Media Channels */}
        <SocialMediaSection lang={lang} />

        {/* 7. Certifications & Recognition */}
        <CertificationsSection lang={lang} />

        {/* 8. Contact & Collaboration */}
        <ContactSection lang={lang} />
      </main>

      {/* 9. Footer with Short Bio & Meta */}
      <Footer
        lang={lang}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />

      {/* WordPress-Style Live Admin Dashboard */}
      <AdminDashboard />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}
