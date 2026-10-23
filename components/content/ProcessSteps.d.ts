export interface ProcessStepsProps {
  /** "Come lavoriamo nella pratica": Capiamo l'azienda → … → Impariamo e iteriamo */
  steps: Array<{ title: string; desc: string; icon?: string }>;
  /** Closing line under the track */
  note?: string;
  className?: string;
}
/** A single track of steps on one rule; a return line under it shows the last step feeding the first. */
export declare function ProcessSteps(props: ProcessStepsProps): JSX.Element;
