// One anatomy for every LOOP framework: header (acronym + claim) · optional diagram · letter row.
export function Framework({ name, claim, items = [], tone = "light", diagram, className = "" }) {
  return (
    <section className={"lp-fw lp-fw--" + tone + (diagram ? " lp-fw--diagram" : "") + (className ? " " + className : "")} aria-label={name}>
      <header className="lp-fw__head">
        <span className="lp-fw__name">{name}</span>
        {claim && <p className="lp-fw__claim">{claim}</p>}
      </header>
      {diagram && <div className="lp-fw__diagram">{diagram}</div>}
      <ol className="lp-fw__list">
        {items.map(it => (
          <li key={it.word} className="lp-fw__item">
            <span className="lp-fw__letter" aria-hidden="true">{it.word.charAt(0)}</span>
            <span className="lp-fw__word">{it.word}</span>
            {it.question && <span className="lp-fw__q">{it.question}</span>}
          </li>
        ))}
      </ol>
    </section>
  );
}
