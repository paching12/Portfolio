import Logo from "@assets/JJPD_optimized.svg";
import { useTranslation } from "react-i18next";
import "./Heroe.css";
import { Button } from "@components/atoms/Button";
import { BUTTON_STYLES } from "@components/atoms/Button/Button.types";

const Heroe = () => {
  const { t } = useTranslation();
  return (
    <section className="heroe-container montserrat-semi-bold section lg:pt-32 min-h-[80vh] items-center" id="home">
      <img src={Logo} alt="Your SVG" className="w-20 md:w-27 lg:w-sm" />
      <div className="flex flex-col justify-around">
        <h1 className="header-title">{t("Heroe.title")}</h1>
        <p className="text-text-muted text-lg whitespace-pre-line">
          {t("Heroe.description")}
        </p>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            variant={BUTTON_STYLES.SECONDARY}
          >
            {t("Heroe.viewProjectsButton")}
          </Button>
          <Button onClick={() => {
            window.open("https://drive.google.com/file/d/1_0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0/view?usp=sharing", "_blank");
          }} variant={BUTTON_STYLES.TERTIARY}>
            {t("Heroe.downloadCv")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Heroe;
