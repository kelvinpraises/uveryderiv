import Image from "next/image";
import Link from "next/link";

import { FeaturedGuilds } from "@/hooks/getFirebaseData";
import { guildCard, guildCover, guildDetails, link } from "./GuildCards.css";

const GuildCard = (guild: FeaturedGuilds) => {
  return (
    <div className={guildCard}>
      <Link className={link} passHref={true} href={`/g/${guild?.id}`}>
        <div className={guildCover}>
          <Image
            src={guild.cover}
            style={{
              objectFit: "cover",
              zIndex: 0,
              border: "0px solid transparent",
            }}
            fill
            priority
            alt={guild.name}
          />
        </div>
        v
        <div className={guildDetails}>
          <p>{guild.name}</p>
          <p>{guild.bio}</p>
        </div>
      </Link>
    </div>
  );
};

export default GuildCard;
