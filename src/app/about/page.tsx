import type { Metadata } from "next";

import { GutterEntry } from "@/components/GutterEntry";
import { LinkList } from "@/components/LinkList";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/education";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.oneLinerLong,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={profile.oneLinerLong} />

      <section className="container-page pt-16">
        <SectionHeading eyebrow="Statement">Research statement</SectionHeading>
        <p className="measure text-lg leading-relaxed">{profile.researchStatement}</p>
      </section>

      <section className="container-page pt-20">
        <SectionHeading eyebrow="Focus">Specialization</SectionHeading>
        <dl className="grid gap-8 md:grid-cols-3">
          <div>
            <dt className="eyebrow">Primary</dt>
            <dd className="mt-3">{profile.specialization.primary}</dd>
          </div>
          <div>
            <dt className="eyebrow">Secondary</dt>
            <dd className="mt-3">{profile.specialization.secondary}</dd>
          </div>
          <div>
            <dt className="eyebrow">Peripheral</dt>
            <dd className="mt-3">{profile.specialization.peripheral}</dd>
          </div>
        </dl>
      </section>

      <section className="container-page pt-20">
        <SectionHeading eyebrow="Background">Theory areas</SectionHeading>
        <ul className="grid gap-x-10 gap-y-3 md:grid-cols-2">
          {profile.theoryAreas.map((area) => (
            <li key={area} className="flex gap-3 border-b border-rule pb-3">
              <span aria-hidden="true" className="mt-[0.7em] size-1 shrink-0 rounded-full bg-muted" />
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pt-20">
        <SectionHeading eyebrow="Education">Degrees</SectionHeading>
        <div className="space-y-10">
          {education.map((entry) => (
            <GutterEntry key={entry.degree} label={entry.years}>
              <h3 className="type-h3">{entry.degree}</h3>
              <p className="meta mt-1">
                {entry.institution}
                {entry.affiliation && ` · ${entry.affiliation}`}
              </p>

              {(entry.grade || entry.rank) && (
                <p className="mt-3 font-mono text-sm text-accent">
                  {[entry.grade, entry.rank].filter(Boolean).join("  ·  ")}
                </p>
              )}

              {entry.notes.map((note) => (
                <p key={note} className="measure mt-3 text-[0.975rem] leading-relaxed">
                  {note}
                </p>
              ))}

              {entry.coursework && (
                <div className="mt-5">
                  <p className="eyebrow">Coursework</p>
                  <p className="meta mt-2 max-w-[62ch]">{entry.coursework.join(" · ")}</p>
                </div>
              )}
            </GutterEntry>
          ))}
        </div>
      </section>

      <section className="container-page pt-20">
        <SectionHeading eyebrow="Contact">Get in touch</SectionHeading>
        <p>
          <a href={`mailto:${profile.email}`} className="link font-sans">
            {profile.email}
          </a>
        </p>
        <p className="meta mt-1">{profile.location}</p>
        <LinkList links={profile.links} className="mt-5" />
      </section>
    </>
  );
}
