import { useInView } from "@/hooks/useInView";
import { ExternalLink } from "lucide-react";
import { RevealText } from "@/components/RevealText";

interface Publication {
  title: string;
  journal: string;
  year: number;
  doi?: string;
  highlight?: boolean;
}

const publications: Publication[] = [
  {
    title: "Giant virus diversity and host interactions through global metagenomics",
    journal: "Nature",
    year: 2020,
    doi: "10.1038/s41586-020-1957-x",
    highlight: true,
  },
  {
    title: "A genomic catalog of Earth's microbiomes",
    journal: "Nature Biotechnology",
    year: 2020,
    doi: "10.1038/s41587-020-0718-6",
    highlight: true,
  },
  {
    title: "Metagenome-assembled genome extraction and analysis from microbiomes using KBase",
    journal: "Nature Protocols",
    year: 2023,
    doi: "10.1038/s41596-022-00747-x",
    highlight: true,
  },
  {
    title: "Minimum information about a single amplified genome (MISAG) and a metagenome-assembled genome (MIMAG)",
    journal: "Nature Biotechnology",
    year: 2017,
    doi: "10.1038/nbt.3893",
  },
  {
    title: "Pangenomics reveals alternative environmental lifestyles among chlamydiae",
    journal: "Nature Communications",
    year: 2021,
    doi: "10.1038/s41467-021-24294-3",
  },
  {
    title: "Carbonate-hosted microbial communities are prolific methane oxidizers",
    journal: "PNAS",
    year: 2021,
    doi: "10.1073/pnas.2006857118",
  },
  {
    title: "A novel microbial assemblage inhabits fluids within mid-ocean ridge flank subsurface basalt",
    journal: "The ISME Journal",
    year: 2016,
    doi: "10.1038/ismej.2015.115",
  },
  {
    title: "Microbial diversity within basement fluids of the sediment-buried Juan de Fuca Ridge flank",
    journal: "The ISME Journal",
    year: 2013,
    doi: "10.1038/ismej.2012.73",
  },
];

const journalColors: Record<string, string> = {
  Nature: "#e8554e",
  "Nature Biotechnology": "#2e86c1",
  "Nature Protocols": "#8e44ad",
  "Nature Communications": "#f39c12",
  PNAS: "#27ae60",
  "The ISME Journal": "#16a085",
};

export function PublicationsSection() {
  const [ref, inView] = useInView(0.1, "[data-scroll-root]");

  return (
    <section
      id="publications"
      ref={ref}
      className="min-h-screen flex items-center px-4 sm:px-12 md:px-24 lg:px-32 py-16 sm:py-24 relative"
    >
      <div className="w-full max-w-4xl relative z-10">
        <div
          className="font-mono text-[13px] tracking-[4px] uppercase mb-2 transition-all duration-700"
          style={{
            color: "#64ffda",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Depth: 3,000m — The Midnight Zone
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-3 transition-all duration-700 delay-100"
          style={{
            color: "#ccd6f6",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
          }}
        >
          Selected Publications
        </h2>
        <RevealText delay={200} as="p" className="text-base mb-10">
          <span style={{ color: "#8892b0" }}>
            From 35+ peer-reviewed publications spanning deep-sea microbiology, metagenomics, and computational biology.
          </span>
        </RevealText>

        <div className="space-y-3">
          {publications.map((pub, i) => {
            const accentColor = journalColors[pub.journal] || "#64ffda";
            return (
              <div
                key={pub.title}
                className="group flex gap-3 sm:gap-4 items-start p-3 sm:p-4 rounded-lg transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  background: pub.highlight
                    ? "rgba(10,25,47,0.8)"
                    : "rgba(10,25,47,0.5)",
                  border: `1px solid ${pub.highlight ? "rgba(100,255,218,0.15)" : "#1d3456"}`,
                  backdropFilter: "blur(8px)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-16px)",
                  transitionDelay: `${200 + i * 80}ms`,
                }}
              >
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-sm sm:text-base font-medium leading-snug mb-1.5"
                    style={{ color: "#ccd6f6" }}
                  >
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span
                      className="font-mono text-[12px] px-2 py-0.5 rounded"
                      style={{
                        background: `${accentColor}18`,
                        color: accentColor,
                        border: `1px solid ${accentColor}30`,
                      }}
                    >
                      {pub.journal}
                    </span>
                    <span
                      className="font-mono text-[13px]"
                      style={{ color: "#8892b0" }}
                    >
                      {pub.year}
                    </span>
                  </div>
                </div>

                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 opacity-60 sm:opacity-40 group-hover:opacity-100 transition-opacity duration-200 -m-2 p-2 flex items-center justify-center"
                    style={{ color: "#64ffda", minWidth: "44px", minHeight: "44px" }}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <a
          href="https://scholar.google.com/citations?user=WANnSuYAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 py-3 font-mono text-sm transition-all duration-500"
          style={{
            color: "#64ffda",
            opacity: inView ? 1 : 0,
            transitionDelay: "900ms",
          }}
        >
          View all on Google Scholar
          <ExternalLink size={12} />
        </a>
      </div>
    </section>
  );
}
