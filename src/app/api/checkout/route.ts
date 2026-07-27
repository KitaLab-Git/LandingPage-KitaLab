import { NextResponse } from "next/server";
import { getProduct } from "@/data/site";
import {
  buildStatusUrl,
  createTransactionId,
  type CheckoutPayload,
} from "@/lib/payment";

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<CheckoutPayload>;
  const product = payload.productSlug ? getProduct(payload.productSlug) : undefined;

  if (!product || !payload.name || !payload.email || !payload.businessName) {
    return NextResponse.json(
      { message: "Data checkout belum lengkap." },
      { status: 400 },
    );
  }

  const transactionId = createTransactionId();

  return NextResponse.json({
    transactionId,
    provider: "Kita Lab Sandbox",
    status: "pending",
    redirectUrl: buildStatusUrl(transactionId, product.slug, "pending"),
  });
}
