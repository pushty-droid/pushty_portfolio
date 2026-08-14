import type { ReactNode } from "react";

type Props = {
  /** Sits in the left gutter on wide screens, above the content on mobile. */
  label: ReactNode;
  children: ReactNode;
};

/**
 * The gutter timeline: a hairline rail with dates (or a beat label) parked in
 * the left margin. Used for research positions, education, talks, and the
 * question/approach/findings beats on project pages.
 */
export function GutterEntry({ label, children }: Props) {
  return (
    <div className="relative grid gap-x-8 gap-y-2 border-l border-rule pl-6 md:grid-cols-[9.5rem_1fr] md:border-l-0 md:pl-0">
      {/* Rail dot — the marker sitting on the mobile rail */}
      <span
        aria-hidden="true"
        className="absolute -left-[3.5px] top-2.5 size-1.5 rounded-full bg-rule md:hidden"
      />
      <div className="meta pt-1 md:text-right">{label}</div>
      <div className="md:border-l md:border-rule md:pl-8">{children}</div>
    </div>
  );
}
