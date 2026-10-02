import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import { education } from "../data";
export default function Education() {
  return (
    <section id="education" className="section alt">
      <SectionHead num="02" label="EDUCATION" title="Academic Journey" />
      <Reveal className="timeline">
        {education.map(([d, t, s, l]) => (
          <div className="timeline-item" key={t}><span className="year">{d}</span>
            <div><h3>{t}</h3><p>{s}</p><small>{l}</small></div></div>
        ))}
      </Reveal>
    </section>
  );
}
