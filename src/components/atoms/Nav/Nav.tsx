import { MenuItem } from "@components/atoms/MenuItem";
import type { NavProps } from "./Nav.types";
import type { FC } from "react";
import { useInitContext } from "@contexts/InitContext/useInitContext";

const Nav: FC<NavProps> = ({ items }) => {
  const { language } = useInitContext();

  return (
    <div className="flex">
      {items.map((item) => (
        <MenuItem item={item.i18nKey || ""} />
      ))}
      {/* <MenuItem item={language} /> */}
      <li className="flex-1 cursor-pointer list-none content-center justify-center p-2 whitespace-nowrap select-none">
        {language}
      </li>
    </div>
  );
};

export default Nav;
