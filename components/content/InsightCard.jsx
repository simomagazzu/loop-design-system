import { Icon } from "../icon/Icon.jsx";

const SERIES = { "In The Loop": "newsletter", "Creative.Lab": "newsletter", "Ecom.Lab": "newsletter", "Podcast": "mic" };
export function InsightCard({ series, title, meta, href = "#", className = "" }) {
  return (
    <a className={"lp-insight " + className} href={href}>
      <span className="lp-insight__series"><Icon name={SERIES[series] || "newsletter"} size="sm" />{series}</span>
      <span className="lp-insight__title">{title}</span>
      {meta && <span className="lp-insight__meta">{meta}</span>}
    </a>
  );
}
