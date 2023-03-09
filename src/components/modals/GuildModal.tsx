"use client";

import { GuildJoined } from "@/data/data";
import { useStore } from "@/store/useStore";
import { useState } from "react";

const GuildModal = () => {
  const [guildCreated, setGuildCreated] = useState("not me");
  const setProfileModal = useStore((state) => state.setProfileModal);

  return (
    <div className=" w-full mt-[70px] p-6 flex flex-col gap-8">
      <div className=" flex justify-between w-full">
        <div className=" flex  gap-4">
          <button
            className="h-min bg-black px-6 py-3 rounded-3xl text-white flex justify-center items-center font-outfit"
            onClick={() => setGuildCreated("me")}
          >
            Created
          </button>
          <button
            className="h-min bg-black px-6 py-3 rounded-3xl text-white flex justify-center items-center font-outfit"
            onClick={() => setGuildCreated("not me")}
          >
            Joined
          </button>
        </div>
        <button
          className="h-min bg-black px-6 py-3 rounded-3xl text-white flex justify-center items-center font-outfit"
          onClick={() => setProfileModal({ modalSection: "createGuild" })}
        >
          Create Guild
        </button>
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
