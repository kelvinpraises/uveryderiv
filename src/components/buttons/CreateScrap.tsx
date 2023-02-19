"use client";

import { usePathname, useRouter } from "next/navigation";

const CreateScrap = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      onClick={() => router?.push(pathname + "/create")}
      style={{
        all: "unset",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        background: "#0E101B",
        borderRadius: 8,
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: 13,
        lineHeight: "13px",
        color: "#FFFFFF",
        width: "100%",
        cursor: "pointer",
      }}
    >
      Create Scrap!
    </button>
  );
};

export default CreateScrap;
