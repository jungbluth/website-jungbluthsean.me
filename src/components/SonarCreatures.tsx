import { useEffect, useRef, useState, useCallback } from "react";
import { useCreatureLog } from "@/hooks/useCreatureLog";

interface HiddenCreature {
  id: string;
  name: string;
  depth: string;
  progressMin: number;
  progressMax: number;
  x: number;
  y: number;
  svg: React.ReactNode;
}

export const hiddenCreatures: Omit<HiddenCreature, "svg">[] = [
  { id: "hatchetfish", name: "Hatchetfish", depth: "300m", progressMin: 0.04, progressMax: 0.1, x: 45, y: 35 },
  { id: "comb-jelly", name: "Comb Jelly", depth: "600m", progressMin: 0.08, progressMax: 0.15, x: 65, y: 55 },
  { id: "barreleye", name: "Barreleye Fish", depth: "900m", progressMin: 0.13, progressMax: 0.2, x: 30, y: 30 },
  { id: "gulper-eel", name: "Gulper Eel", depth: "2,000m", progressMin: 0.3, progressMax: 0.42, x: 55, y: 60 },
  { id: "snailfish", name: "Hadal Snailfish", depth: "4,500m", progressMin: 0.65, progressMax: 0.78, x: 40, y: 45 },
  { id: "microbe-mat", name: "Microbial Mat", depth: "5,500m", progressMin: 0.85, progressMax: 0.98, x: 50, y: 70 },
];

function HatchetfishSVG() {
  return (
    <svg width="36" height="32" viewBox="0 0 36 32">
      <path d="M18,4 Q26,2 30,10 Q32,18 28,24 Q22,28 16,26 Q10,24 8,18 Q6,10 12,4 Z" fill="rgba(100,200,255,0.2)" stroke="rgba(100,200,255,0.3)" strokeWidth="0.5" />
      <circle cx="14" cy="12" r="2.5" fill="rgba(180,220,255,0.3)" />
      <circle cx="14" cy="12" r="1" fill="rgba(255,255,255,0.4)" />
      {[14, 17, 20, 23].map((y) => (
        <circle key={y} cx="18" cy={y} r="1" fill="rgba(100,255,218,0.35)">
          <animate attributeName="opacity" values="0.35;0.7;0.35" dur={`${1.2 + y * 0.05}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function CombJellySVG() {
  return (
    <svg width="30" height="40" viewBox="0 0 30 40">
      <ellipse cx="15" cy="16" rx="10" ry="14" fill="rgba(200,100,255,0.1)" stroke="rgba(200,100,255,0.15)" strokeWidth="0.5" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x1 = 15 + Math.cos(angle) * 8;
        const y1 = 16 + Math.sin(angle) * 12;
        return (
          <line key={i} x1="15" y1="16" x2={x1} y2={y1} stroke={`rgba(${100 + i * 20},255,${218 - i * 20},0.15)`} strokeWidth="1.5">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur={`${0.8 + i * 0.15}s`} repeatCount="indefinite" begin={`${i * 0.1}s`} />
          </line>
        );
      })}
    </svg>
  );
}

function BarreleyeSVG() {
  return (
    <svg width="40" height="28" viewBox="0 0 40 28">
      <ellipse cx="20" cy="14" rx="14" ry="8" fill="rgba(80,120,160,0.15)" stroke="rgba(80,120,160,0.2)" strokeWidth="0.5" />
      <ellipse cx="20" cy="6" rx="8" ry="5" fill="rgba(100,180,220,0.08)" stroke="rgba(100,180,220,0.12)" strokeWidth="0.3" />
      <circle cx="16" cy="6" r="2.5" fill="rgba(100,255,150,0.3)" />
      <circle cx="24" cy="6" r="2.5" fill="rgba(100,255,150,0.3)" />
      <circle cx="16" cy="6" r="1" fill="rgba(200,255,200,0.5)" />
      <circle cx="24" cy="6" r="1" fill="rgba(200,255,200,0.5)" />
      <path d="M34,14 L38,10 L38,18 Z" fill="rgba(80,120,160,0.1)" />
    </svg>
  );
}

function GulperEelSVG() {
  return (
    <svg width="60" height="24" viewBox="0 0 60 24">
      <path d="M4,12 Q2,6 8,4 Q16,2 28,10 Q32,12 36,12 Q44,12 52,10 Q56,9 58,10 Q60,12 58,14 Q56,15 52,14 Q44,14 36,14 Q32,14 28,14 Q16,22 8,20 Q2,18 4,12 Z" fill="rgba(40,40,60,0.2)" stroke="rgba(60,60,80,0.25)" strokeWidth="0.5" />
      <circle cx="10" cy="10" r="2" fill="rgba(200,200,220,0.2)" />
      <circle cx="10" cy="10" r="0.8" fill="rgba(255,255,255,0.3)" />
      <circle cx="56" cy="12" r="1" fill="rgba(100,255,218,0.3)">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function SnailfishSVG() {
  return (
    <svg width="36" height="20" viewBox="0 0 36 20">
      <path d="M6,10 Q4,4 10,3 Q18,2 26,6 Q30,8 32,10 Q30,14 26,16 Q18,18 10,17 Q4,16 6,10 Z" fill="rgba(220,200,220,0.12)" stroke="rgba(220,200,220,0.18)" strokeWidth="0.4" />
      <circle cx="10" cy="9" r="1.5" fill="rgba(200,180,200,0.2)" />
      <path d="M28,8 L34,6 L34,14 L28,12" fill="rgba(220,200,220,0.08)" />
    </svg>
  );
}

function MicrobialMatSVG() {
  return (
    <svg width="50" height="20" viewBox="0 0 50 20">
      <ellipse cx="25" cy="14" rx="22" ry="5" fill="rgba(80,120,60,0.15)" />
      <ellipse cx="25" cy="12" rx="18" ry="3" fill="rgba(100,140,80,0.1)" />
      {[8, 16, 24, 32, 42].map((x, i) => (
        <circle key={x} cx={x} cy={12 - (i % 2)} r="1" fill={`rgba(${100 + i * 20},${200 - i * 10},${100 + i * 15},0.2)`}>
          <animate attributeName="opacity" values="0.15;0.35;0.15" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <text x="25" y="6" textAnchor="middle" fontSize="4" fill="rgba(100,255,218,0.2)" fontFamily="monospace">chemosynthetic</text>
    </svg>
  );
}

const svgMap: Record<string, React.ReactNode> = {
  hatchetfish: <HatchetfishSVG />,
  "comb-jelly": <CombJellySVG />,
  barreleye: <BarreleyeSVG />,
  "gulper-eel": <GulperEelSVG />,
  snailfish: <SnailfishSVG />,
  "microbe-mat": <MicrobialMatSVG />,
};

export function SonarCreatures({ scrollProgress }: { scrollProgress: number }) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const timers = useRef<Map<string, number>>(new Map());
  const { addDiscovery } = useCreatureLog();

  const handleSonarHit = useCallback((creatureId: string) => {
    setRevealed((prev) => new Set(prev).add(creatureId));
    const creature = hiddenCreatures.find((c) => c.id === creatureId);
    if (creature) addDiscovery(creature.id, creature.name, creature.depth);
    if (timers.current.has(creatureId)) {
      clearTimeout(timers.current.get(creatureId));
    }
    const t = window.setTimeout(() => {
      setRevealed((prev) => {
        const next = new Set(prev);
        next.delete(creatureId);
        return next;
      });
      timers.current.delete(creatureId);
    }, 4000);
    timers.current.set(creatureId, t);
  }, [addDiscovery]);

  useEffect(() => {
    const root = document.querySelector("[data-scroll-root]");
    if (!root) return;

    const handler = (e: Event) => {
      const me = e as MouseEvent;
      const target = me.target as HTMLElement;
      if (target.closest("a, button, input, [role='button']")) return;

      const px = me.clientX;
      const py = me.clientY;

      setTimeout(() => {
        for (const creature of hiddenCreatures) {
          if (scrollProgress < creature.progressMin || scrollProgress > creature.progressMax) continue;

          const cx = (creature.x / 100) * window.innerWidth;
          const cy = (creature.y / 100) * window.innerHeight;
          const dist = Math.sqrt((cx - px) ** 2 + (cy - py) ** 2);

          if (dist < 400) {
            const delay = Math.round((dist / 400) * 1200);
            setTimeout(() => handleSonarHit(creature.id), delay);
          }
        }
      }, 100);
    };

    root.addEventListener("click", handler);
    return () => root.removeEventListener("click", handler);
  }, [scrollProgress, handleSonarHit]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[8] overflow-hidden">
      <style>{`
        @keyframes sonarReveal {
          0% { opacity: 0; transform: scale(0.5); filter: blur(4px); }
          20% { opacity: 1; transform: scale(1.05); filter: blur(0); }
          80% { opacity: 0.8; transform: scale(1); filter: blur(0); }
          100% { opacity: 0; transform: scale(0.9); filter: blur(2px); }
        }
      `}</style>
      {hiddenCreatures.map((creature) => {
        const inRange = scrollProgress >= creature.progressMin && scrollProgress <= creature.progressMax;
        const isRevealed = revealed.has(creature.id) && inRange;

        if (!isRevealed) return null;

        return (
          <div
            key={creature.id}
            className="absolute flex flex-col items-center"
            style={{
              left: `${creature.x}%`,
              top: `${creature.y}%`,
              transform: "translate(-50%, -50%)",
              animation: "sonarReveal 4s ease-out forwards",
            }}
          >
            {svgMap[creature.id]}
            <div
              className="mt-1 font-mono text-center whitespace-nowrap"
              style={{ fontSize: 9, letterSpacing: 1 }}
            >
              <div style={{ color: "rgba(100,255,218,0.6)" }}>{creature.name}</div>
              <div style={{ color: "rgba(100,255,218,0.3)" }}>{creature.depth}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
