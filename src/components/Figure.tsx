import Image from "next/image";

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
      <figcaption className="meta mt-3 max-w-[60ch]">
        {caption}
        {credit && <span className="block opacity-75">{credit}</span>}
      </figcaption>
    </figure>
  );
}
