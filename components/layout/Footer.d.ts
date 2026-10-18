export interface FooterProps {
  /** Path to the white logo */
  logo?: string;
  about?: string;
  columns: Array<{ title: string; links: Array<{ label: string; href?: string }> }>;
  legal?: any;
}
export declare function Footer(props: FooterProps): JSX.Element;
