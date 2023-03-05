import { ScrapTownNavRoutes } from "@/data/data";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const ScrapTownNav = () => {
  const activeNav: any = "Home"; // fix this later
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get("x-url") || "";
  const { pathname } = new URL(header_url);
  const pathSplit = pathname?.split("/") || [];
  const guildId = pathSplit[2];

  return (
    <div className=" sticky top-28 min-w-40 h-[80vh] rounded-[20px] bg-black flex flex-col py-8 px-4 justify-between">
      <div className=" flex flex-col gap-8 ">
        {ScrapTownNavRoutes.map(({ title, icon, url }) => {
          if (title !== "About") {
            return (
              <ScrapTownNavItem key={title} {...{ guildId, url, activeNav, icon, title }} />
            );
          }
        })}
      </div>

      {ScrapTownNavRoutes.map(({ title, icon, url }) => {
        if (title === "About") {
          return (
            <ScrapTownNavItem key={title} {...{ guildId, url, activeNav, icon, title }} />
          );
        }
      })}
    </div>
  );
};

export default ScrapTownNav;

interface IScrapTownNavItem {
  guildId: string;
  url: string;
  activeNav: string;
  icon: string;
  title: string;
}

const ScrapTownNavItem = ({
  guildId,
  url,
  activeNav,
  icon,
  title,
}: IScrapTownNavItem) => {
  return (
    <Link passHref={true} href={`/g/${guildId}/scrap-town/${url}`}>
      <div className=" flex gap-2 w-full cursor-pointer">
        <div
          className={`${
            activeNav === "Home" ? "bg-white" : "bg-black"
          } h-full w-[2px] rounded-full `}
        />
        <img src={icon} alt="" />
        <p className=" font-semibold text-xl text-white">{title}</p>
      </div>
    </Link>
  );
};
