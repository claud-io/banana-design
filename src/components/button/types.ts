import React from "react";

export enum ButtonType {
  Primary = "Primary",
  Default = "Default",
}

export enum ButtonSize {
  Small = "Small",
  Default = "Default",
  Large = "Large",
}

export enum ButtonShape {
  Square = "Square",
  Round = "Round",
}

export type ButtonClasses<T extends string> = { [key in T]: string };

export interface RootButtonProps {
  bordered?: boolean;
  shape?: ButtonShape;
  children: React.ReactNode;
  icon?: React.ReactElement<any>;
  type?: ButtonType;
  size?: ButtonSize;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface ButtonProps extends Omit<RootButtonProps, "icon" | "shape"> {}

export interface IconButtonProps extends Omit<RootButtonProps, "icon"> {
  icon: React.ReactElement<any>;
}
