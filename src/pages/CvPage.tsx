import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronUp, Sun, Moon, Printer } from "lucide-react";
import { CvDarkModeContext } from "@/components/cv/CvDarkModeContext";
import { CvPersonal } from "@/components/cv/CvPersonal";
import { CvEducation } from "@/components/cv/CvEducation";
import { CvPositions } from "@/components/cv/CvPositions";
import { CvResearch } from "@/components/cv/CvResearch";
import { CvPublications } from "@/components/cv/CvPublications";
import { CvPreprints } from "@/components/cv/CvPreprints";
import { CvBooks } from "@/components/cv/CvBooks";
import { CvNonPeer } from "@/components/cv/CvNonPeer";
import { CvGrants } from "@/components/cv/CvGrants";
import { CvHonors } from "@/components/cv/CvHonors";
import { CvSeminars } from "@/components/cv/CvSeminars";
import { CvEditorial } from "@/components/cv/CvEditorial";
import { CvReviewer } from "@/components/cv/CvReviewer";
import { CvSocieties } from "@/components/cv/CvSocieties";
import { CvService } from "@/components/cv/CvService";
import { CvTraining } from "@/components/cv/CvTraining";

const tocItems = [
  { id: "personal", label: "Personal" },
  { id: "education", label: "Education" },
  { id: "positions", label: "Positions Held" },
  { id: "research-experience", label: "Research Experience" },
  { id: "refereed", label: "Publications" },
  { id: "preprints", label: "Preprints" },
  { id: "book-chapters", label: "Book Chapters" },
  { id: "non-peer-reviewed", label: "Non-Peer Reviewed" },
  { id: "grants", label: "Research Grants" },
  { id: "honors", label: "Honors & Awards" },
  { id: "seminars", label: "Seminars & Talks" },
  { id: "editorial", label: "Editorial Boards" },
  { id: "reviewer", label: "Reviewer For" },
  { id: "societies", label: "Societies" },
  { id: "service", label: "Teaching & Service" },
  { id: "training", label: "Training & Certs" },
];

function DarkModeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-0 rounded-full cursor-pointer select-none overflow-hidden transition-all duration-300"
      style={{
        border: dark ? "1px solid rgba(100,180,255,0.2)" : "1px solid rgba(0,0,0,0.12)",
        background: dark ? "rgba(20,30,50,0.6)" : "rgba(255,255,255,0.6)",
        padding: 2,
      }}
    >
      <span
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300"
        style={{
          background: !dark ? "#0073e6" : "transparent",
          color: !dark ? "#fff" : "rgba(150,180,210,0.6)",
        }}
      >
        <Sun className="w-3 h-3" />
        Light
      </span>
      <span
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300"
        style={{
          background: dark ? "rgba(100,180,255,0.15)" : "transparent",
          color: dark ? "#6bb8ff" : "rgba(0,0,0,0.35)",
        }}
      >
        <Moon className="w-3 h-3" />
        Dark
      </span>
    </button>
  );
}

export default function CvPage() {
  const [activeSection, setActiveSection] = useState("personal");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [dark, setDark] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map((t) => document.getElementById(t.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const panelBg = dark ? "rgba(18,24,38,0.92)" : "rgba(255,255,255,0.85)";
  const headerBg = dark ? "rgba(12,18,30,0.97)" : "rgba(255,255,255,0.95)";
  const tocDropdownBg = dark ? "rgba(18,24,38,0.98)" : "rgba(255,255,255,0.97)";
  const textPrimary = dark ? "#e0e8f0" : "#333";
  const textSecondary = dark ? "#8899aa" : "#555";
  const textMuted = dark ? "#667788" : "#777";
  const accentColor = dark ? "#6bb8ff" : "#0073e6";
  const accentBg = dark ? "rgba(100,180,255,0.1)" : "rgba(0,115,230,0.1)";
  const accentBgActive = dark ? "rgba(100,180,255,0.15)" : "rgba(0,115,230,0.15)";
  const tocItemBg = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
  const tocItemText = dark ? "#99aab8" : "#333";
  const borderColor = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.15)";
  const overlayBg = dark ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.5)";

  return (
    <CvDarkModeContext.Provider value={dark}>
      <div
        className="cv-print-root min-h-screen transition-colors duration-500"
        style={{
          fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: textPrimary,
        }}
      >
        <div
          className="cv-no-print fixed inset-0 transition-colors duration-500"
          style={{ background: overlayBg }}
        />

        {/* Mobile sticky header */}
        <header
          className="cv-no-print lg:hidden fixed top-0 left-0 right-0 z-[110] flex items-center justify-between px-4 py-3 transition-colors duration-300"
          style={{ background: headerBg, backdropFilter: "blur(10px)" }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/" className="text-sm no-underline shrink-0" style={{ color: accentColor }}>
              &larr;
            </Link>
            <div className="min-w-0">
              <h2 className="text-sm font-bold truncate transition-colors duration-300" style={{ color: textPrimary }}>
                Sean P. Jungbluth, Ph.D.
              </h2>
              <p className="text-xs transition-colors duration-300" style={{ color: textMuted }}>
                {tocItems.find((t) => t.id === activeSection)?.label ?? "CV"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <DarkModeToggle dark={dark} onToggle={() => setDark((d) => !d)} />
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="p-2 rounded-lg cursor-pointer"
              style={{ background: accentBg, border: "none", color: accentColor }}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Mobile TOC dropdown */}
        {mobileMenuOpen && (
          <div
            className="cv-no-print lg:hidden fixed top-[52px] left-0 right-0 bottom-0 z-[105]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <nav
              className="mx-3 mt-1 p-4 overflow-y-auto transition-colors duration-300"
              style={{
                background: tocDropdownBg,
                backdropFilter: "blur(10px)",
                borderRadius: 16,
                maxHeight: "calc(100vh - 70px)",
                boxShadow: dark ? "0 8px 32px rgba(0,0,0,0.4)" : "0 8px 32px rgba(0,0,0,0.15)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 gap-1.5">
                {tocItems.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => scrollTo(t.id)}
                    className="text-left text-xs px-3 py-2.5 rounded-lg cursor-pointer transition-colors"
                    style={{
                      color: activeSection === t.id ? accentColor : tocItemText,
                      background: activeSection === t.id ? accentBgActive : tocItemBg,
                      fontWeight: activeSection === t.id ? "bold" : "normal",
                      border: "none",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}

        {/* Desktop TOC sidebar */}
        <nav
          className="cv-no-print hidden lg:block fixed top-5 left-5 z-[100] overflow-y-auto transition-colors duration-300"
          style={{
            width: 300,
            height: "calc(100vh - 40px)",
            background: panelBg,
            borderRadius: 20,
            padding: 25,
          }}
        >
          <div className="mb-5 pb-4" style={{ borderBottom: `1px solid ${borderColor}` }}>
            <Link to="/" className="text-sm block mb-2.5 py-2 no-underline" style={{ color: accentColor }}>
              &larr; Home
            </Link>
            <h2 className="text-xl font-bold mb-1 transition-colors duration-300" style={{ color: textPrimary }}>
              Sean P. Jungbluth, Ph.D.
            </h2>
            <p className="text-sm transition-colors duration-300" style={{ color: textSecondary }}>Curriculum Vitae</p>
            <p className="text-xs mt-2 italic transition-colors duration-300" style={{ color: textMuted }}>Updated: March 2026</p>
            <div className="mt-4 flex items-center gap-2">
              <DarkModeToggle dark={dark} onToggle={() => setDark((d) => !d)} />
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors"
                style={{
                  border: dark ? "1px solid rgba(100,180,255,0.2)" : "1px solid rgba(0,0,0,0.12)",
                  background: dark ? "rgba(20,30,50,0.6)" : "rgba(255,255,255,0.6)",
                  color: dark ? "#6bb8ff" : "#555",
                }}
              >
                <Printer className="w-3 h-3" />
                Print
              </button>
            </div>
          </div>
          <ul className="list-none p-0 m-0">
            {tocItems.map((t) => (
              <li key={t.id} className="mb-1.5">
                <button
                  onClick={() => scrollTo(t.id)}
                  className="w-full text-left text-sm px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  style={{
                    color: activeSection === t.id ? accentColor : tocItemText,
                    background: activeSection === t.id ? accentBgActive : "transparent",
                    fontWeight: activeSection === t.id ? "bold" : "normal",
                    border: "none",
                  }}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* CV Content */}
        <main
          ref={contentRef}
          className="cv-print-main relative z-10 lg:ml-[340px] mx-2.5 lg:mx-5 mt-[60px] lg:mt-5 mb-5 p-5 sm:p-8 lg:p-10 transition-colors duration-300"
          style={{
            background: panelBg,
            borderRadius: 20,
            minHeight: "calc(100vh - 40px)",
          }}
        >
          <div className="cv-no-print hidden lg:flex flex-wrap gap-2.5 mb-6">
            <Link
              to="/"
              className="no-underline text-sm px-5 py-2.5 rounded-lg transition-colors"
              style={{ background: accentBg, color: accentColor }}
            >
              &larr; Back to Main Page
            </Link>
          </div>

          <CvPersonal />
          <CvEducation />
          <CvPositions />
          <CvResearch />
          <CvPublications />
          <CvPreprints />
          <CvBooks />
          <CvNonPeer />
          <CvGrants />
          <CvHonors />
          <CvSeminars />
          <CvEditorial />
          <CvReviewer />
          <CvSocieties />
          <CvService />
          <CvTraining />
        </main>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="cv-no-print lg:hidden fixed bottom-5 right-5 z-[110] w-11 h-11 rounded-full flex items-center justify-center cursor-pointer shadow-lg transition-colors duration-300"
            style={{
              background: dark ? "rgba(100,180,255,0.9)" : "rgba(0,115,230,0.9)",
              border: "none",
              color: "#fff",
            }}
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </CvDarkModeContext.Provider>
  );
}
