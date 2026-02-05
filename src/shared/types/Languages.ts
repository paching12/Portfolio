import { languageNames } from "@utils/locales/settings";

export const LANGUAGES = {
  AF: languageNames.afrikaans,
  EN_US: languageNames.english,
  EN_AU: languageNames.englishAu,
  EN_GB: languageNames.englishGB,
  EN_NZ: languageNames.englishNZ,
  ES_MX: languageNames.espanolMx,
  ES: languageNames.espanol,
  PT_BR: languageNames.portugese,
  EN: languageNames.english, // alias
} as const;

export type LANGUAGE_TYPES = (typeof LANGUAGES)[keyof typeof LANGUAGES];
