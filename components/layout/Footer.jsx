export function Footer({ logo = "assets/logo-loop-w.svg", about, columns = [], legal }) {
  return (
    <footer className="lp-footer loop-on-navy">
      <div className="lp-container">
        <div className="lp-footer__grid">
          <div><img className="lp-footer__logo" src={logo} alt="LOOP" /><p className="lp-footer__about">{about}</p></div>
          {columns.map(c => (
            <div key={c.title}><h2>{c.title}</h2><ul>{c.links.map(l => <li key={l.label}><a href={l.href || "#"}>{l.label}</a></li>)}</ul></div>
          ))}
        </div>
        <div className="lp-footer__legal">{legal}</div>
      </div>
    </footer>
  );
}
