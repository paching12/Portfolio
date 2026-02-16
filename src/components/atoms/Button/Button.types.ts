export const BUTTON_STYLES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
};

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode | string;
  variant?: (typeof BUTTON_STYLES)[keyof typeof BUTTON_STYLES];
  style?: string;
};
