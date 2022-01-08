import React from "react";
import { ButtonProps } from "./types";
import { getStyle } from "./utils";

const Button = ({
  type = "Base",
  onClick,
  children,
  className = "",
}: ButtonProps) => {
  const _className = `${getStyle(type)} ${className}`;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 text-sm font-medium ${_className} `}
    >
      {children}
    </button>
  );
};

export default Button;
