import React from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { DesignerProfile } from '../types';

interface HeroProps {
  profile: DesignerProfile;
  onExploreClick: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onExploreClick, onOpenContact }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 overflow-hidden"
    >
      {/* Top Editorial Index Tag */}
      <div className="flex items-center justify-between border-b border-[#050505]/10 pb-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <div className="w-8 sm:w-12 h-[1px] bg-[#050505]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#050505]">
            Visual Director — Studio 2026
          </span>
          <span className="h-1 w-1 rounded-full bg-[#F5A623]" />
          <span className="text-[10px] font-mono tracking-widest text-[#050505]/50 uppercase hidden sm:inline-block">
            [ 01 // OVERVIEW ]
          </span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#050505]/50 hidden sm:inline-block">
          NY / LDN / TYO ARCHIVE
        </span>
      </div>

      {/* Main Hero Bento Grid Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative">
        {/* LEFT / PRIMARY AREA: Giant Display Headline, Bio & Bento Stats */}
        <div className="lg:col-span-7 z-10 flex flex-col justify-center">
          {/* Giant Multiline Bento Headline */}
          <h1
            id="hero-headline"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[140px] 2xl:text-[150px] font-black leading-[0.82] tracking-[-0.06em] uppercase flex flex-col select-none text-[#050505]"
          >
            <span className="hover:translate-x-1 transition-transform duration-300">
              {profile.headlineLine1 || 'graphic'}
            </span>
            <span className="text-[#F5A623] hover:translate-x-2 transition-transform duration-300">
              {profile.headlineLine2 || 'designer'}
            </span>
          </h1>

          {/* Editorial introduction paragraph */}
          <div className="mt-8 sm:mt-10 max-w-lg">
            <p
              id="hero-intro-text"
              className="text-base sm:text-lg md:text-xl text-[#050505]/80 font-medium leading-relaxed mb-8 font-body"
            >
              {profile.bioSnippet ||
                'Award-winning visual storyteller crafting identities, digital ecosystems, and experimental motion for global brands.'}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                id="hero-cta-btn"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#050505] text-[#F5F4EF] hover:bg-[#F5A623] hover:text-[#050505] font-grotesk font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-lg active:scale-95 group cursor-pointer"
              >
                <span>Explore Portfolio</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#050505]/20 hover:border-[#050505] bg-transparent text-[#050505] font-grotesk font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-[#050505]/5 cursor-pointer"
              >
                <span>Commission</span>
              </button>
            </div>

            {/* Bento Stats Block */}
            <div
              id="hero-stats-block"
              className="flex items-center gap-10 sm:gap-16 pt-8 border-t border-[#050505]/10"
            >
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-black tracking-tighter text-[#050505]">
                    {stat.value}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#050505]/60 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT AREA: Signature Bento Portrait Card (rounded-[100px], Yellow Canvas, Arrow Trigger) */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
          <div
            id="hero-portrait-card"
            className="w-full max-w-[420px] aspect-[4/5] sm:h-[540px] bg-[#F5A623] rounded-[60px] sm:rounded-[100px] flex items-center justify-center overflow-hidden relative shadow-2xl group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(245,166,35,0.3)]"
          >
            {/* Multiply blend overlay */}
            <div className="w-full h-full bg-[#D1D1D1] mix-blend-multiply opacity-20 absolute inset-0 pointer-events-none" />

            {/* Large Typography Watermark */}
            <div className="text-[120px] font-black opacity-10 absolute -top-10 -left-10 select-none text-[#050505] pointer-events-none font-display">
              ART
            </div>

            {/* Center Portrait Image Frame */}
            <div className="relative w-[85%] h-[82%] rounded-[45px] sm:rounded-[70px] overflow-hidden bg-[#050505]/10 shadow-inner">
              <img
                src={profile.portraitYellowBg}
                alt={`${profile.name} - ${profile.role}`}
                className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-out"
                loading="eager"
              />

              {/* Gradient info overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="text-white text-xs font-grotesk tracking-wide">
                  <p className="font-bold">{profile.name}</p>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest">{profile.role}</p>
                </div>
              </div>
            </div>

            {/* Signature Floating Arrow Action Circle from Reference */}
            <button
              id="hero-bento-arrow-btn"
              onClick={onExploreClick}
              className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-20 h-20 sm:w-24 sm:h-24 bg-[#050505] rounded-full flex items-center justify-center text-[#F5A623] cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl group/btn"
              aria-label="Explore work"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Side Rotated Explore Indicator */}
      <div className="hidden 2xl:block absolute top-1/2 -right-16 -rotate-90 origin-center text-[10px] font-bold uppercase tracking-[0.4em] opacity-30 select-none text-[#050505]">
        EXPLORE PORTFOLIO
      </div>
    </section>
  );
};
