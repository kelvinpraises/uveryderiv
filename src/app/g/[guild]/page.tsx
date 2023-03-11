import { ColumnPanel } from "@/components/Panel";
import { MainIssues } from "@/data/data";

export default function Home() {
  return (
    <ColumnPanel>
      {MainIssues.map((issue, e) => {
        if (issue.type == "img") {
          return (
            <img
              key={`${issue.src} ${e}`}
              src={issue.src}
              alt=""
              className=" max-h-[24rem] w-full rounded-[20px] mb-4"
            />
          );
        } else {
          return (
            <div
              key={`${issue.quote} ${e}`}
              className=" w-full h-min max-h[14rem] px-4 py-8 flex flex-col items-center justify-center overflow-hidden rounded-[20px] bg-slate-500 mb-4"
            >
              <img src="/quoteS.svg" alt="" className=" w-4 py-4 md:py-2" />
              <p className=" font-light text-center  text-white ">
                {issue.quote}
              </p>
              <img src="/quoteE.svg" alt="" className=" w-4 py-4 md:py-2" />
            </div>
          );
        }
      })}
    </ColumnPanel>
  );
}
