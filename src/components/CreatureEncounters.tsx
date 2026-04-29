import { useEffect, useRef, useState } from "react";

interface Encounter {
  id: string;
  trigger: number;
  duration: number;
}

const encounters: Encounter[] = [
  { id: "jellies", trigger: 0.04, duration: 8000 },
  { id: "manta", trigger: 0.07, duration: 7000 },
  { id: "dumbo", trigger: 0.22, duration: 7000 },
  { id: "squid", trigger: 0.38, duration: 8000 },
  { id: "angler", trigger: 0.55, duration: 6000 },
  { id: "wormfield", trigger: 0.8, duration: 9000 },
  { id: "eye", trigger: 0.9, duration: 5000 },
];

export function CreatureEncounters({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  const [active, setActive] = useState<Set<string>>(new Set());
  const seen = useRef(new Set<string>());

  useEffect(() => {
    for (const e of encounters) {
      if (seen.current.has(e.id)) continue;
      if (scrollProgress >= e.trigger && scrollProgress < e.trigger + 0.04) {
        seen.current.add(e.id);
        setActive((prev) => new Set(prev).add(e.id));
        setTimeout(() => {
          setActive((prev) => {
            const next = new Set(prev);
            next.delete(e.id);
            return next;
          });
        }, e.duration);
      }
    }
  }, [scrollProgress]);

  return (
    <>
      <style>{`
        @keyframes creatureDriftRight {
          0% { transform: translateX(-120%) translateY(0); opacity: 0; }
          8% { opacity: 0.35; }
          80% { opacity: 0.35; }
          100% { transform: translateX(120vw) translateY(-30px); opacity: 0; }
        }
        @keyframes creatureDriftLeft {
          0% { transform: translateX(120vw) translateY(0); opacity: 0; }
          8% { opacity: 0.3; }
          80% { opacity: 0.3; }
          100% { transform: translateX(-120%) translateY(20px); opacity: 0; }
        }
        @keyframes mantaGlide {
          0% { transform: translateX(-120%) translateY(0) rotate(-3deg); opacity: 0; }
          10% { opacity: 0.3; }
          50% { transform: translateX(50vw) translateY(-40px) rotate(2deg); opacity: 0.35; }
          100% { transform: translateX(120vw) translateY(-20px) rotate(-1deg); opacity: 0; }
        }
        @keyframes jellyBloom {
          0% { opacity: 0; transform: translateY(20px); }
          15% { opacity: 0.3; transform: translateY(0); }
          85% { opacity: 0.25; transform: translateY(-30px); }
          100% { opacity: 0; transform: translateY(-50px); }
        }
        @keyframes tentacleReach {
          0% { transform: translateX(-100%); opacity: 0; }
          15% { opacity: 0.25; }
          50% { transform: translateX(15vw); opacity: 0.25; }
          85% { opacity: 0.2; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes wormGrow {
          0% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
          20% { opacity: 0.3; transform: scaleY(1); }
          80% { opacity: 0.3; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(0); }
        }
        @keyframes eyeOpen {
          0% { transform: scaleY(0); opacity: 0; }
          15% { transform: scaleY(1); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 0.35; }
          70% { transform: scaleY(0.1); opacity: 0.2; }
          85% { transform: scaleY(1); opacity: 0.3; }
          100% { transform: scaleY(0); opacity: 0; }
        }
        @keyframes finFlap {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }
        @keyframes plumeWave {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.15); }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none z-[9] overflow-hidden">
        {/* Jellyfish bloom — surface */}
        {active.has("jellies") && (
          <div
            className="absolute inset-0"
            style={{ animation: "jellyBloom 8s ease-in-out forwards" }}
          >
            {[
              { x: "15%", y: "20%", s: 0.8, d: 0 },
              { x: "35%", y: "35%", s: 1, d: 0.5 },
              { x: "55%", y: "15%", s: 0.6, d: 1 },
              { x: "75%", y: "30%", s: 0.9, d: 0.3 },
              { x: "25%", y: "50%", s: 0.7, d: 0.8 },
              { x: "65%", y: "55%", s: 0.5, d: 1.2 },
            ].map((j, i) => (
              <svg
                key={i}
                width={40 * j.s}
                height={56 * j.s}
                viewBox="0 0 40 56"
                className="absolute"
                style={{
                  left: j.x,
                  top: j.y,
                  animationDelay: `${j.d}s`,
                  opacity: 0.3 * j.s,
                }}
              >
                <ellipse cx="20" cy="14" rx="14" ry="12" fill="rgba(180,140,255,0.15)" />
                <ellipse cx="20" cy="16" rx="10" ry="6" fill="rgba(200,160,255,0.06)" />
                <path d="M10,22 Q8,32 12,42" fill="none" stroke="rgba(180,140,255,0.08)" strokeWidth="0.6" />
                <path d="M20,24 Q18,38 22,50" fill="none" stroke="rgba(180,140,255,0.06)" strokeWidth="0.5" />
                <path d="M30,22 Q32,32 28,42" fill="none" stroke="rgba(180,140,255,0.08)" strokeWidth="0.6" />
              </svg>
            ))}
          </div>
        )}

        {/* Manta ray gliding across */}
        {active.has("manta") && (
          <div
            className="absolute"
            style={{
              top: "30%",
              left: 0,
              animation: "mantaGlide 7s ease-in-out forwards",
            }}
          >
            <svg width="120" height="60" viewBox="0 0 120 60">
              <path
                d="M60,14 Q35,4 6,24 Q3,30 12,36 Q35,46 60,33 Q85,46 108,36 Q117,30 114,24 Q85,4 60,14 Z"
                fill="rgba(100,140,200,0.18)"
                stroke="rgba(100,140,200,0.25)"
                strokeWidth="0.5"
              />
              <path d="M60,33 L60,54 Q59,56 58,54" fill="none" stroke="rgba(100,140,200,0.15)" strokeWidth="1" />
              <circle cx="44" cy="24" r="2" fill="rgba(180,210,240,0.25)" />
              <circle cx="76" cy="24" r="2" fill="rgba(180,210,240,0.25)" />
              <path d="M52,14 Q50,6 48,8" fill="none" stroke="rgba(100,140,200,0.18)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M68,14 Q70,6 72,8" fill="none" stroke="rgba(100,140,200,0.18)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
        )}

        {/* Dumbo octopus */}
        {active.has("dumbo") && (
          <div
            className="absolute"
            style={{
              top: "35%",
              left: 0,
              animation: "creatureDriftRight 7s ease-in-out forwards",
            }}
          >
            <svg width="80" height="60" viewBox="0 0 80 60">
              <ellipse cx="40" cy="35" rx="16" ry="12" fill="rgba(100,255,218,0.25)" />
              <g style={{ transformOrigin: "28px 28px", animation: "finFlap 0.8s ease-in-out infinite" }}>
                <ellipse cx="22" cy="25" rx="10" ry="6" fill="rgba(100,255,218,0.2)" transform="rotate(-20 22 25)" />
              </g>
              <g style={{ transformOrigin: "52px 28px", animation: "finFlap 0.8s ease-in-out infinite 0.4s" }}>
                <ellipse cx="58" cy="25" rx="10" ry="6" fill="rgba(100,255,218,0.2)" transform="rotate(20 58 25)" />
              </g>
              <circle cx="35" cy="33" r="1.5" fill="rgba(200,230,255,0.5)" />
              <circle cx="45" cy="33" r="1.5" fill="rgba(200,230,255,0.5)" />
              <path d="M32 44 Q35 50 38 44 M38 44 Q41 50 44 44 M44 44 Q47 50 50 44" stroke="rgba(100,255,218,0.2)" fill="none" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        )}

        {/* Giant squid tentacles */}
        {active.has("squid") && (
          <div
            className="absolute"
            style={{
              top: "45%",
              left: 0,
              animation: "tentacleReach 8s ease-in-out forwards",
            }}
          >
            <svg width="200" height="120" viewBox="0 0 200 120">
              <path d="M0 60 Q40 40 80 55 Q120 70 160 50 Q180 42 200 48" stroke="rgba(180,80,80,0.2)" fill="none" strokeWidth="8" strokeLinecap="round" />
              <path d="M0 65 Q50 85 100 60 Q140 42 180 55" stroke="rgba(180,80,80,0.15)" fill="none" strokeWidth="6" strokeLinecap="round" />
              {[30, 60, 90, 120, 150].map((x) => (
                <circle key={x} cx={x} cy={55 + Math.sin(x * 0.05) * 8} r="3" fill="rgba(180,80,80,0.12)" />
              ))}
            </svg>
          </div>
        )}

        {/* Anglerfish */}
        {active.has("angler") && (
          <div
            className="absolute"
            style={{
              top: "40%",
              animation: "creatureDriftLeft 6s ease-in-out forwards",
            }}
          >
            <svg width="100" height="80" viewBox="0 0 100 80">
              <ellipse cx="55" cy="45" rx="22" ry="16" fill="rgba(20,30,50,0.4)" />
              <path d="M33 45 L25 40 L20 42" stroke="rgba(20,30,50,0.3)" fill="none" strokeWidth="2" />
              <path d="M40 30 Q35 15 45 10" stroke="rgba(100,255,218,0.3)" fill="none" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="45" cy="10" r="4" fill="rgba(100,255,218,0.5)">
                <animate attributeName="r" values="3;5;3" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="45" cy="10" r="10" fill="none" stroke="rgba(100,255,218,0.1)">
                <animate attributeName="r" values="6;14;6" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.15;0;0.15" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="48" cy="42" r="3" fill="rgba(200,230,255,0.3)" />
              <circle cx="49" cy="41" r="1" fill="rgba(255,255,255,0.5)" />
              <path d="M70 50 L80 52 M70 48 L78 46 M72 54 L80 58" stroke="rgba(20,30,50,0.2)" fill="none" strokeWidth="1.5" />
            </svg>
          </div>
        )}

        {/* Hydrothermal vent tube worm field — from JdFR research */}
        {active.has("wormfield") && (
          <div
            className="absolute"
            style={{
              bottom: "10%",
              left: "5%",
              right: "5%",
              animation: "wormGrow 9s ease-in-out forwards",
              transformOrigin: "bottom center",
            }}
          >
            <svg width="100%" height="120" viewBox="0 0 400 120" preserveAspectRatio="xMidYMax meet">
              {/* Vent chimney base */}
              <rect x="180" y="60" width="16" height="60" rx="3" fill="rgba(40,25,15,0.25)" />
              <rect x="183" y="55" width="10" height="10" rx="2" fill="rgba(50,30,18,0.2)" />
              {/* Vent glow */}
              <circle cx="188" cy="52" r="12" fill="rgba(255,80,20,0.08)">
                <animate attributeName="r" values="10;16;10" dur="3s" repeatCount="indefinite" />
              </circle>
              {/* Tube worm clusters */}
              {[40, 70, 100, 130, 160, 220, 250, 280, 310, 340, 370].map((x, i) => {
                const h = 30 + (i % 3) * 15 + Math.sin(i * 1.7) * 10;
                const topY = 120 - h;
                return (
                  <g key={x}>
                    <rect x={x - 1.5} y={topY + 6} width="3" height={h - 6} rx="1" fill="rgba(200,200,200,0.15)" />
                    <circle cx={x} cy={topY + 3} r="3.5" fill="rgba(200,40,40,0.2)" style={{ animation: `plumeWave ${2 + (i % 3) * 0.5}s ease-in-out infinite ${i * 0.2}s` }} />
                    <circle cx={x} cy={topY + 3} r="1.5" fill="rgba(220,60,60,0.3)" />
                  </g>
                );
              })}
              {/* Vent shrimp swarm */}
              {[155, 165, 200, 210, 195, 175].map((x, i) => (
                <ellipse key={`shrimp-${i}`} cx={x} cy={80 + i * 3} rx="4" ry="1.5" fill="rgba(255,180,160,0.12)" transform={`rotate(${-20 + i * 10} ${x} ${80 + i * 3})`} />
              ))}
              {/* Base rocks */}
              <ellipse cx="200" cy="118" rx="180" ry="4" fill="rgba(30,20,12,0.15)" />
            </svg>
          </div>
        )}

        {/* Mysterious deep-sea eye */}
        {active.has("eye") && (
          <div
            className="absolute"
            style={{
              top: "40%",
              right: "8%",
              animation: "eyeOpen 5s ease-in-out forwards",
              transformOrigin: "center",
            }}
          >
            <svg width="120" height="60" viewBox="0 0 120 60">
              <ellipse cx="60" cy="30" rx="50" ry="25" fill="rgba(10,20,40,0.4)" stroke="rgba(100,255,218,0.15)" strokeWidth="1" />
              <ellipse cx="60" cy="30" rx="20" ry="20" fill="rgba(13,148,136,0.25)" />
              <circle cx="60" cy="30" r="8" fill="rgba(0,10,20,0.6)" />
              <circle cx="56" cy="26" r="2" fill="rgba(255,255,255,0.3)" />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
