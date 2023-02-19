import Image from "next/image";
import Link from "next/link";

import Cover from "@/components/Cover";
import NavBar from "@/components/NavBar";
import { body, linkGroup } from "./layout.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head />
      <body>
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

        <NavBar>
          <div className={linkGroup}>
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
          <div className={linkGroup}>
            <Link passHref={true} href={`/admin`}>
              <p>Admin deck</p>
            </Link>
            <Link passHref={true} href={`/settings`}>
              <p>Settings</p>
            </Link>
          </div>
        </NavBar>

        {children}
      </body>
    </>
  );
}