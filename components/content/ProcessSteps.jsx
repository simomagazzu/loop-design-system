import { Icon } from "../icon/Icon.jsx";

const STEP_ICONS = ["search", "target", "filter", "megaphone", "chart-up", "automation"];
export function ProcessSteps({ steps = [], note, className = "" }) {
  return (
    <div className={"lp-steps " + className}>
      <ol className="lp-steps__list">
        {steps.map((s, i) => (
          <li key={s.title} className={"lp-steps__item" + (i === steps.length - 1 ? " lp-steps__item--last" : "")}>
            <span className="lp-steps__n"><Icon name={s.icon || STEP_ICONS[i] || "check"} /></span>
            <h3 className="lp-steps__t">{s.title}</h3>
            <p className="lp-steps__d">{s.desc}</p>
          </li>
        ))}
      </ol>
      <div className="lp-steps__return" aria-hidden="true"><span></span></div>
      {note && <p className="lp-steps__note">{note}</p>}
    </div>
  );
}
