import type { NavProps } from "./Nav.types";
import { memo, type FC, useMemo, useState } from "react";
import { LanguageSelector } from "../../molecules/LanguageSelector";
import MenuItemsList from "@components/molecules/MenuItemList/MenuItemList";
import { useActiveSection } from "@hooks/useActiveSection";

const Nav: FC<NavProps> = ({ items }) => {
  const sectionIds = useMemo(() => items.map((item) => item.href?.replace("#", "") || "").filter(Boolean), [items]);
  const activeId = useActiveSection(sectionIds);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between lg:justify-end container">
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <MenuItemsList items={items} activeId={activeId} />
          <ul className="m-0 p-0 list-none">
            <LanguageSelector />
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-2xl text-[var(--color-text)] focus:outline-none p-2 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-screen bg-[#03060d] border-b border-white/10 flex flex-col shadow-2xl z-50 pb-8">
           <div className="w-full flex flex-col items-center gap-6 pt-6">
              <MenuItemsList 
                items={items} 
                activeId={activeId} 
                className="flex flex-col items-center gap-6 m-0 p-0"
              />
              <ul className="m-0 p-0 list-none">
                <LanguageSelector />
              </ul>
           </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Nav);
