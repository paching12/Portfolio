import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translation";
import esTranslations from "./locales/es/translation";
import ptTranslations from "./locales/pt/translation";
import { languageNames } from "./locales/settings";

const resources = {
  ...enTranslations,
  ...esTranslations,
  ...ptTranslations,
};

// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass to react-i18next
  .init({
    resources,
    fallbackLng: {
      es: [languageNames.espanol, languageNames.english],
      en: [languageNames.english],
      pt: [languageNames.portuguese, languageNames.english],
      default: [languageNames.english],
    }, // Default language if detection fails
    cleanCode: true,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false,
    },
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    react: {
      useSuspense: true,
    },
  });

export default i18n;
