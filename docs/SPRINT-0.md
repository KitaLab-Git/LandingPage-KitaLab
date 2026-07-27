# Sprint 0 — Fondasi

Tanggal: 27 Juli 2026

## Keputusan stack

- Frontend: Next.js 16 App Router, React 19, TypeScript.
- Styling: Tailwind CSS v4 dengan CSS custom properties sebagai design tokens.
- Package manager: pnpm.
- Hosting: Hostinger Node.js Web App melalui GitHub integration.
- Data v1: konten landing page statis di repository; database belum diperlukan.
- Payment: belum diimplementasikan. Kandidat awal adalah Midtrans sandbox, tetapi keputusan final menunggu skema produk/langganan dan persetujuan user.
- Auth: tidak dipasang pada fondasi landing page; baru diperlukan bila produk SaaS memiliki member area.

Alasan: stack ini mendukung rendering cepat, SEO, komponen reusable, deployment preview, dan jalur bertahap menuju checkout tanpa menambah layanan berbayar pada tahap fondasi.

## Branding baseline

Status: baseline implementasi, belum approval final tim.

- Primary navy: `#07223D`
- Supporting blue: `#0E4D7A`
- Accent orange: `#F28C28`
- Canvas: `#F5F8FB`
- Ink: `#102334`
- Muted text: `#5F7180`
- Border: `#DCE5EC`
- Display/body font: Arial/Helvetica system stack agar cepat, stabil, dan tidak memerlukan request font eksternal.
- Tone: hangat, membumi, meyakinkan; Bahasa Indonesia sederhana.

Semua warna tersedia sebagai token di `src/app/globals.css`, sehingga dapat diganti tanpa menelusuri setiap komponen.

## Struktur yang disiapkan

- `src/components/ui`
- `src/components/sections`
- `src/data`
- `src/lib`
- `public/assets`

## Deployment

Repository sudah deployment-ready untuk Hostinger. Langkah eksternal yang masih dibutuhkan:

1. Di hPanel pilih **Websites → Add website → Node.js Web App**.
2. Import repository `KitaLab-Git/LandingPage-KitaLab` dan branch `main`.
3. Pilih Next.js, Node.js 22.x, pnpm, build command `pnpm build`, dan start command `pnpm start`.
4. Aktifkan automatic redeployment dari branch `main`.

Detail pengaturan tersedia di `docs/HOSTINGER-DEPLOYMENT.md`.

## Handoff untuk Worksheet Master

- Task 1: selesai — stack dipilih dan terdokumentasi.
- Task 2: selesai — proyek dan struktur folder dibuat.
- Task 3: proses — konfigurasi lokal siap, tetapi koneksi repository ke hPanel Hostinger memerlukan akun user.
- Task 4: proses — token branding baseline sudah diterapkan; logo dan approval final palet/tone masih memerlukan keputusan tim Kita Lab.
