import ScrapTownNav from "@/components/navBar/ScrapTownNav";
import { RowPanel } from "@/components/Panel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RowPanel>
      <ScrapTownNav />
      {children}
    </RowPanel>
  );
}
