"use client";
import GuildCard from "@/components/cards/GuildCards";
import Cover from "@/components/Cover";
import NavBar from "@/components/navBar/NavBar";
// import { useFeaturedGuilds } from "@/hooks/getFirebaseData";
import PopularCard from "@/components/cards/PopularCard";
import FAQ from "@/components/FAQ";
import MainNav from "@/components/navBar/MainNav";
import { featuredGuilds, PopularIssues } from "@/data/data";
import { useStore } from "@/store/useStore";

export default function Home() {
  // const featuredGuilds = await useFeaturedGuilds();
  const setProfileModal = useStore((state) => state.setProfileModal);
  

  return (
    <div className=" pt-[8rem] pb-36 grid place-items-center">
      <MainNav />
      <Cover src="https://images.unsplash.com/photo-1525935944571-4e99237764c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2Nzc4NjY4ODE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" />
      <div className=" max-w-[1228px] w-full mt-8 ">
        <NavBar>
          <p className=" text-[#2B6CB0] text-4xl leading-[43px] font-bebas">
            FEATURED GUILDS
          </p>

          <button
            onClick={() =>
              setProfileModal({ open: true, modalSection: "createGuild" })
            }
            className=" font-semibold text-[#2B6CB0] text-lg cursor-pointer"
          >
            Create Guild
          </button>
        </NavBar>
        <div className=" grid grid-cols-[repeat(auto-fit,13.75rem)] justify-between mt-2 mb-32 gap-4">
          {featuredGuilds?.map((guild) => (
            <GuildCard key={guild.id} {...guild} />
          ))}
        </div>
      </div>

      <div className=" bg-[#1E1E1E] w-screen flex justify-center px-4">
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
