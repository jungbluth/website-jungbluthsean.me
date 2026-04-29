import { useCallback, useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { DepthGauge } from "@/components/DepthGauge";
import { DivingSubmarine } from "@/components/DivingSubmarine";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { LinksSection } from "@/components/LinksSection";
import { ContactSection } from "@/components/ContactSection";
import { DepthZoneLabels } from "@/components/DepthZoneLabels";
import { MobileNav } from "@/components/MobileNav";
import { LightRays } from "@/components/LightRays";
import { ZoneCreatures } from "@/components/ZoneCreatures";
import { DiveProgressBar } from "@/components/DiveProgressBar";
import { PressureVignette } from "@/components/PressureVignette";
import { ParallaxLayers } from "@/components/ParallaxLayers";
import { VentBubbles } from "@/components/VentBubbles";
import { ParallaxSection } from "@/components/ParallaxSection";
import { LoadingScreen } from "@/components/LoadingScreen";
import { DepthAudio } from "@/components/DepthAudio";
import { SurfaceLife } from "@/components/SurfaceLife";
import { SurfaceWaves } from "@/components/SurfaceWaves";
import { Bioluminescence } from "@/components/Bioluminescence";
import { UnderwaterCaustics } from "@/components/UnderwaterCaustics";
import { SonarPing } from "@/components/SonarPing";
import { DeepAurora } from "@/components/DeepAurora";
import { InkTransition } from "@/components/InkTransition";
import { ZoneFlash } from "@/components/ZoneFlash";
import { CreatureEncounters } from "@/components/CreatureEncounters";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BasicSite } from "@/components/BasicSite";
import { SiteModeSwitcher } from "@/components/SiteModeSwitcher";
import { Thermocline } from "@/components/Thermocline";
import { DepthTransition } from "@/components/DepthTransition";
import { SonarCreatures, hiddenCreatures } from "@/components/SonarCreatures";
import { CreatureLog } from "@/components/CreatureLog";
import { ExpeditionGallery } from "@/components/ExpeditionGallery";
import { CreatureLogContext } from "@/hooks/useCreatureLog";
import type { CreatureLogEntry } from "@/hooks/useCreatureLog";
import CvPage from "@/pages/CvPage";

const dayColors = [
  { at: 0, color: [135, 206, 235] },
  { at: 0.03, color: [91, 163, 217] },
  { at: 0.06, color: [46, 134, 193] },
  { at: 0.1, color: [26, 111, 160] },
  { at: 0.15, color: [14, 90, 138] },
  { at: 0.2, color: [10, 69, 112] },
  { at: 0.28, color: [8, 53, 88] },
  { at: 0.36, color: [6, 42, 74] },
  { at: 0.45, color: [5, 31, 58] },
  { at: 0.55, color: [4, 24, 48] },
  { at: 0.65, color: [3, 17, 37] },
  { at: 0.75, color: [2, 12, 27] },
  { at: 0.85, color: [1, 8, 21] },
  { at: 0.92, color: [0, 6, 16] },
  { at: 1, color: [0, 3, 8] },
];

const nightColors = [
  { at: 0, color: [12, 20, 45] },
  { at: 0.03, color: [10, 18, 42] },
  { at: 0.06, color: [8, 16, 38] },
  { at: 0.1, color: [7, 15, 35] },
  { at: 0.15, color: [6, 14, 32] },
  { at: 0.2, color: [5, 12, 28] },
  { at: 0.28, color: [4, 10, 24] },
  { at: 0.36, color: [4, 9, 22] },
  { at: 0.45, color: [3, 8, 20] },
  { at: 0.55, color: [3, 7, 18] },
  { at: 0.65, color: [2, 5, 14] },
  { at: 0.75, color: [1, 4, 10] },
  { at: 0.85, color: [1, 3, 8] },
  { at: 0.92, color: [0, 2, 6] },
  { at: 1, color: [0, 1, 4] },
];

function getDepthColor(progress: number, colors: typeof dayColors): string {
  if (progress <= 0) return `rgb(${colors[0].color.join(",")})`;
  if (progress >= 1) return `rgb(${colors[colors.length - 1].color.join(",")})`;
  let lo = colors[0], hi = colors[1];
  for (let i = 1; i < colors.length; i++) {
    if (colors[i].at >= progress) { hi = colors[i]; lo = colors[i - 1]; break; }
  }
  const t = (progress - lo.at) / (hi.at - lo.at);
  const r = Math.round(lo.color[0] + (hi.color[0] - lo.color[0]) * t);
  const g = Math.round(lo.color[1] + (hi.color[1] - lo.color[1]) * t);
  const b = Math.round(lo.color[2] + (hi.color[2] - lo.color[2]) * t);
  return `rgb(${r},${g},${b})`;
}

const sections = [
  { id: "surface", depth: "0m", label: "Surface" },
  { id: "journey", depth: "200m", label: "Journey" },
  { id: "research", depth: "1,000m", label: "Research" },
  { id: "expeditions", depth: "2,000m", label: "Expeditions" },
  { id: "publications", depth: "3,000m", label: "Papers" },
  { id: "connect", depth: "4,000m", label: "Connect" },
  { id: "contact", depth: "6,000m", label: "Contact" },
];

function App() {
  const [siteMode, setSiteMode] = useState<"basic" | "deep">("basic");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("surface");
  const [loading, setLoading] = useState(true);
  const [nightMode, setNightMode] = useState(false);
  const [creatureDiscoveries, setCreatureDiscoveries] = useState<Map<string, CreatureLogEntry>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);
  const depthColors = nightMode ? nightColors : dayColors;

  const addDiscovery = useCallback((id: string, name: string, depth: string) => {
    setCreatureDiscoveries((prev) => {
      if (prev.has(id)) return prev;
      const next = new Map(prev);
      next.set(id, { id, name, depth, discoveredAt: Date.now() });
      return next;
    });
  }, []);

  const creatureLogValue = {
    discovered: creatureDiscoveries,
    totalCreatures: hiddenCreatures.length,
    addDiscovery,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const el = containerRef.current;
      const progress = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setScrollProgress(Math.min(1, Math.max(0, progress)));

      // Determine active section
      const sectionEls = sections.map((s) =>
        document.getElementById(s.id)
      );
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const sectionEl = sectionEls[i];
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    const el = containerRef.current;
    el?.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Routes>
      <Route path="/cv" element={<CvPage />} />
      <Route path="*" element={
        <>
        <style>{`
          @keyframes oceanDrift {
            0%, 100% { translate: 0 0; rotate: 0deg; }
            25% { translate: 2px -1px; rotate: 0.2deg; }
            50% { translate: -1px 1.5px; rotate: -0.15deg; }
            75% { translate: -2.5px -0.5px; rotate: 0.1deg; }
          }
        `}</style>

        <SiteModeSwitcher mode={siteMode} onToggle={() => setSiteMode((m) => m === "basic" ? "deep" : "basic")} />

        {/* Basic site layer */}
        <div
          className="fixed inset-0 z-[50] transition-opacity duration-700"
          style={{
            opacity: siteMode === "basic" ? 1 : 0,
            pointerEvents: siteMode === "basic" ? "auto" : "none",
          }}
        >
          <BasicSite />
        </div>

        {/* Deep dive site layer */}
        {siteMode === "deep" && <LoadingScreen onComplete={() => setLoading(false)} />}
        <div
          ref={containerRef}
          data-scroll-root
          className="h-screen overflow-y-auto relative transition-opacity duration-700"
          style={{
            background: "#000812",
            opacity: siteMode === "deep" ? (loading ? 0 : 1) : 0,
            pointerEvents: siteMode === "deep" ? "auto" : "none",
          }}
        >
          {siteMode === "deep" && (
            <CreatureLogContext.Provider value={creatureLogValue}>
              <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{ background: getDepthColor(scrollProgress, depthColors), transition: "background 1.5s ease" }}
              />
              <PressureVignette scrollProgress={scrollProgress} />
              <LightRays scrollProgress={scrollProgress} />
              <UnderwaterCaustics scrollProgress={scrollProgress} />
              <ParticleCanvas scrollProgress={scrollProgress} />
              <SurfaceWaves scrollProgress={scrollProgress} />
              <SurfaceLife scrollProgress={scrollProgress} />
              <ZoneCreatures scrollProgress={scrollProgress} />
              <Bioluminescence scrollProgress={scrollProgress} />
              <DeepAurora scrollProgress={scrollProgress} />
              <ParallaxLayers scrollProgress={scrollProgress} />
              <Thermocline scrollProgress={scrollProgress} />
              <DepthTransition scrollProgress={scrollProgress} />
              <VentBubbles scrollProgress={scrollProgress} />
              <DivingSubmarine scrollProgress={scrollProgress} />
              <DepthGauge
                sections={sections}
                activeSection={activeSection}
                scrollProgress={scrollProgress}
                onNavigate={scrollToSection}
              />
              <DepthZoneLabels scrollProgress={scrollProgress} />
              <MobileNav
                sections={sections}
                activeSection={activeSection}
                scrollProgress={scrollProgress}
                onNavigate={scrollToSection}
              />
              <DiveProgressBar scrollProgress={scrollProgress} />
              <DepthAudio scrollProgress={scrollProgress} />
              <SonarPing />
              <SonarCreatures scrollProgress={scrollProgress} />
              <CreatureLog />
              <ZoneFlash activeSection={activeSection} />
              <CreatureEncounters scrollProgress={scrollProgress} />
              <ThemeToggle nightMode={nightMode} onToggle={() => setNightMode((n) => !n)} />

              <div className="relative z-10">
                <HeroSection nightMode={nightMode} />
                <InkTransition seed={1} color="rgba(46,134,193,0.08)" />
                <ParallaxSection><JourneySection /></ParallaxSection>
                <InkTransition seed={2} color="rgba(14,90,138,0.08)" />
                <ParallaxSection><ResearchSection /></ParallaxSection>
                <InkTransition seed={3} color="rgba(5,31,58,0.06)" />
                <ParallaxSection><ExpeditionGallery /></ParallaxSection>
                <InkTransition seed={3} color="rgba(5,31,58,0.06)" />
                <ParallaxSection><PublicationsSection /></ParallaxSection>
                <InkTransition seed={4} color="rgba(3,17,37,0.05)" />
                <ParallaxSection><LinksSection /></ParallaxSection>
                <InkTransition seed={5} color="rgba(100,255,218,0.03)" />
                <ParallaxSection><ContactSection /></ParallaxSection>
              </div>
            </CreatureLogContext.Provider>
          )}
        </div>
        </>
      } />
    </Routes>
  );
}

export default App;
