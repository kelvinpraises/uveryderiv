"use client";

import { EthereumWalletProvider } from "@/contexts/EthereumWalletContext";
import GlobalStyles from "@/styles/globalStyle";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <StyledComponentsRegistry>
        <EthereumWalletProvider>
          <GlobalStyles />
          <body>{children}</body>
        </EthereumWalletProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
