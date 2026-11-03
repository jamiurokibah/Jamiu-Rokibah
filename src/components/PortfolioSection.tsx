import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolio.ts';
import { Eye, ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectItem: (item: PortfolioItem) => void;
  onStartProject: () => void;
  isStandalonePage?: boolean;
}

type CategoryFilter =
  | 'All Projects'
  | 'Beta Reading'
  | 'Book Editing'
  | 'Book Cover Design'
  | 'Book Promotion';

const CATEGORIES: CategoryFilter[] = [
  'All Projects',
  'Beta Reading',
  'Book Editing',
  'Book Cover Design',
  'Book Promotion',
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectItem,
  onStartProject,
  isStandalonePage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All Projects');

  const filteredItems =
    selectedCategory === 'All Projects'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className={`py-24 bg-black relative ${isStandalonePage ? 'pt-32 min-h-screen' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-900 pb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
              Curated Sample Works & Case Studies
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Publishing Portfolio
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className="text-zinc-400 text-sm leading-relaxed font-light mb-2">
              Explore sample book covers, before-and-after line editing excerpts, beta reader reports, and promotional campaign assets.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-[#C5A253] font-mono">
              <span>✦ All items currently showcase sample formats ready for live client works</span>
            </div>
          </div>
        </div>

        {/* Category Filters (Segmented tabs conforming to frontend-design rule 0.A) */}
        <div className="flex items-center gap-2 p-1.5 bg-[#121212] border border-zinc-800 rounded-xl overflow-x-auto mb-12 max-w-full">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FFF0CA] via-[#D4AF37] to-[#C5A253] text-black font-semibold shadow-[0_2px_10px_rgba(212,175,55,0.3)]'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group cursor-pointer rounded-xl bg-[#141414] border border-zinc-800/80 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(212,175,55,0.15)]"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                  {/* Sample Label Tag (Unboxed, clean) */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 backdrop-blur-md border border-[#D4AF37]/50 rounded text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                    {item.sampleLabel}
                  </div>

                  {/* Zoom inspection overlay hint */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 bg-black/90 border border-[#D4AF37] rounded-full text-xs font-medium text-white shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Click to View Full Project</span>
                    </div>
                  </div>
                </div>

                {/* Metadata & Description */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                    <span className="text-[#D4AF37]">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.genre}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FFF2D6] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* If item has before/after, show quick teaser badge */}
                  {item.beforeAfter && (
                    <div className="pt-2 flex items-center gap-1.5 text-xs text-[#C5A253]">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Includes interactive Before & After comparison</span>
                    </div>
                  )}

                  {/* If item has sample report, show quick teaser */}
                  {item.sampleReportSummary && (
                    <div className="pt-2 flex items-center gap-1.5 text-xs text-[#C5A253]">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Includes sample 14-page report scorecard</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 pb-6 pt-3 border-t border-zinc-800/40 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono">SAMPLE DEMO</span>
                <span className="font-medium text-[#D4AF37] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Inspect Details</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Call to Action per prompt */}
        <div className="mt-24 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#121212] border border-[#D4AF37]/40 shadow-[0_10px_40px_rgba(212,175,55,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Create Something Extraordinary</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
              Ready to Take Your Book to the Next Level?
            </h3>

            <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed mb-8">
              Let's work together to make your book better, more beautiful, and more discoverable.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onStartProject}
                className="px-8 py-3.5 text-sm font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-[#FFF0CA] via-[#D4AF37] to-[#C5A253] rounded-md hover:brightness-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://www.fiverr.com/s/2pQQg8N"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm font-medium text-white hover:text-[#D4AF37] border border-zinc-700 hover:border-[#D4AF37] rounded-md transition-colors"
              >
                Hire on Fiverr Directly
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
