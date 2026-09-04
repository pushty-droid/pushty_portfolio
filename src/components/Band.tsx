import Image from "next/image";
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
  /**
   * Optional full-bleed background photo sitting behind the content. When
   * set, the band is forced onto the light-on-dark `gradient` token set (so
   * white text stays legible in both themes) and a dark scrim is laid over
   * the image. `null`/undefined leaves the band as a flat tone.
   */
  image?: string | null;
  /** Attribution for the background image. NASA/ESA/ESO licences require it. */
  credit?: string | null;
  children: ReactNode;
};

/**
 * A full-bleed horizontal band — the page's structural unit. Every section on
 * every route is one of these. See the .band rules in globals.css.
 */
export function Band({
  tone = "base",
  id,
  className = "",
  innerClassName = "",
  image,
  credit,
  children,
}: Props) {
  const effectiveTone = image ? "gradient" : tone;

  return (
    <section
      id={id}
      className={`band band--${effectiveTone} ${
        image ? "relative isolate overflow-hidden" : ""
      } ${className}`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover"
          />
          {/* Scrim. Body copy — not just a headline — sits on this band, so
              the wash is heavier than the hero's: it composites well past AA
              for the white ink the gradient tone sets, while the photo still
              reads underneath. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(19,13,38,0.80) 0%, rgba(19,13,38,0.88) 45%, rgba(19,13,38,0.92) 100%)",
            }}
          />
        </>
      )}

      <div className={`container-page ${innerClassName}`}>{children}</div>

      {credit && (
        <p className="container-page mt-10 text-right font-sans text-xs text-muted opacity-80">
          {credit}
        </p>
      )}
    </section>
  );
}
