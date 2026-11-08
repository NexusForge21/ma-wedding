import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingDetails, type GalleryItem } from '../data/weddingDetails';
import { FloralDivider } from './Ornaments';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 bg-[#FAF8F3]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#9A7B42] font-semibold mb-2">
            Wedding Stationery &amp; Visuals
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#29252E] font-medium">
            Gallery
          </h2>
          <FloralDivider className="my-4" />
          <p className="font-sans text-xs sm:text-sm text-[#5A5462] max-w-lg mx-auto">
            Celebratory illustrations and Islamic wedding stationery motifs created for Mizba &amp; Altamash.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {weddingDetails.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#FFFDF7] border border-[#C6A46C]/30 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Image Frame */}
              <div className="aspect-[4/5] overflow-hidden bg-[#F4F0FA]/40 flex items-center justify-center p-3">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#29252E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-2xs">
                <div className="w-10 h-10 rounded-full bg-[#FFFDF7]/90 text-[#9A7B42] flex items-center justify-center mb-2 shadow-md">
                  <ZoomIn className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#FFFDF7]">
                  {item.title}
                </h4>
                <p className="font-sans text-xs uppercase tracking-widest text-[#DFCA9B]">
                  {item.category}
                </p>
              </div>

              {/* Bottom Caption for mobile clarity */}
              <div className="p-3 text-center bg-[#FFFDF7] border-t border-[#C6A46C]/15 sm:hidden">
                <p className="font-serif text-sm font-medium text-[#29252E]">{item.title}</p>
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#9A7B42]">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#29252E]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#FFFDF7]/20 hover:bg-[#FFFDF7]/40 text-[#FFFDF7] transition-all cursor-pointer z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[85vh] bg-[#FFFDF7] rounded-2xl overflow-hidden shadow-2xl border border-[#C6A46C]/40 flex flex-col p-4 sm:p-6"
            >
              <div className="relative flex-1 overflow-hidden flex items-center justify-center min-h-[300px]">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-h-[65vh] w-auto object-contain rounded-lg"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-[#C6A46C]/20 text-center">
                <span className="font-sans text-xs uppercase tracking-widest text-[#9A7B42] font-semibold">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif text-2xl text-[#29252E] font-medium mt-0.5">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
