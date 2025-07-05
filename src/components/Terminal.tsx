'use client'

import { useEffect, useRef, useState } from 'react'
import { runCmd, bannerArt } from '@/lib/terminalEngine'

export const commands = {
    clear: () => '__CLEAR__',
    banner: () => bannerArt,
}

export default function Terminal() {
    const [cwd, setCwd] = useState('/')
  const [lines, setLines] = useState<string[]>([
    // 'DeepNet Interactive Shell – type `help`',
    bannerArt,
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  // Auto-scroll on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  const trimmed = input.trim()
  if (!trimmed) return

  // Show input line
  setLines((prev) => [...prev, `deepnet:${cwd}$ ${trimmed}`])
  setInput('')

  const [cmd, ...args] = trimmed.split(/\s+/)

  // Handle `cd` command locally
  if (cmd === 'cd') {
    const newPath = args[0]
    if (!newPath) {
      setLines((prev) => [...prev, 'Usage: cd <path>'])
    } else if (!newPath.startsWith('/')) {
      setLines((prev) => [...prev, 'Please use absolute path (e.g. /labs)'])
    } else {
      setCwd(newPath)
      setLines((prev) => [...prev, `Changing directory to ${newPath}...`])

      // If in iframe, notify parent page of cwd change
      if (typeof window !== 'undefined') {
        window.parent?.postMessage({ cwd: newPath }, '*')

        // Optionally navigate if route exists
        // window.location.href = newPath
      }
    }
    return
  }

  // Run other commands through engine
  try {
    const output = await runCmd(trimmed)
    if (output === '__CLEAR__') {
      setLines([])
    } else if (output) {
      setLines((prev) => [...prev, output])
    }
  } catch (err) {
    setLines((prev) => [...prev, `Error: ${(err as Error).message}`])
  }
}

  return (
    <div className="flex-1 overflow-hidden border-t border-[var(--border)]">
      <div className="h-full overflow-y-auto px-4 py-2">
        {lines.map((ln, i) => (
          <pre key={i} className="text-sm leading-5 whitespace-pre-wrap">
            {ln}
          </pre>
        ))}
        <form onSubmit={handleSubmit} className="flex">
          <span className="text-sm mr-1">deepnet:{cwd}$</span>
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm"
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
