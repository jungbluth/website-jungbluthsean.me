import type { MouseEvent } from "react";

export function handleTiltMove(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  el.style.transition = "transform 0.15s ease-out";
}

export function handleTiltLeave(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  el.style.transition = "transform 0.5s ease-out";
  el.style.transform = "";
}
