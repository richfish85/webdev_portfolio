import "./../styles/globals.css";
import { ThemeProvider } from '../components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
        <Navbar />
        {/* flex-1 lets the middle stretch, while nav & footer stay fixed height */}
        <ThemeProvider>
          <main className="flex-1 overflow-auto">{children}</main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}