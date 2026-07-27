# Deployment Hostinger

Target: Hostinger Node.js Web App dengan automatic deployment dari GitHub.

## Prasyarat paket

Gunakan Business Web Hosting atau paket Cloud yang mendukung Node.js Web App. Untuk VPS, prosedurnya berbeda karena Node.js dan process manager harus dikelola manual.

## Konfigurasi aplikasi

- Repository: `https://github.com/KitaLab-Git/LandingPage-KitaLab`
- Production branch: `main`
- Framework: Next.js
- Node.js: 22.x
- Package manager: pnpm
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Start command: `pnpm start`
- Environment variables: belum ada pada fase landing page ini

Hostinger dapat mendeteksi Next.js secara otomatis. Jangan memilih output static karena project disiapkan sebagai aplikasi Next.js Node.js dan dapat berkembang ke route checkout/server pada sprint berikutnya.

## Alur hPanel

1. Buka **Websites → Add website → Node.js Web App**.
2. Pilih domain atau temporary domain.
3. Pilih **Import Git Repository** dan otorisasi repository `KitaLab-Git/LandingPage-KitaLab`.
4. Periksa pengaturan build sesuai daftar di atas.
5. Deploy dan tunggu status **Deployment completed**.
6. Buka URL hasil deployment dan uji route utama.
7. Pastikan automatic redeployment aktif untuk branch `main`.

## Verifikasi

- Landing page dapat dibuka melalui HTTPS.
- Navbar, hero, seluruh section, dan footer tampil.
- Refresh pada route utama tidak menghasilkan 404/403.
- Deployment terakhir menunjuk commit terbaru di branch `main`.
- Push berikutnya ke `main` memicu build dan redeployment.
