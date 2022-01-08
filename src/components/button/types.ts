export type ButtonType = "Primary" | "Base";

export interface ButtonProps {
  type: ButtonType;
  children: React.ReactNode;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
