// hooks/useTheme.ts
import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  return { theme, setTheme };
}
