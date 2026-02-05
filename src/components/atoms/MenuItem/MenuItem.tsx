import type { FC } from "react";
import type { MenuItemProps } from "./MenuItem.types";

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  return <li className="flex-1 list-none pl-5 break-keep">{item}</li>;
};

export default MenuItem;
