export interface ButtonProps {
  /** primary = navy fill · secondary = outline · link = tertiary text link */
  variant?: "primary" | "secondary" | "link";
  size?: "md" | "sm";
  /** Renders an <a> when set */
  href?: string;
  /** Optional trailing icon name (e.g. "arrow-right"). Never inside a chip. */
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: any) => void;
  type?: "button" | "submit";
  children?: any;
  className?: string;
}
export declare function Button(props: ButtonProps): JSX.Element;
