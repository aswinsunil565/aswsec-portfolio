import { Github, Linkedin, Mail } from "lucide-react";
import Typed from "../components/Typed";
const words = ["Cybersecurity Enthusiast", "Security Learner", "Penetration Testing Student", "Network Security Learner"];
export default function Hero() {
  return (
    <section id="top" className="section hero">
      <div>
        <div className="eyebrow"><span className="dot" />Online</div>
        <h1>Hello, I'm<br /><span>Aswin CS</span></h1>
        <h2>I'm a <Typed words={words} /></h2>
        <p>Learning to find vulnerabilities, understand attacks, and build more secure systems.</p>
        <div className="actions">
          <a className="btn primary" href="#projects">View Projects <span>↗</span></a>
          <a className="btn" href="/resume">View Resume</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/aswinsunil565" target="_blank" rel="noreferrer"><Github size={15} />GitHub</a>
          <a href="https://www.linkedin.com/in/aswinsunil/" target="_blank" rel="noreferrer"><Linkedin size={15} />LinkedIn</a>
          <a href="mailto:aswinsunil565@gmail.com"><Mail size={15} />Email</a>
        </div>
      </div>
      <div className="terminal hero-terminal">
        <div className="term-head"><span className="lights"><i /><i /><i /></span><span>~/aswin/security.sh</span><span>●</span></div>
        <div className="term-body">
          <p><span className="green">$</span> whoami</p><p className="out">aswin-cs</p>
          <p><span className="green">$</span> cat mission.txt</p><p className="out">Learn. Break. Secure. Repeat.</p>
          <p><span className="green">$</span> ./status</p><p className="out">Breaking systems ethically to build unbreakable security solutions.</p>
          <p><span className="green">$</span>_</p>
        </div>
      </div>
    </section>
  );
}
