import React from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../data/weddingDetails';
import { FloralDivider } from './Ornaments';

export const BlessedCouple: React.FC = () => {
  const { bride, groom } = weddingDetails;

  return (
    <section id="couple" className="py-16 sm:py-24 px-4 relative bg-[#FAF8F3] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#9A7B42] font-semibold mb-2">
            The Blessed Couple
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#29252E] font-medium">
            Mizba &amp; Altamash
          </h2>
          <FloralDivider className="my-4" />
        </div>

        {/* 3 Circular Elements Horizontally Arranged */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-2">
          {/* Subtle Horizontal Decorative Connecting Line on desktop */}
          <div className="hidden sm:block absolute inset-x-12 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#C6A46C]/40 to-transparent pointer-events-none -z-0" />

          {/* LEFT CIRCLE – BRIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center flex-1 max-w-[140px] sm:max-w-[240px] z-10"
          >
            {/* Outer Circular Frame */}
            <div className="relative w-28 h-28 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full p-1 sm:p-2 bg-gradient-to-tr from-[#FFFDF7] via-[#B8A4D8]/30 to-[#DFCA9B]/50 shadow-xl border border-[#C6A46C]/40 group">
              {/* Inner Circle Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border border-dashed border-[#C6A46C]/60 bg-[#FAF8F3]">
                <img
                  src={bride.illustration}
                  alt={bride.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Subtle Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-[#B8A4D8]/10 blur-md pointer-events-none -z-10" />
            </div>

            {/* Label below Bride */}
            <div className="mt-4 text-center">
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#9A7B42] font-semibold bg-[#FFFDF7] px-3 py-1 rounded-full border border-[#C6A46C]/25 shadow-2xs">
                The Bride
              </span>
              <p className="font-serif text-base sm:text-xl font-medium text-[#29252E] mt-2">
                {bride.fullName}
              </p>
              <p className="font-serif italic text-xs text-[#5A5462]">
                ({bride.qualification})
              </p>
            </div>
          </motion.div>

          {/* CENTER CIRCLE – M & A LOGO MONOGRAM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center justify-center shrink-0 z-20"
          >
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full p-[2px] bg-gradient-to-br from-[#FFFDF7] via-[#FAF8F3] to-[#F4F0FA] shadow-lg border border-[#C6A46C] flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-dashed border-[#C6A46C]/70 flex items-center justify-center bg-[#FFFDF7]/95">
                <span
                  className="font-serif font-medium text-lg sm:text-2xl md:text-3xl tracking-widest text-[#9A7B42] select-none"
                  style={{
                    fontFeatureSettings: '"swsh", "cswh"',
                    textShadow: '0 1px 2px rgba(198, 164, 108, 0.25)',
                  }}
                >
                  M &amp; A
                </span>
              </div>
            </div>
            <span className="hidden sm:block mt-2 font-serif italic text-xs text-[#C6A46C] tracking-widest">
              Eternal Union
            </span>
          </motion.div>

          {/* RIGHT CIRCLE – GROOM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center flex-1 max-w-[140px] sm:max-w-[240px] z-10"
          >
            {/* Outer Circular Frame */}
            <div className="relative w-28 h-28 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full p-1 sm:p-2 bg-gradient-to-tr from-[#FFFDF7] via-[#DFCA9B]/50 to-[#B8A4D8]/30 shadow-xl border border-[#C6A46C]/40 group">
              {/* Inner Circle Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border border-dashed border-[#C6A46C]/60 bg-[#FAF8F3]">
                <img
                  src={groom.illustration}
                  alt={groom.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Subtle Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-[#DFCA9B]/15 blur-md pointer-events-none -z-10" />
            </div>

            {/* Label below Groom */}
            <div className="mt-4 text-center">
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#9A7B42] font-semibold bg-[#FFFDF7] px-3 py-1 rounded-full border border-[#C6A46C]/25 shadow-2xs">
                The Groom
              </span>
              <p className="font-serif text-base sm:text-xl font-medium text-[#29252E] mt-2">
                {groom.fullName}
              </p>
              <p className="font-serif italic text-xs text-[#5A5462]">
                ({groom.qualification})
              </p>
            </div>
          </motion.div>
        </div>

        {/* Below the circles */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="font-serif text-2xl sm:text-3xl text-[#29252E] font-medium tracking-wide">
            Mizba &amp; Altamash
          </h3>
          <p className="font-serif italic text-sm text-[#5A5462] mt-1 max-w-md mx-auto">
            "And of His signs is that He created for you from yourselves mates that you may find tranquility in them"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
