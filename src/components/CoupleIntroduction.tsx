import React from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../data/weddingDetails';
import { MonogramSeal, FloralDivider } from './Ornaments';
import { GraduationCap, User } from 'lucide-react';

export const CoupleIntroduction: React.FC = () => {
  const { bride, groom } = weddingDetails;

  return (
    <section className="py-16 sm:py-24 px-4 relative bg-[#FAF8F3]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#9A7B42] font-semibold mb-2">
            The Blessed Couple
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#29252E] font-medium">
            Mizbha &amp; Altamash
          </h2>
          <FloralDivider className="my-4" />
        </div>

        {/* Couple Profile Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
          {/* Bride Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-[#FFFDF7] rounded-2xl p-6 sm:p-8 border border-[#C6A46C]/30 shadow-md flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Top decorative badge */}
            <span className="px-3.5 py-1 rounded-full text-[11px] font-sans font-medium uppercase tracking-widest bg-[#B8A4D8]/20 text-[#5A5462] mb-4">
              The Bride
            </span>

            {/* Photo / Silhouette Container */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 border-2 border-[#C6A46C]/40 bg-[#FAF8F3] mb-5 overflow-hidden shadow-inner group">
              <img
                src={bride.photoPlaceholder}
                alt={bride.fullName}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#29252E]">
              {bride.fullName}
            </h3>

            {/* Qualification */}
            <div className="inline-flex items-center gap-1.5 mt-2 text-[#9A7B42] font-sans text-xs sm:text-sm font-semibold tracking-wide">
              <GraduationCap className="w-4 h-4" />
              <span>{bride.qualification}</span>
            </div>

            {/* Parentage */}
            <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm font-sans text-[#5A5462]">
              <User className="w-3.5 h-3.5 text-[#C6A46C]" />
              <span>{bride.parentage}</span>
            </div>

            <p className="mt-4 text-xs font-serif italic text-[#5A5462]/90 max-w-xs">
              "{bride.about}"
            </p>
          </motion.div>

          {/* Center Monogram Seal Separator */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center my-2 lg:my-0">
            <div className="hidden lg:block w-[1px] h-14 bg-gradient-to-b from-transparent to-[#C6A46C]/60" />
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="my-2"
            >
              <MonogramSeal size="md" />
            </motion.div>
            <div className="hidden lg:block w-[1px] h-14 bg-gradient-to-t from-transparent to-[#C6A46C]/60" />
          </div>

          {/* Groom Profile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-[#FFFDF7] rounded-2xl p-6 sm:p-8 border border-[#C6A46C]/30 shadow-md flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Top decorative badge */}
            <span className="px-3.5 py-1 rounded-full text-[11px] font-sans font-medium uppercase tracking-widest bg-[#DFCA9B]/30 text-[#5A5462] mb-4">
              The Groom
            </span>

            {/* Photo / Silhouette Container */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 border-2 border-[#C6A46C]/40 bg-[#FAF8F3] mb-5 overflow-hidden shadow-inner group">
              <img
                src={groom.photoPlaceholder}
                alt={groom.fullName}
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#29252E]">
              {groom.fullName}
            </h3>

            {/* Qualification */}
            <div className="inline-flex items-center gap-1.5 mt-2 text-[#9A7B42] font-sans text-xs sm:text-sm font-semibold tracking-wide">
              <GraduationCap className="w-4 h-4" />
              <span>{groom.qualification}</span>
            </div>

            {/* Parentage */}
            <div className="mt-3 flex items-center gap-1.5 text-xs sm:text-sm font-sans text-[#5A5462]">
              <User className="w-3.5 h-3.5 text-[#C6A46C]" />
              <span>{groom.parentage}</span>
            </div>

            <p className="mt-4 text-xs font-serif italic text-[#5A5462]/90 max-w-xs">
              "{groom.about}"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
