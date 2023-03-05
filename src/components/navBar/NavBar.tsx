import { ReactNode } from "react";

interface INavBarProp {
  children: ReactNode;
}

const NavBar = ({ children }: INavBarProp) => {
  return (
    <nav className=" max-w-full flex justify-between items-center">
      {children}
    </nav>
  );
};

export default NavBar;
