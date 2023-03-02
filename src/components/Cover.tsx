import { ReactNode } from "react";

interface ICoverProp {
  children: ReactNode;
}

const Cover = ({ children }: ICoverProp) => {
  return (
    <section className=" relative flex items-center justify-center w-full h-[19rem] rounded-2xl overflow-hidden max-w-[77rem]">
      {children}
    </section>
  );
};

export default Cover;
