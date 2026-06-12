import type { Metadata } from "next";
import { Bebas_Neue, Cinzel, Great_Vibes } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
});

export const metadata: Metadata = {
  title: "Abhsihek_Portfolio",
  description: "Abhishek-Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${cinzel.variable} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}