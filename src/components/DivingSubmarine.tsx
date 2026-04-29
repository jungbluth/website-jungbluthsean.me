import { useEffect, useState } from "react";
import { Submersible } from "@/components/Submersible";
import { AlvinInfoCard } from "@/components/AlvinInfoCard";

const RELEASE_THRESHOLD = 0.88;
const RELEASE_TRANSITION_MS = 9000;

export function DivingSubmarine({
  scrollProgress,
}: {
  scrollProgress: number;
}) {
  const [released, setReleased] = useState(false);
  const [settled, setSettled] = useState(false);
  const [pinnedTop, setPinnedTop] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (scrollProgress >= RELEASE_THRESHOLD && !released) {
      setReleased(true);
    }
  }, [scrollProgress, released]);

  useEffect(() => {
    if (!released) return;
    const t = setTimeout(() => setSettled(true), RELEASE_TRANSITION_MS);
    return () => clearTimeout(t);
  }, [released]);

  useEffect(() => {
    if (settled && pinnedTop === null) {
      const scrollRoot = document.querySelector("[data-scroll-root]");
      const scrollY = scrollRoot?.scrollTop ?? 0;
      const viewportY = window.innerHeight * 0.76;
      setPinnedTop(scrollY + viewportY);
    }
  }, [settled, pinnedTop]);

  // During scroll: map 0→RELEASE_THRESHOLD to 8vh→78vh
  const scrollTop = 8 + (scrollProgress / RELEASE_THRESHOLD) * 70;
  // Slight tilt to suggest diving
  const tilt = 8 + scrollProgress * 12;

  const isTracking = !released;
  const isPinned = pinnedTop !== null;

  return (
    <div
      className={`${isPinned ? "absolute z-20 pointer-events-none" : "fixed z-20 pointer-events-none"} hidden sm:block sm:scale-75 md:scale-100 origin-top-right`}
      style={{
        right: isTracking ? "8vw" : "calc(50% - 280px)",
        top: isPinned
          ? `${pinnedTop}px`
          : isTracking
            ? `${Math.min(scrollTop, 78)}vh`
            : "76vh",
        transform: isTracking
          ? `rotate(${tilt}deg)`
          : "rotate(0deg)",
        transition: released && !isPinned
          ? `top ${RELEASE_TRANSITION_MS}ms cubic-bezier(0.25, 0.1, 0.25, 1), right ${RELEASE_TRANSITION_MS}ms cubic-bezier(0.25, 0.1, 0.25, 1), transform ${RELEASE_TRANSITION_MS}ms cubic-bezier(0.25, 0.1, 0.25, 1)`
          : "none",
        opacity: scrollProgress < 0.01 ? 0 : 1,
      }}
    >
      <div
        className={`${settled ? "animate-sub-bob" : ""} ${settled ? "cursor-pointer pointer-events-auto" : ""}`}
        onClick={settled ? () => setShowInfo((v) => !v) : undefined}
      >
        <Submersible />
      </div>

      {settled && showInfo && (
        <AlvinInfoCard onClose={() => setShowInfo(false)} />
      )}

      {!settled && scrollProgress > 0.02 && (
        <DiveBubbles progress={scrollProgress} />
      )}
      {settled && <RestingBubbles />}
    </div>
  );
}

function DiveBubbles({ progress }: { progress: number }) {
  const count = Math.min(6, Math.floor(progress * 8) + 2);
  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-20 pointer-events-none">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-bubble-rise"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${25 + (i * 13) % 50}%`,
            bottom: 0,
            background: "rgba(180, 220, 255, 0.3)",
            boxShadow: "0 0 3px rgba(180, 220, 255, 0.15)",
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${2.5 + (i % 3) * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

function RestingBubbles() {
  return (
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-24 pointer-events-none">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute rounded-full animate-bubble-rise"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${30 + (i * 11) % 40}%`,
            bottom: 0,
            background: "rgba(180, 220, 255, 0.3)",
            boxShadow: "0 0 3px rgba(180, 220, 255, 0.15)",
            animationDelay: `${i * 1.4}s`,
            animationDuration: `${3 + (i % 3) * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}
