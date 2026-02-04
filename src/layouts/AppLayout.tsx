import { Footer } from "@components/atoms/Footer";
import { Header } from "@components/atoms/Header";

const AppLayout = () => {
  return (
    <div>
      <Header options={["Heroes"]} />

      <Footer />
    </div>
  );
};

export default AppLayout;
