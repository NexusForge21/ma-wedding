import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { FloralDivider } from './Ornaments';
import { weddingDetails } from '../data/weddingDetails';

export const InvitationMessage: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden bg-gradient-to-b from-[#FAF8F3] via-[#FFFDF7] to-[#FAF8F3]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF7] p-8 sm:p-14 rounded-2xl border border-[#C6A46C]/30 shadow-md"
        >
          {/* Subtle ornamental corner tabs */}
          <div className="w-8 h-8 absolute top-0 left-0 border-t-2 border-l-2 border-[#C6A46C]/40 rounded-tl-xl m-2" />
          <div className="w-8 h-8 absolute top-0 right-0 border-t-2 border-r-2 border-[#C6A46C]/40 rounded-tr-xl m-2" />
          <div className="w-8 h-8 absolute bottom-0 left-0 border-b-2 border-l-2 border-[#C6A46C]/40 rounded-bl-xl m-2" />
          <div className="w-8 h-8 absolute bottom-0 right-0 border-b-2 border-r-2 border-[#C6A46C]/40 rounded-br-xl m-2" />

          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B8A4D8]/15 text-[#9A7B42] mb-4">
            <Heart className="w-5 h-5 fill-current" />
          </div>

          <h2 className="font-serif italic text-2xl sm:text-3xl text-[#9A7B42] mb-3">
            {weddingDetails.invitationMessage.opening}
          </h2>

          <FloralDivider className="my-4" />

          <p className="font-serif text-lg sm:text-2xl text-[#29252E] leading-relaxed max-w-2xl mx-auto font-normal">
            {weddingDetails.invitationMessage.body}
          </p>

          <p className="font-sans text-sm sm:text-base text-[#5A5462] mt-6 leading-relaxed max-w-xl mx-auto">
            {weddingDetails.invitationMessage.closing}
          </p>

          {/* Parents invitation note */}
          <div className="mt-8 pt-6 border-t border-[#C6A46C]/20 flex flex-col sm:flex-row items-center justify-around gap-4 text-xs sm:text-sm font-sans text-[#5A5462]">
            <div>
              <span className="block font-serif text-base text-[#29252E] font-medium">
                Mohammed Ibrahim Mulla
              </span>
              <span className="text-[#9A7B42]">Father of the Bride</span>
            </div>
            <div className="hidden sm:block text-[#C6A46C]">•</div>
            <div>
              <span className="block font-serif text-base text-[#29252E] font-medium">
                Janab Liyaqat Ali Sahab
              </span>
              <span className="text-[#9A7B42]">Father of the Groom</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
