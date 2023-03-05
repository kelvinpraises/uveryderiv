"use client";
import CreateScrap from "@/components/buttons/CreateScrap";
import ScrapTownCard from "@/components/cards/ScrapTownCard";
import ScrapTownNav from "@/components/navBar/ScrapTownNav";
import { RowPanel } from "@/components/Panel";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <RowPanel>
      <ScrapTownNav setActiveNav={setActiveNav} activeNav={activeNav} />
      <div className=" flex flex-col gap-8">
        <div className=" flex flex-col gap-4 rounded-lg border-[1px] border-[#EFF1F8] w-[43rem] shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] bg-white">
          <div className="  gap-2 p-4 flex">
            <img
              src="/thirteen.svg"
              alt="profile picture"
              className=" w-7 h-7 rounded-full"
            />
            <div className=" flex flex-col">
              <p className=" text-[#696C7A] text-xl font-semibold pb-2">
                Title
              </p>
              <textarea
                // type="text"
                className="  w-[38rem] border-none focus:outline-none text-[#696C7A] font-light h-[4.5rem] resize-none"
                placeholder="Enter an idea proposal..."
              />
              <div className=" w-full h-[7.5rem] border-2 border-[#212434] rounded-lg border-dashed flex flex-col items-center justify-center mt-4">
                <p className=" text-lg text-[#696C7A] text-center font-light">
                  Add a scrap asset using the
                </p>
                <p className=" text-lg text-[#696C7A] text-center font-light">
                  asset picker
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-end border-t-[1px] border-[#EFF1F8] p-4">
            <CreateScrap />
          </div>
        </div>
        <ScrapTownCard key={1} />
        <ScrapTownCard key={2} />
        <ScrapTownCard key={3} />
        <ScrapTownCard key={4} />
        <ScrapTownCard key={5} />
      </div>
    </RowPanel>
  );
}
