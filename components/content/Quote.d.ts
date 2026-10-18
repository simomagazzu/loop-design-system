export interface QuoteProps {
  /** Verbatim, approved quote only */
  text: string;
  name: string;
  role?: string;
  company?: string;
  className?: string;
}
export declare function Quote(props: QuoteProps): JSX.Element;
