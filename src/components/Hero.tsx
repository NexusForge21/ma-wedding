import React from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../data/weddingDetails';
import { FloralCorner, FloralDivider } from './Ornaments';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 sm:py-20 overflow-hidden">
      {/* Corner Ornaments */}
      <FloralCorner position="top-left" className="absolute top-2 left-2 sm:top-6 sm:left-6" />
      <FloralCorner position="top-right" className="absolute top-2 right-2 sm:top-6 sm:right-6" />
      <FloralCorner position="bottom-left" className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6" />
      <FloralCorner position="bottom-right" className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6" />

      {/* Decorative Background Floral Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#B8A4D8]/15 via-[#FFFDF7]/60 to-[#DFCA9B]/20 blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative max-w-2xl mx-auto bg-[#FFFDF7]/90 backdrop-blur-md px-6 py-12 sm:px-12 sm:py-16 
        rounded-2xl border border-[#C6A46C]/30 shadow-xl"
      >
        {/* Inner subtle gold outline */}
        <div className="absolute inset-2 sm:inset-3 border border-[#C6A46C]/20 rounded-xl pointer-events-none" />

        {/* 1. FIRST: ARABIC BISMILLAH & ENGLISH TRANSLITERATION */}
        <div className="mb-6 space-y-2">
          <h2
            dir="rtl"
            lang="ar"
            className="font-arabic text-3xl sm:text-4xl md:text-5xl text-[#9A7B42] leading-relaxed tracking-normal select-none"
            style={{ fontFeatureSettings: '"calt", "liga"' }}
          >
            {weddingDetails.bismillahArabic}
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#5A5462] tracking-wide">
            {weddingDetails.bismillahTransliteration}
          </p>
        </div>

        {/* 2. SECOND: QURANIC AYAT & REFERENCE */}
        <div className="my-5 space-y-1.5">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-2xl sm:text-3xl text-[#29252E] font-medium leading-relaxed select-none"
            style={{ fontFeatureSettings: '"calt", "liga"' }}
          >
            {weddingDetails.quranicVerseArabic}
          </p>
          <p className="font-serif italic text-base sm:text-lg text-[#9A7B42]">
            "{weddingDetails.quranicVerseTranslation}"
          </p>
          <p className="font-sans text-[11px] sm:text-xs text-[#5A5462]/80 uppercase tracking-widest font-medium">
            Surah An-Naba ({weddingDetails.quranicVerseReference})
          </p>
        </div>

        {/* Delicate Gold Divider */}
        <FloralDivider variant="gold" className="my-5 scale-90" />

        {/* 3. THIRD: UNDER THE BLESSINGS */}
        <div className="my-3">
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#9A7B42] font-semibold">
            {weddingDetails.underBlessingsTitle}
          </p>
        </div>

        {/* 4. FOURTH: WEDDING ANNOUNCEMENT */}
        <div className="mt-5 space-y-4">
          <p className="font-serif italic text-xl sm:text-2xl text-[#5A5462] tracking-wide">
            A Wedding Celebration
          </p>

          {/* Bride Name & Qualification */}
          <div className="my-2">
            <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#29252E]">
              {weddingDetails.bride.fullName}
            </h1>
            <p className="font-serif italic text-xs sm:text-sm text-[#9A7B42] mt-1 font-normal">
              ({weddingDetails.bride.qualification})
            </p>
          </div>

          {/* Centered WEDS */}
          <div className="my-3 flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#C6A46C]" />
            <span className="font-serif text-lg sm:text-xl font-light italic tracking-widest text-[#C6A46C]">
              — WEDS —
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#C6A46C]" />
          </div>

          {/* Groom Name & Qualification */}
          <div className="my-2">
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#29252E]">
              {weddingDetails.groom.fullName}
            </h2>
            <p className="font-serif italic text-xs sm:text-sm text-[#9A7B42] mt-1 font-normal">
              ({weddingDetails.groom.qualification})
            </p>
          </div>

          <p className="font-serif italic text-sm sm:text-base text-[#5A5462] pt-2">
            With the blessings of their families
          </p>

          {/* Date & Location Pill */}
          <div className="pt-3">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-6 py-2.5 rounded-full bg-[#FAF8F3] border border-[#C6A46C]/30 text-xs sm:text-sm font-sans tracking-wider text-[#29252E] shadow-2xs">
              <span className="font-semibold text-[#9A7B42]">26 &amp; 27 November 2026</span>
              <span className="hidden sm:inline text-[#C6A46C]">•</span>
              <span>Gulbarga, Karnataka</span>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
