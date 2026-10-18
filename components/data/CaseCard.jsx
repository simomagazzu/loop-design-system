import { Icon } from "../icon/Icon.jsx";

export function CaseCard({ client, logo, sector, headline, result, levers = [], image, slotId, href = "#", featured = false, className = "" }) {
  const Tag = href ? "a" : "article";
  return (
    <Tag href={href} className={"lp-case2" + (featured ? " lp-case2--featured" : "") + (className ? " " + className : "")}>
      <div className="lp-case2__media">
        {image ? <img src={image} alt={"Lavoro per " + client} /> : slotId ? <image-slot id={slotId} shape="rect" placeholder={"Creatività " + client}></image-slot> : <span className="lp-case2__ph">Creatività {client}</span>}
        <span className="lp-case2__brand">{logo ? <img src={logo} alt={client} /> : client}</span>
      </div>
      <div className="lp-case2__body">
        {sector && <span className="lp-case2__sector">{sector}</span>}
        <h3 className="lp-case2__h">{headline}</h3>
        {result && <p className="lp-case2__res"><span className="lp-case2__v">{result.value}</span><span className="lp-case2__m">{result.label}</span></p>}
        <div className="lp-case2__foot">
          <ul className="lp-case2__levers">{levers.map(l => <li key={l}>{l}</li>)}</ul>
          <span className="lp-case2__go">Leggi il caso<Icon name="arrow-right" size="sm" /></span>
        </div>
      </div>
    </Tag>
  );
}
