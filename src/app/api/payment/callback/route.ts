import { NextResponse } from "next/server";
import { getProduct } from "@/data/site";
import { buildStatusUrl, type PaymentStatus } from "@/lib/payment";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    transactionId?: string;
    productSlug?: string;
    status?: PaymentStatus;
  };
  const product = body.productSlug ? getProduct(body.productSlug) : undefined;
  const acceptedStatuses: PaymentStatus[] = ["success", "failed"];

  if (
    !body.transactionId ||
    !product ||
    !body.status ||
    !acceptedStatuses.includes(body.status)
  ) {
    return NextResponse.json(
      { message: "Callback sandbox tidak valid." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    transactionId: body.transactionId,
    status: body.status,
    access: body.status === "success" ? "active" : "inactive",
    redirectUrl: buildStatusUrl(
      body.transactionId,
      product.slug,
      body.status,
    ),
  });
}
