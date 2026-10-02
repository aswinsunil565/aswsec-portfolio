import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import Stat from "../components/Stat";
import { stats, aboutTags } from "../data";
export default function About() {
  return (
    <section id="about" className="section">
      <SectionHead num="01" label="ABOUT" title="Building Secure Systems" />
      <Reveal className="about-grid">
        <div className="about-copy">
          <h3>Cybersecurity learner &amp; builder</h3>
          <p>I'm Aswin CS, a BTech Computer Science graduate building practical skills in network security, penetration testing, vulnerability assessment and web application security.</p>
          <p>Let's build things that break, and then secure them better.</p>
          <div className="tags">{aboutTags.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
        <div className="stats">{stats.map(([n, l, s]) => <Stat key={l} n={n} label={l} sub={s} />)}</div>
      </Reveal>
    </section>
  );
}
