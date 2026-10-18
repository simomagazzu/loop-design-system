export interface ClientLogoWallProps {
  /** Names, or { name, src } with the client's official logo file (SVG preferred) */
  clients: Array<string | { name: string; src?: string; scale?: number }>;
  /** scale: per-logo zoom to crop file padding (default 1.15; use 1 for logos that fill their file) */
  /** Grid columns on desktop (collapses to 2 on mobile). Default 4 */
  columns?: number;
  /** Render drop zones (<image-slot>) for missing logos; requires image-slot.js on the page */
  slots?: boolean;
  /** Fine print under the wall, e.g. the NDA line */
  note?: string;
  label?: string;
  className?: string;
}
/** Official logo files only, shown in a single ink colour (monochrome filter). Never redraw a logo. */
export declare function ClientLogoWall(props: ClientLogoWallProps): JSX.Element;
