export function InkTransition({
  seed = 1,
  color = "rgba(100,255,218,0.06)",
}: {
  seed?: number;
  color?: string;
}) {
  const id = `ink-disp-${seed}`;

  return (
    <div
      className="relative h-24 -my-12 pointer-events-none"
      style={{ zIndex: 11 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 96"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id={id} x="-20%" y="-40%" width="140%" height="180%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.035"
              numOctaves={4}
              seed={seed}
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={28} />
          </filter>
        </defs>
        <ellipse
          cx={600}
          cy={48}
          rx={650}
          ry={18}
          fill={color}
          filter={`url(#${id})`}
        />
        <ellipse
          cx={350}
          cy={40}
          rx={280}
          ry={12}
          fill={color}
          filter={`url(#${id})`}
          opacity={0.7}
        />
        <ellipse
          cx={850}
          cy={55}
          rx={220}
          ry={10}
          fill={color}
          filter={`url(#${id})`}
          opacity={0.5}
        />
      </svg>
    </div>
  );
}
