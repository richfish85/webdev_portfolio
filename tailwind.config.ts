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
          bg:    '#0D0D0D',
          text:  '#FAFAFA',
          green: '#44FF99',
          red:   '#FF5555',
          yellow:'#FFDD57',
          border:'#222',
        },
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
