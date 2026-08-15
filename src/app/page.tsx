import Image from "next/image";
import Link from "next/link";

import { Band } from "@/components/Band";
import { BandHero } from "@/components/BandHero";
import { LinkList } from "@/components/LinkList";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { news } from "@/data/news";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Hero. The name is the title — the one-liner does its work as the
          standfirst underneath, where it can stay sentence case and stay
          readable.

          The background is Planck's map of the Galactic magnetic field traced
          through polarised dust — on subject rather than decorative. Licence
          and attribution are recorded in public/images/CREDITS.md.
          --------------------------------------------------------------- */}
      <BandHero
        eyebrow="Early-universe cosmology"
        title={profile.name}
        image="/images/planck-galactic-magnetic-field.webp"
        credit="Background: ESA and the Planck Collaboration"
        intro={
          <>
            <span className="block">{profile.oneLiner}</span>
            <span className="mt-4 block text-base opacity-90">{profile.status}</span>
          </>
        }
      >
        <Link href="/publications" className="btn-primary">
          Read the paper
        </Link>
        <Link href="/cv" className="btn-secondary">
          View CV
        </Link>
      </BandHero>

      {/* Currently — the three facts an admissions reader wants first */}
      {/* py-0: utilities outrank the .band component class, so this strip sits
          tight under the hero instead of floating in a full band's padding. */}
      <Band tone="deep" className="py-0">
        <ul className="grid gap-px overflow-hidden border-x border-b border-rule bg-rule sm:grid-cols-3">
          {profile.currently.map((item) => (
            <li key={item} className="bg-bg px-6 py-6 font-sans text-sm">
              {item}
            </li>
          ))}
        </ul>
      </Band>

      {/* Selected work */}
      <Band tone="violet">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            aside={
              <Link href="/projects" className="link">
                All projects
              </Link>
            }
          >
            Two results worth your time
          </SectionHeading>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </Band>

      {/* Latest — hides itself if the news list is ever emptied */}
      {news.length > 0 && (
        <Band tone="light">
          <Reveal>
            <SectionHeading eyebrow="Latest">News</SectionHeading>

            <ul className="divide-y divide-rule border-b border-rule">
              {news.map((item) => (
                <li key={item.datetime + item.title}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="group grid gap-x-8 gap-y-1 py-5 transition-colors md:grid-cols-[9.5rem_1fr]"
                    >
                      <time dateTime={item.datetime} className="meta md:text-right">
                        {item.date}
                      </time>
                      <span className="max-w-[62ch] transition-colors group-hover:text-accent">
                        {item.title}
                      </span>
                    </Link>
                  ) : (
                    <div className="grid gap-x-8 gap-y-1 py-5 md:grid-cols-[9.5rem_1fr]">
                      <time dateTime={item.datetime} className="meta md:text-right">
                        {item.date}
                      </time>
                      <span className="max-w-[62ch]">{item.title}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </Band>
      )}

      {/* Research interests */}
      <Band tone="gradient">
        <Reveal>
          <SectionHeading
            eyebrow="Interests"
            aside={
              <Link href="/about" className="link">
                More about my work
              </Link>
            }
          >
            Research interests
          </SectionHeading>

          <ul className="flex flex-wrap gap-2.5">
            {profile.researchInterests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-rule px-4 py-1.5 font-sans text-sm"
              >
                {interest}
              </li>
            ))}
          </ul>
        </Reveal>
      </Band>

      {/* Contact. The portrait column appears here the moment profile.photo
          stops being null — nothing else has to change. */}
      <Band tone="deep">
        <Reveal>
          <div
            className={
              profile.photo ? "grid items-start gap-12 lg:grid-cols-[1fr_16rem]" : undefined
            }
          >
            <div>
              <SectionHeading eyebrow="Contact">Get in touch</SectionHeading>
              <p className="measure text-muted">
                I&rsquo;m applying for PhD positions for the 2026 cycle and am happy to talk
                about early-universe cosmology, sourced gravitational-wave backgrounds, or
                anything on this site.
              </p>
              <p className="mt-6">
                <a href={`mailto:${profile.email}`} className="link font-sans">
                  {profile.email}
                </a>
              </p>
              <LinkList links={profile.links} className="mt-4" />
            </div>

            {profile.photo && (
              <div className="w-full max-w-[16rem] border border-rule bg-surface p-2">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  width={560}
                  height={700}
                  className="h-auto w-full"
                />
              </div>
            )}
          </div>
        </Reveal>
      </Band>
    </>
  );
}
