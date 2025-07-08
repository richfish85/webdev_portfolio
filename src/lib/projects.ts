// src/lib/projects.ts
export type Project = {
  slug: string;
  name: string;
  type: string;
  description: string;
  tags: string[];
  website: string;   // external live demo (may be "#")
  github: string;    // external repo (may be "#")
};

export const projects: Project[] = [
  {
    slug: "kernelcoder",
    name: "KernelCoder",
    type: "CLI Sandbox",
    description: "A live Bash playground for practicing Linux commands safely.",
    tags: ["Linux", "Security", "Sandbox"],
    website: "#",
    github: "https://github.com/richfish85/kernelcoder",
  },
  {
    slug: "nimbus",
    name: "Nimbus",
    type: "Cloud Suite",
    description:
      "A private cloud toolkit with encrypted storage and deployment dashboard.",
    tags: ["Cloud", "Encryption", "React", "Supabase", "TypeScript"],
    website: "https://nimbus.dev.deepnet.com.au",
    github: "https://github.com/richfish85/nimbus",
  },
  {
    slug: "thereeldeal",
    name: "The Reel Deal",
    type: "World Movie Info Database",
    description:
      "Browse, search, and deep-dive into films through an intuitive UI.",
    tags: ["WebApp", "Supabase", "API", "Tailwind"],
    website: "https://movie.dev.deepnet.com.au",
    github: "https://github.com/richfish85/movie-app-001",
  },
  {
    slug: "deepnet-website",
    name: "DeepNet Website",
    type: "Business Landing Page",
    description: "Marketing site for DeepNet Solutions, a cybersecurity firm.",
    tags: ["Vite", "Tailwind", "Cybersecurity"],
    website: "https://www.deepnet.com.au",
    github: "https://github.com/richfish85/deepnet-website",
  },
  {
    slug: "redocean",
    name: "RedOcean",
    type: "OSINT Simulator",
    description:
      "A fictional intelligence-gathering sim for teaching investigation flow.",
    tags: ["OSINT", "Training", "Simulation"],
    website: "#",
    github: "#",
  },
];
