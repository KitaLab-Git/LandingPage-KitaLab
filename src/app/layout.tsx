import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kitalab.online"),
  title: {
    default: "Kita Lab - Developer Makassar untuk UMKM",
    template: "%s | Kita Lab",
  },
  description:
    "Kita Lab membantu UMKM bertumbuh lewat aplikasi, website, dan tools digital siap pakai dari tim developer lokal Makassar.",
  keywords: [
    "developer Makassar",
    "jasa aplikasi Makassar",
    "jasa website UMKM",
    "software UMKM",
    "Kita Lab",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Kita Lab",
    title: "Kita Lab - Developer Makassar untuk UMKM",
    description:
      "Website, aplikasi, dan tools digital yang membumi untuk membantu UMKM bertumbuh.",
    images: [
      {
        url: "/og.png",
        width: 1732,
        height: 909,
        alt: "Kita Lab - Teknologi yang membumi untuk UMKM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kita Lab - Developer Makassar untuk UMKM",
    description: "Teknologi yang membumi untuk UMKM.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kita Lab",
    url: "https://kitalab.online",
    email: "halo@kitalab.online",
    areaServed: ["Makassar", "Sulawesi Selatan", "Indonesia"],
    description:
      "Tim developer lokal Makassar untuk website, aplikasi, dan tools digital UMKM.",
  };

  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">
          Lewati ke konten utama
        </a>
        {children}
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          type="application/ld+json"
        />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
