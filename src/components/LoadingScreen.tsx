import { useEffect, useState } from "react";

const DEPTH_TARGET = 200;
const DURATION = 2800;

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [depth, setDepth] = useState(0);
  const [phase, setPhase] = useState<"diving" | "fading">("diving");

  useEffect(() => {
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setDepth(Math.max(0, Math.round(eased * DEPTH_TARGET)));

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setPhase("fading");
        setTimeout(onComplete, 600);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  if (phase === "fading") {
    return (
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(180deg, #87ceeb 0%, #2e86c1 40%, #0a456e 100%)",
          animation: "loading-fadeout 600ms ease-in forwards",
        }}
      >
        <style>{`
          @keyframes loading-fadeout {
            from { opacity: 1; }
            to { opacity: 0; pointer-events: none; }
          }
        `}</style>
      </div>
    );
  }

  const bgProgress = depth / DEPTH_TARGET;
  const r = Math.round(135 - bgProgress * 125);
  const g = Math.round(206 - bgProgress * 106);
  const b = Math.round(235 - bgProgress * 125);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: `rgb(${r},${g},${b})` }}
    >
      {/* Bubbles rising behind the sub */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${3 + (i % 4) * 2}px`,
              height: `${3 + (i % 4) * 2}px`,
              left: `${35 + (i * 7) % 30}%`,
              bottom: `${-10 - i * 5}%`,
              background: `rgba(180, 220, 255, ${0.15 + (i % 3) * 0.08})`,
              animation: `loading-bubble ${2 + (i % 3) * 0.8}s ease-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Mini submarine descending */}
      <div
        className="relative mb-8"
        style={{
          transform: `translateY(${bgProgress * 20}px) rotate(${8 + bgProgress * 4}deg)`,
          transition: "transform 0.3s ease",
        }}
      >
        <svg viewBox="0 0 120 56" className="w-24 sm:w-28" style={{ display: "block" }}>
          <defs>
            <linearGradient id="lb" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8e0d0" />
              <stop offset="100%" stopColor="#c0b8a0" />
            </linearGradient>
            <linearGradient id="lr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d45500" />
              <stop offset="100%" stopColor="#b84400" />
            </linearGradient>
          </defs>
          <ellipse cx="55" cy="24" rx="30" ry="18" fill="url(#lb)" />
          <path d="M25,28 Q25,38 35,42 L50,44 Q55,46 65,44 L75,42 Q85,38 85,28 Z" fill="url(#lr)" />
          <circle cx="42" cy="25" r="6" fill="#0a1830" />
          <circle cx="42" cy="25" r="5" fill="rgba(100,180,255,0.3)" />
          <circle cx="42" cy="25" r="6" fill="none" stroke="#8a8070" strokeWidth="1" />
          <path d="M48,8 L50,6 L64,6 L66,8 L67,12 Q67,14 66,16 L48,16 Q47,14 47,12 Z" fill="#c8c0b0" />
          <path d="M82,18 L94,16 Q98,18 99,22 L99,30 Q98,34 94,34 L82,32 Z" fill="#b84400" opacity="0.8" />
          <circle cx="33" cy="30" r="3" fill="#ffe8a0" opacity="0.8" />
        </svg>

        {/* Dive bubbles trailing */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-16 pointer-events-none">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + (i % 2)}px`,
                height: `${2 + (i % 2)}px`,
                left: `${30 + (i * 15) % 40}%`,
                bottom: 0,
                background: "rgba(180, 220, 255, 0.4)",
                animation: `loading-bubble ${1.5 + i * 0.3}s ease-out ${i * 0.4}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Depth readout */}
      <div className="text-center relative z-10">
        <div
          className="font-mono text-[11px] tracking-[4px] uppercase mb-2"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Initiating dive
        </div>
        <div
          className="font-mono text-3xl sm:text-4xl font-bold tabular-nums"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          {depth}m
        </div>
        <div
          className="mt-4 w-32 h-1 rounded-full mx-auto overflow-hidden"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-200"
            style={{
              width: `${bgProgress * 100}%`,
              background: "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(100,255,218,0.8))",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loading-bubble {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-120vh) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
