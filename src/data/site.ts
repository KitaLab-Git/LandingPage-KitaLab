export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Layanan", href: "#layanan" },
  { label: "Product", href: "#product" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export const services = [
  {
    number: "01",
    title: "Website Bisnis",
    description:
      "Website cepat dan meyakinkan untuk memperkuat kehadiran bisnis di dunia digital.",
    deliverables: ["Landing page & company profile", "Responsif dan siap SEO"],
  },
  {
    number: "02",
    title: "Aplikasi Custom",
    description:
      "Sistem yang dirancang mengikuti alur kerja bisnis, bukan memaksa bisnis mengikuti aplikasi.",
    deliverables: ["Dashboard operasional", "Otomasi alur kerja"],
  },
  {
    number: "03",
    title: "Tools Siap Pakai",
    description:
      "Produk digital berlangganan yang praktis, terjangkau, dan bisa langsung digunakan.",
    deliverables: ["Setup lebih singkat", "Pendampingan penggunaan"],
  },
];

export const products = [
  {
    slug: "kita-kasir",
    label: "Sandbox tersedia",
    name: "Kita Kasir",
    description:
      "Pencatatan penjualan harian, ringkasan omzet, dan produk terlaris dalam satu ruang kerja.",
    price: "Rp79.000",
    period: "/bulan",
    trial: "14 hari",
    features: [
      "Pencatatan transaksi tanpa batas",
      "Ringkasan omzet dan produk terlaris",
      "Ekspor laporan bulanan",
      "Dukungan onboarding via WhatsApp",
    ],
  },
  {
    slug: "kita-stok",
    label: "Sandbox tersedia",
    name: "Kita Stok",
    description:
      "Pantau stok dan barang masuk-keluar tanpa spreadsheet rumit atau pencatatan berulang.",
    price: "Rp99.000",
    period: "/bulan",
    trial: "14 hari",
    features: [
      "Stok masuk, keluar, dan penyesuaian",
      "Notifikasi stok menipis",
      "Riwayat pergerakan barang",
      "Ekspor laporan persediaan",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const portfolio = [
  "Sistem operasional UMKM",
  "Website profil usaha lokal",
  "Dashboard pencatatan bisnis",
];
