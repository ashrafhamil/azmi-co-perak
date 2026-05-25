import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Azmi & Co — Perak | Valuation, Estate Agency & Property Management",
  description:
    "Azmi & Co Perak branch — registered valuers, estate agents and property managers serving Ipoh and the wider Perak region. Established 1978.",
  keywords: [
    "Azmi & Co",
    "Azmi & Co Perak",
    "property valuation Ipoh",
    "estate agent Perak",
    "property management Ipoh",
    "BOVAEAPM",
  ],
  openGraph: {
    title: "Azmi & Co — Perak Branch",
    description:
      "Registered valuers, estate agents and property managers. Established 1978.",
    type: "website",
    locale: "en_MY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
