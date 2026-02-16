import { useTranslation } from "react-i18next";
import "./FeaturedProjects.css";
import { Card } from "@components/molecules/Card";

const FeaturedProjects = () => {
  const { t } = useTranslation();
  return (
    <div className="section section-featured-projects">
      <h3 className="section-title">{t("Projects.title")}</h3>
      <div className="carousel">
        <Card />
      </div>
    </div>
  );
};

export default FeaturedProjects;
