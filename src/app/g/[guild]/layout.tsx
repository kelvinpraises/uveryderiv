"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Avatar from "@/components/Avatar";
import Cover from "@/components/Cover";
import MainNav from "@/components/navBar/MainNav";
import NavBar from "@/components/navBar/NavBar";
import useGuildData from "@/hooks/useGuildData";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    avatar: "",
    bio: "",
    coverImage: "",
    displayName: "",
    address: "",
  });

  const pathname = usePathname();
  const guildId = pathname?.split("/")[2] || ""; // FIXME: fragile

  const { metaData } = useGuildData();

  useEffect(() => {
    (async () => {
      const data = await metaData(guildId);
      setData(data);
    })();
    setLoading(false);
  }, [guildId, setLoading]); // adding metadata causes recursive calling issues

  return (
    <>
      <MainNav />
      <div className="pt-[8rem] max-w-[1228px] w-full ">
        <div>
          <div className="flex items-center flex-col">
            <Cover src={data.coverImage || ""} />
            <Avatar src={data.avatar || ""} />
          </div>

          <div className="flex flex-col items-center mt-4">
            <p className="font-bebas text-4xl">{data.displayName}</p>
            <p className="text-xl font-outfit">by {data.address}</p>
          </div>
        </div>

        <NavBar>
          <div className="font-semibold text-xl leading-7 flex max-w-[32rem] w-full justify-between my-8 py-4 text-[#2B6CB0] font-semibold font-outfit pr-4 gap-4">
            <Link scroll={true} href={`/g/${guildId}/`}>
              <p>#Issue</p>
            </Link>
            <Link scroll={true} href={`/g/${guildId}/stage`}>
              <p>Stage</p>
            </Link>
            <Link scroll={true} href={`/g/${guildId}/scrap-town/ideas`}>
              <p>Scrap town</p>
            </Link>
            <Link scroll={true} href={`/g/${guildId}/collection`}>
              <p>Collections</p>
            </Link>
            <Link scroll={true} href={`/g/${guildId}/guild`}>
              <p>Guild</p>
            </Link>
          </div>

          <div className="font-semibold text-xl leading-7 flex py-4 text-[#2B6CB0] my-8 font-semibold font-outfit px-4 gap-4">
            <Link scroll={true} href={`/g/${guildId}/admin`}>
              <p>Admin deck</p>
            </Link>

            <button
              onClick={() => {} /* subscribe */}
              className="cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </NavBar>

        {children}
      </div>
    </>
  );
}
