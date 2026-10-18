export function FilterChips({ label = "Filtra", options = [], value = "Tutti", onChange, counts = {}, className = "" }) {
  return (
    <div className={"lp-chips " + className} role="group" aria-label={label}>
      {options.map(o => (
        <button key={o} type="button" className="lp-chip" aria-pressed={value === o} onClick={() => onChange && onChange(o)}>
          {o}{counts[o] != null && <span className="lp-chip__count">{counts[o]}</span>}
        </button>
      ))}
    </div>
  );
}
