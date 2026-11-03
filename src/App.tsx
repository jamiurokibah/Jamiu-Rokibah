import React, { useState, useEffect } from 'react';
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
import { ServiceItem, SERVICES } from './data/services.ts';
import { PortfolioItem } from './data/portfolio.ts';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [hireMeOpen, setHireMeOpen] = useState<boolean>(false);
  const [contactPrefilledService, setContactPrefilledService] = useState<string>('');

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services-overview', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Map 'services-overview' to 'services'
            const mapped = sectionId === 'services-overview' ? 'services' : sectionId;
            setActiveSection(mapped);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${sectionId}`);
    }
  };

  const handleSelectServiceFromOverview = (service: ServiceItem) => {
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Sticky Top Bar Contract Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenHireMe={() => setHireMeOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onExploreServices={() => handleNavigate('services-overview')}
          onWorkWithMe={() => setHireMeOpen(true)}
        />

        {/* 2. Trust & Introduction Section */}
        <TrustIntroSection />

        {/* 3. Services Overview (4 Service Cards with Gold Hover) */}
        <ServicesOverviewSection
          onSelectService={handleSelectServiceFromOverview}
          onExploreDetailed={() => handleNavigate('services')}
        />

        {/* 4. Why Choose RashReader? (6 Pillars) */}
        <WhyChooseSection />

        {/* 5. Detailed Services Section (Deep Dive, Deliverables, Who It's For, Benefits, Fiverr & Contact Buttons) */}
        <ServicesDetailSection
          onContactService={handleContactService}
        />

        {/* 6. Portfolio Gallery (Category Filters, Book Mockups, Before/After & Report Previews) */}
        <PortfolioSection
          onSelectItem={(item) => setSelectedPortfolioItem(item)}
          onStartProject={() => setHireMeOpen(true)}
        />

        {/* 7. About Section (Story, Bio, Values, Profile Photo Placeholder) */}
        <AboutSection
          onWorkWithMe={() => handleNavigate('contact')}
        />

        {/* 8. Client Testimonials Section (Clean Card Layout, Transparent Placeholders) */}
        <TestimonialsSection />

        {/* 9. Contact Page & Form (Full working form, email, social media channels, Fiverr links) */}
        <ContactSection
          prefilledService={contactPrefilledService}
        />
      </main>

      {/* 10. Premium Dark Footer */}
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
