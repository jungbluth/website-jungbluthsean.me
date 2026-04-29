import { useEffect, useState } from "react";

function JellyfishSVG({ size = 40, hue = "purple" }: { size?: number; hue?: "purple" | "blue" | "pink" }) {
  const colors = {
    purple: { bell: "rgba(140,80,200,0.35)", inner: "rgba(160,100,220,0.15)", tentacle: "rgba(140,80,200,0.25)", highlight: "rgba(220,200,255,0.3)" },
    blue: { bell: "rgba(60,140,220,0.3)", inner: "rgba(80,160,240,0.12)", tentacle: "rgba(60,140,220,0.2)", highlight: "rgba(200,230,255,0.25)" },
    pink: { bell: "rgba(200,100,180,0.3)", inner: "rgba(220,120,200,0.12)", tentacle: "rgba(200,100,180,0.2)", highlight: "rgba(255,200,240,0.25)" },
  };
  const c = colors[hue];
  return (
    <svg viewBox="0 0 40 60" width={size} height={size * 1.5}>
      <ellipse cx="20" cy="16" rx="14" ry="12" fill={c.bell} />
      <ellipse cx="20" cy="14" rx="10" ry="8" fill={c.inner} />
      <ellipse cx="15" cy="13" rx="4" ry="2.5" fill={c.highlight} />
      <path d="M8,20 Q12,28 8,34 Q5,38 8,42 Q10,46 7,52" fill="none" stroke={c.tentacle} strokeWidth="1" strokeLinecap="round" />
      <path d="M14,23 Q16,32 13,40 Q10,44 13,50 Q15,54 12,58" fill="none" stroke={c.tentacle} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M20,25 Q22,34 19,42 Q17,46 20,52 Q22,56 19,60" fill="none" stroke={c.tentacle} strokeWidth="0.9" strokeLinecap="round" />
      <path d="M26,23 Q24,32 27,40 Q30,44 27,50 Q25,54 28,58" fill="none" stroke={c.tentacle} strokeWidth="0.8" strokeLinecap="round" />
      <path d="M32,20 Q28,28 32,34 Q35,38 32,42 Q30,46 33,52" fill="none" stroke={c.tentacle} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function SalpChainSVG() {
  return (
    <svg viewBox="0 0 180 30" width={180} height={30}>
      {Array.from({ length: 8 }).map((_, i) => {
        const cx = 12 + i * 22;
        return (
          <g key={i}>
            <ellipse cx={cx} cy="15" rx="8" ry="5" fill="rgba(80,160,210,0.15)" stroke="rgba(60,140,200,0.3)" strokeWidth="0.7" />
            <ellipse cx={cx} cy="15" rx="4" ry="2.5" fill="rgba(120,200,240,0.1)" />
            <circle cx={cx - 2} cy="13" r="1.2" fill="rgba(255,255,255,0.2)" />
            <circle cx={cx + 1} cy="16" r="0.6" fill="rgba(40,120,180,0.15)" />
            {i < 7 && (
              <line x1={cx + 8} y1="15" x2={cx + 14} y2="15" stroke="rgba(60,140,200,0.2)" strokeWidth="0.5" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function SchoolingFishSVG() {
  const fishPositions = [
    { x: 0, y: 8, s: 0.9 },
    { x: 14, y: 3, s: 1 },
    { x: 12, y: 14, s: 0.8 },
    { x: 28, y: 7, s: 1.1 },
    { x: 26, y: 16, s: 0.85 },
    { x: 38, y: 2, s: 0.95 },
    { x: 42, y: 11, s: 1 },
    { x: 54, y: 6, s: 0.9 },
    { x: 52, y: 15, s: 0.75 },
    { x: 66, y: 9, s: 1.05 },
    { x: 64, y: 18, s: 0.8 },
    { x: 78, y: 4, s: 0.9 },
  ];

  return (
    <svg viewBox="0 0 100 24" width={160} height={38}>
      {fishPositions.map((f, i) => (
        <g key={i} transform={`translate(${f.x},${f.y}) scale(${f.s})`}>
          {/* Fish facing right: tail on left, head on right */}
          <path d="M0,4 L3,2 L3,6 Z" fill="rgba(30,100,170,0.18)" />
          <ellipse cx="8" cy="4" rx="5" ry="2.5" fill="rgba(30,100,170,0.2)" stroke="rgba(30,100,170,0.3)" strokeWidth="0.4" />
          <circle cx="10.5" cy="3.5" r="0.7" fill="rgba(200,230,255,0.4)" />
          <ellipse cx="9" cy="3.5" rx="2" ry="1" fill="rgba(60,140,210,0.1)" />
        </g>
      ))}
    </svg>
  );
}

function DolphinSVG() {
  return (
    <svg viewBox="0 0 80 36" width={80} height={36}>
      {/* Dolphin facing right: beak on right, tail on left */}
      <path
        d="M70,20 Q76,18 74,14 Q72,8 64,8 Q58,8 48,10 Q32,14 20,16 Q12,17 6,20 Q12,24 20,24 Q32,26 48,22 Q58,20 64,20 Z"
        fill="rgba(50,90,130,0.3)"
        stroke="rgba(50,90,130,0.4)"
        strokeWidth="0.6"
      />
      <path
        d="M64,20 Q58,18 48,14 Q32,16 20,18 Q12,19 6,20 Q12,22 20,22 Q32,24 48,20 Z"
        fill="rgba(80,130,170,0.12)"
      />
      {/* Dorsal fin */}
      <path
        d="M48,10 Q46,4 42,3 Q44,6 44,10"
        fill="rgba(50,90,130,0.25)"
        stroke="rgba(50,90,130,0.35)"
        strokeWidth="0.5"
      />
      {/* Tail flukes */}
      <path
        d="M6,20 Q2,18 0,16 M6,20 Q2,22 0,24"
        fill="none"
        stroke="rgba(50,90,130,0.3)"
        strokeWidth="0.6"
      />
      {/* Beak */}
      <path
        d="M74,14 Q78,12 80,14"
        fill="none"
        stroke="rgba(50,90,130,0.3)"
        strokeWidth="0.5"
      />
      {/* Eye */}
      <circle cx="70" cy="16" r="1.5" fill="rgba(100,160,210,0.35)" />
      <circle cx="70" cy="15.5" r="0.6" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

function WhaleSharkSVG() {
  return (
    <svg viewBox="0 0 200 60" width={200} height={60}>
      {/* Whale shark facing right: tail on left, head on right */}
      {/* Main body */}
      <path
        d="M20,30 Q8,30 4,30 Q0,28 2,24 L10,22 Q20,18 50,16 Q80,14 120,14 Q150,14 170,18 Q185,22 190,28 Q192,30 190,32 Q185,38 170,42 Q150,46 120,46 Q80,46 50,44 Q20,42 10,38 L2,36 Q0,32 4,30 Z"
        fill="rgba(55,85,115,0.25)"
        stroke="rgba(55,85,115,0.35)"
        strokeWidth="0.6"
      />
      {/* Lighter belly */}
      <path
        d="M30,34 Q60,40 120,40 Q160,40 180,34 Q160,44 120,44 Q60,44 30,34 Z"
        fill="rgba(120,170,200,0.1)"
      />
      {/* Spots pattern */}
      {[
        [60, 20], [75, 22], [90, 19], [105, 21], [120, 18], [135, 22], [150, 20],
        [65, 28], [80, 26], [95, 28], [110, 26], [125, 28], [140, 26], [155, 28],
        [70, 34], [85, 32], [100, 34], [115, 32], [130, 34], [145, 32],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.2" fill="rgba(140,190,220,0.2)" />
      ))}
      {/* Tail fin */}
      <path
        d="M4,30 Q-4,22 -2,16 Q2,22 6,26 M4,30 Q-4,38 -2,44 Q2,38 6,34"
        fill="rgba(55,85,115,0.2)"
        stroke="rgba(55,85,115,0.3)"
        strokeWidth="0.5"
      />
      {/* Dorsal fin */}
      <path
        d="M110,14 Q108,6 104,4 Q106,8 107,14"
        fill="rgba(55,85,115,0.2)"
        stroke="rgba(55,85,115,0.3)"
        strokeWidth="0.4"
      />
      {/* Pectoral fin */}
      <path
        d="M155,34 Q160,42 165,46 Q158,42 155,38"
        fill="rgba(55,85,115,0.15)"
        stroke="rgba(55,85,115,0.25)"
        strokeWidth="0.4"
      />
      {/* Mouth line */}
      <path
        d="M188,26 Q192,28 192,30 Q192,32 188,34"
        fill="none"
        stroke="rgba(55,85,115,0.2)"
        strokeWidth="0.6"
      />
      {/* Eye */}
      <circle cx="180" cy="24" r="2" fill="rgba(90,130,160,0.3)" />
      <circle cx="180" cy="23.5" r="0.8" fill="rgba(255,255,255,0.3)" />
      {/* Gill slits */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={168 - i * 4} y1={22 + i * 0.5} x2={168 - i * 4} y2={32 + i * 0.3} stroke="rgba(55,85,115,0.12)" strokeWidth="0.5" />
      ))}
    </svg>
  );
}

interface SurfaceLifeProps {
  scrollProgress: number;
}

export function SurfaceLife({ scrollProgress }: SurfaceLifeProps) {
  const [showDolphins, setShowDolphins] = useState(false);
  const [dolphinKey, setDolphinKey] = useState(0);
  const [showWhaleShark, setShowWhaleShark] = useState(false);
  const [whaleSharkKey, setWhaleSharkKey] = useState(0);

  useEffect(() => {
    if (scrollProgress > 0.12) return;

    const triggerDolphins = () => {
      if (Math.random() < 0.35) {
        setShowDolphins(true);
        setDolphinKey((k) => k + 1);
        setTimeout(() => setShowDolphins(false), 26000);
      }
    };

    const triggerWhaleShark = () => {
      if (Math.random() < 0.2) {
        setShowWhaleShark(true);
        setWhaleSharkKey((k) => k + 1);
        setTimeout(() => setShowWhaleShark(false), 50000);
      }
    };

    const dolphinInterval = setInterval(triggerDolphins, 35000);
    const dolphinInitial = setTimeout(triggerDolphins, 6000);
    const whaleSharkInterval = setInterval(triggerWhaleShark, 60000);
    const whaleSharkInitial = setTimeout(triggerWhaleShark, 15000);

    return () => {
      clearInterval(dolphinInterval);
      clearTimeout(dolphinInitial);
      clearInterval(whaleSharkInterval);
      clearTimeout(whaleSharkInitial);
    };
  }, [scrollProgress > 0.12]);

  const surfaceOpacity = Math.max(0, 1 - scrollProgress / 0.12);
  if (surfaceOpacity <= 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[4] hidden sm:block"
      style={{ opacity: surfaceOpacity, transition: "opacity 0.5s ease" }}
    >
      {/* Jellyfish */}
      <div className="absolute animate-jelly-pulse" style={{ left: "76%", top: "42%" }}>
        <JellyfishSVG size={42} hue="purple" />
      </div>
      <div className="absolute animate-jelly-pulse" style={{ left: "16%", top: "56%", animationDelay: "1.5s" }}>
        <JellyfishSVG size={32} hue="blue" />
      </div>
      <div className="absolute animate-jelly-pulse" style={{ left: "58%", top: "66%", animationDelay: "3s" }}>
        <JellyfishSVG size={26} hue="pink" />
      </div>

      {/* Salp chains */}
      <div className="absolute animate-salp-undulate" style={{ left: "28%", top: "34%" }}>
        <SalpChainSVG />
      </div>
      <div className="absolute animate-salp-undulate" style={{ left: "52%", top: "48%", animationDelay: "4s" }}>
        <SalpChainSVG />
      </div>

      {/* Schooling fish — swimming left to right, facing right */}
      <div className="absolute animate-school-swim" style={{ top: "28%" }}>
        <SchoolingFishSVG />
      </div>
      <div className="absolute animate-school-swim" style={{ top: "60%", animationDelay: "14s" }}>
        <SchoolingFishSVG />
      </div>

      {/* Rare dolphin pod — facing right, arcing across */}
      {showDolphins && (
        <div key={`dolphin-${dolphinKey}`}>
          <div className="absolute animate-dolphin-arc" style={{ top: "25%", left: "-300px" }}>
            <DolphinSVG />
          </div>
          <div className="absolute animate-dolphin-arc" style={{ top: "31%", left: "-300px", animationDelay: "1.2s" }}>
            <DolphinSVG />
          </div>
          <div className="absolute animate-dolphin-arc" style={{ top: "21%", left: "-300px", animationDelay: "2.5s" }}>
            <DolphinSVG />
          </div>
        </div>
      )}

      {/* Rare whale shark — massive, slow, majestic */}
      {showWhaleShark && (
        <div
          key={`shark-${whaleSharkKey}`}
          className="absolute animate-whale-pass"
          style={{ top: "40%", left: "-400px" }}
        >
          <WhaleSharkSVG />
        </div>
      )}
    </div>
  );
}
