"use client";

import MessageButton from "@/components/buttons/MessageButton";
import SquareCard from "@/components/cards/SquareCard";
import { squareData } from "@/data/data";
import { useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");
  const [encrypt, setEncrypt] = useState(false);
  return (
    <div className=" flex flex-col max-w-[48.5rem] w-full ">
      <div className=" flex flex-col gap-8">
        {squareData.map((data, i) => (
          <SquareCard {...data} key={i} />
        ))}
      </div>
      <div className=" flex flex-col gap-2 bg-white p-4 fixed bottom-4 max-w-[48.5rem] w-full h-min rounded-[20px] shadow-[0_0_50px_7px_rgba(0,0,0,0.08)]">
        <textarea
          className=" w-full border-none focus:outline-none text-[#4C505F] max-h-[9rem] rounded-lg pt-1 pl-1 resize-none shadow-[0_0_50px_7px_rgba(0,0,0,0.08)]"
          placeholder={`Message Midjourney`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {message && (
          <div className=" flex justify-between">
            <img
              src={encrypt ? "/LockC.svg" : "/LockO.svg"}
              className=" w-[18px]"
              alt="encrypt"
              onClick={() => setEncrypt(!encrypt)}
            />
            <MessageButton />
          </div>
        )}
      </div>
    </div>
  );
}
