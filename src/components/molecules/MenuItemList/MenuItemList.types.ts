import type { NavProps } from "@components/atoms/Nav/Nav.types";

export type MenuItemsListProps = {
  items: NavProps["items"];
  activeId?: string;
  className?: string;
};
