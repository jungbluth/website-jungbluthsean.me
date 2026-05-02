import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { Whale } from "@/components/Whale";
import { AnimatedStats } from "@/components/AnimatedStats";
import { MapPin, Flower2, Landmark, Flag, Fish } from "lucide-react";
import { handleTiltMove, handleTiltLeave } from "@/lib/tilt";

const stops: { place: string; years: string; icon: ReactNode; note: string }[] = [
  {
    place: "Wisconsin",
    years: "23 years",
    icon: <MapPin className="w-5 h-5" style={{ color: "#64ffda" }} />,
    note: "Where it all started",
  },
  {
    place: "Honolulu",
    years: "10 years",
    icon: <Flower2 className="w-5 h-5" style={{ color: "#64ffda" }} />,
    note: "Oceanography & deep-sea expeditions",
  },
  {
    place: "Bay Area",
    years: "8 years",
    icon: <Landmark className="w-5 h-5" style={{ color: "#64ffda" }} />,
    note: "Stanford lectures · SF State lab · Anthropic Claude Community Ambassador",
  },
];

const extras: { place: string; icon: ReactNode }[] = [
  { place: "Brisbane", icon: <Flag className="w-3.5 h-3.5" style={{ color: "#8892b0" }} /> },
  { place: "Kampala", icon: <Flag className="w-3.5 h-3.5" style={{ color: "#8892b0" }} /> },
  { place: "Deep-sea expeditions", icon: <Fish className="w-3.5 h-3.5" style={{ color: "#8892b0" }} /> },
];

export function JourneySection() {
  const [ref, inView] = useInView(0.2, "[data-scroll-root]");

  return (
    <section
      id="journey"
      ref={ref}
      className="min-h-screen flex items-center px-4 sm:px-12 md:px-24 lg:px-32 py-16 sm:py-24 relative"
    >
      <Whale />
      <div className="w-full max-w-3xl relative z-10">
        {/* Section header */}
        <div
          className="font-mono text-[13px] tracking-[4px] uppercase mb-2 transition-all duration-700"
          style={{
            color: "#64ffda",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Depth: 200m — The Journey
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-10 transition-all duration-700 delay-100"
          style={{
            color: "#ccd6f6",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Geographic Progression
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-6 top-6 bottom-6 w-px hidden sm:block"
            style={{ background: "rgba(100,255,218,0.15)" }}
          />

          <div className="space-y-6">
            {stops.map((stop, i) => (
              <div
                key={stop.place}
                className="flex gap-4 sm:gap-6 items-start transition-all duration-700"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-20px)",
                  transitionDelay: `${200 + i * 150}ms`,
                  animation: "oceanDrift 10s ease-in-out infinite",
                  animationDelay: `${-i * 3.2}s`,
                  animationPlayState: inView ? "running" : "paused",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center relative z-10"
                  style={{
                    background: "#112240",
                    border: "2px solid rgba(100,255,218,0.3)",
                  }}
                >
                  {stop.icon}
                </div>

                {/* Card */}
                <div
                  className="flex-1 p-5 rounded-lg"
                  data-sonar
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                  style={{
                    background: "rgba(10,25,47,0.7)",
                    border: "1px solid #1d3456",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <span
                      className="text-xl font-semibold"
                      style={{ color: "#ccd6f6" }}
                    >
                      {stop.place}
                    </span>
                    <span
                      className="font-mono text-sm"
                      style={{ color: "#64ffda" }}
                    >
                      {stop.years}
                    </span>
                  </div>
                  <p className="text-base" style={{ color: "#8892b0" }}>
                    {stop.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra locations */}
        <div
          className="flex flex-wrap gap-3 mt-8 ml-0 sm:ml-[72px] transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transitionDelay: "700ms",
          }}
        >
          {extras.map((e) => (
            <span
              key={e.place}
              className="px-3 py-1.5 rounded-full font-mono text-sm flex items-center gap-1.5"
              style={{
                background: "rgba(10,25,47,0.5)",
                border: "1px solid #1d3456",
                color: "#8892b0",
              }}
            >
              {e.icon} {e.place}
            </span>
          ))}
        </div>

        <AnimatedStats />
      </div>
    </section>
  );
}
