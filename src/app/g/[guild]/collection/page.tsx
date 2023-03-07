import CollectionCard from "@/components/cards/CollectionCard";
import IssueCards from "@/components/cards/IssueCards";
import { ColumnPanel } from "@/components/Panel";
import { collectionData } from "@/data/data";

export default function Home() {
  return (
    <div className=" grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4">
      {collectionData.map((data, i) => (
        <CollectionCard {...data} key={i} />
      ))}
    </div>
  );
}
