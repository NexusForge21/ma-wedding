import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { InvitationOpening } from '../components/InvitationOpening';
import { Hero } from '../components/Hero';
import { InvitationMessage } from '../components/InvitationMessage';
import { Countdown } from '../components/Countdown';
import { WeddingEvents } from '../components/WeddingEvents';
import { CoupleIntroduction } from '../components/CoupleIntroduction';
import { WhatsAppShare } from '../components/WhatsAppShare';
import { Footer } from '../components/Footer';
import { FloatingPetals } from '../components/Ornaments';

export const Home: React.FC = () => {
  const [hasOpenedInvitation, setHasOpenedInvitation] = useState<boolean>(false);

  // Check if user previously opened invitation in this session or prefers reduced motion
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      setHasOpenedInvitation(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#29252E] font-sans relative selection:bg-[#B8A4D8]/30">
      {/* Background Floating Petals */}
      <FloatingPetals />

      {/* Invitation Opening Cinematic Overlay */}
      <AnimatePresence>
        {!hasOpenedInvitation && (
          <InvitationOpening onOpen={() => setHasOpenedInvitation(true)} />
        )}
      </AnimatePresence>

      {/* Main Wedding Content */}
      <main className="relative z-10">
        <Hero />
        <InvitationMessage />
        <Countdown />
        <WeddingEvents />
        <CoupleIntroduction />
        <Footer />
      </main>

      {/* Floating WhatsApp Sharing & Link Copy */}
      <WhatsAppShare />
    </div>
  );
};
