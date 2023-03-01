import { ReactNode } from "react";

interface INavBarProp {
  children: ReactNode;
}

const NavBar = ({ children }: INavBarProp) => {
  return <nav>{children}</nav>;
};

export default NavBar;
