import type { FC } from "react";
import type { HeaderProps } from "./Header.types";

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="m-6.25 flex justify-end">
      {/* Menu */}
      {children}
    </header>
  );
};

export default Header;
