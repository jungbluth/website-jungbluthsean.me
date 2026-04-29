import { useEffect, useRef } from "react";

export function UnderwaterCaustics({ scrollProgress }: { scrollProgress: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const timeRef = useRef(0);
  const progressRef = useRef(scrollProgress);
  progressRef.current = scrollProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 80;
    const H = 48;
    canvas.width = W;
    canvas.height = H;
    const imageData = ctx.createImageData(W, H);

    const render = () => {
      const sp = progressRef.current;
      if (sp > 0.3) {
        ctx.clearRect(0, 0, W, H);
        animRef.current = requestAnimationFrame(render);
        return;
      }

      timeRef.current += 0.005;
      const t = timeRef.current;
      const d = imageData.data;

      for (let py = 0; py < H; py++) {
        for (let px = 0; px < W; px++) {
          const fx = (px / W) * 5;
          const fy = (py / H) * 5;

          let v = 0;
          v += Math.sin(fx * 2.3 + t * 1.1 + Math.sin(fy * 1.8 + t * 0.7) * 1.5);
          v += Math.sin(fy * 2.0 - t * 0.9 + Math.sin(fx * 2.5 - t * 1.05) * 1.2);
          v += Math.sin((fx + fy) * 1.3 + t * 0.55);
          v += Math.sin(Math.sqrt(fx * fx + fy * fy) * 2.2 - t * 1.2);

          v = v / 4;
          v = Math.pow(Math.max(0, v), 4) * 3.5;
          v = Math.min(1, v);

          const i = (py * W + px) * 4;
          d[i] = Math.round(210 + v * 45);
          d[i + 1] = Math.round(230 + v * 25);
          d[i + 2] = 255;
          d[i + 3] = Math.round(v * 160);
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animRef.current = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const opacity = Math.max(0, 1 - scrollProgress / 0.28) * 0.18;
  if (opacity < 0.005) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[2]"
      style={{ opacity, mixBlendMode: "screen" }}
    />
  );
}
