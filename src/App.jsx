import React, { useRef, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Opening from './components/Opening';
import BirthdayCard from './components/BirthdayCard';
import ThankYouCards from './components/ThankYouCards';
import ApologyLetter from './components/ApologyLetter';
import MemoryGallery from './components/MemoryGallery';
import FutureWishes from './components/FutureWishes';
import GoodbyeLetter from './components/GoodbyeLetter';
import FinalEnvelope from './components/FinalEnvelope';

export default function App() {
  const birthdayRef = useRef(null);
  const thankYouRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize birthday audio
    const audio = new Audio('./bday.mp3');
    audio.loop = true;
    audio.volume = 0.65;
    audioRef.current = audio;

    let isPlaying = false;

    const startAudio = () => {
      if (isPlaying) return;
      audio.play()
        .then(() => {
          isPlaying = true;
          cleanupListeners();
        })
        .catch(() => {
          // Browser prevented autoplay before interaction; will wait for user tap/click/scroll
        });
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('pointerdown', startAudio);
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('keydown', startAudio);
    };

    // 1. Attempt autoplay immediately when website is opened
    startAudio();

    // 2. Attach listeners for the very first interaction in case browser restricts unmuted autoplay
    window.addEventListener('click', startAudio, { passive: true });
    window.addEventListener('touchstart', startAudio, { passive: true });
    window.addEventListener('pointerdown', startAudio, { passive: true });
    window.addEventListener('scroll', startAudio, { passive: true });
    window.addEventListener('keydown', startAudio, { passive: true });

    return () => {
      cleanupListeners();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const scrollToBirthday = () => {
    // Also ensure audio starts if not already started
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    }
    const el = document.getElementById('birthday-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToThankYou = () => {
    const el = document.getElementById('thankyou-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen w-full relative selection:bg-[#fef08a] selection:text-[#382c26]">
      {/* Background Ambience & Particles */}
      <BackgroundCanvas />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col w-full max-w-full overflow-x-hidden">
        {/* Section 1: Opening */}
        <Opening onOpen={scrollToBirthday} />

        {/* Section 2: Birthday Card */}
        <BirthdayCard onNext={scrollToThankYou} />

        {/* Section 3: "A Little Thank You" Keepsake Cards */}
        <ThankYouCards />

        {/* Section 4: Apology Letter */}
        <ApologyLetter />

        {/* Section 5: The Good Parts / Memory Gallery */}
        <MemoryGallery />

        {/* Section 6: Future Wishes */}
        <FutureWishes />

        {/* Section 7: The Main Goodbye Letter */}
        <GoodbyeLetter />

        {/* Section 8: Final Envelope */}
        <FinalEnvelope />
      </div>
    </main>
  );
}
