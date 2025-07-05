'use client'
import { useState, useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import Section from '@/components/Section'

export default function HomePage() {
  const [showTerminal, setShowTerminal] = useState(false)
  const [cwd, setCwd] = useState('/')

  /* ───── sync cwd from iframe ───── */
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
    <div className="flex flex-col max-h-screen">
      {/* HERO */}
      <HeroSection />

      {/* CONTENT + TERMINAL WRAPPER */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── ① MAIN GRID ───────────────────────────────── */}
<div className="flex-1 flex flex-wrap content-start p-4 gap-4 overflow-auto max-h-[calc(100vh-160px)]">
  <div className="min-w-[200px] min-h-[200px] flex-1 border border-[var(--border)] rounded p-4">
          <Section title="Current Ops">
            <ul className="space-y-1 text-sm project-links">
              <li>📁 <strong>KernelCoder</strong> — bash sandbox</li>
              <li>📁 <strong>Nimbus</strong> — private cloud suite</li>
              <ul>
                <li><a href="https://nimbus.dev.deepnet.com.au">Website</a></li>
                <li><a href="https://github.com/richfish85/nimbus">GitHub</a></li>
              </ul>
              <li>📁 <strong>Deepnet Solutions</strong> — training platform</li>
              <li>📁 <strong>TheReelDeal</strong> — movie catalog</li>
              <li>📁 <strong>RedOcean</strong> — OSINT sim</li>
            </ul>
          </Section>
        </div>

        <div className="min-w-[200px] min-h-[200px] flex-1 border border-[var(--border)] rounded p-4">
          <Section title="Threat Labs / Sandbox">
            <ul className="space-y-1 text-sm project-links">
              <li>
                🖥️{' '}
                <button
                  onClick={() => setShowTerminal((p) => !p)}
                  className="link-hover"
                >
                  Interactive Terminal
                </button>
              </li>
              <li>🛠️ Ping logger / Network map</li>
              <li>🧪 Threat detection visualizer</li>
            </ul>
          </Section>
        </div>

          <div className="min-w-[200px] min-h-[200px] flex-1 border border-[var(--border)] rounded p-4">
          <Section title="About / Contact">
            <p className="text-sm mb-2">
              Full-stack generalist · cybersec learner · ex-illustrator.
            </p>
            <ul className="space-y-1 text-sm project-links">
              <li>📧 staff@deepnet.com.au</li>
              <li>🐙 github.com/roosdy</li>
              <li>🔗 linkedin.com/in/roosdy</li>
              <li>🔐 PGP key available</li>
            </ul>
          </Section>
          </div>
        </div>

        {/* ── ② TERMINAL PANEL ─────────────────────────── */}
        {showTerminal && (
          <div className="w-full sm:w-1/3 border-l border-[var(--border)] flex flex-col">
            <div className="flex justify-between items-center px-3 py-2 border-b border-[var(--border)] text-xs">
              <span className="text-[var(--accent)]">cwd: {cwd}</span>
              <button
                onClick={() => setShowTerminal(false)}
                className="text-[var(--accent)] hover:text-[var(--text)]"
              >
                [ close ]
              </button>
            </div>

            <iframe
              title="Terminal"
              src={`/labs?cwd=${encodeURIComponent(cwd)}`}
              className="flex-1"
            />
          </div>
        )}
      </div>
    </div>
  )
}
