import React, { Dispatch, SetStateAction } from "react";

interface INavItem {
  setActiveNav: Dispatch<SetStateAction<string>>;
  activeNav: string;
}

const ScrapTownNav: React.FC<INavItem> = ({ setActiveNav, activeNav }) => {
  return (
    <div className=" min-w-40 h-[80vh] rounded-[20px] bg-black flex flex-col py-8 px-4 justify-between">
      <div className=" flex flex-col gap-8 ">
        <div
          className=" flex gap-2 w-full cursor-pointer"
          onClick={() => setActiveNav("Home")}
        >
          <div
            className={`${
              activeNav == "Home" ? "bg-white" : "bg-black"
            } h-full w-[2px] rounded-full `}
          />
          <img src="/Home.svg" alt="" />
          <p className=" font-semibold text-xl text-white">Home</p>
        </div>
        <div
          className=" flex gap-2 cursor-pointer"
          onClick={() => setActiveNav("Ideas")}
        >
          <div
            className={`${
              activeNav == "Ideas" ? "bg-white" : "bg-black"
            } h-full w-[2px] rounded-full `}
          />
          <img src="/Rocket.svg" alt="" />
          <p className=" font-semibold text-xl text-white">Ideas</p>
        </div>
        <div
          className=" flex gap-2 cursor-pointer"
          onClick={() => setActiveNav("Square")}
        >
          <div
            className={`${
              activeNav == "Square" ? "bg-white" : "bg-black"
            } h-full w-[2px] rounded-full `}
          />
          <img src="/Layers.svg" alt="" />
          <p className=" font-semibold text-xl text-white">Square</p>
        </div>
        <div
          className=" flex gap-2 cursor-pointer"
          onClick={() => setActiveNav("Archive")}
        >
          <div
            className={`${
              activeNav == "Archive" ? "bg-white" : "bg-black"
            } h-full w-[2px] rounded-full `}
          />
          <img src="/Archive.svg" alt="" />
          <p className=" font-semibold text-xl text-white">Archive</p>
        </div>
      </div>
      <div
        className=" flex gap-2 cursor-pointer"
        onClick={() => setActiveNav("About")}
      >
        <div
          className={`${
            activeNav == "About" ? "bg-white" : "bg-black"
          } h-full w-[2px] rounded-full `}
        />
        <img src="/Info.svg" alt="" />
        <p className=" font-semibold text-xl text-white">About</p>
      </div>
    </div>
  );
};

export default ScrapTownNav;
