export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-[var(--border)] p-4 min-h-[250px] flex flex-col justify-between w-full">
      <h2 className="text-[var(--accent)] text-xs uppercase tracking-widest mb-2">
        [ {title} ]
      </h2>
      <div className="text-sm break-words">{children}</div>
    </section>
  )
}
