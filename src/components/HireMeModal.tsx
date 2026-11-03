import React, { useState } from 'react';
import { BRAND_CONFIG } from '../data/brand.ts';
import { SERVICES } from '../data/services.ts';
import { X, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceAndContact: (serviceTitle: string) => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({
  isOpen,
  onClose,
  onSelectServiceAndContact,
}) => {
  const [selectedService, setSelectedService] = useState('Beta Reading');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#121212] border border-[#D4AF37]/50 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#181818] border-b border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37]">
              Start Your Collaboration
            </span>
            <h3 className="font-serif text-xl font-bold text-white">
              Work With RashReader
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            Choose the publishing service you need help with. You can book immediately through Fiverr with escrow protection or submit a direct custom inquiry.
          </p>

          {/* Service Radio Grid */}
          <div className="space-y-2.5">
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold">
              Select Desired Service
            </label>
            {SERVICES.map((s) => {
              const isSelected = selectedService === s.title;
              return (
                <div
                  key={s.id}
                  onClick={() => setSelectedService(s.title)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#1a1a1a] border-[#D4AF37] ring-1 ring-[#D4AF37]'
                      : 'bg-[#141414] border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-[#D4AF37] bg-[#D4AF37]'
                          : 'border-zinc-600 bg-transparent'
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold text-white block">
                        {s.title}
                      </span>
                      <span className="text-[11px] text-zinc-400">
                        {s.subtitle}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {s.turnaroundTime.split('(')[0]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Dual Action Paths */}
          <div className="pt-2 space-y-3">
            <a
              href={BRAND_CONFIG.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFF0CA] via-[#D4AF37] to-[#C5A253] rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Order on Fiverr (Instant Escrow Booking)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                onClose();
                onSelectServiceAndContact(selectedService);
              }}
              className="w-full py-3.5 text-xs font-medium text-white border border-zinc-700 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send Direct Inquiry for {selectedService}</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
