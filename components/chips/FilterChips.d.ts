export interface FilterChipsProps {
  /** Accessible group label */
  label?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  /** Optional result counts per option */
  counts?: Record<string, number>;
  className?: string;
}
export declare function FilterChips(props: FilterChipsProps): JSX.Element;
