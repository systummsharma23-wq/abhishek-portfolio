import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioCollage } from './components/PortfolioCollage';
import { ExhibitionsList } from './components/ExhibitionsList';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { INITIAL_PROFILE, PROJECTS, EXHIBITIONS } from './data/portfolioData';
import { DesignerProfile, Project } from './types';

export default function App() {
  const [profile, setProfile] = useState<DesignerProfile>(() => {
    const saved = localStorage.getItem('as_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed) {
          // Ensure new email is applied
          parsed.email = 'systummsharma23@gmail.com';
          parsed.socials = [
            { name: 'Direct Email', handle: 'systummsharma23@gmail.com', url: 'mailto:systummsharma23@gmail.com' }
          ];
          return parsed;
        }
      } catch (e) { /* ignore */ }
    }
    return INITIAL_PROFILE;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('as_projects');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 10) return parsed;
      } catch (e) { /* ignore */ }
    }
    return PROJECTS;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('as_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('as_projects', JSON.stringify(projects));
  }, [projects]);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectById = (projectId: string) => {
    const proj = projects.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F4EF] text-[#0A0A0A] selection:bg-[#F5A623] selection:text-black font-sans relative">
      
      {/* Top Header */}
      <Header
        profile={profile}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Giant Typography & Abhishek Sharma's Yellow Portrait Card */}
        <Hero
          profile={profile}
          onExploreClick={handleExploreClick}
          onOpenContact={handleOpenContact}
        />

        {/* 2. Portfolio Collage & 16:9 Thumbnail Gallery (Primary Showcase for Clients) */}
        <PortfolioCollage
          projects={projects}
          onSelectProject={setSelectedProject}
        />

        {/* 3. About Section with Velvet Black Canvas & Radial Graphic Motif */}
        <AboutSection
          profile={profile}
          onOpenContact={handleOpenContact}
        />

        {/* 4. Case Studies & Milestone Breakdown */}
        <ExhibitionsList
          exhibitions={EXHIBITIONS}
          projects={projects}
          onSelectProjectById={handleSelectProjectById}
        />

        {/* 5. Contact Section with Direct Email */}
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Fullscreen Case Study / Project Detail Modal with YouTube Feed Preview */}
      <ProjectDetailModal
        project={selectedProject}
        projects={projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </div>
  );
}
