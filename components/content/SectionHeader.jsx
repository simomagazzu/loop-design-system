export function SectionHeader({ title, intro, action, as = "h2", stack = false, id, className = "" }) {
  const H = as;
  return (
    <div className={"lp-sh" + (stack ? " lp-sh--stack" : "") + (className ? " " + className : "")}>
      <H className={"lp-sh__title " + (as === "h1" ? "loop-h1" : "loop-h2")} id={id}>{title}</H>
      {(intro || action) && <div className="lp-sh__side">{intro && <p className="lp-sh__intro">{intro}</p>}{action}</div>}
    </div>
  );
}
