import SectionBox from "./SectionBox";
import { FaFolder, FaTerminal, FaTools, FaBrain, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function GridSection() {
  return (
    <section className="p-2 md:p-2 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1: Current Ops */}
        <SectionBox title="Current Ops">
          <ul className="space-y-4">
            {projects.map((project) => (
              <li
                key={project.name}
                className="flex flex-col gap-1 border border-terminal-border p-3 rounded-sm bg-[var(--panel)] shadow-sm"
              >
                <div className="flex items-center gap-2 text-sm leading-tight tracking-tight">
                  <FaFolder className="text-yellow-500 flex-shrink-0" />
                  <strong title={project.description}>
                    {project.name}
                  </strong>
                </div>

                <div className="flex flex-wrap gap-2 justify-end mt-1">
                  {project.website !== "#" && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 text-xs border border-[var(--accent)] text-[var(--accent)] rounded-sm hover:bg-[var(--accent)] hover:text-[var(--bg)] transition"
                    >
                      🌐 Website
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 text-xs border border-[var(--accent)] text-[var(--accent)] rounded-sm hover:bg-[var(--accent)] hover:text-[var(--bg)] transition"
                    >
                      💻 GitHub
                    </a>
                  )}
                  
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/projects"
            className="text-xs text-[var(--accent)] hover:underline mt-3 block"
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
            <li><FaEnvelope className="inline mr-2" /> <a href="mailto:staff@deepnet.com.au" className="hover:underline">staff@deepnet.com.au</a></li>
            <li><FaGithub className="inline mr-2" /> <a href="https://github.com/roosdy" target="_blank" rel="noreferrer" className="hover:underline">github.com/roosdy</a></li>
            <li><FaLinkedin className="inline mr-2" /> <a href="https://linkedin.com/in/roosdy" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/roosdy</a></li>
            <li><HiOutlineKey className="inline mr-2" /> PGP key available</li>
          </ul>
        </SectionBox>
      </div>
    </section>
  );
}
