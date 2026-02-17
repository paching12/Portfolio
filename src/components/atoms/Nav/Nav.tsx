import type { NavProps } from "./Nav.types";
import { memo, type FC, useMemo } from "react";
import { LanguageSelector } from "../../molecules/LanguageSelector";
import MenuItemsList from "@components/molecules/MenuItemList/MenuItemList";
import { useActiveSection } from "@hooks/useActiveSection";

const Nav: FC<NavProps> = ({ items }) => {
  const sectionIds = useMemo(() => items.map((item) => item.href?.replace("#", "") || "").filter(Boolean), [items]);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="flex w-full items-center gap-4 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 px-2 lg:px-0 pr-4 lg:pr-0 justify-center lg:justify-end">
      <MenuItemsList items={items} activeId={activeId} />
      <LanguageSelector />
    </nav>
  );
};

export default memo(Nav);
