import { useInView } from "@/hooks/useInView";
import { handleTiltMove, handleTiltLeave } from "@/lib/tilt";

const expeditions = [
  {
    title: "Juan de Fuca Ridge",
    subtitle: "Hydrothermal Vent Exploration",
    depth: "2,200m",
    year: "2016–2019",
    description: "Deep-sea sampling at active hydrothermal vents along the JdFR spreading center, studying chemosynthetic microbial communities.",
    tags: ["ROV", "vents", "microbes"],
    color: "rgba(255,100,60,0.15)",
    accent: "#ff6440",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="opacity-60">
        <rect x="20" y="20" width="8" height="28" rx="2" fill="rgba(180,120,80,0.4)" />
        <rect x="22" y="16" width="4" height="6" rx="1" fill="rgba(200,140,90,0.3)" />
        <circle cx="24" cy="14" r="6" fill="rgba(255,80,20,0.15)">
          <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="24" cy="14" r="3" fill="rgba(255,120,40,0.2)" />
        {[18, 28, 14, 32].map((x, i) => (
          <circle key={i} cx={x} cy={38 + (i % 2) * 4} r="2" fill="rgba(200,40,40,0.25)">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    ),
  },
  {
    title: "HOT Station ALOHA",
    subtitle: "Hawaii Ocean Time-series",
    depth: "4,750m",
    year: "2010–2014",
    description: "Long-term monitoring of microbial communities in the deep North Pacific, from sunlit surface waters to the abyssal seafloor.",
    tags: ["time-series", "deep-sea", "genomics"],
    color: "rgba(60,140,255,0.12)",
    accent: "#5ba8ff",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="opacity-60">
        <circle cx="24" cy="24" r="16" fill="none" stroke="rgba(100,180,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="24" cy="24" r="10" fill="none" stroke="rgba(100,180,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="24" cy="24" r="3" fill="rgba(100,200,255,0.25)" />
        <line x1="24" y1="8" x2="24" y2="40" stroke="rgba(100,180,255,0.1)" strokeWidth="0.5" />
        <line x1="8" y1="24" x2="40" y2="24" stroke="rgba(100,180,255,0.1)" strokeWidth="0.5" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 24 + Math.cos(rad) * 16;
          const y = 24 + Math.sin(rad) * 16;
          return <circle key={i} cx={x} cy={y} r="1.5" fill="rgba(100,200,255,0.2)" />;
        })}
      </svg>
    ),
  },
  {
    title: "ROV Deep Dives",
    subtitle: "Remotely Operated Vehicle Operations",
    depth: "2,650m max",
    year: "Multiple",
    description: "Three deep-submergence vehicle expeditions to hydrothermal systems, collecting samples from active black smoker chimneys.",
    tags: ["ROV", "sampling", "black-smokers"],
    color: "rgba(100,255,218,0.1)",
    accent: "#64ffda",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="opacity-60">
        <rect x="14" y="18" width="20" height="14" rx="4" fill="rgba(100,255,218,0.15)" stroke="rgba(100,255,218,0.2)" strokeWidth="0.5" />
        <circle cx="20" cy="24" r="2.5" fill="rgba(200,255,240,0.2)" />
        <circle cx="20" cy="24" r="1" fill="rgba(255,255,255,0.3)" />
        <circle cx="28" cy="24" r="2.5" fill="rgba(200,255,240,0.2)" />
        <circle cx="28" cy="24" r="1" fill="rgba(255,255,255,0.3)" />
        <line x1="10" y1="25" x2="14" y2="25" stroke="rgba(100,255,218,0.2)" strokeWidth="1.5" />
        <line x1="34" y1="25" x2="38" y2="25" stroke="rgba(100,255,218,0.2)" strokeWidth="1.5" />
        <path d="M18 32 L18 38 M24 32 L24 40 M30 32 L30 38" stroke="rgba(100,255,218,0.15)" strokeWidth="1" />
        <line x1="24" y1="18" x2="24" y2="10" stroke="rgba(100,255,218,0.15)" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    title: "Subsurface Biosphere",
    subtitle: "Deep Crustal Fluid Studies",
    depth: "300m below seafloor",
    year: "2015–2020",
    description: "Investigating microbial life within oceanic crust, sampling fluids from borehole observatories installed by IODP.",
    tags: ["IODP", "crustal-fluids", "extremophiles"],
    color: "rgba(180,100,255,0.1)",
    accent: "#b080ff",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="opacity-60">
        <rect x="8" y="20" width="32" height="4" rx="1" fill="rgba(120,80,40,0.2)" />
        <rect x="22" y="24" width="4" height="20" rx="1" fill="rgba(140,100,60,0.15)" />
        <circle cx="24" cy="44" r="2" fill="rgba(180,100,255,0.2)">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" />
        </circle>
        {[16, 20, 28, 32].map((x, i) => (
          <circle key={i} cx={x} cy={22} r="1" fill={`rgba(${150 + i * 20},${80 + i * 10},255,0.15)`} />
        ))}
        <path d="M12 20 L12 16 M24 20 L24 14 M36 20 L36 16" stroke="rgba(100,180,255,0.1)" strokeWidth="0.5" />
      </svg>
    ),
  },
];

export function ExpeditionGallery() {
  const [ref, inView] = useInView(0.15, "[data-scroll-root]");

  return (
    <section
      id="expeditions"
      ref={ref}
      className="min-h-screen flex items-center px-4 sm:px-12 md:px-24 lg:px-32 py-16 sm:py-24 relative"
    >
      <div className="w-full max-w-5xl">
        <div
          className="font-mono text-[13px] tracking-[4px] uppercase mb-2 transition-all duration-700"
          style={{
            color: "#64ffda",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Depth: 2,000m — The Midnight Zone
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-10 transition-all duration-700 delay-100"
          style={{
            color: "#ccd6f6",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Research Expeditions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {expeditions.map((exp, i) => (
            <div
              key={exp.title}
              className="transition-all duration-500"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${200 + i * 150}ms`,
                animation: "oceanDrift 12s ease-in-out infinite",
                animationDelay: `${-i * 2.5}s`,
                animationPlayState: inView ? "running" : "paused",
              }}
            >
              <div
                className="group p-5 sm:p-6 rounded-lg h-full relative overflow-hidden"
                data-sonar
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
                style={{
                  background: "rgba(10,25,47,0.6)",
                  border: "1px solid #1d3456",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 70% 30%, ${exp.color}, transparent 60%)`,
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 mt-1">{exp.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-0.5" style={{ color: "#ccd6f6" }}>
                        {exp.title}
                      </h3>
                      <div className="font-mono text-[11px] tracking-wider" style={{ color: exp.accent }}>
                        {exp.subtitle}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#8892b0" }}>
                    {exp.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(100,255,218,0.06)",
                            color: "#64ffda",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 font-mono text-[11px] flex-shrink-0 ml-3">
                      <span style={{ color: "rgba(136,146,176,0.6)" }}>{exp.year}</span>
                      <span style={{ color: "rgba(100,255,218,0.4)" }}>{exp.depth}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
