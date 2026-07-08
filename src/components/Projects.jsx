import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/content";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Featured Projects</div>
          <h2>Products shipped, not just prototypes</h2>
          <p>Four platforms built end to end — from architecture to production.</p>
        </Reveal>
        <div className="projects-grid">
          {projectsData.map((p, idx) => (
            <ProjectCard project={p} delay={(idx % 4) * 80} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
