import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/services.ts';
import { BRAND_CONFIG } from '../data/brand.ts';
import {
  Check,
  UserCheck,
  Award,
  Clock,
  ExternalLink,
  MessageSquare,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface ServicesDetailSectionProps {
  onContactService: (serviceName: string) => void;
  initialServiceId?: string;
  isStandalonePage?: boolean;
}

export const ServicesDetailSection: React.FC<ServicesDetailSectionProps> = ({
  onContactService,
  initialServiceId,
  isStandalonePage = false,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SERVICES[0].id
  );

  const currentService =
    SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section
      id="services"
      className={`py-24 bg-black relative ${isStandalonePage ? 'pt-32 min-h-screen' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            Dedicated Author Solutions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Comprehensive Publishing Services
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Detailed breakdowns of our specialized author offerings, deliverables, suitability, and benefits. Select any service to inspect full specifications.
          </p>
        </div>

        {/* Service Navigation Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {SERVICES.map((s) => {
            const isSelected = s.id === selectedServiceId;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedServiceId(s.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#181818] border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.25)] ring-1 ring-[#D4AF37]'
                    : 'bg-[#101010] border-zinc-800 hover:border-zinc-700 hover:bg-[#141414]'
                }`}
              >
                <span
                  className={`text-xs font-mono font-medium block mb-1 ${
                    isSelected ? 'text-[#D4AF37]' : 'text-zinc-500'
                  }`}
                >
                  SERVICE {s.number}
                </span>
                <div
                  className={`font-serif text-base sm:text-lg font-bold leading-snug ${
                    isSelected ? 'text-white' : 'text-zinc-300'
                  }`}
                >
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase */}
        <div className="rounded-2xl bg-[#121212] border border-[#D4AF37]/40 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          
          {/* Professional Banner */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-zinc-950">
            <img
              src={currentService.image}
              alt={currentService.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center brightness-75 hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Banner Overlays & Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 rounded text-xs font-mono text-[#D4AF37] mb-2">
                  <span>SERVICE {currentService.number}</span>
                  <span>·</span>
                  <span>{currentService.subtitle}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  {currentService.title}
                </h3>
              </div>

              {/* Turnaround Pill */}
              <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md rounded-lg border border-zinc-700 text-xs text-zinc-300">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>{currentService.turnaroundTime}</span>
              </div>
            </div>
          </div>

          {/* Main Details Body */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-12">
            
            {/* Detailed Description */}
            <div className="space-y-4">
              <h4 className="font-serif text-2xl font-bold text-white">
                Service Overview & Editorial Approach
              </h4>
              <p className="text-zinc-300 text-base leading-relaxed font-light">
                {currentService.fullDescription}
              </p>
            </div>

            {/* 3-Column Specifications Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* What the Service Includes */}
              <div className="p-6 rounded-xl bg-black border border-zinc-800/80 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Check className="w-4 h-4" />
                    <span>What It Includes</span>
                  </div>
                  <h5 className="font-serif text-lg font-bold text-white mb-4">
                    Deliverables & Scope
                  </h5>
                  <ul className="space-y-3">
                    {currentService.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                        <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Who the Service is Suitable For */}
              <div className="p-6 rounded-xl bg-black border border-zinc-800/80 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
                    <UserCheck className="w-4 h-4" />
                    <span>Who It Is For</span>
                  </div>
                  <h5 className="font-serif text-lg font-bold text-white mb-4">
                    Ideal Author Profiles
                  </h5>
                  <ul className="space-y-3">
                    {currentService.suitableFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                        <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits of the Service */}
              <div className="p-6 rounded-xl bg-black border border-zinc-800/80 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Award className="w-4 h-4" />
                    <span>Key Benefits</span>
                  </div>
                  <h5 className="font-serif text-lg font-bold text-white mb-4">
                    Why It Matters
                  </h5>
                  <ul className="space-y-3">
                    {currentService.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                        <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Action Buttons: Contact Me & Order on Fiverr */}
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#181818] via-[#1F1F1F] to-[#181818] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h5 className="font-serif text-xl font-bold text-white mb-1">
                  Ready to book {currentService.title}?
                </h5>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Choose your preferred booking channel: secure checkout via Fiverr or direct custom inquiry.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href={currentService.fiverrGigUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-white rounded-md transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
                >
                  <span>Order on Fiverr</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onContactService(currentService.title)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37]/15 rounded-md transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Contact Me Directly</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
