import { LANGUAGES, type LANGUAGE_TYPES } from "@shared/types/Languages";
import { languageNames } from "@utils/locales/settings";

export const getNewLanguageList = (
  languages: typeof languageNames,
  currentLanguage: LANGUAGE_TYPES,
) => {
  const uniqueLanguages = new Set(Object.values(languages));

  uniqueLanguages.delete(currentLanguage);
  return Array.from(uniqueLanguages) as LANGUAGE_TYPES[];
};

export const isValidLanguage = (value: string): value is LANGUAGE_TYPES =>
  Object.values(LANGUAGES).includes(value as LANGUAGE_TYPES);

export const normalizeLanguage = (value: string): LANGUAGE_TYPES =>
  isValidLanguage(value) ? value : LANGUAGES.en;
