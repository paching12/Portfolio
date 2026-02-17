import { Footer } from "@components/atoms/Footer";
import { Header } from "@components/molecules/Header";
import Nav from "@components/atoms/Nav/Nav";
import { HeaderOptions } from "../data/NavItems";
import { useMemo } from "react";
import { Heroe } from "@components/sections/Heroe";
import { Projects } from "@components/sections/Projects";
import { Experience } from "@components/sections/Experience";
import { AboutMe } from "@components/sections/AboutMe";

const AppLayout = () => {
  const navItems = useMemo(() => HeaderOptions, []);

  return (
    <>
      <Header>
        <Nav items={navItems} />
      </Header>
      <div className="flex flex-col justify-center">
          <Heroe />
          <Projects />
          <Experience />
        <AboutMe />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
