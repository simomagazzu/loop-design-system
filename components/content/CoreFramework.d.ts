export interface CoreFrameworkProps {
  /** Left pole, default "Dati" */
  left?: string;
  /** Right pole, default "Strategy" */
  right?: string;
  /** The four letters, default Conversion, Optimization, Retention, Expansion (add question for parity with R.E.A.C.H.) */
  items?: Array<{ word: string; question?: string }>;
  claim?: string;
  tone?: "light" | "navy";
  className?: string;
}
/** C.O.R.E. = Framework + its schema (Dati ↔ core ↔ Strategy). Same shell, type and letter row as R.E.A.C.H. */
export declare function CoreFramework(props: CoreFrameworkProps): JSX.Element;
