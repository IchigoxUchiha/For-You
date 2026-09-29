import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ambientAudio } from '../utils/audio';
import { Mail, Heart, Sparkles } from 'lucide-react';
import { TulipFlower, TulipBouquet } from './TulipIcons';

export default function FinalEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [tulipCount, setTulipCount] = useState(0);

  const handleOpen = () => {
    if (!isOpen) {
      ambientAudio.playPaperSound();
      setIsOpen(true);
    }
  };

  const handleTulipClick = () => {
    ambientAudio.playPaperSound();
    setTulipCount((prev) => prev + 1);
    try {
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.75 },
        colors: ['#fde047', '#facc15', '#fef08a', '#f4d3ce'],
        ticks: 150,
        gravity: 0.9,
        scalar: 0.8
      });
    } catch (e) { }
  };

  return (
    <section id="final-section" className="relative min-h-[90svh] w-full flex flex-col items-center justify-center px-4 py-20 pb-28">

      <div className="w-full max-w-[370px] sm:max-w-md mx-auto flex flex-col items-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-7"
        >
          <h2 className="font-serif text-2xl text-[#382c26] font-medium flex items-center justify-center gap-2">
            <span>One last message</span>
            <TulipFlower size={18} color="#facc15" />
          </h2>
        </motion.div>

        {/* Interactive Final Envelope */}
        <div className="relative w-full">
          {!isOpen ? (
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpen}
              className="cursor-pointer relative w-full bg-[#fdfaf6] border border-[#fef08a] rounded-2xl p-7 shadow-[0_8px_28px_rgba(234,179,8,0.1)] flex flex-col items-center text-center transition-all duration-300 hover:border-[#facc15]/60 hover:shadow-[0_12px_32px_rgba(234,179,8,0.2)]"
            >
              {/* Top Washi Tape */}
              <div className="washi-tape yellow" />

              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#fef08a]/60 to-[#f6eee3] flex items-center justify-center text-[#a35d52] my-4 shadow-inner">
                <Mail size={20} strokeWidth={1.5} className="text-[#8c4c40]" />
              </div>

              <span className="font-serif text-base text-[#382c26] font-medium mb-1">
                A quiet final note
              </span>
              <span className="text-xs text-[#796a62] italic font-serif mb-4">
                Tap to open 🌷
              </span>

              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#fefce8] border border-[#fde047] text-[#854d0e] text-xs font-medium shadow-2xs">
                <span>open</span>
                <span>→</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full bg-gradient-to-b from-[#ffffff] to-[#fffdf5] border border-[#fef08a] rounded-2xl p-8 shadow-[0_14px_40px_rgba(234,179,8,0.15)] text-center text-[#382c26]"
            >
              <div className="washi-tape yellow" />

              {/* Yellow Tulip Bouquet Centerpiece */}
              <div className="mb-4 flex flex-col items-center justify-center">
                <div className="p-2.5 rounded-full bg-[#fefce8] border border-[#fef08a] shadow-xs mb-2">
                  <TulipBouquet size={42} />
                </div>
                <span className="text-[11px] font-serif italic text-[#854d0e]">
                  yellow tulips for your happiness
                </span>
              </div>

              <p className="font-serif text-lg sm:text-xl text-[#382c26] font-medium mb-2 leading-relaxed">
                Thank you for reading this.
              </p>

              <p className="text-sm sm:text-base text-[#433630] font-normal mb-6 leading-relaxed">
                I hope you have a beautiful life ahead. ✨🩷
              </p>

              {/* Interactive Tulip Blossom Button */}
              <div className="mb-6">
                <button
                  onClick={handleTulipClick}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fefce8] hover:bg-[#fef9c3] border border-[#fde047] text-[#713f12] text-xs font-medium shadow-2xs transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <TulipFlower size={14} color="#eab308" />
                  <span>Tap for a tulip</span>
                  {tulipCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 bg-[#fde047] rounded-full text-[10px] font-mono font-bold">
                      +{tulipCount}
                    </span>
                  )}
                </button>
              </div>

              <div className="pt-4 border-t border-[#8a756b]/15">
                <p className="font-serif italic text-base sm:text-lg text-[#a35d52] font-medium mb-1">
                  Take care, Ân~san ♡
                </p>
                <span className="font-handwriting text-2xl text-[#8c4c40] font-semibold block mt-3">
                  — Your Baka
                </span>
              </div>

            </motion.div>
          )}
        </div>

        {/* Peaceful ending footer */}
        <div className="mt-14 text-center flex flex-col items-center gap-1.5">
          <TulipFlower size={16} color="#facc15" />
          <p className="text-[11px] text-[#9e8f86] font-light">

          </p>
        </div>

      </div>

    </section>
  );
}
