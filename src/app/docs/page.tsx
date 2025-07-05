'use client'

import { useState } from 'react'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="text-[var(--accent)] underline text-sm"
      >
        {open ? '▼' : '▶'} {title}
      </button>
      {open && <div className="mt-2 pl-4 text-sm">{children}</div>}
    </div>
  )
}

export default function DocsPage() {
  return (
    <div className="p-6 font-mono text-sm max-w-3xl">
      <h1 className="text-lg text-[var(--accent)] mb-2">📘 DeepNet Docs</h1>

      <Section title="Hardware Fundamentals">
        <p>🧠 BIOS & Boot Process: power-on → POST → MBR → OS load</p>
        <p>🧠 CPU & RAM timing, buses, chipset roles</p>
      </Section>

      <Section title="Linux Essentials">
        <p>📄 Commands: <code>ls</code>, <code>grep</code>, <code>find</code>, <code>chmod</code></p>
        <p>📄 Bash scripting logic (conditionals, loops)</p>
      </Section>

      <Section title="Networking Basics">
        <p>🌐 Ports & protocols: TCP/UDP, ICMP</p>
        <p>🌐 traceroute breakdown, subnetting</p>
      </Section>

      <Section title="Cybersecurity Concepts">
        <p>🕵️ Threat models, password cracking basics</p>
        <p>🧪 CTF logs (TryHackMe, PicoCTF)</p>
      </Section>
    </div>
  )
}
