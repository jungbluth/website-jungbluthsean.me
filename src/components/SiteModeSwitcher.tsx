export function SiteModeSwitcher({
  mode,
  onToggle,
}: {
  mode: "basic" | "deep";
  onToggle: () => void;
}) {
  const isDeep = mode === "deep";

  return (
    <div
      className="fixed top-3 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-0 select-none sm:top-4"
      style={{
        backdropFilter: "blur(12px)",
        borderRadius: "9999px",
        overflow: "hidden",
        border: isDeep
          ? "1px solid rgba(100,255,218,0.25)"
          : "1px solid rgba(0,0,0,0.15)",
        background: isDeep
          ? "rgba(0,20,40,0.7)"
          : "rgba(255,255,255,0.7)",
        transition: "background 0.5s, border-color 0.5s",
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}
    >
      <button
        onClick={isDeep ? onToggle : undefined}
        className="relative px-3 py-1.5 text-[11px] sm:text-xs sm:px-4 font-mono tracking-wider uppercase cursor-pointer transition-all duration-300"
        style={{
          color: !isDeep ? "#fff" : isDeep ? "rgba(100,255,218,0.5)" : "#999",
          background: !isDeep ? "#0073e6" : "transparent",
          borderRadius: "9999px",
          border: "none",
        }}
      >
        Basic
      </button>
      <button
        onClick={!isDeep ? onToggle : undefined}
        className="relative px-3 py-1.5 text-[11px] sm:text-xs sm:px-4 font-mono tracking-wider uppercase cursor-pointer transition-all duration-300"
        style={{
          color: isDeep ? "#64ffda" : !isDeep ? "rgba(0,0,0,0.4)" : "#999",
          background: isDeep
            ? "rgba(100,255,218,0.15)"
            : "transparent",
          borderRadius: "9999px",
          border: "none",
        }}
      >
        Deep Dive
      </button>
    </div>
  );
}
