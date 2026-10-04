import { useState } from "react";
import { nav } from "../data";
// base = "" on the home page, "/" on /resume so links return to home sections
export default function Navbar({ base = "" }) {
  const [open, setOpen] = useState(false);
  const items = base ? nav.filter((n) => n !== "Terminal") : nav;
  return (
    <header className="nav">
      <a className="brand" href={base || "#top"}>
        <span className="prompt">&gt;_</span>ASWIN
        <span className="dim">.CS</span>
      </a>
      <button
        className="menu"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
      <nav className={open ? "open" : ""}>
        {items.map((n) => (
          <a
            key={n}
            href={`${base}#${n.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {n}
          </a>
        ))}
      </nav>
    </header>
  );
}
