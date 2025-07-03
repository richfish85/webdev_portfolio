import Terminal from '@/components/Terminal'

export const metadata = { title: 'DeepNet Labs' }

export default function LabsPage() {
  return (
    <main className="h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] font-mono">
      <Terminal />
    </main>
  )
}
