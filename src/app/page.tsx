const foundations = [
  "Next.js App Router + TypeScript",
  "Tailwind CSS v4 dengan design tokens",
  "Struktur komponen reusable",
  "Siap dihubungkan ke Vercel",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-canvas px-6 py-16 text-brand-ink sm:px-10 lg:px-16">
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col justify-between rounded-[2rem] border border-brand-line bg-white p-8 shadow-[0_24px_80px_rgba(7,34,61,0.08)] sm:p-12 lg:p-16">
        <header className="flex items-center justify-between">
          <a className="text-xl font-extrabold tracking-[-0.04em]" href="#">
            Kita<span className="text-brand-accent">Lab.</span>
          </a>
          <span className="rounded-full bg-brand-navy/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy">
            Sprint 0
          </span>
        </header>

        <div className="my-16 max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-brand-accent">
            Fondasi siap
          </p>
          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-brand-navy sm:text-6xl lg:text-7xl">
            Teknologi yang membumi untuk bisnis yang bertumbuh.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-muted">
            Workspace pengembangan landing page Kita Lab telah disiapkan. Halaman
            ini adalah health check sementara sebelum desain dan konten dibangun
            pada sprint berikutnya.
          </p>
        </div>

        <ul className="grid gap-3 border-t border-brand-line pt-8 sm:grid-cols-2">
          {foundations.map((item) => (
            <li className="flex items-center gap-3 text-sm font-semibold" key={item}>
              <span
                aria-hidden="true"
                className="grid size-6 place-items-center rounded-full bg-brand-accent-soft text-brand-accent"
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
