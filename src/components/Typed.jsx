import { useEffect, useState } from "react";
export default function Typed({ words }) {
  const [t, setT] = useState("");
  useEffect(() => {
    let wi = 0, ci = 0, del = false, id;
    const tick = () => {
      const w = words[wi];
      setT(del ? w.slice(0, ci--) : w.slice(0, ci++));
      if (!del && ci > w.length) { del = true; id = setTimeout(tick, 1100); return; }
      if (del && ci < 0) { del = false; wi = (wi + 1) % words.length; ci = 0; }
      id = setTimeout(tick, del ? 45 : 75);
    };
    tick(); return () => clearTimeout(id);
  }, [words]);
  return <><span>{t}</span><span className="caret">_</span></>;
}
