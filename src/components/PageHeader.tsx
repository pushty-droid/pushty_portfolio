import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
};

/** Opening block shared by every inner page. */
export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <header className="container-page border-b border-rule pb-12 pt-14 sm:pt-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-3 text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.1] tracking-tight text-balance">
        {title}
      </h1>
      {intro && <div className="measure mt-6 text-lg leading-relaxed text-muted">{intro}</div>}
    </header>
  );
}
