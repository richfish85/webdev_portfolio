'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiX, FiTerminal } from 'react-icons/fi';

export default function TerminalPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState<string[]>([
    "> Initializing DeepNet Ops CLI...",
    "> Connected to internal API.",
    "> ThreatWatch Mode: ACTIVE",
    "> Run 'help' for commands.",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Scroll to bottom on new output
  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [lines]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim();
    let response = "";

    // Fake command parser
    switch (cmd.toLowerCase()) {
      case "help":
        response = [
          "Available commands:",
          "  help         - show this help text",
          "  status       - show system status",
          "  projects     - list active deployments",
          "  clear        - clear terminal"
        ].join("\n");
        break;
      case "status":
        response = "System Status: OPERATIONAL\nThreatWatch: ENABLED";
        break;
      case "projects":
        response = [
          "1. KernelCoder - bash sandbox",
          "2. Nimbus      - private cloud suite",
          "3. DeepNet     - training platform"
        ].join("\n");
        break;
      case "clear":
        setLines([]);
        setInput("");
        return;
      default:
        response = `Command not found: ${cmd}`;
    }

    setLines(prev => [...prev, `> ${cmd}`, response]);
    setInput("");
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed mb-10 bottom-3 right-3 z-50 bg-[var(--panel)] border border-terminal-border text-[var(--text)] hover:bg-[var(--accent)] hover:text-[var(--bg)] p-2 rounded-sm transition"
      >
        <FiTerminal />
      </button>

      {/* Terminal Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="terminal"
            initial={{ y: "100%", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed mb-8.5 bottom-0 left-0 w-full h-[40vh] bg-[var(--panel)] z-[40] text-[var(--text)] border-t border-terminal-border z-40 font-mono text-sm p-4 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-terminal-green">deepnet@terminal:~</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--muted)] hover:text-[var(--accent)]"
              >
                <FiX />
              </button>
            </div>

            {/* Scrollable Output */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto whitespace-pre-wrap leading-relaxed pr-2 mb-2"
            >
              {lines.map((line, i) => (
                <div key={i} className="text-terminal-text">{line}</div>
              ))}
            </div>

            {/* Input Prompt */}
            <form onSubmit={handleCommand} className="flex gap-2 items-center ">
              <span className="text-terminal-green">user@deepnet:</span>
              <span className="text-terminal-yellow">~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[var(--text)] placeholder-[var(--muted)] text-sm"
                placeholder="type a command..."
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
