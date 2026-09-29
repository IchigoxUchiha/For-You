import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ambientAudio } from '../utils/audio';
import { Gamepad2, PhoneCall, Moon, Laugh, Sparkles, Heart, Compass, Image as ImageIcon, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { TulipFlower } from './TulipIcons';

const memories = [
  {
    id: 1,
    title: "Our Gaming Nights",
    desc: "Meeting in the game completely out of nowhere, where our unexpected story and journey first began.",
    imagePath: "/assets/memories/memory1.jpg",
    hasCustomImage: true,
    icon: Gamepad2,
    color: "from-[#fef08a]/50 via-[#fffdf5] to-[#fdfaf6]",
    tapeColor: "bg-[#fde047]/85"
  },
  {
    id: 2,
    title: "Late night talks",
    desc: "When it was too late to be awake, but neither of us wanted to hang up.",
    imagePath: "/assets/memories/memory2.jpg",
    hasCustomImage: true,
    icon: Moon,
    color: "from-[#e7ddf2]/50 to-[#fdfaf6]",
    tapeColor: "bg-[#e7ddf2]/85"
  },
  {
    id: 3,
    title: "Stupid jokes",
    desc: "Things that probably weren't even that funny, but we couldn't stop laughing.",
    imagePath: "/assets/memories/memory3.jpg",
    hasCustomImage: true,
    icon: Laugh,
    color: "from-[#fef9c3]/60 via-[#fdfaf6] to-[#fef08a]/40",
    tapeColor: "bg-[#fef08a]/90"
  },
  {
    id: 4,
    title: "Arguments that became laughs",
    desc: "How we would get stubborn over small things and end up laughing at ourselves.",
    imagePath: "/assets/memories/memory4.jpg",
    hasCustomImage: true,
    icon: Sparkles,
    color: "from-[#dde8dd]/50 to-[#fdfaf6]",
    tapeColor: "bg-[#dde8dd]/85"
  },
  {
    id: 5,
    title: "Things only we understood",
    desc: "Inside jokes, nicknames, and things we didn't have to explain.",
    imagePath: "/assets/memories/memory5.jpg",
    hasCustomImage: true,
    icon: Compass,
    color: "from-[#fef08a]/50 via-[#fdfaf6] to-[#e7ddf2]/40",
    tapeColor: "bg-[#fde047]/85"
  },
  {
    id: 6,
    title: "Those days I'll remember",
    desc: "I'm glad those days were part of my life.",
    imagePath: "/assets/memories/memory7.jpg",
    hasCustomImage: true,
    icon: Sparkles,
    color: "from-[#f9ded0]/50 to-[#fdfaf6]",
    tapeColor: "bg-[#fef08a]/90"
  }
];

export default function MemoryGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToIndex = (index) => {
    if (index < 0 || index >= memories.length) return;
    setCurrentIndex(index);
    ambientAudio.playPaperSound();
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * (cardWidth * 0.85 + 16),
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < memories.length) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const handleCardClick = (item) => {
    if (item.hasCustomImage || item.imagePath) {
      ambientAudio.playPaperSound();
      setSelectedImage(item);
    }
  };

  return (
    <section id="memories-section" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center py-20 overflow-hidden">

      {/* Section Header */}
      <div className="w-full max-w-[370px] sm:max-w-md mx-auto px-4 text-center mb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-[#382c26] font-medium mb-1 flex items-center justify-center gap-2">
            <span>The Good Parts</span>
            <TulipFlower size={20} color="#facc15" />
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-[#796a62]">
            Swipe through the little keepsakes
          </p>
        </motion.div>
      </div>

      {/* Swipeable Carousel Container */}
      <div className="w-full max-w-lg relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 py-4 no-scrollbar scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {memories.map((item, idx) => {
            const Icon = item.icon;
            const isCustomImg = item.hasCustomImage;
            return (
              <div
                key={item.id}
                className="snap-center shrink-0 w-[270px] sm:w-[300px] flex flex-col"
              >
                {/* Polaroid Frame */}
                <div className="bg-[#ffffff] border border-[#8a756b]/20 rounded-2xl p-4 shadow-[0_8px_24px_rgba(67,50,41,0.06)] flex flex-col justify-between h-[360px] relative transition-all duration-300 hover:shadow-[0_12px_28px_rgba(234,179,8,0.14)]">

                  {/* Top Tape */}
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 ${item.tapeColor || 'bg-[#fde047]/80'} shadow-xs z-20`}
                    style={{
                      clipPath: 'polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)',
                      transform: idx % 2 === 0 ? 'translateX(-50%) rotate(-1deg)' : 'translateX(-50%) rotate(1.5deg)'
                    }}
                  />

                  {/* Photo Slot / Placeholder with Background Image */}
                  <div
                    onClick={() => isCustomImg && handleCardClick(item)}
                    className={`relative w-full h-[200px] rounded-xl bg-gradient-to-b ${item.color} border border-[#8a756b]/15 overflow-hidden flex flex-col items-center justify-center p-4 text-center group ${isCustomImg ? 'cursor-pointer hover:border-[#facc15]/80' : ''}`}
                  >

                    {/* Custom Background Photo */}
                    {isCustomImg && (
                      <>
                        <img
                          src={item.imagePath}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        {/* Soft overlay so text remains readable */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25 group-hover:from-black/65 group-hover:via-black/30 transition-colors duration-300" />
                        
                        {/* Hover hint badge */}
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-xs text-[10px] text-white/90 flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all">
                          <Maximize2 size={10} />
                          <span>view</span>
                        </div>
                      </>
                    )}

                    {/* Content / Graphic Overlay */}
                    <div className={`relative z-10 flex flex-col items-center justify-center ${isCustomImg ? 'text-white' : 'text-[#796a62]'}`}>
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-2 shadow-xs transition-transform duration-300 group-hover:scale-110 ${isCustomImg ? 'bg-white/25 backdrop-blur-md border border-white/40 text-white' : 'bg-white/80 border border-[#8a756b]/15 text-[#a35d52]'}`}>
                        <Icon size={20} strokeWidth={1.6} />
                      </div>
                      <span className={`font-serif text-sm font-medium ${isCustomImg ? 'text-white drop-shadow-sm font-semibold' : 'text-[#382c26]'}`}>
                        {item.title}
                      </span>
                      <span className={`text-[10px] mt-1 font-mono tracking-wide ${isCustomImg ? 'text-white/85 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs border border-white/20' : 'text-[#9e8f86]'}`}>
                        [ Memory #{item.id} ]
                      </span>
                    </div>
                  </div>

                  {/* Polaroid Bottom Note */}
                  <div className="pt-3 pb-1 flex flex-col justify-between flex-1">
                    <p className="text-xs sm:text-[13px] text-[#433630] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#8a756b]/10 mt-2">
                      <span className="text-[10px] text-[#9e8f86] font-mono">
                        0{item.id} / 0{memories.length}
                      </span>
                      <span className="text-[11px] font-handwriting text-[#a35d52]">
                        Ân~san ♡
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Dots & Controls */}
        <div className="flex items-center justify-center gap-3 mt-4 px-4">
          <button
            onClick={() => scrollToIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label="Previous memory"
            className="w-8 h-8 rounded-full bg-white border border-[#8a756b]/20 flex items-center justify-center text-[#433630] disabled:opacity-30 disabled:cursor-not-allowed shadow-xs active:scale-95"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-1.5 items-center">
            {memories.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${currentIndex === i
                    ? 'w-5 h-1.5 bg-[#a35d52]'
                    : 'w-1.5 h-1.5 bg-[#8a756b]/30'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToIndex(currentIndex + 1)}
            disabled={currentIndex === memories.length - 1}
            aria-label="Next memory"
            className="w-8 h-8 rounded-full bg-white border border-[#8a756b]/20 flex items-center justify-center text-[#433630] disabled:opacity-30 disabled:cursor-not-allowed shadow-xs active:scale-95"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Original Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#1e1916] border border-[#fef08a]/30 rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-col items-center cursor-default overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md"
                aria-label="Close photo"
              >
                <X size={18} />
              </button>

              {/* Original Full Resolution Image */}
              <div className="w-full max-h-[72vh] rounded-xl overflow-hidden flex items-center justify-center bg-black/40 border border-white/10">
                <img
                  src={selectedImage.imagePath}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[72vh] object-contain rounded-lg"
                />
              </div>

              {/* Photo Caption / Details */}
              <div className="w-full mt-3 px-2 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-[#fef9c3] font-medium flex items-center gap-2">
                    <span>{selectedImage.title}</span>
                    <TulipFlower size={15} color="#facc15" />
                  </h4>
                  <p className="text-xs sm:text-sm text-[#d6c7be] mt-0.5 font-light">
                    {selectedImage.desc}
                  </p>
                </div>
                <span className="text-[11px] font-handwriting text-[#fef08a] shrink-0 pl-3">
                  Ân~san & Nihar ♡
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

