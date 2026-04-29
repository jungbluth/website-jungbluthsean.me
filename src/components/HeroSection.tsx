import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { ResearchVessel } from "@/components/ResearchVessel";
import { Clouds } from "@/components/Clouds";
import { RevealText } from "@/components/RevealText";

export function HeroSection({ nightMode = false }: { nightMode?: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const heading = nightMode ? "#ccd6f6" : "#0a2540";
  const label = nightMode ? "#64ffda" : "#0e4a6f";
  const body = nightMode ? "#a8b2d1" : "#1a4a6e";
  const bodyAlt = nightMode ? "#8892b0" : "#2a5a7e";
  const btnBorder = nightMode ? "1px solid rgba(100,255,218,0.3)" : "1px solid #0e4a6f";
  const btnColor = nightMode ? "#64ffda" : "#0e4a6f";
  const btnBg = nightMode ? "rgba(100,255,218,0.06)" : "rgba(255,255,255,0.15)";
  const btn2Border = nightMode ? "1px solid rgba(100,255,218,0.15)" : "1px solid rgba(14,74,111,0.3)";
  const btn2Color = nightMode ? "#8892b0" : "#2a5a7e";
  const btn2Bg = nightMode ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.1)";

  return (
    <section
      id="surface"
      className="min-h-screen flex flex-col justify-center px-5 pt-16 sm:pt-0 sm:px-12 md:px-24 lg:px-32 relative"
    >
      <Clouds />
      <ResearchVessel />
      <div>
        <RevealText delay={100}>
          <div
            className="font-mono text-[13px] tracking-[4px] uppercase mb-6 transition-colors duration-500"
            style={{ color: label }}
          >
            Depth: 0m — Surface
          </div>
        </RevealText>

        <RevealText delay={300}>
          <div className="flex items-center gap-3 sm:gap-5 mb-6">
            <div
              className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-full flex items-center justify-center flex-shrink-0 relative"
              style={{
                background: "linear-gradient(135deg, #0a3d5c 0%, #0a2540 60%, #0d7377 100%)",
                border: "2.5px solid rgba(255,255,255,0.45)",
                boxShadow: "0 4px 24px rgba(10,37,64,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span
                className="font-bold text-xl sm:text-2xl md:text-3xl tracking-tight select-none"
                style={{ color: "rgba(255,255,255,0.92)", textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
              >
                SJ
              </span>
            </div>
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-colors duration-500"
                style={{ color: heading }}
              >
                Sean Jungbluth
              </h1>
            </div>
          </div>
        </RevealText>

        <RevealText delay={550}>
          <p
            className="text-base sm:text-lg md:text-xl max-w-xl leading-relaxed ml-0 sm:ml-[84px] transition-colors duration-500"
            style={{ color: body }}
          >
            Explorer. Scientist. Educator. Husband. Father.
            <br />
            <span className="transition-colors duration-500" style={{ color: bodyAlt }}>
              Studying life in the deep subsurface — where sunlight never reaches
              and microbes rewrite the rules.
            </span>
          </p>
        </RevealText>

        <RevealText delay={750}>
          <div className="flex gap-3 mt-6 sm:mt-8 ml-0 sm:ml-[84px]">
            <button
              onClick={() =>
                document
                  .getElementById("journey")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 sm:px-5 py-2.5 rounded font-mono text-sm sm:text-base transition-all duration-200 hover:bg-white/20 cursor-pointer active:scale-95"
              style={{
                border: btnBorder,
                color: btnColor,
                background: btnBg,
                backdropFilter: "blur(4px)",
              }}
            >
              ↓ Descend
            </button>
            <Link
              to="/cv"
              className="px-4 sm:px-5 py-2.5 rounded font-mono text-sm sm:text-base transition-all duration-200 hover:bg-white/10 active:scale-95 inline-block"
              style={{
                border: btn2Border,
                color: btn2Color,
                background: btn2Bg,
              }}
            >
              View CV
            </Link>
          </div>
        </RevealText>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease 1.2s",
          animation: visible ? "bounce 2s infinite 2s" : "none",
        }}
      >
        <span
          className="font-mono text-[12px] tracking-widest uppercase transition-colors duration-500"
          style={{ color: label }}
        >
          Scroll to dive
        </span>
        <ChevronDown size={16} style={{ color: label }} />
      </div>
    </section>
  );
}
