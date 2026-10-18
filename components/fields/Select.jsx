import { Icon } from "../icon/Icon.jsx";

let __id = 0;
export function Select({ label, help, error, required = false, id, className = "", options = [], placeholder, ...rest }) {
  const [fid] = React.useState(() => id || "lp-select-" + (++__id));
  const helpId = help ? fid + "-help" : undefined;
  const errId = error ? fid + "-err" : undefined;
  const describedBy = [helpId, errId].filter(Boolean).join(" ") || undefined;
  return (
    <div className={"lp-field" + (error ? " lp-field--error" : "") + (className ? " " + className : "")}>
      <label className="lp-field__label" htmlFor={fid}>{label}{required && <span className="lp-field__req"> *</span>}</label>
      <div className="lp-select-wrap">
        <select id={fid} className="lp-select" required={required} aria-invalid={error ? "true" : undefined} aria-describedby={describedBy} {...rest}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map(o => typeof o === "string" ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <Icon name="chevron-down" size="sm" />
      </div>
      {help && <span id={helpId} className="lp-field__help">{help}</span>}
      {error && <span id={errId} className="lp-field__error" role="alert"><Icon name="close" size="sm" />{error}</span>}
    </div>
  );
}
