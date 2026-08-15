"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type State = "off" | "hidden" | "shown";

/**
 * Hyperspace's fade-up, as progressive enhancement.
 *
 * Content renders visible and stays that way unless three things are true:
 * JavaScript ran, the reader hasn't asked for reduced motion, and the element
 * is still below the fold at mount. That last check is what stops anything
 * above the fold from blinking out and back in on load.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("off");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen — leave it alone rather than animating it in.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setState("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("shown");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);

    // Failsafe. Hidden-until-observed means a throttled or non-firing observer
    // would leave a section permanently invisible, which is a far worse
    // outcome than losing the animation. Ten seconds is long past the point
    // where anyone would still be scrolling towards it.
    const failsafe = window.setTimeout(() => {
      setState("shown");
      observer.disconnect();
    }, 10_000);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} data-reveal={state === "off" ? undefined : state} className={className}>
      {children}
    </div>
  );
}
