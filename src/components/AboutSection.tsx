import React, { useState } from 'react';
import { ArrowUpRight, Compass, Eye, Layers, Terminal } from 'lucide-react';
import { DesignerProfile } from '../types';

interface AboutSectionProps {
  profile: DesignerProfile;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'disciplines' | 'background'>('philosophy');

  return (
    <section
      id="about"
      className="relative bg-[#050505] text-[#F5F4EF] pt-20 sm:pt-28 pb-24 sm:pb-36 overflow-hidden rounded-t-[50px] sm:rounded-t-[80px] z-20"
    >
      {/* Editorial Noise & Subtle Grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top Section Index Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 mb-8 sm:mb-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase">
            [ 02 // ABOUT & ETHOS ]
          </span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
            STUDIO ETHOS
          </span>
        </div>
        <span className="text-[10px] font-mono tracking-widest text-white/40 hidden sm:inline-block">
          HELVETICA & CONTEMPORARY RADICALISM
        </span>
      </div>

      {/* OVERSIZED REPEATING MARQUEE TYPOGRAPHY: about • about • about from Design HTML */}
      <div className="w-full overflow-hidden whitespace-nowrap select-none py-3 border-b border-white/10 mb-8 sm:mb-14">
        <div className="animate-marquee flex items-center gap-8 sm:gap-14 opacity-25 hover:opacity-100 transition-opacity duration-300">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 sm:gap-14">
              <span className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter uppercase text-white hover:text-[#F5A623] transition-colors duration-300">
                about
              </span>
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#F5A623] inline-block" />
            </div>
          ))}
        </div>
      </div>

      {/* Signature Accent Line from Design HTML */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 flex justify-center mb-10 sm:mb-16">
        <div className="w-32 h-1 bg-[#F5A623] opacity-60 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* CENTER/LEFT VISUAL: Radial Graphic Element with Monochrome Portrait */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg aspect-square flex items-center justify-center">
              
              {/* Layer 1: Radiant Geometric Sunburst / Petal Hands Behind Head */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg
                  className="w-full h-full text-white/20 animate-[spin_60s_linear_infinite]"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  {/* Radiating concentric geometric arms / petals replicating the reference graphic motif */}
                  {Array.from({ length: 16 }).map((_, i) => {
                    const angle = (i * 360) / 16;
                    return (
                      <g key={i} transform={`rotate(${angle} 200 200)`}>
                        <path
                          d="M195 40 C190 20, 210 20, 205 40 L205 140 L195 140 Z"
                          fill="currentColor"
                          opacity={0.4}
                        />
                        <circle cx="200" cy="25" r="4" fill="#F5A623" />
                      </g>
                    );
                  })}
                  {/* Concentric rings */}
                  <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity={0.3} />
                  <circle cx="200" cy="200" r="120" stroke="#F5A623" strokeWidth="1" opacity={0.5} />
                  <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" opacity={0.2} />
                </svg>
              </div>

              {/* Layer 2: Center Art-Directed Monochrome Portrait Frame */}
              <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 rounded-[2.5rem] bg-[#141414] p-3 border border-white/10 shadow-2xl overflow-hidden group hover:border-[#F5A623]/50 transition-all duration-500">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-black">
                  <img
                    src={profile.aboutMonochromePortrait}
                    alt={`${profile.name} art portrait`}
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Subtle Typography Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                    <div>
                      <p className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase">
                        ART DIRECTION
                      </p>
                      <p className="font-display font-bold text-sm tracking-tight">
                        {profile.name}
                      </p>
                    </div>
                    <span className="text-[9px] font-mono text-white/50">TOKYO / 2026</span>
                  </div>
                </div>
              </div>

              {/* Floating Accent Capsule */}
              <div className="absolute -bottom-4 sm:bottom-0 right-4 sm:right-6 z-20 px-4 py-2 rounded-full bg-[#1A1A1A] border border-white/15 text-xs text-white/90 font-grotesk flex items-center gap-2 shadow-xl backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
                <span className="text-[11px] tracking-wide">Analog Soul • Digital Form</span>
              </div>
            </div>
          </div>

          {/* RIGHT EDITORIAL COLUMN: Philosophy, Statement & Disciplines */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#F5A623] block mb-3">
                STATEMENT & MANIFESTO
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
                {profile.aboutIntro}
              </h2>
            </div>

            {/* Interactive Tab Navigator */}
            <div className="flex border-b border-white/15 gap-6">
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`pb-3 text-xs font-grotesk font-bold uppercase tracking-wider transition-all relative ${
                  activeTab === 'philosophy' ? 'text-[#F5A623]' : 'text-white/50 hover:text-white'
                }`}
              >
                Philosophy
                {activeTab === 'philosophy' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F5A623]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('disciplines')}
                className={`pb-3 text-xs font-grotesk font-bold uppercase tracking-wider transition-all relative ${
                  activeTab === 'disciplines' ? 'text-[#F5A623]' : 'text-white/50 hover:text-white'
                }`}
              >
                Disciplines
                {activeTab === 'disciplines' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F5A623]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('background')}
                className={`pb-3 text-xs font-grotesk font-bold uppercase tracking-wider transition-all relative ${
                  activeTab === 'background' ? 'text-[#F5A623]' : 'text-white/50 hover:text-white'
                }`}
              >
                Background
                {activeTab === 'background' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F5A623]" />
                )}
              </button>
            </div>

            {/* Tab Content Display */}
            {activeTab === 'philosophy' && (
              <div className="space-y-4 text-white/75 text-sm sm:text-base leading-relaxed animate-in fade-in duration-300">
                {profile.aboutPhilosophy.map((p, idx) => (
                  <p key={idx} className="font-body">
                    {p}
                  </p>
                ))}
              </div>
            )}

            {activeTab === 'disciplines' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in fade-in duration-300">
                {profile.disciplines.map((discipline, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#F5A623]/60 transition-all flex items-center justify-between group"
                  >
                    <span className="text-xs font-grotesk text-white/90 group-hover:text-white font-medium">
                      {discipline}
                    </span>
                    <span className="text-[10px] font-mono text-[#F5A623] opacity-0 group-hover:opacity-100 transition-opacity">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'background' && (
              <div className="space-y-3 text-sm text-white/80 animate-in fade-in duration-300">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <span className="font-bold text-white">Full-Time Creator Thumbnail Specialist</span>
                  <span className="text-xs font-mono text-white/50">2023 — Present</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <span className="font-bold text-white">Graphic & YouTube Visual Designer</span>
                  <span className="text-xs font-mono text-white/50">2021 — 2023</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-2">
                  <span className="font-bold text-white">High-CTR Click Psychology & Retouching</span>
                  <span className="text-xs font-mono text-white/50">50M+ Views Driven</span>
                </div>
              </div>
            )}

            {/* Bottom CTA trigger */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F5A623] text-black font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 active:scale-95 shadow-lg"
              >
                <span>Initiate Collaboration</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#portfolio"
                className="text-xs font-grotesk uppercase tracking-wider text-white/60 hover:text-white transition-colors underline underline-offset-4"
              >
                Browse Archive ↘
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
