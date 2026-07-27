import { PaymentStatusPanel } from "@/components/product/payment-status";
import { Container } from "@/components/ui/container";
import { getProduct } from "@/data/site";
import type { PaymentStatus } from "@/lib/payment";

export default async function CheckoutStatusPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const productSlug = typeof query.product === "string" ? query.product : "";
  const transactionId =
    typeof query.transaction === "string" ? query.transaction : "KL-INVALID";
  const requestedStatus =
    typeof query.status === "string" ? query.status : "pending";
  const status: PaymentStatus = ["pending", "success", "failed"].includes(
    requestedStatus,
  )
    ? (requestedStatus as PaymentStatus)
    : "pending";
  const product = getProduct(productSlug);

  return (
    <main
      className="grid min-h-screen place-items-center bg-brand-canvas px-5 py-12"
      id="main-content"
    >
      <Container className="max-w-xl">
        <section className="rounded-[2rem] border border-brand-line bg-white p-8 shadow-xl sm:p-12">
          <PaymentStatusPanel
            initialStatus={status}
            productName={product?.name ?? "produk Kita Lab"}
            productSlug={product?.slug ?? "kita-kasir"}
            transactionId={transactionId}
          />
        </section>
      </Container>
    </main>
  );
}
