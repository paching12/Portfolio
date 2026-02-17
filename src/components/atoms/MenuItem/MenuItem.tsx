import type { FC } from "react";
import type { MenuItemProps } from "./MenuItem.types";
import { useTranslation } from "react-i18next";

import "./MenuItem.css";

const MenuItem: FC<MenuItemProps> = ({ item, href, isActive }) => {
  const { t } = useTranslation();
  return (
    <li className={`menuItem ${isActive ? "active" : ""}`}>
      <a href={href}>{t(item)}</a>
    </li>
  );
};

export default MenuItem;
