import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "..", "..");
const sourcePath = path.join(
  workspaceRoot,
  "documents",
  "Worksheet_Master_KitaLab.xlsx",
);
const outputDir = path.join(projectRoot, "outputs", "wm-sprint-6");
const outputPath = path.join(outputDir, "Worksheet_Master_KitaLab.xlsx");

const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(sourcePath));
const sheet = workbook.worksheets.getItem("Worksheet Master");
const date = new Date(2026, 6, 27);

const updates = [
  {
    row: 4,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Stack ditetapkan: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, pnpm, dan Hostinger Node.js Web App. Data v1 statis; payment/auth ditunda sampai kebutuhan produk final. Keputusan terdokumentasi di Projects/kitalab/docs/SPRINT-0.md.",
  },
  {
    row: 5,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Repository lokal dan struktur frontend dibuat di Projects/kitalab. Remote origin terhubung ke github.com/KitaLab-Git/LandingPage-KitaLab, branch main sinkron, serta lint dan production build berhasil.",
  },
  {
    row: 6,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Deployment Hostinger Node.js Web App selesai. Repository GitHub branch main terhubung dengan auto-deploy; runtime Node.js 22.x dan pnpm 11.17.0. Build Next.js/TypeScript berhasil dan situs HTTPS https://kitalab.online/ terverifikasi 200 OK pada 27 Juli 2026.",
  },
  {
    row: 7,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Baseline branding dikunci untuk development: navy #07223D, blue #0E4D7A, orange #F28C28, tone hangat-membumi, dan wordmark teks KitaLab. Logo resmi dapat menggantikan wordmark tanpa mengubah sistem desain.",
  },
  {
    row: 8,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Palet, token warna, tipografi sistem Arial/Helvetica, hierarki, spacing, radius, dan treatment CTA ditetapkan di src/app/globals.css serta docs/SPRINT-1.md. Kontras aksen diperkuat dengan #C96610 untuk teks di latar terang.",
  },
  {
    row: 9,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Wireframe responsive seluruh sitemap dibuat pada route utama: sticky navbar, hero, tentang, layanan, product, portofolio, testimoni, tim, CTA kontak, dan footer. Data yang belum final ditandai placeholder secara eksplisit.",
  },
  {
    row: 10,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Sistem komponen reusable dibuat: Button, Container, Card, SectionHeading, SiteHeader, LandingWireframe, dan SiteFooter. Konten statis dipisahkan ke src/data/site.ts. ESLint, TypeScript, dan production build lulus.",
  },
  {
    row: 11,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Navbar sticky selesai dengan menu Home, Layanan, Product, Portofolio, Tentang Kami, dan Kontak. CTA Konsultasi Gratis tersedia di desktop serta menu mobile yang aksesibel dan responsif.",
  },
  {
    row: 12,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Hero production-ready selesai: positioning untuk UMKM, headline dan subheadline berbasis manfaat, dua CTA, tiga trust point, serta visual dashboard responsif. Pesan menegaskan pendampingan dari ide hingga digunakan tim.",
  },
  {
    row: 13,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Section Tentang Kita Lab selesai dengan konteks tim lokal Makassar, positioning solusi bisnis, nilai komunikasi dekat dan solusi realistis, serta alur kerja Dengarkan–Rancang–Dampingi.",
  },
  {
    row: 14,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Section Layanan selesai dengan tiga kategori: Website Bisnis, Aplikasi Custom, dan Tools Siap Pakai. Setiap kartu memuat deskripsi dan deliverable konkret, dilengkapi CTA diskusi kebutuhan. ESLint dan production build lulus.",
  },
  {
    row: 15,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Katalog validasi ditetapkan: Kita Kasir Rp79.000/bulan dan Kita Stok Rp99.000/bulan, masing-masing trial 14 hari, deskripsi, dan empat fitur. Data terdokumentasi terpusat di src/data/site.ts; harga ditandai belum final.",
  },
  {
    row: 16,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "UI Product pada landing page selesai: dua kartu produk responsif menampilkan label sandbox, harga per bulan, fitur utama, trial, dan CTA ke halaman detail produk.",
  },
  {
    row: 17,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Halaman detail dan checkout dibuat untuk /product/kita-kasir, /product/kita-stok, serta /checkout/[slug]. Checkout mengumpulkan nama, usaha, dan email sebelum membuat transaksi sandbox.",
  },
  {
    row: 18,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Payment gateway diintegrasikan dalam mode sandbox melalui POST /api/checkout. API memvalidasi produk dan data pelanggan, membuat transaction ID unik, lalu mengarahkan pengguna ke halaman status pending tanpa menagihkan uang.",
  },
  {
    row: 19,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Callback sandbox POST /api/payment/callback selesai. Event success mengubah entitlement simulasi menjadi active; event failed mempertahankan inactive. Adapter siap diganti provider resmi setelah kredensial dan database tersedia.",
  },
  {
    row: 20,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Halaman status transaksi selesai untuk pending, success, dan failed, termasuk aksi simulasi callback serta langkah berikutnya. E2E lokal terverifikasi: halaman 200, checkout pending, callback success, dan access active.",
  },
  {
    row: 21,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Section Portofolio selesai dengan tiga konsep kapabilitas: dashboard penjualan, website profil usaha, dan monitoring stok. Seluruhnya diberi label jelas sebagai konsep, bukan klaim project klien, sampai screenshot dan materi resmi tersedia.",
  },
  {
    row: 22,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Section Testimoni selesai tanpa kutipan fiktif. UI menjelaskan bahwa publikasi menunggu persetujuan klien dan menyediakan CTA email untuk mengumpulkan pengalaman nyata yang dapat diverifikasi.",
  },
  {
    row: 23,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Section Tim selesai dengan tiga fungsi kerja: Product & Discovery, Engineering, dan Client Experience. Nama serta foto tidak direka dan siap ditambahkan setelah persetujuan tim.",
  },
  {
    row: 24,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "CTA/Kontak selesai dengan form responsif untuk nama, usaha, dan kebutuhan. Submit menyusun email konsultasi ke halo@kitalab.online, dilengkapi ekspektasi respons, lokasi Makassar, dan fallback email langsung.",
  },
  {
    row: 25,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Footer selesai dengan positioning Kita Lab, navigasi section, email, lokasi Makassar, copyright, dan pesan brand. Layout responsif serta seluruh tautan dapat diakses dengan keyboard.",
  },
  {
    row: 26,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "SEO on-page selesai: title/description/keywords, canonical, Open Graph dan X card dengan social preview khusus, JSON-LD ProfessionalService, sitemap.xml, serta robots.txt. Route dan metadata terverifikasi 200.",
  },
  {
    row: 27,
    status: "Proses",
    start: date,
    end: null,
    notes:
      "Komponen Google Analytics 4 dan contoh NEXT_PUBLIC_GA_ID sudah tersedia. Tracking sengaja belum aktif agar tidak mengirim ID placeholder; diperlukan Measurement ID GA4 resmi di environment Hostinger lalu deploy ulang.",
  },
  {
    row: 28,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Responsive design seluruh route disempurnakan untuk layar kecil, tablet, dan desktop. Audit browser pada HP 390x844 dan tablet 768x1024 memastikan tidak ada horizontal overflow. CTA desktop disembunyikan pada HP; heading, mockup, checkout, dan footer fleksibel; seluruh target sentuh utama 44–48 px.",
  },
  {
    row: 29,
    status: "Selesai",
    start: date,
    end: date,
    notes:
      "Performa dioptimalkan tanpa dependency baru: content-visibility untuk section bawah viewport, compression, cache immutable social preview, AVIF/WebP readiness, tanpa gambar konten berat, dan analytics conditional. Build 13 route lulus; static assets 718 KB, terbesar 226 KB.",
  },
];

for (const update of updates) {
  sheet.getRange(`I${update.row}:M${update.row}`).values = [
    [update.status, "Codex", update.start, update.end, update.notes],
  ];
}
sheet.getRange("K4:L29").format.numberFormat = "yyyy-mm-dd";

await fs.mkdir(outputDir, { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);

const check = await workbook.inspect({
  kind: "table",
  range: "Worksheet Master!A3:M29",
  include: "values,formulas",
  tableMaxRows: 27,
  tableMaxCols: 13,
  tableMaxCellChars: 220,
  maxChars: 14000,
});
console.log("UPDATED_RANGE");
console.log(check.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
console.log("FORMULA_ERRORS");
console.log(errors.ndjson);

for (const sheetName of ["Worksheet Master", "Dashboard"]) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1.2,
    format: "png",
  });
  const fileName = `${sheetName.replaceAll(" ", "-").toLowerCase()}.png`;
  await fs.writeFile(
    path.join(outputDir, fileName),
    new Uint8Array(await preview.arrayBuffer()),
  );
}

console.log(`OUTPUT ${outputPath}`);
