import { THEMES } from "@shared/types/Themes";
import type { InitContextTypeValues } from "./IniContext.types";
import { LANGUAGES } from "@shared/types/Languages";
import { createContext } from "react";

export const InitContext = createContext<InitContextTypeValues>({
  theme: THEMES.DARK,
  language: LANGUAGES.EN,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (_: THEMES) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLanguage: (_: LANGUAGES) => {},
});
