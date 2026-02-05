import type { FC } from "react";
import type { MenuItemProps } from "./MenuItem.types";

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  return (
    <li className="flex-1 cursor-pointer list-none content-center justify-center p-2 whitespace-nowrap select-none">
      {item}
    </li>
  );
};

export default MenuItem;
