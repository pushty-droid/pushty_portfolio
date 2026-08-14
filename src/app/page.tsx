import Image from "next/image";
import Link from "next/link";

import { LinkList } from "@/components/LinkList";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { news } from "@/data/news";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------------
          Hero. Text-led, so it reads as finished while profile.photo is
          null; the portrait column appears on its own once one exists.
          --------------------------------------------------------------- */}
      <section className="container-page pb-16 pt-16 sm:pt-24">
        <div
          className={
            profile.photo
              ? "grid items-start gap-12 lg:grid-cols-[1fr_18rem]"
              : "max-w-4xl"
          }
        >
          <div>
            <p className="eyebrow">{profile.name}</p>
            <h1 className="type-hero mt-4 text-balance">{profile.oneLiner}</h1>

            <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-muted">
              {profile.status}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
              <Link href="/publications" className="btn-primary">
                Read the paper
              </Link>
              <Link href="/cv" className="btn-secondary">
                View CV
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="px-2 py-2.5 font-sans text-sm text-muted transition-colors hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {profile.photo && (
            <div className="w-full max-w-[18rem] border border-rule bg-surface p-2">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={560}
                height={700}
                priority
                className="h-auto w-full"
              />
            </div>
          )}
        </div>
      </section>

      {/* Currently — the three facts an admissions reader wants first */}
      <section className="container-page">
        <ul className="grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-3">
          {profile.currently.map((item) => (
            <li key={item} className="bg-bg px-6 py-5 font-sans text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Selected work */}
      <section className="container-page pt-20 sm:pt-24">
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
      </section>

      {/* Latest — hides itself if the news list is ever emptied */}
      {news.length > 0 && (
        <section className="container-page pt-20 sm:pt-24">
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
        </section>
      )}

      {/* Research interests */}
      <section className="container-page pt-20 sm:pt-24">
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

        <ul className="flex flex-wrap gap-2">
          {profile.researchInterests.map((interest) => (
            <li
              key={interest}
              className="rounded-full border border-rule px-4 py-1.5 font-sans text-sm text-muted"
            >
              {interest}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="container-page pt-20 sm:pt-24">
        <div className="border-t border-rule pt-10">
          <h2 className="type-h2">Get in touch</h2>
          <p className="measure mt-4 text-muted">
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
      </section>
    </>
  );
}
