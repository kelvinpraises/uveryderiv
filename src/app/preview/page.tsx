import Avatar from "@/components/Avatar";
import Cover from "@/components/Cover";
import MainNav from "@/components/navBar/MainNav";
import React from "react";
import Image from "next/image";
import { IssueBlog } from "@/data/data";

const pages = () => {
  return (
    <div className=" pt-[10rem] pb-36 grid place-items-center">
      <MainNav />
      <div className=" w-full max-w-[55vw] flex flex-col gap-12">
        <div className=" flex justify-between items-center">
          <div className="flex flex-col ">
            <p className="font-bebas text-4xl text-[#26272c]">
              {IssueBlog.nameOfGuild}
            </p>
            <p className="text-xl font-outfit text-[#4C505F]">
              Issue {IssueBlog.issueNo}
            </p>
          </div>
          <div className=" relative flex items-center justify-center w-40 h-40 overflow-hidden rounded-full z-[1] bg-red-100">
            <Image
              style={{
                objectFit: "cover",
                zIndex: 0,
              }}
              fill
              priority
              src={IssueBlog.avatarSrc}
              alt={""}
            />
          </div>
        </div>
        <div className=" bg-white rounded-[20px] p-10 flex flex-col gap-[20px]">
          <h1 className=" font-outfit text-[26px] text-[#4C505F]">
            {IssueBlog.title}
          </h1>
          <p className=" text-[#4C505F] text-lg leading-9">
            {IssueBlog.textContent}
          </p>
          {IssueBlog.nft.length ? (
            <h2 className=" font-outfit text-[22px] text-[#4C505F]">
              Browse our NFT's collection
            </h2>
          ) : (
            <></>
          )}
          <section className=" relative flex items-center justify-center w-full h-[19rem] rounded-[1.25rem] overflow-hidden max-w-[1228px]">
            <Image
              style={{
                objectFit: "cover",
                zIndex: 0,
              }}
              fill
              priority
              src={IssueBlog.nft[0]}
              alt={""}
              className=" hover:scale-110 transition-all duration-500"
            />
          </section>
          <div className=" w-full columns-2 justify-center gap-4 ">
            {IssueBlog.nft.map((nft, i) => {
              if (i != 0) {
                return (
                  <div className=" w-full overflow-hidden  rounded-[20px] h-min  mb-4 ">
                    <img
                      src={nft}
                      key={i}
                      alt=""
                      className=" w-full hover:scale-110 transition-all duration-500"
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default pages;
