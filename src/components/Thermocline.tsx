import { useEffect, useRef } from "react";

export function Thermocline({ scrollProgress }: { scrollProgress: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) {
        animId = requestAnimationFrame(draw);
        return;
      }
      canvas.width = w;
      canvas.height = h;
      ctx.clearRect(0, 0, w, h);

      const visibility = scrollProgress > 0.03 && scrollProgress < 0.15
        ? Math.min(1, (scrollProgress - 0.03) / 0.02) * Math.min(1, (0.15 - scrollProgress) / 0.03)
        : 0;

      if (visibility <= 0) {
        animId = requestAnimationFrame(draw);
        return;
      }

      const time = Date.now() * 0.001;
      const yCenter = h * 0.4;
      const bandHeight = 60;

      for (let y = yCenter - bandHeight; y < yCenter + bandHeight; y += 2) {
        const dist = Math.abs(y - yCenter) / bandHeight;
        const alpha = (1 - dist * dist) * visibility * 0.12;
        if (!Number.isFinite(alpha) || alpha <= 0) continue;

        const wave = Math.sin(time * 0.8 + y * 0.02) * 20 + Math.sin(time * 1.3 + y * 0.05) * 8;
        const shimmerAlpha = alpha * (0.7 + 0.3 * Math.sin(time * 2 + y * 0.1));

        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x < w; x += 40) {
          const yOff = Math.sin(time * 0.5 + x * 0.003 + y * 0.01) * 3 + wave * 0.1;
          ctx.lineTo(x, y + yOff);
        }
        ctx.lineTo(w, y);

        const warmR = 180 + Math.round(dist * 40);
        const warmG = 220 + Math.round(dist * 20);
        ctx.strokeStyle = `rgba(${warmR}, ${warmG}, 255, ${shimmerAlpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [scrollProgress]);

  if (scrollProgress < 0.02 || scrollProgress > 0.16) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[2] pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
