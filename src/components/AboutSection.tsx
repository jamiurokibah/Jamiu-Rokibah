import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { BookOpen, Check, Heart, Feather, Compass, Award } from 'lucide-react';

interface AboutSectionProps {
  onWorkWithMe: () => void;
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onWorkWithMe,
  isStandalonePage = false,
}) => {
  return (
    <section
      id="about"
      className={`py-24 bg-[#080808] border-t border-zinc-900 relative ${
        isStandalonePage ? 'pt-32 min-h-screen' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
            The Mind Behind The Brand
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Helping Authors Bring Their Ideas to Life.
          </h2>
        </div>

        {/* 2-Column Split: Editorial Bio & Profile Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Personal & Professional Narrative */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 font-light leading-relaxed text-base">
            
            <p className="text-lg text-white font-serif italic border-l-2 border-[#D4AF37] pl-4">
              “Every manuscript carries the author's soul, sweat, and sleepless nights. My mission is to treat that manuscript with the literary reverence and professional sharpness it deserves.”
            </p>

            <p>
              Welcome to <span className="text-[#D4AF37] font-medium">RashReader</span>. I am an editorial
              consultant, beta reader, book cover designer, and author promotion strategist with an enduring passion
              for the written word. Books have the power to transform minds, invoke deep empathy, and shape cultures—but
              turning a raw concept into a captivating, bookstore-quality work requires careful craft and deliberate presentation.
            </p>

            <p>
              Over the years, I have worked alongside independent authors, emerging novelists, non-fiction thinkers, and
              self-publishers across genres—from sweeping fantasy epics and psychological thrillers to evocative memoirs
              and entrepreneurial guides.
            </p>

            {/* Core 4 Services Emphasis */}
            <div className="pt-4 space-y-3">
              <h3 className="font-serif text-xl font-bold text-white">
                My Four Pillars of Author Support:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#121212] border border-zinc-800/80">
                  <div className="font-serif font-bold text-white text-base mb-1 flex items-center gap-2">
                    <span className="text-[#D4AF37]">01.</span> Beta Reading
                  </div>
                  <p className="text-xs text-zinc-400">
                    Thorough, reader-first feedback on plot pacing, character development, and narrative tension before your book hits the market.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#121212] border border-zinc-800/80">
                  <div className="font-serif font-bold text-white text-base mb-1 flex items-center gap-2">
                    <span className="text-[#D4AF37]">02.</span> Book Editing
                  </div>
                  <p className="text-xs text-zinc-400">
                    Surgical line and copy editing that sharpens syntax, resolves grammar, and improves clarity while keeping your voice untouched.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#121212] border border-zinc-800/80">
                  <div className="font-serif font-bold text-white text-base mb-1 flex items-center gap-2">
                    <span className="text-[#D4AF37]">03.</span> Book Cover Design
                  </div>
                  <p className="text-xs text-zinc-400">
                    Bespoke, commercial-grade book covers and typography engineered to catch readers' attention instantly on retail shelves and screens.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#121212] border border-zinc-800/80">
                  <div className="font-serif font-bold text-white text-base mb-1 flex items-center gap-2">
                    <span className="text-[#D4AF37]">04.</span> Book Promotion
                  </div>
                  <p className="text-xs text-zinc-400">
                    Strategic launch campaigns, BookTok / Bookstagram visual suites, and reader outreach materials that build authentic buzz.
                  </p>
                </div>
              </div>
            </div>

            <p className="pt-2">
              Whether you are holding a rough first draft or preparing for your official launch on Amazon KDP and IngramSpark,
              you will find a transparent, encouraging, and meticulous publishing partner in me. Let’s bring your vision into the world with pride.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onWorkWithMe}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-white rounded-md transition-colors cursor-pointer"
              >
                Let’s Collaborate
              </button>
              <a
                href="https://www.fiverr.com/s/2pQQg8N"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-700 rounded-md transition-colors"
              >
                View Fiverr Profile
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image Placeholder & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-[#121212] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              {/* Profile Image (Generated high-res editorial portrait) */}
              <div className="relative aspect-square w-full bg-zinc-950 overflow-hidden">
                <img
                  src="/src/assets/images/profile_author_editor_1793703023789.jpg"
                  alt="RashReader - Literary Consultant & Publishing Strategist"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Profile Placeholder Notice Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/85 backdrop-blur-md border border-[#D4AF37]/50 rounded text-[11px] font-mono text-[#D4AF37]">
                  Profile Photo Placeholder
                </div>
              </div>

              {/* Caption & Identity Lockup */}
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-white">
                      RashReader
                    </h4>
                    <p className="text-xs text-[#D4AF37] tracking-wider uppercase font-medium">
                      Author Services & Publishing Specialist
                    </p>
                  </div>
                  <BrandLogo size="sm" showText={false} />
                </div>

                <p className="text-xs text-zinc-400 font-light pt-2 border-t border-zinc-800">
                  (You can replace this portrait with your own photograph at any time in <code className="text-[#C5A253]">src/assets/images/</code>)
                </p>

                {/* Contact Email Pill */}
                <div className="pt-3 flex items-center justify-between text-xs text-zinc-300">
                  <span className="text-zinc-500">Direct Inquiries:</span>
                  <a
                    href="mailto:rashreader677@gmail.com"
                    className="text-[#D4AF37] hover:underline font-mono"
                  >
                    rashreader677@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="p-6 rounded-xl bg-[#141414] border border-zinc-800/80 space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                Client Commitments
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>100% Confidentiality & Non-Disclosure (NDA) Protected</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Chicago Manual of Style (17th ed.) Editorial Standard</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Transparent communication throughout your project</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
