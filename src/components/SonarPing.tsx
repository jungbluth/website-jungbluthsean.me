import { useEffect, useRef, useState, useCallback } from "react";

interface Ping {
  id: number;
  x: number;
  y: number;
}

export function SonarPing() {
  const [pings, setPings] = useState<Ping[]>([]);
  const activeGlows = useRef(new Set<Element>());

  const triggerGlow = useCallback((x: number, y: number) => {
    const root = document.querySelector("[data-scroll-root]");
    if (!root) return;

    const targets = root.querySelectorAll("[data-sonar]");
    const maxRadius = 400;
    const duration = 1500;
    const startTime = performance.now();
    let frame = 0;

    const check = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const radius = progress * maxRadius;

      targets.forEach((target) => {
        if (activeGlows.current.has(target)) return;
        const rect = target.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.sqrt((cx - x) ** 2 + (cy - y) ** 2);

        if (dist < radius && dist > radius - 80) {
          activeGlows.current.add(target);
          target.classList.add("sonar-glow");
          setTimeout(() => {
            target.classList.remove("sonar-glow");
            activeGlows.current.delete(target);
          }, 800);
        }
      });

      if (progress < 1) frame = requestAnimationFrame(check);
    };

    frame = requestAnimationFrame(check);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const root = document.querySelector("[data-scroll-root]");
    if (!root) return;

    const handler = (e: Event) => {
      const me = e as MouseEvent;
      const target = me.target as HTMLElement;
      if (target.closest("a, button, input, [role='button']")) return;

      const ping: Ping = { id: Date.now(), x: me.clientX, y: me.clientY };
      setPings((prev) => [...prev, ping]);
      triggerGlow(me.clientX, me.clientY);

      setTimeout(() => {
        setPings((prev) => prev.filter((p) => p.id !== ping.id));
      }, 2200);
    };

    root.addEventListener("click", handler);
    return () => root.removeEventListener("click", handler);
  }, [triggerGlow]);

  return (
    <>
      <style>{`
        @keyframes sonarExpand {
          0% { width: 0; height: 0; opacity: 0.7; }
          100% { width: 800px; height: 800px; opacity: 0; }
        }
        @keyframes sonarDot {
          0% { opacity: 0.9; transform: translate(-50%,-50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%,-50%) scale(0); }
        }
        @keyframes sonarGlow {
          0% { box-shadow: 0 0 0 0 rgba(100,255,218,0); }
          25% { box-shadow: 0 0 20px 4px rgba(100,255,218,0.3); }
          100% { box-shadow: 0 0 0 0 rgba(100,255,218,0); }
        }
        .sonar-glow { animation: sonarGlow 0.8s ease-out !important; }
      `}</style>
      <div className="fixed inset-0 z-[30] pointer-events-none">
        {pings.map((ping) => (
          <div key={ping.id} className="absolute" style={{ left: ping.x, top: ping.y }}>
            {[0, 150, 300].map((delay) => (
              <div
                key={delay}
                className="absolute rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                  border: "1.5px solid rgba(100,255,218,0.5)",
                  boxShadow:
                    "0 0 8px rgba(100,255,218,0.2), inset 0 0 8px rgba(100,255,218,0.1)",
                  animation: `sonarExpand 1.5s ease-out ${delay}ms forwards`,
                  width: 0,
                  height: 0,
                }}
              />
            ))}
            <div
              className="absolute rounded-full"
              style={{
                width: 6,
                height: 6,
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                background: "#64ffda",
                boxShadow: "0 0 12px rgba(100,255,218,0.8)",
                animation: "sonarDot 0.6s ease-out forwards",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
