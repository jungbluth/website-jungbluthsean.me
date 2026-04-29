const zones = [
  { name: "Epipelagic Zone", range: "0 – 200m", subtitle: "The Sunlight Zone", progressStart: 0, progressEnd: 0.06, temp: "20°C", pressure: "1 atm", light: "100%" },
  { name: "Mesopelagic Zone", range: "200 – 1,000m", subtitle: "The Twilight Zone", progressStart: 0.06, progressEnd: 0.2, temp: "5°C", pressure: "100 atm", light: "1%" },
  { name: "Bathypelagic Zone", range: "1,000 – 4,000m", subtitle: "The Midnight Zone", progressStart: 0.2, progressEnd: 0.65, temp: "4°C", pressure: "400 atm", light: "0%" },
  { name: "Abyssopelagic Zone", range: "4,000 – 6,000m", subtitle: "The Abyss", progressStart: 0.65, progressEnd: 0.85, temp: "2°C", pressure: "600 atm", light: "0%" },
  { name: "Hadopelagic Zone", range: "6,000m+", subtitle: "The Hadal Zone", progressStart: 0.85, progressEnd: 1.0, temp: "1°C", pressure: "1,100 atm", light: "0%" },
];

export function DepthZoneLabels({ scrollProgress }: { scrollProgress: number }) {
  const activeZone = zones.find(
    (z) => scrollProgress >= z.progressStart && scrollProgress < z.progressEnd
  );

  if (!activeZone || scrollProgress < 0.01) return null;

  const zoneMid = (activeZone.progressStart + activeZone.progressEnd) / 2;
  const zoneHalf = (activeZone.progressEnd - activeZone.progressStart) / 2;
  const distFromMid = Math.abs(scrollProgress - zoneMid);
  const opacity = Math.max(0, 1 - distFromMid / zoneHalf);
  const fadeOpacity = Math.min(1, opacity * 1.5);

  const currentDepth = Math.round(scrollProgress * 6500);

  return (
    <div
      className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-end gap-1.5 pointer-events-none"
      style={{
        opacity: fadeOpacity,
        transition: "opacity 0.3s ease",
      }}
    >
      <div
        className="font-mono text-[12px] tracking-[3px] uppercase"
        style={{ color: "rgba(100, 255, 218, 0.5)" }}
      >
        {activeZone.subtitle}
      </div>
      <div
        className="font-mono text-base font-bold tracking-wider"
        style={{ color: "rgba(204, 214, 246, 0.3)" }}
      >
        {activeZone.name}
      </div>
      <div
        className="font-mono text-[12px]"
        style={{ color: "rgba(136, 146, 176, 0.3)" }}
      >
        {activeZone.range}
      </div>
      <div
        className="flex items-center gap-3 mt-2 font-mono text-[10px]"
        style={{ color: "rgba(136, 146, 176, 0.25)" }}
      >
        <span>{activeZone.temp}</span>
        <span className="opacity-40">|</span>
        <span>{activeZone.pressure}</span>
        <span className="opacity-40">|</span>
        <span>~{currentDepth.toLocaleString()}m</span>
      </div>
    </div>
  );
}
