import { useEffect, useRef } from "react";
export default function Background() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext("2d");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let W, H, id; const bits = [];
    const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };
    size(); addEventListener("resize", size);
    const spawn = () => bits.push({ x: Math.random() * W, y: -10, v: 0.3 + Math.random() * 0.7, c: Math.random() < 0.5 ? "0" : "1" });
    let n = 0;
    const loop = () => {
      ctx.clearRect(0, 0, W, H); ctx.font = "12px JetBrains Mono, monospace";
      if (++n % 14 === 0 && bits.length < 45) spawn();   // sparse on purpose
      for (let i = bits.length - 1; i >= 0; i--) {
        const b = bits[i]; b.y += b.v; ctx.fillStyle = "rgba(98,255,145,.16)"; ctx.fillText(b.c, b.x, b.y);
        if (b.y > H + 10) bits.splice(i, 1);
      }
      id = requestAnimationFrame(loop);
    };
    loop(); return () => { cancelAnimationFrame(id); removeEventListener("resize", size); };
  }, []);
  return <><div className="grid-bg" /><canvas ref={ref} className="bits" /><div className="scanlines" /></>;
}
