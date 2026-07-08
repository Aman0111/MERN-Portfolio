import { useState } from "react";
import Reveal from "./Reveal";
import useMagnetic from "../hooks/useMagnetic";
import { useToast } from "../context/ToastContext";
import { API_BASE } from "../config";
import { profile } from "../data/content";
import { EmailIcon, PhoneIcon, LocationIcon, LinkedInIcon, GithubIcon } from "./icons";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const showToast = useToast();
  const submitRef = useMagnetic();

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in every field.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
      showToast("Message sent! Check your inbox for a confirmation email.");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 2500);
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please email me directly instead.");
      showToast("Couldn't send your message — please try again.", { error: true });
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Contact</div>
          <h2>Let&apos;s build something</h2>
          <p>Open to full-stack and AI-integration roles. Reach out directly or use the form.</p>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-info-card glass">
            <div className="ci-row">
              <div className="ci-icon">
                <EmailIcon />
              </div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-value">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">
                <PhoneIcon />
              </div>
              <div>
                <div className="ci-label">Phone</div>
                <div className="ci-value">{profile.phone}</div>
              </div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">
                <LocationIcon />
              </div>
              <div>
                <div className="ci-label">Location</div>
                <div className="ci-value">{profile.location}</div>
              </div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">
                <LinkedInIcon />
              </div>
              <div>
                <div className="ci-label">LinkedIn</div>
                <div className="ci-value">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/aman-dixit-1a999117a
                  </a>
                </div>
              </div>
            </div>
            <div className="ci-row">
              <div className="ci-icon">
                <GithubIcon />
              </div>
              <div>
                <div className="ci-label">GitHub</div>
                <div className="ci-value">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    github.com/Aman0111
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} as="div" className="contact-form-wrap">
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <div className="field">
                <input
                  type="text"
                  id="cf-name"
                  name="name"
                  placeholder=" "
                  value={form.name}
                  onChange={handleChange}
                  className={form.name ? "has-value" : ""}
                  required
                />
                <label htmlFor="cf-name">Your name</label>
              </div>
              <div className="field">
                <input
                  type="email"
                  id="cf-email"
                  name="email"
                  placeholder=" "
                  value={form.email}
                  onChange={handleChange}
                  className={form.email ? "has-value" : ""}
                  required
                />
                <label htmlFor="cf-email">Your email</label>
              </div>
              <div className="field">
                <textarea
                  id="cf-message"
                  name="message"
                  placeholder=" "
                  value={form.message}
                  onChange={handleChange}
                  className={form.message ? "has-value" : ""}
                  required
                />
                <label htmlFor="cf-message">Message</label>
              </div>
              {error && <p className="form-error">{error}</p>}
              <button
                ref={submitRef}
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
              <p className="form-note">
                Sends me an email directly — you&apos;ll get an automatic confirmation too.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
