export interface TabsProps {
  tabs: Array<{ label: string; content: any }>;
  initial?: number;
  /** aria-label for the tablist */
  label?: string;
  className?: string;
}
/** ARIA tabs: arrow keys, Home/End, roving tabindex. Never hide primary content in tabs. */
export declare function Tabs(props: TabsProps): JSX.Element;
