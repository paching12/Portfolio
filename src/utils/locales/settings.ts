export const languageNames = {
  english: "en-us",
  espanol: "es-mx",
  portuguese: "pt-br",
} as const;

export type LANGUAGES = (typeof languageNames)[keyof typeof languageNames];
