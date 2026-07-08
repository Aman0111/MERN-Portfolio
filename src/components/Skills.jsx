import Reveal from "./Reveal";
import { skillsData } from "../data/content";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Skills</div>
          <h2>Full-stack, end to end</h2>
          <p>Frontend to backend, databases to DevOps, and the AI tooling layered on top of it.</p>
        </Reveal>
        <div className="skills-grid">
          {skillsData.map((cat, idx) => (
            <Reveal key={cat.category} delay={(idx % 4) * 80} className="skill-card glass">
              <h3>{cat.category}</h3>
              <div className="tag-cloud">
                {cat.items.map((item, i) => (
                  <span className="tag" style={{ animationDelay: `${(i * 0.15).toFixed(2)}s` }} key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
