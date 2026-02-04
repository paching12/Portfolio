import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en/translation";
import esTranslations from "./locales/es/translation";
import { languageNames } from "./locales/settings";
// import frTranslations from "./locales/fr/translation";

const resources = {
  // English translations
  ...enTranslations,
  // Spanish translations
  ...esTranslations,
  // French translations
  // ...frTranslations,
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
      "en-za": [languageNames.english],
      "es-co": [languageNames.espanol, languageNames.english],
      "es-ar": [languageNames.espanol, languageNames.english],
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
