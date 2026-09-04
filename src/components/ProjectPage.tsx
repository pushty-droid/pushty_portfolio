import Link from "next/link";
import type { ReactNode } from "react";

import { Band } from "./Band";
import { BandHero } from "./BandHero";
import { ResultStat } from "./ResultStat";
import { SciNotation } from "./SciNotation";
import { getProject } from "@/data/projects";

/**
 * Shell for the two project write-ups. The MDX files supply the prose; this
 * supplies the hero, the result, and the navigation around it.
 */
/**
 * The astronomy background behind each write-up's hero, keyed by slug. The
 * scrim baked into BandHero carries the contrast; a slug with no entry falls
 * back to the plain gradient.
 */
const projectHeroImages: Record<string, { src: string; credit: string }> = {
  "gw-from-magnetogenesis": {
    src: "/images/neutron-star-black-hole-merger-artist-impression.jpg",
    credit: "Background: artist's impression of a compact-object merger",
  },
  "distance-duality-anisotropy": {
    src: "/images/milky-way-full-sky-panorama.jpeg",
    credit: "Background: ESO / S. Brunier — the Milky Way panorama",
  },
};

export function ProjectPage({ slug, children }: { slug: string; children: ReactNode }) {
  const project = getProject(slug);
  const hero = projectHeroImages[slug];

  return (
    <>
      {/* The title is a question in sentence case, so it takes the body face
          rather than the uppercase display one — BandHero's own title slot
          gets the short label instead. */}
      <BandHero
        eyebrow={project.dates}
        title={project.shortTitle}
        image={hero?.src ?? null}
        credit={hero?.credit ?? null}
      >
        <p className="max-w-[28ch] font-sans text-lg font-semibold leading-snug">
          {project.title}
        </p>
      </BandHero>

      <Band tone="deep">
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-8">
          <ResultStat value={project.stat.value} caption={project.stat.caption} />

          <dl className="meta grid gap-x-8 gap-y-2 sm:grid-cols-2">
            <div>
              <dt className="opacity-70">Dates</dt>
              <dd className="text-ink">{project.dates}</dd>
            </div>
            <div>
              <dt className="opacity-70">Output</dt>
              <dd className="text-ink">
                {project.linkedWorkHref ? (
                  <a
                    href={project.linkedWorkHref}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    {project.linkedWork}
                  </a>
                ) : (
                  project.linkedWork
                )}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="opacity-70">Tools</dt>
              <dd className="text-ink">{project.tools.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </Band>

      <Band tone="violet">
        <article>{children}</article>

        <nav aria-label="Project" className="mt-16 flex flex-wrap gap-3 border-t border-rule pt-8">
          <Link href="/projects" className="btn-secondary">
            ← All projects
          </Link>
          <Link href="/publications" className="btn-secondary">
            Publications
          </Link>
        </nav>
      </Band>
    </>
  );
}

/**
 * One of the three narrative beats. The label sits in the left gutter on wide
 * screens and above the prose on mobile.
 */
export function Beat({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-x-10 gap-y-3 border-t border-rule py-10 first:border-t-0 first:pt-0 lg:grid-cols-[10rem_1fr]">
      <h2 className="eyebrow lg:sticky lg:top-24 lg:self-start lg:pt-2 lg:text-right">
        {label}
      </h2>
      <div className="prose-editorial">{children}</div>
    </section>
  );
}

/** Inline physics notation inside MDX prose: <N>{"Ω_{GW}"}</N> */
export function N({ children }: { children: string }) {
  return <SciNotation>{children}</SciNotation>;
}
