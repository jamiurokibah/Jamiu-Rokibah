import React from 'react';
import { TESTIMONIALS_CONFIG, TestimonialItem } from '../data/testimonials.ts';
import { Star, Quote, Info, ExternalLink } from 'lucide-react';

interface TestimonialsSectionProps {
  isStandalonePage?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  isStandalonePage = false,
}) => {
  return (
    <section
      id="testimonials"
      className={`py-24 bg-[#0A0A0A] border-t border-zinc-900 relative ${
        isStandalonePage ? 'pt-32 min-h-screen' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            Author Voices & Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            {TESTIMONIALS_CONFIG.sectionTitle}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6">
            {TESTIMONIALS_CONFIG.sectionSubtitle}
          </p>

          {/* Transparent Notice Banner per Prompt Instructions */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/90 border border-zinc-700/80 rounded-lg text-xs text-zinc-300 max-w-2xl text-left">
            <Info className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              <strong>Transparency Notice:</strong> The review cards below are structured placeholders illustrating client layout & typography. They will be seamlessly updated with your genuine author reviews upon submission.
            </span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_CONFIG.items.map((t: TestimonialItem) => (
            <div
              key={t.id}
              className="relative p-8 rounded-2xl bg-[#121212] border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Top Row: Service Received & Star Rating */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#D4AF37] font-semibold font-mono">
                      SERVICE:
                    </span>
                    <span className="text-zinc-300 font-medium">
                      {t.serviceReceived}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#D4AF37]/20 absolute -top-3 -left-2 -z-0 pointer-events-none" />
                  <p className="font-serif text-base sm:text-lg text-zinc-200 leading-relaxed italic relative z-10 font-normal">
                    {t.reviewExcerpt}
                  </p>
                </div>
              </div>

              {/* Author Identity & Photograph / Avatar Placeholder */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  {/* Photo / Avatar Placeholder */}
                  <div className="w-11 h-11 rounded-full bg-black border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-sm shadow-inner shrink-0">
                    {t.avatarPlaceholder}
                  </div>

                  <div>
                    <div className="font-serif font-bold text-white text-base">
                      {t.authorName}
                    </div>
                    <div className="text-xs text-zinc-400 font-light">
                      {t.authorRole} · <span className="text-zinc-300">{t.bookTitle}</span>
                    </div>
                  </div>
                </div>

                {/* Placeholder Indicator Pill */}
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                  Placeholder
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Author Callout for Reviews */}
        <div className="mt-16 text-center">
          <p className="text-xs text-zinc-500">
            Have you completed a beta read or editing pass with RashReader?{' '}
            <a
              href="mailto:rashreader677@gmail.com?subject=Author%20Review%20for%20RashReader"
              className="text-[#D4AF37] hover:underline"
            >
              Send your testimonial to be featured on this page
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
