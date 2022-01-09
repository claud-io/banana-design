import React from "react";

export enum ButtonType {
  Primary = "Primary",
  Base = "Base",
}

export enum ButtonSize {
  Small = "Small",
  Base = "Base",
  Large = "Large",
}

export type ButtonClasses<T extends string> = { [key in T]: string };

export interface RootButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactElement<any>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: ButtonType;
}

export interface ButtonProps extends Omit<RootButtonProps, "icon"> {
  size?: ButtonSize;
}

export interface IconButtonProps extends RootButtonProps {
  size?: ButtonSize;
  icon: React.ReactElement<any>;
}
