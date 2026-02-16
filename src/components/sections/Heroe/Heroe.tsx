import Logo from "@assets/JJPD_optimized.svg";
import { useTranslation } from "react-i18next";
import "./Heroe.css";
import { Button } from "@components/atoms/Button";
import { BUTTON_STYLES } from "@components/atoms/Button/Button.types";

const Heroe = () => {
  const { t } = useTranslation();
  return (
    <section className="heroe-container montserrat-semi-bold">
      <img src={Logo} alt="Your SVG" className="w-20 md:w-27 lg:w-sm" />
      <div className="flex flex-col justify-around">
        <h1 className="header-title">{t("Heroe.title")}</h1>
        <p className="text-text-muted text-lg whitespace-pre-line">
          {t("Heroe.description")}
        </p>
        <div className="flex gap-4">
          <Button
            onClick={() => console.log("move down")}
            variant={BUTTON_STYLES.SECONDARY}
          >
            {t("Heroe.viewProjectsButton")}
          </Button>
          <Button onClick={() => {}} variant={BUTTON_STYLES.TERTIARY}>
            <button>{t("Heroe.downloadCv")}</button>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Heroe;
