export function ParallaxLayers({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
      {scrollProgress > 0.05 && scrollProgress < 0.4 && (
        <CoralLayer progress={scrollProgress} />
      )}
      <div className="hidden md:block">
        {scrollProgress > 0.25 && scrollProgress < 0.7 && (
          <RockLayer progress={scrollProgress} side="left" />
        )}
        {scrollProgress > 0.45 && scrollProgress < 0.85 && (
          <RockLayer progress={scrollProgress} side="right" />
        )}
      </div>
      {scrollProgress > 0.7 && (
        <DeepRockLayer progress={scrollProgress} />
      )}
    </div>
  );
}

function CoralLayer({ progress }: { progress: number }) {
  const opacity = progress < 0.1 ? (progress - 0.05) * 20 : progress > 0.3 ? Math.max(0, 1 - (progress - 0.3) * 10) : 1;
  const yOffset = (progress - 0.2) * 80;

  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1400 200"
      preserveAspectRatio="xMidYMax slice"
      style={{
        opacity: opacity * 0.25,
        transform: `translateY(${yOffset}px)`,
        height: "30vh",
      }}
    >
      <path d="M0,200 L0,160 Q30,130 50,140 Q60,100 80,120 Q90,80 110,110 Q120,90 140,130 Q160,120 180,150 Q190,140 200,160 L200,200 Z" fill="rgba(20,80,60,0.5)" />
      <path d="M180,200 L180,170 Q200,140 220,150 Q230,110 250,130 Q260,95 280,125 Q290,120 300,155 L300,200 Z" fill="rgba(15,70,55,0.4)" />
      <path d="M1100,200 L1100,155 Q1120,125 1140,140 Q1150,100 1170,120 Q1180,85 1200,115 Q1220,110 1240,145 Q1260,130 1280,160 L1280,200 Z" fill="rgba(20,80,60,0.5)" />
      <path d="M1260,200 L1260,165 Q1280,135 1300,145 Q1310,120 1330,135 Q1350,125 1370,155 L1400,170 L1400,200 Z" fill="rgba(15,70,55,0.4)" />
      {[60, 110, 250, 1130, 1200, 1320].map((x) => (
        <g key={x}>
          <path
            d={`M${x},${140 + Math.sin(x) * 15} Q${x + 3},${120 + Math.cos(x) * 10} ${x + 8},${105 + Math.sin(x * 2) * 8}`}
            fill="none" stroke="rgba(30,120,90,0.2)" strokeWidth="1.5"
          />
          <circle cx={x + 8} cy={103 + Math.sin(x * 2) * 8} r="3" fill="rgba(30,120,90,0.15)" />
        </g>
      ))}
    </svg>
  );
}

function RockLayer({ progress, side }: { progress: number; side: "left" | "right" }) {
  const rangeStart = side === "left" ? 0.25 : 0.45;
  const rangeEnd = side === "left" ? 0.7 : 0.85;
  const normalized = (progress - rangeStart) / (rangeEnd - rangeStart);
  const fadeIn = Math.min(1, normalized * 5);
  const fadeOut = Math.max(0, 1 - (normalized - 0.8) * 5);
  const opacity = Math.min(fadeIn, fadeOut);
  const parallaxY = (normalized - 0.5) * 60;

  const isLeft = side === "left";

  return (
    <svg
      className={`absolute ${isLeft ? "left-0" : "right-0"}`}
      viewBox={isLeft ? "0 0 120 400" : "0 0 120 400"}
      preserveAspectRatio={isLeft ? "xMinYMid slice" : "xMaxYMid slice"}
      style={{
        opacity: opacity * 0.2,
        transform: `translateY(${parallaxY}px)`,
        width: "10vw",
        height: "100vh",
        top: 0,
      }}
    >
      {isLeft ? (
        <>
          <path d="M0,0 L0,400 L30,400 Q50,350 40,300 Q60,260 35,220 Q55,180 40,140 Q50,100 30,60 Q45,30 20,0 Z" fill="rgba(10,30,50,0.6)" />
          <path d="M0,0 L0,400 L15,400 Q25,340 20,280 Q30,230 18,180 Q28,130 15,80 Q22,40 10,0 Z" fill="rgba(8,25,45,0.4)" />
        </>
      ) : (
        <>
          <path d="M120,0 L120,400 L90,400 Q70,350 80,300 Q60,260 85,220 Q65,180 80,140 Q70,100 90,60 Q75,30 100,0 Z" fill="rgba(10,30,50,0.6)" />
          <path d="M120,0 L120,400 L105,400 Q95,340 100,280 Q90,230 102,180 Q92,130 105,80 Q98,40 110,0 Z" fill="rgba(8,25,45,0.4)" />
        </>
      )}
    </svg>
  );
}

function DeepRockLayer({ progress }: { progress: number }) {
  const opacity = Math.min(1, (progress - 0.7) * 5) * 0.15;
  const yOffset = (progress - 0.85) * 40;

  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1400 120"
      preserveAspectRatio="xMidYMax slice"
      style={{
        opacity,
        transform: `translateY(${yOffset}px)`,
        height: "15vh",
      }}
    >
      <path d="M0,120 L0,80 Q50,60 100,70 Q200,50 300,65 Q400,55 500,62 Q600,50 700,58 Q800,48 900,60 Q1000,52 1100,65 Q1200,55 1300,68 Q1350,60 1400,75 L1400,120 Z" fill="rgba(5,15,30,0.8)" />
      <path d="M0,120 L0,95 Q100,80 200,88 Q350,75 500,85 Q650,78 800,86 Q950,80 1100,90 Q1250,82 1400,92 L1400,120 Z" fill="rgba(3,10,25,0.6)" />
    </svg>
  );
}
