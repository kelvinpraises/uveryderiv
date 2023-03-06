import ScrapTownCard from "@/components/cards/ScrapTownCard";
import CreateScrap from "@/components/CreateScrap";

export default function Page() {
  return (
    <div className=" pb-32 flex flex-col gap-8">
      <CreateScrap />
      <ScrapTownCard key={1} />
      <ScrapTownCard key={2} />
      <ScrapTownCard key={3} />
      <ScrapTownCard key={4} />
      <ScrapTownCard key={5} />
    </div>
  );
}
