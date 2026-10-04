import { useEffect, useRef, useState } from "react";
import { skills, projects } from "../data";
const cmds = {
  help: () => [
    "Commands: help, whoami, about, skills, projects, status, contact, clear",
  ],
  whoami: () => ["aswin-cs"],
  about: () => [
    "BTech CS graduate focused on network security, web security, pentesting and Linux.",
  ],
  skills: () => skills.map(([s, p]) => `${s} (${p}%)`),
  projects: () => projects.map((p) => `• ${p.name} — ${p.status}`),
  status: () => ["Learning..."],
  contact: () => ["aswinsunil565@gmail.com", "github.com/aswinsunil565"],
};
export default function Terminal() {
  const [log, setLog] = useState([
    { c: "", o: ["Type 'help' to see commands."] },
  ]);
  const [v, setV] = useState("");
  const [hist, setHist] = useState([]);
  const [hi, setHi] = useState(-1);
  const end = useRef(null),
    box = useRef(null);
  useEffect(() => {
    if (box.current) box.current.scrollTop = box.current.scrollHeight;
  }, [log]);
  const run = (raw) => {
    const c = raw.trim().toLowerCase();
    if (!c) return;
    setHist([c, ...hist]);
    setHi(-1);
    if (c === "clear") return setLog([]);
    setLog((l) => [
      ...l,
      {
        c: raw,
        o: cmds[c] ? cmds[c]() : [`${c}: command not found. Try 'help'.`],
      },
    ]);
  };
  const key = (e) => {
    if (e.key === "Enter") {
      run(v);
      setV("");
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(hi + 1, hist.length - 1);
      if (hist[i]) {
        setHi(i);
        setV(hist[i]);
      }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = hi - 1;
      setHi(i);
      setV(i >= 0 ? hist[i] : "");
    }
  };
  return (
    <section id="terminal" className="section terminal-section">
      <div className="section-head">
        <h2>Interactive terminal</h2>
        <p>
          Type a command. Try <code>skills</code> or <code>projects</code>.
        </p>
      </div>
      <div className="terminal wide" onClick={() => end.current?.focus()}>
        <div className="term-head">
          <span className="lights">
            <i />
            <i />
            <i />
          </span>
          <span>guest@aswin:~</span>
          <span>●</span>
        </div>
        <div className="term-body shell" ref={box}>
          {log.map((e, i) => (
            <div key={i}>
              {e.c && (
                <p>
                  <span className="green">$</span> {e.c}
                </p>
              )}
              {e.o.map((l, j) => (
                <p key={j} className="out">
                  {l}
                </p>
              ))}
            </div>
          ))}
          <label className="prompt-line">
            <span className="green">$</span>
            <input
              ref={end}
              value={v}
              onChange={(e) => setV(e.target.value)}
              onKeyDown={key}
              aria-label="Terminal input"
              autoComplete="off"
              spellCheck="false"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
