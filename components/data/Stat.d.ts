export interface StatProps {
  /** e.g. "+130%". Unknown → "[valore]" renders as a placeholder */
  value: string;
  /** Metric name, e.g. "ROAS" */
  label: string;
  period?: string;
  baseline?: string;
  channels?: string;
  markets?: string;
  size?: "md" | "lg";
  className?: string;
}
/** A number is never shown without context: pass period and baseline at minimum. */
export declare function Stat(props: StatProps): JSX.Element;
export declare function placeholderize(v: any): any;
