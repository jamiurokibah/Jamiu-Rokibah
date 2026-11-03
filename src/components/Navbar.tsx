import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { BRAND_CONFIG } from '../data/brand.ts';
import { Menu, X, ExternalLink, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenHireMe: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenHireMe,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-[#222222] shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Gold Emblem */}
          <div className="shrink-0">
            <BrandLogo
              size="sm"
              onClick={() => handleNavClick('home')}
              className="cursor-pointer"
            />
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {BRAND_CONFIG.navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Quick Connect */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={BRAND_CONFIG.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#FFF0CA] via-[#D4AF37] to-[#C5A253] rounded-md hover:brightness-110 transition-all duration-200 shadow-[0_0_15px_rgba(212,175,55,0.3)] whitespace-nowrap"
            >
              <span>Hire Me on Fiverr</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenHireMe}
              className="px-3.5 py-2 text-xs font-medium text-[#D4AF37] border border-[#D4AF37]/50 rounded-md hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors whitespace-nowrap cursor-pointer"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenHireMe}
              className="px-3 py-1.5 text-xs font-semibold bg-[#D4AF37] text-black rounded-md whitespace-nowrap"
            >
              Hire Me
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <BrandLogo size="sm" showText={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-zinc-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {BRAND_CONFIG.navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`text-left text-lg font-serif tracking-wide py-2 transition-colors ${
                    activeSection === link.id
                      ? 'text-[#D4AF37] font-bold pl-2 border-l-2 border-[#D4AF37]'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-zinc-800 space-y-4">
            <a
              href={BRAND_CONFIG.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-black bg-[#D4AF37] rounded-md shadow-lg"
            >
              <span>Hire Me on Fiverr</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${BRAND_CONFIG.email}`}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-zinc-300 border border-zinc-700 rounded-md hover:text-[#D4AF37] hover:border-[#D4AF37]"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>{BRAND_CONFIG.email}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
