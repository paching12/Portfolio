import { createContext, useState, type FC } from "react";
import type {
  InitContextProviderType,
  InitContextTypeValues,
} from "./IniContext.types";
import { THEMES } from "@shared/types/Themes";
import { LANGUAGES } from "@shared/types/Languages";

const InitContext = createContext<InitContextTypeValues>({
  theme: THEMES.DARK,
  language: LANGUAGES.EN,
  setTheme: (theme: THEMES) => {},
  setLanguage: (language: LANGUAGES) => {},
});

export const InitContextProvider: FC<InitContextProviderType> = ({
  children,
}) => {
  const [theme, setTheme] = useState<THEMES>(THEMES.DARK);
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.EN);

  return (
    <InitContext.Provider value={{ theme, language, setTheme, setLanguage }}>
      {children}
    </InitContext.Provider>
  );
};
