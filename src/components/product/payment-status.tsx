"use client";

import { useState } from "react";
import Link from "next/link";
import type { PaymentStatus } from "@/lib/payment";

export function PaymentStatusPanel({
  initialStatus,
  productName,
  productSlug,
  transactionId,
}: {
  initialStatus: PaymentStatus;
  productName: string;
  productSlug: string;
  transactionId: string;
}) {
  const [status, setStatus] = useState(initialStatus);
  const [loading, setLoading] = useState(false);

  async function simulate(nextStatus: "success" | "failed") {
    setLoading(true);
    const response = await fetch("/api/payment/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transactionId, productSlug, status: nextStatus }),
    });
    const result = (await response.json()) as { status?: PaymentStatus };
    if (response.ok && result.status) setStatus(result.status);
    setLoading(false);
  }

  const content = {
    pending: {
      icon: "…",
      title: "Menunggu pembayaran",
      description:
        "Transaksi sandbox sudah dibuat. Pilih hasil callback di bawah untuk menguji alur.",
    },
    success: {
      icon: "✓",
      title: "Pembayaran berhasil",
      description: `Akses ${productName} otomatis aktif. Email onboarding akan dikirim pada integrasi production.`,
    },
    failed: {
      icon: "×",
      title: "Pembayaran belum berhasil",
      description:
        "Tidak ada akses yang diaktifkan. Pengguna dapat kembali dan mencoba checkout ulang.",
    },
  }[status];

  return (
    <div className="text-center">
      <span className={`mx-auto grid size-16 place-items-center rounded-full text-2xl font-black ${
        status === "success"
          ? "bg-emerald-100 text-emerald-700"
          : status === "failed"
            ? "bg-red-100 text-red-700"
            : "bg-brand-accent-soft text-brand-accent-strong"
      }`}>
        {content.icon}
      </span>
      <h1 className="mt-6 text-3xl font-black tracking-[-0.04em] text-brand-navy">
        {content.title}
      </h1>
      <p className="mx-auto mt-3 max-w-md leading-7 text-brand-muted">
        {content.description}
      </p>
      <p className="mt-5 font-mono text-xs text-brand-muted">{transactionId}</p>

      {status === "pending" ? (
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            className="min-h-12 rounded-full bg-emerald-600 px-5 text-sm font-bold text-white disabled:opacity-60"
            disabled={loading}
            onClick={() => simulate("success")}
            type="button"
          >
            Simulasikan berhasil
          </button>
          <button
            className="min-h-12 rounded-full border border-red-200 px-5 text-sm font-bold text-red-700 disabled:opacity-60"
            disabled={loading}
            onClick={() => simulate("failed")}
            type="button"
          >
            Simulasikan gagal
          </button>
        </div>
      ) : (
        <Link
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-brand-navy px-6 text-sm font-bold text-white"
          href={status === "success" ? "/#product" : `/product/${productSlug}`}
        >
          {status === "success" ? "Kembali ke Product" : "Coba checkout lagi"}
        </Link>
      )}
    </div>
  );
}
