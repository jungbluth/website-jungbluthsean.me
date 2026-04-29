export function SeaFloor() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1200 200"
        className="w-full"
        style={{ display: "block", minWidth: "800px" }}
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="seabed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0e14" />
            <stop offset="40%" stopColor="#12161e" />
            <stop offset="100%" stopColor="#1a1e26" />
          </linearGradient>
          <linearGradient id="trenchWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0e1218" />
            <stop offset="100%" stopColor="#060810" />
          </linearGradient>
          <linearGradient id="sediment" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e2228" />
            <stop offset="100%" stopColor="#161a20" />
          </linearGradient>
          <radialGradient id="ventGlow" cx="0.5" cy="0" r="0.8">
            <stop offset="0%" stopColor="rgba(255,140,40,0.15)" />
            <stop offset="50%" stopColor="rgba(255,100,20,0.05)" />
            <stop offset="100%" stopColor="rgba(255,80,0,0)" />
          </radialGradient>
          <radialGradient id="ventGlow2" cx="0.5" cy="0" r="0.6">
            <stop offset="0%" stopColor="rgba(200,120,40,0.1)" />
            <stop offset="100%" stopColor="rgba(200,80,20,0)" />
          </radialGradient>
        </defs>

        {/* Main seafloor terrain — irregular rocky surface */}
        <path
          d="M0,140 L40,138 Q80,132 120,136 Q160,130 200,134 Q240,128 280,132
           Q320,126 360,130 L400,125 Q420,120 440,122 L460,118
           Q480,115 500,110 Q510,108 520,112 Q540,118 560,115
           Q580,120 600,122 Q620,118 640,124 Q680,128 720,126
           Q760,132 800,130 Q840,136 880,134 Q920,138 960,136
           Q1000,140 1040,138 Q1080,142 1120,140 L1160,138 L1200,140
           L1200,200 L0,200 Z"
          fill="url(#seabed)"
        />

        {/* Sediment layer — lighter surface */}
        <path
          d="M0,142 L40,140 Q80,134 120,138 Q160,132 200,136 Q240,130 280,134
           Q320,128 360,132 L400,127 Q420,122 440,124 L460,120
           Q480,117 500,112 Q510,110 520,114 Q540,120 560,117
           Q580,122 600,124 Q620,120 640,126 Q680,130 720,128
           Q760,134 800,132 Q840,138 880,136 Q920,140 960,138
           Q1000,142 1040,140 Q1080,144 1120,142 L1160,140 L1200,142
           L1200,145 L0,145 Z"
          fill="url(#sediment)"
          opacity="0.5"
        />

        {/* Deep trench opening — the abyss below */}
        <path
          d="M440,122 L460,118 Q480,115 500,110 Q510,108 520,112 Q540,118 560,115
           L560,200 L440,200 Z"
          fill="url(#trenchWall)"
        />
        {/* Trench shadow */}
        <path
          d="M455,120 Q480,115 500,110 Q510,108 520,114 L545,118
           L540,200 L460,200 Z"
          fill="#020408"
          opacity="0.6"
        />

        {/* Hydrothermal vent — black smoker chimney */}
        <path
          d="M375,132 L370,100 Q368,92 372,88 L378,88 Q382,92 380,100 L385,132 Z"
          fill="#1a1610"
        />
        <path
          d="M372,100 L370,92 Q369,88 372,86 L378,86 Q381,88 380,92 L378,100 Z"
          fill="#2a2218"
        />
        {/* Vent smoke/shimmer */}
        <ellipse cx="375" cy="78" rx="15" ry="20" fill="url(#ventGlow)" />
        <ellipse cx="377" cy="70" rx="8" ry="14" fill="url(#ventGlow2)" />

        {/* Smaller vent chimney */}
        <path
          d="M780,128 L778,110 Q777,106 779,104 L783,104 Q785,106 784,110 L786,128 Z"
          fill="#1a1610"
        />
        <ellipse cx="781" cy="98" rx="8" ry="12" fill="url(#ventGlow2)" />

        {/* Rocky outcrops */}
        <path
          d="M150,136 L145,128 Q143,124 148,122 L156,122 Q160,124 158,128 L155,136 Z"
          fill="#181c24"
        />
        <path
          d="M680,126 L676,118 Q674,114 678,112 L686,112 Q690,114 688,118 L685,126 Z"
          fill="#181c24"
        />
        <path
          d="M900,136 L895,126 Q893,122 897,120 L905,120 Q909,122 907,126 L903,136 Z"
          fill="#181c24"
        />

        {/* Tube worms near the vent */}
        {[355, 360, 365, 390, 395].map((x, i) => (
          <path
            key={x}
            d={`M${x},132 Q${x + (i % 2 === 0 ? 2 : -2)},${124 - i * 2} ${x + (i % 2 === 0 ? 4 : -3)},${118 - i * 2}`}
            fill="none"
            stroke="#8a2020"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={0.4 - i * 0.05}
          />
        ))}
        {/* Tube worm tips — white/red */}
        {[355, 360, 365, 390, 395].map((x, i) => (
          <circle
            key={`tip-${x}`}
            cx={x + (i % 2 === 0 ? 4 : -3)}
            cy={117 - i * 2}
            r="1.5"
            fill="#cc4040"
            opacity={0.35 - i * 0.04}
          />
        ))}

        {/* Scattered rocks / debris */}
        {[100, 250, 420, 620, 850, 1050].map((x, i) => (
          <ellipse
            key={`rock-${x}`}
            cx={x}
            cy={138 - (i % 3) * 2}
            rx={3 + (i % 2) * 2}
            ry={2 + (i % 2)}
            fill="#161a22"
            opacity={0.4}
          />
        ))}

        {/* Manganese nodules scattered on the seabed */}
        {[80, 200, 310, 500, 650, 760, 920, 1100].map((x, i) => (
          <circle
            key={`nodule-${x}`}
            cx={x}
            cy={140 + (i % 3) * 2}
            r={1.5 + (i % 2)}
            fill="#1e2228"
            opacity={0.35}
          />
        ))}
      </svg>
    </div>
  );
}
