"use client";

import { Bebas_Neue, Inter, Outfit } from "@next/font/google";

import { EthereumWalletProvider } from "@/contexts/EthereumWalletContext";
import "../styles/globals.css";
import ModalContainer from "@/components/modals/ModalContainer";
import LoginModal from "@/components/modals/LoginModal";
import ToastNotification from "@/components/ToastNotification";

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
      <EthereumWalletProvider>
        {/* <ToastNotification toastMessage={"Your changes are saved successfully"} type={"info"} /> */}
        <body className="flex justify-center bg-[#EFF1F8]">{children}</body>
        <ModalContainer />
        <LoginModal />
      </EthereumWalletProvider>
    </html>
  );
}
