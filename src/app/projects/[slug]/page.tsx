// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";

type PageProps = {
  // Note the Promise wrapper 👇
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetail({ params }: PageProps) {
  // unwrap the async params
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen px-6 py-10 bg-[var(--bg)] text-[var(--text)] font-mono max-w-3xl mx-auto">
      <h1 className="text-xl text-[var(--accent)] mb-2">{project.name}</h1>
      <p className="text-xs text-[var(--muted)] mb-4">{project.type}</p>
      <p className="text-sm mb-6 whitespace-pre-wrap">{project.longDescription}</p>

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

      <div className="flex gap-4 text-xs">
        <Link
          href={project.website}
          className="hover:underline text-[var(--accent)]"
        >
          🌐 Live Demo
        </Link>
        <Link
          href={project.github}
          className="hover:underline text-[var(--accent)]"
        >
          💻 GitHub Repo
        </Link>
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
