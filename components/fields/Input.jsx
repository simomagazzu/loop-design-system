import { Icon } from "../icon/Icon.jsx";

let __id = 0;
export function Input({ label, help, error, required = false, id, className = "", ...rest }) {
  const [fid] = React.useState(() => id || "lp-input-" + (++__id));
  const helpId = help ? fid + "-help" : undefined;
  const errId = error ? fid + "-err" : undefined;
  const describedBy = [helpId, errId].filter(Boolean).join(" ") || undefined;
  return (
    <div className={"lp-field" + (error ? " lp-field--error" : "") + (className ? " " + className : "")}>
      <label className="lp-field__label" htmlFor={fid}>{label}{required && <span className="lp-field__req"> *</span>}</label>
      <input id={fid} className="lp-input" required={required} aria-invalid={error ? "true" : undefined} aria-describedby={describedBy} {...rest} />
      {help && <span id={helpId} className="lp-field__help">{help}</span>}
      {error && <span id={errId} className="lp-field__error" role="alert"><Icon name="close" size="sm" />{error}</span>}
    </div>
  );
}
