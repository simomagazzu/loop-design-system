export function WorkFrame({ format = "feed", label, client, channel, signature = false, children, className = "" }) {
  const cls = ["lp-frame", "lp-frame--" + format, signature ? "lp-frame--sig" : "", className].filter(Boolean).join(" ");
  return (
    <figure className={cls} style={{ margin: 0 }}>
      <div className="lp-frame__inner">
        {children || <span className="lp-frame__label">{label || "[Creatività · cliente]"}</span>}
      </div>
      {(client || channel) && <figcaption className="lp-frame__cap"><span>{client}</span><span>{channel}</span></figcaption>}
    </figure>
  );
}
