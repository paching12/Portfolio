import type { THEME_TYPE } from "@shared/types/Themes";
import type { LANGUAGE_TYPES } from "@shared/types/Languages";

export type InitContextTypeValues = {
  theme: THEME_TYPE;
  language: LANGUAGE_TYPES;
  setTheme: (theme: THEME_TYPE) => void;
  setLanguage: (language: LANGUAGE_TYPES) => void;
};

export type InitContextProviderType = {
  children: React.ReactNode;
};
