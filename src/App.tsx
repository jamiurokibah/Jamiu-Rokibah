import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { TrustIntroSection } from './components/TrustIntroSection.tsx';
import { ServicesOverviewSection } from './components/ServicesOverviewSection.tsx';
import { WhyChooseSection } from './components/WhyChooseSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesDetailSection } from './components/ServicesDetailSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { PortfolioModal } from './components/PortfolioModal.tsx';
import { HireMeModal } from './components/HireMeModal.tsx';
import { ServiceItem } from './data/services.ts';
import { PortfolioItem } from './data/portfolio.ts';
import { ArrowLeft, Compass, Eye } from 'lucide-react';

const VALID_SECTIONS = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];

const PAGE_TITLES: Record<string, string> = {
  home: 'RashReader – Premium Author Services & Publishing Portfolio',
  about: 'About RashReader – Literary Consulting & Editorial Services',
  services: 'Author Services – Beta Reading, Book Editing, Cover Design & Promotion | RashReader',
  portfolio: 'Portfolio & Case Studies – Sample Covers, Editing & Reports | RashReader',
  testimonials: 'Author Reviews & Client Testimonials | RashReader',
  contact: 'Contact RashReader – Start Your Publishing Project',
};

function getUrlSection(): string {
  // 1. Check hash e.g. #services or #/services
  if (typeof window !== 'undefined') {
    const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
    if (VALID_SECTIONS.includes(rawHash)) {
      return rawHash;
    }

    // 2. Check pathname e.g. /services or /about
    const rawPath = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase().trim();
    if (VALID_SECTIONS.includes(rawPath)) {
      return rawPath;
    }

    // 3. Check sessionStorage for previous active page
    try {
      const saved = sessionStorage.getItem('rashreader_current_page');
      if (saved && VALID_SECTIONS.includes(saved)) {
        return saved;
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }

  return 'home';
}

export default function App() {
  const [activeSection, setActiveSection] = useState<string>(getUrlSection);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [hireMeOpen, setHireMeOpen] = useState<boolean>(false);
  const [contactPrefilledService, setContactPrefilledService] = useState<string>('');
  
  // viewMode allows authors to either browse as a continuous luxury landing page or focus on dedicated standalone pages
  const [viewMode, setViewMode] = useState<'continuous' | 'dedicated'>('continuous');
  
  const isInitialMount = useRef(true);

  // Sync document title and storage when activeSection changes
  useEffect(() => {
    document.title = PAGE_TITLES[activeSection] || PAGE_TITLES.home;
    try {
      sessionStorage.setItem('rashreader_current_page', activeSection);
    } catch {
      // Ignore
    }

    // Update URL hash without forcing jump if not present
    if (window.location.hash.replace(/^#\/?/, '') !== activeSection) {
      window.history.replaceState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);

  // Handle Initial Reload / Mount scroll restoration
  useEffect(() => {
    const initialPage = getUrlSection();
    if (initialPage && initialPage !== 'home') {
      setActiveSection(initialPage);
      
      // Delay slightly so DOM elements are mounted
      const timer = setTimeout(() => {
        const targetElement = document.getElementById(initialPage);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'auto' });
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for browser Back/Forward (popstate) and Hash Changes
  useEffect(() => {
    const handleUrlChange = () => {
      const section = getUrlSection();
      setActiveSection(section);
      const targetElement = document.getElementById(section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // Scroll spy for continuous mode
  useEffect(() => {
    if (viewMode !== 'continuous') return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Don't override during first half-second of initial restore
          if (isInitialMount.current) {
            isInitialMount.current = false;
            ticking = false;
            return;
          }

          const sections = ['home', 'services-overview', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
          const scrollPosition = window.scrollY + 220;

          for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
              const top = element.offsetTop;
              const height = element.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                const mapped = sectionId === 'services-overview' ? 'services' : sectionId;
                setActiveSection(mapped);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    try {
      sessionStorage.setItem('rashreader_current_page', sectionId);
    } catch {
      // Ignore
    }

    if (viewMode === 'continuous') {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(null, '', `#${sectionId}`);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const handleSelectServiceFromOverview = (_service: ServiceItem) => {
    handleNavigate('services');
  };

  const handleContactService = (serviceName: string) => {
    setContactPrefilledService(serviceName);
    handleNavigate('contact');
  };

  const handleInquireFromPortfolio = (category: string) => {
    setContactPrefilledService(category);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col justify-between">
      {/* Sticky Top Bar Contract Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenHireMe={() => setHireMeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* View Mode Controller Banner (Allows users to toggle between continuous editorial flow or dedicated page focus) */}
        <div className="bg-[#0D0D0D] border-b border-zinc-900 pt-20 pb-3 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-zinc-400">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-zinc-500">Current View:</span>
              <span className="text-white font-serif font-semibold capitalize text-sm">
                {activeSection === 'home' ? 'Home / Overview' : `${activeSection} Page`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zinc-500 hidden sm:inline">Browse Mode:</span>
              <div className="inline-flex p-1 bg-black rounded-lg border border-zinc-800">
                <button
                  onClick={() => setViewMode('continuous')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                    viewMode === 'continuous'
                      ? 'bg-gradient-to-r from-[#FFF0CA] to-[#D4AF37] text-black font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Browse the entire portfolio in one seamless editorial scroll"
                >
                  Continuous Flow
                </button>
                <button
                  onClick={() => {
                    setViewMode('dedicated');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                    viewMode === 'dedicated'
                      ? 'bg-gradient-to-r from-[#FFF0CA] to-[#D4AF37] text-black font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  title="View each section as an isolated standalone page"
                >
                  Dedicated Page
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 1. CONTINUOUS FLOW VIEW MODE */}
        {viewMode === 'continuous' && (
          <div>
            {/* Home Section */}
            <HeroSection
              onExploreServices={() => handleNavigate('services-overview')}
              onWorkWithMe={() => setHireMeOpen(true)}
            />

            {/* Trust & Introduction Section */}
            <TrustIntroSection />

            {/* Services Overview Cards */}
            <ServicesOverviewSection
              onSelectService={handleSelectServiceFromOverview}
              onExploreDetailed={() => handleNavigate('services')}
            />

            {/* Why Choose RashReader */}
            <WhyChooseSection />

            {/* Detailed Services Section */}
            <ServicesDetailSection
              onContactService={handleContactService}
            />

            {/* Portfolio Section */}
            <PortfolioSection
              onSelectItem={(item) => setSelectedPortfolioItem(item)}
              onStartProject={() => setHireMeOpen(true)}
            />

            {/* About Section */}
            <AboutSection
              onWorkWithMe={() => handleNavigate('contact')}
            />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Contact Section */}
            <ContactSection
              prefilledService={contactPrefilledService}
            />
          </div>
        )}

        {/* 2. DEDICATED STANDALONE PAGE VIEW MODE */}
        {viewMode === 'dedicated' && (
          <div className="min-h-[80vh]">
            {activeSection === 'home' && (
              <div>
                <HeroSection
                  onExploreServices={() => handleNavigate('services')}
                  onWorkWithMe={() => setHireMeOpen(true)}
                />
                <TrustIntroSection />
                <ServicesOverviewSection
                  onSelectService={handleSelectServiceFromOverview}
                  onExploreDetailed={() => handleNavigate('services')}
                />
                <WhyChooseSection />
              </div>
            )}

            {activeSection === 'about' && (
              <AboutSection
                onWorkWithMe={() => handleNavigate('contact')}
                isStandalonePage={true}
              />
            )}

            {activeSection === 'services' && (
              <ServicesDetailSection
                onContactService={handleContactService}
                isStandalonePage={true}
              />
            )}

            {activeSection === 'portfolio' && (
              <PortfolioSection
                onSelectItem={(item) => setSelectedPortfolioItem(item)}
                onStartProject={() => setHireMeOpen(true)}
                isStandalonePage={true}
              />
            )}

            {activeSection === 'testimonials' && (
              <TestimonialsSection
                isStandalonePage={true}
              />
            )}

            {activeSection === 'contact' && (
              <ContactSection
                prefilledService={contactPrefilledService}
                isStandalonePage={true}
              />
            )}
          </div>
        )}

      </main>

      {/* Premium Dark Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Fullscreen Portfolio Project Lightbox Modal */}
      <PortfolioModal
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
        onInquire={handleInquireFromPortfolio}
      />

      {/* Hire Me / Fast Booking Modal */}
      <HireMeModal
        isOpen={hireMeOpen}
        onClose={() => setHireMeOpen(false)}
        onSelectServiceAndContact={handleContactService}
      />
    </div>
  );
}
