const DEFAULT = [
  { name: "Google", status: "Premier Partner 2026", file: "google-premier-partner.png", h: 1.25, note: "Google Premier Partner: assegnato ogni anno a circa il 3% dei Google Partner di ciascun Paese." },
  { name: "Meta", status: "Business Partner", file: "meta-business-partner.png", h: 1 },
  { name: "TikTok", status: "Marketing Partner", file: "tiktok-marketing-partner.png", h: 0.5 },
  { name: "Klaviyo", status: "Partner · Platinum Master", file: "klaviyo-platinum-master.svg", h: 0.75 },
];
export function PartnerBadgeRow({ partners = DEFAULT, basePath = "", label = "Partner certificati", className = "" }) {
  const notes = partners.filter(p => p.note);
  return (
    <figure className={"lp-partners-wrap " + className} style={{ margin: 0 }}>
      <ul className="lp-partners" aria-label={label}>
        {partners.map(p => {
          const src = p.src || (p.file ? basePath + "assets/partners/" + p.file : null);
          return (
            <li key={p.name} className="lp-partners__item">
              {src ? <img src={src} alt={p.name + " " + p.status} style={{ height: "calc(var(--loop-space-11) * " + (p.h || 1) + ")" }} /> : <span>Badge {p.name}</span>}
            </li>
          );
        })}
      </ul>
      {notes.length > 0 && <figcaption className="lp-partners__note">{notes.map(p => p.note).join(" ")}</figcaption>}
    </figure>
  );
}
