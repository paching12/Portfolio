export const THEMES = {
  DARK: 1,
  LIGHT: 2,
} as const;

export type THEMES = (typeof THEMES)[keyof typeof THEMES];
