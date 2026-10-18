export interface SectionHeaderProps {
  title: string;
  intro?: string;
  /** Usually a <Button variant="link"/> */
  action?: any;
  as?: "h1" | "h2" | "h3";
  /** Stack title over intro instead of two columns */
  stack?: boolean;
  id?: string;
  className?: string;
}
/** No eyebrow, no kicker. The title carries the section. */
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
