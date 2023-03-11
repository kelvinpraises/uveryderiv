"use client";

import GenericButton from "@/components/buttons/GenericButton";
import IssueCards from "@/components/cards/IssueCards";
import { ColumnPanel } from "@/components/Panel";
import Link from "next/link";
import Router from "next/router";
export default function Home() {
  return (
    <div className=" flex flex-col w-full gap-6 pb-12">
      <div className=" py-6 px-5 bg-white rounded-[20px] flex flex-col gap-8">
        <p className=" font-outfit text-2xl font-medium text-[#484E62]">
          Header
        </p>
        <input
          type="text"
          className=" text-lg text-[#484E62] font-outfit border-none focus:outline-none"
          placeholder="Input the title of your issue"
        />
      </div>
      <div className=" py-6 px-5 bg-white rounded-[20px] flex flex-col gap-8">
        <p className=" font-outfit text-2xl font-medium text-[#484E62]">
          Text Content
        </p>
        <textarea
          className=" border-none focus:outline-none text-[#4C505F] h-[12rem] resize-none text-lg"
          placeholder="This will be a long text, it describes your issues and the assets you used."
        />
      </div>
      <div className=" py-6 px-5 bg-white rounded-[20px] flex flex-col gap-8">
        <p className=" font-outfit text-2xl font-medium text-[#484E62]">
          NFT Display
        </p>
        <p className=" text-lg text-[#9ca3af] font-outfit">
          Your best nft’s used in creating this issue. arrange it in order of
          importance
        </p>
        <div className=" grid grid-cols-4 justify-center gap-y-6">
          <div className=" border-2 border-[#212434] rounded-lg border-dashed w-[250px] h-[250px] grid place-items-center cursor-pointer">
            <img src="/plus.svg" className=" w-16" alt="add picture" />
          </div>
        </div>
      </div>
      <div className=" flex gap-8 justify-end items-center">
        <Link href={"/preview"}>
          <GenericButton>See Preview</GenericButton>
        </Link>
        <GenericButton>Save</GenericButton>
      </div>
    </div>
  );
}
