import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Section from '@/components/Section'

export default function HomePage() {
  return (
<main className="h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-mono">
  <Navbar />

    <HeroSection />

  <div className="flex flex-wrap flex-row flex-1 overflow-hidden">

      <Section title="Current Ops">
        <ul className="space-y-1 text-sm">
          <li>📁 <strong>KernelCoder</strong> — bash sandbox, limited command shell</li>
          <li>📁 <strong>Nimbus</strong> — private cloud suite (MVP in progress)</li>
              <ul>
                <li><strong><a href="https://nimbus.dev.deepnet.com.au">Website</a></strong></li>
                <li><strong><a href="https://github.com/richfish85/nimbus">GitHub</a></strong></li>
              </ul>
          <li>📁 <strong>Deepnet Solutions</strong> — cybersecurity training platform</li>
          <li>📁 <strong>TheReelDeal</strong> — smart movie catalog</li>
          <li>📁 <strong>RedOcean</strong> — OSINT training sim</li>
        </ul>
      </Section>
      
{/* https://github.com/richfish85/deepnet-website [Deepnet Solutions - Business Page]
https://github.com/richfish85/movie-app-001 [The Reel Deal - Movie Database]
https://github.com/richfish85/nimbus [Nimbus - Cloud Storage Platform]
https://github.com/richfish85/kernelcoder [KernelCoder - Coding Training Platform] */}

        <Section title="Threat Labs / Sandbox">
          <ul className="space-y-1 text-sm">
            <li> 🖥️ <a href="/labs" className="hover:text-[var(--accent)]">Interactive Terminal</a></li>
            <li>🛠️ Ping logger / Network map</li>
            <li>🧪 Threat detection visualizer</li>
          </ul>
        </Section>

        <Section title="About / Contact">
          <p className="text-sm mb-2">Full-stack generalist + cybersec learner. Ex-illustrator. Systems thinker.</p>
          <ul className="text-sm space-y-1">
            <li>📧 staff@deepnet.com.au</li>
            <li>🐙 github.com/roosdy</li>
            <li>🔗 linkedin.com/in/roosdy</li>
            <li>🔐 PGP Key Available</li>
          </ul>
        </Section>
  </div>


  <footer className="text-xs border-t border-[var(--border)] p-2 text-[var(--accent)]">
    [ Status: OPERATIONAL ] · [ Uptime: 72h+ ] · [ Last Update: July 2025 ]
  </footer>
</main>
  )
}