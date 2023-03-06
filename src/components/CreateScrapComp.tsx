"use client";
import { useState } from "react";
import CreateScrap from "./buttons/CreateScrap";

const CreateScrapComp = () => {
  const [openComp, setOpenComp] = useState(false);


  return (
    <div className=" flex flex-col gap-4 rounded-[20px] border-[1px] border-[#EFF1F8] w-[43rem] shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] bg-white">
      <div className={`${openComp ? "flex" : "hidden"} gap-2 p-4`}>
        <img
          src="/close.svg"
          alt="close"
          className=" w-7 h-7 rounded-full cursor-pointer"
          onClick={() => setOpenComp(false)}
        />

        <div className=" flex flex-col">
          <input
            type="text"
            className=" text-lg text-[#484E62] font-semibold font-outfit w-[38rem] border-none focus:outline-none"
            placeholder="Title"
          />
          {/* <p className=" text-[#696C7A] text-xl font-semibold pb-2">Title</p> */}
          <textarea
            className="  w-[38rem] border-none focus:outline-none text-[#4C505F] h-[4.5rem] resize-none"
            placeholder="Enter an idea proposal..."
          />
          <div className=" w-full h-[7.5rem] border-2 border-[#212434] rounded-lg border-dashed flex flex-col items-center justify-center mt-4">
            <p className=" text-lg text-[#696C7A] text-center font-outfit">
              Add a scrap asset using the
            </p>
            <p className=" text-lg text-[#696C7A] text-center font-outfit">
              asset picker
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-end border-t-[1px] border-[#EFF1F8] p-4">
        <CreateScrap
          openCreate={() => setOpenComp(true)}
          openState={openComp}
        />
      </div>
    </div>
  );
};

export default CreateScrapComp;
