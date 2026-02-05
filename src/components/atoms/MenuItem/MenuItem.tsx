import type { FC } from "react";
import type { MenuItemProps } from "./MenuItem.types";
import { useTranslation } from "react-i18next";

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <li className="flex-1 cursor-pointer list-none content-center justify-center p-2 whitespace-nowrap select-none">
      {t(item)}
    </li>
  );
};

export default MenuItem;
