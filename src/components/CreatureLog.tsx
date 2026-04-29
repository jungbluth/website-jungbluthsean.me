import { useState } from "react";
import { useCreatureLog } from "@/hooks/useCreatureLog";
import { hiddenCreatures } from "@/components/SonarCreatures";

export function CreatureLog() {
  const { discovered, totalCreatures } = useCreatureLog();
  const [open, setOpen] = useState(false);
  const count = discovered.size;

  if (totalCreatures === 0) return null;

  return (
    <>
      <style>{`
        @keyframes logPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(100,255,218,0); }
          50% { box-shadow: 0 0 12px 4px rgba(100,255,218,0.25); }
        }
        @keyframes logSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes logEntryIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-14 sm:bottom-4 left-3 sm:left-4 z-30 flex items-center gap-2 px-3 py-2 rounded-full font-mono text-[11px] tracking-wider cursor-pointer transition-all duration-300 hover:scale-105"
        style={{
          background: "rgba(8,16,36,0.7)",
          border: `1px solid ${count > 0 ? "rgba(100,255,218,0.3)" : "rgba(136,146,176,0.2)"}`,
          backdropFilter: "blur(12px)",
          color: count > 0 ? "#64ffda" : "#8892b0",
          animation: count > 0 && count < totalCreatures ? "logPulse 3s ease-in-out infinite" : "none",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="7" cy="7" r="2" fill="currentColor" opacity="0.5" />
        </svg>
        <span>{count}/{totalCreatures}</span>
      </button>

      {open && (
        <div
          className="fixed bottom-24 sm:bottom-16 left-3 sm:left-4 z-30 rounded-lg font-mono overflow-hidden"
          style={{
            background: "rgba(8,16,36,0.9)",
            border: "1px solid rgba(100,255,218,0.15)",
            backdropFilter: "blur(16px)",
            width: 220,
            animation: "logSlideIn 0.3s ease-out",
          }}
        >
          <div
            className="px-3 py-2 text-[10px] tracking-[2px] uppercase"
            style={{
              borderBottom: "1px solid rgba(100,255,218,0.1)",
              color: "rgba(100,255,218,0.6)",
            }}
          >
            Species Log
          </div>
          <div className="px-2 py-2 max-h-[280px] overflow-y-auto">
            {hiddenCreatures.map((creature, i) => {
              const entry = discovered.get(creature.id);
              const found = !!entry;
              return (
                <div
                  key={creature.id}
                  className="flex items-center gap-2 px-2 py-1.5 rounded"
                  style={{
                    animation: found ? `logEntryIn 0.4s ease-out ${i * 0.05}s both` : "none",
                  }}
                >
                  <div
                    className="flex-shrink-0 rounded-full"
                    style={{
                      width: 7,
                      height: 7,
                      background: found ? "#64ffda" : "transparent",
                      border: found ? "none" : "1px dashed rgba(100,255,218,0.25)",
                      boxShadow: found ? "0 0 6px rgba(100,255,218,0.4)" : "none",
                    }}
                  />
                  <span
                    className="flex-1 text-[11px]"
                    style={{ color: found ? "#ccd6e0" : "rgba(100,255,218,0.25)" }}
                  >
                    {found ? creature.name : "???"}
                  </span>
                  <span
                    className="text-[9px]"
                    style={{ color: found ? "rgba(100,255,218,0.4)" : "rgba(100,255,218,0.15)" }}
                  >
                    {found ? creature.depth : "—"}
                  </span>
                </div>
              );
            })}
          </div>
          {count === totalCreatures && (
            <div
              className="px-3 py-2 text-center text-[10px]"
              style={{
                borderTop: "1px solid rgba(100,255,218,0.1)",
                color: "#64ffda",
              }}
            >
              All species discovered!
            </div>
          )}
        </div>
      )}
    </>
  );
}
