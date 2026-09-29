import React from 'react';
import { motion } from 'framer-motion';
import { TulipFlower } from './TulipIcons';

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

export default function GoodbyeLetter() {
  return (
    <section id="letter-section" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-4 py-20">
      
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
            <span>One last thing.</span>
            <TulipFlower size={20} color="#facc15" />
          </h2>
        </motion.div>

        {/* The Main Letter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-[#fefdfa] border border-[#8a756b]/25 rounded-2xl p-7 sm:p-9 shadow-[0_14px_40px_rgba(67,50,41,0.09)] text-[#382c26]"
        >
          {/* Top Washi Tape */}
          <div className="washi-tape yellow" />

          {/* Letter Salutation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.div variants={lineVariants} className="border-b border-[#8a756b]/15 pb-4 mb-6 flex items-center justify-between">
              <p className="font-serif text-lg text-[#382c26] font-medium">
                Happy birthday again, <span className="text-[#a35d52] italic font-normal">Ân~san.</span>
              </p>
              <TulipFlower size={16} color="#eab308" />
            </motion.div>

            {/* Sincere, Genuine Letter Body */}
            <div className="space-y-4 text-sm sm:text-[14.5px] leading-relaxed text-[#433630] font-normal">
              <motion.p variants={lineVariants}>
                I don't really know how to write something like this perfectly, so I'll just say it honestly.
              </motion.p>

              <motion.p variants={lineVariants}>
                I'm sorry for my mistakes. I'm sorry for the moments where I hurt you and for the things I could have done better.
              </motion.p>

              <motion.p variants={lineVariants}>
                At the same time, I don't want to remember our relationship only because of how it ended.
              </motion.p>

              <motion.div variants={lineVariants} className="bg-[#faf5ee] border-l-2 border-[#a35d52]/40 pl-4 py-2 my-2 space-y-1 text-[#382c26]">
                <p>We had good times too.</p>
                <p className="italic text-xs sm:text-[13px] text-[#796a62]">
                  We laughed. We talked about random things. We made memories. There were moments that genuinely made me happy.
                </p>
              </motion.div>

              <motion.p variants={lineVariants}>
                And I'm thankful for all of them.
              </motion.p>

              <motion.p variants={lineVariants}>
                Thank you for being a part of my life for the time that you were. I learned things from you. I changed because of you. And even though things didn't work out, I'll always appreciate the good memories we had.
              </motion.p>

              <motion.p variants={lineVariants}>
                I won't ask you to change your mind.
              </motion.p>

              <motion.p variants={lineVariants}>
                I won't ask you to come back.
              </motion.p>

              <motion.p variants={lineVariants}>
                I just hope that wherever life takes you, you're okay. I hope you're happy. I hope you achieve the things you want. And I hope you find people who treat you well and make you feel loved.
              </motion.p>

              <motion.p variants={lineVariants}>
                Maybe this is where our story ends.
              </motion.p>

              <motion.p variants={lineVariants} className="italic text-[#796a62]">
                And that's okay.
              </motion.p>

              <motion.div variants={lineVariants} className="pt-3 border-t border-[#8a756b]/15 space-y-1.5 font-medium text-[#382c26]">
                <p>So...</p>
                <p>
                  <span className="text-[#a35d52] font-serif">Cảm ơn</span> for everything.
                </p>
                <p>
                  <span className="text-[#a35d52] font-serif">Xin lỗi</span> for everything I did wrong.
                </p>
                <p className="pt-1">
                  And happy birthday, Ân~san.
                </p>
              </motion.div>

              <motion.p variants={lineVariants} className="pt-2 text-[#382c26] font-serif italic text-base">
                Take care of yourself, nhé.
              </motion.p>
            </div>

            {/* Signoff */}
            <motion.div variants={lineVariants} className="mt-8 pt-4 border-t border-[#8a756b]/15 flex items-center justify-between">
              <span className="font-serif italic text-base text-[#796a62]">
                Goodbye.
              </span>
              <span className="font-handwriting text-2xl text-[#8c4c40] font-semibold">
                — Nihar
              </span>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
