import type { THEMES } from "@shared/types/Themes";
import type { LANGUAGES } from "@shared/types/Languages";

export type InitContextTypeValues = {
  theme: THEMES;
  language: LANGUAGES;
  setTheme: (theme: THEMES) => void;
  setLanguage: (language: LANGUAGES) => void;
};

export type InitContextProviderType = {
  children: React.ReactNode;
};
