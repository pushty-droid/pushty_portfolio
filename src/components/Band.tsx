import type { ReactNode } from "react";

export type BandTone = "base" | "violet" | "deep" | "light" | "gradient";

type Props = {
  /**
   * Which token set the band carries. Each tone redefines the colour
   * variables in its own scope, so anything rendered inside picks up the
   * right ink, rule and accent without knowing where it landed.
   *
   * Two rules the pages follow: never two adjacent bands of the same tone,
   * and at most one `light` band per page — it's a rest for the eye, and it
   * stops being one if it happens twice.
   */
  tone?: BandTone;
  /** Anchor target, so the sidebar can deep-link into a page. */
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

/**
 * A full-bleed horizontal band — the page's structural unit. Every section on
 * every route is one of these. See the .band rules in globals.css.
 */
export function Band({ tone = "base", id, className = "", innerClassName = "", children }: Props) {
  return (
    <section id={id} className={`band band--${tone} ${className}`}>
      <div className={`container-page ${innerClassName}`}>{children}</div>
    </section>
  );
}
