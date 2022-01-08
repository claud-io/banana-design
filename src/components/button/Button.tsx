import React from "react";
import { ButtonClasses, ButtonProps, ButtonSize, ButtonType } from "./types";
import classNames from "classnames";

export const typeClasses: ButtonClasses<ButtonType> = {
  Base: "text-gray-500 bg-white border rounded border-gray-300 hover:border-blue-400 hover:text-blue-500",
  Primary:
    "text-white bg-primary border rounded border-primary-500 hover:text-white hover:bg-opacity-80",
};

export const sizeClasses: ButtonClasses<ButtonSize> = {
  Small: "px-1.5 py-1 text-sm font-medium",
  Base: "px-3 py-1.5 text-sm font-medium ",
  Large: "px-4 py-2 text-base font-medium",
};

const Button = ({
  size = ButtonSize.Base,
  type = ButtonType.Base,
  onClick,
  children,
  className,
}: ButtonProps) => {
  const _className = classNames(
    typeClasses[type],
    sizeClasses[size],
    className
  );

  return (
    <button type="button" onClick={onClick} className={_className}>
      {children}
    </button>
  );
};

export default Button;
