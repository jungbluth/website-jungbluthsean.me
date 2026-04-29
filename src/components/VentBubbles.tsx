import { useEffect, useRef } from "react";

export function VentBubbles({ scrollProgress }: { scrollProgress: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(scrollProgress);
  progressRef.current = scrollProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const vents = [
      { x: 0.15, speed: 1.2, density: 8 },
      { x: 0.35, speed: 0.8, density: 5 },
      { x: 0.65, speed: 1.0, density: 6 },
      { x: 0.85, speed: 0.9, density: 7 },
    ];

    interface Bubble {
      x: number;
      y: number;
      size: number;
      speed: number;
      wobblePhase: number;
      wobbleSpeed: number;
      wobbleAmp: number;
      opacity: number;
    }

    const bubbles: Bubble[] = [];
    for (const vent of vents) {
      for (let i = 0; i < vent.density; i++) {
        bubbles.push({
          x: vent.x,
          y: Math.random(),
          size: 1 + Math.random() * 3,
          speed: (0.0008 + Math.random() * 0.0012) * vent.speed,
          wobblePhase: Math.random() * Math.PI * 2,
          wobbleSpeed: 0.02 + Math.random() * 0.03,
          wobbleAmp: 3 + Math.random() * 8,
          opacity: 0.1 + Math.random() * 0.2,
        });
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const draw = () => {
      const sp = progressRef.current;
      if (w() === 0 || h() === 0) { animId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, w(), h());

      const ventOpacity = sp < 0.6 ? 0 : Math.min(1, (sp - 0.6) * 3);
      if (ventOpacity <= 0) {
        animId = requestAnimationFrame(draw);
        return;
      }

      for (const b of bubbles) {
        b.y -= b.speed;
        b.wobblePhase += b.wobbleSpeed;

        if (b.y < -0.05) {
          b.y = 1.05;
        }

        const px = b.x * w() + Math.sin(b.wobblePhase) * b.wobbleAmp;
        const py = b.y * h();
        const heightFade = b.y < 0.3 ? b.y / 0.3 : 1;
        const alpha = b.opacity * ventOpacity * heightFade;
        if (!Number.isFinite(alpha) || !Number.isFinite(px) || !Number.isFinite(py)) continue;

        ctx.beginPath();
        ctx.arc(px, py, b.size, 0, Math.PI * 2);

        const grad = ctx.createRadialGradient(px - b.size * 0.3, py - b.size * 0.3, 0, px, py, b.size);
        grad.addColorStop(0, `rgba(180, 220, 255, ${alpha * 0.8})`);
        grad.addColorStop(0.6, `rgba(140, 200, 240, ${alpha * 0.3})`);
        grad.addColorStop(1, `rgba(100, 180, 220, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px - b.size * 0.2, py - b.size * 0.2, b.size * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.3})`;
        ctx.fill();
      }

      for (const vent of vents) {
        const vx = vent.x * w();
        const vy = h();
        const shimmerAlpha = ventOpacity * 0.06;
        const grad = ctx.createRadialGradient(vx, vy, 0, vx, vy, 40);
        grad.addColorStop(0, `rgba(100, 255, 218, ${shimmerAlpha})`);
        grad.addColorStop(1, "rgba(100, 255, 218, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(vx, vy, 40, 0, Math.PI * 2);
        ctx.fill();
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

  if (scrollProgress < 0.55) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[4]"
    />
  );
}
