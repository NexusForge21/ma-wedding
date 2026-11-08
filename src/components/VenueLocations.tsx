import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingDetails } from '../data/weddingDetails';
import { FloralDivider } from './Ornaments';
import { MapPin, Navigation, ExternalLink, Eye } from 'lucide-react';

export const VenueLocations: React.FC = () => {
  const [activeVenueId, setActiveVenueId] = useState<string>(weddingDetails.events[0].id);
  const [loadInteractiveMap, setLoadInteractiveMap] = useState<Record<string, boolean>>({});

  const handleShowMap = (id: string) => {
    setLoadInteractiveMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="venues" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#FAF8F3] to-[#FFFDF7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#9A7B42] font-semibold mb-2">
            Find Your Way
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#29252E] font-medium">
            Location &amp; Venues
          </h2>
          <FloralDivider className="my-4" />
          <p className="font-sans text-xs sm:text-sm text-[#5A5462] max-w-lg mx-auto">
            All events will take place in Gulbarga, Karnataka. Convenient navigation links and interactive maps are provided below.
          </p>
        </div>

        {/* Venue Tabs for Quick Switching */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {weddingDetails.events.map((event) => (
            <button
              key={event.id}
              onClick={() => setActiveVenueId(event.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                activeVenueId === event.id
                  ? 'bg-[#C6A46C] text-[#FFFDF7] shadow-sm'
                  : 'bg-[#FFFDF7] text-[#5A5462] border border-[#C6A46C]/30 hover:border-[#C6A46C]'
              }`}
            >
              {event.title}
            </button>
          ))}
        </div>

        {/* Detailed Venue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weddingDetails.events.map((event) => {
            const isSelected = activeVenueId === event.id;
            const isMapLoaded = loadInteractiveMap[event.id];

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-[#FFFDF7] rounded-2xl border transition-all overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#C6A46C] shadow-lg ring-1 ring-[#C6A46C]/30'
                    : 'border-[#C6A46C]/25 shadow-xs opacity-90 hover:opacity-100'
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#9A7B42] bg-[#FAF8F3] px-3 py-1 rounded-full border border-[#C6A46C]/25">
                      {event.title}
                    </span>
                    <span className="text-xs text-[#5A5462]">{event.time}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-[#29252E] mt-2 mb-1">
                    {event.venueName}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#5A5462] leading-relaxed mb-4">
                    {event.venueAddress}
                  </p>

                  {/* Lazy-loaded Embedded Map */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#FAF8F3] border border-[#C6A46C]/20 flex items-center justify-center">
                    {isMapLoaded ? (
                      <iframe
                        title={event.venueName}
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                          event.googleMapsQuery
                        )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-4 text-center">
                        <MapPin className="w-6 h-6 text-[#9A7B42] mb-2 animate-bounce" />
                        <p className="text-xs text-[#5A5462] mb-3 font-sans">
                          Interactive Google Map
                        </p>
                        <button
                          type="button"
                          onClick={() => handleShowMap(event.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-sans font-medium uppercase tracking-wider bg-[#FFFDF7] border border-[#C6A46C]/40 hover:bg-[#C6A46C] hover:text-[#FFFDF7] text-[#29252E] transition-all cursor-pointer shadow-2xs"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Load Map Preview</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-4 bg-[#FAF8F3] border-t border-[#C6A46C]/20 flex items-center gap-2">
                  <a
                    href={event.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full 
                    bg-[#C6A46C] text-[#FFFDF7] font-sans text-xs uppercase tracking-wider font-semibold 
                    hover:bg-[#9A7B42] transition-colors shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Navigate in Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
