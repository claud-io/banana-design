import React from "react";
import { ButtonClasses, ButtonShape, ButtonType, RootButtonProps } from "./types";
import classNames from "classnames";

export const typeConfiguration: ButtonClasses<ButtonType> = {
  Default: "text-gray-500 bg-white border-gray-300 hover:border-blue-400 hover:text-blue-500",
  Primary: "text-white bg-primary border-primary-500 hover:text-white hover:bg-opacity-80",
};

const RootButton = ({
  bordered = true,
  shape = ButtonShape.Square,
  children,
  className,
  icon,
  onClick,
  type = ButtonType.Default,
}: RootButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        { border: bordered, "rounded-full": shape === ButtonShape.Round, "rounded-sm": shape !== ButtonShape.Round },
        "font-medium text-sm",
        typeConfiguration[type],
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
};

export default RootButton;
