"use client";

import { usePathname, useRouter } from "next/navigation";

const CreateScrap = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSplit = pathname?.split("/") || [];
  const id = pathSplit[2];

  return (
    <button
      onMouseEnter={() => router.prefetch(pathname + "/create")}
      onClick={() => router?.push(pathname + "/create")}
      className=" bg-black py-3 px-[18px] text-white text-sm rounded-lg"
    >
      New Scrap
    </button>
  );
};

export default CreateScrap;
