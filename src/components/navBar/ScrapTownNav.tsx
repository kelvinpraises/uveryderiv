"use client";

import { ScrapTownNavRoutes } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ScrapTownNav = () => {
  const pathname = usePathname();

  const activeNav = "Home"; // FIXME:
  const guildId = pathname?.split("/")[2] || ""; // FIXME: fragile

  return (
    <div className=" sticky top-28 h-[80vh] rounded-[20px] bg-[#1E2024] flex flex-col pt-8 pr-8 pb-4 pl-4 justify-between">
      <div className="flex flex-col gap-8 ">
        {ScrapTownNavRoutes.topSection.map(({ title, icon, url }) => (
          <ScrapTownNavItem
            key={title}
            {...{ guildId, url, activeNav, icon, title }}
          />
        ))}
      </div>

      {ScrapTownNavRoutes.bottomSection.map(({ title, icon, url }) => (
        <ScrapTownNavItem
          key={title}
          {...{ guildId, url, activeNav, icon, title }}
        />
      ))}
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
      <div className="flex gap-2 w-full cursor-pointer">
        <div
          className={`${
            activeNav === "Home" ? "block" : "hidden"
          } h-full w-[2px] rounded-full bg-white`}
        />
        <img src={icon} alt="" />
        <p className=" font-semibold text-xl text-white font-outfit">{title}</p>
      </div>
    </Link>
  );
};
