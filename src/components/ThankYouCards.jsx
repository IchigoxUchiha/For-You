import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ambientAudio } from '../utils/audio';
import { Sparkles, RotateCw, Heart, MessageSquare, Coffee, Smile, Compass, Gamepad2 } from 'lucide-react';
import { TulipFlower } from './TulipIcons';

const cardsData = [
  {
    id: 1,
    tag: "01",
    icon: Gamepad2,
    title: "The day we met in the game.",
    short: "Completely unexpected, but started our journey...",
    content: "I still think about the day we met in that game. It was completely unexpected, but that random encounter became the beginning of our entire journey together.",
    tapeColor: "bg-[#fde047]/90",
    washiRotate: "-1.2deg"
  },
  {
    id: 2,
    tag: "02",
    icon: Smile,
    title: "Thank you for the laughs.",
    short: "The silly conversations & random moments...",
    content: "I still remember all the stupid conversations and random moments that somehow became my favorite memories.",
    tapeColor: "bg-[#fef08a]/90",
    washiRotate: "1.5deg"
  },
  {
    id: 3,
    tag: "03",
    icon: MessageSquare,
    title: "Thank you for the little things.",
    short: "Checking in, tiny jokes & everyday talks...",
    content: "The small messages, checking on each other, random talks, jokes... they meant more to me than I probably said.",
    tapeColor: "bg-[#e7ddf2]/90",
    washiRotate: "-1.5deg"
  },
  {
    id: 4,
    tag: "04",
    icon: Coffee,
    title: "Thank you for being there.",
    short: "Through good days, bad days & in between...",
    content: "There were good days, bad days, and everything in between. I'm grateful that we got to share those moments.",
    tapeColor: "bg-[#dde8dd]/90",
    washiRotate: "1.2deg"
  },
  {
    id: 5,
    tag: "05",
    icon: Compass,
    title: "For the memories.",
    short: "Keeping the gentle and good parts...",
    content: "Even though things didn't end the way we wanted, I don't want to forget the good parts.",
    tapeColor: "bg-[#f9ded0]/90",
    washiRotate: "-1.8deg"
  },
  {
    id: 6,
    tag: "06",
    icon: Heart,
    title: "Just... thank you.",
    short: "From the bottom of my heart...",
    content: "Cảm ơn, Ân~san. Thank you for every memory from that very first day until now.",
    subtext: "Thank you, Ân~san.",
    tapeColor: "bg-[#fde047]/90",
    washiRotate: "-0.5deg"
  }
];

export default function ThankYouCards() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    ambientAudio.playPaperSound();
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="thankyou-section" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-[370px] sm:max-w-md mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-[#382c26] font-medium mb-1.5 flex items-center justify-center gap-2">
            <span>Before I say goodbye...</span>
            <TulipFlower size={20} color="#facc15" />
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#796a62]">
            I just want to say thank you.
          </p>
          <p className="text-[11px] text-[#9e8f86] mt-2 flex items-center justify-center gap-1">
            <span>(tap any card to flip)</span>
          </p>
        </motion.div>

        {/* Cards Stack / Grid */}
        <div className="w-full flex flex-col gap-4">
          {cardsData.map((card, index) => {
            const isFlipped = !!flipped[card.id];
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => toggleFlip(card.id)}
                className="perspective-1000 w-full cursor-pointer select-none"
              >
                <div
                  className={`relative w-full rounded-2xl transition-all duration-500 transform-style-preserve-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{ minHeight: '124px' }}
                >
                  {/* FRONT OF CARD */}
                  <div className="absolute inset-0 backface-hidden bg-[#ffffff] border border-[#8a756b]/18 rounded-2xl p-5 shadow-[0_4px_16px_rgba(67,50,41,0.05)] flex flex-col justify-between hover:border-[#facc15]/50 transition-colors">
                    {/* Washi Tape Strip */}
                    <div
                      className={`absolute -top-2.5 left-8 w-14 h-5 ${card.tapeColor} shadow-xs`}
                      style={{
                        transform: `rotate(${card.washiRotate})`,
                        clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)'
                      }}
                    />

                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-[#fefce8] border border-[#fef08a] flex items-center justify-center text-[#a35d52]">
                          {card.id === 5 ? <TulipFlower size={14} color="#eab308" /> : <Icon size={14} />}
                        </div>
                        <h3 className="font-serif text-base text-[#382c26] font-medium">
                          {card.title}
                        </h3>
                      </div>
                      <span className="text-[10px] text-[#9e8f86] font-mono font-medium">
                        {card.tag}
                      </span>
                    </div>

                    <div className="flex items-end justify-between mt-3 pt-2 border-t border-[#8a756b]/10">
                      <p className="text-xs text-[#796a62] italic font-serif truncate pr-2">
                        {card.short}
                      </p>
                      <span className="text-[11px] text-[#a35d52] font-medium flex items-center gap-1 shrink-0">
                        <span>read</span>
                        <RotateCw size={10} />
                      </span>
                    </div>
                  </div>

                  {/* BACK OF CARD (REVEALED) */}
                  <div className="inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#fffdfa] to-[#fefce8] border border-[#fde047]/60 rounded-2xl p-5 shadow-[0_6px_20px_rgba(234,179,8,0.12)] flex flex-col justify-center min-h-[124px]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#a35d52] font-medium flex items-center gap-1">
                        {card.title}
                        {card.id === 5 && <TulipFlower size={12} color="#eab308" />}
                      </span>
                      <span className="text-[10px] text-[#9e8f86] flex items-center gap-1">
                        <RotateCw size={9} /> flip back
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] leading-relaxed text-[#382c26] font-normal">
                      {card.content}
                    </p>

                    {card.subtext && (
                      <span className="text-[11px] text-[#796a62] italic mt-1.5 block">
                        {card.subtext}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
