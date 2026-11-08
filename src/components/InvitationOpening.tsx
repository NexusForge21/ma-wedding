import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, FastForward, Sparkles } from 'lucide-react';
import { FloralCorner, MonogramSeal, FloralDivider } from './Ornaments';
import { weddingDetails } from '../data/weddingDetails';

interface InvitationOpeningProps {
  onOpen: () => void;
}

export const InvitationOpening: React.FC<InvitationOpeningProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  const handleSkip = () => {
    onOpen();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F3] px-4 py-6 overflow-hidden select-none"
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        type="button"
        aria-label="Skip Intro"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 z-30 inline-flex items-center gap-1.5 px-3.5 py-1.5 
        rounded-full text-xs font-sans uppercase tracking-widest text-[#5A5462] hover:text-[#29252E] 
        bg-[#FFFDF7]/80 backdrop-blur-xs border border-[#C6A46C]/30 hover:border-[#C6A46C] transition-all shadow-xs cursor-pointer"
      >
        <span>Skip Intro</span>
        <FastForward className="w-3.5 h-3.5 text-[#C6A46C]" />
      </button>

      {/* Background Floral Corners on screen frame */}
      <FloralCorner position="top-left" className="absolute top-0 left-0" />
      <FloralCorner position="top-right" className="absolute top-0 right-0" />
      <FloralCorner position="bottom-left" className="absolute bottom-0 left-0" />
      <FloralCorner position="bottom-right" className="absolute bottom-0 right-0" />

      {/* Outer Envelope Wrapper */}
      <div className="relative w-full max-w-md mx-auto aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center p-3">
        {/* Envelope Body */}
        <motion.div
          animate={
            isOpening
              ? { scale: [1, 1.03, 0.96], y: [0, -10, 20], opacity: [1, 1, 0] }
              : { scale: 1, y: 0, opacity: 1 }
          }
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full bg-[#FFFDF7] rounded-2xl shadow-2xl border border-[#C6A46C]/30 
          overflow-hidden flex flex-col items-center justify-between p-6 sm:p-10"
        >
          {/* Inner Decorative Border */}
          <div className="absolute inset-3 border border-[#C6A46C]/25 rounded-xl pointer-events-none" />
          <div className="absolute inset-4 border border-dashed border-[#B8A4D8]/35 rounded-lg pointer-events-none" />

          {/* Top Section - Bismillah Arabic only */}
          <div className="text-center pt-2 relative z-10">
            <span
              dir="rtl"
              lang="ar"
              className="font-arabic text-xl sm:text-2xl text-[#29252E] block mb-2 leading-[1.8] select-none"
            >
              {weddingDetails.bismillahArabic}
            </span>
            <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#5A5462] font-medium">
              Together with their families
            </p>
          </div>

          {/* Center Monogram & Title */}
          <div className="relative z-10 flex flex-col items-center my-auto py-2">
            <motion.div
              animate={{ rotate: [0, 1.5, -1.5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              <MonogramSeal size="lg" />
            </motion.div>

            <h1 className="mt-5 font-serif text-2xl sm:text-3xl font-medium tracking-wide text-[#29252E] text-center">
              Mizba &amp; Altamash
            </h1>
            <p className="mt-1 font-serif italic text-sm text-[#C6A46C]">Wedding Invitation</p>

            <FloralDivider className="my-3 scale-75" />

            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#5A5462]">
              26 &amp; 27 November 2026
            </p>
          </div>

          {/* Bottom Button */}
          <div className="w-full relative z-10 pb-2 flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpenClick}
              disabled={isOpening}
              className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r 
              from-[#B8A4D8]/90 via-[#C6A46C] to-[#B8A4D8]/90 text-[#FFFDF7] font-sans text-xs 
              uppercase tracking-[0.2em] font-medium shadow-md hover:shadow-lg transition-all 
              flex items-center justify-center gap-2 cursor-pointer border border-[#FFFDF7]/40"
            >
              <MailOpen className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>{isOpening ? 'Opening Invitation...' : 'Open Invitation'}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#FFFDF7]/80 animate-pulse" />
            </motion.button>
            <span className="text-[10px] text-[#5A5462]/75 font-sans mt-2 tracking-wider">
              Tap to unveil celebration
            </span>
          </div>

          {/* Envelope Flap Fold Illusion */}
          <AnimatePresence>
            {isOpening && (
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ opacity: 0 }}
                style={{ transformOrigin: 'top center' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#FAF8F3] to-[#FFFDF7] 
                border-b border-[#C6A46C]/40 shadow-inner z-20 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};
