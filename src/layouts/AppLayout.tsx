import { Footer } from "@components/atoms/Footer";
import { Header } from "@components/molecules/Header";
import Nav from "@components/atoms/Nav/Nav";
import { HeaderOptions } from "../data/NavItems";
import { useMemo } from "react";
import { Heroe } from "@components/sections/Heroe";
import { Projects } from "@components/sections/Projects";

const AppLayout = () => {
  const navItems = useMemo(() => HeaderOptions, []);

  return (
    <div className="container">
      <Header>
        <Nav items={navItems} />
      </Header>
      <Heroe />
      <Projects />
      <Footer />
    </div>
  );
};

export default AppLayout;
