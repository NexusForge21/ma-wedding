import React from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../data/weddingDetails';
import { FloralCorner, FloralDivider, MonogramSeal } from './Ornaments';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
      {/* Corner Ornaments */}
      <FloralCorner position="top-left" className="absolute top-2 left-2 sm:top-6 sm:left-6" />
      <FloralCorner position="top-right" className="absolute top-2 right-2 sm:top-6 sm:right-6" />
      <FloralCorner position="bottom-left" className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6" />
      <FloralCorner position="bottom-right" className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6" />

      {/* Decorative Background Floral Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#B8A4D8]/15 via-[#FFFDF7]/60 to-[#DFCA9B]/20 blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative max-w-2xl mx-auto bg-[#FFFDF7]/85 backdrop-blur-md px-6 py-12 sm:px-12 sm:py-16 
        rounded-2xl border border-[#C6A46C]/30 shadow-xl"
      >
        {/* Inner subtle outline */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C6A46C]/20 rounded-xl pointer-events-none" />

        {/* BISMILLAH */}
        <div className="mb-6 space-y-2">
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#9A7B42] font-semibold">
            {weddingDetails.bismillahTransliteration}
          </p>
          <h2 className="font-arabic text-3xl sm:text-4xl text-[#9A7B42] leading-relaxed tracking-normal">
            {weddingDetails.bismillahArabic}
          </h2>
          <p className="font-sans text-xs text-[#5A5462]/90 italic max-w-md mx-auto">
            "{weddingDetails.bismillahMeaning}"
          </p>
        </div>

        <FloralDivider variant="gold" className="my-5" />

        {/* Celebration Title */}
        <p className="font-serif italic text-lg sm:text-xl text-[#5A5462] tracking-wider mb-4">
          A Wedding Celebration
        </p>

        {/* Bride */}
        <div className="my-3">
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#29252E]">
            {weddingDetails.bride.fullName}
          </h1>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-widest text-[#9A7B42] mt-1 font-medium">
            ({weddingDetails.bride.qualification})
          </p>
        </div>

        {/* Monogram Seal & WEDS */}
        <div className="my-5 flex flex-col items-center justify-center gap-2">
          <MonogramSeal size="sm" />
          <span className="font-serif text-lg sm:text-xl font-light italic tracking-widest text-[#C6A46C] block">
            — WEDS —
          </span>
        </div>

        {/* Groom */}
        <div className="my-3">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#29252E]">
            {weddingDetails.groom.fullName}
          </h2>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-widest text-[#9A7B42] mt-1 font-medium">
            ({weddingDetails.groom.qualification})
          </p>
        </div>

        <FloralDivider variant="lavender" className="my-6 scale-90" />

        {/* Blessing Text */}
        <p className="font-serif text-base sm:text-lg text-[#5A5462] italic max-w-lg mx-auto">
          With the blessings of their families
        </p>

        {/* Date & Location Pill */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2 rounded-full bg-[#FAF8F3] border border-[#C6A46C]/30 text-xs sm:text-sm font-sans tracking-wider text-[#29252E] shadow-2xs">
          <span className="font-semibold text-[#9A7B42]">26 &amp; 27 November 2026</span>
          <span className="text-[#C6A46C]">•</span>
          <span>Gulbarga, Karnataka</span>
        </div>
      </motion.div>
    </header>
  );
};
