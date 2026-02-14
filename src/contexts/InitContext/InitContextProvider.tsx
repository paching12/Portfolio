import { useEffect, useMemo, useReducer, useState, type FC } from "react";
import type { InitContextProviderType } from "./IniContext.types";
import { InitContext } from "./InitContext";
import { THEMES, type THEME_TYPE } from "@shared/types/Themes";
import { useTranslation } from "react-i18next";
import {
  initialState,
  LanguageReducer,
} from "@reducers/languageReducer/languageReducer";
import { ActionPayloadTypes } from "@actions/languages";
import { type LANGUAGE_TYPES } from "@shared/types/Languages";
import {
  getNewLanguageList,
  normalizeLanguage,
} from "@utils/locales/LanguagesHelpers";
import { languageNames } from "@utils/locales/settings";
export const InitContextProvider: FC<InitContextProviderType> = ({
  children,
}) => {
  const [theme, setTheme] = useState<THEME_TYPE>(THEMES.DARK);
  const { i18n } = useTranslation(); // not passing any namespace will use the defaultNS (by default set to 'translation')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedLanguagei18n = i18n.language;
  const [{ currentLanguage }, dispatch] = useReducer(
    LanguageReducer,
    initialState,
  );
  const availableLanguages = useMemo(
    () => getNewLanguageList(languageNames, currentLanguage),
    [currentLanguage],
  );

  const setCurrentLanguage = (currentLanguage: LANGUAGE_TYPES) => {
    dispatch({
      type: ActionPayloadTypes.SET_LANGUAGE,
      payload: currentLanguage as LANGUAGE_TYPES,
    });

    i18n.changeLanguage(currentLanguage);
  };

  useEffect(() => {
    setCurrentLanguage(normalizeLanguage(selectedLanguagei18n));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InitContext.Provider
      value={{
        theme,
        language: currentLanguage,
        setTheme,
        setLanguage: setCurrentLanguage,
        availableLanguages,
      }}
    >
      {children}
    </InitContext.Provider>
  );
};
