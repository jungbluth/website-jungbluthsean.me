export function PressureVignette({ scrollProgress }: { scrollProgress: number }) {
  const intensity = Math.min(1, scrollProgress * 1.2);
  if (intensity < 0.01) return null;

  return (
    <div
      className="fixed inset-0 z-[2] pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at center,
          transparent ${60 - intensity * 25}%,
          rgba(0,2,8,${intensity * 0.4}) ${75 - intensity * 10}%,
          rgba(0,2,8,${intensity * 0.7}) 100%)`,
      }}
    />
  );
}
