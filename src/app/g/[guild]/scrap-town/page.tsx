import { usePathname, useRouter } from "next/navigation";

import ScrapTownCard from "@/components/cards/ScrapTownCard";
import { RowPanel } from "@/components/Panel";
import CreateScrap from "@/components/buttons/CreateScrap";

export default function Home() {
  return (
    <RowPanel>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          gap: 32,
        }}
      >
        <ScrapTownCard key={1} />
        <ScrapTownCard key={2} />
        <ScrapTownCard key={3} />
        <ScrapTownCard key={4} />
        <ScrapTownCard key={5} />
      </div>
      <div
        style={{
          width: "320px",
          position: "sticky",
          top: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 16,
          gap: 16,
          background: "#FFFFFF",
          boxShadow: "0px 0px 50px 7px rgba(0, 0, 0, 0.08)",
          borderRadius: 8,
        }}
      >
        <p
          style={{
            fontStyle: "normal",
            fontSize: 14,
            lineHeight: "20px",
            color: "#000000",
          }}
        >
          Scrap town is where ideas grow, share yours with the guild to get it
          staged and published in an Issue.
        </p>
        <CreateScrap />
      </div>
    </RowPanel>
  );
}
