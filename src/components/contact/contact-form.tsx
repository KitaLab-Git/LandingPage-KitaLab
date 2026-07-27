"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "halo@kitalab.online";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const business = String(form.get("business") ?? "");
    const need = String(form.get("need") ?? "");
    const subject = encodeURIComponent(`Konsultasi digital — ${business}`);
    const body = encodeURIComponent(
      `Halo Kita Lab,\n\nSaya ${name} dari ${business}.\n\nKebutuhan kami:\n${need}\n\nMohon bantu jadwalkan konsultasi awal.`,
    );
    setMessage("Aplikasi email akan dibuka. Periksa kembali pesan sebelum mengirim.");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="space-y-4 text-left" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
            Nama
          </span>
          <input
            className="min-h-12 w-full rounded-xl border border-white/15 bg-white/8 px-4 text-white outline-none placeholder:text-white/35 focus:border-brand-accent"
            name="name"
            placeholder="Nama Anda"
            required
          />
        </label>
        <label>
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
            Nama usaha
          </span>
          <input
            className="min-h-12 w-full rounded-xl border border-white/15 bg-white/8 px-4 text-white outline-none placeholder:text-white/35 focus:border-brand-accent"
            name="business"
            placeholder="Nama bisnis"
            required
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/60">
          Apa yang ingin dibuat lebih sederhana?
        </span>
        <textarea
          className="min-h-32 w-full resize-y rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-brand-accent"
          name="need"
          placeholder="Ceritakan proses, kendala, atau ide yang ingin didiskusikan."
          required
        />
      </label>
      <button
        className="min-h-12 w-full rounded-full bg-brand-accent px-6 text-sm font-black text-brand-navy transition hover:bg-brand-accent-strong"
        type="submit"
      >
        Siapkan Email Konsultasi →
      </button>
      {message ? (
        <p aria-live="polite" className="text-center text-xs text-brand-accent-soft">
          {message}
        </p>
      ) : null}
    </form>
  );
}
