import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, ArrowRight, ArrowUpRight, Check, Share2, Youtube, TrendingUp, Sparkles, MessageSquare, Mail } from 'lucide-react';
import { Project } from '../types';
import { ThumbnailRenderer } from './ThumbnailRenderer';

interface ProjectDetailModalProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  projects,
  onClose,
  onSelectProject,
}) => {
  const [copied, setCopied] = useState(false);
  const [previewTab, setPreviewTab] = useState<'master' | 'feed'>('master');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#F5F4EF] text-[#0A0A0A] animate-in fade-in duration-300"
    >
      {/* Sticky Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-[#F5F4EF]/95 backdrop-blur-md border-b border-black/10 px-5 sm:px-8 md:px-12 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-grotesk font-bold uppercase tracking-wider text-black hover:text-[#F5A623] transition-colors p-2 -ml-2 rounded-lg hover:bg-black/5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E9E8E2] hover:bg-black hover:text-white text-black text-xs font-grotesk font-bold transition-all cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>
          
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black text-white hover:bg-[#F5A623] hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Close project"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 py-8 sm:py-12">
        
        {/* Header Block: Huge Project Title & Subtitle */}
        <div className="border-b border-black/10 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="px-3 py-1 rounded-full bg-black text-[#F5F4EF] text-[10px] font-mono tracking-widest font-bold uppercase">
              {project.badgeText || `PROJECT ${project.number}`}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F5A623] text-black text-[10px] font-mono tracking-widest font-bold uppercase">
              {project.category}
            </span>
            {project.ctrBoost && (
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-800 text-[10px] font-mono tracking-wider font-bold">
                {project.ctrBoost}
              </span>
            )}
            <span className="text-xs font-mono text-black/50 ml-auto">{project.year}</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight leading-[0.95] uppercase">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-black/70 font-display">
            {project.subtitle}
          </p>
        </div>

        {/* View Mode Toggle (16:9 Master View vs YouTube Feed Simulator) */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPreviewTab('master')}
              className={`px-4 py-1.5 rounded-full text-xs font-grotesk font-bold transition-all cursor-pointer ${
                previewTab === 'master'
                  ? 'bg-black text-white'
                  : 'bg-[#E9E8E2] text-black/70 hover:text-black'
              }`}
            >
              16:9 Master View
            </button>
            <button
              onClick={() => setPreviewTab('feed')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-grotesk font-bold transition-all cursor-pointer ${
                previewTab === 'feed'
                  ? 'bg-[#FF0000] text-white'
                  : 'bg-[#E9E8E2] text-black/70 hover:text-black'
              }`}
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube Feed Simulator</span>
            </button>
          </div>
          <span className="text-[10px] font-mono text-black/40 hidden sm:inline">1280 × 720 High Res</span>
        </div>

        {/* Master Showcase Box */}
        {previewTab === 'master' ? (
          <div className="rounded-[2.5rem] overflow-hidden bg-black/10 p-3 sm:p-4 border border-black/10 mb-10 shadow-2xl">
            <div className="rounded-[2rem] overflow-hidden aspect-[16/9] bg-black">
              <ThumbnailRenderer
                id={project.id}
                imageUrl={project.coverImage}
                title={project.title}
                category={project.category}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          /* YouTube Feed Simulator view */
          <div className="rounded-[2.5rem] bg-[#0F0F0F] text-white p-6 sm:p-8 border border-white/10 mb-10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Youtube className="w-6 h-6 text-[#FF0000]" />
                <span className="font-bold tracking-tight text-sm">YouTube Feed Preview</span>
              </div>
              <span className="text-[11px] font-mono text-white/50">CTR Optimized Feed Test</span>
            </div>

            <div className="max-w-md mx-auto bg-[#181818] rounded-2xl overflow-hidden shadow-lg border border-white/5">
              <div className="aspect-[16/9] w-full bg-black relative">
                <ThumbnailRenderer
                  id={project.id}
                  imageUrl={project.coverImage}
                  title={project.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-black/80 text-white font-mono text-[10px] px-1.5 py-0.5 rounded font-bold">
                  14:32
                </span>
              </div>
              <div className="p-3.5 flex gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F5A623] flex items-center justify-center font-bold text-black text-xs shrink-0">
                  {project.client.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs text-white line-clamp-2 leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-[11px] text-white/60 mt-1">
                    {project.client} • {project.viewsGenerated || '1.2M views'} • 3 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Metadata Grid (Client, Year, Role, Services) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[#ECEAE3] border border-black/10 mb-10">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-black/50 block">
              CLIENT / CHANNEL
            </span>
            <span className="font-display font-bold text-sm sm:text-base text-black block mt-1">
              {project.client}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-black/50 block">
              PERFORMANCE
            </span>
            <span className="font-display font-bold text-sm sm:text-base text-green-700 block mt-1">
              {project.ctrBoost || project.viewsGenerated || '18.4% Peak CTR'}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-black/50 block">
              ROLE
            </span>
            <span className="font-display font-bold text-sm sm:text-base text-black block mt-1">
              {project.role}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-black/50 block">
              SKILLS & FX
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.services.map((s, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-grotesk font-semibold bg-white/80 px-2 py-0.5 rounded-full text-black/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Case Study Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 border-y border-black/10 mb-12">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5A623] block mb-2 font-bold">
              01 // THE HOOK & BRIEF
            </span>
            <p className="text-sm text-black/80 font-body leading-relaxed">
              {project.brief || project.description}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5A623] block mb-2 font-bold">
              02 // DESIGN PSYCHOLOGY
            </span>
            <p className="text-sm text-black/80 font-body leading-relaxed">
              {project.solution || "Optimized focal hierarchy using eye-tracking contrast, rim lighting, 3D typography compositing, and negative space to stop the scroll."}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5A623] block mb-2 font-bold">
              03 // RESULT & IMPACT
            </span>
            <p className="text-sm text-black/80 font-body leading-relaxed">
              Achieved high click-through rate ({project.ctrBoost || '16-19% CTR'}) and drove strong initial algorithmic velocity for the client.
            </p>
          </div>
        </div>

        {/* CTA Banner: Commission Abhishek */}
        <div className="rounded-3xl bg-[#050505] text-[#F5F4EF] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 mb-14">
          <div>
            <span className="text-[10px] font-mono text-[#F5A623] tracking-widest uppercase font-bold">
              LOOKING TO SKYROCKET YOUR VIEWS?
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
              Hire Abhishek Sharma for Your Next Thumbnail
            </h3>
            <p className="text-xs text-white/70 mt-1 max-w-md">
              Turnaround in 24–48 hours. Unlimited revisions until your video hits peak CTR.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="mailto:systummsharma23@gmail.com?subject=Thumbnail%20Project%20Inquiry"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#F5A623] text-black font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Email Abhishek (Direct Inquiry)</span>
            </a>
          </div>
        </div>

        {/* Bottom Prev / Next Navigation */}
        <div className="flex items-center justify-between border-t border-black/10 pt-8">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-2 text-xs font-grotesk font-bold uppercase tracking-wider text-black hover:text-[#F5A623] transition-colors p-2 rounded-lg hover:bg-black/5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev: {prevProject.title}</span>
            <span className="sm:hidden">Prev Work</span>
          </button>

          <span className="text-xs font-mono text-black/40">
            {currentIndex + 1} / {projects.length}
          </span>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-2 text-xs font-grotesk font-bold uppercase tracking-wider text-black hover:text-[#F5A623] transition-colors p-2 rounded-lg hover:bg-black/5 cursor-pointer"
          >
            <span className="hidden sm:inline">Next: {nextProject.title}</span>
            <span className="sm:hidden">Next Work</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
