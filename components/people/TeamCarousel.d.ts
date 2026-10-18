export interface TeamCarouselProps {
  title?: string;
  /** Everyone except the managing partners. area = short label of the competence ("Performance", "Creative", "Tracking") */
  people: Array<{ name: string; role: string; area?: string; photo?: string }>;
  slots?: boolean;
  className?: string;
}
/** Scroll-snap carousel, three alternating card heights, arrow buttons + keyboard scroll, progress rule. */
export declare function TeamCarousel(props: TeamCarouselProps): JSX.Element;
