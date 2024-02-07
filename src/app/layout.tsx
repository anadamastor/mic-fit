import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michela Mancini Fitness",
  description: "Preparazione atletica",
  openGraph: {
    title: "Michela Mancini Fitnes",
    description: "Boxe thailandes e personal training",
    images: "https://mic-fit.vercel.app/images/og-share.jpg",
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
