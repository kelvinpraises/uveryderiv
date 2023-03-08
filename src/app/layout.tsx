"use client";

import { Bebas_Neue, Inter, Outfit } from "@next/font/google";
// import { EthereumWalletProvider } from "@/contexts/EthereumWalletContext";
import "../styles/globals.css";

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={` ${bebas_neue.variable} ${outfit.variable} ${inter.className}`}
    >
      <head />
      <body className="flex justify-center bg-[#EFF1F8]">{children}</body>
    </html>
  );
}
