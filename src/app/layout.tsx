import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michela Mancini Fitness",
  description: "Preparazione atletica",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ita">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
