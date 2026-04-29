import { useEffect, useRef } from "react";

export function LightRays({ scrollProgress }: { scrollProgress: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(scrollProgress);
  progressRef.current = scrollProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const rays = Array.from({ length: 8 }, (_, i) => ({
      x: 0.05 + i * 0.12,
      width: 0.015 + Math.random() * 0.025,
      angle: -12 + Math.random() * 24,
      speed: 0.25 + Math.random() * 0.35,
      phase: Math.random() * Math.PI * 2,
    }));

    const causticNodes = Array.from({ length: 12 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0002,
      radius: 0.08 + Math.random() * 0.15,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    resize();

    const draw = () => {
      time += 0.006;
      const sp = progressRef.current;
      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) { animId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, w, h);

      const opacity = Math.max(0, 1 - sp * 4.5);
      if (opacity <= 0) { animId = requestAnimationFrame(draw); return; }

      for (const ray of rays) {
        const sway = Math.sin(time * ray.speed + ray.phase) * 0.025;
        const x = (ray.x + sway) * w;
        const rw = ray.width * w;
        const angle = (ray.angle * Math.PI) / 180;
        const shimmer = 0.5 + 0.5 * Math.sin(time * ray.speed * 1.5 + ray.phase);
        const alpha = (0.03 + shimmer * 0.05) * opacity;
        if (!Number.isFinite(alpha)) continue;

        ctx.save();
        ctx.translate(x, 0);
        ctx.rotate(angle);

        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, `rgba(255, 255, 230, ${alpha})`);
        grad.addColorStop(0.25, `rgba(255, 255, 200, ${alpha * 0.7})`);
        grad.addColorStop(0.6, `rgba(200, 230, 255, ${alpha * 0.25})`);
        grad.addColorStop(1, "rgba(200, 230, 255, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(-rw, 0);
        ctx.lineTo(rw, 0);
        ctx.lineTo(rw * 3.5, h);
        ctx.lineTo(-rw * 3.5, h);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      ctx.globalCompositeOperation = "screen";
      for (const node of causticNodes) {
        node.x += node.vx + Math.sin(time * 0.5 + node.phase) * 0.0002;
        node.y += node.vy + Math.cos(time * 0.4 + node.phase) * 0.00015;
        if (node.x < -0.1) node.x = 1.1;
        if (node.x > 1.1) node.x = -0.1;
        if (node.y < -0.1) node.y = 1.1;
        if (node.y > 1.1) node.y = -0.1;

        const pulse = 0.5 + 0.5 * Math.sin(time * 0.8 + node.phase);
        const r = node.radius * w * (0.8 + pulse * 0.4);
        const alpha = 0.015 * opacity * pulse;

        const grad = ctx.createRadialGradient(
          node.x * w, node.y * h, 0,
          node.x * w, node.y * h, r
        );
        grad.addColorStop(0, `rgba(200, 235, 255, ${alpha})`);
        grad.addColorStop(0.5, `rgba(180, 220, 255, ${alpha * 0.4})`);
        grad.addColorStop(1, "rgba(160, 210, 255, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(node.x * w, node.y * h, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const opacity = Math.max(0, 1 - scrollProgress * 4.5);
  if (opacity <= 0) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ opacity }}
    />
  );
}
