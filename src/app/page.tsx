'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Section from '@/components/Section'

export default function HomePage() {
  const [showTerminal, setShowTerminal] = useState(false)
  const [cwd, setCwd] = useState('/')

  useEffect(() => {
  const param = new URLSearchParams(window.location.search).get('cwd')
    if (param && param.startsWith('/')) setCwd(param)
  const handler = (e: MessageEvent) => {
    if (e.data?.cwd) setCwd(e.data.cwd)
  }
  window.addEventListener('message', handler)
  return () => window.removeEventListener('message', handler)
}, [])
  return (
<main className="h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-mono">
  <Navbar />
  <HeroSection />
  {/* MAIN CONTENT + TERMINAL  */}
  <div className="flex flex-1 overflow-hidden">
  <div className="flex flex-wrap flex-row flex-1 overflow-hidden">
      <div className={`transition-all duration-300 ${showTerminal ? 'w-2/3' : 'w-full'}`}></div>

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
            <li>
              🖥️ <button
                onClick={() => setShowTerminal((prev) => !prev)}
                className="hover:text-[var(--accent)] underline"
              >
                Interactive Terminal
              </button>
            </li>
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
          {showTerminal && (
            <div className="w-1/3 border-l border-[var(--border)] flex flex-col">
              <div className="flex justify-between items-center p-2 border-b border-[var(--border)] text-xs bg-[var(--bg)]">
                <span className="text-[var(--accent)]">cwd: {cwd}</span>
                <button
                  className="text-[var(--accent)] hover:text-[var(--text)]"
                  onClick={() => setShowTerminal(false)}
                >
                  [ close ]
                </button>
              </div>
              <iframe
                src={`/labs?cwd=${encodeURIComponent(cwd)}`}
                className="flex-1"
                title="Terminal"
              />
            </div>
          )}
    </div>

  <footer className="text-xs border-t-4 border-[var(--border)] p-2 text-[var(--accent)]">
    [ Status: OPERATIONAL ] · [ Uptime: 72h+ ] · [ Last Update: July 2025 ]
  </footer>
</main>
  )
}