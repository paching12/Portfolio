export const languageNames = {
  english: "en-us",
  espanol: "es-mx",
  portugese: "pt-br",
} as const;

export type LANGUAGES = (typeof languageNames)[keyof typeof languageNames];
