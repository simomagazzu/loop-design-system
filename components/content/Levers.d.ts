export interface LeversProps {
  /** Acquisizione, Conversione, Retention, Dati, Strategia e Advisory */
  items: Array<{ name: string; what: string; outcome: string }>;
  /** e.g. "Non proponiamo un pacchetto standard: attiviamo solo le leve che servono al singolo progetto." */
  footnote?: string;
  className?: string;
}
/** The five levers: name, what's inside, the business outcome. Ruled rows, outcome in navy. */
export declare function Levers(props: LeversProps): JSX.Element;
