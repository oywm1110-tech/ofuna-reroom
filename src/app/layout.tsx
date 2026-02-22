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
  metadataBase: new URL("https://ofuna-reroom.com"),
  title: "Ofuna Re:Room | Authentic Rock & Vinyl Bar",
  description: "大船の地下に隠された、ロックを愛する大人たちのためのヴァイナルバー。",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Ofuna Re:Room | Authentic Rock & Vinyl Bar",
    description: "大船の地下に隠された、ロックを愛する大人たちのためのヴァイナルバー。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Ofuna Re:Room Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ofuna Re:Room | Authentic Rock & Vinyl Bar",
    description: "大船の地下に隠された、ロックを愛する大人たちのためのヴァイナルバー。",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${playfair.variable} ${oswald.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarOrPub",
              name: "Ofuna Re:Room",
              description: "大船の地下に隠された、ロックを愛する大人たちのためのヴァイナルバー。",
              image: "/logo.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "大船1-20-5 エスポワール7 4F",
                addressLocality: "鎌倉市",
                addressRegion: "神奈川県",
                postalCode: "247-0056",
                addressCountry: "JP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.3518677,
                longitude: 139.5325012,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "19:00",
                  closes: "02:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/reroomofu7/",
                "https://www.facebook.com/ofuna.reroom/",
              ],
              servesCuisine: "Bar",
              priceRange: "¥500〜¥750",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
