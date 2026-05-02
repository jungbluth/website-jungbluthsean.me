import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { Jellyfish } from "@/components/Jellyfish";
import { Dna, GraduationCap, Microscope } from "lucide-react";
import { handleTiltMove, handleTiltLeave } from "@/lib/tilt";

const areas: { title: string; description: string; icon: ReactNode; tags: string[]; link?: string }[] = [
  {
    title: "Microbial Genomics",
    description:
      "Mapping life in Earth's deep subsurface — communities thriving in extreme conditions far from sunlight.",
    icon: <Dna className="w-7 h-7" style={{ color: "#64ffda" }} />,
    tags: ["genomics", "deep-sea", "extremophiles"],
  },
  {
    title: "Stanford Lectures",
    description:
      "Teaching microbial genomics and computational biology to the next generation of scientists. Anthropic Claude Community Ambassador.",
    icon: <GraduationCap className="w-7 h-7" style={{ color: "#64ffda" }} />,
    tags: ["teaching", "comp-bio", "stanford"],
  },
  {
    title: "Jungbluth Lab",
    description:
      "Leading research as PI & Group Lead at San Francisco State University.",
    icon: <Microscope className="w-7 h-7" style={{ color: "#64ffda" }} />,
    tags: ["PI", "SFSU", "lab-lead"],
    link: "https://jungbluthlab.org",
  },
];

export function ResearchSection() {
  const [ref, inView] = useInView(0.15, "[data-scroll-root]");

  return (
    <section
      id="research"
      ref={ref}
      className="min-h-screen flex items-center px-4 sm:px-12 md:px-24 lg:px-32 py-16 sm:py-24 relative"
    >
      <Jellyfish />
      <div className="w-full max-w-4xl relative z-10">
        <div
          className="font-mono text-[13px] tracking-[4px] uppercase mb-2 transition-all duration-700"
          style={{
            color: "#64ffda",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Depth: 1,000m — The Twilight Zone
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-10 transition-all duration-700 delay-100"
          style={{
            color: "#ccd6f6",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Research & Teaching
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className="transition-all duration-500"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${200 + i * 150}ms`,
                animation: "oceanDrift 11s ease-in-out infinite",
                animationDelay: `${-i * 3.5}s`,
                animationPlayState: inView ? "running" : "paused",
              }}
            >
              <div
                className="group p-4 sm:p-6 rounded-lg h-full"
                data-sonar
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
                style={{
                  background: "rgba(10,25,47,0.7)",
                  border: "1px solid #1d3456",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="mb-4">{area.icon}</div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#ccd6f6" }}
                >
                  {area.title}
                </h3>
                <p
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "#8892b0" }}
                >
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[12px] px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(100,255,218,0.08)",
                        color: "#64ffda",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {area.link && (
                  <a
                    href={area.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 py-3 font-mono text-sm transition-colors duration-200"
                    style={{ color: "#64ffda" }}
                  >
                    Visit lab →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
