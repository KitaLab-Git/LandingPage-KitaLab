import { Container } from "@/components/ui/container";
import { navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy py-8 text-white/55">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a className="text-lg font-black tracking-[-0.05em] text-white" href="#home">
            Kita<span className="text-brand-accent">Lab.</span>
          </a>
          <p className="mt-2 text-xs">Makassar, Sulawesi Selatan · © 2026 Kita Lab</p>
        </div>
        <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {navigation.slice(1, 5).map((item) => (
            <a className="text-xs transition hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
