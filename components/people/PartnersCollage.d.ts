export interface PartnersCollageProps {
  title?: string;
  intro?: string;
  /** The managing partners (first three get photos in the collage) */
  partners: Array<{ name: string; role: string; expertise?: string; photo?: string; linkedin?: string }>;
  /** Drop zones for missing photos (needs image-slot.js) */
  slots?: boolean;
  className?: string;
}
/** Dedicated section for the managing partners, who carry the personal brand: overlapping photo collage + names. */
export declare function PartnersCollage(props: PartnersCollageProps): JSX.Element;
