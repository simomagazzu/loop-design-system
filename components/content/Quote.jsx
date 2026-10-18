export function Quote({ text, name, role, company, className = "" }) {
  return (
    <figure className={"lp-quote " + className}>
      <blockquote className="lp-quote__text">“{text}”</blockquote>
      <figcaption className="lp-quote__who"><span className="lp-quote__name">{name}</span><span className="lp-quote__role">{[role, company].filter(Boolean).join(", ")}</span></figcaption>
    </figure>
  );
}
