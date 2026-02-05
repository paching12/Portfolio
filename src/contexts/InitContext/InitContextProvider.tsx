import { useState, type FC } from "react";
import type { InitContextProviderType } from "./IniContext.types";
import { THEMES } from "@shared/types/Themes";
import { LANGUAGES } from "@shared/types/Languages";
import { InitContext } from "./InitContext";

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
