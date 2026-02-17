import { memo, type FC } from "react";
import { MenuItem } from "@components/atoms/MenuItem";
import type { MenuItemsListProps } from "./MenuItemList.types";

const MenuItemsList: FC<MenuItemsListProps> = memo(({ items }) => {
  return (
    <>
      {items.map((item) => (
        <MenuItem item={item.i18nKey || ""} href={item.href} key={item.id} />
      ))}
    </>
  );
});
MenuItemsList.displayName = "MenuItemsList";

export default MenuItemsList;
