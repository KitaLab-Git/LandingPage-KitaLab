# Sprint 4 & 5 — Trust, Kontak, dan Discovery

## Sprint 4

- Section portofolio memuat tiga konsep kapabilitas yang ditandai jelas sebagai
  contoh, bukan project klien.
- Section testimoni tidak memakai kutipan rekaan dan menunggu persetujuan klien.
- Section tim menjelaskan tiga fungsi kerja tanpa membuat nama atau foto palsu.

Materi portofolio, kutipan, nama, dan foto resmi dapat menggantikan konten
sementara tanpa mengubah struktur komponen.

## Sprint 5

- CTA konsultasi dilengkapi form yang menyusun email ke
  `halo@kitalab.online`.
- Footer memuat positioning, navigasi, lokasi, kontak, dan copyright.
- SEO mencakup metadata, canonical URL, Open Graph, X card, JSON-LD,
  `sitemap.xml`, dan `robots.txt`.
- Google Analytics 4 siap digunakan saat `NEXT_PUBLIC_GA_ID` ditambahkan ke
  environment Hostinger.

## Konfigurasi analytics

Tambahkan environment variable berikut di Hostinger lalu deploy ulang:

```text
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Tanpa nilai tersebut, script analytics tidak dimuat sehingga tidak ada ID
placeholder yang terkirim ke Google.
