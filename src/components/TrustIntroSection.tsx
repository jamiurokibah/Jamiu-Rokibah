import React from 'react';
import { Feather, Compass, Award, BookCheck } from 'lucide-react';

export const TrustIntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-[#0D0D0D] to-black border-y border-zinc-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle decorative emblem tick */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-[#151515] text-[#D4AF37] mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <Feather className="w-5 h-5" />
        </div>

        {/* Section Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
          Bringing Great Stories to Life.
        </h2>

        {/* Core Philosophy Paragraph */}
        <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mx-auto mb-12">
          At <span className="text-[#D4AF37] font-normal">RashReader</span>, I believe every great book
          deserves the right attention, presentation, and audience. I help authors improve their manuscripts,
          enhance their book presentation, and connect their stories with readers through creative publishing
          services.
        </p>

        {/* 3 Pillars of Literary Trust */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6">
          
          <div className="p-6 rounded-xl bg-[#141414] border border-zinc-800/80 hover:border-[#D4AF37]/50 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-white mb-2">
              Artistic Respect
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Your vision, rhythm, and genre tone remain sovereign. Every edit and suggestion is designed to amplify your distinctive authorial voice, never overwrite it.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141414] border border-zinc-800/80 hover:border-[#D4AF37]/50 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
              <BookCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-white mb-2">
              Reader Psychology
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              We analyze your book through the lens of modern discerning readers—pinpointing exactly where attention peaks, where curiosity wavers, and what keeps pages turning.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#141414] border border-zinc-800/80 hover:border-[#D4AF37]/50 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-white mb-2">
              Publishing Standards
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              From crisp typography and spine bleed measurements to grammar rigor and marketing assets, your work meets the high benchmarks of traditional publishing.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
