import { useState } from "react";
import { Menu, X } from "lucide-react";

interface Section {
  id: string;
  depth: string;
  label: string;
}

export function MobileNav({
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
  const [open, setOpen] = useState(false);
  const depth = Math.round(scrollProgress * 6000);

  const handleNav = (id: string) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-40 md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-11 h-11 rounded-lg flex items-center justify-center backdrop-blur-md transition-colors"
        style={{
          background: open ? "rgba(8, 16, 36, 0.95)" : "rgba(8, 16, 36, 0.7)",
          border: "1px solid rgba(100, 255, 218, 0.2)",
        }}
      >
        {open ? (
          <X size={18} style={{ color: "#64ffda" }} />
        ) : (
          <Menu size={18} style={{ color: "#64ffda" }} />
        )}
      </button>

      {open && (
        <div
          className="absolute top-12 right-0 w-48 rounded-lg overflow-hidden backdrop-blur-md"
          style={{
            background: "rgba(8, 16, 36, 0.95)",
            border: "1px solid rgba(100, 255, 218, 0.15)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            animation: "mobile-nav-in 0.2s ease-out",
          }}
        >
          <style>{`
            @keyframes mobile-nav-in {
              from { opacity: 0; transform: translateY(-8px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>

          <div
            className="px-3 py-2 flex items-baseline justify-between"
            style={{ borderBottom: "1px solid rgba(100, 255, 218, 0.08)" }}
          >
            <span
              className="font-mono text-[11px] tracking-[2px] uppercase"
              style={{ color: "#64ffda" }}
            >
              Depth
            </span>
            <span
              className="font-mono text-sm font-bold tabular-nums"
              style={{ color: "#64ffda" }}
            >
              {depth.toLocaleString()}m
            </span>
          </div>

          <div className="py-1">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleNav(section.id)}
                  className="w-full px-3 py-2 flex items-center justify-between text-left transition-colors bg-transparent border-none outline-none cursor-pointer"
                  style={{
                    background: isActive ? "rgba(100, 255, 218, 0.06)" : "transparent",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: isActive ? "#64ffda" : "rgba(136, 146, 176, 0.3)",
                        boxShadow: isActive ? "0 0 6px rgba(100, 255, 218, 0.5)" : "none",
                      }}
                    />
                    <span
                      className="font-mono text-sm"
                      style={{ color: isActive ? "#64ffda" : "#8892b0" }}
                    >
                      {section.label}
                    </span>
                  </div>
                  <span
                    className="font-mono text-[12px] tabular-nums"
                    style={{ color: isActive ? "rgba(100, 255, 218, 0.6)" : "rgba(136, 146, 176, 0.4)" }}
                  >
                    {section.depth}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
