'use client'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="w-full border-b-2 border-dashed border-[var(--border)] p-4 flex justify-between items-center font-mono text-[var(--text)] bg-[var(--bg)]">
      <div className="text-[var(--accent)] text-2xl">[ Richard Fisher ]</div>
      <div className="space-x-4 text-sm">
        <a href="#docs" className="hover:text-[var(--accent)]">Docs</a>
        <a href="#projects" className="hover:text-[var(--accent)]">Projects</a>
        <a href="#about" className="hover:text-[var(--accent)]">About</a>
        <a href="#contact" className="hover:text-[var(--accent)]">Contact</a>
        <button
          onClick={toggleTheme}
          className="ml-2 border px-2 py-1 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition text-xs"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  )
}
