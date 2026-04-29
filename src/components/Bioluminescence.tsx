import { useEffect, useRef } from "react";

interface BioluminescenceProps {
  scrollProgress: number;
}

export function Bioluminescence({ scrollProgress }: BioluminescenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(scrollProgress);
  progressRef.current = scrollProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      hue: number;
      alpha: number;
      pulse: number;
      pulseSpeed: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        r: 1 + Math.random() * 2.5,
        hue: Math.random() < 0.6 ? 175 + Math.random() * 25 : 120 + Math.random() * 40,
        alpha: 0.2 + Math.random() * 0.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    const draw = () => {
      const progress = progressRef.current;
      const intensity = progress < 0.45 ? 0 : Math.min(1, (progress - 0.45) / 0.2);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (intensity > 0) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulse += p.pulseSpeed;

          if (p.x < -10) p.x = w() + 10;
          if (p.x > w() + 10) p.x = -10;
          if (p.y < -10) p.y = h() + 10;
          if (p.y > h() + 10) p.y = -10;

          const brightness = p.alpha * (0.5 + 0.5 * Math.sin(p.pulse)) * intensity;
          if (brightness < 0.01) continue;

          ctx.beginPath();
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
          grad.addColorStop(0, `hsla(${p.hue}, 100%, 75%, ${brightness})`);
          grad.addColorStop(0.4, `hsla(${p.hue}, 90%, 60%, ${brightness * 0.4})`);
          grad.addColorStop(1, `hsla(${p.hue}, 80%, 50%, 0)`);
          ctx.fillStyle = grad;
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[6]"
    />
  );
}
