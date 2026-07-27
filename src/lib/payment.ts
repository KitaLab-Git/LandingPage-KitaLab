export type PaymentStatus = "pending" | "success" | "failed";

export type CheckoutPayload = {
  productSlug: string;
  name: string;
  email: string;
  businessName: string;
};

export function createTransactionId() {
  return `KL-${Date.now()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}

export function buildStatusUrl(
  transactionId: string,
  productSlug: string,
  status: PaymentStatus,
) {
  const params = new URLSearchParams({
    transaction: transactionId,
    product: productSlug,
    status,
  });
  return `/checkout/status?${params.toString()}`;
}
