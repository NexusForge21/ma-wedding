import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Check, Copy } from 'lucide-react';
import { weddingDetails } from '../data/weddingDetails';

export const WhatsAppShare: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const getWebsiteUrl = () => {
    if (typeof window !== 'undefined' && window.location.origin) {
      return window.location.href.split('#')[0];
    }
    return 'https://ma-wedding.pages.dev';
  };

  const shareText = `You're cordially invited to celebrate the wedding of ${weddingDetails.bride.fullName} & ${weddingDetails.groom.fullName}.

Nikah: 26 November 2026
Wedding Dinner: 26 November 2026
Valima: 27 November 2026

We look forward to your presence and duas.

View the complete invitation: ${getWebsiteUrl()}`;

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getWebsiteUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Quick Tooltip or Link Copied Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="px-3 py-1.5 rounded-lg bg-[#29252E] text-[#FFFDF7] text-xs font-sans shadow-lg flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Invitation link copied!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        {/* Copy Link Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopyLink}
          type="button"
          aria-label="Copy invitation link"
          className="w-10 h-10 rounded-full bg-[#FFFDF7] border border-[#C6A46C]/40 text-[#5A5462] hover:text-[#29252E] shadow-md flex items-center justify-center cursor-pointer transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </motion.button>

        {/* Floating WhatsApp Share Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Share Wedding Invitation on WhatsApp"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer font-sans text-xs font-medium uppercase tracking-wider"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">Share on WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
};
