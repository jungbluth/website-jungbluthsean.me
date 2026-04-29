import { useCallback, useEffect, useRef, useState } from "react";

interface RevealState {
  revealed: boolean;
  style: React.CSSProperties;
}

export function useTextReveal(
  delay = 0,
  scrollSelector = "[data-scroll-root]"
): [React.RefCallback<HTMLElement>, RevealState] {
  const [revealed, setRevealed] = useState(false);
  const nodeRef = useRef<HTMLElement | null>(null);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const scrollEl = document.querySelector(scrollSelector);
    if (!scrollEl) return;

    const check = () => {
      const el = nodeRef.current;
      if (!el || triggeredRef.current) return;

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        triggeredRef.current = true;
        if (delay > 0) {
          setTimeout(() => setRevealed(true), delay);
        } else {
          setRevealed(true);
        }
      }
    };

    check();
    scrollEl.addEventListener("scroll", check, { passive: true });
    return () => scrollEl.removeEventListener("scroll", check);
  }, [delay, scrollSelector]);

  const ref = useCallback((node: HTMLElement | null) => {
    nodeRef.current = node;
  }, []);

  const style: React.CSSProperties = {
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  };

  return [ref, { revealed, style }];
}
