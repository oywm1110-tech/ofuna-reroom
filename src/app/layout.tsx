import type { Metadata } from "next";
import { Oswald, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OFUNA RE:ROOM | AUTHENTIC ROCK BAR",
  description: "大船の地下に広がる、ロックを愛する大人たちの隠れ家。70年代のロンドンを彷彿とさせるモダン・ヴィンテージな空間。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${oswald.variable} ${inter.variable} ${playfair.variable} antialiased bg-brand-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
