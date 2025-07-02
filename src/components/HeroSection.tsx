export default function HeroSection() {
  return (
    <section className="bg-[var(--bg)] text-[var(--text)] font-mono py-12 border border-[var(--border)] my-6 p-20">
      <h1 className="text-2xl text-[var(--accent)] mb-2">Cybersecurity && Interface Design</h1>
      <p className="text-sm mb-4">for Real-World Ops</p>
      <a
        href="#projects"
        className="inline-block border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition px-4 py-2 text-xs"
      >
        Explore My Work
      </a>
    </section>
  )
}
