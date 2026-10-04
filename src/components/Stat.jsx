import { useEffect, useRef, useState } from "react";
export default function Stat({ n, label, sub }) {
  const ref = useRef(null);
  const [x, setX] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let v = 0;
        const t = setInterval(() => {
          v++;
          setX(v);
          if (v >= n) clearInterval(t);
        }, 70);
      },
      { threshold: 0.12 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [n]);
  return (
    <div className="stat" ref={ref}>
      <strong>{x}+</strong>
      <span>{label}</span>
      <small>{sub}</small>
    </div>
  );
}
