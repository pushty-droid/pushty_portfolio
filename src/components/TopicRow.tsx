import type { ReactNode } from "react";

import { Figure } from "./Figure";

type Props = {
  eyebrow?: string;
  title: string;
  /** Which side the figure sits on. Alternate it down a page. */
  side?: "left" | "right";
  /** Passed straight to Figure, which renders nothing when src is null. */
  figure?: {
    src: string | null;
    alt: string;
    caption: string;
    credit?: string;
  };
  children: ReactNode;
};

/**
 * Mack's research-topic row: prose in one column, a figure in the other.
 * With no figure — or a figure whose image doesn't exist yet — the text
 * simply takes the full width.
 */
export function TopicRow({ eyebrow, title, side = "right", figure, children }: Props) {
  const hasFigure = Boolean(figure?.src);

  return (
    <div
      className={
        hasFigure
          ? "grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,24rem)] lg:gap-16"
          : ""
      }
    >
      <div className={hasFigure && side === "left" ? "lg:order-2" : undefined}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="type-h2 mt-3">{title}</h2>
        <span aria-hidden="true" className="grad-bar mt-5" />
        <div className="measure mt-6 space-y-5 leading-relaxed">{children}</div>
      </div>

      {hasFigure && figure && (
        <div className={side === "left" ? "lg:order-1" : undefined}>
          <Figure
            src={figure.src}
            alt={figure.alt}
            caption={figure.caption}
            credit={figure.credit}
          />
        </div>
      )}
    </div>
  );
}
