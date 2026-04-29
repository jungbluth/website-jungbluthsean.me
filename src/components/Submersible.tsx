export function Submersible() {
  return (
    <div className="inline-block">
      <svg
        viewBox="0 0 260 120"
        className="w-36 sm:w-44 md:w-52"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id="subBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8e0d0" />
            <stop offset="40%" stopColor="#d4cbb8" />
            <stop offset="100%" stopColor="#c0b8a0" />
          </linearGradient>
          <linearGradient id="subBottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d45500" />
            <stop offset="100%" stopColor="#b84400" />
          </linearGradient>
          <radialGradient id="spotlight" cx="0.3" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="rgba(255,255,200,0.25)" />
            <stop offset="60%" stopColor="rgba(255,255,200,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,200,0)" />
          </radialGradient>
          <radialGradient id="viewportGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(180,220,255,0.6)" />
            <stop offset="70%" stopColor="rgba(100,180,255,0.2)" />
            <stop offset="100%" stopColor="rgba(60,120,200,0.1)" />
          </radialGradient>
        </defs>

        {/* Headlight beam — shining forward/down */}
        <ellipse
          cx="40"
          cy="75"
          rx="50"
          ry="35"
          fill="url(#spotlight)"
          transform="rotate(-15,40,75)"
        />

        {/* Main pressure hull — the big sphere */}
        <ellipse cx="130" cy="50" rx="55" ry="38" fill="url(#subBody)" />

        {/* Orange/red lower fairing */}
        <path
          d="M75,55 Q75,75 90,82 L110,88 Q130,92 150,88 L170,82 Q185,75 185,55 Z"
          fill="url(#subBottom)"
        />

        {/* Hull seam line */}
        <ellipse
          cx="130"
          cy="50"
          rx="55"
          ry="38"
          fill="none"
          stroke="#b0a890"
          strokeWidth="0.8"
          opacity="0.4"
        />

        {/* Horizontal seam */}
        <path
          d="M75,52 Q100,55 130,56 Q160,55 185,52"
          fill="none"
          stroke="#a09880"
          strokeWidth="0.6"
          opacity="0.3"
        />

        {/* Viewport — the observation window */}
        <circle cx="100" cy="52" r="11" fill="#0a1830" />
        <circle cx="100" cy="52" r="9.5" fill="url(#viewportGlow)" />
        <circle
          cx="100"
          cy="52"
          r="11"
          fill="none"
          stroke="#8a8070"
          strokeWidth="1.5"
        />
        {/* Viewport reflection */}
        <ellipse cx="97" cy="48" rx="3" ry="2" fill="rgba(255,255,255,0.2)" />

        {/* Second smaller viewport */}
        <circle cx="120" cy="42" r="6" fill="#0a1830" />
        <circle cx="120" cy="42" r="5" fill="url(#viewportGlow)" opacity="0.7" />
        <circle
          cx="120"
          cy="42"
          r="6"
          fill="none"
          stroke="#8a8070"
          strokeWidth="1"
        />

        {/* Sail / top fairing */}
        <path
          d="M115,14 L118,12 L145,12 L148,14 L150,20 Q150,25 148,28 L115,28 Q113,25 113,20 Z"
          fill="#c8c0b0"
          stroke="#a09880"
          strokeWidth="0.5"
        />
        {/* Sail details */}
        <rect x="125" y="8" width="3" height="6" rx="1" fill="#9a9080" opacity="0.5" />
        <rect x="132" y="6" width="2" height="8" rx="0.5" fill="#8a8070" opacity="0.5" />

        {/* Thruster shroud — aft */}
        <path
          d="M180,40 L200,36 Q210,38 212,45 L212,60 Q210,67 200,68 L180,65 Z"
          fill="#b84400"
          opacity="0.8"
        />
        <ellipse cx="212" cy="52" rx="6" ry="14" fill="#0a1830" opacity="0.4" />
        {/* Propeller */}
        <ellipse cx="216" cy="52" rx="3" ry="11" fill="#506070" opacity="0.3" />

        {/* Manipulator arm — folded */}
        <path
          d="M88,78 L72,85 L65,82 L60,88 L55,86"
          fill="none"
          stroke="#9a9080"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Gripper */}
        <path
          d="M55,86 L52,83 M55,86 L52,89"
          fill="none"
          stroke="#9a9080"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Sample basket */}
        <rect x="95" y="88" width="30" height="12" rx="2" fill="none" stroke="#706858" strokeWidth="1" opacity="0.4" />
        <line x1="100" y1="88" x2="100" y2="100" stroke="#706858" strokeWidth="0.5" opacity="0.3" />
        <line x1="110" y1="88" x2="110" y2="100" stroke="#706858" strokeWidth="0.5" opacity="0.3" />
        <line x1="120" y1="88" x2="120" y2="100" stroke="#706858" strokeWidth="0.5" opacity="0.3" />

        {/* Headlight housing */}
        <circle cx="78" cy="62" r="5" fill="#d0c8b8" />
        <circle cx="78" cy="62" r="3.5" fill="#ffe8a0" opacity="0.8" />
        <circle cx="78" cy="62" r="2" fill="#fff4d0" />

        {/* Identification marking */}
        <text
          x="140"
          y="60"
          fill="#7a7060"
          fontSize="7"
          fontFamily="monospace"
          opacity="0.5"
        >
          6500
        </text>
      </svg>
    </div>
  );
}
