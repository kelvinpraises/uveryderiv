import IssueCards from "@/components/cards/IssueCards";
import { ColumnPanel } from "@/components/Panel";

export default function Home() {
  return (
    <ColumnPanel>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32 0 0",
          gap: 32,
        }}
      >
        <p>We're working on this</p>
        <p>Guild market coming soon!</p>
      </div>
    </ColumnPanel>
  );
}
