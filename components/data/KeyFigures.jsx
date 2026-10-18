export function KeyFigures({ lead, items = [], footnote, className = "" }) {
  const total = lead && lead.breakdown ? lead.breakdown.reduce((a, b) => a + (b.amount || 0), 0) : 0;
  return (
    <div className={"lp-figs " + className}>
      {lead && (
        <div className="lp-figs__lead">
          <p className="lp-figs__statement"><span className="lp-figs__big">{lead.value}</span> {lead.label}</p>
          {lead.breakdown && (
            <div className="lp-figs__split">
              <div className="lp-figs__bar" aria-hidden="true">{lead.breakdown.map((b, i) => <i key={b.label} className={"lp-figs__seg lp-figs__seg--" + i} style={{ flexGrow: b.amount || 1 }}></i>)}</div>
              <ul className="lp-figs__legend">{lead.breakdown.map((b, i) => <li key={b.label}><i className={"lp-figs__dot lp-figs__seg--" + i}></i><b>{b.label}</b><span className="loop-mono">{b.value}</span></li>)}</ul>
            </div>
          )}
        </div>
      )}
      <ul className="lp-figs__row">
        {items.map(i => <li key={i.label}><span className="lp-figs__v">{i.value}</span><span className="lp-figs__l">{i.label}</span></li>)}
      </ul>
      {footnote && <p className="lp-figs__foot">{footnote}</p>}
    </div>
  );
}
