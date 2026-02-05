import type { FC } from "react";
import type { MenuItemProps } from "./MenuItem.types";

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  return (
    <li className="flex-1 list-none content-center justify-center p-2 whitespace-nowrap">
      {item}
    </li>
  );
};

export default MenuItem;
