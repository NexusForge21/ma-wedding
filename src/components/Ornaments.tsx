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
        className="w-20 h-20 sm:w-28 sm:h-28 opacity-80"
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
        {/* Lavender leaves & petals */}
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
        <path
          d="M48 30 C56 22, 68 25, 68 37 C58 39, 50 36, 48 30 Z"
          fill="#DFCA9B"
          fillOpacity="0.45"
          stroke="#C6A46C"
          strokeWidth="0.75"
        />
        <path
          d="M30 48 C22 56, 25 68, 37 68 C39 58, 36 50, 30 48 Z"
          fill="#DFCA9B"
          fillOpacity="0.45"
          stroke="#C6A46C"
          strokeWidth="0.75"
        />
        {/* Flower Blossom in Corner */}
        <circle cx="16" cy="16" r="4.5" fill="#C6A46C" fillOpacity="0.85" />
        <circle cx="16" cy="16" r="2" fill="#FFFDF7" />
        <circle cx="23" cy="16" r="3" fill="#B8A4D8" fillOpacity="0.6" />
        <circle cx="9" cy="16" r="3" fill="#B8A4D8" fillOpacity="0.6" />
        <circle cx="16" cy="23" r="3" fill="#B8A4D8" fillOpacity="0.6" />
        <circle cx="16" cy="9" r="3" fill="#B8A4D8" fillOpacity="0.6" />
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
    <div className={`flex items-center justify-center gap-3 my-6 sm:my-8 ${className}`} aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#C6A46C]/60" />
      <svg
        width="44"
        height="20"
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
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#C6A46C]/60" />
    </div>
  );
};

// Luxury Monogram Seal M & A
export const MonogramSeal: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-16 h-16 text-xl',
    md: 'w-24 h-24 text-3xl',
    lg: 'w-32 h-32 text-4xl',
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Outer Decorative Ring */}
      <div
        className={`${sizeMap[size]} rounded-full bg-gradient-to-br from-[#FFFDF7] via-[#FAF8F3] to-[#F4F0FA] 
        p-[2px] shadow-sm ring-1 ring-[#C6A46C]/40 flex items-center justify-center`}
      >
        <div className="w-full h-full rounded-full border border-dashed border-[#C6A46C]/60 flex items-center justify-center bg-[#FFFDF7]/90 backdrop-blur-xs">
          <span
            className="font-serif font-medium tracking-widest text-[#9A7B42] select-none"
            style={{
              fontFeatureSettings: '"swsh", "cswh"',
              textShadow: '0 1px 2px rgba(198, 164, 108, 0.25)',
            }}
          >
            M &amp; A
          </span>
        </div>
      </div>
      {/* Subtle outer glow */}
      <div className="absolute inset-0 rounded-full bg-[#B8A4D8]/10 blur-md pointer-events-none -z-10" />
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
