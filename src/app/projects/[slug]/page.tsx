// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";

type PageProps = {
  params: { slug: string }; // <─ standard Next.js app-router param
};

export default function ProjectDetail({ params }: PageProps) {
  const { slug } = params;

  // find the project by slug
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  // treat any non-hash, non-internal path as a real external demo
  const hasLiveDemo =
    project.website &&
    project.website !== "#" &&
    !project.website.startsWith("/projects/");

  return (
    <main className="min-h-screen px-6 py-10 bg-[var(--bg)] text-[var(--text)] font-mono max-w-3xl mx-auto pt-20">
      {/* ───── Title & type */}
      <h1 className="text-2xl text-[var(--accent)] mb-2">{project.name}</h1>
      <p className="text-xs text-[var(--muted)] mb-4">{project.type}</p>

      {/* ───── Description (longDescription if provided) */}
      <p className="text-sm mb-6 whitespace-pre-wrap">
        {"longDescription" in project && project.longDescription
          ? project.longDescription
          : project.description}
      </p>

      {/* ───── Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs bg-[var(--bg)] border border-[var(--border)] rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ───── Links */}
      <div className="flex gap-4 text-xs">
        {hasLiveDemo && (
          <a
            href={project.website}
            className="hover:underline text-[var(--accent)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Live&nbsp;Demo
          </a>
        )}

        {project.github !== "#" && (
          <a
            href={project.github}
            className="hover:underline text-[var(--accent)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub&nbsp;Repo
          </a>
        )}

        <Link
          href="/projects"
          className="ml-auto hover:underline text-[var(--muted)]"
        >
          ←&nbsp;Back&nbsp;to&nbsp;Projects
        </Link>
      </div>
    </main>
  );
}
