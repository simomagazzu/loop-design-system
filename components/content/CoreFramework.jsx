import { Framework } from "./Framework.jsx";

const DEFAULT_ITEMS = [
  { word: "Conversion" }, { word: "Optimization" }, { word: "Retention" }, { word: "Expansion" },
];

function CoreDiagram({ left, right, letters }) {
  return (
    <svg viewBox="0 0 720 220" className="lp-core__svg" role="img" aria-label={left + " e " + right + " collegati al nucleo C.O.R.E."}>
      <defs><marker id="lpc-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 1L9 5L0 9z" className="lp-core__head" /></marker></defs>
      <path className="lp-core__arc" d="M150 78 C 220 4, 500 4, 570 78" markerStart="url(#lpc-a)" markerEnd="url(#lpc-a)" />
      <path className="lp-core__arc" d="M150 142 C 220 216, 500 216, 570 142" markerStart="url(#lpc-a)" markerEnd="url(#lpc-a)" />
      <line className="lp-core__ln" x1="196" y1="110" x2="282" y2="110" markerStart="url(#lpc-a)" markerEnd="url(#lpc-a)" />
      <line className="lp-core__ln" x1="438" y1="110" x2="524" y2="110" markerStart="url(#lpc-a)" markerEnd="url(#lpc-a)" />
      <rect className="lp-core__pole" x="40" y="86" width="150" height="48" rx="8" />
      <text className="lp-core__side" x="115" y="117">{left}</text>
      <rect className="lp-core__pole" x="530" y="86" width="150" height="48" rx="8" />
      <text className="lp-core__side" x="605" y="117">{right}</text>
      <rect className="lp-core__box" x="290" y="32" width="140" height="156" rx="12" />
      <g className="lp-core__in">
        <line x1="335" y1="64" x2="385" y2="64" /><line x1="335" y1="156" x2="385" y2="156" />
        <line x1="318" y1="82" x2="318" y2="138" /><line x1="402" y1="82" x2="402" y2="138" />
        <line x1="334" y1="82" x2="386" y2="138" /><line x1="386" y1="82" x2="334" y2="138" />
      </g>
      <text className="lp-core__l" x="318" y="74">{letters[0]}</text>
      <text className="lp-core__l" x="402" y="74">{letters[1]}</text>
      <text className="lp-core__l" x="318" y="166">{letters[2]}</text>
      <text className="lp-core__l" x="402" y="166">{letters[3]}</text>
    </svg>
  );
}

export function CoreFramework({ left = "Dati", right = "Strategy", items = DEFAULT_ITEMS, claim, tone = "light", className = "" }) {
  return <Framework name="C.O.R.E." claim={claim} items={items} tone={tone} className={className}
    diagram={<CoreDiagram left={left} right={right} letters={items.map(i => i.word.charAt(0))} />} />;
}
