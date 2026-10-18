export interface NavItem { label: string; href?: string; desc?: string; items?: NavItem[] }
export interface HeaderProps {
  /** Path to the colour logo, relative to the page */
  logo?: string;
  nav: NavItem[];
  cta?: { label: string; href: string };
}
/** Sticky solid header. Dropdowns open on click/Enter, close on Escape/outside click. Mobile menu below 960px. */
export declare function Header(props: HeaderProps): JSX.Element;
