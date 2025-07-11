export default function HeroSection() {
  return (
    <section className="bg-[var(--panel)] text-[var(--text)] font-mono py-25 px-6 md:px-25 border-b border-[var(--border)]">
      <header>
        <h1 className="text-2xl md:text-3xl text-[var(--text)] mb-2">
          IT Support · Cybersecurity · Software Development
        </h1>
        <p className="text-sm mb-6 text-[var(--text)]">for Real-World Ops</p>
      </header>
      <a
        href="#projects"
        className="inline-block border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition px-4 py-2 text-xs rounded-sm"
      >
        Explore My Work
      </a>
    </section>
  );
}
