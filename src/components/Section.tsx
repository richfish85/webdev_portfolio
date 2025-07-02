export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className=" border-[var(--border)] pl-20 my-2 font-mono bg-[var(--bg)] text-[var(--text)]">
      <h2 className="text-[var(--accent)] text-sm font-bold lowercase tracking-wider mb-2">[ {title} ]</h2>
      {children}
    </section>
  )
}
