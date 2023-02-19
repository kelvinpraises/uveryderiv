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
    <html
      className={inter.className}
      lang="en"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px",
        gap: 32,
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <head />
      <body
        style={{
          background: "#eff1f8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32 0",
          gap: 32,
          width: "100%",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {children}
      </body>
    </html>
  );
}