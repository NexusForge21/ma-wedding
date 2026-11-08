import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { weddingDetails } from '../data/weddingDetails';
import { Clock } from 'lucide-react';

export const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(weddingDetails.targetNikahDateISO);

  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8A4D8]/15 border border-[#B8A4D8]/30 text-xs font-sans tracking-widest uppercase text-[#5A5462] mb-3">
          <Clock className="w-3.5 h-3.5 text-[#9A7B42]" />
          <span>Counting Down To The Blessed Nikah</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#29252E] font-medium mb-1">
          26 November 2026
        </h3>
        <p className="font-sans text-xs uppercase tracking-widest text-[#9A7B42] mb-8">
          15 Jamadi us-Sani 1448 AH
        </p>

        {isComplete ? (
          <div className="p-8 rounded-2xl bg-[#FFFDF7] border border-[#C6A46C]/40 shadow-sm max-w-lg mx-auto">
            <p className="font-serif text-2xl text-[#9A7B42] italic">
              Alhamdulillah, The Nikah Ceremony Has Commenced!
            </p>
            <p className="font-sans text-xs text-[#5A5462] mt-2">
              May Allah bless this union with eternal peace and affection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-[#FFFDF7] rounded-xl p-4 sm:p-6 border border-[#C6A46C]/30 shadow-xs 
                flex flex-col items-center justify-center overflow-hidden group hover:border-[#C6A46C] transition-colors"
              >
                {/* Decorative subtle corner line */}
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#C6A46C]/40" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#C6A46C]/40" />

                <span className="font-serif text-3xl sm:text-5xl font-semibold text-[#9A7B42] tabular-nums tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest text-[#5A5462] font-medium mt-1">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
