import { memo, type FC } from "react";
import { MenuItem } from "@components/atoms/MenuItem";
import type { MenuItemsListProps } from "./MenuItemList.types";

const MenuItemsList: FC<MenuItemsListProps> = memo(({ items, activeId, className = "flex flex-row items-center gap-4 m-0 p-0" }) => {
  return (
    <ul className={className}>
      {items.map((item) => (
        <MenuItem 
          item={item.i18nKey || ""} 
          href={item.href} 
          key={item.id}
          isActive={item.href === `#${activeId}`}
        />
      ))}
    </ul>
  );
});
MenuItemsList.displayName = "MenuItemsList";

export default MenuItemsList;
