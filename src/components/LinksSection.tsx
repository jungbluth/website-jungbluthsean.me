import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import {
  ExternalLink,
  FileText,
  IdCard,
  Code,
  Microscope,
  Bird,
  Briefcase,
  AtSign,
  Calendar,
} from "lucide-react";
import { handleTiltMove, handleTiltLeave } from "@/lib/tilt";

const links: { label: string; url: string; icon: ReactNode }[] = [
  {
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=ks7jmJgAAAAJ&hl=en",
    icon: <FileText className="w-5 h-5" style={{ color: "#ccd6f6" }} />,
  },
  {
    label: "ORCID",
    url: "https://orcid.org/0000-0001-9265-8341",
    icon: <IdCard className="w-5 h-5" style={{ color: "#ccd6f6" }} />,
  },
  {
    label: "GitHub",
    url: "https://github.com/jungbluth",
    icon: <Code className="w-5 h-5" style={{ color: "#ccd6f6" }} />,
  },
  {
    label: "Jungbluth Lab",
    url: "https://jungbluthlab.org",
    icon: <Microscope className="w-5 h-5" style={{ color: "#ccd6f6" }} />,
  },
  {
    label: "BlueSky",
    url: "https://bsky.app/profile/seanjungbluth.bsky.social",
    icon: <Bird className="w-5 h-5" style={{ color: "#ccd6f6" }} />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sean-jungbluth-2230b314",
    icon: <Briefcase className="w-5 h-5" style={{ color: "#ccd6f6" }} />,
  },
  {
    label: "X / Twitter",
    url: "https://x.com/seanjungbluth",
    icon: <AtSign className="w-5 h-5" style={{ color: "#ccd6f6" }} />,
  },
  {
    label: "Schedule a Chat",
    url: "https://calendly.com/jungbluth-sean",
    icon: <Calendar className="w-5 h-5" style={{ color: "#ccd6f6" }} />,
  },
];

export function LinksSection() {
  const [ref, inView] = useInView(0.15, "[data-scroll-root]");

  return (
    <section
      id="connect"
      ref={ref}
      className="min-h-screen flex items-center px-4 sm:px-12 md:px-24 lg:px-32 py-16 sm:py-24 relative"
    >
      <div className="w-full max-w-3xl">
        <div
          className="font-mono text-[13px] tracking-[4px] uppercase mb-2 transition-all duration-700"
          style={{
            color: "#64ffda",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Depth: 4,000m — The Abyss
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-10 transition-all duration-700 delay-100"
          style={{
            color: "#ccd6f6",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Find Me Around the Web
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map((link, i) => (
            <div
              key={link.label}
              className="transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${150 + i * 80}ms`,
                animation: "oceanDrift 9s ease-in-out infinite",
                animationDelay: `${-i * 1.8}s`,
                animationPlayState: inView ? "running" : "paused",
              }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg"
                data-sonar
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
                style={{
                  background: "rgba(10,25,47,0.5)",
                  border: "1px solid #1d3456",
                  display: "flex",
                }}
              >
                <span className="flex-shrink-0">{link.icon}</span>
                <span className="text-base flex-1" style={{ color: "#ccd6f6" }}>
                  {link.label}
                </span>
                <ExternalLink
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "#64ffda" }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
