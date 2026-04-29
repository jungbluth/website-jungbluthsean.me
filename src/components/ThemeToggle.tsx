import { Sun, Moon } from "lucide-react";

export function ThemeToggle({
  nightMode,
  onToggle,
}: {
  nightMode: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-3 right-14 sm:top-4 md:top-auto md:bottom-4 md:right-14 z-30 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer"
      style={{
        background: nightMode
          ? "rgba(100,255,218,0.08)"
          : "rgba(255,255,255,0.2)",
        border: `1px solid ${nightMode ? "rgba(100,255,218,0.2)" : "rgba(255,255,255,0.3)"}`,
      }}
      aria-label={nightMode ? "Switch to day mode" : "Switch to night mode"}
    >
      {nightMode ? (
        <Sun size={15} style={{ color: "#64ffda" }} />
      ) : (
        <Moon size={15} style={{ color: "#0e4a6f" }} />
      )}
    </button>
  );
}
