"use client";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-xs px-2 py-1 border border-terminal-border rounded hover:bg-[var(--accent)] hover:text-[var(--bg)] transition"
    >
      {theme === "dark" ? "Light Mode" : "Terminal Mode"}
    </button>
  );
};
