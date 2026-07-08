import Reveal from "./Reveal";
import Counter from "./Counter";
import { aboutStats, education } from "../data/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-text">
            <div className="eyebrow">About</div>
            <h2 style={{ marginBottom: 20 }}>
              From Gorakhpur to building AI-integrated platforms in Bengaluru
            </h2>
            <p>
              I started as a Software Engineer building PHP/MySQL systems for education clients,
              and over the past 5+ years grew into a Senior Software Engineer leading full-stack
              delivery of AI-powered healthcare platforms on the MERN stack.
            </p>
            <p>
              Along the way I&apos;ve worked across the entire stack — React and React Native on
              the front end, Node.js/Express and Python microservices on the back end, MongoDB and
              MySQL for data — and more recently, agentic AI and LLM integration using RAG and MCP.
              I care about clean code, test coverage, and shipping things that hold up at scale.
            </p>
            <div className="edu">
              {education.map((e) => (
                <div className="edu-item" key={e.degree}>
                  <div>
                    <div className="deg">{e.degree}</div>
                    <div className="school">{e.school}</div>
                  </div>
                  <div className="yr">{e.year}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="stat-grid">
            {aboutStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60} className="stat-card glass">
                <div className="num">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="lbl">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
