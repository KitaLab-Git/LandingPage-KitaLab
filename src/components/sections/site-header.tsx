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
        <Button className="min-h-10 px-5" href="#kontak">
          Konsultasi Gratis
        </Button>
      </Container>
    </header>
  );
}
