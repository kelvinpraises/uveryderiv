import Image from "next/image";

interface ISquareProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
}
const SquareCard = (square: ISquareProps) => {
  return (
    <div className=" flex w-full gap-3">
      <div className=" w-full max-w-[70px] h-[70px] overflow-hidden rounded-full  sticky top-28">
        <Image
          src={square.avatar}
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          fill
          priority
          alt={`avatar of ${square.name}`}
        />
      </div>
      <div className=" w-full flex flex-col p-4 bg-white rounded-[20px]">
        <p className=" text-xl font-outfit font-medium text-[#484E62]">{square.name}</p>
        <p className=" text-[#4C505F]">{square.message}</p>
        <p className=" text-[#4C505F] text-sm italic text-end">{square.time}</p>
      </div>
    </div>
  );
};

export default SquareCard;
