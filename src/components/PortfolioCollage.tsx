import React, { useState } from 'react';
import { ArrowUpRight, Eye, LayoutGrid, Layers, TrendingUp, Youtube } from 'lucide-react';
import { Project } from '../types';
import { ThumbnailRenderer } from './ThumbnailRenderer';

interface PortfolioCollageProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const PortfolioCollage: React.FC<PortfolioCollageProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'bento' | 'grid'>('grid');

  // Categories list
  const categories = [
    'All',
    'Podcasts & Finance',
    'Interviews & Business',
    'Gaming & Entertainment',
    'Tech & Reviews',
    'EdTech & Exams',
    'Lifestyle & Vlogs'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.category.toLowerCase()));

  // Key featured projects for Bento showcase
  const p1 = projects[0] || projects[0]; // The Money Show (10M+ Views)
  const p2 = projects[1] || projects[0]; // 0 to 1 Crore Story
  const p3 = projects[2] || projects[0]; // Aaron Gaming
  const p4 = projects[5] || projects[0]; // 10th Boards 95%
  const p5 = projects[8] || projects[0]; // Students 15K/Month

  return (
    <section
      id="portfolio"
      className="relative bg-[#F5F4EF] py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 overflow-hidden"
    >
      {/* Top Section Index Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/10 pb-4 mb-8 sm:mb-12 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono tracking-widest text-black/50 uppercase">
            [ PORTFOLIO SHOWCASE ]
          </span>
          <span className="h-1 w-1 rounded-full bg-[#F5A623]" />
          <span className="text-[10px] font-grotesk tracking-wider text-black/80 uppercase font-bold">
            10+ High-CTR Client Works
          </span>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#E9E8E2] p-1 rounded-full border border-black/10">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-grotesk font-bold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#050505] text-[#F5F4EF] shadow'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              <LayoutGrid className="w-3 h-3" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('bento')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-grotesk font-bold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'bento'
                  ? 'bg-[#050505] text-[#F5F4EF] shadow'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Bento View</span>
            </button>
          </div>
        </div>
      </div>

      {/* GIANT OVERSIZED "portfolio" DISPLAY HEADING */}
      <div className="relative text-center my-2 sm:my-6 z-20 pointer-events-none">
        <h2
          id="portfolio-giant-title"
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11.5rem] font-black leading-[0.82] tracking-[-0.06em] uppercase select-none text-[#050505] opacity-95"
        >
          portfolio
        </h2>
      </div>

      {/* Category Filter Pills */}
      <div className="relative z-20 flex items-center justify-center gap-2 flex-wrap mb-10 sm:mb-14">
        {categories.map((cat) => {
          const count = cat === 'All'
            ? projects.length
            : projects.filter(p => p.category.toLowerCase().includes(cat.toLowerCase()) || cat.toLowerCase().includes(p.category.toLowerCase())).length;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-grotesk font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#050505] text-[#F5F4EF] shadow-md scale-105'
                  : 'bg-[#E9E8E2] text-black/70 hover:bg-black/10 hover:text-black'
              }`}
            >
              <span>{cat}</span>
              <span className="ml-1.5 text-[10px] opacity-60 font-mono">({count})</span>
            </button>
          );
        })}
      </div>

      {/* VIEW MODE 1: 16:9 THUMBNAIL WALL / GALLERY (Primary Client Showcase) */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-[28px] sm:rounded-[36px] bg-[#E9E8E2] p-3 sm:p-4 border border-[#050505]/10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* 16:9 Thumbnail Image Container */}
              <div className="relative w-full aspect-[16/9] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#050505] shadow-inner">
                <ThumbnailRenderer
                  id={project.id}
                  imageUrl={project.coverImage}
                  title={project.title}
                  category={project.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />

                {/* Top Badges (CTR / Views / Number) */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md text-white text-[9px] font-mono tracking-widest uppercase">
                    {project.badgeText || `${project.ctrBoost || '18% CTR'}`}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white text-[#050505] flex items-center justify-center group-hover:bg-[#F5A623] transition-colors shadow">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <span className="px-4 py-2 rounded-full bg-[#F5A623] text-[#050505] font-grotesk font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </span>
                </div>
              </div>

              {/* Card Meta & Details */}
              <div className="pt-4 px-1 pb-1">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-mono tracking-wider text-[#050505]/60 uppercase font-bold">
                    {project.category}
                  </span>
                  {project.viewsGenerated && (
                    <span className="text-[10px] font-grotesk font-bold text-[#F5A623] bg-[#050505] px-2 py-0.5 rounded-md">
                      {project.viewsGenerated}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[#050505] tracking-tight group-hover:text-[#F5A623] transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-xs text-[#050505]/70 font-body mt-1 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] text-[#050505]/70">
                  <span className="font-grotesk font-semibold">{project.client}</span>
                  <span className="font-mono text-[10px] text-[#050505]/50">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW MODE 2: ASYMMETRIC BENTO GRID COLLAGE */}
      {viewMode === 'bento' && (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* LEFT COLUMN (Span 5): 0 to 1 Crore + 10th Boards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div
              id="collage-card-tall"
              onClick={() => onSelectProject(p2)}
              className="group relative cursor-pointer rounded-[36px] sm:rounded-[48px] bg-[#E9E8E2] p-3.5 border border-[#050505]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3] rounded-[30px] sm:rounded-[40px] overflow-hidden bg-[#050505]">
                <ThumbnailRenderer
                  id={p2.id}
                  imageUrl={p2.coverImage}
                  title={p2.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute top-5 left-5 right-5 flex justify-between items-center text-white z-10">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase">
                    {p2.badgeText || '18.2% CTR'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white text-[#050505] flex items-center justify-center group-hover:bg-[#F5A623] transition-colors shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white">
                  <p className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase">
                    {p2.category}
                  </p>
                  <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight">
                    {p2.title}
                  </h3>
                  <p className="text-xs text-white/80 font-body mt-1 line-clamp-1">
                    {p2.viewsGenerated} • {p2.client}
                  </p>
                </div>
              </div>
            </div>

            {/* Metric Card: 10th Boards 95% */}
            <div
              id="collage-card-minimal"
              onClick={() => onSelectProject(p4)}
              className="group cursor-pointer rounded-[32px] bg-[#050505] text-[#F5F4EF] p-6 border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono text-[#F5A623] uppercase">19.1% PEAK CTR</span>
                <span className="text-[10px] font-mono text-white/50">{p4.viewsGenerated}</span>
              </div>
              <h4 className="font-display font-bold text-xl text-white group-hover:text-[#F5A623] transition-colors">
                {p4.title}
              </h4>
              <p className="text-xs text-white/70 font-body mt-2 leading-relaxed">
                {p4.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-grotesk text-[#F5A623] uppercase tracking-wider font-bold">
                <span>View Thumbnail Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Span 7): The Money Show 10M+ & Grid */}
          <div className="md:col-span-7 flex flex-col gap-6 sm:gap-8">
            <div
              id="collage-card-wide"
              onClick={() => onSelectProject(p1)}
              className="group relative cursor-pointer rounded-[36px] sm:rounded-[48px] bg-[#E9E8E2] p-3.5 border border-[#050505]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative w-full aspect-[16/9] rounded-[30px] sm:rounded-[40px] overflow-hidden bg-[#050505]">
                <ThumbnailRenderer
                  id={p1.id}
                  imageUrl={p1.coverImage}
                  title={p1.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute top-5 left-5 right-5 flex justify-between items-center text-white z-10">
                  <span className="px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#F5A623] uppercase font-bold">
                    ★ 10M+ VIEWS VIRAL HIT
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white text-[#050505] flex items-center justify-center group-hover:bg-[#F5A623] transition-colors shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/40 to-transparent p-6 text-white">
                  <p className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase">
                    {p1.category}
                  </p>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
                    {p1.title}
                  </h3>
                  <p className="text-xs text-white/80 font-body mt-1">
                    {p1.client} • {p1.ctrBoost}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row: Aaron Gaming + Students 15K */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Aaron Gaming Card */}
              <div
                id="collage-card-yellow"
                onClick={() => onSelectProject(p3)}
                className="group cursor-pointer rounded-[32px] bg-[#E9E8E2] p-3.5 border border-[#050505]/10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-[#050505]"
              >
                <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-[#050505] mb-3">
                  <ThumbnailRenderer
                    id={p3.id}
                    imageUrl={p3.coverImage}
                    title={p3.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="px-2 pb-1">
                  <span className="text-[10px] font-mono tracking-wider text-[#050505]/70 uppercase block font-bold">
                    {p3.category}
                  </span>
                  <h4 className="font-display font-bold text-lg text-[#050505] tracking-tight mt-0.5 line-clamp-1">
                    {p3.title}
                  </h4>
                </div>
              </div>

              {/* Students ₹15K Card */}
              <div
                id="collage-card-kinetic"
                onClick={() => onSelectProject(p5)}
                className="group cursor-pointer rounded-[32px] bg-[#E9E8E2] p-3.5 border border-[#050505]/10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-[#050505]"
              >
                <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden bg-[#050505] mb-3">
                  <ThumbnailRenderer
                    id={p5.id}
                    imageUrl={p5.coverImage}
                    title={p5.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="px-2 pb-1">
                  <span className="text-[10px] font-mono tracking-wider text-[#050505]/70 uppercase block font-bold">
                    {p5.category}
                  </span>
                  <h4 className="font-display font-bold text-lg text-[#050505] tracking-tight mt-0.5 line-clamp-1">
                    {p5.title}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
