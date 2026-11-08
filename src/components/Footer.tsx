import React from 'react';
import { FloralDivider, MonogramSeal } from './Ornaments';
import { weddingDetails } from '../data/weddingDetails';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 px-4 bg-[#FFFDF7] border-t border-[#C6A46C]/30 text-center overflow-hidden">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* 1. FIRST: WEDDING BLESSING */}
        <p className="font-serif italic text-lg sm:text-xl text-[#29252E] max-w-lg mx-auto leading-relaxed">
          "{weddingDetails.dua}"
        </p>

        {/* Delicate floral divider */}
        <FloralDivider variant="gold" className="my-5" />

        {/* 2. SECOND: COUPLE NAMES */}
        <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-[#9A7B42]">
          Mizba &amp; Altamash
        </h3>

        {/* 3. THIRD: CLOSING MESSAGE */}
        <p className="font-sans text-xs sm:text-sm text-[#5A5462] mt-4 font-medium tracking-wide">
          {weddingDetails.closingNote}
        </p>

        {/* 4. FOURTH: COUPLE MONOGRAM */}
        <div className="my-5">
          <MonogramSeal size="sm" />
        </div>

        {/* 5. FIFTH: LOCATION AND YEAR */}
        <p className="font-sans text-xs text-[#5A5462]/80 tracking-widest uppercase">
          {weddingDetails.locationYear}
        </p>

        {/* 6. SIXTH: INSTAGRAM BRANDING */}
        <div className="mt-8 pt-6 border-t border-[#C6A46C]/20 w-full flex items-center justify-center">
          <a
            href={weddingDetails.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow theinvitationhub.co on Instagram"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F3] hover:bg-[#B8A4D8]/20 border border-[#C6A46C]/30 hover:border-[#C6A46C] text-[#5A5462] hover:text-[#29252E] transition-all cursor-pointer shadow-2xs"
          >
            {/* Authentic Instagram SVG Icon */}
            <svg
              className="w-4 h-4 text-[#9A7B42] group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="font-sans text-xs tracking-wider font-medium">
              {weddingDetails.instagram.username}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
