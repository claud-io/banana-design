import React from "react";
import { ButtonClasses, ButtonProps, ButtonSize } from "./types";
import classNames from "classnames";
import RootButton from "./RootButton";

export const sizeConfiguration: ButtonClasses<ButtonSize> = {
  Small: "px-1.5 py-0.5",
  Default: "px-3 py-1.5",
  Large: "px-4 py-2 text-base",
};

const Button = ({ size = ButtonSize.Default, className, ...rest }: ButtonProps) => {
  return <RootButton className={classNames("font-medium text-sm", sizeConfiguration[size], className)} {...rest} />;
};

export default Button;
