import React, { useEffect, useRef, useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

interface GalaxyBackgroundProps {
  interactive?: boolean;
  density?: number;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  vx: number;
  vy: number;
  hue: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface TrailSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  hue: number;
  life: number;
}

export const GalaxyBackground: React.FC<GalaxyBackgroundProps> = ({
  interactive = true,
  density = 90,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = usePortfolio();
  const isDark = theme === 'dark';
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

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
    let isMouseActive = false;

    let isMobile = window.innerWidth < 768;
    const particles: Particle[] = [];
    const trailSparks: TrailSpark[] = [];
    const count = isMobile 
      ? Math.min(22, Math.max(12, Math.floor((width * height) / 24000))) 
      : Math.min(density, Math.floor((width * height) / 11000));

    // Sleek high-tech cyber blue palette: cyan-blue, azure, cobalt, sapphire, deep electric blue
    const hues = [200, 212, 224, 235, 248];

    for (let i = 0; i < count; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      particles.push({
        x: rx,
        y: ry,
        originX: rx,
        originY: ry,
        size: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.15,
        alpha: Math.random() * 0.45 + 0.15,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        hue: hues[Math.floor(Math.random() * hues.length)],
        twinkleSpeed: Math.random() * 0.018 + 0.006,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      isMobile = window.innerWidth < 768;
    };

    let lastSparkTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      isMouseActive = true;
      setMousePos({ x: e.clientX, y: e.clientY });

      // Balanced cursor follower sparks: subtle luminous stardust
      const now = performance.now();
      if (now - lastSparkTime > 32 && trailSparks.length < 40) {
        lastSparkTime = now;
        for (let s = 0; s < 2; s++) {
          trailSparks.push({
            x: e.clientX + (Math.random() - 0.5) * 10,
            y: e.clientY + (Math.random() - 0.5) * 10,
            vx: (Math.random() - 0.5) * 1.0,
            vy: (Math.random() - 0.5) * 1.0 - 0.25,
            size: Math.random() * 2.0 + 1.0,
            alpha: 1,
            hue: hues[Math.floor(Math.random() * hues.length)],
            life: 1,
          });
        }
      }
    };

    const handleMouseLeave = () => {
      isMouseActive = false;
      targetMouseX = -500;
      targetMouseY = -500;
      setMousePos({ x: -500, y: -500 });
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseleave', handleMouseLeave);
    }

    const render = () => {
      // Smooth, silky mouse interpolation (balanced response)
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing interactive cursor ring if active (pure cyber blue & cyan)
      if (isMouseActive && mouseX > 0 && mouseY > 0) {
        ctx.beginPath();
        const cursorGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 115);
        if (isDark) {
          cursorGlow.addColorStop(0, 'rgba(59, 130, 246, 0.24)');
          cursorGlow.addColorStop(0.5, 'rgba(6, 182, 212, 0.12)');
          cursorGlow.addColorStop(1, 'rgba(59, 130, 246, 0)');
        } else {
          cursorGlow.addColorStop(0, 'rgba(37, 99, 235, 0.16)');
          cursorGlow.addColorStop(0.5, 'rgba(6, 182, 212, 0.07)');
          cursorGlow.addColorStop(1, 'rgba(37, 99, 235, 0)');
        }
        ctx.fillStyle = cursorGlow;
        ctx.arc(mouseX, mouseY, 115, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render and update cursor trail sparks (smooth damping)
      for (let s = trailSparks.length - 1; s >= 0; s--) {
        const spark = trailSparks[s];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vx *= 0.96;
        spark.vy *= 0.96;
        spark.life -= 0.024;
        spark.alpha = Math.max(0, spark.life);

        if (spark.life <= 0) {
          trailSparks.splice(s, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size * spark.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${spark.hue}, 95%, ${isDark ? '75%' : '52%'}, ${spark.alpha})`;
        ctx.shadowBlur = isDark ? 8 : 4;
        ctx.shadowColor = `hsla(${spark.hue}, 100%, 65%, 0.65)`;
        ctx.fill();
      }

      // 3. Render and update main floating stardust particles
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
        p.alpha = p.baseAlpha + Math.sin(p.twinklePhase) * 0.22;
        p.alpha = Math.max(0.12, Math.min(0.92, p.alpha));

        // Interactive mouse magnetic pull / deflection physics
        let offsetX = 0;
        let offsetY = 0;
        if (isMouseActive && mouseX > 0 && mouseY > 0) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 200) {
            // Refined magnetic swirl & attraction
            const force = (1 - dist / 200);
            offsetX = -dx * force * 0.22;
            offsetY = -dy * force * 0.22;

            // Connect constellation line directly from particle to cursor (pure blue/cyan)
            ctx.beginPath();
            ctx.moveTo(p.x + offsetX, p.y + offsetY);
            ctx.lineTo(mouseX, mouseY);
            const cursorLineAlpha = (1 - dist / 200) * (isDark ? 0.32 : 0.18);
            ctx.strokeStyle = isDark
              ? `rgba(59, 130, 246, ${cursorLineAlpha})`
              : `rgba(37, 99, 235, ${cursorLineAlpha})`;
            ctx.lineWidth = 1;
            ctx.shadowBlur = isDark ? 6 : 0;
            ctx.shadowColor = 'rgba(59, 130, 246, 0.45)';
            ctx.stroke();
          }
        }

        const renderX = p.x + offsetX;
        const renderY = p.y + offsetY;

        ctx.beginPath();
        ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
        
        if (isDark) {
          ctx.fillStyle = `hsla(${p.hue}, 95%, 78%, ${p.alpha})`;
          ctx.shadowBlur = p.size > 1.2 ? 8 : 0;
          ctx.shadowColor = `hsla(${p.hue}, 100%, 68%, 0.65)`;
        } else {
          ctx.fillStyle = `hsla(${p.hue}, 85%, 46%, ${p.alpha * 0.55})`;
          ctx.shadowBlur = p.size > 1.2 ? 4 : 0;
          ctx.shadowColor = `hsla(${p.hue}, 85%, 46%, 0.3)`;
        }
        ctx.fill();

        // Constellation linkage between neighboring particles (desktop only for 60fps mobile speed)
        if (!isMobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distLinks = Math.hypot(renderX - p2.x, renderY - p2.y);
            if (distLinks < 75) {
              ctx.beginPath();
              ctx.moveTo(renderX, renderY);
              ctx.lineTo(p2.x, p2.y);
              const lineOpacity = (1 - distLinks / 75) * (isDark ? 0.16 : 0.09);
              ctx.strokeStyle = isDark 
                ? `rgba(59, 130, 246, ${lineOpacity})` 
                : `rgba(37, 99, 235, ${lineOpacity})`;
              ctx.lineWidth = 0.7;
              ctx.shadowBlur = 0;
              ctx.stroke();
            }
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
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, interactive, isDark]);

  return (
    <>
      {/* 1. Deep Radiant Aurora Background Mesh (z-0) - Mobile Optimized */}
      <div className={`pointer-events-none fixed inset-0 z-0 overflow-hidden ${className}`}>
        {/* Dynamic Cursor Light Source (Glass Illuminator that follows mouse) */}
        {mousePos.x > 0 && mousePos.y > 0 && (
          <div
            className="hidden sm:block absolute rounded-full pointer-events-none blur-[90px] transition-transform duration-75 ease-out opacity-85 transform-gpu"
            style={{
              width: '420px',
              height: '420px',
              left: `${mousePos.x - 210}px`,
              top: `${mousePos.y - 210}px`,
              background: isDark
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(6, 182, 212, 0.16) 45%, rgba(99, 102, 241, 0.1) 75%, transparent 100%)'
                : 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, rgba(6, 182, 212, 0.12) 45%, rgba(99, 102, 241, 0.06) 75%, transparent 100%)',
            }}
          />
        )}

        {/* High-Tech Fluid Aurora Mesh Gradient Orbs (Lightweight for Mobile, Ultra-Rich for Desktop) */}
        <div 
          className={`absolute -top-20 -left-20 sm:-top-36 sm:-left-36 w-[340px] h-[340px] sm:w-[800px] sm:h-[800px] rounded-full blur-[65px] sm:blur-[150px] pointer-events-none transition-all duration-1000 transform-gpu animate-aurora ${
            isDark 
              ? 'bg-gradient-to-tr from-blue-600/35 via-cyan-500/25 to-transparent' 
              : 'bg-gradient-to-tr from-blue-500/25 via-cyan-400/25 to-transparent'
          }`}
        />
        <div 
          className={`absolute top-1/4 -right-20 sm:-right-36 w-[340px] h-[340px] sm:w-[850px] sm:h-[850px] rounded-full blur-[70px] sm:blur-[165px] pointer-events-none transition-all duration-1000 transform-gpu animate-aurora ${
            isDark 
              ? 'bg-gradient-to-br from-indigo-600/35 via-blue-700/25 to-transparent' 
              : 'bg-gradient-to-br from-indigo-400/25 via-sky-300/25 to-transparent'
          }`}
          style={{ animationDelay: '-6s' }}
        />
        <div 
          className={`hidden sm:block absolute bottom-1/4 -left-28 w-[750px] h-[750px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000 transform-gpu animate-aurora ${
            isDark 
              ? 'bg-gradient-to-r from-blue-600/30 via-cyan-500/25 to-transparent' 
              : 'bg-gradient-to-r from-blue-400/25 via-sky-200/35 to-transparent'
          }`}
          style={{ animationDelay: '-10s' }}
        />
        <div 
          className={`hidden sm:block absolute -bottom-36 right-1/4 w-[800px] h-[800px] rounded-full blur-[155px] pointer-events-none transition-all duration-1000 transform-gpu animate-aurora ${
            isDark 
              ? 'bg-gradient-to-t from-cyan-600/30 via-blue-500/25 to-transparent' 
              : 'bg-gradient-to-t from-cyan-400/25 via-blue-200/35 to-transparent'
          }`}
          style={{ animationDelay: '-14s' }}
        />
      </div>

      {/* 2. Cyber Galaxy Particle Canvas (Interactive Foreground Layer at z-20) */}
      <canvas
        ref={canvasRef}
        className={`pointer-events-none fixed inset-0 z-20 w-full h-full ${isDark ? 'opacity-95' : 'opacity-85'}`}
        aria-hidden="true"
      />
    </>
  );
};
