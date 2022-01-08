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

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  className?: string;
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
