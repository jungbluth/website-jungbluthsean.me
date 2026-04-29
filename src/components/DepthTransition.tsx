import { useEffect, useRef, useState } from "react";

const zones = [
  { at: 0.03, color: "rgba(91,163,217,0.12)", label: "Entering Twilight", lineColor: "rgba(91,163,217,0.4)" },
  { at: 0.1, color: "rgba(46,134,193,0.1)", label: "Midnight Zone", lineColor: "rgba(46,134,193,0.35)" },
  { at: 0.2, color: "rgba(10,69,112,0.08)", label: "The Deep", lineColor: "rgba(10,69,112,0.3)" },
  { at: 0.45, color: "rgba(5,31,58,0.06)", label: "Abyss", lineColor: "rgba(100,255,218,0.15)" },
  { at: 0.75, color: "rgba(2,12,27,0.05)", label: "Hadal Zone", lineColor: "rgba(100,255,218,0.1)" },
];

export function DepthTransition({ scrollProgress }: { scrollProgress: number }) {
  const prevProgress = useRef(scrollProgress);
  const [flash, setFlash] = useState<{ color: string; lineColor: string; label: string; key: number } | null>(null);

  useEffect(() => {
    const prev = prevProgress.current;
    prevProgress.current = scrollProgress;

    for (const zone of zones) {
      if ((prev < zone.at && scrollProgress >= zone.at) || (prev > zone.at && scrollProgress <= zone.at)) {
        setFlash({ color: zone.color, lineColor: zone.lineColor, label: zone.label, key: Date.now() });
        const timer = setTimeout(() => setFlash(null), 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [scrollProgress]);

  if (!flash) return null;

  return (
    <div
      key={flash.key}
      className="fixed inset-0 z-[4] pointer-events-none"
    >
      <style>{`
        @keyframes depthTransFade {
          0% { opacity: 0; transform: scale(0.8); }
          20% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.3); }
        }
        @keyframes depthLineSweep {
          0% { transform: scaleX(0); opacity: 0; }
          15% { transform: scaleX(1); opacity: 1; }
          60% { transform: scaleX(1); opacity: 0.6; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        @keyframes depthLabelFade {
          0% { opacity: 0; transform: translateY(8px); }
          20% { opacity: 0.7; transform: translateY(0); }
          70% { opacity: 0.5; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-4px); }
        }
        @keyframes depthParticles {
          0% { opacity: 0; transform: translateY(0) scale(0); }
          30% { opacity: 0.6; transform: translateY(-10px) scale(1); }
          100% { opacity: 0; transform: translateY(-40px) scale(0.5); }
        }
      `}</style>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${flash.color}, transparent 70%)`,
          animation: "depthTransFade 1.5s ease-out forwards",
        }}
      />
      <div
        className="absolute left-0 right-0"
        style={{ top: "50%" }}
      >
        <div
          style={{
            height: "1px",
            background: `linear-gradient(90deg, transparent 5%, ${flash.lineColor} 30%, ${flash.lineColor} 70%, transparent 95%)`,
            animation: "depthLineSweep 1.5s ease-out forwards",
            transformOrigin: "center",
          }}
        />
        <div
          style={{
            height: "20px",
            marginTop: "-10px",
            background: `linear-gradient(90deg, transparent 10%, ${flash.color} 40%, ${flash.color} 60%, transparent 90%)`,
            filter: "blur(8px)",
            animation: "depthLineSweep 1.5s ease-out forwards",
            transformOrigin: "center",
          }}
        />
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[3px] uppercase"
        style={{
          top: "calc(50% + 16px)",
          color: flash.lineColor,
          animation: "depthLabelFade 1.5s ease-out forwards",
        }}
      >
        {flash.label}
      </div>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${15 + i * 10}%`,
            top: "50%",
            width: 3,
            height: 3,
            background: flash.lineColor,
            animation: `depthParticles 1.2s ease-out ${i * 0.08}s forwards`,
          }}
        />
      ))}
    </div>
  );
}
