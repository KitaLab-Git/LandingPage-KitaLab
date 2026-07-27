import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckoutForm } from "@/components/product/checkout-form";
import { Container } from "@/components/ui/container";
import { getProduct, products } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  return (
    <main className="min-h-screen bg-brand-canvas py-10">
      <Container className="max-w-5xl">
        <Link className="font-black tracking-[-0.04em] text-brand-navy" href="/">
          Kita<span className="text-brand-accent">Lab.</span>
        </Link>
        <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-brand-line bg-white shadow-xl lg:grid-cols-2">
          <section className="bg-brand-navy p-8 text-white sm:p-10">
            <span className="text-xs font-black uppercase tracking-widest text-brand-accent">
              Checkout sandbox
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-[-0.04em]">
              {product.name}
            </h1>
            <p className="mt-4 leading-7 text-white/65">{product.description}</p>
            <div className="mt-10 border-t border-white/15 pt-6">
              <div className="flex items-end justify-between">
                <span className="text-sm text-white/60">Total bulanan</span>
                <strong className="text-3xl text-brand-accent">
                  {product.price}
                </strong>
              </div>
              <p className="mt-2 text-right text-xs text-white/45">
                Tidak ditagihkan dalam mode sandbox
              </p>
            </div>
          </section>
          <section className="p-8 sm:p-10">
            <h2 className="text-2xl font-black text-brand-navy">Data pelanggan</h2>
            <p className="mb-7 mt-2 text-sm text-brand-muted">
              Isi data untuk membuat transaksi pengujian.
            </p>
            <CheckoutForm productSlug={product.slug} />
          </section>
        </div>
      </Container>
    </main>
  );
}
