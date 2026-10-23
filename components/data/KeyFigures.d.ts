export interface KeyFiguresProps {
  /** One statement figure, e.g. value "Quasi 40 M€", label "investiti in advertising nel 2025"; breakdown drawn as a proportional bar */
  lead?: { value: string; label: string; breakdown?: Array<{ label: string; value: string; amount?: number }> };
  /** Supporting figures in one row: value + short label */
  items: Array<{ value: string; label: string; icon?: string }>;
  footnote?: string;
  className?: string;
}
/** "Loop in cifre": one sentence with the big figure, its split as a bar, then a single row of facts. */
export declare function KeyFigures(props: KeyFiguresProps): JSX.Element;
