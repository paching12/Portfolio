import { useTranslation } from "react-i18next"
import "./Experience.css"

const Experience = () => {
    const { t } = useTranslation();
    return (
        <section className="section section-experience">
            <h3 className="section-title">{t("Experience.title")}</h3>
        </section>
    )
}

export default Experience