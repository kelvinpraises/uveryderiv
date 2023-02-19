import { ReactNode } from "react";
import { columnPanel, panel } from "./Panel.css";

interface IPanelProp {
  children: ReactNode;
}

export const RowPanel = ({ children }: IPanelProp) => {
  return <section className={panel}>{children}</section>;
};

export const ColumnPanel = ({ children }: IPanelProp) => {
  return <section className={columnPanel}>{children}</section>;
};
