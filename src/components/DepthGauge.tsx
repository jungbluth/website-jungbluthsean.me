interface Section {
  id: string;
  depth: string;
  label: string;
}

function lerpColor(a: string, b: string, t: number): string {
  const parse = (hex: string) => [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
  const [r1, g1, b1] = parse(a);
  const [r2, g2, b2] = parse(b);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const bl = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r},${g},${bl})`;
}

export function DepthGauge({
  sections,
  activeSection,
  scrollProgress,
  onNavigate,
}: {
  sections: Section[];
  activeSection: string;
  scrollProgress: number;
  onNavigate: (id: string) => void;
}) {
  const depth = Math.round(scrollProgress * 6000);
  const pressure = Math.round(scrollProgress * 600);

  // Transition colors: dark navy at surface (on light bg) → teal at depth (on dark bg)
  const accentColor = lerpColor("#0e4a6f", "#64ffda", Math.min(1, scrollProgress * 3));
  const mutedColor = lerpColor("#1a4a6e", "#8892b0", Math.min(1, scrollProgress * 3));
  const lineAlpha = 0.15 + scrollProgress * 0.1;

  return (
    <div className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-0">
      {/* Depth readout */}
      <div className="mb-4 text-center">
        <div
          className="font-mono text-[12px] tracking-[3px] uppercase transition-colors duration-300"
          style={{ color: accentColor }}
        >
          Depth
        </div>
        <div
          className="font-mono text-base font-bold tabular-nums transition-colors duration-300"
          style={{ color: accentColor }}
        >
          {depth.toLocaleString()}m
        </div>
        {depth > 0 && (
          <div
            className="font-mono text-[11px] tabular-nums mt-0.5 transition-colors duration-300"
            style={{ color: `${mutedColor}88` }}
          >
            {pressure} atm
          </div>
        )}
      </div>

      {/* Line and dots */}
      <div className="relative flex flex-col items-center">
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{
            background: `linear-gradient(180deg, transparent, rgba(100,255,218,${lineAlpha}) 10%, rgba(100,255,218,${lineAlpha}) 90%, transparent)`,
          }}
        />

        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="relative flex items-center gap-3 py-4 group cursor-pointer bg-transparent border-none outline-none"
            >
              <div
                className="w-[9px] h-[9px] rounded-full transition-all duration-300 relative z-10"
                style={{
                  background: isActive ? accentColor : "transparent",
                  border: `2px solid ${isActive ? accentColor : `${mutedColor}44`}`,
                  boxShadow: isActive
                    ? `0 0 12px ${accentColor}99`
                    : "none",
                }}
              />
              <span
                className="font-mono text-[12px] tracking-wider uppercase whitespace-nowrap transition-all duration-300"
                style={{
                  color: isActive ? accentColor : `${mutedColor}88`,
                }}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-3 w-[3px] h-12 rounded-full overflow-hidden" style={{ background: `${mutedColor}22` }}>
        <div
          className="w-full rounded-full transition-all duration-200"
          style={{
            height: `${scrollProgress * 100}%`,
            background: `linear-gradient(180deg, ${accentColor}66, ${accentColor})`,
            boxShadow: `0 0 6px ${accentColor}44`,
          }}
        />
      </div>
    </div>
  );
}
