import type { Metadata } from "next";
import Link from "next/link";

import { Band } from "@/components/Band";
import { BandHero } from "@/components/BandHero";
import { BibtexBlock } from "@/components/BibtexBlock";
import { Reveal } from "@/components/Reveal";
import { SciNotation } from "@/components/SciNotation";
import { publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "arXiv:2604.04436 — Directional Tests of the Cosmic Distance Duality Relation using Pantheon+ and BAO — plus the M.Sc. thesis on gravitational-wave imprints from inflationary magnetogenesis.",
};

export default function PublicationsPage() {
  return (
    <>
      <BandHero
        eyebrow="Publications"
        title="Papers and preprints"
        image={null}
        intro="One first-author preprint prepared for JCAP, and a completed M.Sc. thesis."
      />

      {publications.map((publication, index) => (
        <Band key={publication.title} tone={index === 0 ? "violet" : "light"}>
          <Reveal>
            <article>
              <div className="meta flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>{publication.year}</span>
                <span aria-hidden="true">·</span>
                <span>{publication.venue}</span>
                {publication.leadAuthor && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-accent">Lead author</span>
                  </>
                )}
              </div>

              {/* Sentence case, not the display face — these are paper titles
                  and they have to stay quotable as written. */}
              <h2 className="mt-3 max-w-[34ch] font-sans text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold leading-snug tracking-normal">
                {publication.url ? (
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {publication.title}
                  </a>
                ) : (
                  publication.title
                )}
              </h2>

              <span aria-hidden="true" className="grad-bar mt-5" />

              <p className="meta mt-5">{publication.authors}</p>

              <p className="measure mt-6 leading-relaxed">{publication.description}</p>

              {publication.supervisors && (
                <p className="meta mt-4">Supervisors: {publication.supervisors.join(" · ")}</p>
              )}

              {/* Links row — each entry appears only if the data has it */}
              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-3">
                {publication.url && (
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    {publication.arxivId ? `arXiv:${publication.arxivId}` : "Read"}
                  </a>
                )}
                {publication.doi && (
                  <a
                    href={publication.doi}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    DOI
                  </a>
                )}
                {publication.pdf && (
                  <a href={publication.pdf} className="btn-secondary">
                    PDF
                  </a>
                )}
                {publication.projectSlug && (
                  <Link
                    href={`/projects/${publication.projectSlug}`}
                    className="link font-sans text-sm"
                  >
                    Project write-up →
                  </Link>
                )}
              </div>

              {publication.keyNumbers && (
                <div className="mt-10">
                  <h3 className="eyebrow">Key numbers</h3>
                  <dl className="mt-4 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
                    {publication.keyNumbers.map((entry) => (
                      <div key={entry.label} className="bg-bg px-5 py-4">
                        <dt className="meta">
                          <SciNotation>{entry.label}</SciNotation>
                        </dt>
                        <dd className="mt-1 font-serif text-[1.125rem] text-accent">
                          <SciNotation>{entry.value}</SciNotation>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {publication.bibtex && (
                <div className="mt-10">
                  <h3 className="eyebrow">Cite</h3>
                  <BibtexBlock bibtex={publication.bibtex} />
                </div>
              )}
            </article>
          </Reveal>
        </Band>
      ))}
    </>
  );
}
