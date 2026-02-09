import { useState, type FC } from "react";
import type { InitContextProviderType } from "./IniContext.types";
import { InitContext } from "./InitContext";
import { THEMES, type THEME_TYPE } from "@shared/types/Themes";
import { LANGUAGES, type LANGUAGE_TYPES } from "@shared/types/Languages";
import { useTranslation } from "react-i18next";
export const InitContextProvider: FC<InitContextProviderType> = ({
  children,
}) => {
  const [theme, setTheme] = useState<THEME_TYPE>(THEMES.DARK);
  const { i18n } = useTranslation(); // not passing any namespace will use the defaultNS (by default set to 'translation')
  const [language, setLanguage] = useState<LANGUAGE_TYPES>(
    (i18n.language as LANGUAGE_TYPES) || LANGUAGES.EN,
  );

  return (
    <InitContext.Provider value={{ theme, language, setTheme, setLanguage }}>
      {children}
    </InitContext.Provider>
  );
};
