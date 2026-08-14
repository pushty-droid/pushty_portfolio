import type { Metadata } from "next";
import Link from "next/link";

import { GutterEntry } from "@/components/GutterEntry";
import { PageHeader } from "@/components/PageHeader";
import { SciNotation } from "@/components/SciNotation";
import { SectionHeading } from "@/components/SectionHeading";
import { observationalExperience, research } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research positions in early-universe cosmology and observational cosmology at the Indian Institute of Astrophysics and VIT Vellore.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Research experience"
        intro="Four positions, newest first — from inflationary magnetogenesis at IIA to model-independent tests of cosmic isotropy at VIT."
      />

      <section className="container-page pt-16">
        <div className="space-y-16">
          {research.map((position) => (
            <GutterEntry
              key={position.slug}
              label={
                <>
                  <span className="block">{position.dates}</span>
                  {position.programme && (
                    <span className="mt-1 block opacity-75">{position.programme}</span>
                  )}
                </>
              }
            >
              <h2 className="type-h3">{position.title}</h2>
              <p className="meta mt-1">
                {position.institution} · {position.location}
              </p>

              {position.supervisors.length > 0 && (
                <ul className="meta mt-3 space-y-0.5">
                  {position.supervisors.map((supervisor) => (
                    <li key={supervisor.name}>
                      <span className="opacity-70">{supervisor.role}: </span>
                      {supervisor.name}
                      <span className="opacity-70"> — {supervisor.affiliation}</span>
                    </li>
                  ))}
                </ul>
              )}

              {position.summary && (
                <p className="measure mt-5 leading-relaxed">{position.summary}</p>
              )}

              {position.highlights.length > 0 && (
                <ul className="measure mt-5 space-y-2.5">
                  {position.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.72em] size-1 shrink-0 rounded-full bg-muted"
                      />
                      <span className="text-[0.975rem] leading-relaxed">
                        <SciNotation>{highlight}</SciNotation>
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {position.result && (
                <p className="mt-5 border-l-2 border-accent bg-accent-bg px-4 py-3 font-sans text-sm">
                  <SciNotation>{position.result}</SciNotation>
                </p>
              )}

              {position.projectSlug && (
                <p className="mt-5">
                  <Link href={`/projects/${position.projectSlug}`} className="link font-sans text-sm">
                    Read the full write-up →
                  </Link>
                </p>
              )}
            </GutterEntry>
          ))}
        </div>
      </section>

      <section className="container-page pt-20">
        <SectionHeading eyebrow="Hands-on">Observational &amp; lab experience</SectionHeading>
        <ul className="measure space-y-3">
          {observationalExperience.map((item) => (
            <li key={item} className="flex gap-3 border-b border-rule pb-3">
              <span aria-hidden="true" className="mt-[0.72em] size-1 shrink-0 rounded-full bg-muted" />
              <span className="text-[0.975rem]">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
