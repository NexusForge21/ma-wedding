import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Utensils, Moon } from 'lucide-react';
import { weddingDetails, type WeddingEvent } from '../data/weddingDetails';
import { FloralDivider } from './Ornaments';

export const WeddingEvents: React.FC = () => {
  const getEventIcon = (type: WeddingEvent['iconType']) => {
    switch (type) {
      case 'mosque':
        return (
          <div className="w-12 h-12 rounded-full bg-[#B8A4D8]/20 flex items-center justify-center text-[#9A7B42]">
            <Moon className="w-6 h-6" />
          </div>
        );
      case 'dinner':
        return (
          <div className="w-12 h-12 rounded-full bg-[#DFCA9B]/30 flex items-center justify-center text-[#9A7B42]">
            <Utensils className="w-6 h-6" />
          </div>
        );
      case 'valima':
        return (
          <div className="w-12 h-12 rounded-full bg-[#B8A4D8]/20 flex items-center justify-center text-[#9A7B42]">
            <Moon className="w-6 h-6" />
          </div>
        );
    }
  };

  return (
    <section id="events" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#FAF8F3] via-[#FFFDF7] to-[#FAF8F3]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#9A7B42] font-semibold mb-2">
            Ceremonies &amp; Feasts
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#29252E] font-medium">
            Wedding Events
          </h2>
          <FloralDivider className="my-4" />
          <p className="font-sans text-xs sm:text-sm text-[#5A5462] max-w-lg mx-auto">
            Please grace our joyous gatherings with your presence and sincere duas.
          </p>
        </div>

        {/* 3 Premium Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {weddingDetails.events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#FFFDF7] rounded-2xl border border-[#C6A46C]/35 p-6 sm:p-8 shadow-md 
              hover:shadow-xl hover:border-[#C6A46C] transition-all flex flex-col justify-between relative group"
            >
              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#C6A46C]/40 group-hover:border-[#C6A46C] transition-colors" />

              <div>
                {/* Event Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  {getEventIcon(event.iconType)}
                  <span className="font-serif text-sm tracking-widest text-[#9A7B42] uppercase font-semibold">
                    0{index + 1}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-serif text-2xl font-semibold tracking-wide text-[#29252E] mb-1">
                  {event.title}
                </h3>
                {event.subTitle && (
                  <p className="font-serif italic text-sm text-[#C6A46C] mb-4">
                    {event.subTitle}
                  </p>
                )}

                <div className="h-[1px] w-full bg-[#C6A46C]/20 mb-5" />

                {/* Event Details */}
                <div className="space-y-3.5 text-xs sm:text-sm font-sans text-[#29252E]">
                  {/* Date */}
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#9A7B42] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#29252E]">{event.date}</p>
                      {event.islamicDate && (
                        <p className="text-[11px] text-[#9A7B42] font-semibold">
                          {event.islamicDate}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#9A7B42] shrink-0" />
                    <p className="font-medium">{event.time}</p>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-3 pt-2">
                    <MapPin className="w-4 h-4 text-[#9A7B42] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-serif text-base font-semibold text-[#29252E]">
                        {event.venueName}
                      </p>
                      <p className="text-xs text-[#5A5462] leading-relaxed mt-0.5">
                        {event.venueAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button & Note */}
              <div className="mt-8 pt-4 border-t border-[#C6A46C]/20">
                {event.note && (
                  <p className="text-[11px] text-[#5A5462] italic mb-4 font-serif">
                    {event.note}
                  </p>
                )}
                <a
                  href={event.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full 
                  border border-[#C6A46C]/40 text-[#29252E] hover:text-[#FFFDF7] hover:bg-[#C6A46C] 
                  font-sans text-xs uppercase tracking-wider font-medium transition-all group-hover:border-[#C6A46C]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#9A7B42] group-hover:text-[#FFFDF7]" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
