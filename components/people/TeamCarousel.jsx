import { Icon } from "../icon/Icon.jsx";

export function TeamCarousel({ title, people = [], slots = false, className = "" }) {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState(0);
  const step = dir => { const el = ref.current; if (!el) return; const card = el.querySelector("li"); el.scrollBy({ left: dir * (card ? card.offsetWidth * 2 : 300), behavior: "smooth" }); };
  const onScroll = () => { const el = ref.current; if (el) setPos(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth)); };
  return (
    <section className={"lp-tc " + className} aria-label={title || "Team"}>
      <div className="lp-tc__head">
        {title && <h2 className="lp-tc__title">{title}</h2>}
        <div className="lp-tc__nav">
          <button type="button" className="lp-tc__btn" aria-label="Precedenti" onClick={() => step(-1)} disabled={pos <= 0.01}><Icon name="arrow-left" /></button>
          <button type="button" className="lp-tc__btn" aria-label="Successivi" onClick={() => step(1)} disabled={pos >= 0.99}><Icon name="arrow-right" /></button>
        </div>
      </div>
      <ul className="lp-tc__track" ref={ref} onScroll={onScroll} tabIndex={0} aria-label="Persone del team, scorri orizzontalmente">
        {people.map((p, i) => (
          <li key={p.name + i} className={"lp-tc__card lp-tc__card--" + (i % 3)}>
            <div className="lp-tc__photo">
              {p.photo ? <img src={p.photo} alt={p.name} /> : slots ? <image-slot id={"team-" + i} shape="rect" placeholder={"Ritratto " + p.name}></image-slot> : <span className="lp-tc__empty">Ritratto</span>}
            </div>
            <div className="lp-tc__cap"><span className="lp-tc__area">{p.area}</span><b className="lp-tc__name">{p.name}</b><span className="lp-tc__role">{p.role}</span></div>
          </li>
        ))}
      </ul>
      <div className="lp-tc__progress" aria-hidden="true"><i style={{ width: (20 + pos * 80) + "%" }}></i></div>
    </section>
  );
}
