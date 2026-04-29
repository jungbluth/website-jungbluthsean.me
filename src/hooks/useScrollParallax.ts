import { useCallback, useEffect, useRef, useState } from "react";

interface ParallaxState {
  opacity: number;
  translateY: number;
  scale: number;
}

export function useScrollParallax(
  scrollSelector = "[data-scroll-root]"
): [React.RefCallback<HTMLElement>, ParallaxState] {
  const [state, setState] = useState<ParallaxState>({
    opacity: 0,
    translateY: 30,
    scale: 0.98,
  });
  const nodeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrollEl = document.querySelector(scrollSelector);
    if (!scrollEl) return;

    const update = () => {
      const el = nodeRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const enterProgress = 1 - Math.max(0, Math.min(1, (rect.top - vh * 0.15) / (vh * 0.5)));
      const exitProgress = Math.max(0, Math.min(1, (-rect.bottom + vh * 0.1) / (vh * 0.3)));

      const opacity = Math.min(enterProgress, 1 - exitProgress);
      const translateY = (1 - enterProgress) * 30;
      const scale = 0.98 + enterProgress * 0.02;

      setState({ opacity: Math.max(0, opacity), translateY, scale });
    };

    update();
    scrollEl.addEventListener("scroll", update, { passive: true });
    return () => scrollEl.removeEventListener("scroll", update);
  }, [scrollSelector]);

  const ref = useCallback((node: HTMLElement | null) => {
    nodeRef.current = node;
  }, []);

  return [ref, state];
}
