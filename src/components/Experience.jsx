import Reveal from "./Reveal";
import { experienceData } from "../data/content";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Experience</div>
          <h2>5+ years, five companies, one throughline</h2>
          <p>Shipping full-stack products end to end — from PHP/MySQL systems to AI-powered MERN platforms.</p>
        </Reveal>
        <div className="timeline">
          {experienceData.map((exp) => (
            <Reveal as="div" key={exp.company + exp.period} className="tl-item">
              <div className="tl-dot" />
              <div className="tl-card glass">
                <div className="tl-head">
                  <h3>{exp.role}</h3>
                  <div className="tl-period">{exp.period}</div>
                </div>
                <div className="tl-company">{exp.company}</div>
                <div className="tl-loc">{exp.location}</div>
                <ul className="tl-bullets">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="tl-tags">
                  {exp.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
