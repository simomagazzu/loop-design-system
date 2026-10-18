export interface ChoiceChipsProps {
  label: string;
  options: string[];
  /** string for single, string[] for multi */
  value: string | string[];
  onChange: (value: any) => void;
  /** false = radiogroup (single), true = toggle buttons (multi) */
  multi?: boolean;
  className?: string;
}
export declare function ChoiceChips(props: ChoiceChipsProps): JSX.Element;
