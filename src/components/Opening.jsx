import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ambientAudio } from '../utils/audio';
import { Sparkles, Heart } from 'lucide-react';
import { TulipFlower, TulipBouquet } from './TulipIcons';

export default function Opening({ onOpen }) {
  const [imageError, setImageError] = useState(false);

  const handleOpenClick = () => {
    ambientAudio.playPaperSound();
    onOpen();
  };

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center select-none overflow-hidden">
      
      {/* 1. Floating Keepsake Frame: Top-Left */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-8, -4, -8]
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-4 sm:top-10 md:top-12 left-2 sm:left-6 md:left-12 lg:left-20 z-10"
      >
        <div className="relative group cursor-pointer">
          {/* Tilted washi tape */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-3.5 sm:h-4 bg-[#fde047]/95 shadow-2xs z-20"
            style={{
              clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
              transform: 'translateX(-50%) rotate(-6deg)'
            }}
          />
          {/* Photo Frame */}
          <div className="bg-white/95 backdrop-blur-xs p-1.5 sm:p-2 pb-2.5 sm:pb-3.5 rounded-xl border border-[#eab308]/40 shadow-[0_10px_24px_rgba(67,50,41,0.12)] transition-transform duration-300 group-hover:scale-108 group-hover:rotate-0 group-hover:shadow-[0_14px_30px_rgba(234,179,8,0.25)]">
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 aspect-square rounded-lg overflow-hidden bg-[#fefce8] border border-[#8a756b]/15 relative">
              <img
                src="./assets/opening-photo2.jpeg"
                alt="Memory Top Left"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="mt-1 flex items-center justify-between px-0.5">
              <span className="text-[9px] font-mono text-[#9e8f86]">#01</span>
              <span className="text-[10px] font-handwriting text-[#a35d52]">Ân~san ♡</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Floating Keepsake Frame: Top-Right */}
      <motion.div
        animate={{
          y: [7, -9, 7],
          rotate: [8, 12, 8]
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
        className="absolute top-5 sm:top-12 md:top-14 right-2 sm:right-6 md:right-12 lg:right-20 z-10"
      >
        <div className="relative group cursor-pointer">
          {/* Tilted washi tape */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-3.5 sm:h-4 bg-[#fef08a]/95 shadow-2xs z-20"
            style={{
              clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
              transform: 'translateX(-50%) rotate(5deg)'
            }}
          />
          {/* Photo Frame */}
          <div className="bg-white/95 backdrop-blur-xs p-1.5 sm:p-2 pb-2.5 sm:pb-3.5 rounded-xl border border-[#eab308]/40 shadow-[0_10px_24px_rgba(67,50,41,0.12)] transition-transform duration-300 group-hover:scale-108 group-hover:rotate-0 group-hover:shadow-[0_14px_30px_rgba(234,179,8,0.25)]">
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 aspect-square rounded-lg overflow-hidden bg-[#fefce8] border border-[#8a756b]/15 relative">
              <img
                src="./assets/opening-photo3.jpeg"
                alt="Memory Top Right"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="mt-1 flex items-center justify-between px-0.5">
              <span className="text-[9px] font-mono text-[#9e8f86]">#02</span>
              <TulipFlower size={10} color="#eab308" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Floating Keepsake Frame: Bottom-Left */}
      <motion.div
        animate={{
          y: [-7, 8, -7],
          rotate: [6, 10, 6]
        }}
        transition={{
          duration: 6.0,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6
        }}
        className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-2 sm:left-6 md:left-12 lg:left-22 z-10"
      >
        <div className="relative group cursor-pointer">
          {/* Tilted washi tape */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-3.5 sm:h-4 bg-[#fde047]/90 shadow-2xs z-20"
            style={{
              clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
              transform: 'translateX(-50%) rotate(4deg)'
            }}
          />
          {/* Photo Frame */}
          <div className="bg-white/95 backdrop-blur-xs p-1.5 sm:p-2 pb-2.5 sm:pb-3.5 rounded-xl border border-[#eab308]/40 shadow-[0_10px_24px_rgba(67,50,41,0.12)] transition-transform duration-300 group-hover:scale-108 group-hover:rotate-0 group-hover:shadow-[0_14px_30px_rgba(234,179,8,0.25)]">
            <div className="w-16 h-16 sm:w-22 sm:h-22 md:w-26 md:h-26 aspect-square rounded-lg overflow-hidden bg-[#fefce8] border border-[#8a756b]/15 relative">
              <img
                src="./assets/opening-photo4.jpeg"
                alt="Memory Bottom Left"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="mt-1 flex items-center justify-between px-0.5">
              <span className="text-[9px] font-mono text-[#9e8f86]">#03</span>
              <span className="text-[10px] font-handwriting text-[#a35d52]">memory ✧</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Floating Keepsake Frame: Bottom-Right */}
      <motion.div
        animate={{
          y: [8, -7, 8],
          rotate: [-9, -5, -9]
        }}
        transition={{
          duration: 6.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.9
        }}
        className="absolute bottom-12 sm:bottom-18 md:bottom-22 right-2 sm:right-6 md:right-12 lg:right-22 z-10"
      >
        <div className="relative group cursor-pointer">
          {/* Tilted washi tape */}
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-3.5 sm:h-4 bg-[#fef08a]/95 shadow-2xs z-20"
            style={{
              clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
              transform: 'translateX(-50%) rotate(-4deg)'
            }}
          />
          {/* Photo Frame */}
          <div className="bg-white/95 backdrop-blur-xs p-1.5 sm:p-2 pb-2.5 sm:pb-3.5 rounded-xl border border-[#eab308]/40 shadow-[0_10px_24px_rgba(67,50,41,0.12)] transition-transform duration-300 group-hover:scale-108 group-hover:rotate-0 group-hover:shadow-[0_14px_30px_rgba(234,179,8,0.25)]">
            <div className="w-16 h-16 sm:w-22 sm:h-22 md:w-26 md:h-26 aspect-square rounded-lg overflow-hidden bg-[#fefce8] border border-[#8a756b]/15 relative">
              <img
                src="./assets/bottomright.jpeg"
                alt="Memory Bottom Right"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="mt-1 flex items-center justify-between px-0.5">
              <span className="text-[9px] font-mono text-[#9e8f86]">#04</span>
              <TulipFlower size={10} color="#eab308" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Center Main Stage Content */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [-1, 1, -1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center relative z-20"
      >
        {/* Main Center Framed Keepsake Portrait - Square & Tilted with Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 cursor-pointer group"
          style={{ transform: 'rotate(-2.5deg)' }}
        >
          {/* Top washi tape */}
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 sm:h-5 bg-[#fde047]/95 shadow-xs z-20"
            style={{
              clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
              transform: 'translateX(-50%) rotate(1.5deg)'
            }}
          />

          {/* Square Keepsake Photo Frame */}
          <div className="bg-[#ffffff] p-2 sm:p-2.5 pb-4 sm:pb-5 rounded-2xl border-2 border-[#eab308]/60 shadow-[0_12px_36px_rgba(234,179,8,0.22)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 aspect-square rounded-xl bg-gradient-to-tr from-[#fef08a]/40 via-[#ffffff] to-[#fde047]/30 border border-[#8a756b]/20 overflow-hidden flex items-center justify-center">
              {!imageError ? (
                <img
                  src="./assets/opening-photo.jpeg"
                  alt="Ân~san"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  style={{ imageRendering: 'auto' }}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-xl bg-gradient-to-tr from-[#fef08a]/80 via-[#fefdfa] to-[#f4d3ce]/60 flex items-center justify-center">
                  <TulipFlower size={44} color="#eab308" />
                </div>
              )}
            </div>
            {/* Frame Caption Tag */}
            <div className="mt-2 flex items-center justify-between px-1">
              <span className="text-[10px] font-mono text-[#9e8f86] tracking-wider uppercase">Portrait</span>
              <span className="text-xs font-handwriting text-[#a35d52]">Ân~san ♡</span>
            </div>
          </div>

          <span className="absolute -bottom-2 -right-2 text-xs sm:text-sm px-3 py-1 rounded-full bg-[#fefce8] border border-[#fde047] text-[#713f12] font-handwriting shadow-xs flex items-center gap-1.5 z-20">
            <TulipFlower size={14} color="#eab308" />
            <span>for you ♡</span>
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl sm:text-4xl text-[#382c26] tracking-normal font-medium mb-3 leading-snug"
        >
          Happy Birthday, <br className="sm:hidden" />
          <span className="italic font-normal text-[#a35d52]">Ân~san</span>{' '}
          <span className="inline-block align-middle transform -rotate-12 translate-y-[-2px]">
            <TulipFlower size={20} color="#facc15" />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#796a62] text-sm sm:text-base font-light mb-8 max-w-xs font-serif italic tracking-wide"
        >
          Hope you are doing well
        </motion.p>

        {/* Animated Open Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={handleOpenClick}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#ffffff] via-[#fffdf5] to-[#fefce8] border border-[#facc15]/50 text-[#382c26] shadow-[0_4px_20px_rgba(234,179,8,0.15)] hover:shadow-[0_8px_25px_rgba(234,179,8,0.25)] hover:border-[#eab308]/60 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] text-sm sm:text-base font-medium"
          >
            <span>Open it</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#b45309]">
              →
            </span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fde047] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#facc15]"></span>
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Gentle bottom hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-[#9e8f86] font-light flex items-center gap-1.5"
      >
        <span>scroll down anytime</span>
        <span>↓</span>
      </motion.div>
    </section>
  );
}

