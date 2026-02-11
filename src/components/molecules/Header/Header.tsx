import type { FC } from "react";
import Logo from "@assets/JJPD_optimized.svg";
import type { HeaderProps } from "./Header.types";

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="m-6.25 flex justify-between">
      <img src={Logo} alt="Your SVG" className="w-20 md:w-27 lg:w-37" />
      {/* Menu */}
      {children}
    </header>
  );
};

export default Header;
