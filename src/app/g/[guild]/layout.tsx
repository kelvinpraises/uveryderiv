"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Avatar from "@/components/Avatar";
import Cover from "@/components/Cover";
import MainNav from "@/components/navBar/MainNav";
import NavBar from "@/components/navBar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const guildId = pathname?.split("/")[2] || ""; // FIXME: fragile

  return (
    <>
      <head />
      <body>
        <MainNav />
        <div className="pt-[8rem] max-w-[1228px] w-full ">
          <div>
            <div className="flex items-center flex-col">
              <Cover src="https://images.unsplash.com/photo-1525935944571-4e99237764c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2Nzc4NjY4ODE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" />
              <Avatar src="https://images.unsplash.com/photo-1553501586-b6b1070d8134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Nzg2NDA4NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" />
            </div>

            <div className="flex flex-col items-center mt-4">
              <p className="font-bebas text-4xl">MIDJOURNEY</p>
              <p className="text-xl">by kelvx</p>
            </div>
          </div>

          <NavBar>
            <div className="flex max-w-[29rem] w-full justify-between my-8 py-4 text-[#2B6CB0] font-semibold ">
              <Link scroll={true} href={`/g/${guildId}/`}>
                <p>#Issue</p>
              </Link>
              <Link scroll={true} href={`/g/${guildId}/stage`}>
                <p>Stage</p>
              </Link>
              <Link scroll={true} href={`/g/${guildId}/scrap-town`}>
                <p>Scrap town</p>
              </Link>
              <Link scroll={true} href={`/g/${guildId}/market`}>
                <p>Market</p>
              </Link>
              <Link scroll={true} href={`/g/${guildId}/guild`}>
                <p>Guild</p>
              </Link>
            </div>

            <div className="flex max-w-[14rem] w-full justify-between py-4 text-[#2B6CB0] my-8 font-semibold px-4">
              <Link scroll={true} href={`/admin`}>
                <p>Admin deck</p>
              </Link>
              <Link scroll={true} href={`/settings`}>
                <p>Settings</p>
              </Link>
            </div>
          </NavBar>

          {children}
        </div>
      </body>
    </>
  );
}
