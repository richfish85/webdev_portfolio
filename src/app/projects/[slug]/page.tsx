// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";

/**
 * Inline prop typing keeps the compiler happy and sidesteps
 * Next.js’ “compare PageProps” diff check.
 */
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next 15 wraps `params` in a Promise, so we await it once.
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  // Always end up with a string – never {}, never boolean.
  const description =
    project.description ?? "No description yet.";

  const hasLiveDemo =
    project.website &&
    project.website !== "#" &&
    !project.website.startsWith("/projects/");

  return (
    <main className="min-h-screen px-6 pt-20 bg-[var(--bg)] text-[var(--text)] font-mono max-w-3xl mx-auto">
      {/* ───────── Name / Type ───────── */}
      <h1 className="text-2xl text-[var(--accent)] mb-2">{project.name}</h1>
      <p className="text-xs text-[var(--muted)] mb-4">{project.type}</p>

      {/* ───────── Description ───────── */}
      <p className="text-sm mb-6 whitespace-pre-wrap">{description}</p>

      {/* ───────── Tags ───────── */}
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

      {/* ───────── Links ───────── */}
      <div className="flex gap-4 text-xs">
        {hasLiveDemo && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[var(--accent)]"
          >
            🌐 Live Demo
          </a>
        )}

        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[var(--accent)]"
          >
            💻 GitHub Repo
          </a>
        )}

        <Link
          href="/projects"
          className="ml-auto hover:underline text-[var(--muted)]"
        >
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
