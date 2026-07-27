# Sprint 1 - Branding & Desain

Tanggal: 27 Juli 2026

## Keputusan visual

Baseline visual Sprint 0 dipertahankan dan diperluas:

- Navy `#07223D` sebagai warna dominan untuk trust dan teknologi.
- Blue `#0E4D7A` sebagai warna pendukung.
- Orange `#F28C28` sebagai CTA dan aksen hangat.
- Orange strong `#C96610` untuk teks aksen yang membutuhkan kontras di latar terang.
- Canvas `#F5F8FB`, ink `#102334`, muted `#5F7180`, border `#DCE5EC`.
- System font Arial/Helvetica agar tidak bergantung pada request font eksternal.
- Radius besar, ruang putih lega, dan bayangan lembut untuk kesan ramah-profesional.

Status keputusan ini adalah baseline produksi yang dapat digunakan sprint berikutnya. Logo final masih berupa wordmark teks `KitaLab.` dan dapat diganti saat aset resmi tersedia.

## Wireframe

Wireframe responsive tersedia langsung pada route utama dan mencakup:

1. Sticky navbar.
2. Hero dan primary CTA.
3. Tentang Kita Lab.
4. Layanan.
5. Product/SaaS dengan placeholder harga.
6. Portofolio dengan tiga placeholder studi kasus.
7. Testimoni dan tim.
8. CTA kontak.
9. Footer.

Konten yang belum tersedia diberi placeholder eksplisit agar tidak dipersepsikan sebagai data final.

## Sistem komponen

- `Button`: primary, secondary, dan ghost.
- `Container`: batas lebar dan gutter responsive.
- `Card`: surface reusable.
- `SectionHeading`: eyebrow, judul, deskripsi, dan alignment.
- Section components: header, wireframe landing page, dan footer.
- Data statis dipisahkan di `src/data/site.ts`.

## Catatan sprint berikutnya

Sprint 2 dapat mematangkan navbar, hero, tentang, dan layanan tanpa mengubah fondasi visual. Konten kontak, produk, portofolio, testimoni, tim, dan logo masih memerlukan data final dari user.
