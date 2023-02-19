import { ReactNode } from "react";
import { cover } from "./Cover.css";

interface ICoverProp {
  children: ReactNode;
}

const Cover = ({ children }: ICoverProp) => {
  return <section className={cover}>{children}</section>;
};

export default Cover;
