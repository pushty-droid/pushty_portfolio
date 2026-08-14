import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Two featured research projects: directional tests of the cosmic distance duality relation, and gravitational-wave imprints from inflationary magnetogenesis.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Two questions, worked through end to end"
        intro="Each write-up follows the same three beats: the question, my approach, and what I found."
      />

      <section className="container-page pt-16">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
