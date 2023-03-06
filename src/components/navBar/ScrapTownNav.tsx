"use client";

import { ScrapTownNavRoutes } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ScrapTownNav = () => {
  const pathname = usePathname();

  const activeNav = "Home"; // FIXME:
  const guildId = pathname?.split("/")[2] || ""; // FIXME: fragile

  return (
    <div className="sticky top-28 min-w-40 h-[80vh] rounded-[20px] bg-black flex flex-col py-8 px-4 justify-between">
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
            activeNav === "Home" ? "bg-white" : "bg-black"
          } h-full w-[2px] rounded-full `}
        />
        <img src={icon} alt="" />
        <p className=" font-semibold text-xl text-white">{title}</p>
      </div>
    </Link>
  );
};
