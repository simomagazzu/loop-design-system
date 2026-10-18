import { Icon } from "../icon/Icon.jsx";

let __a = 0;
export function Accordion({ items = [], multiple = false, defaultOpen = [], headingLevel = 3, className = "" }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [uid] = React.useState(() => "lp-acc-" + (++__a));
  const H = "h" + headingLevel;
  const toggle = k => setOpen(o => o.includes(k) ? o.filter(x => x !== k) : (multiple ? [...o, k] : [k]));
  return (
    <div className={"lp-acc " + className}>
      {items.map((it, k) => {
        const on = open.includes(k);
        return (
          <div key={it.title} className="lp-acc__item">
            <H style={{ margin: 0, font: "inherit" }}>
              <button type="button" className="lp-acc__btn" id={uid + "-b" + k} aria-expanded={on} aria-controls={uid + "-p" + k} onClick={() => toggle(k)}>
                <span>{it.title}</span><Icon name="plus" />
              </button>
            </H>
            <div id={uid + "-p" + k} role="region" aria-labelledby={uid + "-b" + k} hidden={!on} className="lp-acc__panel">{it.content}</div>
          </div>
        );
      })}
    </div>
  );
}
