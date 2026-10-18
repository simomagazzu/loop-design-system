import { Icon } from "../icon/Icon.jsx";

// single → radiogroup semantics (arrow keys move); multi → toggle buttons (aria-pressed)
export function ChoiceChips({ label, options = [], value, onChange, multi = false, className = "" }) {
  const refs = React.useRef([]);
  const sel = multi ? (value || []) : value;
  const isOn = o => multi ? sel.includes(o) : sel === o;
  const pick = o => onChange && onChange(multi ? (isOn(o) ? sel.filter(x => x !== o) : [...sel, o]) : o);
  const onKey = (e, i) => {
    if (multi) return;
    const d = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const n = (i + d + options.length) % options.length;
    pick(options[n]); refs.current[n] && refs.current[n].focus();
  };
  const activeIdx = Math.max(0, options.findIndex(isOn));
  return (
    <div className={"lp-field " + className}>
      <span className="lp-field__label" id={label ? "lbl-" + label.replace(/\W/g, "") : undefined}>{label}</span>
      <div className="lp-chips" role={multi ? "group" : "radiogroup"} aria-labelledby={label ? "lbl-" + label.replace(/\W/g, "") : undefined}>
        {options.map((o, i) => (
          <button key={o} type="button" ref={el => refs.current[i] = el} className="lp-chip"
            role={multi ? undefined : "radio"}
            aria-checked={multi ? undefined : isOn(o)}
            aria-pressed={multi ? isOn(o) : undefined}
            tabIndex={multi ? 0 : (i === activeIdx ? 0 : -1)}
            onClick={() => pick(o)} onKeyDown={e => onKey(e, i)}>
            {isOn(o) && <Icon name="check" size="sm" />}{o}
          </button>
        ))}
      </div>
    </div>
  );
}
