import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OFUNA RE:ROOM | ROCK BAR",
  description: "Ofuna's authentic rock bar community. Good music, good drinks, good people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-brand-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
