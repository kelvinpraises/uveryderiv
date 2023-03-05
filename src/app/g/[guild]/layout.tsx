import Image from "next/image";
import Link from "next/link";
import Cover from "@/components/Cover";
import NavBar from "@/components/navBar/NavBar";
import { headers } from "next/headers";
import MainNav from "@/components/navBar/MainNav";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get("x-url") || "";
  const { pathname } = new URL(header_url);
  const pathSplit = pathname?.split("/") || [];
  const guildId = pathSplit[2];

  const isCreatePath = pathname === `/g/${guildId}/scrap-town/create`;

  return (
    <>
      <head />
      <body className=" flex justify-center bg-[#EFF1F8]">
        <MainNav />
        <div className="  py-[8rem] max-w-[1228px] w-full ">
          {!isCreatePath && (
            <>
              <div>
                <div className=" flex items-center flex-col">
                  <Cover>
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1525935944571-4e99237764c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxuaWdodHx8fHx8fDE2Nzc4NjY4ODE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                      }
                      style={{
                        objectFit: "cover",
                        zIndex: 0,
                      }}
                      fill
                      priority
                      alt={""}
                    />
                  </Cover>
                  <div className=" relative flex items-center justify-center w-40 h-40 overflow-hidden rounded-full  mt-[-5rem] z-[1]">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1553501586-b6b1070d8134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3Nzg2NDA4NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                      }
                      style={{
                        objectFit: "cover",
                        zIndex: 0,
                      }}
                      fill
                      priority
                      alt={""}
                    />
                  </div>
                </div>
                <div className=" flex flex-col items-center mt-4">
                  <p className=" font-bebas text-4xl">MIDJOURNEY</p>
                  <p className=" text-xl">by kelvx</p>
                </div>
              </div>
              <NavBar>
                <div className=" flex max-w-[29rem] w-full justify-between my-8 py-4 text-[#2B6CB0] font-semibold ">
                  <Link passHref={true} href={`/g/dreamy/`}>
                    <p>#Issue</p>
                  </Link>
                  <Link passHref={true} href={`/g/dreamy/stage`}>
                    <p>Stage</p>
                  </Link>
                  <Link passHref={true} href={`/g/dreamy/scrap-town`}>
                    <p>Scrap town</p>
                  </Link>
                  <Link passHref={true} href={`/g/dreamy/market`}>
                    <p>Market</p>
                  </Link>
                  <Link passHref={true} href={`/g/dreamy/guild`}>
                    <p>Guild</p>
                  </Link>
                </div>
                <div className=" flex max-w-[14rem] w-full justify-between py-4 text-[#2B6CB0] my-8 font-semibold px-4">
                  <Link passHref={true} href={`/admin`}>
                    <p>Admin deck</p>
                  </Link>
                  <Link passHref={true} href={`/settings`}>
                    <p>Settings</p>
                  </Link>
                </div>
              </NavBar>
            </>
          )}
          {children}
        </div>
      </body>
    </>
  );
}
