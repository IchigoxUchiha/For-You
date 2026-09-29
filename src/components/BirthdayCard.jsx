import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ambientAudio } from '../utils/audio';
import { Sparkles, Mail, Heart, ChevronDown } from 'lucide-react';
import { TulipFlower, TulipBouquet } from './TulipIcons';

export default function BirthdayCard({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);
      ambientAudio.playPaperSound();

      // Delicate subtle pastel & golden yellow confetti (soft, joyful, not overwhelming)
      try {
        confetti({
          particleCount: 40,
          spread: 65,
          origin: { y: 0.65 },
          colors: ['#fde047', '#facc15', '#fef08a', '#f4d3ce', '#e7ddf2', '#f9ded0', '#faf6f0'],
          ticks: 200,
          gravity: 0.8,
          scalar: 0.9,
          shapes: ['circle']
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  };

  return (
    <section id="birthday-section" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-[370px] sm:max-w-md mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <h2 className="font-serif text-2xl text-[#382c26] font-medium flex items-center justify-center gap-2">
            <span>For your special day</span>
            <TulipFlower size={18} color="#facc15" />
          </h2>
        </motion.div>

        {/* Interactive Envelope / Letter Area */}
        <div className="relative w-full">
          {!isOpen ? (
            /* CLOSED ENVELOPE */
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpenEnvelope}
              className="cursor-pointer relative w-full bg-[#fdfaf6] border border-[#8a756b]/20 rounded-2xl p-7 shadow-[0_10px_30px_rgba(67,50,41,0.08)] flex flex-col items-center text-center transition-all duration-300 hover:border-[#facc15]/50"
            >
              {/* Top Washi Tape - Yellow Accent */}
              <div className="washi-tape yellow" />

              {/* Stamp & Address Header */}
              <div className="w-full flex items-center justify-between border-b border-[#8a756b]/15 pb-4 mb-6">
                <div className="text-left">
                  <span className="text-[11px] text-[#9e8f86] uppercase tracking-wider block">To:</span>
                  <span className="font-serif text-base text-[#382c26] font-medium">Ân~san</span>
                </div>
                <div className="stamp-box bg-[#fefce8] border-[#eab308]/40 flex flex-col items-center justify-center p-1">
                  <TulipFlower size={16} color="#eab308" />
                  <span className="text-[9px] text-[#854d0e] font-mono leading-none mt-0.5">2026</span>
                </div>
              </div>

              {/* Envelope Center Graphic */}
              <div className="my-6 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#fef08a]/60 to-[#f6eee3] flex items-center justify-center text-[#a35d52] mb-3 shadow-inner">
                  <Mail size={24} strokeWidth={1.5} className="text-[#8c4c40]" />
                </div>
                <p className="text-xs text-[#796a62] font-serif italic">
                  Tap to open your birthday card 🌷
                </p>
              </div>

              {/* Wax Seal / Open Button */}
              <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fef08a]/50 border border-[#facc15]/50 text-[#713f12] text-xs font-medium shadow-2xs">
                <Sparkles size={13} className="text-[#eab308]" />
                <span>Open card</span>
              </div>
            </motion.div>
          ) : (
            /* OPENED CARD */
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full bg-[#ffffff] border border-[#8a756b]/20 rounded-2xl p-7 sm:p-8 shadow-[0_12px_36px_rgba(67,50,41,0.09)] text-[#382c26]"
            >
              {/* Top Washi Tape */}
              <div className="washi-tape yellow" />

              {/* Small Birthday Header Icon */}
              <div className="flex items-center justify-between border-b border-[#8a756b]/10 pb-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <TulipFlower size={14} color="#eab308" />
                  <span className="text-xs font-serif italic text-[#9e8f86]">a little note for you</span>
                </div>
                <span className="text-sm text-[#a35d52] font-handwriting">♡</span>
              </div>

              {/* Greeting */}
              <h3 className="font-serif text-2xl text-[#382c26] font-medium mb-5">
                Happy Birthday, <span className="text-[#a35d52] italic font-normal">Ân~san.</span>
              </h3>

              {/* Heartfelt Birthday Message */}
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-[#433630] font-normal mb-8">
                <p>I hope today is a good day for you.</p>
                <p>I hope you smile a lot.</p>
                <p>
                  And I hope this new year of your life brings you many good things.
                </p>
              </div>

              {/* Vietnamese Sentiment Accent with Yellow Glow */}
              <div className="bg-gradient-to-r from-[#fefce8] via-[#fdfaf6] to-[#fef9c3]/70 border border-[#fef08a] rounded-xl p-4 text-center mb-8 shadow-xs">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <TulipFlower size={14} color="#facc15" />
                  <p className="text-base sm:text-lg font-serif text-[#a35d52] font-medium">
                    Chúc bạn hạnh phúc nhé ♡
                  </p>
                  <TulipFlower size={14} color="#facc15" />
                </div>
                <span className="text-xs text-[#796a62] italic">
                  Wishing you happiness.
                </span>
              </div>

              {/* Transition to next section */}
              <div className="text-center pt-2">
                <button
                  onClick={() => {
                    ambientAudio.playPaperSound();
                    onNext();
                  }}
                  className="btn-warm text-xs sm:text-sm font-medium w-full py-3"
                >
                  <span>There's something else...</span>
                  <ChevronDown size={15} className="text-[#a35d52]" />
                </button>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
