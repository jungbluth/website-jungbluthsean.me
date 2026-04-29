import { useCallback, useEffect, useRef, useState } from "react";

export function useInView(
  _threshold = 0.2,
  scrollSelector = "[data-scroll-root]"
): [React.RefCallback<HTMLElement>, boolean] {
  const [inView, setInView] = useState(false);
  const nodeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (inView) return;

    const scrollEl = document.querySelector(scrollSelector);
    if (!scrollEl) return;

    const check = () => {
      const el = nodeRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Element is "in view" when its top is within the viewport
      if (rect.top < windowHeight * 0.85 && rect.bottom > 0) {
        setInView(true);
      }
    };

    // Check immediately in case already visible
    check();

    scrollEl.addEventListener("scroll", check, { passive: true });
    return () => scrollEl.removeEventListener("scroll", check);
  }, [inView, scrollSelector]);

  const ref = useCallback((node: HTMLElement | null) => {
    nodeRef.current = node;
  }, []);

  return [ref, inView];
}
