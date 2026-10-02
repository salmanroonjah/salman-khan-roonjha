import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactStats } from './components/ImpactStats';
import { ExperienceShowcase } from './components/ExperienceShowcase';
import { UrduAiShowcase } from './components/UrduAiShowcase';
import { GitHubShowcase } from './components/GitHubShowcase';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsEducation } from './components/CertificationsEducation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { ExperienceItem } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ur'>('en');
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
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
      className={`min-h-screen bg-[#fafaf8] text-stone-800 ${
        lang === 'ur' ? 'font-sans selection:bg-emerald-200' : 'font-sans'
      }`}
    >
      {/* Primary Top Bar adhering to Top Bar Contract */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Editorial Split Hero */}
        <Hero
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* Tabular Impact Figures */}
        <ImpactStats lang={lang} />

        {/* Filterable Experience & Grassroots Case Studies */}
        <ExperienceShowcase
          lang={lang}
          onSelectExperience={(exp) => setSelectedExperience(exp)}
        />

        {/* Signature Educational Spotlight: Generative AI in Urdu */}
        <UrduAiShowcase lang={lang} />

        {/* 3-Column Skills Matrix */}
        <SkillsSection lang={lang} />

        {/* GitHub Repositories & Open Source Showcase */}
        <GitHubShowcase lang={lang} />

        {/* Verified Accreditations & Academic Degrees */}
        <CertificationsEducation lang={lang} />

        {/* Direct Contact & Collaboration Form */}
        <ContactSection lang={lang} />
      </main>

      {/* Restrained Editorial Footer */}
      <Footer
        lang={lang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Case Study Deep-Dive Modal */}
      <ProjectDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        lang={lang}
      />

      {/* Official Printable Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}
