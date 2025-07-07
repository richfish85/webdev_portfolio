import SectionBox from "./SectionBox";
import { FaFolder, FaTerminal, FaTools, FaBrain, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";

export default function GridSection() {
  return (
    <section className="p-6 md:p-20 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Current Ops */}
        <SectionBox title="Current Ops">
          <ul className="space-y-1">
            <li><FaFolder className="inline mr-2 text-yellow-500" /> <strong>KernelCoder</strong> — bash sandbox</li>
                          <a href="#" className="text-[var(--accent)] hover:underline text-xs">Website</a> · 
              <a href="#" className="text-[var(--accent)] hover:underline text-xs ml-1">GitHub</a>
            <li><FaFolder className="inline mr-2 text-yellow-500" /> <strong>Nimbus</strong> — private cloud suite<br />
              <a href="#" className="text-[var(--accent)] hover:underline text-xs">Website</a> · 
              <a href="#" className="text-[var(--accent)] hover:underline text-xs ml-1">GitHub</a>
            </li>
            <li><FaFolder className="inline mr-2 text-yellow-500" /> <strong>Deepnet Solutions</strong> — training platform</li>
                          <a href="#" className="text-[var(--accent)] hover:underline text-xs">Website</a> · 
              <a href="#" className="text-[var(--accent)] hover:underline text-xs ml-1">GitHub</a>
            <li><FaFolder className="inline mr-2 text-yellow-500" /> <strong>TheReelDeal</strong> — movie catalog</li>
                          <a href="#" className="text-[var(--accent)] hover:underline text-xs">Website</a> · 
              <a href="#" className="text-[var(--accent)] hover:underline text-xs ml-1">GitHub</a>
            <li><FaFolder className="inline mr-2 text-yellow-500" /> <strong>RedOcean</strong> — OSINT sim</li>
                          <a href="#" className="text-[var(--accent)] hover:underline text-xs">Website</a> · 
              <a href="#" className="text-[var(--accent)] hover:underline text-xs ml-1">GitHub</a>
          </ul>
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
