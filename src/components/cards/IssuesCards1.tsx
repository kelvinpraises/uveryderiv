import React, { ReactNode } from "react";

interface ICoverProp {
  children: ReactNode;
}

const IssuesCards1 = ({ children }: ICoverProp) => {
  return (
    <div className=" w-full  mb-4 h-min-content relative flex items-center justify-center overflow-hidden rounded-[20px]">
      {children}
    </div>
  );
};

export default IssuesCards1;
