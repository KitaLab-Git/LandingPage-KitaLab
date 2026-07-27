import { Container } from "@/components/ui/container";
import { navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy py-10 text-white/55">
      <Container>
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <a className="inline-flex min-h-11 items-center text-lg font-black tracking-[-0.05em] text-white" href="#home">
              Kita<span className="text-brand-accent">Lab.</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-6">
              Partner digital lokal Makassar untuk website, aplikasi, dan tools
              operasional UMKM.
            </p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-white">Navigasi</p>
            <nav aria-label="Navigasi footer" className="mt-4 grid gap-2">
              {navigation.slice(1, 5).map((item) => (
                <a className="inline-flex min-h-11 items-center text-sm transition hover:text-white" href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-white">Kontak</p>
            <a className="mt-2 inline-flex min-h-11 items-center break-all text-sm transition hover:text-white" href="mailto:halo@kitalab.online">
              halo@kitalab.online
            </a>
            <p className="mt-2 text-sm">Makassar, Sulawesi Selatan</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs sm:flex-row sm:justify-between">
          <p>© 2026 Kita Lab. Seluruh hak dilindungi.</p>
          <p>Teknologi yang membumi, dibangun dari Makassar.</p>
        </div>
      </Container>
    </footer>
  );
}
