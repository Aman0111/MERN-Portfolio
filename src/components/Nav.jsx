import { useState } from "react";
import { profile } from "../data/content";
import { useToast } from "../context/ToastContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const showToast = useToast();

  return (
    <>
      <header className="site-nav">
        <div className="container nav-row">
          <a href="#top" className="logo">
            <span className="dot" />
            {profile.name}
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={() => showToast("Opening resume in a new tab…")}
          >
            Resume ↓
          </a>
          <button
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <button className="close-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
          ×
        </button>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
