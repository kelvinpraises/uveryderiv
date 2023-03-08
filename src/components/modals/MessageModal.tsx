import { ContactListData, squareData } from "@/data/data";
import Image from "next/image";
import SendButton from "../buttons/SendButton";
import MessageCard from "../cards/MessageCard";

const MessageModal = () => {
  return (
    <div className=" w-full h-[calc(100%-70px)] mt-[70px] p-6 pr-0 flex justify-between items-center gap-6">
      <div className=" rounded-[20px] bg-[#1E2024] flex flex-col gap-3 py-4 px-2 h-[100%] w-[13rem] overflow-y-scroll">
        {ContactListData.map((data, i) => (
          <ContactList key={i} {...data} />
        ))}
      </div>
      <div className=" h-full">
        <div className=" overflow-y-scroll h-[calc(100%-60px)] flex flex-col gap-y-6">
          {squareData.map((data, i) => (
            <MessageCard {...data} key={i} />
          ))}
        </div>
        <div className=" w-full flex justify-between items-center z-10 py-4 gap-4 pr-6">
          <textarea
            className=" w-full border-none focus:outline-none text-[#4C505F] rounded-lg resize-none shadow-[0_0_50px_7px_rgba(0,0,0,0.05)] pt-2 pl-2"
            placeholder={`Message Midjourney`}
          />
          <SendButton />
        </div>
      </div>
    </div>
  );
};

export default MessageModal;

const ContactList = ({ src, name }: { src: string; name: string }) => (
  <div className=" flex gap-2 items-center w-full overflow-x-hidden  rounded-lg p-1 cursor-pointer">
    {/* bg for selected bg-[#2f333b] */}
    <div className=" w-full min-w-[30px] h-[30px] overflow-hidden rounded-full relative border-[#444547] border-[1px]">
      <Image
        src={src}
        style={{
          objectFit: "cover",
          zIndex: 0,
        }}
        fill
        priority
        alt={`avatar of ${name}`}
      />
    </div>
    <p className=" text-white font-outfit">{name}</p>
  </div>
);
