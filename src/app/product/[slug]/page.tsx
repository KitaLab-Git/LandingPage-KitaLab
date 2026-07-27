import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getProduct, products } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-brand-canvas" id="main-content">
      <Container className="py-8">
        <Link className="font-black tracking-[-0.04em] text-brand-navy" href="/">
          Kita<span className="text-brand-accent">Lab.</span>
        </Link>
      </Container>
      <Container className="grid gap-10 pb-20 pt-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <div>
          <span className="rounded-full bg-brand-accent-soft px-4 py-2 text-xs font-black uppercase tracking-wider text-brand-accent-strong">
            {product.label}
          </span>
          <h1 className="mt-7 text-4xl font-black tracking-[-0.055em] text-brand-navy sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-muted">
            {product.description}
          </p>
          <ul className="mt-8 grid gap-3">
            {product.features.map((feature) => (
              <li className="flex gap-3 font-semibold text-brand-navy" key={feature}>
                <span className="text-brand-accent">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-[2rem] border border-brand-line bg-white p-7 shadow-xl sm:p-9">
          <p className="text-sm font-bold text-brand-muted">Paket bulanan</p>
          <p className="mt-2 text-4xl font-black text-brand-navy">
            {product.price}
            <span className="text-sm text-brand-muted">{product.period}</span>
          </p>
          <p className="mt-3 text-sm text-brand-muted">
            Uji coba gratis {product.trial}. Batalkan kapan saja.
          </p>
          <Button className="mt-8 w-full" href={`/checkout/${product.slug}`}>
            Mulai checkout sandbox →
          </Button>
          <p className="mt-4 text-center text-xs leading-5 text-brand-muted">
            Harga untuk validasi pasar dan belum menjadi penawaran komersial final.
          </p>
        </aside>
      </Container>
    </main>
  );
}
