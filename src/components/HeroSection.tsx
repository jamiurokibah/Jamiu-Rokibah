import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { BRAND_CONFIG } from '../data/brand.ts';
import { IMAGES } from '../assets/images.ts';
import { ArrowRight, Sparkles, BookOpen, CheckCircle2, Star } from 'lucide-react';

interface HeroSectionProps {
  onExploreServices: () => void;
  onWorkWithMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onWorkWithMe,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 bg-gradient-to-b from-black via-[#0A0A0A] to-black overflow-hidden"
    >
      {/* Subtle luxury ambient gold glow in the background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#C5A253]/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Prominent RashReader Brand Emblem */}
            <div className="flex items-center gap-3">
              <BrandLogo size="md" showText={true} />
            </div>

            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Author Services & Publishing</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Your Story Deserves to Be{' '}
              <span className="text-gold-gradient italic font-normal">
                Read, Refined
              </span>{' '}
              & Remembered.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-light">
              Helping authors transform their manuscripts into polished, professional,
              and beautifully presented books through expert beta reading, book editing,
              cover design, and book promotion.
            </p>

            {/* Two Prominent Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-black bg-gradient-to-r from-[#FFF0CA] via-[#D4AF37] to-[#C5A253] rounded-md hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore My Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onWorkWithMe}
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium tracking-wide uppercase text-white bg-transparent border border-[#D4AF37]/60 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Work With Me</span>
              </button>
            </div>

            {/* Trust Micro-Row */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Chicago Manual of Style Rigor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>KDP & IngramSpark Print-Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>Fast & Reliable Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Book Mockups Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative group rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-zinc-950">
              
              {/* Subtle gold accent frame */}
              <div className="absolute inset-0 border border-[#D4AF37]/20 pointer-events-none rounded-xl z-20 m-1" />
              
              <img
                src={IMAGES.heroBooks}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/hero_books_showcase.jpg';
                }}
                alt="RashReader Premium Hardcover Book Presentation with gold foil typography and interior typesetting"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] lg:h-[500px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />

              {/* Gradient scrim for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Floating aesthetic caption plate */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/85 backdrop-blur-md rounded-lg border border-[#D4AF37]/30 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                    The Author Craft Standard
                  </div>
                  <div className="font-serif text-sm font-semibold text-white">
                    Publishing-Ready Presentation & Critique
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-1 text-[#D4AF37]">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column Feature Strip below hero split */}
        <div className="mt-16 pt-10 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-lg bg-zinc-950/40 border border-zinc-900 hover:border-[#D4AF37]/40 transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              01 · Assessment
            </span>
            <div className="font-serif text-lg font-bold text-white mb-1">
              Beta Reading
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Objective reader insights on plot pacing, character arcs, and reader engagement.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-950/40 border border-zinc-900 hover:border-[#D4AF37]/40 transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              02 · Precision
            </span>
            <div className="font-serif text-lg font-bold text-white mb-1">
              Book Editing
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Line-by-line syntax polish, grammar perfection, and consistent narrative tone.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-950/40 border border-zinc-900 hover:border-[#D4AF37]/40 transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              03 · Visual Art
            </span>
            <div className="font-serif text-lg font-bold text-white mb-1">
              Cover Design
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              High-converting Amazon KDP & print-ready jackets that demand attention.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-950/40 border border-zinc-900 hover:border-[#D4AF37]/40 transition-colors">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              04 · Reach
            </span>
            <div className="font-serif text-lg font-bold text-white mb-1">
              Book Promotion
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Launch kits, #BookTok teasers, and eye-catching social marketing assets.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
