import React from 'react';

// Elegant Gold & Lavender Floral Corner Ornament
export const FloralCorner: React.FC<{
  className?: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ className = '', position }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-y-[-1]';
      case 'bottom-right':
        return 'scale-x-[-1] scale-y-[-1]';
      default:
        return '';
    }
  };

  return (
    <div
      className={`pointer-events-none select-none ${getTransform()} ${className}`}
      aria-hidden="true"
    >
      <svg
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 sm:w-24 sm:h-24 opacity-80"
      >
        <path
          d="M6 6 C40 6, 70 20, 85 55 C95 80, 104 104, 104 104"
          stroke="#C6A46C"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M6 6 C20 40, 35 70, 55 85 C80 95, 104 104, 104 104"
          stroke="#C6A46C"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="2 3"
        />
        <path
          d="M32 18 C38 12, 48 14, 50 24 C44 26, 36 24, 32 18 Z"
          fill="#B8A4D8"
          fillOpacity="0.45"
          stroke="#9A7B42"
          strokeWidth="0.75"
        />
        <path
          d="M18 32 C12 38, 14 48, 24 50 C26 44, 24 36, 18 32 Z"
          fill="#B8A4D8"
          fillOpacity="0.45"
          stroke="#9A7B42"
          strokeWidth="0.75"
        />
        <circle cx="16" cy="16" r="4" fill="#C6A46C" fillOpacity="0.85" />
        <circle cx="16" cy="16" r="1.5" fill="#FFFDF7" />
      </svg>
    </div>
  );
};

// Luxury Islamic / Floral Divider
export const FloralDivider: React.FC<{ className?: string; variant?: 'gold' | 'lavender' | 'minimal' }> = ({
  className = '',
  variant = 'gold',
}) => {
  const strokeColor = variant === 'lavender' ? '#B8A4D8' : '#C6A46C';

  return (
    <div className={`flex items-center justify-center gap-3 my-5 sm:my-6 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C6A46C]/60" />
      <svg
        width="40"
        height="18"
        viewBox="0 0 44 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
      >
        <path
          d="M22 2 C24 7, 28 9, 34 10 C28 11, 24 13, 22 18 C20 13, 16 11, 10 10 C16 9, 20 7, 22 2 Z"
          fill={strokeColor}
          fillOpacity="0.25"
          stroke={strokeColor}
          strokeWidth="0.9"
        />
        <circle cx="4" cy="10" r="1.5" fill={strokeColor} />
        <circle cx="40" cy="10" r="1.5" fill={strokeColor} />
      </svg>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C6A46C]/60" />
    </div>
  );
};

// LUXURY M & A EMBLEM / MONOGRAM (M: Gold, &: Black, A: Gold)
export const MonogramSeal: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-32 h-32 sm:w-36 sm:h-36',
    xl: 'w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52',
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Outer subtle glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B8A4D8]/15 via-[#DFCA9B]/25 to-[#C6A46C]/20 blur-xl pointer-events-none -z-10" />

      {/* SVG Royal Crest */}
      <svg
        className={`${sizeMap[size]} transition-transform duration-500 hover:scale-105`}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E5C9" />
            <stop offset="35%" stopColor="#DFCA9B" />
            <stop offset="70%" stopColor="#C6A46C" />
            <stop offset="100%" stopColor="#9A7B42" />
          </linearGradient>
          <filter id="monogramShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#9A7B42" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Fine Filigree Circle */}
        <circle cx="100" cy="100" r="94" stroke="url(#goldGradient)" strokeWidth="1.2" opacity="0.85" />
        <circle cx="100" cy="100" r="88" stroke="#B8A4D8" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.75" />

        {/* Botanical Foliage Accents Around Circle */}
        {/* Top Flourish */}
        <path d="M100 6 C96 15, 88 18, 80 16 C90 22, 100 20, 100 20 C100 20, 110 22, 120 16 C112 18, 104 15, 100 6 Z" fill="url(#goldGradient)" />
        {/* Bottom Flourish */}
        <path d="M100 194 C96 185, 88 182, 80 184 C90 178, 100 180, 100 180 C100 180, 110 178, 120 184 C112 182, 104 185, 100 194 Z" fill="url(#goldGradient)" />
        {/* Left Flourish */}
        <path d="M6 100 C15 96, 18 88, 16 80 C22 90, 20 100, 20 100 C20 100, 22 110, 16 120 C18 112, 15 104, 6 100 Z" fill="url(#goldGradient)" />
        {/* Right Flourish */}
        <path d="M194 100 C185 96, 182 88, 184 80 C178 90, 180 100, 180 100 C180 100, 178 110, 184 120 C182 112, 185 104, 194 100 Z" fill="url(#goldGradient)" />

        {/* Inner Solid Disk */}
        <circle cx="100" cy="100" r="82" fill="#FFFDF7" stroke="url(#goldGradient)" strokeWidth="1.8" filter="url(#monogramShadow)" />
        <circle cx="100" cy="100" r="76" fill="none" stroke="url(#goldGradient)" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6" />

        {/* Delicate Corner Leaf Petals inside disc */}
        <path d="M60 60 Q70 65 72 75 Q65 72 60 60 Z" fill="#B8A4D8" fillOpacity="0.3" />
        <path d="M140 60 Q130 65 128 75 Q135 72 140 60 Z" fill="#B8A4D8" fillOpacity="0.3" />
        <path d="M60 140 Q70 135 72 125 Q65 128 60 140 Z" fill="#B8A4D8" fillOpacity="0.3" />
        <path d="M140 140 Q130 135 128 125 Q135 128 140 140 Z" fill="#B8A4D8" fillOpacity="0.3" />

        {/* --- EXACT REQUIREMENTS: M = GOLD, & = BLACK, A = GOLD --- */}
        {/* Letter M (Champagne Gold) */}
        <text
          x="62"
          y="116"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="50"
          fontWeight="600"
          fill="url(#goldGradient)"
          textAnchor="middle"
        >
          M
        </text>

        {/* Ampersand & (Deep Black / Charcoal #29252E) */}
        <text
          x="100"
          y="115"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="36"
          fontWeight="400"
          fill="#29252E"
          textAnchor="middle"
          opacity="0.95"
        >
          &amp;
        </text>

        {/* Letter A (Champagne Gold) */}
        <text
          x="138"
          y="116"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="50"
          fontWeight="600"
          fill="url(#goldGradient)"
          textAnchor="middle"
        >
          A
        </text>
      </svg>
    </div>
  );
};

// Floating Petals Background
export const FloatingPetals: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div
        className="absolute top-[12%] left-[8%] w-4 h-6 rounded-full bg-[#B8A4D8]/20 rotate-45 animate-float-slow"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute top-[35%] right-[10%] w-3 h-5 rounded-full bg-[#DFCA9B]/25 -rotate-12 animate-float-reverse"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="absolute top-[65%] left-[14%] w-4 h-5 rounded-full bg-[#B8A4D8]/15 rotate-12 animate-float-slow"
        style={{ animationDelay: '5s' }}
      />
      <div
        className="absolute top-[82%] right-[18%] w-3 h-6 rounded-full bg-[#C6A46C]/20 -rotate-45 animate-float-reverse"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-[48%] left-[85%] w-3 h-4 rounded-full bg-[#B8A4D8]/20 rotate-30 animate-float-slow"
        style={{ animationDelay: '7s' }}
      />
    </div>
  );
};
