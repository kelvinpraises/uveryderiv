import CreateScrap from "@/components/buttons/CreateScrap";
import ScrapTownCard from "@/components/cards/ScrapTownCard";
import { RowPanel } from "@/components/Panel";

export default function Home() {
  return (
    <RowPanel>
      <div>
        <ScrapTownCard key={1} />
        <ScrapTownCard key={2} />
        <ScrapTownCard key={3} />
        <ScrapTownCard key={4} />
        <ScrapTownCard key={5} />
      </div>
      <div>
        <p>
          Scrap town is where ideas grow, share yours with the guild to get it
          staged and published in an Issue.
        </p>
        <CreateScrap />
      </div>
    </RowPanel>
  );
}
