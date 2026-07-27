# Sprint 6 — Responsive & Performance

## Responsive

- Tipografi hero dan halaman produk menyesuaikan layar kecil tanpa overflow.
- CTA produk menjadi penuh pada mobile dan kembali mengikuti konten di desktop.
- Mockup hero, portofolio, checkout, footer, dan email kontak aman pada layar
  sempit.
- Semua route memiliki target `main-content` untuk skip navigation.
- Focus indicator terlihat untuk link, tombol, input, textarea, dan menu mobile.
- Target interaksi utama memiliki tinggi minimum 44–48 px.

## Performance

- Section di bawah viewport memakai `content-visibility: auto` dan intrinsic
  sizing agar pekerjaan render awal berkurang.
- Gambar konten tidak digunakan; visual portofolio dibuat dengan CSS sehingga
  tidak menambah request gambar.
- Social preview memiliki cache immutable satu tahun dan tidak dimuat oleh
  landing page biasa.
- Compression aktif, header identitas framework dinonaktifkan, dan format AVIF/
  WebP disiapkan untuk aset gambar berikutnya.
- Google Analytics hanya dimuat setelah interaksi dan hanya bila Measurement ID
  resmi tersedia.

## Verifikasi

- ESLint, TypeScript, dan production build wajib lulus.
- Route landing page, produk, checkout, status, sitemap, dan robots harus tetap
  tersedia setelah optimasi.
