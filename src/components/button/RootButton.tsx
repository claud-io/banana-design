import React from "react";
import { ButtonClasses, ButtonType, RootButtonProps } from "./types";
import classNames from "classnames";

export const typeConfiguration: ButtonClasses<ButtonType> = {
  Default: "text-gray-500 bg-white border rounded border-gray-300 hover:border-blue-400 hover:text-blue-500",
  Primary: "text-white bg-primary border rounded border-primary-500 hover:text-white hover:bg-opacity-80",
};

const RootButton = ({ children, className, icon, onClick, type = ButtonType.Default }: RootButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames("font-medium text-sm", typeConfiguration[type], className)}
    >
      {icon}
      {children}
    </button>
  );
};

export default RootButton;
