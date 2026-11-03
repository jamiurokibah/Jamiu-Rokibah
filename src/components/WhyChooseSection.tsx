import React from 'react';
import {
  Glasses,
  Search,
  Sparkles,
  MessageSquareHeart,
  ShieldCheck,
  Clock,
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const pillars = [
    {
      icon: Glasses,
      title: 'Reader-Focused Feedback',
      description:
        'Feedback rooted in genuine reader psychology. We assess emotional highs, plot consistency, pacing momentum, and character arcs to ensure your audience stays captivated from the prologue to the final word.',
    },
    {
      icon: Search,
      title: 'Attention to Detail',
      description:
        'Every sentence is evaluated for rhythm, clarity, and grammatical precision. We catch subtleties—from comma splices and world-building discrepancies to awkward dialogue tags—that others overlook.',
    },
    {
      icon: Sparkles,
      title: 'Creative & Professional Presentation',
      description:
        'Publishing is a visual art as well as a literary one. Our custom book covers, interior formatting guidance, and marketing assets adhere strictly to modern high-end commercial publishing standards.',
    },
    {
      icon: MessageSquareHeart,
      title: 'Author-Focused Communication',
      description:
        'Collaborative, respectful, and transparent guidance. We understand how much heart goes into writing a book, so our feedback is always constructive, actionable, and encouraging without condescension.',
    },
    {
      icon: ShieldCheck,
      title: 'Commitment to Quality',
      description:
        'We never rush or deliver half-measures. Every project receives two meticulous editorial passes or comprehensive design iterations until your manuscript meets publishing-house rigor.',
    },
    {
      icon: Clock,
      title: 'Reliable Project Delivery',
      description:
        'Clear turnaround timelines and punctual execution. You can confidently plan your querying window, ARC distribution, or Amazon launch date knowing your deliverables will arrive on schedule.',
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            The RashReader Difference
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Why Authors Choose RashReader
          </h2>
          <p className="text-zinc-400 text-base font-light leading-relaxed">
            Writing a book is a monumental journey. You deserve an editorial and design partner who cares about your manuscript’s triumph as deeply as you do.
          </p>
        </div>

        {/* 6 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-xl bg-[#121212] border border-zinc-800/80 hover:border-[#D4AF37]/50 hover:bg-[#161616] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Clean Icon Badge with Gold Accents */}
                  <div className="w-12 h-12 rounded-lg bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:border-[#D4AF37] group-hover:scale-105 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#FFF2D6] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                    VERIFIED STANDARD
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
