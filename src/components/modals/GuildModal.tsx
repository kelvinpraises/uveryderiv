"use client";

import { GuildJoined } from "@/data/data";
import React, { useState } from "react";

const GuildModal = () => {
  const [guildCreated, setGuildCreated] = useState("not me");

  return (
    <div className=" w-full mt-[70px] p-6 flex flex-col gap-8">
      <div className=" flex gap-6">
        <div
          className=" grid place-items-center py-3 px-6 rounded-2xl font-outfit text-2xl shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] bg-[#1E2024] text-white cursor-pointer"
          onClick={() => setGuildCreated("me")}
        >
          Created
        </div>
        <div
          className=" grid place-items-center py-3 px-6 rounded-2xl font-outfit text-2xl shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] bg-[#1E2024] cursor-pointer text-white"
          onClick={() => setGuildCreated("not me")}
        >
          Joined
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        {GuildJoined.map((guild, i) => {
          if (guild.createdBy == guildCreated) {
            return <GuildBox {...guild} key={i} />;
          }
        })}
      </div>
    </div>
  );
};

export default GuildModal;

const GuildBox = ({
  guildName,
  dateJoined,
}: {
  guildName: string;
  dateJoined: string;
}) => (
  <div className=" shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] w-full p-4 rounded-lg flex justify-between items-center ">
    <p className=" font-outfit text-2xl font-medium">{guildName}</p>
    <p>{dateJoined}</p>
  </div>
);
