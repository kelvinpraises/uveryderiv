"use client";
import { useState } from "react";
import CreateScrapButton from "./buttons/CreateScrap";

const CreateScrap = () => {
  const [openComp, setOpenComp] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("where are you!!!");

  return (
    <div className=" flex flex-col gap-4 rounded-[20px] border-[1px] border-[#EFF1F8] w-[43rem] shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] bg-white">
      <div className={`${openComp ? "flex" : "hidden"} gap-2 p-4`}>
        <img
          src="/close.svg"
          alt="close"
          className=" w-7 h-7 rounded-full cursor-pointer"
          onClick={() => setOpenComp(false)}
        />

        <div className="w-full">
          <input
            type="text"
            className=" text-lg text-[#484E62] font-semibold font-outfit w-[38rem] border-none focus:outline-none"
            placeholder="Title"
          />

          {/* This enables the textarea to auto grow! */}
          <div className="relative">
            <div className="whitespace-pre-line invisible min-h-[4rem] w-full">
              {description}
            </div>
            <textarea
              className="absolute inset-0 w-full overflow-y-hidden border-none focus:outline-none text-[#4C505F] h-[4.5rem] resize-none h-[initial]"
              placeholder="Enter an idea proposal..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

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
        <CreateScrapButton
          openCreate={() => setOpenComp(true)}
          openState={openComp}
        />
      </div>
    </div>
  );
};

export default CreateScrap;
