import type { FC } from "react";
import type { HeaderProps } from "./Header.types";

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="flex w-full fixed top-0 w-full z-50 bg-[var(--color-background)]/90 backdrop-blur-sm border-b border-white/10 transition-all duration-300 lg:justify-end">
      {/* Menu */}
      {children}
    </header>
  );
};

export default Header;
