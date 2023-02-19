import { ReactNode } from "react";
import { navBar } from "./Navbar.css";

interface INavBarProp {
  children: ReactNode;
}

const NavBar = ({ children }: INavBarProp) => {
  return <nav className={navBar}>{children}</nav>;
};

export default NavBar;
