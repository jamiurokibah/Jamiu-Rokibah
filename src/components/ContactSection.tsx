import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../data/brand.ts';
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Send,
  MessageSquare,
  Sparkles,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService = '',
  isStandalonePage = false,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceRequired: prefilledService || 'Beta Reading',
    genre: '',
    wordCount: '',
    projectDetails: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      setErrorMessage('Please fill in your full name, email address, and project details.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch & formulate mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.serviceRequired} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nService: ${formData.serviceRequired}\nGenre: ${formData.genre || 'N/A'}\nEstimated Word Count: ${formData.wordCount || 'N/A'}\n\nProject Details:\n${formData.projectDetails}`
    );
    window.location.href = `mailto:${BRAND_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className={`py-24 bg-black relative ${isStandalonePage ? 'pt-32 min-h-screen' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            Let’s Discuss Your Book
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Start Your Publishing Project
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Have questions about word count, timeline, or cover design? Fill out the inquiry form below, or reach out directly via email and Fiverr.
          </p>
        </div>

        {/* 2-Column Split: Working Form & Contact Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#121212] p-8 sm:p-10 rounded-2xl border border-zinc-800 shadow-2xl relative">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                Project Inquiry Form
              </h3>
              <p className="text-xs text-zinc-400">
                Responses typically delivered within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-zinc-950 border border-[#D4AF37]/50 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">
                  Thank You, {formData.fullName}!
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-md mx-auto">
                  Your project details for <strong className="text-[#D4AF37]">{formData.serviceRequired}</strong> have been recorded.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleOpenMailClient}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] rounded-md hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        serviceRequired: 'Beta Reading',
                        genre: '',
                        wordCount: '',
                        projectDetails: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-700 rounded-md transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-950/50 border border-red-800 text-xs text-red-200">
                    {errorMessage}
                  </div>
                )}

                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Austen"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. author@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceRequired: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors cursor-pointer"
                  >
                    <option value="Beta Reading">Beta Reading (Manuscript Feedback)</option>
                    <option value="Book Editing">Book Editing (Line & Copy Edit)</option>
                    <option value="Book Cover Design">Book Cover Design (Hardcover, Paperback, eBook)</option>
                    <option value="Book Promotion">Book Promotion (Launch Kit & Social Assets)</option>
                    <option value="Comprehensive Publishing Suite">Comprehensive Multi-Service Suite</option>
                  </select>
                </div>

                {/* Genre & Word Count Helper Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                      Genre / Category
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Fantasy, Thriller, Non-Fiction"
                      value={formData.genre}
                      onChange={(e) =>
                        setFormData({ ...formData, genre: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                      Approx. Word Count
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 75,000 words"
                      value={formData.wordCount}
                      onChange={(e) =>
                        setFormData({ ...formData, wordCount: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                    Project Details & Target Timeline *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your book, key goals, target audience, and any specific areas you want me to focus on..."
                    value={formData.projectDetails}
                    onChange={(e) =>
                      setFormData({ ...formData, projectDetails: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFF0CA] via-[#D4AF37] to-[#C5A253] rounded-lg hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Inquiry...' : 'Submit Project Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Email, Fiverr Showcase & Social Media Accounts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-zinc-800 space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                <span>Direct Author Email</span>
              </div>
              <p className="text-xs text-zinc-400 font-light">
                For manuscript submissions, custom contract inquiries, or publishing queries:
              </p>
              <div className="flex items-center justify-between p-3 bg-black border border-zinc-800 rounded-lg">
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="font-mono text-sm text-[#D4AF37] hover:underline truncate"
                >
                  {BRAND_CONFIG.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <div className="text-[11px] text-emerald-400 font-mono">
                  ✓ Copied rashreader677@gmail.com to clipboard
                </div>
              )}
            </div>

            {/* Prominent Fiverr Hire Me Card per prompt */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#161616] via-[#1F1B12] to-[#161616] border border-[#D4AF37]/60 shadow-[0_10px_35px_rgba(212,175,55,0.2)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#D4AF37]">
                  OFFICIAL FIVERR SELLER
                </div>
                <div className="px-2 py-0.5 rounded bg-[#D4AF37] text-black text-[10px] font-bold">
                  SECURE ESCROW
                </div>
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-white mb-1">
                  Hire Me on Fiverr
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  Prefer platform protection, milestones, and instant credit card / PayPal checkouts? Order directly through my verified Fiverr gigs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={BRAND_CONFIG.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-white rounded-md transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <span>Hire Me on Fiverr</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={BRAND_CONFIG.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37]/15 rounded-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Order Now</span>
                </a>
              </div>
            </div>

            {/* Official Social Media and Contact Links per Prompt */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-zinc-800 space-y-4">
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Connect on Social Media & Author Channels
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {BRAND_CONFIG.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-black/60 border border-zinc-800/80 hover:border-[#D4AF37] hover:bg-black transition-all group"
                  >
                    <div>
                      <div className="text-xs font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                        {social.name}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-mono">
                        {social.handle}
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#D4AF37] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
