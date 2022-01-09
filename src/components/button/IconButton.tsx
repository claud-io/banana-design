import React from "react";
import { ButtonClasses, ButtonShape, ButtonSize, IconButtonProps } from "./types";
import classNames from "classnames";
import RootButton from "./RootButton";

export const buttonClassesConfiguration: ButtonClasses<ButtonSize> = {
  Small: "px-1.5 py-1.5",
  Default: "px-2 py-2",
  Large: "px-2.5 py-2.5",
};

export const iconClassesConfiguration: ButtonClasses<ButtonSize> = {
  Small: "h-4 w-4",
  Default: "h-5 w-5",
  Large: "h-6 w-6",
};

const IconButton = ({ size = ButtonSize.Default, className, icon, ...rest }: IconButtonProps) => {
  return (
    <RootButton
      className={buttonClassesConfiguration[size]}
      icon={React.cloneElement(icon, {
        className: classNames(iconClassesConfiguration[size], classNames),
      })}
      {...rest}
    />
  );
};

export default IconButton;
