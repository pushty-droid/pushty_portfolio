import type { ProfileLink } from "@/data/types";

type Props = {
  links: ProfileLink[];
  className?: string;
};

/**
 * Renders only the profiles that actually have URLs, and nothing at all when
 * none do. GitHub, ORCID, Google Scholar and INSPIRE-HEP can be added to
 * `profile.links` later and will appear here with no layout change.
 */
export function LinkList({ links, className = "" }: Props) {
  const present = links.filter((link) => Boolean(link.href));
  if (present.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm ${className}`}>
      {present.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            {link.label}
            {link.handle && (
              <span className="ml-1.5 font-mono text-xs opacity-70">{link.handle}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
