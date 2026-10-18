import { Icon } from "../icon/Icon.jsx";
import { Button } from "../button/Button.jsx";

export function Header({ logo = "assets/logo-loop-color.svg", nav = [], cta = { label: "Richiedi un incontro", href: "#contatti" } }) {
  const [open, setOpen] = React.useState(null);
  const [mobile, setMobile] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(null); };
    const onKey = e => { if (e.key === "Escape") { if (open !== null) { const b = ref.current && ref.current.querySelector('[aria-expanded="true"].lp-nav__link'); setOpen(null); b && b.focus(); } setMobile(false); } };
    document.addEventListener("click", onDoc); document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("click", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);
  return (
    <header className="lp-header" ref={ref}>
      <div className="lp-container">
        <div className="lp-header__in">
          <a href="#top" className="lp-header__logo" aria-label="LOOP, home"><img src={logo} alt="LOOP" /></a>
          <nav aria-label="Principale">
            <ul className="lp-nav">
              {nav.map((n, i) => (
                <li key={n.label} className="lp-nav__item">
                  {n.items ? (
                    <>
                      <button type="button" className="lp-nav__link" aria-expanded={open === i} aria-controls={"lp-menu-" + i} onClick={() => setOpen(open === i ? null : i)}>{n.label}<Icon name="chevron-down" size="sm" /></button>
                      {open === i && <ul className="lp-menu" id={"lp-menu-" + i}>{n.items.map(s => <li key={s.label}><a href={s.href || "#"} onClick={() => setOpen(null)}><b>{s.label}</b>{s.desc && <span>{s.desc}</span>}</a></li>)}</ul>}
                    </>
                  ) : <a className="lp-nav__link" href={n.href || "#"}>{n.label}</a>}
                </li>
              ))}
            </ul>
          </nav>
          <div className="lp-header__actions">
            <Button href={cta.href} size="sm">{cta.label}</Button>
            <button type="button" className="lp-btn lp-btn--secondary lp-btn--sm lp-header__burger" aria-expanded={mobile} aria-controls="lp-mobile" onClick={() => setMobile(!mobile)}>
              <Icon name={mobile ? "close" : "menu"} size="sm" /><span>Menu</span>
            </button>
          </div>
        </div>
        <div id="lp-mobile" className="lp-mobile" hidden={!mobile}>
          <ul>{nav.flatMap(n => n.items ? n.items : [n]).map(n => <li key={n.label}><a href={n.href || "#"} onClick={() => setMobile(false)}>{n.label}</a></li>)}</ul>
          <Button href={cta.href} onClick={() => setMobile(false)}>{cta.label}</Button>
        </div>
      </div>
    </header>
  );
}
