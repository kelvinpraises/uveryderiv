import IssueCards from "@/components/cards/IssueCards";
import { ColumnPanel } from "@/components/Panel";

export default function Home() {
  return (
    <ColumnPanel>
      <IssueCards />
      <IssueCards />
      <IssueCards />
    </ColumnPanel>
  );
}
