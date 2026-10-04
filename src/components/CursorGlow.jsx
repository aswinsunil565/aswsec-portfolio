import { useEffect, useRef } from "react";
export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const m = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    addEventListener("pointermove", m);
    return () => removeEventListener("pointermove", m);
  }, []);
  return <div className="cursor-glow" ref={ref} />;
}
