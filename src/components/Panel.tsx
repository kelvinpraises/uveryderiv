import { ReactNode } from "react";

interface PanelProp {
  children: ReactNode;
}

export const RowPanel = ({ children }: PanelProp) => {
  return (
    <section className=" max-w-[1228px] w-full flex gap-8">{children}</section>
  );
};

export const ColumnPanel = ({ children }: PanelProp) => {
  return (
    <section className=" max-w-[1228px] w-full columns-[14.5rem] justify-center gap-4">
      {children}
    </section>
  );
};
