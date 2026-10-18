export interface WorkFrameProps {
  /** feed 4:5 · story 9:16 · email 3:5 · dashboard 16:10 · wide 16:9 */
  format?: "feed" | "story" | "email" | "dashboard" | "wide";
  /** Placeholder label, defaults to "[Creatività · cliente]" */
  label?: string;
  client?: string;
  channel?: string;
  /** Spigolo signature: square top-left corner. Max 2–3 per page. */
  signature?: boolean;
  /** <img> or <image-slot> filling the frame */
  children?: any;
  className?: string;
}
export declare function WorkFrame(props: WorkFrameProps): JSX.Element;
