import type { Metadata } from "next";

import { Band } from "@/components/Band";
import { BandHero } from "@/components/BandHero";
import { PrintButton } from "@/components/PrintButton";
import { SciNotation } from "@/components/SciNotation";
import { LinkList } from "@/components/LinkList";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { publications } from "@/data/publications";
import { observationalExperience, research } from "@/data/research";
import { skills } from "@/data/skills";
import { awards, outreach, schools, talks } from "@/data/talks";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae — ${profile.name}, ${profile.oneLiner}`,
};

/**
 * The canonical CV. Deliberately web-native rather than a hosted PDF: the
 * PDF in the repo prints a phone number that isn't published here, so this
 * page plus the print stylesheet is the version people should get.
 */
export default function CvPage() {
  return (
    <>
      {/* The hero is screen furniture. On paper the masthead below is the
          document's real header, so the band is dropped from the print. */}
      <div data-print-hide>
        <BandHero
          eyebrow="Curriculum vitae"
          title="CV"
          image="/images/gw170817-neutron-star-merger-illustration.jpg"
          credit="Background: NSF / LIGO / Sonoma State (A. Simonnet) — illustration of the GW170817 neutron-star merger"
          intro="The full record — education, research, publications, talks, skills and outreach. Print this page for a clean PDF."
        />
      </div>

      {/* One continuous light band rather than a banded spread: this is the
          page people print, and it has to read as a single document. */}
      <Band tone="light">
      {/* Masthead */}
      <header className="border-b-2 border-ink pb-6">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
          <div>
            <h1 className="text-[clamp(2rem,4.5vw,2.75rem)] uppercase leading-tight">
              {profile.name}
            </h1>
            <p className="meta mt-2 max-w-[52ch]">{profile.oneLinerLong}</p>
          </div>
          <div className="font-sans text-sm">
            <p>
              <a href={`mailto:${profile.email}`} className="link">
                {profile.email}
              </a>
            </p>
            <p className="text-muted">{profile.location}</p>
            <LinkList links={profile.links} className="mt-2" />
          </div>
        </div>

        <div className="mt-6" data-print-hide>
          <PrintButton />
        </div>
      </header>

      <CvSection title="Research statement">
        <p className="measure">{profile.researchStatement}</p>
      </CvSection>

      <CvSection title="Education">
        {education.map((entry) => (
          <CvEntry
            key={entry.degree}
            left={entry.years}
            heading={entry.degree}
            sub={[entry.institution, entry.affiliation].filter(Boolean).join(" · ")}
          >
            {(entry.grade || entry.rank) && (
              <p className="font-mono text-sm text-accent">
                {[entry.grade, entry.rank].filter(Boolean).join("  ·  ")}
              </p>
            )}
            {entry.notes.map((note) => (
              <p key={note} className="measure mt-2 text-[0.95rem]">
                {note}
              </p>
            ))}
            {entry.coursework && (
              <p className="meta mt-2 max-w-[62ch]">
                <span className="font-medium">Coursework: </span>
                {entry.coursework.join(" · ")}
              </p>
            )}
          </CvEntry>
        ))}
      </CvSection>

      <CvSection title="Research experience">
        {research.map((position) => (
          <CvEntry
            key={position.slug}
            left={position.dates}
            heading={position.title}
            sub={`${position.institution} · ${position.location}`}
          >
            {position.programme && <p className="meta">{position.programme}</p>}
            {position.supervisors.map((supervisor) => (
              <p key={supervisor.name} className="meta">
                {supervisor.role}: {supervisor.name}, {supervisor.affiliation}
              </p>
            ))}
            {position.summary && <p className="measure mt-2 text-[0.95rem]">{position.summary}</p>}
            {position.highlights.length > 0 && (
              <ul className="measure mt-2 space-y-1.5">
                {position.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[0.72em] size-1 shrink-0 rounded-full bg-muted" />
                    <span className="text-[0.95rem]">
                      <SciNotation>{highlight}</SciNotation>
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {position.result && (
              <p className="mt-2 font-sans text-sm text-accent"><SciNotation>{position.result}</SciNotation></p>
            )}
          </CvEntry>
        ))}
      </CvSection>

      <CvSection title="Publications">
        {publications.map((publication) => (
          <CvEntry
            key={publication.title}
            left={publication.year}
            heading={publication.title}
            sub={publication.authors}
          >
            <p className="meta">{publication.venue}</p>
            {publication.url && (
              <p className="mt-1 font-sans text-sm">
                <a href={publication.url} target="_blank" rel="noreferrer" className="link">
                  {publication.arxivId ? `arXiv:${publication.arxivId}` : publication.url}
                </a>
              </p>
            )}
            {publication.supervisors && (
              <p className="meta mt-1">Supervisors: {publication.supervisors.join(" · ")}</p>
            )}
          </CvEntry>
        ))}
      </CvSection>

      <CvSection title="Talks and posters">
        {talks.map((talk) => (
          <CvEntry key={talk.title} left={talk.dates} heading={talk.title} sub={talk.event}>
            <p className="meta">
              {[talk.role, talk.location].filter(Boolean).join(" · ")}
            </p>
          </CvEntry>
        ))}
      </CvSection>

      <CvSection title="Awards and selections">
        <ul className="space-y-2">
          {awards.map((award) => (
            <li key={award.title} className="grid gap-x-8 md:grid-cols-[7rem_1fr]">
              <span className="meta md:text-right">{award.year}</span>
              <span className="text-[0.95rem]">
                {award.title}
                <span className="meta"> — {award.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Schools and workshops">
        <ul className="space-y-2">
          {schools.map((school) => (
            <li key={school.programme} className="grid gap-x-8 md:grid-cols-[7rem_1fr]">
              <span className="meta md:text-right">{school.year}</span>
              <span className="text-[0.95rem]">
                {school.programme}
                {school.content && <span className="meta"> — {school.content}</span>}
              </span>
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Technical skills">
        <dl className="grid gap-x-8 gap-y-4 md:grid-cols-[7rem_1fr]">
          {skills.map((group) => (
            <div key={group.label} className="contents">
              <dt className="meta md:text-right">{group.label}</dt>
              <dd className="text-[0.95rem]">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </CvSection>

      <CvSection title="Observational and lab experience">
        <ul className="measure space-y-1.5">
          {observationalExperience.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-[0.72em] size-1 shrink-0 rounded-full bg-muted" />
              <span className="text-[0.95rem]">{item}</span>
            </li>
          ))}
        </ul>
      </CvSection>

      <CvSection title="Outreach">
        <ul className="measure space-y-1.5">
          {outreach.map((item) => (
            <li key={item.organisation} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-[0.72em] size-1 shrink-0 rounded-full bg-muted" />
              <span className="text-[0.95rem]">
                {item.role}, {item.organisation}
                <span className="meta"> — {item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </CvSection>
      </Band>
    </>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="eyebrow border-b border-rule pb-2">{title}</h2>
      <div className="mt-5 space-y-6">{children}</div>
    </section>
  );
}

function CvEntry({
  left,
  heading,
  sub,
  children,
}: {
  left: string;
  heading: string;
  sub: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="grid gap-x-8 gap-y-1 md:grid-cols-[7rem_1fr]" data-print-keep>
      <p className="meta md:text-right">{left}</p>
      <div>
        {/* font-sans: these run at ~1rem, below the size the condensed
            display face is legible at. */}
        <h3 className="font-sans text-[1.05rem] font-semibold leading-snug tracking-normal">
          {heading}
        </h3>
        <p className="meta">{sub}</p>
        <div className="mt-1.5 space-y-1">{children}</div>
      </div>
    </div>
  );
}
