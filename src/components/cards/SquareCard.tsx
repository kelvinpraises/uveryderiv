import Image from "next/image";

interface ISquareProps {
  authorHandle: string;
  body: string;
  createdAt: string;
}
const SquareCard = (square: ISquareProps) => {
  const avatar = "";
  console.log(square);
  return (
    <div className=" flex w-full gap-3">
      <div className="grid place-items-center  w-full max-w-[70px] h-[70px] overflow-hidden rounded-full  sticky top-28 bg-[#717171]">
        {avatar ? (
          <Image
            src={avatar}
            style={{
              objectFit: "cover",
              zIndex: 0,
            }}
            fill
            priority
            alt={`avatar of ${square.authorHandle}`}
          />
        ) : (
          <img style={{ width: "50%" }} src="/profile.svg" alt="" />
        )}
      </div>
      <div className=" w-full flex flex-col p-4 bg-white rounded-[20px]">
        <p className=" text-xl font-outfit font-medium text-[#484E62]">
          {square.authorHandle}
        </p>
        <p className=" text-[#4C505F]">{square.body}</p>
        <p className=" text-[#4C505F] text-sm italic text-end">
          {square.createdAt}
        </p>
      </div>
    </div>
  );
};

export default SquareCard;
