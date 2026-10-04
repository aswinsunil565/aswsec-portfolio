import { useState } from "react";
import SectionHead from "../components/SectionHead";
import { projects, filters } from "../data";
export default function Projects() {
  const [f, setF] = useState("all");
  return (
    <section id="projects" className="section">
      <SectionHead
        num="04"
        label="PROJECTS"
        title="Featured Projects"
        sub="Security-focused projects built while learning by doing."
      />
      <div className="filters">
        {filters.map(([k, l]) => (
          <button
            key={k}
            className={f === k ? "active" : ""}
            onClick={() => setF(k)}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects
          .filter((p) => f === "all" || p.cat.includes(f))
          .map((p) => (
            <article className="project" key={p.n}>
              <div className="project-top">
                <span>{p.n}</span>
                <span>{p.type}</span>
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="project-tech">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 22 }}
              >
                {p.link}
              </a>
            </article>
          ))}
      </div>
    </section>
  );
}
