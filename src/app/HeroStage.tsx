"use client";

import { useEffect, useRef } from "react";
import { OrderFlow } from "./OrderFlow";

/**
 * The hero visual: an orange brand panel with the order queue on top and two floating
 * cards (Voice AI call, WhatsApp follow-up). Layers drift with the pointer at different
 * depths through a damped follow, so the stage reads as physical rather than flat.
 */
export function HeroStage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;

    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf = 0;

    const tick = () => {
      // Critically damped-feeling follow: close a fixed fraction of the gap each frame.
      cur.x += (target.x - cur.x) * 0.08;
      cur.y += (target.y - cur.y) * 0.08;
      el.style.setProperty("--px", cur.x.toFixed(4));
      el.style.setProperty("--py", cur.y.toFixed(4));
      if (Math.abs(target.x - cur.x) > 0.0005 || Math.abs(target.y - cur.y) > 0.0005) raf = requestAnimationFrame(tick);
      else raf = 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth - 0.5;
      target.y = e.clientY / window.innerHeight - 0.5;
      kick();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="stage" ref={ref}>
      <div className="stage-panel" aria-hidden>
        <span className="stage-ring" />
        <span className="stage-dot" />
      </div>

      <div className="stage-layer stage-main">
        <OrderFlow />
      </div>

      <div className="stage-layer float float-call" aria-hidden>
        <span className="float-icon">
          <svg viewBox="0 0 24 24">
            <path
              d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="float-text">
          <b>Voice AI</b>
          <span>Confirming COD order #1043</span>
        </span>
        <span className="wave">
          {Array.from({ length: 7 }, (_, i) => (
            <i key={i} style={{ "--i": i } as React.CSSProperties} />
          ))}
        </span>
      </div>

      <div className="stage-layer float float-wa" aria-hidden>
        <span className="float-text">
          <b>WhatsApp</b>
          <span>Address updated. Your order is on its way.</span>
        </span>
        <span className="ticks">
          <svg viewBox="0 0 20 12">
            <path d="M1 6.5l3.2 3.2L11 2.5M8.5 9.2l.5.5L18 1.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
