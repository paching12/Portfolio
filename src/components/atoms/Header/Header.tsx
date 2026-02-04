import type { FC } from "react";
import type { HeaderProps } from "./Header.types";
import Logo from "@assets/JJPD_optimized.svg";
import styles from "./Header.module.css";
import { MenuItem } from "../MenuItem";

const Header: FC<HeaderProps> = ({ options }) => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Your SVG" className={styles.logo} />
      {/* Menu */}
      <div>
        {options.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    </header>
  );
};

export default Header;
