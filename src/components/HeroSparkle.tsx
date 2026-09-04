/**
 * An ambient sparkle layer for the hero bands.
 *
 * Three parallax starfields plus a few four-point accents, drifting slowly
 * enough that nothing ever catches the eye mid-read. It sits *above* the
 * hero photo and its scrim but *below* the text, so the picture keeps its
 * depth and the headline keeps the contrast BandHero already reasons about
 * — the layers only ever add light at very low alpha, and the text sits in
 * its own stacking layer above them.
 *
 * No JavaScript: it is pure CSS (see .hero-sparkle in globals.css), so it
 * costs nothing at runtime and inherits the global prefers-reduced-motion
 * reset, which stops every layer dead for readers who ask for that.
 */

/**
 * The four-point accents NASA uses. Three is enough to read as a motif; more
 * starts to look like decoration. Each is its own fixed-size square SVG
 * rather than one stretched overlay — a percentage-scaled viewBox distorts
 * the points into lozenges on a wide band.
 */
const accents = [
  { className: "hero-sparkle-accent--a", size: 30, top: "22%", left: "86%" },
  { className: "hero-sparkle-accent--b", size: 18, top: "62%", left: "9%" },
  { className: "hero-sparkle-accent--c", size: 22, top: "86%", left: "26%" },
];

export function HeroSparkle() {
  return (
    <div aria-hidden="true" className="hero-sparkle-root">
      <div className="hero-sparkle hero-sparkle--far" />
      <div className="hero-sparkle hero-sparkle--mid" />
      <div className="hero-sparkle hero-sparkle--near" />

      {accents.map((accent) => (
        <svg
          key={accent.className}
          className={`hero-sparkle-accent ${accent.className}`}
          style={{ top: accent.top, left: accent.left, width: accent.size, height: accent.size }}
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* A four-point star: concave sides, so it reads as a glint
              rather than as a diamond. */}
          <path
            d="M12 0c0 6.6-5.4 12-12 12 6.6 0 12 5.4 12 12 0-6.6 5.4-12 12-12-6.6 0-12-5.4-12-12z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}
