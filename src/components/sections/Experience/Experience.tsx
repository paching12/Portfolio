import { useTranslation } from "react-i18next";
import { experience } from "../../../data/Experience";
import Timeline from "../../molecules/Timeline";
import "./Experience.css";

const Experience = () => {
    const { t } = useTranslation();

    const timelineItems = experience.map((item) => {
        console.log(t(item.description))
        return {
            date: `${item.startedYear} - ${item.endYear}`,
            title: t(item.position),
            subtitle: t(item.name),
            description: t(item.description),
        };
    });

    console.log(timelineItems);

    return (
        <section className="section section-experience" id="experience">
            <h3 className="section-title">{t("Experience.title")}</h3>
            <div className="experience-timeline-wrapper">
                <Timeline items={timelineItems} />
            </div>
        </section>
    );
};

export default Experience;
