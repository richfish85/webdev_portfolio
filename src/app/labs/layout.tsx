'use client';

import { ThemeProvider } from '@/components/ThemeProvider';

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen bg-[var(--bg)] text-[var(--text)] font-mono">
        {/* no Navbar / Footer here */}
        <ThemeProvider>
          {children}     {/* this renders page.tsx (your Terminal component) */}
        </ThemeProvider>
      </body>
    </html>
  );
}
