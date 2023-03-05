import IssueCards from "@/components/cards/IssueCards";
import { ColumnPanel } from "@/components/Panel";

export default function Home() {
  return (
    <ColumnPanel>
      <div
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   padding: "32 0 0",
        //   gap: 32,
        // }}
        className=" flex flex-col justify-center items-center gap-4 w-full p-8 text-xl text-[#4C505F] font-medium"
      >
        <p>We're working on this!</p>
        <p>Guild market coming soon!</p>
      </div>
    </ColumnPanel>
  );
}
