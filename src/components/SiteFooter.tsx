import Link from "next/link";

import { LinkList } from "./LinkList";
import { profile } from "@/data/profile";
import { navigation } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer data-print-hide className="mt-24 border-t border-rule">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-lg font-semibold">{profile.name}</p>
          <p className="meta mt-2 max-w-xs">{profile.oneLiner}</p>
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

      <div className="container-page border-t border-rule py-6">
        <p className="meta">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
