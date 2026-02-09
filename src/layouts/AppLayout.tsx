import { Footer } from "@components/atoms/Footer";
import { Header } from "@components/atoms/Header";
import Nav from "@components/atoms/Nav/Nav";
import { HeaderOptions } from "../data/NavItems";

const AppLayout = () => {
  return (
    <div className="container">
      <Header>
        <Nav items={HeaderOptions} />
      </Header>
      <Footer />
    </div>
  );
};

export default AppLayout;
