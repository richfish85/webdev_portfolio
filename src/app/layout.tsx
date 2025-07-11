import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import TerminalPanel from "@/components/TerminalPanel"
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";

export const metadata = {
  title: 'Richard Fisher - Software Development & Cybersecurity Portfolio',
  description: 'Terminal-style cybersecurity portfolio',
  icons: {
    icon: '/favicon.png',  // or use '/my-icon.png'
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg)] text-[var(--text)] font-mono flex flex-col min-h-screen">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
          {children}
          </main>
          <Footer />
          <TerminalPanel />
        </ThemeProvider>
      </body>
    </html>
  );
}

