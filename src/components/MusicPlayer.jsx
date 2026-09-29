import React, { useState } from 'react';
import { ambientAudio } from '../utils/audio';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const state = ambientAudio.toggle();
    setIsPlaying(state);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 hover:bg-white border border-[#fde047]/60 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 text-[#433630] text-xs md:text-sm font-medium"
        style={{
          boxShadow: isPlaying ? '0 0 16px rgba(253, 224, 71, 0.5), 0 2px 8px rgba(0, 0, 0, 0.04)' : '0 2px 8px rgba(0, 0, 0, 0.04)'
        }}
      >
        <span className={`inline-block transition-transform duration-700 ${isPlaying ? 'animate-pulse text-[#d97706]' : 'text-[#796a62]'}`}>
          {isPlaying ? <Volume2 size={15} /> : <Music size={15} />}
        </span>
        <span className="font-serif italic tracking-wide text-xs">
          {isPlaying ? '♪ Pause' : '♪ Music'}
        </span>
        {isPlaying && (
          <span className="flex gap-0.5 items-end h-3 ml-0.5">
            <span className="w-0.5 bg-[#f59e0b] animate-[bounce_1s_infinite_100ms] h-2.5 rounded-full" />
            <span className="w-0.5 bg-[#eab308] animate-[bounce_1s_infinite_300ms] h-3 rounded-full" />
            <span className="w-0.5 bg-[#f59e0b] animate-[bounce_1s_infinite_200ms] h-2 rounded-full" />
          </span>
        )}
      </button>
    </div>
  );
}
