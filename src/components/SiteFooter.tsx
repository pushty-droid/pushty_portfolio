import Link from "next/link";

import { LinkList } from "./LinkList";
import { profile } from "@/data/profile";
import { navigation } from "@/lib/site";

/**
 * Suyu's footer habits: the affiliations spelled out, contact repeated, and a
 * "last updated" line so a reader can tell how current the page is. Only the
 * institutions are named — no street address and no phone number.
 */
const affiliations = [
  "M.Sc. Physics, Vellore Institute of Technology",
  "Project Intern, Indian Institute of Astrophysics, Bengaluru",
];

const lastUpdated = "August 2026";

export function SiteFooter() {
  return (
    // border-t: pages can end on any tone, including deep, and without a rule
    // the footer would merge into the band above it.
    <footer data-print-hide className="band band--deep border-t border-rule py-14 sm:py-16">
      <div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="type-h3">{profile.name}</p>
          <span aria-hidden="true" className="grad-bar mt-3" />
          <p className="meta mt-4 max-w-xs">{profile.oneLiner}</p>
        </div>

        <div>
          <h2 className="eyebrow">Contact</h2>
          <ul className="mt-3 space-y-1.5 font-sans text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="link">
                {profile.email}
              </a>
            </li>
            <li className="text-muted">{profile.location}</li>
          </ul>
          <div className="mt-4">
            <LinkList links={profile.links} />
          </div>

          <ul className="meta mt-5 space-y-1">
            {affiliations.map((affiliation) => (
              <li key={affiliation}>{affiliation}</li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Pages</h2>
          <ul className="mt-3 space-y-1.5 font-sans text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container-page mt-12 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-rule pt-6">
        <p className="meta">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="meta">Last updated: {lastUpdated}</p>
      </div>
    </footer>
  );
}
