import Link from "next/link";
import ConnectWallet from "../buttons/ConnectWallet";

const MainNav = () => {
  return (
    <div className=" w-full flex justify-between px-6 py-5 bg-white fixed z-10">
      <Link href={"/"}>
        <img src="/logo.svg" alt="uveryderiv logo" />
      </Link>
      <ConnectWallet />
    </div>
  );
};

export default MainNav;
