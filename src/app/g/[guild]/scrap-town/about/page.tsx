import ScrapTownCard from "@/components/cards/ScrapTownCard";

export default function Page() {
  return (
    <div className=" pb-32 flex flex-col gap-8">
      <ScrapTownCard key={1} />
      <ScrapTownCard key={2} />
      <ScrapTownCard key={3} />
      <ScrapTownCard key={4} />
    </div>
  );
}
