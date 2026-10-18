export interface CaseCardProps {
  client: string;
  /** Official client logo (shown in a white chip on the image) */
  logo?: string;
  /** e.g. "Design · Casa" */
  sector?: string;
  /** What we did and why it mattered, one sentence */
  headline: string;
  /** Optional single result, only if approved: { value: "+130%", label: "ROAS su Google Ads" } */
  result?: { value: string; label: string };
  /** Levers activated: Acquisizione, Conversione, Retention, Dati, Strategia */
  levers?: string[];
  /** Real creative or campaign image */
  image?: string;
  /** Drop zone id when no image (needs image-slot.js) */
  slotId?: string;
  href?: string;
  /** Horizontal, navy: for the lead case */
  featured?: boolean;
  className?: string;
}
/** No dates, no metadata grid: brand, image, one sentence, one result at most, levers. */
export declare function CaseCard(props: CaseCardProps): JSX.Element;
