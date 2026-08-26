import React, { useState } from 'react';
import { ArrowUpRight, Plus, Sparkles } from 'lucide-react';
import { Exhibition, Project } from '../types';

interface ExhibitionsListProps {
  exhibitions: Exhibition[];
  projects: Project[];
  onSelectProjectById: (projectId: string) => void;
}

export const ExhibitionsList: React.FC<ExhibitionsListProps> = ({
  exhibitions,
  projects,
  onSelectProjectById,
}) => {
  const [hoveredExhibition, setHoveredExhibition] = useState<Exhibition | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="exhibitions"
      className="relative bg-[#F5F4EF] py-20 sm:py-32 overflow-hidden border-t border-black/10"
      onMouseMove={handleMouseMove}
    >
      {/* Top Section Index Bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono tracking-widest text-black/50 uppercase">
            [ 04 // EXHIBITIONS & SELECTED WORK ]
          </span>
          <span className="h-1 w-1 rounded-full bg-[#F5A623]" />
          <span className="text-[10px] font-grotesk tracking-wider text-black/70 uppercase">
            PUBLICATIONS & RECOGNITION
          </span>
        </div>
        <span className="text-[10px] font-mono tracking-widest text-black/40 hidden sm:inline-block">
          GLOBAL RECOGNITION
        </span>
      </div>

      {/* OVERSIZED REPEATING MARQUEE: exhibitions • exhibitions • exhibitions */}
      <div className="w-full overflow-hidden whitespace-nowrap select-none py-2 sm:py-4 border-y border-[#050505]/10 mb-12 sm:mb-16">
        <div className="animate-marquee flex items-center gap-6 sm:gap-12">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-12">
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-[-0.05em] uppercase text-[#050505] hover:text-[#F5A623] transition-colors duration-300">
                exhibitions
              </span>
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#F5A623] inline-block" />
            </div>
          ))}
        </div>
      </div>

      {/* Numbered Project/Exhibition List Table */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative">
        
        {/* Floating Preview Image for Desktop */}
        {hoveredExhibition && (
          <div
            className="pointer-events-none hidden lg:block fixed z-50 w-64 h-40 rounded-[20px] overflow-hidden shadow-2xl border-2 border-white bg-black transition-all duration-150 ease-out"
            style={{
              left: `${cursorPos.x + 40}px`,
              top: `${cursorPos.y - 60}px`,
              transform: 'translate3d(0, 0, 0)',
            }}
          >
            <img
              src={hoveredExhibition.previewImage}
              alt={hoveredExhibition.title}
              className="w-full h-full object-cover filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 text-white">
              <p className="text-[10px] font-mono text-[#F5A623] uppercase">
                {hoveredExhibition.venue}
              </p>
            </div>
          </div>
        )}

        <div className="divide-y divide-[#050505]/10">
          {exhibitions.map((item) => (
            <div
              key={item.id}
              id={`exhibition-row-${item.id}`}
              onMouseEnter={() => setHoveredExhibition(item)}
              onMouseLeave={() => setHoveredExhibition(null)}
              onClick={() => item.projectId && onSelectProjectById(item.projectId)}
              className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-[#050505]/[0.03] px-6 -mx-6 rounded-[28px] transition-all duration-300"
            >
              {/* Left: Number + Title */}
              <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                <span className="font-mono font-bold text-lg sm:text-xl text-[#050505]/40 group-hover:text-[#F5A623] transition-colors">
                  {item.number}
                </span>

                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#050505] tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#050505]/60 font-body mt-1">
                    {item.venue} • <span className="font-medium text-[#050505]/80">{item.location}</span>
                  </p>
                </div>
              </div>

              {/* Right: Metadata + Outlined Action Button */}
              <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-10 pt-2 md:pt-0 border-t md:border-t-0 border-[#050505]/5">
                <div className="text-left md:text-right">
                  <span className="text-[11px] font-mono tracking-wider text-[#050505]/50 block uppercase">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#050505] block mt-0.5">
                    {item.year}
                  </span>
                </div>

                <button
                  className="px-6 py-2.5 rounded-full border border-[#050505]/20 group-hover:border-[#050505] bg-white group-hover:bg-[#050505] group-hover:text-[#F5F4EF] text-[#050505] text-xs font-grotesk font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 group-hover:shadow-md"
                >
                  <span>{item.linkText || 'View Project'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#F5A623]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Archive Note */}
        <div className="mt-12 p-6 sm:p-8 rounded-[32px] bg-[#ECEAE3] border border-[#050505]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#050505] text-[#F5A623] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-[#050505]">
                Comprehensive Archive & Press Kit
              </h4>
              <p className="text-xs text-[#050505]/70 font-body">
                Selected publications, monographs, and exhibition catalogs available upon request.
              </p>
            </div>
          </div>

          <a
            href="mailto:systummsharma23@gmail.com?subject=Thumbnail%20Catalog%20Request"
            className="px-6 py-3 rounded-full bg-[#050505] text-[#F5F4EF] hover:bg-[#F5A623] hover:text-[#050505] font-grotesk font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0"
          >
            Request Catalog PDF
          </a>
        </div>

      </div>
    </section>
  );
};
