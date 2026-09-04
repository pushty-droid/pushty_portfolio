import Image from "next/image";
import type { ReactNode } from "react";

import { HeroSparkle } from "./HeroSparkle";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  /**
   * Optional full-bleed background. `null` falls back to the gradient wash,
   * so every page is finished before a single image exists — the same rule
   * the rest of the site follows for missing data.
   */
  image?: string | null;
  /** Attribution for the background image. NASA/ESA licences require it. */
  credit?: string | null;
  /**
   * The ambient sparkle layer over the image. On by default; pass `false`
   * for a hero where the picture has to stay completely clean.
   */
  sparkle?: boolean;
  /** Buttons or links under the intro. */
  children?: ReactNode;
};

/**
 * The opening band on every route: a full-bleed hero with the page title set
 * over it. With an image it's a photograph under a gradient scrim; without
 * one it's the gradient alone.
 */
export function BandHero({
  eyebrow,
  title,
  intro,
  image,
  credit,
  sparkle = true,
  children,
}: Props) {
  return (
    <header
      className={`band band--gradient relative isolate overflow-hidden py-20 sm:py-28 ${
        image ? "sm:min-h-[34rem]" : ""
      }`}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          {/* Scrim.

              Hero images are toned into the band gradient before they get
              here (see public/images/CREDITS.md), so this layer isn't doing
              the contrast work on its own — it only deepens the middle of the
              band, where the title sits, and thins out at the edges so the
              picture reads. Worst case behind the title composites to 13.7:1.

              An untoned image dropped in later would still clear AA here, but
              tone it first: it will look like a photograph pasted onto the
              site rather than part of it. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(23,15,42,0.30) 0%, rgba(23,15,42,0.62) 32%, rgba(23,15,42,0.62) 72%, rgba(23,15,42,0.30) 100%)",
            }}
          />
        </>
      )}

      {/* Above the image and its scrim, below the text — see HeroSparkle. */}
      {sparkle && <HeroSparkle />}

      <div className="container-page flex flex-col items-center text-center">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}

        <h1 className="type-display mt-4 max-w-[20ch]">{title}</h1>

        <span aria-hidden="true" className="grad-bar mt-7" />

        {intro && (
          <div className="mt-7 max-w-[60ch] text-lg leading-relaxed text-muted">{intro}</div>
        )}

        {children && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">{children}</div>
        )}
      </div>

      {credit && (
        <p className="container-page mt-10 text-right font-sans text-xs text-muted opacity-80">
          {credit}
        </p>
      )}
    </header>
  );
}
