import { profile } from "../data/content";
import { EmailIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-row">
        <div className="footer-note">
          © {new Date().getFullYear()} {profile.name} — Built with React, Node.js, and a lot of coffee.
        </div>
        <div className="social-row">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <EmailIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
