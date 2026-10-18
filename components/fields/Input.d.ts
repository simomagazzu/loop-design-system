export interface InputProps {
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
  type?: string;
}
export declare function Input(props: InputProps): JSX.Element;
