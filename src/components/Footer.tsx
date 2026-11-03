import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { BRAND_CONFIG } from '../data/brand.ts';
import { SERVICES } from '../data/services.ts';
import { Mail, ExternalLink, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-zinc-400 border-t border-zinc-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Brand Logo & Short Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" showText={true} />
            
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm pt-2">
              Premium author and publishing services specializing in thoughtful beta reading, rigorous book editing, striking cover design, and high-impact book promotion.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_CONFIG.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-white rounded transition-colors"
              >
                <span>Hire on Fiverr</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono">{BRAND_CONFIG.email}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Four Main Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Main Services
            </div>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors cursor-pointer text-left block"
                  >
                    <span className="font-medium text-zinc-300 hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </span>
                    <span className="block text-[11px] text-zinc-500 font-light">
                      {service.subtitle}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2.5">
                Quick Navigation
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {BRAND_CONFIG.navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className="text-left text-zinc-400 hover:text-white transition-colors cursor-pointer py-0.5"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
                Author Channels
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {BRAND_CONFIG.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-[#121212] border border-zinc-800 hover:border-[#D4AF37] text-[11px] text-zinc-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            {BRAND_CONFIG.copyright}
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-zinc-600">
              CRAFTED FOR AUTHORS & PUBLISHERS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 text-zinc-400 hover:text-[#D4AF37] hover:bg-zinc-900 rounded transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
