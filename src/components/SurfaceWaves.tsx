interface SurfaceWavesProps {
  scrollProgress: number;
}

export function SurfaceWaves({ scrollProgress }: SurfaceWavesProps) {
  const opacity = Math.max(0, 1 - scrollProgress / 0.08);
  if (opacity <= 0) return null;

  return (
    <div
      className="fixed inset-x-0 top-0 pointer-events-none z-[3]"
      style={{ opacity, transition: "opacity 0.5s ease" }}
    >
      <svg
        viewBox="0 0 1440 120"
        className="w-full"
        style={{ height: "60px" }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 Q120,40 240,60 T480,60 T720,60 T960,60 T1200,60 T1440,60 L1440,0 L0,0 Z"
          fill="rgba(255,255,255,0.06)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -240,0; 0,0"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M0,50 Q180,30 360,50 T720,50 T1080,50 T1440,50 L1440,0 L0,0 Z"
          fill="rgba(255,255,255,0.04)"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 180,0; 0,0"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Horizontal light ripples across the surface */}
      <div className="absolute top-[15px] left-0 right-0 overflow-hidden" style={{ height: "40px" }}>
        <div
          className="absolute inset-0"
          style={{
            background: "repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.03) 2px, transparent 4px)",
            animation: "wave-shimmer 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "repeating-linear-gradient(90deg, transparent, rgba(255,255,255,0.02) 3px, transparent 6px)",
            animation: "wave-shimmer 9s ease-in-out infinite reverse",
          }}
        />
      </div>

      <style>{`
        @keyframes wave-shimmer {
          0%, 100% { transform: translateX(-20px); opacity: 0.5; }
          50% { transform: translateX(20px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
