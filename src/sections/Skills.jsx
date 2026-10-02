import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import { skillCards, toolRows } from "../data";
export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead num="03" label="SKILLS" title="Skills & Expertise" sub="A practical toolkit focused on cybersecurity fundamentals." />
      <div className="skill-grid">
        {skillCards.map(([n, t, d, tags]) => (
          <Reveal className="skill-card" key={n}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p>
            <div className="chips">{tags.map((x) => <span key={x}>{x}</span>)}</div></Reveal>
        ))}
      </div>
      <Reveal className="terminal wide" style={{ marginTop: 40 }}>
        <div className="term-body">
          <p className="green">$ cat tools</p>
          {toolRows.map(([k, v]) => (
            <div className="tool-row" key={k}><b>{k.toUpperCase()}</b>{v.map((x, i) => <span key={i}>{x}</span>)}</div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
