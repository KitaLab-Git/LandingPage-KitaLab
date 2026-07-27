# Sprint 3 — Product & Monetisasi

Sprint 3 membangun alur produk berlangganan dari katalog sampai status
transaksi. Karena daftar produk final dan payment gateway belum disetujui,
integrasi berjalan sebagai sandbox yang ditandai jelas dan tidak menagihkan
uang.

## Katalog validasi

- Kita Kasir — Rp79.000/bulan, uji coba 14 hari.
- Kita Stok — Rp99.000/bulan, uji coba 14 hari.

Harga dan fitur adalah baseline validasi pasar, bukan penawaran komersial final.

## Alur yang tersedia

1. Pengunjung memilih produk dari landing page.
2. Halaman detail menjelaskan fitur, harga, dan trial.
3. Checkout mengumpulkan nama, usaha, dan email.
4. API checkout membuat ID transaksi dengan status `pending`.
5. Callback sandbox menerima hasil `success` atau `failed`.
6. Status sukses mengaktifkan akses secara simulasi; status gagal menawarkan
   checkout ulang.

## Batasan sebelum production

- Ganti adapter sandbox dengan provider pilihan (Midtrans/Xendit atau lainnya).
- Tambahkan secret callback melalui environment variable Hostinger.
- Simpan transaksi dan entitlement di database.
- Hubungkan email onboarding dan aplikasi produk yang sebenarnya.
