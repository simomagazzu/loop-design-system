export function PartnersCollage({ title, intro, partners = [], slots = false, className = "" }) {
  return (
    <section className={"lp-pc " + className} aria-label={title || "Partner"}>
      <div className="lp-pc__photos">
        {partners.slice(0, 3).map((p, i) => (
          <figure key={p.name} className={"lp-pc__ph lp-pc__ph--" + i}>
            {p.photo ? <img src={p.photo} alt={p.name} /> : slots ? <image-slot id={"partner-" + p.name.toLowerCase().replace(/[^a-z]+/g, "-")} shape="rect" placeholder={"Foto " + p.name}></image-slot> : <span className="lp-pc__empty">Foto {p.name}</span>}
            <figcaption className="lp-pc__tag">{p.name}</figcaption>
          </figure>
        ))}
      </div>
      <div className="lp-pc__text">
        {title && <h2 className="lp-pc__title">{title}</h2>}
        {intro && <p className="lp-pc__intro">{intro}</p>}
        <ul className="lp-pc__list">
          {partners.map(p => (
            <li key={p.name}><b>{p.name}</b><span>{p.role}{p.expertise ? " · " + p.expertise : ""}</span>{p.linkedin && <a href={p.linkedin}>LinkedIn</a>}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
