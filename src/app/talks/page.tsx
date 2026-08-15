import type { Metadata } from "next";

import { Band } from "@/components/Band";
import { BandHero } from "@/components/BandHero";
import { GutterEntry } from "@/components/GutterEntry";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { awards, outreach, schools, talks } from "@/data/talks";

export const metadata: Metadata = {
  title: "Talks & Outreach",
  description:
    "Upcoming talk at the ICTS programme on magnetic fields in the primordial universe, plus posters, awards, summer schools and science outreach.",
};

export default function TalksPage() {
  const upcoming = talks.filter((talk) => talk.upcoming);
  const past = talks.filter((talk) => !talk.upcoming);

  return (
    <>
      <BandHero
        eyebrow="Talks and outreach"
        title="Speaking, schools, and public science"
        image={null}
      />

      {upcoming.length > 0 && (
        <Band tone="deep">
          <SectionHeading eyebrow="Upcoming">Next talk</SectionHeading>

          {upcoming.map((talk) => (
            <div key={talk.title} className="card border-l-2 border-l-accent p-6 sm:p-8">
              <p className="font-mono text-sm text-accent">{talk.dates}</p>
              <h3 className="type-title mt-3 max-w-[46ch] text-[1.25rem]">{talk.title}</h3>
              <p className="meta mt-3">{talk.event}</p>
              {talk.location && <p className="meta">{talk.location}</p>}
              <p className="mt-4 font-sans text-sm">{talk.role}</p>
              {talk.description && <p className="measure mt-4">{talk.description}</p>}
            </div>
          ))}
        </Band>
      )}

      {past.length > 0 && (
        <Band tone="violet">
          <Reveal>
            <SectionHeading eyebrow="Presented">Posters and past talks</SectionHeading>
            <div className="space-y-10">
              {past.map((talk) => (
                <GutterEntry key={talk.title} label={talk.dates}>
                  <h3 className="type-title max-w-[52ch]">{talk.title}</h3>
                  <p className="meta mt-2">{talk.event}</p>
                  {talk.location && <p className="meta">{talk.location}</p>}
                </GutterEntry>
              ))}
            </div>
          </Reveal>
        </Band>
      )}

      <Band tone="gradient">
        <Reveal>
          <SectionHeading eyebrow="Recognition">Awards and selections</SectionHeading>
          <ul className="divide-y divide-rule border-y border-rule">
            {awards.map((award) => (
              <li
                key={award.title}
                className="grid gap-x-8 gap-y-1 py-5 md:grid-cols-[9.5rem_1fr]"
              >
                <span className="meta md:text-right">{award.year}</span>
                <span>
                  <span className="block">{award.title}</span>
                  <span className="meta">{award.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Band>

      <Band tone="violet">
        <Reveal>
          <SectionHeading eyebrow="Training">Schools and workshops</SectionHeading>
          <div className="space-y-10">
            {schools.map((school) => (
              <GutterEntry key={school.programme} label={school.year}>
                <h3 className="type-title max-w-[52ch]">{school.programme}</h3>
                {school.content && <p className="measure meta mt-2">{school.content}</p>}
              </GutterEntry>
            ))}
          </div>
        </Reveal>
      </Band>

      <Band tone="light">
        <Reveal>
          <SectionHeading eyebrow="Community">Outreach</SectionHeading>
          <ul className="grid gap-6 md:grid-cols-2">
            {outreach.map((item) => (
              <li key={item.organisation} className="card p-6">
                <p className="eyebrow">{item.role}</p>
                <h3 className="type-title mt-2">{item.organisation}</h3>
                <p className="meta mt-3">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Band>
    </>
  );
}
