import { X } from "lucide-react";

const specs = [
  { label: "Max Depth", value: "6,500m" },
  { label: "First Dive", value: "1964" },
  { label: "Crew", value: "1 pilot + 2 scientists" },
  { label: "Dives Completed", value: "5,000+" },
  { label: "Operator", value: "Woods Hole Oceanographic" },
];

const highlights = [
  "Explored the RMS Titanic wreck (1986)",
  "Discovered hydrothermal vent ecosystems",
  "Found deep-sea chemosynthetic communities",
];

export function AlvinInfoCard({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 pointer-events-auto"
      style={{ animation: "card-appear 0.3s ease-out" }}
    >
      <style>{`
        @keyframes card-appear {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="rounded-lg p-4 backdrop-blur-md"
        style={{
          background: "rgba(8, 16, 36, 0.92)",
          border: "1px solid rgba(100, 255, 218, 0.2)",
          boxShadow: "0 0 30px rgba(100, 255, 218, 0.08), 0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <div
              className="font-mono text-sm font-bold tracking-wider"
              style={{ color: "#64ffda" }}
            >
              DSV Alvin
            </div>
            <div
              className="font-mono text-[11px] tracking-wide mt-0.5"
              style={{ color: "#8892b0" }}
            >
              Human-Occupied Vehicle (HOV)
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="p-1 rounded transition-colors hover:bg-white/5"
            style={{ color: "#8892b0" }}
          >
            <X size={14} />
          </button>
        </div>

        <div className="space-y-1.5 mb-3">
          {specs.map((s) => (
            <div key={s.label} className="flex justify-between items-baseline">
              <span className="font-mono text-[12px]" style={{ color: "#8892b0" }}>
                {s.label}
              </span>
              <span className="font-mono text-[12px] font-medium" style={{ color: "#ccd6f6" }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>

        <div
          className="w-full h-px mb-3"
          style={{ background: "rgba(100, 255, 218, 0.1)" }}
        />

        <div
          className="font-mono text-[11px] tracking-wider uppercase mb-1.5"
          style={{ color: "#64ffda" }}
        >
          Notable Missions
        </div>
        <ul className="space-y-1">
          {highlights.map((h) => (
            <li key={h} className="flex gap-1.5 items-start">
              <span
                className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                style={{ background: "#64ffda" }}
              />
              <span className="font-mono text-[12px] leading-relaxed" style={{ color: "#8892b0" }}>
                {h}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="w-3 h-3 rotate-45 mx-auto -mt-1.5"
        style={{
          background: "rgba(8, 16, 36, 0.92)",
          borderRight: "1px solid rgba(100, 255, 218, 0.2)",
          borderBottom: "1px solid rgba(100, 255, 218, 0.2)",
        }}
      />
    </div>
  );
}
