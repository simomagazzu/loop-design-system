export interface InsightCardProps {
  series: "In The Loop" | "Creative.Lab" | "Ecom.Lab" | "Podcast";
  title: string;
  /** e.g. "Newsletter · 6 min" */
  meta?: string;
  href?: string;
  className?: string;
}
export declare function InsightCard(props: InsightCardProps): JSX.Element;
