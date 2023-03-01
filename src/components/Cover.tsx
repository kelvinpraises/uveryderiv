import { ReactNode } from "react";

interface ICoverProp {
  children: ReactNode;
}

const Cover = ({ children }: ICoverProp) => {
  return <section>{children}</section>;
};

export default Cover;
