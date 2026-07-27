# Kita Lab Landing Page

Fondasi kode landing page Kita Lab berdasarkan PRD dan Worksheet Master.

## Menjalankan proyek

Prasyarat: Node.js 20.9+ dan pnpm.

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000`.

## Quality gate

```bash
pnpm lint
pnpm build
```

## Struktur

- `src/app` — route, layout, metadata, dan global style.
- `src/components/ui` — komponen UI primitif reusable.
- `src/components/sections` — section landing page.
- `src/data` — konten/data statis terstruktur.
- `src/lib` — helper dan integrasi.
- `public/assets` — gambar, ikon, dan aset publik.
- `docs` — keputusan teknis, branding, dan deployment.

Lihat `docs/SPRINT-0.md` untuk keputusan dan handoff sprint.
