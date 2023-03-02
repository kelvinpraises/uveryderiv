import ConnectWallet from "./buttons/ConnectWallet";

const MainNav = () => {
  return (
    <div className=" w-full flex justify-between px-6 py-5 ">
      <img src="/logo.svg" alt="uveryderiv logo" />
      <ConnectWallet />
    </div>
  );
};

export default MainNav;
