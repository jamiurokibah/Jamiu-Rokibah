import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  onClick,
}) => {
  const emblemSizes = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
    xl: 'text-sm tracking-[0.35em]',
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3.5 group select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Circular Gold Emblem with Letter R */}
      <div className={`relative shrink-0 ${emblemSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic Gold Gradient */}
            <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D6" />
              <stop offset="25%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F9E29B" />
              <stop offset="75%" stopColor="#C5A253" />
              <stop offset="100%" stopColor="#967418" />
            </linearGradient>

            {/* Dark Charcoal Background */}
            <radialGradient id="darkBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E1E1E" />
              <stop offset="85%" stopColor="#0E0E0E" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>

            {/* Outer Ring Gold Glow */}
            <linearGradient id="ringGold" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#FFF2D6" />
              <stop offset="100%" stopColor="#C5A253" />
            </linearGradient>
          </defs>

          {/* Dark Disc Base */}
          <circle cx="50" cy="50" r="48" fill="url(#darkBg)" />

          {/* Outer Gold Border Ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="url(#ringGold)"
            strokeWidth="2.5"
            strokeDasharray="none"
          />

          {/* Inner Delicate Beaded/Dotted Filigree Ring */}
          <circle
            cx="50"
            cy="50"
            r="41"
            stroke="url(#goldMetallic)"
            strokeWidth="0.8"
            strokeDasharray="1.5 2.5"
            opacity="0.85"
          />

          {/* Inner Solid Circular Framing Ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="url(#goldMetallic)"
            strokeWidth="1.2"
            opacity="0.95"
          />

          {/* Subtle Starburst Compass Markers at Cardinal Points */}
          <polygon points="50,15 51.5,19 50,18 48.5,19" fill="url(#goldMetallic)" />
          <polygon points="50,85 51.5,81 50,82 48.5,81" fill="url(#goldMetallic)" />
          <polygon points="15,50 19,51.5 18,50 19,48.5" fill="url(#goldMetallic)" />
          <polygon points="85,50 81,51.5 82,50 81,48.5" fill="url(#goldMetallic)" />

          {/* The Distinctive Luxury Gold Letter "R" */}
          <g transform="translate(0, 0)">
            <text
              x="50"
              y="68"
              textAnchor="middle"
              fontFamily="'Cormorant Garamond', 'Cinzel', serif"
              fontSize="52"
              fontWeight="700"
              fontStyle="normal"
              letterSpacing="0"
              fill="url(#goldMetallic)"
              className="select-none filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
            >
              R
            </text>
          </g>
        </svg>
      </div>

      {/* Typography Brand Lockup */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif font-bold text-white tracking-tight ${titleSizes[size]} transition-colors group-hover:text-[#FFF2D6]`}
            >
              Rash<span className="text-[#D4AF37]">Reader</span>
            </span>
          </div>
          <span
            className={`font-sans font-medium uppercase text-[#C5A253] ${subtitleSizes[size]} leading-tight`}
          >
            Author Services
          </span>
        </div>
      )}
    </div>
  );
};
