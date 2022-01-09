import React from "react";
import { ButtonClasses, ButtonSize, IconButtonProps } from "./types";
import classNames from "classnames";
import RootButton from "./RootButton";

export const sizeConfiguration: ButtonClasses<ButtonSize> = {
  Small: "px-1.5 py-1.5",
  Base: "px-3 py-3",
  Large: "px-4 py-4",
};

const IconButton = ({ size = ButtonSize.Base, className, icon, ...rest }: IconButtonProps) => {
  return (
    <RootButton
      className={sizeConfiguration[size]}
      icon={React.cloneElement(icon, { className: classNames("h-5 w-5", classNames) })}
      {...rest}
    />
  );
};

export default IconButton;
