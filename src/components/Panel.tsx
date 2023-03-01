import { ReactNode } from "react";

interface IPanelProp {
  children: ReactNode;
}

export const RowPanel = ({ children }: IPanelProp) => {
  return <section>{children}</section>;
};

export const ColumnPanel = ({ children }: IPanelProp) => {
  return <section>{children}</section>;
};
