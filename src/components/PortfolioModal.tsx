import React, { useState } from 'react';
import { PortfolioItem } from '../data/portfolio.ts';
import { X, Check, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquire: (serviceCategory: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onInquire,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparison' | 'report'>('overview');

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#121212] border border-[#D4AF37]/50 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-10">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#181818] border-b border-zinc-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
              {item.sampleLabel}
            </span>
            <span className="text-zinc-500">·</span>
            <span className="text-xs text-zinc-400 font-medium">{item.genre}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Header & Title */}
          <div>
            <div className="text-xs text-[#D4AF37] font-semibold uppercase tracking-widest mb-1">
              {item.category}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              {item.summary}
            </p>
          </div>

          {/* Large Image Showcase */}
          <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-black">
            <img
              src={item.image}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/service_cover_design.jpg';
              }}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[420px] object-cover object-center"
            />
            <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 rounded text-[11px] font-mono text-[#D4AF37]">
              High-Resolution Preview
            </div>
          </div>

          {/* Interactive Before & After Editing Example (if present) */}
          {item.beforeAfter && (
            <div className="p-6 rounded-xl bg-black border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span>Before & After Editorial Comparison</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  CHICAGO MANUAL OF STYLE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-zinc-950 border border-red-950/40">
                  <div className="text-xs font-mono uppercase tracking-wider text-red-400 mb-2 font-semibold">
                    Original Draft (Raw Text)
                  </div>
                  <p className="text-xs font-serif text-zinc-400 leading-relaxed italic">
                    "{item.beforeAfter.original}"
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#141414] border border-[#D4AF37]/40">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] mb-2 font-semibold">
                    Edited & Polished (RashReader)
                  </div>
                  <p className="text-xs font-serif text-white leading-relaxed font-medium">
                    "{item.beforeAfter.revised}"
                  </p>
                </div>
              </div>

              {item.beforeAfter.notes && (
                <div className="pt-2 space-y-1.5">
                  <span className="text-xs font-medium text-zinc-400 block mb-1">
                    Editorial Refinements Made:
                  </span>
                  {item.beforeAfter.notes.map((note, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-[#D4AF37]">✦</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Sample Beta Reader Report Card (if present) */}
          {item.sampleReportSummary && (
            <div className="p-6 rounded-xl bg-black border border-[#D4AF37]/40 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Layers className="w-4 h-4 text-[#D4AF37]" />
                  <span>Sample Reader Feedback Metrics</span>
                </div>
                <span className="text-xs font-mono text-[#D4AF37]">
                  SAMPLE CRITIQUE
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-zinc-950 rounded border border-zinc-800">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                    Plot Logic
                  </div>
                  <div className="font-mono text-base font-bold text-[#D4AF37]">
                    {item.sampleReportSummary.plotScore}
                  </div>
                </div>
                <div className="p-3 bg-zinc-950 rounded border border-zinc-800">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                    Pacing Balance
                  </div>
                  <div className="font-mono text-base font-bold text-[#D4AF37]">
                    {item.sampleReportSummary.pacingScore}
                  </div>
                </div>
                <div className="p-3 bg-zinc-950 rounded border border-zinc-800">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                    Character Arc
                  </div>
                  <div className="font-mono text-base font-bold text-[#D4AF37]">
                    {item.sampleReportSummary.characterScore}
                  </div>
                </div>
                <div className="p-3 bg-zinc-950 rounded border border-zinc-800">
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                    Readiness
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">
                    {item.sampleReportSummary.marketReadiness}
                  </div>
                </div>
              </div>

              <div className="p-3 rounded bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300">
                <span className="text-[#D4AF37] font-semibold">Strategic Feedback Note: </span>
                {item.sampleReportSummary.keyRecommendation}
              </div>
            </div>
          )}

          {/* Project Deliverables List */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
              Standard Project Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.deliverables.map((del, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-300"
                >
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#161616] border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400 text-center sm:text-left">
            Have a manuscript in the <span className="text-white font-medium">{item.genre}</span> genre?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-700 rounded-md cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(item.category);
              }}
              className="w-1/2 sm:w-auto px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-white rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Order This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
