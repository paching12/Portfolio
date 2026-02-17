import { useTranslation } from "react-i18next";
import "./FeaturedProjects.css";
import { Carousel } from "@components/molecules/Carousel";
import { projects } from "@data/Projects";
import Card from "@components/molecules/Card/Card";

const FeaturedProjects = () => {
  const { t } = useTranslation();
  return (
    <section className="section section-featured-projects">
      <h3 className="section-title">{t("Projects.title")}</h3>
      <Carousel
        items={projects}
        renderItem={(item) => (
          <Card
            key={item.id}
            title={t(item.title)}
            description={t(item.description)}
            thumbnails={item.image}
            buttonTitle={t("Projects.viewProject")}
            link={item.link}
            tags={item.tags}
          />
        )}
      />
    </section>
  );
};

export default FeaturedProjects;
