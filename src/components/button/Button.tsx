import React from "react";
import { ButtonConfiguration, ButtonShape, ButtonSize, ButtonType, ButtonProps } from "./types";
import classNames from "classnames";

export const typeClasses: ButtonConfiguration<ButtonType> = {
  Default: "text-gray-500 bg-white border-gray-300 hover:border-blue-400 hover:text-blue-500",
  Primary: "text-white bg-primary border-primary hover:text-white hover:bg-opacity-90",
};
export const sizeClasses: ButtonConfiguration<ButtonSize> = {
  Small: "px-2 py-0.5",
  Default: "px-3 py-1.5",
  Large: "px-4 py-2 text-base",
};

export const iconButtonSizeClasses: ButtonConfiguration<ButtonSize> = {
  Small: "p-1.5",
  Default: "p-2",
  Large: "p-2.5",
};

export const iconSizeClasses: ButtonConfiguration<ButtonSize> = {
  Small: "h-3.5. w-3.5",
  Default: "h-4 w-4",
  Large: "h-5 w-5",
};

const Button = ({
  icon,
  className,
  onClick,
  children,
  bordered = true,
  shape = ButtonShape.Square,
  type = ButtonType.Default,
  size = ButtonSize.Default,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "flex items-center gap-2 font-medium text-sm leading-6 hover:shadow-sm",
        {
          border: bordered,
          "rounded-full": shape === ButtonShape.Round,
          "rounded-sm": shape !== ButtonShape.Round,
          [sizeClasses[size]]: children !== undefined,
          [iconButtonSizeClasses[size]]: children === undefined,
        },
        typeClasses[type],
        className
      )}
    >
      {icon &&
        React.cloneElement(icon, {
          className: classNames(iconSizeClasses[size], classNames),
        })}
      {children}
    </button>
  );
};

export default Button;
