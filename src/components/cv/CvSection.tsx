import { useEffect, useRef, useState } from "react";
import { useCvDark } from "./CvDarkModeContext";

export function CvSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  const dark = useCvDark();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className="mb-8 sm:mb-10 scroll-mt-[70px] lg:scroll-mt-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <h3
        className="text-sm sm:text-base font-bold uppercase tracking-wide mb-4 sm:mb-5 rounded-lg transition-colors duration-300"
        style={{
          background: dark ? "rgba(100,180,255,0.08)" : "rgba(0,115,230,0.07)",
          color: dark ? "#6bb8ff" : "#0073e6",
          padding: "10px 14px",
          borderLeft: dark ? "4px solid #6bb8ff" : "4px solid #0073e6",
          letterSpacing: "0.04em",
        }}
      >
        {title}
      </h3>
      <div
        className="px-1 sm:px-2.5 text-sm sm:text-[0.95rem] transition-colors duration-300"
        style={{ color: dark ? "#ccd6e0" : "#333", lineHeight: 1.65 }}
      >
        {children}
      </div>
    </section>
  );
}

export function SubLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="no-underline hover:underline" style={{ color: "inherit" }}>
      {children}
    </a>
  );
}

export function PubLink({ href, children }: { href: string; children: React.ReactNode }) {
  const dark = useCvDark();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline hover:underline"
      style={{ color: dark ? "#6bb8ff" : "#0073e6" }}
    >
      {children}
    </a>
  );
}

export function CvSubHeader({ children }: { children: React.ReactNode }) {
  const dark = useCvDark();
  return (
    <h4
      className="font-bold mb-2 mt-5 transition-colors duration-300"
      style={{
        color: dark ? "#6bb8ff" : "#0073e6",
        borderBottom: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
        paddingBottom: 5,
      }}
    >
      {children}
    </h4>
  );
}

export function CvDd({ children, className }: { children: React.ReactNode; className?: string }) {
  const dark = useCvDark();
  return (
    <dd className={className ?? "ml-5 mb-2"} style={{ color: dark ? "#99aab8" : "#555" }}>
      {children}
    </dd>
  );
}
