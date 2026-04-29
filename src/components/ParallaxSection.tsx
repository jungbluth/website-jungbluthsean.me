import { useScrollParallax } from "@/hooks/useScrollParallax";
import type { ReactNode } from "react";

export function ParallaxSection({ children }: { children: ReactNode }) {
  const [ref, { opacity, translateY, scale }] = useScrollParallax();

  return (
    <div
      ref={ref}
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
