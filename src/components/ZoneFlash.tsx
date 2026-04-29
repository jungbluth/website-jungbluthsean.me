import { useEffect, useRef, useState } from "react";

export function ZoneFlash({ activeSection }: { activeSection: string }) {
  const [flash, setFlash] = useState(false);
  const prev = useRef(activeSection);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (activeSection !== prev.current) {
      prev.current = activeSection;
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 1200);
      return () => clearTimeout(t);
    }
  }, [activeSection]);

  if (!flash) return null;

  return (
    <>
      <style>{`
        @keyframes zoneFlashLine {
          0% { opacity: 0; transform: scaleX(0); }
          12% { opacity: 1; transform: scaleX(1); }
          100% { opacity: 0; transform: scaleX(1); }
        }
        @keyframes zoneFlashGlow {
          0% { opacity: 0; }
          15% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes zoneFlashEdge {
          0% { opacity: 0; transform: scaleY(0); }
          20% { opacity: 0.6; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(1); }
        }
      `}</style>
      <div
        className="fixed left-0 right-0 z-[20] pointer-events-none"
        style={{ top: "50%" }}
      >
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(100,255,218,0.5) 20%, rgba(100,255,218,0.9) 50%, rgba(100,255,218,0.5) 80%, transparent 100%)",
            animation: "zoneFlashLine 1.2s ease-out forwards",
            transformOrigin: "center",
          }}
        />
        <div
          style={{
            height: "40px",
            marginTop: "-20px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(100,255,218,0.08) 20%, rgba(100,255,218,0.15) 50%, rgba(100,255,218,0.08) 80%, transparent 100%)",
            filter: "blur(12px)",
            animation: "zoneFlashGlow 1.2s ease-out forwards",
          }}
        />
      </div>
      <div
        className="fixed left-0 top-0 bottom-0 z-[20] pointer-events-none"
        style={{
          width: "2px",
          background: "linear-gradient(180deg, transparent, rgba(100,255,218,0.2) 40%, rgba(100,255,218,0.2) 60%, transparent)",
          animation: "zoneFlashEdge 1.2s ease-out forwards",
          transformOrigin: "center",
        }}
      />
      <div
        className="fixed right-0 top-0 bottom-0 z-[20] pointer-events-none"
        style={{
          width: "2px",
          background: "linear-gradient(180deg, transparent, rgba(100,255,218,0.2) 40%, rgba(100,255,218,0.2) 60%, transparent)",
          animation: "zoneFlashEdge 1.2s ease-out forwards",
          transformOrigin: "center",
        }}
      />
    </>
  );
}
