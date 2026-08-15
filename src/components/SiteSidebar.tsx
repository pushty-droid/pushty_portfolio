"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { LinkList } from "./LinkList";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/profile";
import { navigation } from "@/lib/site";

const siteRole = "Early-universe cosmology · gravitational waves";

/**
 * Suyu's fixed left rail, kept above 1280px and collapsed to a top bar below
 * it — which is what Hyperspace itself does at that breakpoint. Contact sits
 * at the foot of the rail rather than only in the footer, so an address is
 * always on screen.
 */
export function SiteSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      {/* ---------------- Desktop rail ---------------- */}
      <aside
        data-print-hide
        className="fixed inset-y-0 left-0 z-40 hidden w-[17rem] flex-col justify-between overflow-y-auto border-r border-rule bg-band-deep px-8 py-10 xl:flex"
      >
        <div>
          <Link href="/" className="block">
            <span className="type-h3 block leading-[1.05] transition-colors hover:text-accent">
              Pushty
              <br />
              Shrimankar
            </span>
          </Link>
          <span aria-hidden="true" className="grad-bar mt-4" />
          <p className="meta mt-4 text-[0.8125rem] leading-snug">{siteRole}</p>

          <nav aria-label="Main" className="mt-10">
            <ul className="space-y-0.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative block py-2 pl-4 font-sans text-sm transition-colors ${
                      isActive(item.href)
                        ? "font-semibold text-accent"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {isActive(item.href) && (
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full"
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, var(--grad-from), var(--grad-to))",
                        }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="link block font-sans text-[0.8125rem]"
          >
            {profile.email}
          </a>
          <LinkList links={profile.links} className="mt-3" />
          <div className="mt-6">
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* ---------------- Mobile / tablet bar ---------------- */}
      <header
        data-print-hide
        className="sticky top-0 z-50 border-b border-rule bg-bg/90 backdrop-blur-md xl:hidden"
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display text-xl font-bold uppercase tracking-[0.015em] transition-colors hover:text-accent"
          >
            Pushty Shrimankar
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="grid size-9 place-items-center rounded-full border border-rule text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                )}
              </svg>
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Main" className="border-t border-rule bg-bg">
            <ul className="container-page flex flex-col py-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 font-sans text-base ${
                      isActive(item.href) ? "font-semibold text-accent" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
