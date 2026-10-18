export function ClientLogoWall({ clients = [], columns = 4, slots = false, note, label = "Clienti", className = "" }) {
  return (
    <figure className={"lp-logos2 " + className} style={{ margin: 0 }}>
      <ul className="lp-logos2__grid" style={{ gridTemplateColumns: "repeat(" + columns + ", minmax(0, 1fr))" }} aria-label={label}>
        {clients.map(c => {
          const name = typeof c === "string" ? c : c.name;
          const src = typeof c === "string" ? null : c.src;
          const scale = typeof c === "string" ? null : c.scale;
          const id = "logo-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <li key={name} className="lp-logos2__tile">
              {src ? <img src={src} alt={name} style={scale ? { "--logo-scale": scale } : undefined} />
                : slots ? <image-slot id={id} shape="rect" fit="contain" placeholder={"Logo " + name}></image-slot>
                : <span className="lp-logos2__ph"><span className="lp-logos2__mark" aria-hidden="true"></span>{name}</span>}
            </li>
          );
        })}
      </ul>
      {note && <figcaption className="lp-logos2__note">{note}</figcaption>}
    </figure>
  );
}
