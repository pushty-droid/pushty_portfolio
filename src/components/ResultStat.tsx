import { SciNotation } from "./SciNotation";

type Props = {
  /** Supports `_{sub}` and `^{sup}` — see SciNotation. */
  value: string;
  caption: string;
  /** `lg` for the homepage cards, `sm` inside dense lists. */
  size?: "sm" | "lg";
};

/**
 * A headline number in the display serif. The results are the most persuasive
 * thing on the site, so they get their own typographic register — set as
 * physics notation rather than as a code string.
 */
export function ResultStat({ value, caption, size = "lg" }: Props) {
  return (
    <div data-print-keep>
      <p className={size === "lg" ? "type-stat text-accent" : "type-stat-sm text-accent"}>
        <SciNotation>{value}</SciNotation>
      </p>
      <p className="meta mt-2.5 max-w-[38ch]">{caption}</p>
    </div>
  );
}
