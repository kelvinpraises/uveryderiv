import MainNav from "@/components/navBar/MainNav";
import { Inter, Bebas_Neue } from "@next/font/google";
// import { EthereumWalletProvider } from "@/contexts/EthereumWalletContext";
import "../styles/globals.css";

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={` ${bebas_neue.variable} ${inter.className}`}>
      <head />
      <body className="  bg-[#EFF1F8]">
        <MainNav />
        {children}
      </body>
    </html>
  );
}
