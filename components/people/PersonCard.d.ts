export interface PersonCardProps {
  name: string;
  /** e.g. "Managing Partner" or "Head of Performance" */
  role: string;
  /** Area of expertise, e.g. "Meta Advertising" */
  expertise?: string;
  /** Portrait, 4:5, natural light, neutral background */
  photo?: string;
  /** Renders an <image-slot> drop zone when no photo (needs image-slot.js) */
  slotId?: string;
  linkedin?: string;
  /** Managing partners: navy caption band */
  featured?: boolean;
  className?: string;
}
export declare function PersonCard(props: PersonCardProps): JSX.Element;
export interface TeamGridProps {
  people: PersonCardProps[];
  /** Use image-slot drop zones for missing portraits */
  slots?: boolean;
  className?: string;
}
/** Partners first (featured), then heads of area. 3 columns desktop, 2 mobile. */
export declare function TeamGrid(props: TeamGridProps): JSX.Element;
