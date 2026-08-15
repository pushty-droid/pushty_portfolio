import type { ReactNode } from "react";

type Props = {
  /** Small-caps label above the heading. */
  eyebrow?: string;
  children: ReactNode;
  /** Sits to the right of the heading on wide screens — usually a link. */
  aside?: ReactNode;
  as?: "h1" | "h2" | "h3";
};

/**
 * Eyebrow + condensed display heading + the gradient bar Hyperspace puts under
 * its headings. The site's main structural device; every section on every page
 * opens with one.
 */
export function SectionHeading({ eyebrow, children, aside, as: Tag = "h2" }: Props) {
  return (
    <div className="mb-9">
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <Tag className="type-h2">{children}</Tag>
        {aside && <div className="font-sans text-sm text-muted">{aside}</div>}
      </div>
      <span aria-hidden="true" className="grad-bar mt-4" />
    </div>
  );
}
