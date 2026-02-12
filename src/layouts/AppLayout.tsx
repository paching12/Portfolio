import { Footer } from "@components/atoms/Footer";
import { Header } from "@components/molecules/Header";
import Nav from "@components/atoms/Nav/Nav";
import { HeaderOptions } from "../data/NavItems";
import { useMemo } from "react";

const AppLayout = () => {
  const navItems = useMemo(() => HeaderOptions, []);

  return (
    <div className="container">
      <Header>
        <Nav items={navItems} />
      </Header>
      <Footer />
    </div>
  );
};

export default AppLayout;
