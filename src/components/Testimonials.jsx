import Reveal from "./Reveal";
import { ChatIcon } from "./icons";

const placeholders = [
  "Manager testimonial — add a quote here",
  "Teammate testimonial — add a quote here",
  "Client testimonial — add a quote here"
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Testimonials</div>
          <h2>What people say</h2>
          <p>Reserved for feedback from managers, teammates, and clients — easy to fill in as it comes.</p>
        </Reveal>
        <div className="testi-grid">
          {placeholders.map((text, idx) => (
            <Reveal key={text} delay={idx * 80} className="testi-card glass">
              <ChatIcon />
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
