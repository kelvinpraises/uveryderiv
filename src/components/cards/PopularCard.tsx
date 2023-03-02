import Image from "next/image";
import Link from "next/link";

interface IIssue {
  cover: string;
  name: string;
  issue: string;
  description: string;
  id: string;
}

const PopularCard = (issue: IIssue) => {
  return (
    <div className=" bg-white  min-w-[18rem] rounded-2xl mr-8 ">
      <Link
        passHref={true}
        href={"/#"}
        className=" flex flex-col h-[32.6rem] p-6"
      >
        <div className=" relative w-full max-w-[18rem] h-[16.5rem] ">
          <Image
            src={issue.cover}
            style={{
              objectFit: "cover",
              zIndex: 0,
              borderRadius: "8px",
            }}
            fill
            priority
            alt={issue.name}
          />
        </div>
        <div className=" flex flex-col flex-grow justify-between">
          <div>
            <p className=" font-bebas text-[28px] text-[#494949] underline pt-2">
              {issue.issue}
            </p>
            <p className=" pt-4 text-[#545B5E] font">{issue.description}</p>
          </div>
          <div className=" flex items-center pt-4 border-t-[1px] border-[#494949]">
            <div className=" bg-black w-10 h-10 rounded-full mr-2"></div>
            <p className=" text-[#545B5E] text-sm">
              An issue of{" "}
              <span className=" capitalize underline">{issue.name}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PopularCard;
