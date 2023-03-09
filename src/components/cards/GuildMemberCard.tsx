import React from "react";

interface ICard {
  walletAddress: string;
  date: string;
}

const GuildMemberCard = (data: ICard) => {
  return (
    <div className=" bg-white w-full p-4 flex justify-between rounded-[20px] items-center text-[#4C505F]">
      <p className=" font-outfit font-medium text-xl">{data.walletAddress}</p>
      <p className=" italic text-sm">{data.date}</p>
    </div>
  );
};

export default GuildMemberCard;
