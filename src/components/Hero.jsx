import HeroCanvas from "./HeroCanvas";
import RoleRotator from "./RoleRotator";
import useMagnetic from "../hooks/useMagnetic";
import { profile } from "../data/content";
import { EmailIcon, LinkedInIcon, GithubIcon, DownloadIcon } from "./icons";

const heroStats = [
  { target: "5+", label: "Years Experience" },
  { target: "50K+", label: "Daily API Requests" },
  { target: "99.5%", label: "Uptime Delivered" },
  { target: "80%+", label: "Test Coverage" }
];

export default function Hero() {
  const resumeRef = useMagnetic();
  const contactRef = useMagnetic();

  return (
    <section className="hero" id="top">
      <HeroCanvas />
      <div className="container">
        <div className="hero-content">
          <div className="hero-loc">BENGALURU, INDIA — OPEN TO REMOTE OPPORTUNITIES</div>
          <h1>
            {profile.name}
            <br />
            <span className="grad">Full-Stack MERN Developer</span>
          </h1>
          <RoleRotator />
          <p className="lede">
            I design and ship end-to-end products — pixel-perfect React front ends, resilient
            Node.js/Express APIs, and MongoDB systems built to scale. Over 5+ years I&apos;ve
            shipped AI-integrated platforms serving 10,000+ users, blending clean full-stack
            engineering with hands-on agentic AI and LLM integration.
          </p>
          <div className="cta-row">
            <a
              ref={resumeRef}
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <DownloadIcon width={16} height={16} />
              Download Resume
            </a>
            <a ref={contactRef} href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>
          <div className="social-row">
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <EmailIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
          </div>
          <div className="hero-stats">
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.target}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>SCROLL</span>
        <div className="line" />
      </div>
    </section>
  );
}
