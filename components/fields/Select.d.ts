export interface SelectProps {
  label: string;
  /** Helper text under the control */
  help?: string;
  /** Error message; sets aria-invalid and the danger border */
  error?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  className?: string;
  options: Array<string | { value: string; label: string }>;
}
export declare function Select(props: SelectProps): JSX.Element;
