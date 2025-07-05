import Link from 'next/link'

const Project = ({
  title,
  summary,
  tags,
  links,
}: {
  title: string
  summary: string
  tags: string[]
  links: { label: string; url: string }[]
}) => (
  <div className="border border-[var(--border)] p-4 mb-4">
    <h2 className="text-[var(--accent)] text-lg mb-1">{title}</h2>
    <p className="mb-2 text-sm">{summary}</p>
    <div className="text-xs text-[var(--accent)] mb-2">{tags.join(' · ')}</div>
    <div className="space-x-2 text-sm">
      {links.map((l, i) => (
        <Link key={i} href={l.url} className="underline hover:text-[var(--text)]">
          {l.label}
        </Link>
      ))}
    </div>
  </div>
)

export default function ProjectsPage() {
  return (
    <div className="p-6 font-mono text-sm max-w-3xl">
      <h1 className="text-lg text-[var(--accent)] mb-4">📁 Projects</h1>

      <Project
        title="KernelCoder"
        summary="A browser-based bash terminal for learning command-line basics and scripting. Supports command routing and simulated output."
        tags={['TypeScript', 'React', 'CLI emulator', 'Cybersecurity']}
        links={[
          { label: 'GitHub', url: 'https://github.com/richfish85/kernelcoder' },
        ]}
      />

      <Project
        title="Nimbus"
        summary="Self-hostable private cloud storage with secure user auth and file versioning. Built as a proof-of-concept for portfolio SaaS."
        tags={['Next.js', 'Tailwind', 'Cloud Storage', 'JWT']}
        links={[
          { label: 'GitHub', url: 'https://github.com/richfish85/nimbus' },
          { label: 'Live Site', url: 'https://nimbus.dev.deepnet.com.au' },
        ]}
      />

      <Project
        title="The Reel Deal"
        summary="A smart movie catalog app using TMDb API. Includes search, favorites, and responsive UI. Designed for showcase."
        tags={['React', 'REST API', 'UI Design']}
        links={[
          { label: 'GitHub', url: 'https://github.com/richfish85/movie-app-001' },
        ]}
      />

      <Project
        title="RedOcean"
        summary="Narrative OSINT sim exploring identity, threat modelling, and sociotechnical systems. Built as part of a fictional cybercrime anthology."
        tags={['Fiction', 'Cybersecurity', 'Worldbuilding', 'JS']}
        links={[
          { label: 'Story Page', url: '/redocean' },
        ]}
      />
    </div>
  )
}
