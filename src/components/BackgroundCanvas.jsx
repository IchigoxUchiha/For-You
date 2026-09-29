import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system (warm cream, soft blush, golden motes, yellow sunshine)
    const particleCount = Math.min(36, Math.floor((width * height) / 22000));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.4 + 0.8,
      alpha: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.08,
      pulse: Math.random() * Math.PI,
      pulseSpeed: Math.random() * 0.02 + 0.008,
      // Color palette includes warm yellow, golden butter, peach blush, lavender
      color: Math.random() > 0.6
        ? '253, 224, 71' // warm yellow
        : Math.random() > 0.4
        ? '254, 240, 138' // butter yellow
        : Math.random() > 0.2
        ? '244, 211, 206' // blush
        : '231, 221, 242' // lavender
    }));

    // Floating delicate yellow tulip petals
    const petalCount = Math.min(10, Math.max(4, Math.floor(width / 160)));
    const petals = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 6 + 5,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.015 + 0.005,
      speedY: Math.random() * 0.4 + 0.2,
      speedX: Math.random() * 0.2 + 0.05,
      alpha: Math.random() * 0.35 + 0.25,
      isYellow: Math.random() > 0.25
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle glowing motes
      particles.forEach((p) => {
        p.pulse += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.12;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(0.05, currentAlpha)})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around smoothly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
      });

      // Draw drifting soft tulip petals
      petals.forEach((pt) => {
        pt.sway += pt.swaySpeed;
        pt.rotation += pt.rotSpeed;
        pt.y += pt.speedY;
        pt.x += Math.sin(pt.sway) * 0.45 + pt.speedX;

        ctx.save();
        ctx.translate(pt.x, pt.y);
        ctx.rotate(pt.rotation);

        // Draw gentle tulip petal oval shape
        ctx.beginPath();
        ctx.ellipse(0, 0, pt.size * 0.55, pt.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = pt.isYellow
          ? `rgba(253, 224, 71, ${pt.alpha})` // sunshine yellow petal
          : `rgba(244, 211, 206, ${pt.alpha})`; // soft blush petal
        ctx.fill();

        // Delicate inner petal highlight
        ctx.beginPath();
        ctx.ellipse(0, -pt.size * 0.15, pt.size * 0.3, pt.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fillStyle = pt.isYellow
          ? `rgba(254, 249, 195, ${pt.alpha * 0.7})`
          : `rgba(255, 255, 255, ${pt.alpha * 0.5})`;
        ctx.fill();

        ctx.restore();

        // Reset petal if off screen
        if (pt.y > height + 20) {
          pt.y = -20;
          pt.x = Math.random() * width;
        }
        if (pt.x > width + 20) pt.x = -20;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
}
