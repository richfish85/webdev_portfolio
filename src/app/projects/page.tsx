"use client";
import { useRouter } from "next/navigation";
import { projects } from "@/lib/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen px-6 py-10 bg-[var(--bg)] text-[var(--text)] font-mono pt-20">
      <h1 className="text-xl text-[var(--accent)] mb-6">💼 Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          /* ---------- Card is a DIV, not a Link ---------- */
          <div
            key={project.slug}
            role="button"
            tabIndex={0}
            onClick={() => router.push(`/projects/${project.slug}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                router.push(`/projects/${project.slug}`);
              }
            }}
            className="border border-terminal-border bg-[var(--panel)] p-4 rounded-sm flex flex-col gap-2 shadow-sm hover:shadow-md transition cursor-pointer"
          >
            {/* Header */}
            <div>
              <h2 className="text-[var(--accent)] font-semibold text-base">
                {project.name}
              </h2>
              <p className="text-xs text-[var(--muted)]">{project.type}</p>
            </div>

            {/* Description */}
            <p className="text-sm">{project.description}</p>

            {/* Tags */}
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

            {/* External links – stopPropagation prevents the card click */}
            <div className="flex gap-4 mt-3 text-xs">
              {project.website !== "#" && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[var(--accent)] hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt />
                  Website
                </a>
              )}
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[var(--accent)] hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
