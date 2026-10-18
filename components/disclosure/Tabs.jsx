let __t = 0;
export function Tabs({ tabs = [], initial = 0, label, className = "" }) {
  const [i, setI] = React.useState(initial);
  const [uid] = React.useState(() => "lp-tabs-" + (++__t));
  const refs = React.useRef([]);
  const onKey = e => {
    const n = tabs.length;
    let k = null;
    if (e.key === "ArrowRight") k = (i + 1) % n;
    if (e.key === "ArrowLeft") k = (i - 1 + n) % n;
    if (e.key === "Home") k = 0;
    if (e.key === "End") k = n - 1;
    if (k === null) return;
    e.preventDefault(); setI(k); refs.current[k] && refs.current[k].focus();
  };
  return (
    <div className={"lp-tabs " + className}>
      <div className="lp-tabs__list" role="tablist" aria-label={label} onKeyDown={onKey}>
        {tabs.map((t, k) => (
          <button key={t.label} ref={el => refs.current[k] = el} role="tab" id={uid + "-t" + k} aria-controls={uid + "-p" + k}
            aria-selected={k === i} tabIndex={k === i ? 0 : -1} className="lp-tab" onClick={() => setI(k)}>{t.label}</button>
        ))}
      </div>
      {tabs.map((t, k) => (
        <div key={t.label} role="tabpanel" id={uid + "-p" + k} aria-labelledby={uid + "-t" + k} hidden={k !== i} tabIndex={0} className="lp-tabs__panel">{t.content}</div>
      ))}
    </div>
  );
}
