import '@fontsource/ibm-plex-mono/400.css'
import "./../styles/globals.css";
import { ThemeProvider } from '../components/ThemeProvider'

export const metadata = {
  title: 'DeepNet',
  description: 'Terminal-style cybersecurity portfolio',
  icons: {
    icon: '/favicon.png',  // or use '/my-icon.png'
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
