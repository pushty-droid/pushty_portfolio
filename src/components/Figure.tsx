import Image from "next/image";

import { SciNotation } from "./SciNotation";

type Props = {
  /** When null the whole figure is omitted — no empty frame, no broken image. */
  src: string | null;
  alt: string;
  caption: string;
  credit?: string;
  width?: number;
  height?: number;
};

/**
 * A figure that simply doesn't exist until its image does. The project
 * narratives read fine without them; dropping a file into public/figures/ and
 * setting `src` is the only change needed to bring one in.
 */
export function Figure({ src, alt, caption, credit, width = 1600, height = 1000 }: Props) {
  if (!src) return null;

  return (
    <figure className="my-10" data-print-keep>
      {/* The plots are matplotlib PNGs on white. Keeping the mount white in
          both themes reads as a printed plate rather than a lighting bug. */}
      <div className="overflow-hidden border border-rule bg-white p-3">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
        />
      </div>
      <span aria-hidden="true" className="grad-bar mt-4 w-16" />
      {/* Captions carry physics notation, so they go through the same
          `_{sub}` / `^{sup}` parser the rest of the site uses. */}
      <figcaption className="meta mt-3 max-w-[60ch]">
        <SciNotation>{caption}</SciNotation>
        {credit && <span className="block opacity-75">{credit}</span>}
      </figcaption>
    </figure>
  );
}
