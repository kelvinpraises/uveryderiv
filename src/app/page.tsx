import Image from "next/image";

import GhostCard from "@/components/cards/GhostCard";
import GuildCard from "@/components/cards/GuildCards";
import Cover from "@/components/Cover";
import NavBar from "@/components/NavBar";
import { useFeaturedGuilds } from "@/hooks/getFirebaseData";
import { buttonGroup, cardGroup, featured, homePage } from "./page.css";

export default async function Home() {
  const featuredGuilds = await useFeaturedGuilds();

  return (
    <>
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
      <div className={featured}>
        <NavBar>
          <p>Featured Guilds</p>
          <div className={buttonGroup}>
            <p>Connect wallet</p>
            <p>Create guild</p>
          </div>
        </NavBar>
        <div className={cardGroup}>
          {featuredGuilds?.map((guild) => (
            <GuildCard key={guild.id} {...guild} />
          ))}

          <GhostCard />
          <GhostCard />
          <GhostCard />
          <GhostCard />
        </div>
      </div>
    </>
  );
}
