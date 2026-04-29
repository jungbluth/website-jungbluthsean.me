export function ResearchVessel() {
  return (
    <div
      className="absolute top-0 left-1/2 z-20 pointer-events-none animate-vessel-bob"
      style={{ width: "min(1000px, 90vw)", transformOrigin: "center top" }}
    >
      <svg
        viewBox="0 0 1000 90"
        className="w-full"
        style={{ display: "block" }}
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <linearGradient id="hullSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a2e" />
            <stop offset="50%" stopColor="#1c2a42" />
            <stop offset="100%" stopColor="#1e3350" />
          </linearGradient>
          <linearGradient id="redPaint" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b2222" />
            <stop offset="100%" stopColor="#6b1818" />
          </linearGradient>
          <linearGradient id="deckGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2a3e" />
            <stop offset="100%" stopColor="#1e2438" />
          </linearGradient>
          <radialGradient id="hullShadow" cx="0.5" cy="0.2" r="0.6">
            <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>

        {/* Waterline — where hull meets surface, partially cut off at top */}
        <rect x="0" y="0" width="1000" height="3" fill="rgba(255,255,255,0.06)" />

        {/* Hull side profile — below waterline */}
        {/* The hull extends from top (waterline) downward */}
        <path
          d="M180,3 L820,3 L820,8 C820,8 830,10 835,14 L850,32 C860,46 855,58 840,68 L800,78 C760,84 700,88 500,88 C300,88 240,84 200,78 L160,68 C145,58 140,46 150,32 L165,14 C170,10 180,8 180,8 Z"
          fill="url(#hullSide)"
        />

        {/* Red antifouling paint — bottom half of hull */}
        <path
          d="M175,40 L825,40 L835,48 C845,56 842,64 835,70 L800,78 C760,84 700,88 500,88 C300,88 240,84 200,78 L165,70 C158,64 155,56 165,48 Z"
          fill="url(#redPaint)"
          opacity="0.7"
        />

        {/* Deck edge — barely visible at waterline */}
        <rect x="175" y="0" width="650" height="5" fill="url(#deckGrad)" />

        {/* Hull plate seam lines — horizontal */}
        <line x1="180" y1="18" x2="820" y2="18" stroke="#14202e" strokeWidth="0.6" opacity="0.3" />
        <line x1="175" y1="35" x2="825" y2="35" stroke="#14202e" strokeWidth="0.5" opacity="0.25" />
        <line x1="180" y1="52" x2="820" y2="52" stroke="#14202e" strokeWidth="0.5" opacity="0.2" />

        {/* Hull plate seams — vertical frame lines */}
        {Array.from({ length: 9 }, (_, i) => 250 + i * 62).map((x) => (
          <line
            key={x}
            x1={x}
            y1="6"
            x2={x}
            y2="75"
            stroke="#14202e"
            strokeWidth="0.4"
            opacity="0.2"
          />
        ))}

        {/* Bow — forward section with slight flare */}
        <path
          d="M180,3 L180,8 C180,8 170,10 165,14 L150,32 C140,46 145,58 160,68"
          fill="none"
          stroke="#1e3350"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Bulbous bow — the underwater protrusion at front */}
        <ellipse cx="152" cy="55" rx="18" ry="12" fill="#1c2840" />
        <ellipse cx="150" cy="55" rx="14" ry="9" fill="#1a2538" />

        {/* Stern — aft section */}
        <path
          d="M820,3 L820,8 C820,8 830,10 835,14 L850,32 C860,46 855,58 840,68"
          fill="none"
          stroke="#1e3350"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Rudder */}
        <path
          d="M848,52 L856,52 L858,68 L860,82 L852,84 L850,68 Z"
          fill="#162030"
          opacity="0.6"
        />

        {/* Propeller */}
        <g opacity="0.4">
          <ellipse cx="842" cy="72" rx="3" ry="12" fill="#2a3a50" transform="rotate(-20,842,72)" />
          <ellipse cx="842" cy="72" rx="3" ry="12" fill="#2a3a50" transform="rotate(40,842,72)" />
          <ellipse cx="842" cy="72" rx="3" ry="12" fill="#2a3a50" transform="rotate(100,842,72)" />
          <circle cx="842" cy="72" r="3" fill="#1a2840" />
        </g>

        {/* Bow thruster tunnel */}
        <circle cx="220" cy="32" r="6" fill="#0e1824" opacity="0.5" />
        <circle cx="220" cy="32" r="4" fill="#0a1018" opacity="0.3" />

        {/* Portholes / sonar windows */}
        {[320, 400, 500, 600, 680].map((x) => (
          <g key={x}>
            <circle cx={x} cy="22" r="3.5" fill="#0c1420" opacity="0.4" />
            <circle cx={x} cy="22" r="2.5" fill="#0a1a2e" opacity="0.3" />
          </g>
        ))}

        {/* Zinc anodes */}
        <rect x="280" y="44" width="12" height="4" rx="1" fill="#6a7a6a" opacity="0.2" />
        <rect x="500" y="44" width="12" height="4" rx="1" fill="#6a7a6a" opacity="0.2" />
        <rect x="720" y="44" width="12" height="4" rx="1" fill="#6a7a6a" opacity="0.2" />

        {/* Waterline boot stripe — red/black line at water level */}
        <line x1="175" y1="5" x2="825" y2="5" stroke="#4a1010" strokeWidth="1.5" opacity="0.4" />

        {/* Shadow below hull */}
        <ellipse cx="500" cy="92" rx="350" ry="6" fill="url(#hullShadow)" />

        {/* Water surface ripples near hull */}
        <path
          d="M120,3 Q140,7 160,3 Q170,1 180,3"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
        <path
          d="M820,3 Q840,7 860,3 Q870,1 880,3"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
