export interface CaseRowProps {
  client: string;
  title: string;
  channels?: string;
  objective?: string;
  period?: string;
  markets?: string;
  defaultOpen?: boolean;
  /** Expanded content: stats, frames */
  children?: any;
}
export declare function CaseRow(props: CaseRowProps): JSX.Element;
