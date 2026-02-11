import type { FC } from "react";
import type { MenuItemProps } from "./MenuItem.types";
import { useTranslation } from "react-i18next";

import "./MenuItem.css";

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const { t } = useTranslation();
  return <li className="menuItem">{t(item)}</li>;
};

export default MenuItem;
