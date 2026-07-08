import Reveal from "./Reveal";
import { allTech } from "../data/content";

export default function TechWall() {
  const half = Math.ceil(allTech.length / 2);
  const rowA = allTech.slice(0, half);
  const rowB = allTech.slice(half);

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Tech Stack</div>
          <h2>Tools I reach for</h2>
        </Reveal>
      </div>
      <Reveal as="div" className="techwall">
        <div className="marquee-row row-a">
          {[...rowA, ...rowA].map((t, i) => (
            <span className="tech-chip" key={`${t}-a-${i}`}>
              {t}
            </span>
          ))}
        </div>
        <div className="marquee-row row-b">
          {[...rowB, ...rowB].map((t, i) => (
            <span className="tech-chip" key={`${t}-b-${i}`}>
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
