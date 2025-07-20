import SectionBox from "./SectionBox";
import { FaFolder, FaTerminal, FaTools, FaBrain, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { contacts } from "@/lib/contacts";

export default function GridSection() {
  return (
    <section className="p-2 md:p-2 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1: Current Ops */}
        <SectionBox title="Current Ops">
          <ul className="space-y-3 text-sm">
            {projects.map((p) => (
              <li key={p.slug}>
                <FaFolder className="inline mr-2 text-yellow-500" />
                <strong>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="hover:underline"
                  >
                    {p.name}
                  </Link>
                </strong>{" "}
                — {p.type}
                <br />
                {p.website !== "#" && (
                  <a
                    href={p.website}
                    className="text-[var(--accent)] hover:underline text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                )}
                {p.website !== "#" && p.github !== "#" && (
                  <span className="text-xs mx-1">·</span>
                )}
                {p.github !== "#" && (
                  <a
                    href={p.github}
                    className="text-[var(--accent)] hover:underline text-xs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/projects"
            className="text-xs text-[var(--accent)] hover:underline mt-3 inline-block"
          >
            → View all projects
          </Link>
        </SectionBox>

        {/* Column 2: Threat Labs / Sandbox */}
        <SectionBox title="Threat Labs / Sandbox">
          <ul className="space-y-1">
            <li><FaTerminal className="inline mr-2 text-blue-400" /> Interactive Terminal</li>
            <li><FaTools className="inline mr-2 text-purple-400" /> Ping logger / Network map</li>
            <li><FaBrain className="inline mr-2 text-green-400" /> Threat detection visualizer</li>
          </ul>
        </SectionBox>

        {/* Column 3: About / Contact */}
        <SectionBox title="About / Contact">
          <p className="text-xs mb-3">Full-stack generalist · cybersec learner · ex-illustrator.</p>
          <ul className="space-y-1 text-xs">
            <li><FaEnvelope className="inline mr-2" /> Email: <a href="mailto:staff@deepnet.com.au" className="hover:underline">{contacts[0].emailAddress}</a></li>
            <li><FaGithub className="inline mr-2" /> GitHub: <a href={contacts[0].github} target="_blank" rel="noreferrer" className="hover:underline">{contacts[0].github.replace("https://github.com/", "")}</a></li>
            <li><FaLinkedin className="inline mr-2" /> LinkedIn: <a href={contacts[0].socialMedia2} target="_blank" rel="noreferrer" className="hover:underline">{contacts[0].socialMedia2.replace("https://www.linkedin.com/in/", "")}</a></li>
            <li><HiOutlineKey className="inline mr-2" /> PGP key available</li>
          </ul>
        </SectionBox>
      </div>
    </section>
  );
}
