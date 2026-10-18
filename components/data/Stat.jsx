const PH = v => (v == null || v === "") ? <span className="loop-placeholder">[da confermare]</span> : (/^\[.*\]$/.test(String(v)) ? <span className="loop-placeholder">{v}</span> : v);

export function Stat({ value, label, period, baseline, channels, markets, size = "md", className = "" }) {
  const rows = [["Periodo", period], ["Baseline", baseline], ["Canali", channels], ["Mercati", markets]].filter(r => r[1] !== undefined);
  return (
    <div className={"lp-stat" + (size === "lg" ? " lp-stat--lg" : "") + (className ? " " + className : "")}>
      <span className="lp-stat__value">{PH(value)}</span>
      <span className="lp-stat__label">{label}</span>
      {rows.length > 0 && <dl className="lp-stat__ctx">{rows.map(([k, v]) => <React.Fragment key={k}><dt>{k}</dt><dd>{PH(v)}</dd></React.Fragment>)}</dl>}
    </div>
  );
}
export { PH as placeholderize };
