import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { DesignerProfile } from '../types';

interface HeaderProps {
  profile: DesignerProfile;
  onOpenContact: () => void;
  onOpenCustomizer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ profile, onOpenContact, onOpenCustomizer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Exhibitions', href: '#exhibitions' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F4EF]/95 backdrop-blur-md border-b border-[#050505]/5 py-4 shadow-[0_2px_20px_rgba(0,0,0,0.02)]'
          : 'bg-transparent py-6 sm:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 flex items-center justify-between">
        {/* Left: Bento Monogram / Brand logo */}
        <a
          id="header-brand-logo"
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#050505] text-[#F5F4EF] flex items-center justify-center font-display font-black text-sm tracking-tighter transition-all duration-300 group-hover:scale-105 group-hover:bg-[#F5A623] group-hover:text-[#050505]">
            {profile.monogram || 'AS'}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-black tracking-tight uppercase font-grotesk text-[#050505]">
              {profile.name}
            </span>
            <span className="text-[9px] text-[#050505]/50 font-bold tracking-[0.15em] uppercase">
              {profile.role.split('&')[0].trim()}
            </span>
          </div>
        </a>

        {/* Center: Bento Grid navigation links */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-10 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase()}`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#050505]/80 hover:text-[#050505] transition-colors relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F5A623] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Availability status & Contact trigger */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-[#050505]/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for hire — {profile.location}</span>
          </div>

          <button
            id="header-contact-btn"
            onClick={onOpenContact}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#050505] text-[#F5F4EF] hover:bg-[#F5A623] hover:text-[#050505] px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {onOpenCustomizer && (
            <button
              id="header-customizer-btn"
              onClick={onOpenCustomizer}
              title="Edit Profile & Images"
              className="p-2.5 rounded-full border border-[#050505]/10 hover:border-[#050505]/30 bg-white/80 hover:bg-white text-[#050505]/70 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex sm:hidden items-center gap-2">
          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              className="p-2 rounded-full border border-[#050505]/10 bg-white text-[#050505]/80"
              title="Edit Content"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          )}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#050505] text-white hover:bg-[#F5A623] hover:text-[#050505] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 top-[60px] bg-[#F5F4EF] z-50 flex flex-col justify-between p-8 sm:hidden animate-in fade-in slide-in-from-top-4 duration-300 border-t border-black/10 shadow-2xl"
        >
          <div className="flex flex-col gap-6 pt-4">
            <span className="text-[10px] font-bold tracking-widest text-black/40 uppercase font-grotesk">
              Navigation
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-3xl font-display font-bold text-black hover:text-[#F5A623] transition-colors flex items-center justify-between border-b border-black/10 pb-4"
              >
                <span>{link.name}</span>
                <span className="text-xs font-grotesk text-black/40 font-normal">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pb-8">
            <div className="flex items-center gap-2 text-xs text-black/70 bg-white p-3 rounded-xl border border-black/5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.availability}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 bg-black text-[#F5F4EF] rounded-full font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-[#F5A623] hover:text-black transition-colors"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
