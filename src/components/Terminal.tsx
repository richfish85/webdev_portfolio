'use client'

import { useEffect, useRef, useState } from 'react'
import { runCmd, bannerArt } from '@/lib/terminalEngine'

export const commands = {
    clear: () => '__CLEAR__',
    banner: () => bannerArt,
}

export default function Terminal() {
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
    setLines((l) => [...l, `$ ${trimmed}`])
    setInput('')

    const output = await runCmd(trimmed)
    if (output === '__CLEAR__') {
      setLines([])
    } else if (output) {
      setLines((l) => [...l, output])
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
          <span className="text-sm mr-1">$</span>
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
