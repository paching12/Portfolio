import { type FC } from "react";
import { BUTTON_STYLES, type ButtonProps } from "./Button.types";
import "./Button.css";

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  style = "cursor-pointer",
  variant = BUTTON_STYLES.PRIMARY,
}) => {
  return (
    <button onClick={onClick} className={`btn btn-${variant} ${style}`}>
      {children}
    </button>
  );
};

export default Button;
