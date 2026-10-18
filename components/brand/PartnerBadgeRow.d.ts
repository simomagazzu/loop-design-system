export interface Partner { name: string; status: string; note?: string; src?: string; file?: string; /** optical height multiplier, 1 = 96px */ h?: number }
export interface PartnerBadgeRowProps {
  /** Defaults to LOOP's four statuses with the official badges in assets/partners/ */
  partners?: Partner[];
  /** Path from the page to the design-system root, e.g. "../../" */
  basePath?: string;
  label?: string;
  className?: string;
}
/** Official badges only, unaltered. Equal tiles, badges centred and optically balanced (per-badge h); no repeated text labels; notes become one caption. */
export declare function PartnerBadgeRow(props: PartnerBadgeRowProps): JSX.Element;
