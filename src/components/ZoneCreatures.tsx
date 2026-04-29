interface CreatureData {
  name: string;
  depth: string;
  progressMin: number;
  progressMax: number;
  x: string;
  y: string;
  w: number;
  h: number;
  driftDuration: number;
  driftDelay: number;
}

const creatures: CreatureData[] = [
  // Epipelagic — surface familiar life
  { name: "jellyfish", depth: "50m", progressMin: 0.01, progressMax: 0.05, x: "85%", y: "25%", w: 40, h: 56, driftDuration: 18, driftDelay: 0 },
  { name: "seaturtle", depth: "80m", progressMin: 0.02, progressMax: 0.06, x: "15%", y: "45%", w: 60, h: 40, driftDuration: 16, driftDelay: 1 },
  { name: "mantaray", depth: "150m", progressMin: 0.03, progressMax: 0.08, x: "70%", y: "55%", w: 72, h: 36, driftDuration: 20, driftDelay: 0 },

  // Mesopelagic — twilight zone
  { name: "lanternfish", depth: "400m", progressMin: 0.06, progressMax: 0.12, x: "80%", y: "30%", w: 44, h: 24, driftDuration: 14, driftDelay: 2 },
  { name: "siphonophore", depth: "700m", progressMin: 0.1, progressMax: 0.18, x: "12%", y: "40%", w: 30, h: 80, driftDuration: 22, driftDelay: 0 },

  // Bathypelagic — midnight zone
  { name: "vampiresquid", depth: "1,200m", progressMin: 0.18, progressMax: 0.3, x: "78%", y: "35%", w: 50, h: 52, driftDuration: 20, driftDelay: 1 },
  { name: "giantsquid", depth: "1,800m", progressMin: 0.28, progressMax: 0.4, x: "10%", y: "50%", w: 44, h: 64, driftDuration: 18, driftDelay: 3 },

  // Abyssopelagic — the abyss
  { name: "anglerfish", depth: "3,500m", progressMin: 0.5, progressMax: 0.65, x: "80%", y: "45%", w: 52, h: 36, driftDuration: 22, driftDelay: 1 },
  { name: "isopod", depth: "4,000m", progressMin: 0.6, progressMax: 0.72, x: "15%", y: "55%", w: 44, h: 24, driftDuration: 18, driftDelay: 4 },

  // Hadopelagic — Juan de Fuca vent life
  { name: "tubeworms", depth: "5,000m", progressMin: 0.75, progressMax: 0.88, x: "75%", y: "65%", w: 56, h: 64, driftDuration: 0, driftDelay: 0 },
  { name: "ventshrimp", depth: "5,200m", progressMin: 0.78, progressMax: 0.9, x: "20%", y: "50%", w: 36, h: 20, driftDuration: 12, driftDelay: 2 },
  { name: "ventcrab", depth: "5,500m", progressMin: 0.82, progressMax: 0.95, x: "60%", y: "60%", w: 40, h: 28, driftDuration: 10, driftDelay: 0 },
];

function JellyfishSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 40 56" width={w} height={h}>
      <ellipse cx="20" cy="14" rx="14" ry="12" fill="rgba(180,140,255,0.12)" stroke="rgba(180,140,255,0.2)" strokeWidth="0.5" />
      <ellipse cx="20" cy="16" rx="10" ry="6" fill="rgba(200,160,255,0.06)" />
      <path d="M10,22 Q8,32 12,42 Q14,48 10,54" fill="none" stroke="rgba(180,140,255,0.1)" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M16,24 Q14,36 16,46 Q18,52 15,56" fill="none" stroke="rgba(180,140,255,0.08)" strokeWidth="0.6" />
      <path d="M24,24 Q26,36 24,46 Q22,52 25,56" fill="none" stroke="rgba(180,140,255,0.08)" strokeWidth="0.6" />
      <path d="M30,22 Q32,32 28,42 Q26,48 30,54" fill="none" stroke="rgba(180,140,255,0.1)" strokeWidth="0.8" strokeLinecap="round" />
      <ellipse cx="20" cy="12" rx="8" ry="5" fill="rgba(220,200,255,0.05)" />
    </svg>
  );
}

function SeaTurtleSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 60 40" width={w} height={h}>
      <ellipse cx="28" cy="20" rx="16" ry="12" fill="rgba(100,180,120,0.15)" stroke="rgba(100,180,120,0.22)" strokeWidth="0.5" />
      {/* Shell pattern */}
      <path d="M20,14 L28,10 L36,14" fill="none" stroke="rgba(80,150,100,0.1)" strokeWidth="0.4" />
      <path d="M18,20 L28,16 L38,20" fill="none" stroke="rgba(80,150,100,0.1)" strokeWidth="0.4" />
      <path d="M20,26 L28,22 L36,26" fill="none" stroke="rgba(80,150,100,0.1)" strokeWidth="0.4" />
      {/* Head */}
      <ellipse cx="46" cy="18" rx="6" ry="5" fill="rgba(120,190,140,0.12)" />
      <circle cx="49" cy="17" r="1.2" fill="rgba(200,230,200,0.25)" />
      {/* Flippers */}
      <path d="M18,14 Q8,8 4,12" fill="none" stroke="rgba(100,180,120,0.15)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18,26 Q8,32 4,28" fill="none" stroke="rgba(100,180,120,0.15)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38,14 Q44,10 48,12" fill="none" stroke="rgba(100,180,120,0.12)" strokeWidth="1" strokeLinecap="round" />
      <path d="M38,26 Q44,30 48,28" fill="none" stroke="rgba(100,180,120,0.12)" strokeWidth="1" strokeLinecap="round" />
      {/* Tail */}
      <path d="M12,20 L6,21" stroke="rgba(100,180,120,0.1)" strokeWidth="0.8" />
    </svg>
  );
}

function MantaRaySVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 72 36" width={w} height={h}>
      <path d="M36,8 Q20,2 4,14 Q2,18 8,22 Q20,28 36,20 Q52,28 64,22 Q70,18 68,14 Q52,2 36,8 Z" fill="rgba(100,140,200,0.12)" stroke="rgba(100,140,200,0.2)" strokeWidth="0.5" />
      <path d="M36,20 L36,34 Q35,36 34,34" fill="none" stroke="rgba(100,140,200,0.12)" strokeWidth="0.8" />
      <ellipse cx="36" cy="14" rx="10" ry="5" fill="rgba(120,160,220,0.05)" />
      <circle cx="26" cy="14" r="1.5" fill="rgba(180,210,240,0.2)" />
      <circle cx="46" cy="14" r="1.5" fill="rgba(180,210,240,0.2)" />
      {/* Cephalic fins */}
      <path d="M30,8 Q28,2 26,4" fill="none" stroke="rgba(100,140,200,0.15)" strokeWidth="1" strokeLinecap="round" />
      <path d="M42,8 Q44,2 46,4" fill="none" stroke="rgba(100,140,200,0.15)" strokeWidth="1" strokeLinecap="round" />
      {/* Gill slits */}
      <line x1="30" y1="18" x2="30" y2="16" stroke="rgba(80,120,180,0.1)" strokeWidth="0.4" />
      <line x1="33" y1="19" x2="33" y2="17" stroke="rgba(80,120,180,0.1)" strokeWidth="0.4" />
      <line x1="39" y1="19" x2="39" y2="17" stroke="rgba(80,120,180,0.1)" strokeWidth="0.4" />
      <line x1="42" y1="18" x2="42" y2="16" stroke="rgba(80,120,180,0.1)" strokeWidth="0.4" />
    </svg>
  );
}

function LanternfishSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 44 24" width={w} height={h}>
      <ellipse cx="20" cy="12" rx="14" ry="8" fill="rgba(80,120,180,0.12)" stroke="rgba(80,120,180,0.2)" strokeWidth="0.5" />
      <path d="M34,12 L42,6 L42,18 Z" fill="rgba(80,120,180,0.1)" />
      {/* Photophores — bioluminescent dots */}
      <circle cx="10" cy="14" r="1.2" fill="rgba(100,255,218,0.35)">
        <animate attributeName="opacity" values="0.35;0.7;0.35" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="16" cy="16" r="1" fill="rgba(100,255,218,0.3)">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.8s" repeatCount="indefinite" begin="0.3s" />
      </circle>
      <circle cx="22" cy="15" r="0.8" fill="rgba(100,255,218,0.25)">
        <animate attributeName="opacity" values="0.25;0.55;0.25" dur="2s" repeatCount="indefinite" begin="0.6s" />
      </circle>
      <circle cx="28" cy="14" r="0.7" fill="rgba(100,255,218,0.2)">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.6s" repeatCount="indefinite" begin="0.9s" />
      </circle>
      {/* Eye */}
      <circle cx="10" cy="10" r="2.5" fill="rgba(140,180,220,0.25)" />
      <circle cx="9.5" cy="9.5" r="1" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

function SiphonophoreSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 30 80" width={w} height={h}>
      {/* Float */}
      <ellipse cx="15" cy="6" rx="6" ry="4" fill="rgba(255,140,200,0.1)" stroke="rgba(255,140,200,0.15)" strokeWidth="0.4" />
      {/* Chain of zooids */}
      {[12, 20, 28, 36, 44, 52].map((y, i) => (
        <g key={y}>
          <ellipse cx={15 + Math.sin(i * 1.2) * 3} cy={y} rx={3 - i * 0.3} ry={2.5} fill={`rgba(255,${140 - i * 10},${200 - i * 15},${0.1 - i * 0.01})`} />
          <circle cx={15 + Math.sin(i * 1.2) * 3} cy={y} r={1} fill={`rgba(100,255,218,${0.2 - i * 0.02})`}>
            <animate attributeName="opacity" values={`${0.2 - i * 0.02};${0.4 - i * 0.03};${0.2 - i * 0.02}`} dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      {/* Trailing tentacles */}
      <path d="M12,55 Q10,65 14,75" fill="none" stroke="rgba(255,140,200,0.06)" strokeWidth="0.4" />
      <path d="M18,55 Q20,65 16,75" fill="none" stroke="rgba(255,140,200,0.06)" strokeWidth="0.4" />
    </svg>
  );
}

function VampireSquidSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 50 52" width={w} height={h}>
      {/* Mantle */}
      <path d="M25,4 Q38,8 40,20 Q42,30 36,36 Q30,40 25,42 Q20,40 14,36 Q8,30 10,20 Q12,8 25,4 Z" fill="rgba(120,40,60,0.15)" stroke="rgba(140,50,70,0.2)" strokeWidth="0.5" />
      {/* Web between arms */}
      <path d="M14,36 Q8,42 6,48 Q12,44 18,40 Z" fill="rgba(120,40,60,0.08)" />
      <path d="M36,36 Q42,42 44,48 Q38,44 32,40 Z" fill="rgba(120,40,60,0.08)" />
      {/* Eyes — huge blue */}
      <circle cx="18" cy="18" r="4" fill="rgba(100,150,255,0.2)" />
      <circle cx="32" cy="18" r="4" fill="rgba(100,150,255,0.2)" />
      <circle cx="18" cy="18" r="2" fill="rgba(60,100,200,0.3)" />
      <circle cx="32" cy="18" r="2" fill="rgba(60,100,200,0.3)" />
      <circle cx="17" cy="17" r="0.8" fill="rgba(255,255,255,0.3)" />
      <circle cx="31" cy="17" r="0.8" fill="rgba(255,255,255,0.3)" />
      {/* Photophores on arm tips */}
      <circle cx="6" cy="48" r="1.5" fill="rgba(100,200,255,0.25)">
        <animate attributeName="opacity" values="0.25;0.6;0.25" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="44" cy="48" r="1.5" fill="rgba(100,200,255,0.25)">
        <animate attributeName="opacity" values="0.25;0.6;0.25" dur="2.5s" repeatCount="indefinite" begin="1.2s" />
      </circle>
      {/* Fin "ears" */}
      <ellipse cx="10" cy="12" rx="5" ry="3" fill="rgba(120,40,60,0.1)" transform="rotate(-20 10 12)" />
      <ellipse cx="40" cy="12" rx="5" ry="3" fill="rgba(120,40,60,0.1)" transform="rotate(20 40 12)" />
    </svg>
  );
}

function GiantSquidSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 44 64" width={w} height={h}>
      <ellipse cx="22" cy="16" rx="12" ry="14" fill="rgba(180,80,80,0.12)" stroke="rgba(180,80,80,0.18)" strokeWidth="0.5" />
      <ellipse cx="22" cy="12" rx="7" ry="8" fill="rgba(200,100,100,0.05)" />
      {/* Huge eyes */}
      <circle cx="16" cy="14" r="4" fill="rgba(220,180,100,0.18)" />
      <circle cx="28" cy="14" r="4" fill="rgba(220,180,100,0.18)" />
      <circle cx="16" cy="14" r="2" fill="rgba(20,20,20,0.2)" />
      <circle cx="28" cy="14" r="2" fill="rgba(20,20,20,0.2)" />
      <circle cx="15" cy="13" r="0.8" fill="rgba(255,255,255,0.2)" />
      <circle cx="27" cy="13" r="0.8" fill="rgba(255,255,255,0.2)" />
      {/* Arms */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <path
          key={i}
          d={`M${14 + i * 2.2},30 Q${12 + i * 2.5},42 ${10 + i * 3},${54 + (i % 3) * 3}`}
          fill="none"
          stroke="rgba(180,80,80,0.1)"
          strokeWidth={i === 3 || i === 4 ? "1.2" : "0.7"}
          strokeLinecap="round"
        />
      ))}
      {/* Suckers on two long tentacles */}
      {[38, 44, 50].map((y) => (
        <g key={`s-${y}`}>
          <circle cx={10 + (y - 38) * 0.3} cy={y} r="1" fill="rgba(180,80,80,0.08)" />
          <circle cx={34 - (y - 38) * 0.3} cy={y} r="1" fill="rgba(180,80,80,0.08)" />
        </g>
      ))}
    </svg>
  );
}

function TubeWormsSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 56 64" width={w} height={h}>
      {/* Cluster of Riftia tube worms */}
      {[
        { x: 10, h: 50, tip: "#cc3030" },
        { x: 16, h: 56, tip: "#dd4040" },
        { x: 22, h: 44, tip: "#bb2828" },
        { x: 28, h: 60, tip: "#cc3535" },
        { x: 34, h: 48, tip: "#dd3838" },
        { x: 40, h: 54, tip: "#c42e2e" },
        { x: 46, h: 42, tip: "#bb3030" },
      ].map((worm, i) => {
        const baseY = 64;
        const topY = baseY - worm.h;
        return (
          <g key={i}>
            {/* White tube */}
            <rect x={worm.x - 2} y={topY + 8} width={4} height={worm.h - 8} rx="1" fill="rgba(200,200,200,0.12)" />
            {/* Red plume */}
            <circle cx={worm.x} cy={topY + 4} r="4" fill={`${worm.tip}30`} />
            <circle cx={worm.x} cy={topY + 4} r="2" fill={`${worm.tip}40`}>
              <animate attributeName="r" values="2;3;2" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}
      {/* Base rock */}
      <ellipse cx="28" cy="62" rx="24" ry="3" fill="rgba(40,30,20,0.15)" />
    </svg>
  );
}

function VentShrimpSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 36 20" width={w} height={h}>
      {/* Rimicaris-style vent shrimp */}
      <path d="M6,10 Q4,6 8,4 Q14,2 22,4 Q28,6 30,10 Q28,14 22,16 Q14,18 8,16 Q4,14 6,10 Z" fill="rgba(255,180,160,0.12)" stroke="rgba(255,180,160,0.18)" strokeWidth="0.4" />
      {/* Segments */}
      <line x1="12" y1="4" x2="12" y2="16" stroke="rgba(255,160,140,0.06)" strokeWidth="0.3" />
      <line x1="18" y1="3" x2="18" y2="17" stroke="rgba(255,160,140,0.06)" strokeWidth="0.3" />
      <line x1="24" y1="4" x2="24" y2="16" stroke="rgba(255,160,140,0.06)" strokeWidth="0.3" />
      {/* Legs */}
      {[10, 14, 18, 22, 26].map((x) => (
        <line key={x} x1={x} y1="16" x2={x - 1} y2="20" stroke="rgba(255,180,160,0.1)" strokeWidth="0.4" />
      ))}
      {/* Antennae */}
      <path d="M8,6 Q4,2 2,0" fill="none" stroke="rgba(255,180,160,0.1)" strokeWidth="0.4" />
      <path d="M8,8 Q3,5 1,4" fill="none" stroke="rgba(255,180,160,0.08)" strokeWidth="0.3" />
      {/* Dorsal eye (heat-sensing organ) */}
      <ellipse cx="14" cy="6" rx="3" ry="1.5" fill="rgba(255,255,200,0.15)">
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="3s" repeatCount="indefinite" />
      </ellipse>
    </svg>
  );
}

function VentCrabSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 40 28" width={w} height={h}>
      {/* Bythograeid crab — white/pale */}
      <ellipse cx="20" cy="14" rx="12" ry="8" fill="rgba(220,210,200,0.12)" stroke="rgba(220,210,200,0.18)" strokeWidth="0.5" />
      <ellipse cx="20" cy="12" rx="8" ry="5" fill="rgba(230,220,210,0.05)" />
      {/* Eyestalks */}
      <circle cx="16" cy="8" r="1.5" fill="rgba(200,190,180,0.2)" />
      <circle cx="24" cy="8" r="1.5" fill="rgba(200,190,180,0.2)" />
      {/* Claws */}
      <path d="M8,14 Q4,10 2,12 Q0,14 3,16 Q6,18 8,16" fill="rgba(220,210,200,0.1)" stroke="rgba(220,210,200,0.15)" strokeWidth="0.4" />
      <path d="M32,14 Q36,10 38,12 Q40,14 37,16 Q34,18 32,16" fill="rgba(220,210,200,0.1)" stroke="rgba(220,210,200,0.15)" strokeWidth="0.4" />
      {/* Legs */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <path d={`M${10 - i},${16 + i} Q${6 - i * 2},${20 + i} ${4 - i * 2},${24 + i}`} fill="none" stroke="rgba(220,210,200,0.1)" strokeWidth="0.5" />
          <path d={`M${30 + i},${16 + i} Q${34 + i * 2},${20 + i} ${36 + i * 2},${24 + i}`} fill="none" stroke="rgba(220,210,200,0.1)" strokeWidth="0.5" />
        </g>
      ))}
    </svg>
  );
}

function IsopodSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 44 24" width={w} height={h}>
      <ellipse cx="22" cy="12" rx="18" ry="9" fill="rgba(160,170,190,0.12)" stroke="rgba(160,170,190,0.2)" strokeWidth="0.5" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <ellipse key={i} cx={8 + i * 6} cy="12" rx="3.5" ry="8.5" fill="none" stroke="rgba(160,170,190,0.08)" strokeWidth="0.4" />
      ))}
      <ellipse cx="22" cy="12" rx="14" ry="6" fill="rgba(170,180,200,0.05)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <line x1={10 + i * 6} y1="20" x2={8 + i * 6} y2="24" stroke="rgba(160,170,190,0.1)" strokeWidth="0.5" />
          <line x1={10 + i * 6} y1="4" x2={8 + i * 6} y2="0" stroke="rgba(160,170,190,0.1)" strokeWidth="0.5" />
        </g>
      ))}
      <circle cx="6" cy="10" r="1.5" fill="rgba(200,210,230,0.15)" />
      <circle cx="6" cy="14" r="1.5" fill="rgba(200,210,230,0.15)" />
    </svg>
  );
}

function AnglerfishSVG({ w, h }: { w: number; h: number }) {
  return (
    <svg viewBox="0 0 52 36" width={w} height={h}>
      <path d="M10,10 Q4,18 10,26 Q18,32 30,28 Q40,24 44,18 Q40,12 30,8 Q18,4 10,10 Z" fill="rgba(80,60,100,0.15)" stroke="rgba(100,80,140,0.2)" strokeWidth="0.5" />
      <path d="M10,10 Q4,18 10,26 Q14,28 18,24 Q12,18 18,12 Q14,8 10,10 Z" fill="rgba(90,70,110,0.08)" />
      <circle cx="18" cy="16" r="3.5" fill="rgba(120,100,160,0.2)" />
      <circle cx="17.5" cy="15.5" r="1.5" fill="rgba(255,255,255,0.2)" />
      <path d="M8,10 Q6,4 10,2 Q12,1 13,3" fill="none" stroke="rgba(100,80,140,0.15)" strokeWidth="0.6" />
      <circle cx="10" cy="2" r="2.5" fill="rgba(100,255,218,0.3)">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="2" r="1" fill="rgba(100,255,218,0.6)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M44,15 L48,13 M44,18 L49,18 M44,21 L48,23" fill="none" stroke="rgba(80,60,100,0.12)" strokeWidth="0.5" />
    </svg>
  );
}

const svgMap: Record<string, React.FC<{ w: number; h: number }>> = {
  jellyfish: JellyfishSVG,
  seaturtle: SeaTurtleSVG,
  mantaray: MantaRaySVG,
  lanternfish: LanternfishSVG,
  siphonophore: SiphonophoreSVG,
  vampiresquid: VampireSquidSVG,
  giantsquid: GiantSquidSVG,
  anglerfish: AnglerfishSVG,
  isopod: IsopodSVG,
  tubeworms: TubeWormsSVG,
  ventshrimp: VentShrimpSVG,
  ventcrab: VentCrabSVG,
};

const depthLabels: Record<string, string> = {
  jellyfish: "Jellyfish",
  seaturtle: "Sea Turtle",
  mantaray: "Manta Ray",
  lanternfish: "Lanternfish",
  siphonophore: "Siphonophore",
  vampiresquid: "Vampire Squid",
  giantsquid: "Giant Squid",
  anglerfish: "Anglerfish",
  isopod: "Giant Isopod",
  tubeworms: "Riftia Tube Worms",
  ventshrimp: "Vent Shrimp",
  ventcrab: "Vent Crab",
};

export function ZoneCreatures({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] hidden sm:block">
      {creatures.map((c) => {
        const mid = (c.progressMin + c.progressMax) / 2;
        const half = (c.progressMax - c.progressMin) / 2;
        const dist = Math.abs(scrollProgress - mid);
        const opacity = Math.max(0, 1 - dist / half);

        if (opacity <= 0) return null;

        const SVGComponent = svgMap[c.name];
        if (!SVGComponent) return null;

        return (
          <div
            key={c.name}
            className={c.driftDuration > 0 ? "absolute animate-jelly-drift" : "absolute"}
            style={{
              left: c.x,
              top: c.y,
              opacity: opacity * 0.8,
              animationDuration: c.driftDuration > 0 ? `${c.driftDuration}s` : undefined,
              animationDelay: c.driftDelay > 0 ? `${c.driftDelay}s` : undefined,
              transition: "opacity 0.5s ease",
            }}
          >
            <div className="relative">
              <SVGComponent w={c.w} h={c.h} />
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] tracking-wider text-center"
                style={{ color: "rgba(100, 255, 218, 0.35)", opacity }}
              >
                <div>{depthLabels[c.name] ?? c.name}</div>
                <div style={{ opacity: 0.6 }}>{c.depth}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
