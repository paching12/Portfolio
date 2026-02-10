import { THEMES, type THEME_TYPE } from "@shared/types/Themes";
import type { InitContextTypeValues } from "./IniContext.types";
import { LANGUAGES, type LANGUAGE_TYPES } from "@shared/types/Languages";
import { createContext } from "react";

export const InitContext = createContext<InitContextTypeValues>({
  theme: THEMES.DARK,
  language: LANGUAGES.en,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (_: THEME_TYPE) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLanguage: (_: LANGUAGE_TYPES) => {},
  availableLanguages: [] as LANGUAGE_TYPES[],
});
