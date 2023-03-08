import Image from "next/image";
import Link from "next/link";

import { FeaturedGuilds } from "@/hooks/database";

const GuildCard = (guild: FeaturedGuilds) => {
  return (
    <div className=" flex flex-col bg-white max-w-[13.75rem] h-[18.5rem] mb-2 rounded-lg">
      <Link passHref={true} href={`/g/${guild?.id}`}>
        <div className=" relative w-full max-w-[13.75rem] h-28">
          <Image
            src={guild.cover}
            style={{
              objectFit: "cover",
              zIndex: 0,
              borderRadius: "8px 8px 0 0",
            }}
            fill
            priority
            alt={guild.name}
          />
        </div>
        <div className="p-4 bg-white max-h-[12rem] overflow-hidden rounded-r-lg rounded-l-lg">
          <p className=" text-2xl text-[#494949] font-bebas">{guild.name}</p>
          <p className=" text-[#545B5E] pt-2 font-outfit">{guild.bio}</p>
        </div>
      </Link>
    </div>
  );
};

export default GuildCard;
