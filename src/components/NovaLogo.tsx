import React from 'react';

interface NovaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  animated?: boolean;
}

export const NovaLogo: React.FC<NovaLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  animated = true,
}) => {
  const sizeMap = {
    sm: { w: 38, h: 38, textClass: 'text-sm' },
    md: { w: 54, h: 54, textClass: 'text-base' },
    lg: { w: 80, h: 80, textClass: 'text-xl' },
    xl: { w: 120, h: 120, textClass: 'text-2xl' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-tech shield logo SVG */}
      <div className="relative flex items-center justify-center">
        {animated && (
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
        )}
        <svg
          width={currentSize.w}
          height={currentSize.h}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]"
        >
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="innerCircuit" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>

          {/* Outer Hexagon/Shield Frame */}
          <polygon
            points="50,6 88,24 88,64 50,94 12,64 12,24"
            fill="#050d1a"
            stroke="url(#glowGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Cyber Shield Geometry */}
          <polygon
            points="50,14 80,29 80,60 50,84 20,60 20,29"
            fill="url(#shieldGrad)"
            fillOpacity="0.35"
            stroke="#0ea5e9"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />

          {/* Holographic Lock and 'N' Symbol */}
          {/* Cyber Lock Shackle */}
          <path
            d="M38 46 V36 C38 29.37 43.37 24 50 24 C56.63 24 62 29.37 62 36 V46"
            stroke="url(#innerCircuit)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Cyber Lock Body with Stylized 'N' */}
          <rect
            x="32"
            y="44"
            width="36"
            height="30"
            rx="5"
            fill="#031124"
            stroke="url(#glowGrad)"
            strokeWidth="2.5"
          />

          {/* Stylized 'N' letter with futuristic slant */}
          <path
            d="M40 68 V50 L60 68 V50"
            stroke="#38bdf8"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Core Energy Keyhole dot */}
          <circle cx="50" cy="59" r="2.5" fill="#a5f3fc" />

          {/* Tech Circuit Dots */}
          <circle cx="20" cy="29" r="2" fill="#38bdf8" />
          <circle cx="80" cy="29" r="2" fill="#38bdf8" />
          <circle cx="50" cy="6" r="2.5" fill="#22d3ee" />
          <circle cx="50" cy="94" r="2.5" fill="#22d3ee" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-right">
        <div className="flex items-center gap-2">
          <span className="font-english tracking-widest font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-lg md:text-xl">
            NOVA
          </span>
          <span className="font-english tracking-wider font-semibold text-cyan-400 text-xs md:text-sm px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
            SECURITY
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-[0.25em] text-slate-400 font-english font-medium uppercase">
            LEARN • BUILD • SECURE
          </span>
        )}
      </div>
    </div>
  );
};
