import { navigation } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/80 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <a
          aria-label="Kita Lab - kembali ke atas"
          className="text-xl font-black tracking-[-0.05em] text-brand-navy"
          href="#home"
        >
          Kita<span className="text-brand-accent">Lab.</span>
        </a>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              className="text-sm font-semibold text-brand-muted transition hover:text-brand-navy"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="hidden min-h-10 px-5 sm:inline-flex" href="#kontak">
          Konsultasi Gratis
        </Button>
        <details className="mobile-menu relative lg:hidden">
          <summary
            aria-label="Buka navigasi"
            className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-brand-line bg-white text-brand-navy"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              ☰
            </span>
          </summary>
          <nav
            aria-label="Navigasi mobile"
            className="absolute right-0 top-14 w-[min(19rem,calc(100vw-2rem))] rounded-2xl border border-brand-line bg-white p-3 shadow-2xl"
          >
            {navigation.map((item) => (
              <a
                className="block rounded-xl px-4 py-3 text-sm font-bold text-brand-muted transition hover:bg-brand-canvas hover:text-brand-navy"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-2 w-full" href="#kontak">
              Konsultasi Gratis
            </Button>
          </nav>
        </details>
      </Container>
    </header>
  );
}
