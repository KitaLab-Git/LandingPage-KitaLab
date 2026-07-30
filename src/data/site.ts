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

type SubscriptionProduct = {
  slug: string;
  label: string;
  name: string;
  description: string;
  price: string;
  period: string;
  trial: string;
  features: string[];
};

// Produk sandbox lama dinonaktifkan sampai detail dan penawarannya benar-benar siap.
export const products: SubscriptionProduct[] = [];

export const activeProducts = [
  {
    label: "Tersedia sekarang",
    name: "KitaPOS",
    description:
      "Aplikasi point of sale untuk membantu bisnis mencatat transaksi dan menjalankan operasional penjualan dengan lebih praktis.",
    href: "https://pos.hrvd.store",
    cta: "Buka KitaPOS",
    monogram: "POS",
    features: [
      "Pencatatan transaksi penjualan",
      "Operasional kasir yang lebih terstruktur",
      "Dapat langsung digunakan secara online",
    ],
  },
  {
    label: "Tersedia sekarang",
    name: "HPPta",
    description:
      "Hitung Harga Pokok Produksi dengan lebih praktis agar penentuan biaya dan harga jual bisnis lebih terarah.",
    href: "https://hpp.kitalab.online",
    cta: "Buka HPPta",
    monogram: "HPP",
    features: [
      "Perhitungan HPP yang lebih terstruktur",
      "Membantu menentukan harga jual",
      "Dapat langsung digunakan secara online",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const portfolio = [
  {
    category: "Operasional",
    title: "Dashboard Penjualan UMKM",
    description:
      "Konsep dashboard untuk merangkum transaksi, omzet, dan produk terlaris dalam tampilan yang mudah dipahami.",
    outcome: "Ringkasan harian dalam satu layar",
    accent: "blue",
  },
  {
    category: "Branding",
    title: "Website Profil Usaha Lokal",
    description:
      "Konsep company profile yang membantu calon pelanggan memahami layanan dan menghubungi bisnis lebih cepat.",
    outcome: "Jalur kontak lebih jelas",
    accent: "orange",
  },
  {
    category: "Inventori",
    title: "Sistem Monitoring Stok",
    description:
      "Konsep alat operasional untuk melihat barang masuk, keluar, dan stok menipis tanpa spreadsheet berulang.",
    outcome: "Kontrol persediaan lebih praktis",
    accent: "navy",
  },
];

export const teamRoles = [
  {
    initials: "PD",
    role: "Product & Discovery",
    description: "Menerjemahkan masalah bisnis menjadi kebutuhan yang terukur.",
  },
  {
    initials: "EN",
    role: "Engineering",
    description: "Membangun solusi yang stabil, aman, dan mudah dikembangkan.",
  },
  {
    initials: "CX",
    role: "Client Experience",
    description: "Menjaga komunikasi, onboarding, dan pendampingan tetap jelas.",
  },
];
