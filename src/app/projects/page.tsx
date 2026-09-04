import type { Metadata } from "next";
import Link from "next/link";

import { Band } from "@/components/Band";
import { BandHero } from "@/components/BandHero";
import { Reveal } from "@/components/Reveal";
import { ResultStat } from "@/components/ResultStat";
import { TopicRow } from "@/components/TopicRow";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Two featured research projects: directional tests of the cosmic distance duality relation, and gravitational-wave imprints from inflationary magnetogenesis.",
};

/**
 * The figure that belongs beside each project, keyed by slug. A slug with no
 * entry — or an entry whose src is null — falls back to a full-width text
 * column, so this map can stay incomplete without breaking the layout.
 */
/**
 * A full-bleed astronomy background for each project band, keyed by slug. The
 * scrim in `Band` keeps the stat and prose legible over any of these; a slug
 * with no entry just gets its flat tone back.
 */
const projectBackgrounds: Record<string, { src: string; credit: string }> = {
  "gw-from-magnetogenesis": {
    src: "/images/neutron-star-black-hole-merger-artist-impression.jpg",
    credit: "Background: artist's impression of a compact-object merger",
  },
  "distance-duality-anisotropy": {
    src: "/images/milky-way-full-sky-panorama.jpeg",
    credit: "Background: ESO / S. Brunier — the Milky Way panorama",
  },
};

const projectFigures: Record<
  string,
  { src: string | null; alt: string; caption: string; credit?: string }
> = {
  "gw-from-magnetogenesis": {
    src: "/figures/thesis-fig-3-4-omega-gw-constant.png",
    alt: "Gravitational-wave energy density Omega_GW plotted against wavenumber k, flat at 4.4 × 10⁻¹⁹ across five decades from 10⁻⁴ to 10² inverse megaparsecs.",
    caption:
      "Figure 3.4 — Ω_{GW} for the non-helical case with n = 2, flat across the whole range in k.",
    credit: "From the M.Sc. thesis, IIA Bengaluru (2026).",
  },
  "distance-duality-anisotropy": {
    // Figure 6 (the null-test histogram) lives only in the arXiv paper.
    // Drop it into public/figures/ and set this src — see TODO.md §3.
    src: null,
    alt: "",
    caption: "",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <BandHero
        eyebrow="Projects"
        title="Two questions, worked end to end"
        image="/images/black-hole-accretion-disk-artist-impression.jpeg"
        credit="Background: artist's impression of a black-hole accretion disk"
        intro="Each write-up follows the same three beats: the question, my approach, and what I found."
      />

      {projects.map((project, index) => (
        <Band
          key={project.slug}
          tone={index % 2 === 0 ? "violet" : "deep"}
          image={projectBackgrounds[project.slug]?.src ?? null}
          credit={projectBackgrounds[project.slug]?.credit ?? null}
        >
          <Reveal>
            <TopicRow
              eyebrow={project.dates}
              title={project.shortTitle}
              side={index % 2 === 0 ? "right" : "left"}
              figure={projectFigures[project.slug]}
            >
              <ResultStat value={project.stat.value} caption={project.stat.caption} />
              <p className="leading-relaxed">{project.summary}</p>

              <p className="meta">
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
                <span aria-hidden="true"> · </span>
                {project.tools.join(", ")}
              </p>

              <p>
                <Link href={`/projects/${project.slug}`} className="btn-primary">
                  Read the write-up
                </Link>
              </p>
            </TopicRow>
          </Reveal>
        </Band>
      ))}
    </>
  );
}
