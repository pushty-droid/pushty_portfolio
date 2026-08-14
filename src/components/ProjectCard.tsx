import Link from "next/link";

import { ResultStat } from "./ResultStat";
import type { Project } from "@/data/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group relative flex flex-col p-6 sm:p-8">
      <ResultStat value={project.stat.value} caption={project.stat.caption} />

      <h3 className="type-h3 mt-8">
        <Link
          href={`/projects/${project.slug}`}
          className="transition-colors after:absolute after:inset-0 group-hover:text-accent"
        >
          {project.title}
        </Link>
      </h3>

      <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">{project.summary}</p>

      <p className="meta mt-6 border-t border-rule pt-4">{project.linkedWork}</p>
    </article>
  );
}
