import Reveal from "./Reveal";
import Counter from "./Counter";
import { achievementsData, certsData } from "../data/content";
import { CertIcon } from "./icons";

export default function Achievements() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Impact</div>
          <h2>Measurable outcomes</h2>
          <p>Numbers from real production systems, not vanity metrics.</p>
        </Reveal>
        <div className="ach-grid">
          {achievementsData.map((a, idx) => (
            <Reveal key={a.label} delay={(idx % 4) * 80} className="ach-card glass">
              <div className="ach-num">
                <Counter target={a.value} suffix={a.suffix} />
              </div>
              <div className="ach-lbl">{a.label}</div>
            </Reveal>
          ))}
        </div>
        <div className="certs-row">
          {certsData.map((c, idx) => (
            <Reveal key={c.name} delay={idx * 80} className="cert-card glass">
              <div className="cert-icon">
                <CertIcon />
              </div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-detail">{c.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
