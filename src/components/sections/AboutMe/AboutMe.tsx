import { useTranslation } from "react-i18next";
import "./AboutMe.css";

const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <section className="section section-about-me" id="aboutMe">
            <h3 className="section-title">{t("AboutMe.title")}</h3>
            <div className="about-me-content">
                <p className="whitespace-pre-line text-lg text-[var(--color-text-muted)] leading-relaxed max-w-4xl">
                    {t("AboutMe.description")}
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
