import { forwardRef } from "react";
import { BUTTON_STYLES, type ButtonProps } from "./Button.types";
import "./Button.css";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      style = "cursor-pointer",
      variant = BUTTON_STYLES.PRIMARY,
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`btn btn-${variant} ${style}`}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
