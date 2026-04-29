export function DeepAurora({ scrollProgress }: { scrollProgress: number }) {
  const intensity = Math.max(0, (scrollProgress - 0.78) / 0.22);
  if (intensity < 0.01) return null;

  return (
    <>
      <style>{`
        @keyframes auroraDrift1 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(80px) scale(1.1); }
        }
        @keyframes auroraDrift2 {
          0%, 100% { transform: translateX(0) scale(1.05); }
          50% { transform: translateX(-60px) scale(0.95); }
        }
        @keyframes auroraDrift3 {
          0%, 100% { transform: translateX(40px) scaleY(1); }
          50% { transform: translateX(-40px) scaleY(1.15); }
        }
        @keyframes auroraDrift4 {
          0%, 100% { transform: translateX(-30px) rotate(0deg); }
          50% { transform: translateX(50px) rotate(3deg); }
        }
      `}</style>
      <div
        className="fixed inset-0 z-[7] pointer-events-none overflow-hidden"
        style={{ opacity: intensity * 0.6 }}
      >
        <div
          className="absolute"
          style={{
            width: "140%",
            height: "60%",
            bottom: "-10%",
            left: "-20%",
            background:
              "radial-gradient(ellipse at 30% 70%, rgba(13,148,136,0.25) 0%, transparent 55%)",
            filter: "blur(80px)",
            animation: "auroraDrift1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "120%",
            height: "50%",
            bottom: "0%",
            left: "-10%",
            background:
              "radial-gradient(ellipse at 60% 80%, rgba(52,211,153,0.18) 0%, transparent 50%)",
            filter: "blur(70px)",
            animation: "auroraDrift2 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "100%",
            height: "40%",
            bottom: "5%",
            left: "0",
            background:
              "radial-gradient(ellipse at 45% 75%, rgba(100,255,218,0.12) 0%, transparent 45%)",
            filter: "blur(60px)",
            animation: "auroraDrift3 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "80%",
            height: "35%",
            bottom: "10%",
            left: "10%",
            background:
              "radial-gradient(ellipse at 55% 65%, rgba(129,140,248,0.1) 0%, transparent 50%)",
            filter: "blur(90px)",
            animation: "auroraDrift4 30s ease-in-out infinite",
          }}
        />
      </div>
    </>
  );
}
