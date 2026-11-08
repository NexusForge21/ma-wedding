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
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpen();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F3] px-3 py-4 sm:px-6 sm:py-8 overflow-y-auto select-none"
    >
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        type="button"
        aria-label="Skip Intro"
        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 
        rounded-full text-xs font-sans uppercase tracking-widest text-[#5A5462] hover:text-[#29252E] 
        bg-[#FFFDF7]/90 backdrop-blur-xs border border-[#C6A46C]/30 hover:border-[#C6A46C] transition-all shadow-xs cursor-pointer"
      >
        <span>Skip Intro</span>
        <FastForward className="w-3.5 h-3.5 text-[#C6A46C]" />
      </button>

      {/* Background Floral Corners on screen frame */}
      <FloralCorner position="top-left" className="absolute top-0 left-0" />
      <FloralCorner position="top-right" className="absolute top-0 right-0" />
      <FloralCorner position="bottom-left" className="absolute bottom-0 left-0" />
      <FloralCorner position="bottom-right" className="absolute bottom-0 right-0" />

      {/* Envelope Card Container */}
      <div className="relative w-full max-w-[390px] sm:max-w-md mx-auto my-auto py-2">
        <motion.div
          animate={
            isOpening
              ? { scale: [1, 1.02, 0.96], y: [0, -8, 15], opacity: [1, 1, 0] }
              : { scale: 1, y: 0, opacity: 1 }
          }
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-[#FFFDF7] rounded-2xl shadow-2xl border border-[#C6A46C]/35 
          overflow-hidden flex flex-col items-center justify-between px-5 py-6 sm:px-8 sm:py-8"
        >
          {/* Inner Decorative Borders */}
          <div className="absolute inset-2 sm:inset-3 border border-[#C6A46C]/25 rounded-xl pointer-events-none" />
          <div className="absolute inset-3 sm:inset-4 border border-dashed border-[#B8A4D8]/30 rounded-lg pointer-events-none" />

          {/* Top Section */}
          <div className="text-center pt-1 relative z-10 w-full">
            <span
              dir="rtl"
              lang="ar"
              className="font-arabic text-xl sm:text-2xl text-[#29252E] block mb-1 leading-relaxed select-none"
            >
              {weddingDetails.bismillahArabic}
            </span>
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#5A5462] font-medium">
              Together with their families
            </p>
          </div>

          {/* Center Monogram & Title */}
          <div className="relative z-10 flex flex-col items-center my-3 sm:my-4 w-full">
            <motion.div
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              <MonogramSeal size="md" />
            </motion.div>

            <h1 className="mt-3 sm:mt-4 font-serif text-2xl sm:text-3xl font-medium tracking-wide text-[#29252E] text-center">
              Mizba &amp; Altamash
            </h1>
            <p className="font-serif italic text-xs sm:text-sm text-[#C6A46C] mt-0.5">
              Wedding Invitation
            </p>

            <FloralDivider className="my-2 sm:my-3 scale-75" />

            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#5A5462]">
              26 &amp; 27 November 2026
            </p>
          </div>

          {/* Bottom Button Section (Fully in-view, never clipped) */}
          <div className="w-full relative z-20 pt-1 pb-1 flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpenClick}
              disabled={isOpening}
              className="group relative w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r 
              from-[#B8A4D8]/95 via-[#C6A46C] to-[#B8A4D8]/95 text-[#FFFDF7] font-sans text-xs 
              uppercase tracking-[0.2em] font-semibold shadow-md hover:shadow-lg transition-all 
              flex items-center justify-center gap-2 cursor-pointer border border-[#FFFDF7]/50"
            >
              <MailOpen className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>{isOpening ? 'Opening Invitation...' : 'Open Invitation'}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#FFFDF7]/90 animate-pulse" />
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
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#FAF8F3] to-[#FFFDF7] 
                border-b border-[#C6A46C]/40 shadow-inner z-30 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};
