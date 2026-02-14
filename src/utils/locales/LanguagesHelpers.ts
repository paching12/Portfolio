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

const languageFallbacks: Record<string, LANGUAGE_TYPES> = {
  en: LANGUAGES.en,
  es: LANGUAGES.es,
  pt: LANGUAGES.pt,
};

export const normalizeLanguage = (value: string): LANGUAGE_TYPES => {
  const normalized = value.trim().toLowerCase().replace("_", "-");

  if (isValidLanguage(normalized)) {
    return normalized;
  }

  const [baseCode, _] = normalized.split("-");
  return languageFallbacks[baseCode] ?? LANGUAGES.en;
};
