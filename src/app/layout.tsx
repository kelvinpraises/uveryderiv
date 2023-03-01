import { Inter } from "@next/font/google";
// import { EthereumWalletProvider } from "@/contexts/EthereumWalletContext";
import "../styles/app.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
