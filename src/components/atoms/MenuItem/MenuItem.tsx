import type { FC } from "react";
import type { MenuItemProps } from "./MenuItem.types";

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  return <li>{item}</li>;
};

export default MenuItem;
