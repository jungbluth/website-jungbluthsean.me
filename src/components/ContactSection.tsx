import { useInView } from "@/hooks/useInView";
import { Mail, ChevronUp } from "lucide-react";
import { SeaFloor } from "@/components/SeaFloor";

export function ContactSection() {
  const [ref, inView] = useInView(0.2, "[data-scroll-root]");

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-[80vh] flex items-center justify-center px-4 sm:px-12 md:px-24 lg:px-32 py-16 sm:py-24 relative overflow-hidden"
    >
      <SeaFloor />

      <div
        className="text-center max-w-lg transition-all duration-1000 relative z-10"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
          <div
            className="font-mono text-[11px] sm:text-[13px] tracking-[3px] sm:tracking-[4px] uppercase text-center"
            style={{ color: "#64ffda" }}
          >
            Depth: 6,000m — The Hadal Zone
          </div>
          <div
            className="font-mono text-[12px] px-2 py-1 rounded"
            style={{
              background: "rgba(100,255,218,0.06)",
              border: "1px solid rgba(100,255,218,0.15)",
              color: "#64ffda",
            }}
          >
            600 atm
          </div>
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: "#ccd6f6" }}
        >
          You've reached the deepest point.
        </h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#8892b0" }}>
          Whether you're interested in collaboration, have questions about
          deep-sea microbiology, or just want to say hello — I'd love to hear
          from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:jungbluth.sean@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-mono text-base transition-all duration-200 hover:bg-[rgba(100,255,218,0.1)]"
            style={{
              border: "1px solid #64ffda",
              color: "#64ffda",
            }}
          >
            <Mail size={16} />
            Personal Email
          </a>
          <a
            href="mailto:seanj.lab@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-mono text-base transition-all duration-200 hover:bg-[rgba(100,255,218,0.05)]"
            style={{
              border: "1px solid #233554",
              color: "#8892b0",
            }}
          >
            <Mail size={16} />
            Lab Email
          </a>
        </div>

        {/* Return to surface */}
        <button
          onClick={() =>
            document
              .getElementById("surface")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-12 mx-auto flex flex-col items-center gap-1 group cursor-pointer bg-transparent border-none outline-none"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1"
            style={{
              border: "1px solid rgba(100,255,218,0.25)",
              background: "rgba(100,255,218,0.04)",
            }}
          >
            <ChevronUp size={16} style={{ color: "#64ffda" }} />
          </div>
          <span
            className="font-mono text-[11px] tracking-[3px] uppercase mt-1 transition-colors duration-200"
            style={{ color: "rgba(100,255,218,0.4)" }}
          >
            Return to surface
          </span>
        </button>

        {/* Bottom flourish */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <div
            className="w-px h-12"
            style={{ background: "rgba(100,255,218,0.2)" }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: "#64ffda",
              boxShadow: "0 0 12px rgba(100,255,218,0.5)",
            }}
          />
          <p
            className="font-mono text-[12px] tracking-widest mt-3"
            style={{ color: "rgba(136,146,176,0.4)" }}
          >
            Built with curiosity
          </p>
        </div>
      </div>
    </section>
  );
}
