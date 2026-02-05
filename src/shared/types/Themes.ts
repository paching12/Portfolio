export const THEMES = {
  DARK: 1,
  LIGHT: 2,
} as const;

export type THEME_TYPE = (typeof THEMES)[keyof typeof THEMES];
