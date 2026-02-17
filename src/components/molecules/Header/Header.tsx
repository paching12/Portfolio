import type { FC } from "react";
import type { HeaderProps } from "./Header.types";

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="flex justify-center p-4 lg:justify-end lg:fixed lg:top-0 lg:w-full lg:z-50 lg:bg-background/90 lg:backdrop-blur-sm lg:border-b lg:border-white/10 transition-all duration-300">
      {/* Menu */}
      {children}
    </header>
  );
};

export default Header;
