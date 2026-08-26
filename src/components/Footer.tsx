import React from 'react';
import { ArrowUp } from 'lucide-react';
import { DesignerProfile } from '../types';

interface FooterProps {
  profile: DesignerProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#050505] text-[#F5F4EF] py-12 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col gap-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-display font-bold text-xs tracking-wider">
              {profile.monogram || 'AS'}
            </div>
            <div>
              <span className="text-xs font-bold uppercase font-grotesk tracking-tight text-white block">
                {profile.name}
              </span>
              <span className="text-[10px] text-white/50 font-mono tracking-wider uppercase">
                {profile.role}
              </span>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-grotesk font-bold uppercase tracking-wider text-white/70 hover:text-[#F5A623] transition-colors group cursor-pointer"
          >
            <span>Back To Top</span>
            <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#F5A623] group-hover:text-black flex items-center justify-center transition-all">
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>

        {/* Colophon & Legal copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40">
          <p>© {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span>DIRECT CONTACT: {profile.email}</span>
            <span>•</span>
            <span>GRAPHIC & THUMBNAIL DESIGN ARCHIVE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
