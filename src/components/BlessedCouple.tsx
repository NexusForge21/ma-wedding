import React from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../data/weddingDetails';
import { MonogramSeal, FloralDivider } from './Ornaments';

export const BlessedCouple: React.FC = () => {
  const { bride, groom } = weddingDetails;

  return (
    <section id="couple" className="py-16 sm:py-24 px-4 relative bg-[#FAF8F3] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#9A7B42] font-semibold mb-2">
            The Blessed Couple
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#29252E] font-medium">
            Mizba &amp; Altamash
          </h2>
          <FloralDivider className="my-4" />
        </div>

        {/* Symmetrical Typography & Monogram Composition (No anime, Pure Luxury Monogram Crest) */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto px-4">
          {/* BRIDE SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-5/12 bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl border border-[#C6A46C]/30 shadow-md relative group hover:border-[#C6A46C] transition-all"
          >
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#9A7B42] font-semibold bg-[#FAF8F3] px-3.5 py-1 rounded-full border border-[#C6A46C]/25 shadow-2xs">
              {bride.role}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#29252E] mt-4">
              {bride.fullName}
            </h3>

            <p className="font-sans text-xs sm:text-sm uppercase tracking-wider text-[#9A7B42] font-medium mt-1">
              ({bride.qualification})
            </p>
          </motion.div>

          {/* CENTER AWESOME M & A ROYAL CREST */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col items-center justify-center my-2 md:my-0 z-10"
          >
            <MonogramSeal size="xl" />
            <span className="font-serif italic text-sm text-[#C6A46C] tracking-widest mt-2 block">
              Eternal Union
            </span>
          </motion.div>

          {/* GROOM SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full md:w-5/12 bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl border border-[#C6A46C]/30 shadow-md relative group hover:border-[#C6A46C] transition-all"
          >
            <span className="font-sans text-[11px] uppercase tracking-widest text-[#9A7B42] font-semibold bg-[#FAF8F3] px-3.5 py-1 rounded-full border border-[#C6A46C]/25 shadow-2xs">
              {groom.role}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#29252E] mt-4">
              {groom.fullName}
            </h3>

            <p className="font-sans text-xs sm:text-sm uppercase tracking-wider text-[#9A7B42] font-medium mt-1">
              ({groom.qualification})
            </p>
          </motion.div>
        </div>

        {/* Continuation: Mizba & Altamash with Ayat */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 text-center max-w-xl mx-auto"
        >
          <h4 className="font-serif text-2xl sm:text-3xl text-[#29252E] font-medium tracking-wide">
            Mizba &amp; Altamash
          </h4>
          <p className="font-serif italic text-base sm:text-lg text-[#5A5462] mt-2 leading-relaxed">
            "And of His signs is that He created for you from yourselves mates that you may find tranquility in them"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
