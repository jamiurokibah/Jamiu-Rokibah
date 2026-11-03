import React from 'react';
import { SERVICES, ServiceItem } from '../data/services.ts';
import { ArrowUpRight, Check, ExternalLink } from 'lucide-react';

interface ServicesOverviewSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onExploreDetailed: (serviceId?: string) => void;
}

export const ServicesOverviewSection: React.FC<ServicesOverviewSectionProps> = ({
  onSelectService,
  onExploreDetailed,
}) => {
  return (
    <section id="services-overview" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-zinc-900 pb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
              Comprehensive Author Solutions
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Four Pillars of Publishing Success
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm leading-relaxed font-light">
            Each service is meticulously calibrated to bring out the absolute best in your writing, your packaging, and your readership.
          </p>
        </div>

        {/* 4 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-xl bg-[#121212] border border-zinc-800/80 overflow-hidden transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_12px_40px_rgba(212,175,55,0.18)] flex flex-col justify-between"
            >
              {/* Gold Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#FFF2D6] to-[#C5A253] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

              <div>
                {/* Service Image Container with zoom & gold scrim */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={service.image}
                    alt={`${service.title} - ${service.subtitle}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

                  {/* Clean Editorial Number Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 rounded text-xs font-mono font-medium text-[#D4AF37]">
                    SERVICE {service.number}
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FFF2D6] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#C5A253] tracking-wide font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    {service.shortDescription}
                  </p>

                  {/* Key Service Highlights */}
                  <div className="pt-2 border-t border-zinc-800/60 space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 flex items-center justify-between gap-4 border-t border-zinc-800/40">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-white group-hover:translate-x-1 transition-all duration-200 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={service.fiverrGigUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-black bg-[#D4AF37] rounded hover:bg-[#FFF2D6] transition-colors"
                >
                  <span>Order on Fiverr</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Dedicated Services Page */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-[#161616] via-[#1A1A1A] to-[#161616] border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
              Need a Custom Multi-Service Package?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Combine Beta Reading, Full Line Editing, Cover Art, and Launch Promo for comprehensive publication support.
            </p>
          </div>
          <button
            onClick={() => onExploreDetailed()}
            className="shrink-0 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-white rounded-md transition-colors whitespace-nowrap cursor-pointer"
          >
            View Full Service Breakdown
          </button>
        </div>

      </div>
    </section>
  );
};
