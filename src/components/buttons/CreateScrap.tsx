"use client";

import { usePathname, useRouter } from "next/navigation";
interface ICreateScrap {
  openCreate: () => void;
  openState: boolean;
}

const CreateScrap: React.FC<ICreateScrap> = ({ openCreate, openState }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSplit = pathname?.split("/") || [];
  const id = pathSplit[2];

  return (
    <button
      // onMouseEnter={() => router.prefetch(pathname + "/create")}
      onClick={openCreate}
      className=" bg-black py-3 px-[18px] text-white text-sm rounded-3xl"
    >
      {openState ? "Post Scrap" : "New Scrap"}
    </button>
  );
};

export default CreateScrap;
