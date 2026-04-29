/** A distant whale silhouette that slowly crosses the section once */
export function Whale() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute animate-whale-pass"
        style={{ top: "35%", left: "-200px" }}
      >
        <svg
          viewBox="0 0 240 70"
          className="w-40 sm:w-52 opacity-[0.07]"
          style={{ display: "block" }}
        >
          {/* Body */}
          <path
            d="M20,35 Q50,10 100,18 Q140,12 170,22 Q195,28 210,30
               L225,24 L230,28 L220,35
               Q195,40 170,38 Q140,44 100,42 Q50,48 20,35Z"
            fill="white"
          />
          {/* Belly highlight */}
          <path
            d="M40,37 Q70,44 110,42 Q150,44 180,38"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.5"
          />
          {/* Eye */}
          <circle cx="55" cy="28" r="2.5" fill="rgba(0,20,40,0.3)" />
          {/* Pectoral fin */}
          <path
            d="M80,38 Q75,50 85,52 Q92,48 88,38"
            fill="white"
            opacity="0.6"
          />
          {/* Fluke detail */}
          <path
            d="M218,30 L228,22 L232,26 L224,34 L232,30 L228,35 L218,30"
            fill="white"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
}
