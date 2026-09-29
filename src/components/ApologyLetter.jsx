import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      delayChildren: 0.4
    }
  }
};

const lineVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function ApologyLetter() {
  return (
    <section id="apology-section" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-4 py-20">
      
      {/* Soft moody backdrop container */}
      <div className="w-full max-w-[370px] sm:max-w-md mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-7"
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-[#382c26] font-medium">
            There's also something I need to say.
          </h2>
        </motion.div>

        {/* Apology Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-[#faf5ee] border border-[#8a756b]/25 rounded-2xl p-6 sm:p-8 shadow-[0_12px_32px_rgba(56,44,38,0.07)] text-[#382c26]"
        >
          {/* Subtle top tape */}
          <div className="washi-tape peach" />

          {/* Vietnamese Heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.div variants={lineVariants} className="border-b border-[#8a756b]/15 pb-4 mb-6">
              <h3 className="font-serif text-2xl text-[#a35d52] font-medium mb-0.5">
                Xin lỗi, <span className="italic font-normal">Ân~san.</span>
              </h3>
              <span className="text-xs text-[#8c7a70] italic">
                I am truly sorry.
              </span>
            </motion.div>

            {/* Letter Body - Line by line animation from top to bottom */}
            <div className="space-y-4 text-sm sm:text-[14.5px] leading-relaxed text-[#433630] font-normal">
              <motion.p variants={lineVariants}>
                I'm sorry for the things I did wrong.
              </motion.p>
              <motion.p variants={lineVariants}>
                I'm sorry for the times I hurt you, disappointed you, or made things harder than they needed to be.
              </motion.p>
              <motion.p variants={lineVariants}>
                I know saying sorry doesn't change what happened.
              </motion.p>
              <motion.p variants={lineVariants}>
                I also know I wasn't perfect.
              </motion.p>
              <motion.p variants={lineVariants}>
                There are things I wish I had handled differently, and I wish I had understood some things sooner.
              </motion.p>
              <motion.p variants={lineVariants}>
                I'm not saying this because I expect anything from you.
              </motion.p>
              <motion.p variants={lineVariants} className="font-medium text-[#382c26]">
                I just wanted you to know that I'm genuinely sorry.
              </motion.p>
            </div>

            {/* Handwritten post-it note attached */}
            <motion.div variants={lineVariants} className="mt-8 pt-4 border-t border-[#8a756b]/15 flex justify-end">
              <div className="sticky-note px-4 py-2 text-right">
                <span className="font-handwriting text-base sm:text-lg text-[#8c4c40] block font-semibold leading-tight">
                  "I really mean this."
                </span>
                <span className="text-[10px] text-[#9e8f86] font-mono">
                  — Nihar
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
