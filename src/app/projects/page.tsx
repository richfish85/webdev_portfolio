import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-10 bg-[var(--bg)] text-[var(--text)] font-mono">
      <h1 className="text-xl text-[var(--accent)] mb-6">💼 Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border border-terminal-border bg-[var(--panel)] p-4 rounded-sm flex flex-col gap-2 shadow-sm hover:shadow-md transition"
          >
            <div>
              <h2 className="text-[var(--accent)] font-semibold text-base">
                {project.name}
              </h2>
              <p className="text-xs text-[var(--muted)]">{project.type}</p>
            </div>
            <p className="text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-[var(--bg)] border border-[var(--border)] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-2 text-xs">

              <Link href={project.website} className="flex items-center gap-1 hover:underline">
                <FaExternalLinkAlt className="text-[var(--accent)]" />
                Live
              </Link>
              <Link href={project.github} className="flex items-center gap-1 hover:underline">
                <FaGithub className="text-[var(--accent)]" />
                GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
