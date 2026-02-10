import { MenuItem } from "@components/atoms/MenuItem";
import type { NavProps } from "./Nav.types";
import type { FC } from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Nav: FC<NavProps> = ({ items }) => {
  return (
    <div className="flex">
      {items.map((item) => (
        <MenuItem item={item.i18nKey || ""} key={item.id} />
      ))}
      <LanguageSelector />
    </div>
  );
};

export default Nav;
