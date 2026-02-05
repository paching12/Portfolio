import { useState, type FC } from "react";
import type { InitContextProviderType } from "./IniContext.types";
import { InitContext } from "./InitContext";
import { THEMES, type THEME_TYPE } from "@shared/types/Themes";
import { LANGUAGES, type LANGUAGE_TYPES } from "@shared/types/Languages";

export const InitContextProvider: FC<InitContextProviderType> = ({
  children,
}) => {
  const [theme, setTheme] = useState<THEME_TYPE>(THEMES.DARK);
  const [language, setLanguage] = useState<LANGUAGE_TYPES>(LANGUAGES.EN);

  return (
    <InitContext.Provider value={{ theme, language, setTheme, setLanguage }}>
      {children}
    </InitContext.Provider>
  );
};
