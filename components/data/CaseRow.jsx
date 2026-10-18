import { Icon } from "../icon/Icon.jsx";
import { placeholderize as PH } from "./Stat.jsx";

let __r = 0;
export function CaseRow({ client, title, channels, objective, period, markets, children, defaultOpen = false }) {
  const [on, setOn] = React.useState(defaultOpen);
  const [uid] = React.useState(() => "lp-cr-" + (++__r));
  return (
    <div className="lp-caserow">
      <button type="button" className="lp-caserow__btn" aria-expanded={on} aria-controls={uid} onClick={() => setOn(!on)}>
        <span className="lp-caserow__client">{client}</span>
        <span className="lp-caserow__title">{title}</span>
        <span className="lp-caserow__chan">{channels}</span>
        <Icon name="chevron-down" />
      </button>
      <div id={uid} hidden={!on} className="lp-caserow__panel">
        <dl className="lp-case__meta" style={{ borderTop: 0, paddingTop: 0 }}>
          {[["Obiettivo", objective], ["Periodo", period], ["Canali", channels], ["Mercati", markets]].map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{PH(v)}</dd></div>)}
        </dl>
        <div>{children}</div>
      </div>
    </div>
  );
}
