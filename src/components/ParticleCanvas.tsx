import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  baseOpacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
  layer: "surface" | "mid" | "deep" | "snow";
}

export function ParticleCanvas({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const progressRef = useRef(scrollProgress);
  progressRef.current = scrollProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.width;
    const h = () => canvas.height;

    const particles: Particle[] = [];

    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * w(), y: Math.random() * h(),
        baseSize: 2 + Math.random() * 3,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.3,
        baseOpacity: 0.3 + Math.random() * 0.5,
        hue: 180 + Math.random() * 30,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        layer: "surface",
      });
    }

    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * w(), y: Math.random() * h(),
        baseSize: 1.5 + Math.random() * 2.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.2,
        baseOpacity: 0.2 + Math.random() * 0.4,
        hue: 160 + Math.random() * 40,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        layer: "mid",
      });
    }

    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * w(), y: Math.random() * h(),
        baseSize: 1 + Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.15,
        baseOpacity: 0.3 + Math.random() * 0.5,
        hue: 170 + Math.random() * 30,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.015,
        layer: "deep",
      });
    }

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * w(), y: Math.random() * h(),
        baseSize: 0.5 + Math.random() * 1.5,
        speedX: (Math.random() - 0.5) * 0.08,
        speedY: 0.15 + Math.random() * 0.25,
        baseOpacity: 0.15 + Math.random() * 0.25,
        hue: 200 + Math.random() * 20,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.01,
        layer: "snow",
      });
    }

    particlesRef.current = particles;

    const animate = () => {
      const sp = progressRef.current;
      if (w() === 0 || h() === 0) { animFrameRef.current = requestAnimationFrame(animate); return; }
      ctx.clearRect(0, 0, w(), h());

      for (const p of particlesRef.current) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += p.pulseSpeed;

        if (p.x < -10) p.x = w() + 10;
        if (p.x > w() + 10) p.x = -10;
        if (p.y < -10) p.y = h() + 10;
        if (p.y > h() + 10) p.y = -10;

        let layerOpacity: number;
        let sizeMultiplier: number;

        switch (p.layer) {
          case "surface":
            layerOpacity = Math.max(0, 1 - sp * 5);
            sizeMultiplier = 3 + sp * 2;
            break;
          case "mid":
            layerOpacity = sp < 0.1 ? sp * 10 : sp > 0.5 ? Math.max(0, 1 - (sp - 0.5) * 3) : 1;
            sizeMultiplier = 2 + sp * 3;
            break;
          case "deep":
            layerOpacity = sp < 0.3 ? 0 : sp < 0.5 ? (sp - 0.3) * 5 : 1;
            sizeMultiplier = 2 + sp * 4;
            break;
          case "snow":
            layerOpacity = sp < 0.15 ? 0 : Math.min(1, (sp - 0.15) * 3);
            sizeMultiplier = 1;
            break;
        }

        const pulseOpacity = p.baseOpacity * (0.5 + 0.5 * Math.sin(p.pulse));
        const finalOpacity = pulseOpacity * layerOpacity;
        if (finalOpacity < 0.01) continue;

        const size = p.baseSize * sizeMultiplier;
        if (!Number.isFinite(size) || !Number.isFinite(p.x) || !Number.isFinite(p.y)) continue;

        if (p.layer === "snow") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.baseSize, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 30%, 80%, ${finalOpacity})`;
          ctx.fill();
          continue;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        gradient.addColorStop(0, `hsla(${p.hue}, 100%, 75%, ${finalOpacity})`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, 100%, 60%, ${finalOpacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 100%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseSize * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 85%, ${finalOpacity})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
