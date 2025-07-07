import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "The Reel Deal",
    type: "World Movie Info database",
    description: " a movie exploration platform that helps users browse, search, and explore detailed information on films using an intuitive interface.",
    tags: ["WebApp", "FullStack", "Supabase", "API", "JavaScript", "Tailwindcss"],
    website: "https://movie.dev.deepnet.com.au/",
    github: "https://github.com/richfish85/movie-app-001",
  },
  {
    name: "DeepNet Website",
    type: "Business Landing Page",
    description: "A responsive website for DeepNet Solutions, a cybersecurity company.",
    tags: ["Linux", "API", "Cybersecurity", "Vite", "Tailwindcss"],
    website: "https://www.deepnet.com.au/",
    github: "https://github.com/richfish85/deepnet-website",
  },  
  {
    name: "KernelCoder",
    type: "CLI Sandbox",
    description: "A live Bash playground for practicing Linux commands safely.",
    tags: ["Linux", "Security", "Sandbox"],
    website: "#",
    github: "#",
  },
  {
    name: "Nimbus",
    type: "Cloud Suite",
    description: "A private cloud toolkit with encrypted storage and deployment dashboard.",
    tags: ["Cloud", "Encryption", "React", "Supabase", "TypeScript"],
    website: "https://nimbus.dev.deepnet.com.au/",
    github: "https://github.com/richfish85/nimbus",
  },
  {
    name: "RedOcean",
    type: "OSINT Simulator",
    description: "A fictional intelligence-gathering sim for teaching cyber investigation flow.",
    tags: ["OSINT", "Training", "Simulation"],
    website: "#",
    github: "#",
  },
];

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
