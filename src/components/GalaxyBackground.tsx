import React, { useEffect, useRef } from 'react';

interface GalaxyBackgroundProps {
  interactive?: boolean;
  density?: number;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  vx: number;
  vy: number;
  hue: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export const GalaxyBackground: React.FC<GalaxyBackgroundProps> = ({
  interactive = true,
  density = 75,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const particles: Particle[] = [];
    const count = Math.min(density, Math.floor((width * height) / 14000));

    // Colors: subtle starlight, cyan, emerald tint, celestial violet
    const hues = [160, 185, 210, 260];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.6 + 0.2,
        alpha: Math.random() * 0.6 + 0.2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        hue: hues[Math.floor(Math.random() * hues.length)],
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    let time = 0;
    const render = () => {
      time += 0.01;
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      ctx.clearRect(0, 0, width, height);

      // Render nebula stardust
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Twinkle calculation
        p.twinklePhase += p.twinkleSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.twinklePhase) * 0.25;
        p.alpha = Math.max(0.08, Math.min(0.9, p.alpha));

        // Subtle mouse parallax effect
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let offsetX = 0;
        let offsetY = 0;
        if (dist < 260) {
          const force = (1 - dist / 260) * 8;
          offsetX = (dx / dist) * force;
          offsetY = (dy / dist) * force;
        }

        ctx.beginPath();
        ctx.arc(p.x + offsetX, p.y + offsetY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 75%, ${p.alpha})`;
        ctx.shadowBlur = p.size > 1.2 ? 6 : 0;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, 0.5)`;
        ctx.fill();

        // Constellation linkage for closest neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distLinks = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distLinks < 75) {
            ctx.beginPath();
            ctx.moveTo(p.x + offsetX, p.y + offsetY);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - distLinks / 75) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-0 opacity-70 ${className}`}
      aria-hidden="true"
    />
  );
};
