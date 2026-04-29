const depthMarks = [
  { depth: 0, label: "0m" },
  { depth: 1000, label: "1km" },
  { depth: 2000, label: "2km" },
  { depth: 3000, label: "3km" },
  { depth: 4000, label: "4km" },
  { depth: 5000, label: "5km" },
  { depth: 6000, label: "6km" },
];

export function DiveProgressBar({ scrollProgress }: { scrollProgress: number }) {
  if (scrollProgress < 0.01) return null;

  const depth = Math.round(scrollProgress * 6000);

  return (
    <div
      className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md max-w-[calc(100vw-2rem)]"
      style={{
        background: "rgba(8, 16, 36, 0.7)",
        border: "1px solid rgba(100, 255, 218, 0.12)",
        opacity: Math.min(1, scrollProgress * 10),
        transition: "opacity 0.3s ease",
      }}
    >
      <span
        className="font-mono text-[11px] tracking-wider tabular-nums shrink-0"
        style={{ color: "#64ffda" }}
      >
        {depth.toLocaleString()}m
      </span>

      <div className="relative w-24 sm:w-48 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(100, 255, 218, 0.08)" }}>
        {depthMarks.slice(1, -1).map((m) => (
          <div
            key={m.depth}
            className="absolute top-0 w-px h-full"
            style={{
              left: `${(m.depth / 6000) * 100}%`,
              background: "rgba(100, 255, 218, 0.12)",
            }}
          />
        ))}
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-200"
          style={{
            width: `${scrollProgress * 100}%`,
            background: "linear-gradient(90deg, #0ea5e9, #64ffda)",
            boxShadow: "0 0 8px rgba(100, 255, 218, 0.3)",
          }}
        />
      </div>

      <span
        className="font-mono text-[11px] tracking-wider tabular-nums shrink-0"
        style={{ color: "rgba(136, 146, 176, 0.5)" }}
      >
        6,000m
      </span>
    </div>
  );
}
