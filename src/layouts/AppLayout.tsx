import { Header } from "@components/molecules/Header";
import Nav from "@components/atoms/Nav/Nav";
import { HeaderOptions } from "../data/NavItems";
import { useMemo } from "react";
import { Heroe } from "@components/sections/Heroe";
import { Projects } from "@components/sections/Projects";
import { Experience } from "@components/sections/Experience";

const AppLayout = () => {
  const navItems = useMemo(() => HeaderOptions, []);

  return (
    <div className="container">
      <Header>
        <Nav items={navItems} />
      </Header>
      <Heroe />
      <Projects />
      <Experience />
    </div>
  );
};

export default AppLayout;
