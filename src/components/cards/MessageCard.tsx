import Image from "next/image";

interface IMessageProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
}
const MessageCard = (chat: IMessageProps) => {
  return (
    <div className=" flex w-full gap-2 pr-6">
      <div className=" w-full max-w-[70px] h-[70px] overflow-hidden rounded-full relative">
        <Image
          src={chat.avatar}
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          fill
          priority
          alt={`avatar of ${chat.name}`}
        />
      </div>
      <div className=" w-full flex flex-col p-2 bg-white rounded-[20px] shadow-[0_0_50px_7px_rgba(0,0,0,0.05)]">
        <p className=" text-xl font-outfit font-medium text-[#484E62]">{chat.name}</p>
        <p className=" text-[#4C505F]">{chat.message}</p>
        <p className=" text-[#4C505F] text-sm italic text-end">{chat.time}</p>
      </div>
    </div>
  );
};

export default MessageCard;
