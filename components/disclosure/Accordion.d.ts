export interface AccordionProps {
  items: Array<{ title: string; content: any }>;
  /** allow several panels open at once */
  multiple?: boolean;
  /** indexes open on first render */
  defaultOpen?: number[];
  headingLevel?: 2 | 3 | 4;
  className?: string;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
