import React from 'react';
import { FloralDivider, MonogramSeal } from './Ornaments';
import { weddingDetails } from '../data/weddingDetails';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 px-4 bg-[#FFFDF7] border-t border-[#C6A46C]/30 text-center overflow-hidden">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        {/* Monogram */}
        <MonogramSeal size="sm" className="mb-4" />

        <FloralDivider variant="gold" className="my-4" />

        {/* Closing Dua */}
        <p className="font-serif italic text-lg sm:text-xl text-[#29252E] max-w-lg mx-auto leading-relaxed">
          "{weddingDetails.dua}"
        </p>

        {/* Couple Names */}
        <p className="font-serif text-2xl font-medium tracking-wide text-[#9A7B42] mt-6">
          Mizbha &amp; Altamash
        </p>

        {/* Made with love */}
        <div className="mt-8 flex items-center justify-center gap-1.5 text-xs font-sans text-[#5A5462]">
          <span>Made with love and duas</span>
          <Heart className="w-3.5 h-3.5 text-[#B8A4D8] fill-current" />
          <span>• M &amp; A</span>
        </div>

        <p className="text-[10px] text-[#5A5462]/60 mt-2 font-sans tracking-widest uppercase">
          Gulbarga, Karnataka • 2026
        </p>
      </div>
    </footer>
  );
};
