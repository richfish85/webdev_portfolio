'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 border-b border-terminal-border bg-terminal-bg text-terminal-text">
      {/* Left: Logo / Title */}
      <Link href="/" className="font-mono text-lg font-semibold text-[var(--accent)]">
        DeepNet Solutions
      </Link>

      {/* Right: Links + Theme Toggle */}
      <div className="flex items-center gap-4 text-sm font-mono">
        <Link href="/projects" className="hover:text-[var(--accent)] transition">Projects</Link>
        <Link href="/about" className="hover:text-[var(--accent)] transition">About</Link>
        <Link href="/contact" className="hover:text-[var(--accent)] transition">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
