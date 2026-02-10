export const languageNames = {
  english: "en",
  // englishAu: "en-au",
  // englishGB: "en-gb",
  // englishNZ: "en-nz",
  // espanolMx: "es-mx",
  espanol: "es",
  // portugese: "pt",
} as const;

export type LANGUAGES = (typeof languageNames)[keyof typeof languageNames];
