import type { NavProps } from "./Nav.types";
import { memo, type FC } from "react";
import { LanguageSelector } from "../../molecules/LanguageSelector";
import MenuItemsList from "@components/molecules/MenuItemList/MenuItemList";

const Nav: FC<NavProps> = ({ items }) => {
  return (
    <div className="flex">
      <MenuItemsList items={items} />
      <LanguageSelector />
    </div>
  );
};

export default memo(Nav);
