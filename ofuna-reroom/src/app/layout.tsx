import type { Metadata } from "next";
import { Playfair_Display, Oswald } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ofuna Re:Room | Authentic Rock & Vinyl Bar",
  description: "\u5927\u8239\u306E\u5730\u4E0B\u306B\u96A0\u3055\u308C\u305F\u30F4\u30A1\u30A4\u30CA\u30EB\u30D0\u30FC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${playfair.variable} ${oswald.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
