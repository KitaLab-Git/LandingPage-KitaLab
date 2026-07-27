import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kita Lab - Developer Makassar untuk UMKM",
    template: "%s | Kita Lab",
  },
  description:
    "Kita Lab membantu UMKM bertumbuh lewat aplikasi, website, dan tools digital siap pakai dari tim developer lokal Makassar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
