import { Icon } from "../icon/Icon.jsx";

const LEVER_ICONS = { "Acquisizione": "megaphone", "Conversione": "cursor", "Retention": "automation", "Dati": "chart-up", "Strategia e Advisory": "strategy", "Strategia": "strategy" };
export function Levers({ items = [], footnote, className = "" }) {
  return (
    <div className={"lp-levers " + className}>
      <ul className="lp-levers__list">
        {items.map(l => (
          <li key={l.name} className="lp-levers__item">
            <span className="lp-levers__ic"><Icon name={l.icon || LEVER_ICONS[l.name] || "target"} size="lg" /></span>
            <h3 className="lp-levers__name">{l.name}</h3>
            <p className="lp-levers__what">{l.what}</p>
            <p className="lp-levers__out">{l.outcome}</p>
          </li>
        ))}
      </ul>
      {footnote && <p className="lp-levers__foot">{footnote}</p>}
    </div>
  );
}
