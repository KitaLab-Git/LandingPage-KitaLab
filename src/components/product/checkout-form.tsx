"use client";

import { FormEvent, useState } from "react";

export function CheckoutForm({ productSlug }: { productSlug: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const form = new FormData(event.currentTarget);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productSlug,
        name: form.get("name"),
        email: form.get("email"),
        businessName: form.get("businessName"),
      }),
    });
    const result = (await response.json()) as {
      message?: string;
      redirectUrl?: string;
    };

    if (!response.ok || !result.redirectUrl) {
      setError(result.message ?? "Checkout belum dapat dibuat.");
      setSubmitting(false);
      return;
    }

    window.location.assign(result.redirectUrl);
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {[
        { name: "name", label: "Nama lengkap", type: "text" },
        { name: "businessName", label: "Nama usaha", type: "text" },
        { name: "email", label: "Email bisnis", type: "email" },
      ].map((field) => (
        <label className="block" key={field.name}>
          <span className="mb-2 block text-sm font-bold text-brand-navy">
            {field.label}
          </span>
          <input
            className="min-h-12 w-full rounded-xl border border-brand-line bg-white px-4 outline-none transition focus:border-brand-blue"
            name={field.name}
            required
            type={field.type}
          />
        </label>
      ))}
      {error ? <p className="text-sm font-semibold text-red-700">{error}</p> : null}
      <button
        className="min-h-12 w-full rounded-full bg-brand-accent px-6 text-sm font-black text-brand-navy transition hover:bg-brand-accent-strong disabled:opacity-60"
        disabled={submitting}
        type="submit"
      >
        {submitting ? "Menyiapkan transaksi..." : "Lanjut ke pembayaran sandbox →"}
      </button>
      <p className="text-center text-xs leading-5 text-brand-muted">
        Tidak ada uang yang ditagihkan. Flow ini khusus pengujian Sprint 3.
      </p>
    </form>
  );
}
