import { Footer } from "@components/atoms/Footer";
import { Header } from "@components/atoms/Header";
import { useTranslation } from "react-i18next";

const AppLayout = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header
        options={[
          t("Header.heroe"),
          t("Header.experience"),
          t("Header.skills"),
          t("Header.aboutMe"),
        ]}
      />

      <Footer />
    </div>
  );
};

export default AppLayout;
