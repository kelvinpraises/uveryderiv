import Image from "next/image";
import GhostCard from "@/components/cards/GhostCard";
import GuildCard from "@/components/cards/GuildCards";
import Cover from "@/components/Cover";
import NavBar from "@/components/NavBar";
// import { useFeaturedGuilds } from "@/hooks/getFirebaseData";
import { featuredGuilds, PopularIssues } from "@/data/data";
import PopularCard from "@/components/cards/PopularCard";
import FAQ from "@/components/FAQ";

export default async function Home() {
  // const featuredGuilds = await useFeaturedGuilds();

  return (
    <div className=" bg-[#EFF1F8] pt-8 pb-36 grid place-items-center">
      <Cover>
        <Image
          src={
            "https://img.freepik.com/free-vector/illustration-sunset-sky-with-clouds_33099-2387.jpg?w=2000&t=st=1676629061~exp=1676629661~hmac=ed666ab18cb36bc9641c9df65c8d77a45f510e04908b5a1948c07456b14f4577"
          }
          style={{ objectFit: "cover", zIndex: 0 }}
          fill
          priority
          alt={""}
        />
      </Cover>

      <div className=" max-w-[1228px] w-full mt-8 ">
        <NavBar>
          <p className=" text-[#2B6CB0] text-4xl leading-[43px] font-bebas">
            FEATURED GUILDS
          </p>
          <p className=" font-semibold text-[#2B6CB0] text-lg cursor-pointer">
            Create Guild
          </p>
        </NavBar>
        <div className=" flex justify-between mt-2 flex-wrap mb-32">
          {featuredGuilds?.map((guild) => (
            <GuildCard key={guild.id} {...guild} />
          ))}
        </div>
      </div>
      <div className=" bg-[#1E1E1E] w-screen flex justify-center ">
        <div className="max-w-[1228px] w-full mt-8 mb-[6.7rem]">
          <p className=" text-white text-4xl leading-[43px] font-bebas">
            POPULAR ISSUES
          </p>
          <div className=" flex overflow-x-scroll mt-2">
            {PopularIssues?.map((issue) => (
              <PopularCard key={issue.id} {...issue} />
            ))}
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}
