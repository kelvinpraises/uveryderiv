"use client";

import { useEthereumProvider } from "@/contexts/EthereumWalletContext";
import { useStore } from "@/store/useStore";
import ellipsisAddress from "@/utils/ellipsisAddress";

const ConnectWallet = () => {
  const { signerAddress } = useEthereumProvider();
  const setLoginModal = useStore((state) => state.setLoginModal);
  const setProfileModal = useStore((state) => state.setProfileModal);

  return (
    <>
      {signerAddress ? (
        <button
          className="gap-2 h-min bg-black px-6 py-3 rounded-3xl text-white grid place-items-center font-outfit "
          onClick={() => setProfileModal({ open: true })}
        >
          <p>{ellipsisAddress(signerAddress)}</p>
        </button>
      ) : (
        <button
          className="h-min bg-black px-6 py-3 rounded-3xl text-white grid place-items-center font-outfit "
          onClick={() => setLoginModal(true)}
        >
          Connect Wallet
        </button>
      )}
    </>
  );
};

export default ConnectWallet;
