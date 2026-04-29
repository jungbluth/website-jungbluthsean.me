/** Translucent jellyfish that drift across a section */
export function Jellyfish() {
  const jellies = [
    { left: "12%", size: 38, delay: 0, duration: 18, top: "20%" },
    { left: "72%", size: 28, delay: 6, duration: 22, top: "45%" },
    { left: "45%", size: 22, delay: 12, duration: 20, top: "65%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {jellies.map((j, i) => (
        <div
          key={i}
          className="absolute animate-jelly-drift"
          style={{
            left: j.left,
            top: j.top,
            animationDelay: `${j.delay}s`,
            animationDuration: `${j.duration}s`,
          }}
        >
          <svg
            viewBox="0 0 40 60"
            style={{ width: j.size, height: j.size * 1.5 }}
          >
            {/* Bell */}
            <ellipse
              cx="20"
              cy="16"
              rx="14"
              ry="13"
              fill="rgba(180, 140, 220, 0.12)"
              stroke="rgba(180, 140, 220, 0.2)"
              strokeWidth="0.5"
            />
            {/* Inner glow */}
            <ellipse
              cx="20"
              cy="14"
              rx="8"
              ry="7"
              fill="rgba(200, 160, 255, 0.08)"
            />
            {/* Tentacles */}
            <path
              d="M10,22 Q12,38 8,52"
              fill="none"
              stroke="rgba(180, 140, 220, 0.12)"
              strokeWidth="0.8"
            />
            <path
              d="M16,24 Q15,40 13,54"
              fill="none"
              stroke="rgba(180, 140, 220, 0.08)"
              strokeWidth="0.7"
            />
            <path
              d="M24,24 Q25,40 27,54"
              fill="none"
              stroke="rgba(180, 140, 220, 0.08)"
              strokeWidth="0.7"
            />
            <path
              d="M30,22 Q28,38 32,52"
              fill="none"
              stroke="rgba(180, 140, 220, 0.12)"
              strokeWidth="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
