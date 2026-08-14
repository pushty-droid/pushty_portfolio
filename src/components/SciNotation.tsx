import { Fragment, type ReactNode } from "react";

/**
 * Renders physics notation from a compact source string, so the data files stay
 * plain TypeScript while the page gets real <sub>/<sup> markup.
 *
 *   "Ω_{GW} ≈ 4.4 × 10^{−19}"  →  Ω<sub>GW</sub> ≈ 4.4 × 10<sup>−19</sup>
 *
 * Unicode superscripts (10⁻¹⁹) are the alternative, but they render at
 * inconsistent sizes across fonts and read poorly to screen readers.
 */
const TOKEN = /([_^])\{([^}]*)\}/g;

export function SciNotation({ children }: { children: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  TOKEN.lastIndex = 0;
  while ((match = TOKEN.exec(children)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(children.slice(lastIndex, match.index));
    }

    const [, kind, content] = match;
    nodes.push(
      kind === "_" ? (
        <sub key={match.index} className="text-[0.62em] tracking-normal">
          {content}
        </sub>
      ) : (
        <sup key={match.index} className="text-[0.62em] tracking-normal">
          {content}
        </sup>
      ),
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < children.length) {
    nodes.push(children.slice(lastIndex));
  }

  return (
    <>
      {nodes.map((node, i) => (
        <Fragment key={i}>{node}</Fragment>
      ))}
    </>
  );
}
