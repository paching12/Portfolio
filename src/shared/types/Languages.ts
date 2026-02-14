import { languageNames } from "@utils/locales/settings";

export const LANGUAGES = {
  en: languageNames.english,
  es: languageNames.espanol,
  pt: languageNames.portuguese,
} as const;

export type LANGUAGE_TYPES = (typeof LANGUAGES)[keyof typeof LANGUAGES];
