export interface FrameworkProps {
  /** "C.O.R.E." or "R.E.A.C.H." */
  name: string;
  /** One line: what the framework does */
  claim?: string;
  /** One entry per letter; the first letter of word is set large */
  items: Array<{ word: string; question?: string }>;
  tone?: "light" | "navy";
  /** Optional schema shown between header and letter row (CoreFramework passes its diagram here) */
  diagram?: any;
  className?: string;
}
/** Shared anatomy for LOOP's frameworks: acronym + claim, optional diagram, letter row. C.O.R.E. and R.E.A.C.H. always use this. */
export declare function Framework(props: FrameworkProps): JSX.Element;
