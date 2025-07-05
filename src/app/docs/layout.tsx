'use client'

import Link from 'next/link'
import { useState } from 'react'

const sections = [
  { name: 'Hardware', slug: 'hardware' },
  { name: 'Linux', slug: 'linux' },
  { name: 'Networking', slug: 'networking' },
  { name: 'Cybersecurity', slug: 'cybersecurity' },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="h-full flex font-mono text-sm bg-[var(--bg)] text-[var(--text)]">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 border-r border-[var(--border)] ${
          collapsed ? 'w-12' : 'w-56'
        }`}
      >
        <div className="flex items-center justify-between p-2 border-b border-[var(--border)]">
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className="text-[var(--accent)] text-xs"
          >
            {collapsed ? '👉' : '👈'}
          </button>
          {!collapsed && <span className="text-[var(--muted)] text-xs">Sections</span>}
        </div>

        <ul className="p-2 space-y-2">
          {sections.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/docs/${s.slug}`}
                className="block hover:text-[var(--accent)] transition"
              >
                {collapsed ? '📁' : `📁 ${s.name}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">{children}</div>
    </div>
  )
}
