'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [uptime, setUptime] = useState(0);
  const [lastUpdate, setLastUpdate] = useState<string>("");

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const now = new Date();
    setLastUpdate(now.toISOString().split("T")[0]);
  }, []);

  const formatTime = (s: number) => {
    const hrs = Math.floor(s / 3600).toString().padStart(2, '0');
    const mins = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
    const secs = (s % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <motion.footer
      initial={{ y: 60, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-0 left-0 z-50 w-full border-t border-terminal-border bg-[var(--panel)] text-[var(--text)] text-xs font-mono px-4 py-2 flex justify-between items-center"
    >
      <div className="flex gap-4">
        <span>[ Status: <span className="text-terminal-green">OPERATIONAL</span> ]</span>
        <span>[ Uptime: {formatTime(uptime)} ]</span>
        <span>[ Last Update: {lastUpdate} ]</span>
      </div>
      <div className="text-[var(--muted)] hidden sm:block">
        DeepNet CLI v1.0
      </div>
    </motion.footer>
  );
}
