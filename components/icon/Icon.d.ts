export type IconName = "arrow-right" | "arrow-left" | "arrow-up-right" | "arrow-down" | "chevron-down" | "plus" | "minus" | "close" | "check" | "menu" | "search" | "chart-up" | "target" | "megaphone" | "cursor" | "automation" | "strategy" | "mail" | "play" | "calendar" | "user" | "globe" | "mic" | "download" | "external" | "euro" | "phone" | "filter" | "clock" | "newsletter";
export interface IconProps {
  /** Icon from the LOOP set (assets/icons/) */
  name: IconName;
  /** sm 16 · md 20 · lg 24 */
  size?: "sm" | "md" | "lg";
  /** Accessible label. Omit for decorative icons (aria-hidden). */
  label?: string;
  className?: string;
}
export declare function Icon(props: IconProps): JSX.Element | null;
export declare const ICON_NAMES: IconName[];
