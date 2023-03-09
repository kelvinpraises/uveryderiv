var Buffer = require("buffer/").Buffer;
import { useEffect } from "react";

import {
  ConnectType,
  useEthereumProvider,
} from "@/contexts/EthereumWalletContext";
import { loginGetMessage, loginVerify } from "@/services/cyberConnect";
import { useStore } from "@/store/useStore";
import { EVM_RPC_MAP } from "@/utils/metaMaskChainParameters";

export function useAvailableWallets() {
  const { availableConnections, connect } = useEthereumProvider();

  const availableEthereumWallets = availableConnections.filter((connection) => {
    if (connection.connectType === ConnectType.METAMASK) {
      return true;
    } else if (connection.connectType === ConnectType.WALLETCONNECT) {
      const evmChainId = 56;
      // WalletConnect requires a rpc provider
      return evmChainId !== undefined && EVM_RPC_MAP[evmChainId] !== undefined;
    } else {
      return false;
    }
  });

  return { availableEthereumWallets, connect };
}

export function useCyberConnectLogin() {
  const { signerAddress, provider } = useEthereumProvider();
  const setAccessToken = useStore((state) => state.setAccessToken);
  const setLoginModal = useStore((state) => state.setLoginModal);

  const cyberConnectLogin = async () => {
    if (provider && provider.provider.request && signerAddress) {
      const message = await loginGetMessage(signerAddress);
      const hex = `0x${Buffer.from(message, "utf8").toString("hex")}`;

      const signature = await provider!.provider.request({
        method: "personal_sign",
        params: [hex, signerAddress, "Example password"],
      });

      const token = await loginVerify({ address: signerAddress!, signature });
      setAccessToken(token);
    } else {
      console.error("something went wrong");
    }
  };

  const switchNetwork = async () => {
    await provider?.provider?.request!({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x38" }], // BNB
    });
  };

  useEffect(() => {
    if (signerAddress) {
      (async () => {
        await switchNetwork();
        await cyberConnectLogin();
        setLoginModal(false);
      })();
    }
  }, [signerAddress]);
}
