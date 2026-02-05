import { Footer } from "@components/atoms/Footer";
import { Header } from "@components/atoms/Header";
import { MenuItem } from "@components/atoms/MenuItem";
import { HeaderOptions } from "../data/NavItems";

const AppLayout = () => {
  return (
    <div className="container">
      <Header>
        <div className="flex">
          {HeaderOptions.map((item) => (
            <MenuItem item={item.i18nKey} />
          ))}
        </div>
      </Header>

      <Footer />
    </div>
  );
};

export default AppLayout;
