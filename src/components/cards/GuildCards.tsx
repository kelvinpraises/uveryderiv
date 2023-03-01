import Image from "next/image";
import Link from "next/link";

import { FeaturedGuilds } from "@/hooks/getFirebaseData";

const GuildCard = (guild: FeaturedGuilds) => {
  return (
    <div>
      <Link passHref={true} href={`/g/${guild?.id}`}>
        <div>
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
        <div>
          <p>{guild.name}</p>
          <p>{guild.bio}</p>
        </div>
      </Link>
    </div>
  );
};

export default GuildCard;
