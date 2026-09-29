import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Sparkles } from 'lucide-react';
import { TulipFlower, TulipBouquet } from './TulipIcons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const lineVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function FutureWishes() {
  return (
    <section id="wishes-section" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-4 py-20">

      {/* Gentle sunrise gradient container */}
      <div className="w-full max-w-[370px] sm:max-w-md mx-auto flex flex-col items-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-7"
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-[#382c26] font-medium flex items-center justify-center gap-2">
            <span>For your future...</span>
            <TulipFlower size={20} color="#facc15" />
          </h2>
        </motion.div>

        {/* Wishes Card with warm yellow & sunrise glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-gradient-to-b from-[#fffef5] via-[#ffffff] to-[#faf5ea] border border-[#fef08a] rounded-2xl p-7 sm:p-8 shadow-[0_12px_36px_rgba(253,224,71,0.18)] text-[#382c26]"
        >
          {/* Top Washi Tape */}
          <div className="washi-tape yellow" />

          {/* Gentle Sun & Tulip Emblem */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.div variants={lineVariants} className="flex items-center justify-between border-b border-[#8a756b]/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#fef9c3] border border-[#fef08a] flex items-center justify-center text-[#d97706]">
                  <Sun size={15} />
                </div>
                <span className="text-xs font-serif italic text-[#796a62]">
                  quiet wishes for what comes next
                </span>
              </div>
              <TulipFlower size={16} color="#eab308" />
            </motion.div>

            {/* Sincere, short sentences - Line by line animation */}
            <div className="space-y-3.5 text-sm sm:text-[14.5px] leading-relaxed text-[#433630] font-normal">
              <motion.p variants={lineVariants}>I hope you do well.</motion.p>
              <motion.p variants={lineVariants}>Till now you must have finished Naruto Shonen and already started with Shippuden ...Hope you are enjoying it.  🍥 Dattebayo-</motion.p>

              <motion.p variants={lineVariants}>I hope you get everything you're working for.(Your dream physique included 😄..I think you already have the body you wanted by now )</motion.p>
              <motion.p variants={lineVariants}>I hope you meet good people.</motion.p>
              <motion.p variants={lineVariants}>Keep smiling.</motion.p>
              <motion.p variants={lineVariants}>I hope you travel, learn new things, and make many more memories.</motion.p>
              <motion.p variants={lineVariants} className="font-medium text-[#382c26]">
                And most of all, I hope you're happy.
              </motion.p>
              <motion.p variants={lineVariants} className="text-xs sm:text-[13px] text-[#796a62] italic pt-2">
                Even if I'm not part of that future, I genuinely wish good things for you.
              </motion.p>
            </div>

            {/* Vietnamese Sentiment */}
            <motion.div variants={lineVariants} className="mt-8 pt-5 border-t border-[#8a756b]/15 bg-gradient-to-r from-[#fefce8] via-[#fbf5ee] to-[#fefce8] rounded-xl p-4 text-center border border-[#fef08a]/60">
              <div className="flex items-center justify-center gap-1.5 mb-0.5">
                <TulipFlower size={15} color="#facc15" />
                <p className="font-serif text-lg sm:text-xl text-[#a35d52] font-medium">
                  Chúc may mắn, <span className="italic font-normal">Ân~san.</span>
                </p>
                <TulipFlower size={15} color="#facc15" />
              </div>
              <span className="text-xs text-[#9e8f86] italic">
                Good luck.
              </span>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
