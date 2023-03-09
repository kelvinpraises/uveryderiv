"use client";

import { useAvailableWallets, useCyberConnectLogin } from "@/hooks/login";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";

const LoginModal = () => {
  const openLogin = useStore((state) => state.openLogin);
  const setLoginModal = useStore((state) => state.setLoginModal);

  const { availableEthereumWallets, connect } = useAvailableWallets();
  useCyberConnectLogin();

  useEffect(() => {
    if (openLogin) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [openLogin]);

  if (!openLogin) {
    return null;
  }

  return (
    <div
      className="fixed grid place-items-center z-[2000] inset-0 bg-[#000000cc]"
      onClick={() => setLoginModal(false)}
    >
      <div
        className="flex flex-col w-[27rem] h-[25rem] justify-between rounded-3xl bg-[#000000] text-[white]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-20 w-[27rem] flex items-center justify-between select-none p-8 border-b-[1.5px] border-b-[#1d2231] border-solid">
          <p className="text-[2] font-semibold">Connect Wallet</p>
          <img
            className="transition-[100ms] hover:scale-105 cursor-pointer"
            onClick={() => setLoginModal(false)}
            src="close.svg"
            alt=""
          />
        </div>
        <div className="flex-[1]">
          {availableEthereumWallets.map(({ name, icon, connectType }) => {
            return (
              <div
                className="flex gap-4 items-center px-8 py-4 cursor-pointer hover:bg-[#1d2231]"
                key={name}
                onClick={() => connect(connectType)}
              >
                <img className="h-8" src={icon} alt="" /> <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
