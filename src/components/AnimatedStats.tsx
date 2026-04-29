import { useEffect, useState, useRef } from "react";
import { useInView } from "@/hooks/useInView";

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 35, suffix: "+", label: "Publications" },
  { target: 10, suffix: "+", label: "Expeditions" },
  { target: 18, suffix: "", label: "Years Research" },
  { target: 2650, suffix: "m", label: "Deepest Dive" },
];

function useCountUp(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      }
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [active, target, duration]);

  return count;
}

function StatItem({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setTriggered(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  const count = useCountUp(stat.target, triggered, stat.target > 100 ? 2000 : 1500);

  return (
    <div
      className="text-center transition-all duration-500"
      style={{
        opacity: triggered ? 1 : 0,
        transform: triggered ? "translateY(0)" : "translateY(10px)",
      }}
    >
      <div
        className="font-mono text-2xl sm:text-3xl font-bold tabular-nums"
        style={{ color: "#64ffda" }}
      >
        {count.toLocaleString()}
        <span className="text-lg">{stat.suffix}</span>
      </div>
      <div
        className="font-mono text-[12px] tracking-wider uppercase mt-1"
        style={{ color: "#8892b0" }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export function AnimatedStats() {
  const [ref, inView] = useInView(0.3, "[data-scroll-root]");

  return (
    <div ref={ref} className="w-full max-w-2xl mx-auto mt-12 mb-8">
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-lg"
        style={{
          background: "rgba(10, 25, 47, 0.5)",
          border: "1px solid rgba(100, 255, 218, 0.08)",
          backdropFilter: "blur(4px)",
        }}
      >
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} active={inView} delay={i * 200} />
        ))}
      </div>
    </div>
  );
}
