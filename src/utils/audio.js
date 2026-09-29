// Audio Engine for Ân~san's website
// Plays custom /assets/music/song.mp3 if present, or synthesizes a peaceful, soft acoustic ambient piano/chime progression

class AmbientAudioPlayer {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.isSynthesizing = false;
    this.htmlAudio = null;
    this.loopTimer = null;
    this.currentStep = 0;
    this.gainNode = null;
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.35, this.audioCtx.currentTime);
      this.gainNode.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Soft note synthesis (gentle warm piano/bell sound)
  playNote(freq, startTime, duration = 2.4, velocity = 0.25) {
    if (!this.audioCtx) return;

    const now = startTime;
    const osc = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const noteGain = this.audioCtx.createGain();
    const filter = this.audioCtx.createBiquadFilter();

    // Gentle mellow warm sound
    osc.type = 'sine';
    osc2.type = 'triangle';

    osc.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 0.999, now); // slight detune for warmth

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + duration);

    // Envelope (soft attack, gentle decay)
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(velocity, now + 0.12);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + duration);
    osc2.stop(now + duration);
  }

  // Gentle chords (Cmaj7, Am9, Fmaj7, Em7, Gsus4)
  playProgression() {
    if (!this.isPlaying) return;

    const chords = [
      // Cmaj7 (C4, E4, G4, B4)
      [261.63, 329.63, 392.00, 493.88],
      // G/B (B3, D4, G4, D5)
      [246.94, 293.66, 392.00, 587.33],
      // Am7 (A3, C4, E4, G4)
      [220.00, 261.63, 329.63, 392.00],
      // Fmaj7 (F3, A3, C4, E4)
      [174.61, 220.00, 261.63, 329.63],
      // Em7 (E3, G3, B3, D4)
      [164.81, 196.00, 246.94, 293.66],
      // Dm9 (D3, F3, A3, C4, E4)
      [146.83, 174.61, 220.00, 261.63, 329.63],
      // Gsus4 -> G (G3, C4, D4, G4)
      [196.00, 261.63, 293.66, 392.00]
    ];

    const currentChord = chords[this.currentStep % chords.length];
    const now = this.audioCtx.currentTime;

    // Arpeggiate softly
    currentChord.forEach((freq, idx) => {
      this.playNote(freq, now + idx * 0.45, 3.2, 0.18 - idx * 0.02);
    });

    // Random soft high chime note for starry feel
    if (Math.random() > 0.3) {
      const highNotes = [523.25, 587.33, 659.25, 783.99, 880.00];
      const randomNote = highNotes[Math.floor(Math.random() * highNotes.length)];
      this.playNote(randomNote, now + 1.2 + Math.random() * 0.8, 3.5, 0.09);
    }

    this.currentStep++;
    this.loopTimer = setTimeout(() => {
      if (this.isPlaying && this.isSynthesizing) {
        this.playProgression();
      }
    }, 3800);
  }

  async play() {
    this.initAudio();
    this.isPlaying = true;

    // First, try loading /bday.mp3 or /assets/bday.mp3
    if (!this.htmlAudio) {
      this.htmlAudio = new Audio('/bday.mp3');
      this.htmlAudio.loop = true;
      this.htmlAudio.volume = 0.6;
    }

    try {
      await this.htmlAudio.play();
      this.isSynthesizing = false;
    } catch {
      // If blocked or fails, fall back to synthesized ambient tones
      this.isSynthesizing = true;
      this.playProgression();
    }
  }

  pause() {
    this.isPlaying = false;
    if (this.htmlAudio) {
      this.htmlAudio.pause();
    }
    if (this.loopTimer) {
      clearTimeout(this.loopTimer);
      this.loopTimer = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  // Soft subtle paper click / chime fx
  playPaperSound() {
    this.initAudio();
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    
    // Gentle high chime ping
    this.playNote(587.33, now, 1.2, 0.08); // D5
    this.playNote(880.00, now + 0.08, 1.5, 0.06); // A5
  }
}

export const ambientAudio = new AmbientAudioPlayer();
