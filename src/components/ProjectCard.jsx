import { useEffect, useRef } from "react";

export default function ProjectCard({ project, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);

    function handleMove(e) {
      if (reduceMotion) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
    }
    function handleLeave() {
      el.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
    }
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      observer.disconnect();
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="project-card glass tilt-card reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="project-top" />
      <div className="project-body">
        <div className="project-role">{project.role}</div>
        <h3>{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <ul className="project-bullets">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a href={project.demo} title="Add your live demo link">
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>
  );
}
