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
const outputDir = path.join(projectRoot, "outputs", "wm-sprint-1");
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
    status: "Proses",
    start: date,
    end: null,
    notes:
      "Proyek sudah deployment-ready untuk Hostinger Node.js Web App dan repository GitHub sudah terhubung. Runtime Node.js 22.x, pnpm, build/start command, dan panduan hPanel disiapkan. Koneksi repository di hPanel serta URL live memerlukan otorisasi akun hosting user.",
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
];

for (const update of updates) {
  sheet.getRange(`I${update.row}:M${update.row}`).values = [
    [update.status, "Codex", update.start, update.end, update.notes],
  ];
}
sheet.getRange("K4:L10").format.numberFormat = "yyyy-mm-dd";

await fs.mkdir(outputDir, { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);

const check = await workbook.inspect({
  kind: "table",
  range: "Worksheet Master!A3:M10",
  include: "values,formulas",
  tableMaxRows: 8,
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
