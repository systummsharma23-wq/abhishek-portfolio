import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioCollage } from './components/PortfolioCollage';
import { ExhibitionsList } from './components/ExhibitionsList';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ContentCustomizerModal } from './components/ContentCustomizerModal';
import { AddProjectModal } from './components/AddProjectModal';
import { INITIAL_PROFILE, PROJECTS, EXHIBITIONS } from './data/portfolioData';
import { DesignerProfile, Project } from './types';
import { Sparkles, Sliders, Plus } from 'lucide-react';

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
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [addProjectOpen, setAddProjectOpen] = useState(false);

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

  const handleAddNewProject = (newProject: Project) => {
    setProjects((prev) => [newProject, ...prev]);
    setSelectedProject(newProject);
  };

  const handleResetDefaults = () => {
    setProfile(INITIAL_PROFILE);
    setProjects(PROJECTS);
    localStorage.removeItem('as_profile');
    localStorage.removeItem('as_projects');
  };

  return (
    <div className="min-h-screen bg-[#F5F4EF] text-[#0A0A0A] selection:bg-[#F5A623] selection:text-black font-sans relative">
      
      {/* Top Header */}
      <Header
        profile={profile}
        onOpenContact={handleOpenContact}
        onOpenCustomizer={() => setCustomizerOpen(true)}
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
          onAddNewProject={() => setAddProjectOpen(true)}
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

      {/* Add New Project Modal */}
      <AddProjectModal
        isOpen={addProjectOpen}
        onClose={() => setAddProjectOpen(false)}
        onAddProject={handleAddNewProject}
      />

      {/* Live Content & Image Placeholder Manager Modal */}
      <ContentCustomizerModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
        projects={projects}
        onUpdateProjects={setProjects}
        onResetDefaults={handleResetDefaults}
      />

      {/* Floating Action Buttons in Bottom Corner */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setAddProjectOpen(true)}
          className="px-4 py-2.5 rounded-full bg-[#F5A623] hover:bg-[#050505] hover:text-[#F5F4EF] text-[#050505] text-xs font-grotesk font-bold uppercase tracking-wider shadow-2xl border border-black/10 flex items-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          title="Add a new thumbnail / work to your portfolio"
        >
          <Plus className="w-4 h-4" />
          <span>Add Work</span>
        </button>

        <button
          onClick={() => setCustomizerOpen(true)}
          className="px-3.5 py-2.5 rounded-full bg-[#050505] text-[#F5F4EF] hover:bg-[#F5A623] hover:text-[#050505] text-xs font-grotesk font-bold uppercase tracking-wider shadow-2xl border border-white/20 hidden sm:flex items-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          title="Click to edit profile, bio & portraits"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Edit Profile</span>
        </button>
      </div>

    </div>
  );
}
