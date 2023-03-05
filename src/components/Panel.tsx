import { ReactNode } from "react";

interface IPanelProp {
  children: ReactNode;
}

export const RowPanel = ({ children }: IPanelProp) => {
  return (
    <section className=" max-w-[1228px] w-full flex gap-8">{children}</section>
  );
};

export const ColumnPanel = ({ children }: IPanelProp) => {
  return (
    <section className=" max-w-[1228px] w-full columns-[14.5rem] justify-center gap-4">
      {children}
    </section>
  );
};
