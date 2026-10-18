export function Levers({ items = [], footnote, className = "" }) {
  return (
    <div className={"lp-levers " + className}>
      <ul className="lp-levers__list">
        {items.map(l => (
          <li key={l.name} className="lp-levers__item">
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
