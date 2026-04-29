/** Gentle drifting clouds at the very top of the surface */
export function Clouds() {
  const clouds = [
    { width: 120, top: 8, delay: 0, duration: 45, opacity: 0.25 },
    { width: 80, top: 24, delay: 12, duration: 55, opacity: 0.18 },
    { width: 100, top: 16, delay: 28, duration: 50, opacity: 0.2 },
    { width: 60, top: 32, delay: 8, duration: 60, opacity: 0.15 },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none overflow-hidden z-0">
      {clouds.map((c, i) => (
        <div
          key={i}
          className="absolute animate-cloud-drift"
          style={{
            top: c.top,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
          }}
        >
          <svg
            viewBox="0 0 200 60"
            style={{ width: c.width, height: c.width * 0.3 }}
          >
            <ellipse cx="70" cy="35" rx="55" ry="18" fill="white" opacity={c.opacity} />
            <ellipse cx="110" cy="30" rx="40" ry="14" fill="white" opacity={c.opacity * 0.9} />
            <ellipse cx="45" cy="38" rx="30" ry="12" fill="white" opacity={c.opacity * 0.8} />
            <ellipse cx="140" cy="36" rx="28" ry="10" fill="white" opacity={c.opacity * 0.7} />
          </svg>
        </div>
      ))}
    </div>
  );
}
