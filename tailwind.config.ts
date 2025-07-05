import type { Config } from 'tailwindcss'
import "./src/styles/globals.css"
export default <Config>{
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        blueprint: {
          bg:     '#F8F9FA',   // off-white paper
          text:   '#1C1C1C',   // charcoal ink
          line:   '#CAD9E3',   // faint grid line
          accent: '#007BFF',   // blueprint blue
        },
        terminal: {
          /* already exists for dark mode */
        bg: '#1e1e1e',
        border: '#30363d',
        text: '#c9d1d9',
        accent: '#58a6ff',
        green: '#56d364',
        yellow: '#e3b341',
        red: '#f85149',
        purple: '#bc8cff',
        muted: '#8b949e',
        },
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
