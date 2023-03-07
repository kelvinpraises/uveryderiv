"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ICollectionProps {
  cover: string;
  nameOfNFT: string;
  createdBy: string;
  price: string;
}

const CollectionCard = (collection: ICollectionProps) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className=" flex flex-col min-w-[14.5rem] items-end relative">
      <div className=" bg-white w-full rounded-[20px] border-2 border-[#EFF1F8] h-[23rem] shadow-[0_0_50px_7px_rgba(0,0,0,0.08)] flex flex-col gap-2">
        <div className=" relative w-full h-[18.25rem] overflow-hidden rounded-t-[20px]">
          <Image
            src={collection.cover}
            style={{
              objectFit: "cover",
              zIndex: 0,
              // borderRadius: "8px",
            }}
            fill
            priority
            alt={collection.nameOfNFT}
          />
        </div>
        <div className=" h-[4.5rem] w-full flex flex-col px-2 pb-4 justify-between">
          <div className=" flex justify-between items-center">
            <p className=" font-bebas max-w-[10rem] overflow-hidden text-2xl">
              {collection.nameOfNFT}
            </p>
            <p className=" font-outfit text-sm text-[#4C505F]">
              ${collection.price}
            </p>
          </div>
          <div className=" flex justify-between items-center">
            <p className=" font-outfit text-[#4C505F]">
              created by{" "}
              <span className=" font-bold">{collection.createdBy}</span>
            </p>
            <div
              className={`hover:bg-slate-200 grid place-items-center w-6 h-5 rounded-full ${showOptions? "bg-slate-200": "bg-none"}`}
              onClick={() => setShowOptions(!showOptions)}
            >
              <img src="/dot.svg" alt="" />
              {/* <p
                className=" font-bold select-none cursor-pointer leading-0"
              >
                ...
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          showOptions ? "flex" : "hidden"
        } w-fit h-32 bg-white z-10 mt-[-1rem] border-[1px] border-[#EBECEE] rounded-2xl mr-2 flex-col p-3 justify-between shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] absolute top-[23rem]`}
      >
        <p className=" text-sm text-[#4C505F] cursor-pointer">Chat creator</p>
        <div className=" bg-slate-400 w-full h-[1px]" />
        <p className=" text-sm text-[#4C505F] cursor-pointer">
          View on Opensea
        </p>
        <div className=" bg-slate-400 w-full h-[1px]" />
        <p className=" text-sm text-[#4C505F] cursor-pointer">Give feedback</p>
      </div>
    </div>
  );
};

export default CollectionCard;
