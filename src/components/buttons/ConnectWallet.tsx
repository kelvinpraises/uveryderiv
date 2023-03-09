"use client";

import { useState } from "react";

import { useAvailableWallets, useCyberConnectLogin } from "@/hooks/login";

const ConnectWallet = () => {
  const [toggleShow, setToggleShow] = useState(false);
  const { availableEthereumWallets, connect } = useAvailableWallets();
  useCyberConnectLogin();

  return (
    <>
      <div
        onClick={() => setToggleShow(!toggleShow)}
        className=" h-min bg-black px-6 py-3 rounded-3xl text-white grid place-items-center"
      >
        Connect Wallet
      </div>

      <div
        className={`fixed inset-[0] rounded-[1.25rem] ${
          toggleShow ? "" : "hidden"
        }`}
      >
        {availableEthereumWallets.map((connection) => {
          return (
            <button
              key={connection.name}
              onClick={() => connect(connection.connectType)}
            >
              {connection.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ConnectWallet;
