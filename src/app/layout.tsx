import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Michela Mancini Fitness",
  description: "Boxe thailandese e personal training su misura, con Michela Mancini.",
  keywords: [
    "boxe",
    "preparatrice atletica",
    "federkombat",
    "personalizzato",
    "tecnico pugilato",
    "tonificazione",
    "ipertrofia",
    "forza",
    "pesi",
    "cardio",
    "coach",
    "personal trainer",
    "dimagrire",
    "dimagrimento",
    "allenamento funzionale",
    "boxe thailandese",
    "thai",
    "workout",
  ],
  openGraph: {
    title: "Michela Mancini Fitness",
    description: "Boxe thailandese e personal training",
    type: "website",
    siteName: "Michela Mancini Fitness",
    images: "https://micfit.it/images/og-share.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${bebasNeue.variable}`}>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
