import { useEffect } from "react";
import "../resume.css";
const PDF = "/assets/resume.pdf";
export default function Resume() {
  useEffect(() => {
    document.title = "Resume | Aswin CS";
  }, []);
  return (
    <main className="resume-page">
      <div className="resume-top">
        <a className="back-link" href="/">
          ← cd ~/portfolio
        </a>
        <div className="resume-actions">
          <a
            className="btn"
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Fullscreen ↗
          </a>
          <a className="btn primary" href={PDF} download>
            Download Resume ↓
          </a>
        </div>
      </div>
      <div className="resume-heading">
        <div className="eyebrow">06 / RESUME</div>
        <h1>
          MY <span>RESUME</span>
        </h1>
        <p>
          Cybersecurity-focused profile covering technical skills, projects,
          education and hands-on security learning.
        </p>
      </div>
      <section className="resume-terminal">
        <div className="resume-terminal-head">
          <div className="terminal-lights">
            <i />
            <i />
            <i />
          </div>
          <div className="terminal-path">~/aswin/resume.pdf</div>
          <div className="eyebrow">
            <span className="dot" /> Online
          </div>
        </div>
        <div className="resume-viewer">
          <iframe
            src={`${PDF}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Aswin CS Resume"
          />
        </div>
      </section>
      <div className="resume-command">
        <div className="command">
          <span>$</span> cat resume.pdf
        </div>
        <div className="status">document_loaded = true</div>
      </div>
    </main>
  );
}
