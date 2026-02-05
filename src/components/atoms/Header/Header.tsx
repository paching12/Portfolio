import type { FC } from "react";
import type { HeaderProps } from "./Header.types";
import Logo from "@assets/JJPD_optimized.svg";
import { MenuItem } from "../MenuItem";

const Header: FC<HeaderProps> = ({ options }) => {
  return (
    <header className="m-[25px] flex justify-between">
      <img src={Logo} alt="Your SVG" className="w-[75px]" />
      {/* Menu */}
      <div className="flex">
        {options.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    </header>
  );
};

export default Header;
