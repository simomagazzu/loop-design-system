export function PersonCard({ name, role, expertise, photo, slotId, linkedin, featured = false, className = "" }) {
  return (
    <figure className={"lp-person2" + (featured ? " lp-person2--featured" : "") + (className ? " " + className : "")}>
      <div className="lp-person2__photo">
        {photo ? <img src={photo} alt={name} />
          : slotId ? <image-slot id={slotId} shape="rect" placeholder={"Ritratto " + name}></image-slot>
          : <span className="lp-person2__ph">Ritratto {name}</span>}
      </div>
      <figcaption className="lp-person2__cap">
        <span className="lp-person2__name">{name}</span>
        <span className="lp-person2__role">{role}</span>
        {expertise && <span className="lp-person2__exp">{expertise}</span>}
        {linkedin && <a className="lp-person2__in" href={linkedin}>LinkedIn</a>}
      </figcaption>
    </figure>
  );
}

export function TeamGrid({ people = [], slots = false, className = "" }) {
  return (
    <ul className={"lp-team " + className}>
      {people.map((p, i) => (
        <li key={p.name}><PersonCard {...p} featured={p.featured} slotId={slots ? "person-" + p.name.toLowerCase().replace(/[^a-z]+/g, "-") : undefined} /></li>
      ))}
    </ul>
  );
}
