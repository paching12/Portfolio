import type { NavProps } from "./Nav.types";
import { memo, type FC, useMemo } from "react";
import { LanguageSelector } from "../../molecules/LanguageSelector";
import MenuItemsList from "@components/molecules/MenuItemList/MenuItemList";
import { useActiveSection } from "@hooks/useActiveSection";

const Nav: FC<NavProps> = ({ items }) => {
  const sectionIds = useMemo(() => items.map((item) => item.href?.replace("#", "") || "").filter(Boolean), [items]);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="w-full overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 no-scrollbar">
      <div className="flex items-center gap-4 mx-auto w-max px-2 lg:px-0 pr-4 lg:pr-0">
        <MenuItemsList items={items} activeId={activeId} />
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default memo(Nav);
