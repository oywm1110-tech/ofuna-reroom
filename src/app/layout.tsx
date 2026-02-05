import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ofuna Reroom | Music, Spirit and Rock 'n' Roll",
  description: "大船で1970年代のUKロックを愛でる場所。ミュージック、リフォーム、コミュニティ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased paper-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
