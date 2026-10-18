import { Icon } from "../icon/Icon.jsx";

export function Button({ variant = "primary", size = "md", href, icon, loading = false, disabled = false, children, className = "", ...rest }) {
  const cls = ["lp-btn", "lp-btn--" + variant, size === "sm" ? "lp-btn--sm" : "", className].filter(Boolean).join(" ");
  const content = (
    <>
      {loading && <span className="lp-btn__spinner" aria-hidden="true"></span>}
      <span>{children}</span>
      {icon && !loading && <Icon name={icon} size="sm" />}
    </>
  );
  if (href && !disabled) return <a className={cls} href={href} aria-busy={loading || undefined} {...rest}>{content}</a>;
  return <button type="button" className={cls} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>{content}</button>;
}
